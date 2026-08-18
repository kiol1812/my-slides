import React from "react";

import DigitGrid from "./DigitGrid";
import { createDigitGrid } from "./digitData";

const neighbors = [
  { x: 0.24, y: 0.25, color: "#4f83d1" },
  { x: 0.35, y: 0.54, color: "#2ca089" },
  { x: 0.52, y: 0.36, color: "#f0a23b" },
  { x: 0.68, y: 0.24, color: "#d16b85" },
  { x: 0.74, y: 0.62, color: "#4f83d1" },
  { x: 0.44, y: 0.74, color: "#2ca089" },
];

export default function LimeSurrogateVisualizer() {
  const digit = createDigitGrid("8", { noise: 0.04, seed: 31 });

  return (
    <div
      style={{
        width: "100%",
        height: 700,
        borderRadius: 32,
        padding: 28,
        background: "linear-gradient(180deg, #fbfbff 0%, #eef1fb 100%)",
        border: "1px solid #dce2f0",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.10)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 18,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#0a2f41" }}>
            LIME-style surrogate explanation
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            Fit a simple local model around the example instead of explaining
            the whole network.
          </div>
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#e9f1ff",
            color: "#4f83d1",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          local linear view
        </div>
      </div>

      <div style={{ display: "flex", gap: 18, flex: 1, minHeight: 0 }}>
        <DigitGrid
          grid={digit}
          width={330}
          label="Target digit"
          subtitle="The explanation is attached to one specific sample"
          accent="#4f83d1"
        />

        <div
          style={{
            flex: 1,
            borderRadius: 28,
            background: "rgba(255,255,255,0.76)",
            padding: 20,
            border: "1px solid rgba(10,47,65,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41" }}>
            Neighborhood samples
          </div>
          <div
            style={{
              position: "relative",
              flex: 1,
              borderRadius: 24,
              background: "linear-gradient(180deg, #f4f7fb 0%, #e7edf7 100%)",
              border: "1px solid rgba(10,47,65,0.08)",
            }}
          >
            {neighbors.map((point, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: `${18 + point.x * 280}px`,
                  top: `${18 + (1 - point.y) * 260}px`,
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: point.color,
                  boxShadow: `0 0 0 8px ${point.color}22`,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
                borderLeft: "2px solid rgba(10,47,65,0.16)",
                borderBottom: "2px solid rgba(10,47,65,0.16)",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "#edf3ff",
                color: "#4f83d1",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              simple surrogate
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "#eef7f3",
                color: "#2ca089",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              local neighborhood
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "#fff3e6",
                color: "#b9751a",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              human-readable rule
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
