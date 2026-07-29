"use client";

import React, { useState, useEffect } from "react";

export default function ImageClassifierVisualizer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        borderRadius: "16px",
        border: "2px solid #e2e8f0",
        position: "relative",
        fontFamily: "sans-serif",
        overflow: "hidden",
        padding: "40px 20px",
      }}
    >
      {/* 主要流程圖容器 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "24px",
          width: "100%",
          maxWidth: "800px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* 1. 輸入影像區塊 */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              fontWeight: "serif",
            }}
          >
            y
          </div>
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#fcd34d", // 柔和的黃色/橘色
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#333",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            image
          </div>
        </div>

        {/* 箭頭 */}
        <div style={{ fontSize: "32px", fontWeight: "bold", color: "#333" }}>
          →
        </div>

        {/* 2. 分類器模型區塊 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              backgroundColor: "#4a7cce", // 藍色
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span>Off-the-shelf</span>
            <span>Image Classifier</span>
          </div>
          <div style={{ fontSize: "16px", color: "#333", textAlign: "center" }}>
            e.g., Inception net, <br /> VGG, etc.
          </div>
        </div>

        {/* 箭頭 */}
        <div style={{ fontSize: "32px", fontWeight: "bold", color: "#333" }}>
          →
        </div>

        {/* 3. 機率分佈 (長條圖) 區塊 */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* 長條圖繪製區 */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "12px",
                height: "120px",
                borderBottom: "3px solid #000",
                padding: "0 10px",
                position: "relative",
              }}
            >
              {/* Class 1 */}
              <div
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
                  class 1
                </div>
                <div
                  style={{
                    width: "30px",
                    height: isLoaded ? "20px" : "0px",
                    backgroundColor: "#fca5a5", // 淺橘紅
                    transition: "height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
              </div>

              {/* Class 2 (主要集中點) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  position: "relative",
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
                  class 2
                </div>
                <div
                  style={{
                    width: "30px",
                    height: isLoaded ? "100px" : "0px",
                    backgroundColor: "#93c5fd", // 淺藍色
                    transition:
                      "height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
                  }}
                />
              </div>

              {/* Class 3 */}
              <div
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
                  class 3
                </div>
                <div
                  style={{
                    width: "30px",
                    height: isLoaded ? "8px" : "0px",
                    backgroundColor: "#bbf7d0", // 淺綠色
                    transition:
                      "height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
                  }}
                />
              </div>
            </div>

            {/* 底部說明文字 */}
            <div
              style={{
                marginTop: "16px",
                fontSize: "18px",
                color: "#333",
                textAlign: "center",
                maxWidth: "250px",
              }}
            >
              Concentrated distribution <br /> means higher visual quality
            </div>
          </div>

          {/* 機率標示 P(c|y) */}
          <div
            style={{
              fontSize: "24px",
              fontStyle: "italic",
              fontWeight: "serif",
              marginBottom: "40px",
            }}
          >
            P(c|y)
          </div>
        </div>
      </div>
    </div>
  );
}
