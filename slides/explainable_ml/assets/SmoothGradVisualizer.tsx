import React from "react";

import DigitGrid from "./DigitGrid";
import {
  addNoise,
  averageGrids,
  createSaliencyBase,
  heatmapGrid,
} from "./digitData";

const noisyGrids = Array.from({ length: 3 }, (_, index) =>
  addNoise(createSaliencyBase("8"), 0.16, index + 3),
);

const averaged = averageGrids(noisyGrids.map((grid) => heatmapGrid(grid, 0.8)));

export default function SmoothGradVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 785,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at bottom left, rgba(44, 160, 137, 0.18), transparent 34%), linear-gradient(180deg, #f6fcfa 0%, #eaf4f0 100%)",
        border: "1px solid #d3e5df",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.10)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
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
            SmoothGrad
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            Average saliency over noisy copies to reduce speckle.
          </div>
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#e4f4ef",
            color: "#2ca089",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          noise + saliency + average
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          flex: 1,
          minHeight: 0,
        }}
      >
        {noisyGrids.map((grid, index) => (
          <DigitGrid
            key={index}
            grid={heatmapGrid(grid, 0.82)}
            width={300}
            label={`Noisy sample ${index + 1}`}
            subtitle="Add small random noise before computing saliency"
            accent="#2ca089"
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 18, alignItems: "stretch" }}>
        <DigitGrid
          grid={averaged}
          width={340}
          label="Averaged saliency"
          subtitle="The common structure survives; noise fades away"
          accent="#2ca089"
        />
        <div
          style={{
            flex: 1,
            borderRadius: 24,
            background: "rgba(255,255,255,0.76)",
            padding: 20,
            border: "1px solid rgba(10,47,65,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41" }}>
            Why it helps
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "#5e6b78" }}>
            A single gradient map can be noisy. Averaging saliency maps from
            slightly perturbed inputs makes the explanation more stable and
            easier to read.
          </div>
        </div>
      </div>
    </div>
  );
}
