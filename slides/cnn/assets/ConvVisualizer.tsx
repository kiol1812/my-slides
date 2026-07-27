"use client";

import React, { useState, useEffect } from "react";

// 參數設定
const IMAGE_SIZE = 7;
const PADDING = 1;
const PADDED_SIZE = IMAGE_SIZE + 2 * PADDING;
const KERNEL_SIZE = 3;
const STRIDE = 2;

// 調整單元格大小以適應擴大的 10x10 矩陣
const CELL_SIZE = 32;
const LAYER_GAP = 30; // RGB 三個通道之間的 3D 高度間距

export default function CssConvVisualizer() {
  const [step, setStep] = useState(0);

  // 計算可滑動的步數 (Output Size)
  const stepsPerRow = Math.floor((PADDED_SIZE - KERNEL_SIZE) / STRIDE) + 1;
  const totalSteps = stepsPerRow * stepsPerRow; // 4 * 4 = 16

  useEffect(() => {
    // 稍微放慢一點，讓 Stride 的跳躍感更明顯
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 1000);
    return () => clearInterval(timer);
  }, [totalSteps]);

  // 計算當前行與列
  const currentRow = Math.floor(step / stepsPerRow);
  const currentCol = step % stepsPerRow;

  // 計算感受野目前的 X, Y 座標
  const kernelX = currentCol * STRIDE * CELL_SIZE;
  const kernelY = currentRow * STRIDE * CELL_SIZE;

  const TensorLayer = ({
    zIndex,
    color,
    label,
  }: {
    zIndex: number;
    color: string;
    label: string;
  }) => (
    <div
      style={{
        position: "absolute",
        width: PADDED_SIZE * CELL_SIZE,
        height: PADDED_SIZE * CELL_SIZE,
        display: "grid",
        gridTemplateColumns: `repeat(${PADDED_SIZE}, 1fr)`,
        gridTemplateRows: `repeat(${PADDED_SIZE}, 1fr)`,
        transform: `translateZ(${zIndex}px)`,
        border: `2px solid ${color}`,
        backgroundColor: `${color}15`,
        boxShadow: `0 0 15px ${color}10`,
      }}
    >
      {Array.from({ length: PADDED_SIZE * PADDED_SIZE }).map((_, i) => {
        const row = Math.floor(i / PADDED_SIZE);
        const col = i % PADDED_SIZE;
        // 判斷該格子是否屬於 Padding 區域
        const isPadding =
          row < PADDING ||
          row >= PADDED_SIZE - PADDING ||
          col < PADDING ||
          col >= PADDED_SIZE - PADDING;

        return (
          <div
            key={i}
            style={{
              border: `1px ${isPadding ? "dashed" : "solid"} ${isPadding ? color + "60" : color + "30"}`,
              backgroundColor: isPadding ? "transparent" : `${color}15`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "bold",
              color: isPadding ? color + "80" : "transparent",
            }}
          >
            {/* 視覺化 Zero Padding */}
            {isPadding ? "0" : ""}
          </div>
        );
      })}

      <span
        style={{
          position: "absolute",
          bottom: -25,
          right: 0,
          color: color,
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111827",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* 參數資訊面板 */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          fontSize: "16px",
          zIndex: 10,
        }}
      >
        <div>
          Original Input: <strong>7×7×3</strong>
        </div>
        <div>
          Padded Input: <strong style={{ color: "#a855f7" }}>9×9×3</strong>{" "}
          <span style={{ fontSize: "14px", color: "#9ca3af" }}>
            (Padding = {PADDING})
          </span>
        </div>
        <div>
          Receptive Field: <strong style={{ color: "#eab308" }}>3×3×3</strong>
        </div>
        <div>
          Stride: <strong style={{ color: "#3b82f6" }}>{STRIDE}</strong>{" "}
          <span style={{ fontSize: "14px", color: "#9ca3af" }}>
            (Overlap = 1)
          </span>
        </div>
        <div style={{ marginTop: "12px", fontSize: "16px", color: "#9ca3af" }}>
          Output Size:{" "}
          <strong style={{ color: "white" }}>
            {stepsPerRow}×{stepsPerRow}
          </strong>
          <br />
          Step: {step + 1} / {totalSteps}
        </div>
      </div>

      {/* 3D 場景容器 */}
      <div
        style={{
          perspective: "1200px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: PADDED_SIZE * CELL_SIZE,
            height: PADDED_SIZE * CELL_SIZE,
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg) rotateZ(-45deg) scale(0.9)",
            marginTop: "60px",
          }}
        >
          <TensorLayer zIndex={0} color="#3b82f6" label="Channel B" />
          <TensorLayer zIndex={LAYER_GAP} color="#10b981" label="Channel G" />
          <TensorLayer
            zIndex={LAYER_GAP * 2}
            color="#ef4444"
            label="Channel R"
          />

          {/* 掃描中的感受野 */}
          <div
            style={{
              position: "absolute",
              width: KERNEL_SIZE * CELL_SIZE,
              height: KERNEL_SIZE * CELL_SIZE,
              transformStyle: "preserve-3d",
              transform: `translate3d(${kernelX}px, ${kernelY}px, 0px)`,
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {[0, LAYER_GAP, LAYER_GAP * 2].map((zPos, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(234, 179, 8, 0.3)",
                  border: "2px solid #eab308",
                  transform: `translateZ(${zPos}px)`,
                  boxShadow:
                    index === 2
                      ? "0px 0px 20px rgba(234, 179, 8, 0.4)"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
