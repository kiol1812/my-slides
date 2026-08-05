"use client";

import React from "react";

const tokenDot = (color: string) => (
  <div
    style={{
      width: 18,
      height: 18,
      borderRadius: 999,
      background: color,
      boxShadow: `0 0 0 5px ${color}22`,
    }}
  />
);

const wordPair = (left: string, right: string, leftColor: string, rightColor: string) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
    <div style={{ fontSize: 28, fontWeight: 700, color: "#0a2f41" }}>{left}</div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {tokenDot(leftColor)}
      <div style={{ width: 38, borderTop: `3px dotted ${leftColor}` }} />
      {tokenDot(rightColor)}
    </div>
    <div style={{ fontSize: 28, fontWeight: 700, color: "#0a2f41" }}>{right}</div>
  </div>
);

export default function MultilingualBertVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 520,
        borderRadius: 24,
        background: "linear-gradient(180deg, #f8fbff 0%, #eff6ff 100%)",
        border: "1px solid #d7e3f2",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
      }}
    >
      <div style={{ position: "absolute", top: 26, left: 28, fontSize: 48, fontWeight: 800, color: "#0a2f41" }}>
        Where is Language?
      </div>

      <div style={{ position: "absolute", left: 28, top: 112, display: "flex", flexDirection: "column", gap: 34 }}>
        {wordPair("jump", "跳", "#f59e0b", "#60a5fa")}
        {wordPair("swim", "游", "#f59e0b", "#60a5fa")}
        {wordPair("fish", "魚", "#f59e0b", "#60a5fa")}
      </div>

      <div style={{ position: "absolute", right: 30, top: 108, width: 530, height: 372, borderRadius: 22, background: "linear-gradient(180deg, #e7f0da 0%, #dbead2 100%)", border: "4px solid #1d4ed8", boxShadow: "0 20px 40px rgba(29, 78, 216, 0.16)" }}>
        <div style={{ position: "absolute", top: 24, left: 56, right: 56, display: "flex", justifyContent: "space-between", color: "#0a2f41", fontSize: 26, fontWeight: 700 }}>
          <div>Multi-BERT</div>
          <div>Reconstruction</div>
        </div>
        <div style={{ position: "absolute", left: 50, right: 50, top: 95, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, alignItems: "end" }}>
          {["there", "is", "a", "cat"].map((label, index) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ width: 18, height: 56 - index * 4, borderRadius: 4, background: "#60a5fa", boxShadow: "0 8px 18px rgba(10, 47, 65, 0.16)" }} />
              {"+"}
              <div style={{ width: 18, height: 56 - index * 4, borderRadius: 4, background: "#f59e0b", boxShadow: "0 8px 18px rgba(10, 47, 65, 0.16)" }} />
              <div style={{ width: 2, height: 24, background: "#111827" }} />
              <div style={{ fontSize: 20, color: "#0f172a", fontWeight: 700 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", left: 90, right: 90, bottom: 20, height: 10, borderRadius: 999, background: "rgba(10, 47, 65, 0.08)" }} />
      </div>
    </div>
  );
}
