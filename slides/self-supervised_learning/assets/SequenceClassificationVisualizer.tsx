"use client";

import React from "react";

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
        height: 500,
        borderRadius: 24,
        background: "linear-gradient(180deg, #f8fbff 0%, #f1f6ff 100%)",
        border: "1px solid #d7e3f2",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
      }}
    >
      <div style={{ position: "absolute", top: 26, left: 30, right: 30, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 46, fontWeight: 800, color: "#0a2f41" }}>Input: two sequences</div>
          <div style={{ fontSize: 28, color: "#475569", marginTop: 8 }}>Output: a class</div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#0a2f41", background: "#e5eefc", borderRadius: 999, padding: "10px 18px" }}>
          sequence classification
        </div>
      </div>

      <div style={{ position: "absolute", left: 48, right: 48, top: 194, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        {["[CLS]", "w1", "w2", "[SEP]", "w3", "w4", "w5"].map((label, index) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: index === 0 || index === 3 ? 18 : 18, height: 116, borderRadius: 4, background: "#f4b41a", boxShadow: "0 8px 18px rgba(244, 180, 26, 0.35)" }} />
            <div style={{ width: 2, height: 24, background: "#111827" }} />
            <div style={{ fontSize: 20, color: "#0f172a", fontWeight: 700 }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", left: 30, right: 30, top: 382, display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 12, flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 24, color: "#475569" }}>Sentence 1</div>
          <div style={{ display: "flex", gap: 12 }}>
            {tokenBox("w1", "#f9e9b0")}
            {tokenBox("w2", "#f9e9b0")}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 24, color: "#475569" }}>Sentence 2</div>
          <div style={{ display: "flex", gap: 12 }}>
            {tokenBox("w3", "#f7e2cf")}
            {tokenBox("w4", "#f7e2cf")}
            {tokenBox("w5", "#f7e2cf")}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 38, top: 122, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ width: 216, height: 96, borderRadius: 18, background: "#99b2df", border: "1px solid #7f9fd8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontWeight: 800, color: "#0a2f41" }}>
          Linear
        </div>
        <div style={{ width: 2, height: 28, background: "#111827" }} />
        <div style={{ fontSize: 22, fontWeight: 800, color: "#0a2f41" }}>Class</div>
      </div>

      <div style={{ position: "absolute", left: 58, top: 112, width: 22, height: 22, borderRadius: 999, background: "rgba(239, 68, 68, 0.35)", border: "4px solid rgba(239, 68, 68, 0.85)" }} />
      <div style={{ position: "absolute", left: 98, top: 110, width: 2, height: 76, background: "#111827" }} />
      <div style={{ position: "absolute", left: 72, top: 100, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "12px solid #111827" }} />
      <div style={{ position: "absolute", left: 414, top: 170, width: 360, height: 120, borderRadius: 20, background: "rgba(10, 47, 65, 0.04)", border: "1px dashed rgba(10, 47, 65, 0.16)" }} />
    </div>
  );
}
