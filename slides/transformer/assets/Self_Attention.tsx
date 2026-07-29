import { Position, MarkerType } from "@xyflow/react";
import { MathInline } from "../../../components/shared/math";

// --- 左側 Y 軸 ---
const line1_y = 25;
const line2_y = 150;
const line3_y = 275;
const line4_y = 400;

// --- 右側 Y 軸 ---
const right_line4_y = 480; // a_i 保持與左邊底部對齊
const right_line3_y = 320; // q, k, v 的高度
const right_line2_y = 160; // alpha, 乘號 的高度
const right_line1_y = 0; // b1 的高度 (React flow 自動適應負座標)

// --- X 軸設計 ---
const col1_x = 50;
const padding_x = 100;

const col2_x = 650; // 右側整體起點
const padding_x2 = 220; // 右側各組的間距
const group_offset = 75; // 右側 q, k, v 的展開寬度

// 封裝共用的連線樣式
const createEdge = (source: string, target: string) => ({
  id: `e${source}-${target}`,
  source,
  target,
  animated: true,
  style: { stroke: "#7c9fa8", strokeWidth: 3 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: "#7c9fa8",
  },
});

const generateSelfAttentionFlow = () => {
  const nodes = [];
  const edges = [];

  // ==========================================
  // 左側 (NLP 詞彙與架構): "I", "saw", "a", "saw"
  // ==========================================
  const words = ["I", "saw", "a", "saw"];
  const posTags = ["N", "V", "DET", "N"];

  // 背景與標籤節點
  nodes.push(
    {
      id: "2-0",
      type: "custom",
      position: { x: col1_x, y: line3_y },
      data: {
        label: <span>Self-Attention</span>,
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        width: "360px",
        erase_bg: true,
      },
    },
    {
      id: "5",
      type: "custom",
      position: { x: col2_x - padding_x, y: right_line2_y - 10 },
      data: {
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        width: "900px",
        height: "330px",
        erase_bg: true,
      },
    },
  );

  // 產生左邊 4 個詞的架構
  words.forEach((word, i) => {
    const id_suffix = i === 0 ? "" : `-${i + 1}`;
    const x_pos = col1_x + padding_x * i;

    nodes.push({
      id: `1${id_suffix}`,
      type: "custom",
      position: { x: x_pos, y: line4_y },
      data: {
        label: <span>{word}</span>,
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        width: "50px",
      },
    });

    nodes.push({
      id: `2${id_suffix}`,
      type: "custom",
      position: { x: x_pos, y: line3_y },
      data: {
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        erase_bg: true,
        erase_border: true,
        width: "50px",
      },
    });

    nodes.push({
      id: `3${id_suffix}`,
      type: "custom",
      position: { x: x_pos, y: line2_y },
      data: {
        label: <span>FC</span>,
        highlight: true,
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        width: "50px",
      },
    });

    nodes.push({
      id: `4${id_suffix}`,
      type: "custom",
      position: { x: x_pos, y: line1_y },
      data: {
        label: <span>{posTags[i]}</span>,
        targetPosition: Position.Bottom,
        sourcePosition: Position.Top,
        width: "50px",
      },
    });

    edges.push(
      createEdge(`1${id_suffix}`, `2${id_suffix}`),
      createEdge(`2${id_suffix}`, `3${id_suffix}`),
      createEdge(`3${id_suffix}`, `4${id_suffix}`),
    );
  });

  // ==========================================
  // 右側 (Self-Attention 細部運算 b1)
  // ==========================================

  // b1 輸出節點 (使用 right_line1_y)
  nodes.push({
    id: "9",
    type: "custom",
    position: { x: col2_x, y: right_line1_y },
    data: {
      label: (
        <span>
          <MathInline math="b_1" />
        </span>
      ),
      targetPosition: Position.Bottom,
      sourcePosition: Position.Top,
      width: "50px",
    },
  });

  for (let i = 1; i <= 4; i++) {
    const id_suffix_a = i === 1 ? "" : `-${i}`;
    const x_pos = col2_x + padding_x2 * (i - 1);

    // a_i 輸入節點 (使用 right_line4_y)
    nodes.push({
      id: `6${id_suffix_a}`,
      type: "custom",
      position: { x: x_pos, y: right_line4_y },
      data: {
        label: (
          <span>
            <MathInline math={`a_${i}`} />
          </span>
        ),
        targetPosition: i === 1 ? Position.Bottom : Position.Top,
        sourcePosition: Position.Top,
        width: "50px",
      },
    });

    const id_prefix_qkv = i === 1 ? "7" : `7-${i}`;
    const id_prefix_alpha = i === 1 ? "8" : `8-${i}`;

    // Q, K, V 節點 (使用 right_line3_y)
    if (i === 1) {
      nodes.push(
        {
          id: `${id_prefix_qkv}_1`,
          type: "custom",
          position: { x: x_pos - group_offset, y: right_line3_y },
          data: {
            label: (
              <span>
                <MathInline math="q^1" />
              </span>
            ),
            targetPosition: Position.Bottom,
            sourcePosition: Position.Top,
            width: "50px",
          },
        },
        {
          id: `${id_prefix_qkv}_2`,
          type: "custom",
          position: { x: x_pos, y: right_line3_y },
          data: {
            label: (
              <span>
                <MathInline math="k^1" />
              </span>
            ),
            targetPosition: Position.Bottom,
            sourcePosition: Position.Top,
            width: "50px",
          },
        },
        {
          id: `${id_prefix_qkv}_3`,
          type: "custom",
          position: { x: x_pos + group_offset, y: right_line3_y },
          data: {
            label: (
              <span>
                <MathInline math="v^1" />
              </span>
            ),
            targetPosition: Position.Bottom,
            sourcePosition: Position.Top,
            width: "50px",
          },
        },
      );
      edges.push(
        createEdge(`6${id_suffix_a}`, `${id_prefix_qkv}_1`),
        createEdge(`6${id_suffix_a}`, `${id_prefix_qkv}_2`),
        createEdge(`6${id_suffix_a}`, `${id_prefix_qkv}_3`),
      );
    } else {
      nodes.push(
        {
          id: `${id_prefix_qkv}_2`,
          type: "custom",
          position: { x: x_pos, y: right_line3_y },
          data: {
            label: (
              <span>
                <MathInline math={`k^${i}`} />
              </span>
            ),
            targetPosition: Position.Bottom,
            sourcePosition: Position.Top,
            width: "50px",
          },
        },
        {
          id: `${id_prefix_qkv}_3`,
          type: "custom",
          position: { x: x_pos + group_offset, y: right_line3_y },
          data: {
            label: (
              <span>
                <MathInline math={`v^${i}`} />
              </span>
            ),
            targetPosition: Position.Bottom,
            sourcePosition: Position.Top,
            width: "50px",
          },
        },
      );
      edges.push(
        createEdge(`6${id_suffix_a}`, `${id_prefix_qkv}_2`),
        createEdge(`6${id_suffix_a}`, `${id_prefix_qkv}_3`),
      );
    }

    // Alpha Score (使用 right_line2_y)
    nodes.push({
      id: `${id_prefix_alpha}_1`,
      type: "custom",
      position: { x: x_pos - group_offset, y: right_line2_y },
      data: {
        label: (
          <span>
            <MathInline math={`a_{1,${i}}'`} />
          </span>
        ),
        targetPosition: Position.Bottom,
        sourcePosition: Position.Right,
        width: "50px",
      },
    });

    // 乘法 ✖ 節點 (使用 right_line2_y)
    nodes.push(
      {
        id: `${id_prefix_alpha}_2`,
        type: "custom",
        position: { x: x_pos + group_offset, y: right_line2_y },
        data: {
          label: (
            <span>
              <MathInline math="\times" />
            </span>
          ),
          targetPosition: Position.Bottom,
          sourcePosition: Position.Top,
          width: "50px",
        },
      },
      {
        id: `${id_prefix_alpha}_2_l`,
        type: "custom",
        position: { x: x_pos + group_offset, y: right_line2_y },
        data: {
          label: (
            <span>
              <MathInline math="\times" />
            </span>
          ),
          targetPosition: Position.Left,
          sourcePosition: Position.Top,
          width: "50px",
        },
      },
    );

    // ==============================================
    // 連接 Attention 核心運算
    // ==============================================
    edges.push(
      createEdge("7_1", `${id_prefix_alpha}_1`),
      createEdge(`${id_prefix_qkv}_2`, `${id_prefix_alpha}_1`),
      createEdge(`${id_prefix_alpha}_1`, `${id_prefix_alpha}_2_l`),
      createEdge(`${id_prefix_qkv}_3`, `${id_prefix_alpha}_2`),
      createEdge(`${id_prefix_alpha}_2`, "9"),
    );
  }

  return { nodes, edges };
};

export const { nodes: self_attention_nodes, edges: self_attention_edges } =
  generateSelfAttentionFlow();
