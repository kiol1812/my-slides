"use client";

import React, { useEffect, useMemo, useState } from "react";

/**
 * GraphEvolutionVisualizer — Academic theme
 * ------------------------------------------------------------
 * 動態圖 (Graph) 演進視覺化元件，套用 Academic 簡報主題：
 * 白底、深藍主文字、灰藍/灰調輔色、Helvetica Neue、
 * 強結構化的表格與邊框，動態效果「Instant & Functional」。
 *
 * - 每一層 (layer) 是一張 2D 透明圖：由 node + edge 構成
 * - 層與層之間仍用 3D 堆疊 (translateZ) 排列，維持空間層次感，
 *   但每一層本身是扁平的 2D 圖（SVG），不是立體網格
 * - 目前展示中的那一層會「高亮」（實線邊框、面板底色），
 *   其餘層退到背景（低透明度、去飽和）
 * - 鄰接矩陣現在是「有方向」的：matrix[i][j] > 0 代表一條從 i 指向 j 的邊，
 *   用箭頭表示方向；matrix[i][j] 與 matrix[j][i] 同時存在時會畫成兩條
 *   分開彎曲的邊（雙向）；對角線 matrix[i][i] > 0 會畫成 self-connection 迴圈
 * - 每一個節點、每一條邊都可以單獨指定顏色（node.color / edgeColors 矩陣），
 *   沒指定時 fallback 回該層的預設色
 * - 擴展性：新增一層只需要提供一個「鄰接矩陣 (adjacency matrix)」，
 *   節點數量、位置、顏色都可以自動產生或自訂，層數沒有上限
 *
 * 使用方式：
 *   <GraphEvolutionVisualizer layers={myLayers} />
 * 不傳 layers 時會用內建的 demoLayers 示範。
 */

// ---------- Academic 主題色票 ----------

const THEME = {
  bg: "#FFFFFF",
  text: "#0a2f41",
  accent: "#7c9fa8",
  surface: "#ccd2d8",
  panel: "#EAECEF",
  border: "#DEE2E6",
  muted: "#6C757D",
  subtle: "rgba(0,0,0,0.5)",
  onAccent: "#a1718b",
};

const FONT_FAMILY = '"Helvetica Neue", Helvetica, Arial, sans-serif';

// ---------- 型別定義 ----------

export type GraphNode = {
  id: string;
  label?: string;
  /** 0-100 的正規化座標，不提供時會自動用圓形佈局計算 */
  x?: number;
  y?: number;
  /** 單獨覆蓋這一個節點的顏色，優先序最高 */
  color?: string;
};

export type GraphLayer = {
  /** 該層名稱，顯示在資訊面板與圖例上 */
  label: string;
  /** 該層的主題色（邊框、預設節點/邊顏色的 fallback） */
  color: string;
  /**
   * 有方向的鄰接矩陣：N x N，matrix[i][j] > 0 代表一條從節點 i 指向節點 j 的邊
   * （數值可作為權重）。matrix[i][i] > 0 代表節點 i 的 self-connection。
   * matrix[i][j] 與 matrix[j][i] 都 > 0 時會畫成兩條方向相反、分開彎曲的邊。
   */
  adjacency: number[][];
  /** 節點資料，可省略（會自動依鄰接矩陣大小產生圓形佈局） */
  nodes?: GraphNode[];
  /** 覆蓋所有節點的預設顏色（優先序低於單一節點的 node.color） */
  nodeColor?: string;
  /** 覆蓋所有邊的預設顏色（優先序低於 edgeColors 矩陣） */
  edgeColor?: string;
  /**
   * 單獨覆蓋某一條邊的顏色，形狀對應 adjacency（edgeColors[i][j] 對應
   * matrix[i][j] 那條邊）。只需要在想覆蓋的位置填顏色，其餘留空即可。
   */
  edgeColors?: (string | null | undefined)[][];
};

type Props = {
  /** 要展示的圖層序列，數量不限 */
  layers?: GraphLayer[];
  /** 每一層停留的時間（毫秒） */
  intervalMs?: number;
  /** 非當前層的透明度 (0-1) */
  dimmedOpacity?: number;
  /** 是否自動播放（可用面板上的按鈕切換） */
  autoPlay?: boolean;
};

type ResolvedNode = Required<GraphNode>;

type ResolvedEdge = {
  key: string;
  from: number;
  to: number;
  weight: number;
  color: string;
  isSelf: boolean;
  /** 對向的邊（j→i）是否也存在；存在時要彎曲分開，避免與它重疊 */
  reciprocal: boolean;
};

// ---------- 工具函式：佈局 ----------

/** 在圓上均勻擺放 n 個節點，回傳 0-100 的正規化座標 */
function circleLayout(n: number): { x: number; y: number }[] {
  const cx = 50;
  const cy = 50;
  const r = 36;
  if (n <= 1) return [{ x: cx, y: cy }];
  return Array.from({ length: n }).map((_, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

/** 補齊節點資料：沒提供 nodes 時，依鄰接矩陣大小自動做圓形佈局 */
function resolveNodes(layer: GraphLayer): ResolvedNode[] {
  const n = layer.adjacency.length;
  const positions = circleLayout(n);
  return Array.from({ length: n }).map((_, i) => {
    const provided = layer.nodes?.[i];
    return {
      id: provided?.id ?? `n${i}`,
      label: provided?.label ?? provided?.id ?? String(i),
      x: provided?.x ?? positions[i].x,
      y: provided?.y ?? positions[i].y,
      // 優先序：單一節點顏色 > 該層 nodeColor > 該層主題色
      color: provided?.color ?? layer.nodeColor ?? layer.color,
    };
  });
}

/** 從有方向的鄰接矩陣取出邊列表（含 self-connection 與雙向邊偵測） */
function resolveEdges(layer: GraphLayer): ResolvedEdge[] {
  const m = layer.adjacency;
  const edges: ResolvedEdge[] = [];
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] > 0) {
        edges.push({
          key: `${i}-${j}`,
          from: i,
          to: j,
          weight: m[i][j],
          // 優先序：單一邊顏色 > 該層 edgeColor > 該層主題色
          color: layer.edgeColors?.[i]?.[j] ?? layer.edgeColor ?? layer.color,
          isSelf: i === j,
          reciprocal: i !== j && m[j]?.[i] > 0,
        });
      }
    }
  }
  return edges;
}

// ---------- 工具函式：方向邊與箭頭幾何 ----------

type Point = { x: number; y: number };

function unitVec(dx: number, dy: number): Point {
  const len = Math.hypot(dx, dy) || 1;
  return { x: dx / len, y: dy / len };
}

/** 產生箭頭三角形的 points 字串，tip 為箭頭尖端，angle 為前進方向（弧度） */
function arrowPolygonPoints(
  tip: Point,
  angle: number,
  len: number,
  width: number,
) {
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const px = -dy;
  const py = dx;
  const backX = tip.x - dx * len;
  const backY = tip.y - dy * len;
  const p1 = { x: backX + (px * width) / 2, y: backY + (py * width) / 2 };
  const p2 = { x: backX - (px * width) / 2, y: backY - (py * width) / 2 };
  return `${tip.x},${tip.y} ${p1.x},${p1.y} ${p2.x},${p2.y}`;
}

/** 兩個不同節點之間的有向邊幾何：直線（單向）或二次貝茲曲線（雙向時分開彎） */
function directedEdgeGeometry(
  a: Point,
  b: Point,
  nodeR: number,
  curved: boolean,
  curveOffset = 6,
) {
  const ux0 = unitVec(b.x - a.x, b.y - a.y);

  if (!curved) {
    const start = { x: a.x + ux0.x * nodeR, y: a.y + ux0.y * nodeR };
    const end = { x: b.x - ux0.x * nodeR, y: b.y - ux0.y * nodeR };
    return {
      d: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
      tip: end,
      angle: Math.atan2(ux0.y, ux0.x),
    };
  }

  // 雙向時：控制點往垂直方向偏移。偏移方向由 (a→b) 的方向決定，
  // 所以 a→b 與 b→a 兩條邊會自然分別彎向相反側，不會疊在一起。
  const midx = (a.x + b.x) / 2;
  const midy = (a.y + b.y) / 2;
  const px = -ux0.y;
  const py = ux0.x;
  const control = { x: midx + px * curveOffset, y: midy + py * curveOffset };

  const startDir = unitVec(control.x - a.x, control.y - a.y);
  const start = { x: a.x + startDir.x * nodeR, y: a.y + startDir.y * nodeR };
  const endDir = unitVec(b.x - control.x, b.y - control.y);
  const end = { x: b.x - endDir.x * nodeR, y: b.y - endDir.y * nodeR };

  return {
    d: `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`,
    tip: end,
    angle: Math.atan2(endDir.y, endDir.x),
  };
}

/** self-connection：畫在節點正上方的小迴圈，箭頭指回節點本身 */
function selfLoopGeometry(node: Point, nodeR: number, loopR = 3) {
  const loopCenter = { x: node.x, y: node.y - nodeR - loopR };
  const tangent = { x: node.x, y: node.y - nodeR };
  return {
    circle: { cx: loopCenter.x, cy: loopCenter.y, r: loopR },
    tip: tangent,
    angle: Math.PI / 2, // 箭頭朝下、指回節點
  };
}

// ---------- 單層的 2D 透明圖 ----------

const LayerPlane = ({
  layer,
  zIndex,
  active,
  dimmedOpacity,
}: {
  layer: GraphLayer;
  zIndex: number;
  active: boolean;
  dimmedOpacity: number;
}) => {
  const nodes = useMemo(() => resolveNodes(layer), [layer]);
  const edges = useMemo(() => resolveEdges(layer), [layer]);
  const nodeR = active ? 3.4 : 2.8;
  const arrowLen = active ? 2.2 : 1.8;
  const arrowWidth = active ? 1.7 : 1.4;
  const strokeOpacity = active ? 0.9 : 0.5;
  const strokeWidth = active ? 0.9 : 0.6;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: `translateZ(${zIndex}px)`,
        opacity: active ? 1 : dimmedOpacity,
        transition: "opacity 0.3s ease",
        filter: active ? "none" : "saturate(0.4)",
      }}
    >
      {/* 底板：靜態面板色 + 該層主題色邊框，高亮時邊框加粗，不用發光效果 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: `${active ? 2 : 1}px solid ${layer.color}`,
          backgroundColor: active ? THEME.panel : THEME.bg,
          transition: "background-color 0.3s ease, border-width 0.2s ease",
        }}
      />
      <svg
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {edges.map((e) => {
          if (e.isSelf) {
            const { circle, tip, angle } = selfLoopGeometry(
              nodes[e.from],
              nodeR,
            );
            return (
              <g key={e.key}>
                <circle
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="none"
                  stroke={e.color}
                  strokeWidth={strokeWidth}
                  strokeOpacity={strokeOpacity}
                />
                <polygon
                  points={arrowPolygonPoints(tip, angle, arrowLen, arrowWidth)}
                  fill={e.color}
                  fillOpacity={strokeOpacity}
                />
              </g>
            );
          }

          const { d, tip, angle } = directedEdgeGeometry(
            nodes[e.from],
            nodes[e.to],
            nodeR,
            e.reciprocal,
          );
          return (
            <g key={e.key}>
              <path
                d={d}
                fill="none"
                stroke={e.color}
                strokeWidth={strokeWidth}
                strokeOpacity={strokeOpacity}
              />
              <polygon
                points={arrowPolygonPoints(tip, angle, arrowLen, arrowWidth)}
                fill={e.color}
                fillOpacity={strokeOpacity}
              />
            </g>
          );
        })}
        {nodes.map((n) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={nodeR}
            fill={n.color}
            stroke={THEME.bg}
            strokeWidth={1}
          />
        ))}
      </svg>
      {/* 節點文字標籤，用 HTML 疊加避免隨 SVG viewBox 縮放變形 */}
      {nodes.map((n) => (
        <span
          key={n.id}
          style={{
            position: "absolute",
            left: `${n.x}%`,
            top: `${n.y}%`,
            transform: "translate(-50%, -170%)",
            fontFamily: FONT_FAMILY,
            fontSize: 11,
            fontWeight: 500,
            color: THEME.text,
            opacity: active ? 1 : 0,
            transition: "opacity 0.2s ease",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {n.label}
        </span>
      ))}
      <span
        style={{
          position: "absolute",
          bottom: -24,
          right: 0,
          fontFamily: FONT_FAMILY,
          color: layer.color,
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        {layer.label}
      </span>
    </div>
  );
};

// ---------- 資訊面板：套用 Academic Table 的黑線表格風格 ----------

const InfoRow = ({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: React.ReactNode;
  valueColor?: string;
}) => (
  <tr>
    <td
      style={{
        padding: "6px 16px 6px 0",
        color: THEME.muted,
        fontWeight: 400,
        textAlign: "left",
      }}
    >
      {label}
    </td>
    <td
      style={{
        padding: "6px 0",
        color: valueColor ?? THEME.text,
        fontWeight: 700,
        textAlign: "right",
      }}
    >
      {value}
    </td>
  </tr>
);

// ---------- 主元件 ----------

export default function GraphEvolutionVisualizer({
  layers = demoLayers,
  intervalMs = 1400,
  dimmedOpacity = 0.18,
  autoPlay = true,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const LAYER_GAP = 26;

  useEffect(() => {
    if (!playing || layers.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % layers.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [playing, intervalMs, layers.length]);

  // 圖層若在外部被替換（例如切換簡報頁），確保 index 不會超出範圍
  useEffect(() => {
    if (activeIndex >= layers.length) setActiveIndex(0);
  }, [layers.length, activeIndex]);

  const active = layers[activeIndex];
  const activeNodeCount = active?.adjacency.length ?? 0;
  const activeEdgeCount = active ? resolveEdges(active).length : 0;

  return (
    <div
      style={{
        width: "100%",
        height: "480px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: THEME.bg,
        border: `1px solid ${THEME.border}`,
        overflow: "hidden",
        position: "relative",
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* 內建一次性的 Academic 淡入 keyframes，切層時輕微提示，符合
          「Instant & Functional」的動態哲學（不用誇張轉場） */}
      <style>{`
        @keyframes ac-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .ac-fadeIn {
          animation: ac-fadeIn 0.3s ease forwards;
        }
      `}</style>

      {/* 資訊面板：黑線表格風格，對齊 Academic Table 的規格表視覺 */}
      <div style={{ position: "absolute", top: 24, left: 24, zIndex: 10 }}>
        <table
          style={{
            borderCollapse: "collapse",
            fontFamily: FONT_FAMILY,
            fontSize: 15,
            borderTop: `2px solid ${THEME.text}`,
            borderBottom: `2px solid ${THEME.text}`,
          }}
        >
          <tbody>
            <InfoRow label="Layers" value={layers.length} />
            <InfoRow
              key={activeIndex}
              label="Current"
              value={<span className="ac-fadeIn">{active?.label}</span>}
              valueColor={active?.color}
            />
            <InfoRow label="Nodes" value={activeNodeCount} />
            <InfoRow label="Edges" value={activeEdgeCount} />
            <InfoRow
              label="Step"
              value={`${activeIndex + 1} / ${layers.length}`}
            />
          </tbody>
        </table>
      </div>

      {/* 播放控制 + 圖層選點（簡報現場可手動點擊切換） */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setPlaying((p) => !p)}
          style={{
            fontFamily: FONT_FAMILY,
            background: THEME.bg,
            border: `1px solid ${THEME.muted}`,
            color: THEME.text,
            padding: "4px 12px",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
        {layers.map((l, i) => (
          <button
            key={l.label}
            onClick={() => setActiveIndex(i)}
            title={l.label}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: `2px solid ${l.color}`,
              backgroundColor: i === activeIndex ? l.color : THEME.bg,
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* 3D 場景容器：層與層之間仍用透視堆疊，內容改為 2D 圖 */}
      <div
        style={{
          perspective: 1200,
          width: 420,
          height: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 340,
            height: 340,
            transformStyle: "preserve-3d",
            transform: "rotateX(55deg) rotateZ(-40deg) scale(0.95)",
          }}
        >
          {layers.map((layer, i) => (
            <LayerPlane
              key={layer.label}
              layer={layer}
              zIndex={i * LAYER_GAP}
              active={i === activeIndex}
              dimmedOpacity={dimmedOpacity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- 範例資料 ----------
// 示範重點：
// 1) matrix[i][j] 是有方向的 → 0→1 這種只填單邊的會畫成單向箭頭
// 2) matrix[i][j] 與 matrix[j][i] 同時存在 → 畫成兩條分開彎曲的雙向箭頭
// 3) 對角線 matrix[i][i] → self-connection 迴圈
// 4) nodes[2].color 覆蓋單一節點顏色；edgeColors[0][1] 覆蓋單一邊顏色
// 5) 顏色沿用 Academic 主題色票，維持整體一致

export const demoLayers: GraphLayer[] = [
  {
    label: "t=0 初始圖（單向 + self-loop）",
    color: THEME.text, // #0a2f41 深藍
    adjacency: [
      [1, 1, 0, 0, 0], // 0 → 0 (self) , 0 → 1
      [0, 0, 1, 0, 0], // 1 → 2
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    nodes: [
      { id: "0" },
      { id: "1" },
      { id: "2", color: THEME.onAccent }, // 單獨覆蓋節點 2 的顏色
      { id: "3" },
      { id: "4" },
    ],
    edgeColors: [
      [undefined, "#0056B3"], // 單獨覆蓋 0→1 這條邊的顏色
    ],
  },
  {
    label: "t=1 出現雙向連結",
    color: THEME.accent, // #7c9fa8 灰藍
    adjacency: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0], // 1 → 0，與上一行 0 → 1 形成雙向、自動分開彎曲
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  {
    label: "t=2 連結更密集",
    color: "#0056B3", // 呼應 Academic 混淆矩陣的資料藍
    adjacency: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
    ],
  },
  {
    label: "t=3 幾乎全連結",
    color: THEME.onAccent, // #a1718b mauve
    adjacency: [
      [0, 1, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 1, 1, 1, 0],
    ],
  },
  {
    label: "t=4 擴展到 7 節點",
    color: THEME.muted, // #6C757D 中性灰
    // 這一層就是「擴展性」的示範：矩陣變大、層數增加，元件邏輯完全不用改
    adjacency: [
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
    ],
  },
];
