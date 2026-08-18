import React from "react";

const box = (title: string, accent: string, text: string) => (
  <div
    style={{
      flex: 1,
      borderRadius: 28,
      padding: 22,
      background: "rgba(255,255,255,0.84)",
      border: "1px solid rgba(10,47,65,0.08)",
      boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
    }}
  >
    <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
      {title}
    </div>
    <div
      style={{
        height: 20,
        borderRadius: 999,
        background: `linear-gradient(90deg, ${accent} 0%, #e7eef7 100%)`,
        marginBottom: 14,
      }}
    />
    <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.7 }}>
      {text}
    </div>
  </div>
);

export default function DefenseVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: 620,
        borderRadius: 34,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #f8fcff 0%, #edf5fb 42%, #f5f8fb 100%)",
        border: "1px solid #d9e5ef",
        boxShadow: "0 24px 60px rgba(10,47,65,0.12)",
        color: "#0a2f41",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 800 }}>
          Defense works by reducing attack leverage
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#eef8f6",
            color: "#2ca089",
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          detect, randomize, retrain
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, flex: 1 }}>
        {box(
          "Passive defense",
          "#4f83d1",
          "Compression, smoothing, and other filters reduce the visible effect of the perturbation without changing the base classifier.",
        )}
        {box(
          "Randomization",
          "#e5a93d",
          "Randomized input transforms make it harder for a crafted perturbation to remain effective after preprocessing.",
        )}
        {box(
          "Adversarial training",
          "#2ca089",
          "Train on adversarial examples so the model learns a boundary that is less sensitive to worst-case input changes.",
        )}
      </div>

      <div
        style={{
          borderRadius: 28,
          padding: 24,
          background: "rgba(255,255,255,0.84)",
          border: "1px solid rgba(10,47,65,0.08)",
          boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
          Free adversarial training
        </div>
        <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.7 }}>
          Reuse gradients across multiple inner steps to lower the training cost
          while preserving the core adversarial training objective.
        </div>
      </div>
    </div>
  );
}
