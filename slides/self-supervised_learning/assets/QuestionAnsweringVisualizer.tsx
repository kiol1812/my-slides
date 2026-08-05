"use client";

import React from "react";

const tokenBox = (label: string, fill: string, width = 72) => (
  <div
    style={{
      minWidth: width,
      height: 48,
      borderRadius: 12,
      padding: "0 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: fill,
      color: "#0a2f41",
      fontSize: 22,
      fontWeight: 700,
      boxShadow: "0 10px 24px rgba(10, 47, 65, 0.12)",
    }}
  >
    {label}
  </div>
);

const Panel = ({ title, score }: { title: string; score: string }) => (
  <div
    style={{
      flex: 1,
      minHeight: 380,
      borderRadius: 22,
      background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
      border: "1px solid #d7e3f2",
      boxShadow: "0 20px 50px rgba(10, 47, 65, 0.10)",
      padding: 22,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#0a2f41" }}>{title}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626", border: "2px solid #dc2626", borderRadius: 10, padding: "2px 10px" }}>
        {score}
      </div>
    </div>
    <div style={{ marginTop: 18, fontSize: 18, color: "#475569", lineHeight: 1.5 }}>
      inner product scores the relevance between each document token and the question
    </div>
    <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 18, color: "#475569", fontWeight: 700 }}>question</div>
        <div style={{ display: "flex", gap: 10 }}>
          {tokenBox("q1", "#f8eab5", 56)}
          {tokenBox("q2", "#f8eab5", 56)}
        </div>
      </div>
      <div style={{ fontSize: 34, fontWeight: 800, color: "#0a2f41" }}>+</div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 18, color: "#475569", fontWeight: 700 }}>document</div>
        <div style={{ display: "flex", gap: 10 }}>
          {tokenBox("d1", "#f4dfcb", 56)}
          {tokenBox("d2", "#f4dfcb", 56)}
          {tokenBox("d3", "#f4dfcb", 56)}
        </div>
      </div>
    </div>
    <div style={{ position: "absolute", left: 11, right: 11, top: 108, height: 93, borderRadius: 18, border: "3px solid #f59e0b", background: "rgba(245, 158, 11, 0.05)" }} />
  </div>
);

export default function QuestionAnsweringVisualizer() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <Panel title="Predict start position" score="s = 2" />
        <Panel title="Predict end position" score="e = 3" />
      </div>
      <div style={{ fontSize: 24, color: "#475569", lineHeight: 1.6 }}>
        The answer is the span d2 d3. The model first selects the start index, then selects the end index.
      </div>
    </div>
  );
}
