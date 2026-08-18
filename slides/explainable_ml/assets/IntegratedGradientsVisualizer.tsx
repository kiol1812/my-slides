import React from "react";

import DigitGrid from "./DigitGrid";
import { createDigitGrid, interpolateGrids, heatmapGrid } from "./digitData";

const baseline = createDigitGrid("8", { invert: true, noise: 0.0 });
const target = createDigitGrid("8", { noise: 0.02, seed: 17 });

const pathGrids = [0.15, 0.45, 0.75].map((ratio) =>
  interpolateGrids(baseline, target, ratio),
);

export default function IntegratedGradientsVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 620,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top center, rgba(79, 131, 209, 0.18), transparent 34%), linear-gradient(180deg, #f6f9ff 0%, #e9eef8 100%)",
        border: "1px solid #d9e3ef",
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
            Integrated Gradients
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            Trace the score from a baseline input to the real digit.
          </div>
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#4f83d1",
            background: "#ebf2ff",
            borderRadius: 999,
            padding: "10px 16px",
          }}
        >
          baseline → path → input
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          flex: 1,
          minHeight: 0,
        }}
      >
        <DigitGrid
          grid={heatmapGrid(baseline, 0.65)}
          width={290}
          label="Baseline"
          subtitle="Start from a blank reference"
          accent="#7ea7e8"
        />
        <DigitGrid
          grid={heatmapGrid(pathGrids[0], 0.68)}
          width={290}
          label="Step 1"
          subtitle="A small amount of the digit appears"
          accent="#7ea7e8"
        />
        <DigitGrid
          grid={heatmapGrid(pathGrids[1], 0.72)}
          width={290}
          label="Step 2"
          subtitle="Attribution accumulates along the path"
          accent="#4f83d1"
        />
        <DigitGrid
          grid={heatmapGrid(target, 0.75)}
          width={290}
          label="Final input"
          subtitle="The completed digit receives the full explanation"
          accent="#f0a23b"
        />
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            flex: 1,
            borderRadius: 24,
            background: "rgba(255,255,255,0.76)",
            padding: 18,
            border: "1px solid rgba(10,47,65,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#0a2f41",
              marginBottom: 8,
            }}
          >
            Why not plain gradients?
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>
            A single gradient can vanish at saturated points. IG integrates
            contribution along the whole path, so the final attribution is more
            robust.
          </div>
        </div>
        <div
          style={{
            flex: 1,
            borderRadius: 24,
            background: "rgba(255,255,255,0.76)",
            padding: 18,
            border: "1px solid rgba(10,47,65,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#0a2f41",
              marginBottom: 8,
            }}
          >
            Attribution accumulation
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>
            Each step contributes a slice of the total score change, and the
            slices are summed across the path.
          </div>
        </div>
      </div>
    </div>
  );
}
