"use client";

import React, { useState, useEffect } from "react";

export default function ModeCollapseVisualizer() {
  const [step, setStep] = useState(0);
  const numModes = 8;
  const totalSteps = numModes;

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 1500);
    return () => clearInterval(timer);
  }, [totalSteps]);

  const radius = 120;
  const center = 200;

  const realModes = Array.from({ length: numModes }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / numModes;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const activeModeIndex = step % numModes;
  const activeMode = realModes[activeModeIndex];

  const generatedSamples = Array.from({ length: 15 }).map((_, i) => {
    const angle = i * 2.5;
    const r = (i % 5) * 4;
    return {
      x: activeMode.x + r * Math.cos(angle),
      y: activeMode.y + r * Math.sin(angle),
    };
  });

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        borderRadius: "16px",
        border: "2px solid #e2e8f0",
        position: "relative",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: "#333", fontWeight: "bold" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f97316" }} />
          Real Data Distribution
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16, color: "#333", fontWeight: "bold" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#3b82f6" }} />
          Generated Samples
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          fontSize: 18,
          fontWeight: "bold",
          color: "#475569",
          background: "white",
          padding: "6px 12px",
          borderRadius: 8,
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        Iteration: t + {step}
      </div>

      <div style={{ position: "relative", width: 400, height: 400 }}>
        <div
          style={{
            position: "absolute",
            top: center - radius - 30,
            left: center - radius - 30,
            width: radius * 2 + 60,
            height: radius * 2 + 60,
            borderRadius: "50%",
            border: "2px dashed #cbd5e1",
            opacity: 0.5,
          }}
        />

        {realModes.map((pos, i) => (
          <div
            key={`real-${i}`}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#f97316",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(249, 115, 22, 0.4)",
            }}
          />
        ))}

        {generatedSamples.map((pos, i) => (
          <div
            key={`gen-${i}`}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#3b82f6",
              transform: "translate(-50%, -50%)",
              transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
