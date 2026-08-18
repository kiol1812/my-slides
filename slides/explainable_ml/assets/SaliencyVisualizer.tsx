import React from "react";

import DigitGrid from "./DigitGrid";
import { createSaliencyBase, heatmapGrid } from "./digitData";

const legendItem = (label: string, color: string) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{ width: 16, height: 16, borderRadius: 999, background: color }} />
    <div style={{ fontSize: 15, color: "#5e6b78" }}>{label}</div>
  </div>
);

export default function SaliencyVisualizer() {
  const base = createSaliencyBase("8");
  const saliency = heatmapGrid(base, 0.7);

  return (
    <div
      style={{
        width: "100%",
        height: 700,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top right, rgba(240, 162, 59, 0.18), transparent 32%), linear-gradient(180deg, #fffaf1 0%, #f5f0e6 100%)",
        border: "1px solid #e5d6bf",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.10)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#0a2f41" }}>Saliency map</div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>Gradients highlight the pixels that most change the score.</div>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {legendItem("Low influence", "rgba(79,131,209,0.45)")}
          {legendItem("High influence", "rgba(240,162,59,0.9)")}
        </div>
      </div>

      <div style={{ display: "flex", gap: 18, flex: 1, minHeight: 0 }}>
        <DigitGrid grid={base} width={340} label="Input digit" subtitle="The underlying handwritten 8" accent="#4f83d1" />
        <DigitGrid grid={saliency} width={340} label="Saliency heatmap" subtitle="Warm cells mark sensitive regions" accent="#f0a23b" />
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ flex: 1, borderRadius: 24, background: "rgba(255,255,255,0.72)", padding: 18, border: "1px solid rgba(10,47,65,0.08)" }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41", marginBottom: 8 }}>What the gradient says</div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>If a tiny change in one stroke changes the score a lot, that region gets a stronger attribution.</div>
        </div>
        <div style={{ flex: 1, borderRadius: 24, background: "rgba(255,255,255,0.72)", padding: 18, border: "1px solid rgba(10,47,65,0.08)" }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41", marginBottom: 8 }}>Local, not global</div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>The map explains one example. It does not describe the whole model.</div>
        </div>
      </div>
    </div>
  );
}
