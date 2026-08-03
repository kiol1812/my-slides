"use client";

import React from "react";

const tokenBox = (label: string, fill: string, color = "#0a2f41") => (
  <div
    style={{
      minWidth: 88,
      height: 54,
      borderRadius: 14,
      padding: "0 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: fill,
      color,
      fontSize: 24,
      fontWeight: 700,
      boxShadow: "0 10px 24px rgba(10, 47, 65, 0.12)",
    }}
  >
    {label}
  </div>
);

const arrow = (rotate = 0) => (
  <div
    style={{
      width: 40,
      height: 2,
      background: "#111827",
      position: "relative",
      transform: `rotate(${rotate}deg)`,
    }}
  >
    <span
      style={{
        position: "absolute",
        right: -2,
        top: -6,
        width: 0,
        height: 0,
        borderTop: "7px solid transparent",
        borderBottom: "7px solid transparent",
        borderLeft: "10px solid #111827",
      }}
    />
  </div>
);

export default function MaskedLanguageModelingVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 680,
        borderRadius: 24,
        background:
          "radial-gradient(circle at top left, #f7fbff 0%, #eef5ff 38%, #f8fafc 100%)",
        border: "1px solid #d7e3f2",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
        color: "#0a2f41",
      }}
    >
      <div style={{ position: "absolute", left: 50, top: 530, display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {tokenBox("[CLS]", "#f3f4f6")}
          {tokenBox("台", "#fde68a")}
          {tokenBox("[MASK]", "#4f83d1", "#ffffff")}
          {tokenBox("大", "#fde68a")}
          {tokenBox("學", "#fde68a")}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {tokenBox("[CLS]", "#f3f4f6")}
          {tokenBox("台", "#fde68a")}
          {tokenBox("天", "#8cc56e", "#ffffff")}
          {tokenBox("大", "#fde68a")}
          {tokenBox("學", "#fde68a")}
        </div>
      </div>

      <div style={{ position: "absolute", left: 235, top: 120, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
        <div style={{ position: "absolute", left: 90, top: -90, display: "flex", alignItems: "center", gap: 12, color: "#111827", fontSize: 30, fontWeight: 700 }}>
            <div style={{ width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
        </div>
        <div style={{ position: "absolute", left: -58, top: 0, display: "flex", alignItems: "center", gap: 12, color: "#111827", fontSize: 30, fontWeight: 700 }}>
            <span>softmax</span>
            {arrow(270)}
        </div>
        <div style={{ position: "absolute", left: 0, top: 50, width: 200, height: 80, borderRadius: 18, background: "#99b2df", border: "1px solid #7f9fd8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800, color: "#0a2f41" }}>
            Linear
        </div>
        <div style={{ position: "absolute", left: 82, top: 150, display: "flex", alignItems: "center", gap: 12, color: "#111827", fontSize: 30, fontWeight: 700 }}>
            {arrow(270)}
        </div>
      </div>
      <div style={{ position: "absolute", left: 60, top: 274, width: 680, height: 500 }}>
        <div style={{ position: "absolute", left: 110, top: 120, width: 450, height: 96, borderRadius: 18, background: "#99b2df", border: "1px solid #7f9fd8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800, color: "#0a2f41" }}>
          BERT
        </div>
        <div style={{ position: "absolute", left: 160, top: 0, display: "flex", gap: 90 }}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
              <div style={{ width: 2, height: 24, background: "#111827" }} />
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", left: 160, top: 220, display: "flex", gap: 110 }}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 2, height: 24, background: "#111827" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", right: 9, top: 30, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
          <div style={{ fontSize: 38, color: "#6b7280" }}>灣</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>Ground truth</div>
        </div>
      </div>

      <div style={{ position: "absolute", right: 100, top: 30, width: 400, fontSize: 22, color: "#475569", lineHeight: 1.5, display: "flex", flexDirection: "row", alignItems: "center", gap: 12, fontWeight: 700 }}>
        {arrow(180)}
        minimize cross entropy
        {arrow(0)}
      </div>
    </div>
  );
}
