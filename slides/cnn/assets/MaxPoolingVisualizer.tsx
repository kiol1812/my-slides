"use client";

import React, { useState, useEffect } from "react";

// --- 參數與資料設定 ---
const INPUT_SIZE = 4;
const POOL_SIZE = 2;
const STRIDE = 2;
const CELL_SIZE = 50; // 每個數字方格的大小

// 模擬輸入的 4x4 特徵圖 (Feature Map)
const inputMatrix = [
  [1, 3, 2, 4],
  [5, 8, 1, 0],
  [2, 1, 6, 2],
  [0, 3, 4, 9],
];

// 預先計算好的輸出矩陣，方便對照
const outputMatrix = [
  [8, 4],
  [3, 9],
];

export default function MaxPoolingVisualizer() {
  const [step, setStep] = useState(0);

  // 總共 4 個步驟 (左上、右上、左下、右下)
  const stepsPerRow = Math.floor((INPUT_SIZE - POOL_SIZE) / STRIDE) + 1;
  const totalSteps = stepsPerRow * stepsPerRow;

  useEffect(() => {
    // 設定每 1.5 秒跳動一格，留足夠時間讓觀眾看清楚「取最大值」的過程
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % (totalSteps + 1)); // +1 是為了在最後多停頓一下展示完整結果
    }, 1500);
    return () => clearInterval(timer);
  }, [totalSteps]);

  // 計算當前 Pooling Window 在 Input Matrix 中的起點 (Row, Col)
  const isFinished = step === totalSteps;
  const activeStep = isFinished ? totalSteps - 1 : step;

  const windowRow = Math.floor(activeStep / stepsPerRow) * STRIDE;
  const windowCol = (activeStep % stepsPerRow) * STRIDE;

  // 取得當前 Window 內的最大值，用於高亮顯示
  let currentMax = -Infinity;
  if (!isFinished) {
    for (let r = 0; r < POOL_SIZE; r++) {
      for (let c = 0; c < POOL_SIZE; c++) {
        const val = inputMatrix[windowRow + r][windowCol + c];
        if (val > currentMax) currentMax = val;
      }
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
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
        <h3 style={{ margin: "0 0 8px 0", fontSize: "22px", color: "#60a5fa" }}>
          Max Pooling 2D
        </h3>
        <div>
          Input: <strong>4×4</strong>
        </div>
        <div>
          Pool Size: <strong style={{ color: "#eab308" }}>2×2</strong>
        </div>
        <div>
          Stride: <strong style={{ color: "#3b82f6" }}>2</strong>
        </div>
        <div style={{ marginTop: "12px", fontSize: "16px", color: "#9ca3af" }}>
          Output: <strong>2×2</strong>
        </div>
      </div>

      {/* 3D 視角容器 */}
      <div
        style={{
          perspective: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px", // 兩個矩陣的間距
          marginTop: "40px",
        }}
      >
        {/* 左側：Input Matrix */}
        <div
          style={{
            position: "relative",
            width: INPUT_SIZE * CELL_SIZE,
            height: INPUT_SIZE * CELL_SIZE,
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg) rotateZ(-45deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "grid",
              gridTemplateColumns: `repeat(${INPUT_SIZE}, 1fr)`,
              width: "100%",
              height: "100%",
              backgroundColor: "#1e293b",
              border: "2px solid #3b82f6",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {inputMatrix.flat().map((val, i) => {
              const r = Math.floor(i / INPUT_SIZE);
              const c = i % INPUT_SIZE;
              // 判斷該格子是否在當前的 Pooling Window 內
              const inWindow =
                !isFinished &&
                r >= windowRow &&
                r < windowRow + POOL_SIZE &&
                c >= windowCol &&
                c < windowCol + POOL_SIZE;
              const isMaxVal = inWindow && val === currentMax;

              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: isMaxVal ? "900" : "normal",
                    // 最大值用醒目的紅色標示，其他在視窗內的稍微提亮
                    color: isMaxVal
                      ? "#ef4444"
                      : inWindow
                        ? "white"
                        : "#64748b",
                    backgroundColor: isMaxVal
                      ? "#fee2e2"
                      : inWindow
                        ? "#334155"
                        : "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  {val}
                </div>
              );
            })}
          </div>

          {/* 移動中的 Pooling Window 框 */}
          {!isFinished && (
            <div
              style={{
                position: "absolute",
                width: POOL_SIZE * CELL_SIZE,
                height: POOL_SIZE * CELL_SIZE,
                border: "4px solid #eab308",
                boxSizing: "border-box",
                transform: `translate(${windowCol * CELL_SIZE}px, ${windowRow * CELL_SIZE}px) translateZ(2px)`,
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: "none",
                boxShadow: "0 0 15px rgba(234, 179, 8, 0.5) inset",
              }}
            />
          )}
        </div>

        {/* 視覺引導箭頭 (放置於 3D 空間中) */}
        <div
          style={{
            transform: "translateY(20px)",
            color: "#64748b",
            fontSize: "40px",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>&#10142;</span>
          <span
            style={{ fontSize: "16px", marginTop: "10px", color: "#9ca3af" }}
          >
            Max
          </span>
        </div>

        {/* 右側：Output Matrix (Pooled Result) */}
        <div
          style={{
            position: "relative",
            width: (INPUT_SIZE / STRIDE) * CELL_SIZE,
            height: (INPUT_SIZE / STRIDE) * CELL_SIZE,
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg) rotateZ(-45deg)",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "grid",
              gridTemplateColumns: `repeat(${INPUT_SIZE / STRIDE}, 1fr)`,
              width: "100%",
              height: "100%",
              backgroundColor: "#1e293b",
              border: "2px solid #a855f7",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {outputMatrix.flat().map((val, i) => {
              // 模擬「逐漸填入」的效果：只有已經走過的 step 才會顯示數字
              const isRevealed = isFinished || i <= step;
              const isJustAdded = !isFinished && i === step;

              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: isRevealed
                      ? isJustAdded
                        ? "#ef4444"
                        : "white"
                      : "transparent",
                    backgroundColor: isJustAdded ? "#fee2e2" : "transparent",
                    transform: isJustAdded
                      ? "scale(1.1) translateZ(5px)"
                      : "scale(1) translateZ(0)",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
