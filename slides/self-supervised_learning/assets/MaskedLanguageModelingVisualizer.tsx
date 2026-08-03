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
        height: 520,
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
      <div style={{ position: "absolute", left: 28, top: 24, fontSize: 18, lineHeight: 1.35 }}>
        <div style={{ fontSize: 54, fontWeight: 800, marginBottom: 10 }}>Masking Input</div>
        <div style={{ fontSize: 24, color: "#334155" }}>BERT learns by recovering missing tokens from context.</div>
      </div>

      <div style={{ position: "absolute", left: 34, top: 170, display: "flex", flexDirection: "column", gap: 22 }}>
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
        <div style={{ fontSize: 22, color: "#475569", paddingLeft: 6 }}>
          randomly mask one token and predict the original character
        </div>
      </div>

      <div style={{ position: "absolute", right: 28, top: 124, width: 470, height: 300 }}>
        <div style={{ position: "absolute", left: 110, top: 110, width: 250, height: 96, borderRadius: 18, background: "#99b2df", border: "1px solid #7f9fd8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800, color: "#0a2f41" }}>
          BERT
        </div>
        <div style={{ position: "absolute", left: 2, top: 170, display: "flex", gap: 52 }}>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
              <div style={{ width: 2, height: 24, background: "#111827" }} />
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", left: 50, top: 160, width: 80, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ width: 2, height: 82, background: "#111827" }} />
          <div style={{ width: 18, height: 18, borderRadius: 999, background: "#f59e0b" }} />
          <div style={{ fontSize: 14, color: "#6b7280" }}>masked token</div>
        </div>
        <div style={{ position: "absolute", left: 147, top: 74, width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
        <div style={{ position: "absolute", left: 166, top: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 24, fontWeight: 700 }}>Linear</div>
          <div style={{ width: 2, height: 32, background: "#111827" }} />
          <div style={{ width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
          <div style={{ width: 2, height: 26, background: "#111827" }} />
          <div style={{ fontSize: 24, fontWeight: 700 }}>Softmax</div>
        </div>
      </div>

      <div style={{ position: "absolute", right: 34, top: 22, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
        <div style={{ fontSize: 24, fontWeight: 800 }}>Ground truth</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 18, height: 82, borderRadius: 4, background: "#f3c14b" }} />
          <div style={{ width: 26, height: 26, borderRadius: 999, background: "rgba(249, 115, 22, 0.35)", border: "4px solid rgba(249, 115, 22, 0.75)" }} />
          <div style={{ fontSize: 38, color: "#6b7280" }}>灣</div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 336, top: 118, display: "flex", alignItems: "center", gap: 12, color: "#111827", fontSize: 30, fontWeight: 700 }}>
        <span>softmax</span>
        {arrow(0)}
      </div>

      <div style={{ position: "absolute", left: 260, top: 360, width: 210, fontSize: 22, color: "#475569", lineHeight: 1.5 }}>
        minimize cross entropy against the original token
      </div>
    </div>
  );
}
