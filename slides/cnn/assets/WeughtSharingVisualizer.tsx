"use client";

import React from "react";

// 參數設定
const GRID_SIZE = 6;
const CELL_SIZE = 35;
const LAYER_GAP = 25; // 3D 高度間距

// 模擬圖片前方面板的數值 (6x6)
const frontMatrix = [
  [1, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0],
];

export default function WeightSharingVisualizer() {
  // 繪製 3D 張量的單層結構
  const TensorLayer = ({
    zIndex,
    color,
    isFront = false,
  }: {
    zIndex: number;
    color: string;
    isFront?: boolean;
  }) => (
    <div
      style={{
        position: "absolute",
        width: GRID_SIZE * CELL_SIZE,
        height: GRID_SIZE * CELL_SIZE,
        display: "grid",
        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        transform: `translateZ(${zIndex}px)`,
        border: `2px solid ${color}80`,
        backgroundColor: `${color}20`,
      }}
    >
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;
        const val = frontMatrix[row][col];
        return (
          <div
            key={i}
            style={{
              border: `1px solid ${color}50`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              color: isFront
                ? val === 1
                  ? "#3b82f6"
                  : "#6b7280"
                : "transparent",
            }}
          >
            {isFront ? val : ""}
          </div>
        );
      })}
    </div>
  );

  // 繪製神經元與輸入權重連線的 SVG 元件
  const NeuronDiagram = ({
    yOffset,
    isPrime,
  }: {
    yOffset: number;
    isPrime: boolean;
  }) => {
    const labelX1 = isPrime ? "x'₁" : "x₁";
    const labelX2 = isPrime ? "x'₂" : "x₂";
    const equation = `σ(w₁${labelX1} + w₂${labelX2} + ⋯)`;

    return (
      <g transform={`translate(0, ${yOffset})`}>
        {/* 展平的輸入特徵 (Flattened Inputs) */}
        <rect x="0" y="0" width="24" height="24" fill="#93c5fd" rx="4" />
        <text x="-25" y="17" fill="#e2e8f0" fontSize="16">
          {labelX1}
        </text>

        <rect x="0" y="28" width="24" height="24" fill="#93c5fd" rx="4" />
        <text x="-25" y="45" fill="#e2e8f0" fontSize="16">
          {labelX2}
        </text>

        <text x="8" y="75" fill="#e2e8f0" fontSize="16">
          ⋮
        </text>

        <rect
          x="0"
          y="85"
          width="24"
          height="24"
          fill="#93c5fd"
          rx="4"
          opacity={0.6}
        />
        <rect
          x="0"
          y="113"
          width="24"
          height="24"
          fill="#fdba74"
          rx="4"
          opacity={0.6}
        />
        <text x="8" y="160" fill="#e2e8f0" fontSize="16">
          ⋮
        </text>

        {/* 權重連線 (展現參數共享：顏色相同代表權重 w 相同) */}
        <line
          x1="24"
          y1="12"
          x2="160"
          y2="70"
          stroke="#ef4444"
          strokeWidth="2.5"
        />
        <text x="90" y="30" fill="#ef4444" fontSize="16" fontWeight="bold">
          w₁
        </text>

        <line
          x1="24"
          y1="40"
          x2="160"
          y2="70"
          stroke="#eab308"
          strokeWidth="2.5"
        />
        <text x="80" y="60" fill="#eab308" fontSize="16" fontWeight="bold">
          w₂
        </text>

        <line
          x1="24"
          y1="97"
          x2="160"
          y2="70"
          stroke="#10b981"
          strokeWidth="2"
          opacity={0.6}
        />
        <line
          x1="24"
          y1="125"
          x2="160"
          y2="70"
          stroke="#8b5cf6"
          strokeWidth="2"
          opacity={0.6}
        />

        {/* 神經元節點與 Activation 符號 */}
        <circle
          cx="160"
          cy="70"
          r="22"
          fill="#3b82f6"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <path
          d="M 148 80 Q 160 80, 160 70 T 172 60"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
        />

        {/* Bias 輸入 */}
        <line
          x1="160"
          y1="120"
          x2="160"
          y2="92"
          stroke="white"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <rect x="145" y="120" width="30" height="24" fill="#86efac" rx="4" />
        <text x="155" y="137" fill="#064e3b" fontSize="14" fontWeight="bold">
          1
        </text>
        <text x="180" y="110" fill="#e2e8f0" fontSize="14">
          bias
        </text>

        {/* 輸出箭頭與公式 */}
        <line
          x1="182"
          y1="70"
          x2="215"
          y2="70"
          stroke="white"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <text x="225" y="30" fill="white" fontSize="18" fontFamily="serif">
          {equation}
        </text>
      </g>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "550px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#111827",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        fontFamily: "sans-serif",
        padding: "0 20px",
      }}
    >
      {/* 標題與說明文字 */}
      <div style={{ position: "absolute", top: 24, left: 32, zIndex: 10 }}>
        <h3
          style={{
            color: "white",
            fontSize: "28px",
            margin: 0,
            fontWeight: "normal",
          }}
        >
          Simplification 2
        </h3>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 32,
          zIndex: 10,
          maxWidth: "400px",
        }}
      >
        <p
          style={{
            color: "#e2e8f0",
            fontSize: "18px",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Two neurons with the same receptive field would{" "}
          <strong style={{ color: "#ef4444" }}>share parameters</strong>.
        </p>
      </div>

      {/* 左半部：3D 張量與 Receptive Fields */}
      <div
        style={{
          perspective: "1200px",
          width: "300px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
            transformStyle: "preserve-3d",
            transform: "rotateX(55deg) rotateZ(-40deg) scale(0.95)",
          }}
        >
          {/* 三層 Input Channel */}
          <TensorLayer zIndex={0} color="#10b981" /> {/* Back */}
          <TensorLayer zIndex={LAYER_GAP} color="#f97316" /> {/* Middle */}
          <TensorLayer
            zIndex={LAYER_GAP * 2}
            color="#e5e7eb"
            isFront={true}
          />{" "}
          {/* Front */}
          {/* Receptive Field 1 (左上) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 3 * CELL_SIZE,
              height: 3 * CELL_SIZE,
              transformStyle: "preserve-3d",
              transform: "translateZ(0px)",
            }}
          >
            {[0, LAYER_GAP, LAYER_GAP * 2].map((z) => (
              <div
                key={`rf1-${z}`}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  border: "3px solid #ef4444",
                  transform: `translateZ(${z}px)`,
                  boxSizing: "border-box",
                }}
              />
            ))}
          </div>
          {/* Receptive Field 2 (右下) */}
          <div
            style={{
              position: "absolute",
              top: 2 * CELL_SIZE,
              left: 2 * CELL_SIZE,
              width: 3 * CELL_SIZE,
              height: 3 * CELL_SIZE,
              transformStyle: "preserve-3d",
              transform: "translateZ(0px)",
            }}
          >
            {[0, LAYER_GAP, LAYER_GAP * 2].map((z) => (
              <div
                key={`rf2-${z}`}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  border: "3px solid #ef4444",
                  transform: `translateZ(${z}px)`,
                  boxSizing: "border-box",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 視覺引導虛線 (連接左側 3D 與右側 2D) */}
      <div
        style={{
          position: "absolute",
          top: "155px",
          left: "340px",
          width: "700px",
          height: "55px",
          borderTop: "3px dashed #ef4444",
          borderLeft: "3px dashed #ef4444",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "220px",
          left: "430px",
          width: "610px",
          height: "115px",
          borderLeft: "3px dashed #ef4444",
          borderBottom: "3px dashed #ef4444",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />

      {/* 右半部：神經元連線圖 (使用 SVG 確保線條精準) */}
      <div
        style={{
          width: "450px",
          height: "400px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 450 400">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
            </marker>
          </defs>

          {/* 上方神經元 (對應 RF1) */}
          <NeuronDiagram yOffset={40} isPrime={false} />

          {/* 下方神經元 (對應 RF2) */}
          <NeuronDiagram yOffset={220} isPrime={true} />
        </svg>
      </div>
    </div>
  );
}
