"use client";

import React, { useState, useEffect } from "react";

// 定義各個類別長條圖的資料結構
interface Distribution {
  label: string;
  height: number;
  color: string;
}

export interface BarGraphProps {
  distributions: Distribution[];
}

// 定義每一列模型預測流程的 Props
interface ClassifierRowProps {
  inputLabel: React.ReactNode;
  outputLabel: React.ReactNode;
  distributions: Distribution[];
}

export function BarGraph({ distributions }: BarGraphProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "12px",
        height: "100px",
        borderBottom: "3px solid #000",
        padding: "0 10px",
      }}
    >
      {distributions.map((dist, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              marginBottom: "4px",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          >
            {dist.label}
          </div>
          <div
            style={{
              width: "28px",
              height: isLoaded ? `${dist.height}px` : "0px",
              backgroundColor: dist.color,
              transition: `height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

// 可重複使用的單列預測流程元件
function ClassifierRow({
  inputLabel,
  outputLabel,
  distributions,
}: ClassifierRowProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {/* 1. 輸入標籤 (y) */}
      <div
        style={{
          fontSize: "28px",
          fontStyle: "italic",
          fontFamily: "serif",
          width: "40px",
          textAlign: "right",
        }}
      >
        {inputLabel}
      </div>

      {/* 箭頭 */}
      <div style={{ fontSize: "32px", fontWeight: "bold", color: "#333" }}>
        →
      </div>

      {/* 2. CNN 模型區塊 */}
      <div
        style={{
          padding: "16px 32px",
          backgroundColor: "#5b84c4", // 藍色
          color: "white",
          fontSize: "24px",
          fontWeight: "500",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        CNN
      </div>

      {/* 箭頭 */}
      <div style={{ fontSize: "32px", fontWeight: "bold", color: "#333" }}>
        →
      </div>

      {/* 3. 機率分佈 (長條圖) 區塊 */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <BarGraph distributions={distributions} />

        {/* 4. 輸出標籤 (P(c|y)) */}
        <div
          style={{
            fontSize: "28px",
            fontStyle: "italic",
            fontFamily: "serif",
            width: "100px",
          }}
        >
          {outputLabel}
        </div>
      </div>
    </div>
  );
}

// 主要展示元件：使用 ClassifierRow 快速建立多組預測
export default function MultiClassifierVisualizer() {
  // 定義共用的顏色
  const colors = {
    class1: "#eda784", // 橘色
    class2: "#8ba7df", // 藍色
    class3: "#9eca98", // 綠色
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        borderRadius: "16px",
        border: "2px solid #e2e8f0",
        padding: "40px 20px",
        gap: "40px",
        fontFamily: "sans-serif",
      }}
    >
      {/* 第一列：y^1 */}
      <ClassifierRow
        inputLabel={
          <>
            y<sup>1</sup>
          </>
        }
        outputLabel={
          <>
            P(c|y<sup>1</sup>)
          </>
        }
        distributions={[
          { label: "class 1", height: 20, color: colors.class1 },
          { label: "class 2", height: 90, color: colors.class2 },
          { label: "class 3", height: 8, color: colors.class3 },
        ]}
      />

      {/* 第二列：y^2 */}
      <ClassifierRow
        inputLabel={
          <>
            y<sup>2</sup>
          </>
        }
        outputLabel={
          <>
            P(c|y<sup>2</sup>)
          </>
        }
        distributions={[
          { label: "class 1", height: 85, color: colors.class1 },
          { label: "class 2", height: 15, color: colors.class2 },
          { label: "class 3", height: 8, color: colors.class3 },
        ]}
      />

      {/* 第三列：y^3 */}
      <ClassifierRow
        inputLabel={
          <>
            y<sup>3</sup>
          </>
        }
        outputLabel={
          <>
            P(c|y<sup>3</sup>)
          </>
        }
        distributions={[
          { label: "class 1", height: 15, color: colors.class1 },
          { label: "class 2", height: 8, color: colors.class2 },
          { label: "class 3", height: 85, color: colors.class3 },
        ]}
      />

      {/* 結尾的刪節號 */}
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          letterSpacing: "4px",
          marginTop: "-10px",
        }}
      >
        ⋮
      </div>
    </div>
  );
}
