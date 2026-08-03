"use client";

import React from "react";


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

const tokenBox = (label: string, fill: string) => (
  <div
    style={{
      minWidth: 68,
      height: 52,
      borderRadius: 12,
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: fill,
      color: "#0a2f41",
      fontSize: 24,
      fontWeight: 700,
      boxShadow: "0 10px 24px rgba(10, 47, 65, 0.12)",
    }}
  >
    {label}
  </div>
);

export default function SequenceClassificationVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 580,
        borderRadius: 24,
        background: "linear-gradient(180deg, #f8fbff 0%, #f1f6ff 100%)",
        border: "1px solid #d7e3f2",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
      }}
    >
      <div style={{ position: "absolute", left: 48, right: 48, top: 274, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        {["[CLS]", "w1", "w2", "[SEP]", "w3", "w4", "w5"].map((label, index) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: index === 0 || index === 3 ? 18 : 18, height: 66, borderRadius: 4, background: "#f4b41a", boxShadow: "0 8px 18px rgba(244, 180, 26, 0.35)" }} />
            <div style={{ width: 2, height: 154, background: "#111827" }} />
            <div style={{ fontSize: 20, color: "#0f172a", fontWeight: 700 }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", left: 48, top: 370, width: 770, height: 120, borderRadius: 20, background: "#ffd78b", border: "1px dashed #ffd78b" }} />

      <div style={{ position: "absolute", left: 12, top: 67, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#0a2f41" }}>Class</div>
        {arrow(270)}
        <div style={{ width: 128, height: 76, borderRadius: 16, background: "#99b2df", border: "1px solid #7f9fd8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800, color: "#0a2f41" }}>
          Linear
        </div>
        {arrow(270)}
      </div>

      {/* <div style={{ position: "absolute", left: 98, top: 110, width: 2, height: 76, background: "#111827" }} />
      <div style={{ position: "absolute", left: 72, top: 100, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "12px solid #111827" }} /> */}
    </div>
  );
}
