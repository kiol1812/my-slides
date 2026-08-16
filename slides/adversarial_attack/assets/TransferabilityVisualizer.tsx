import React from "react";

const modelPanel = (
  title: string,
  scoreA: string,
  scoreB: string,
  accent: string,
) => (
  <div
    style={{
      flex: 1,
      borderRadius: 28,
      padding: 24,
      background: "rgba(255,255,255,0.84)",
      border: "1px solid rgba(10,47,65,0.08)",
      boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
    }}
  >
    <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
      {title}
    </div>
    <div
      style={{
        borderRadius: 22,
        padding: 18,
        background: "linear-gradient(180deg, #f7fbff 0%, #edf5fb 100%)",
        border: "1px solid #d9e5ef",
        marginBottom: 16,
      }}
    >
      <div style={{ fontSize: 18, color: "#51606c", marginBottom: 10 }}>
        prediction
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 18 }}>class A</span>
          <span
            style={{
              width: scoreA,
              height: 16,
              borderRadius: 999,
              background: accent,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 18 }}>class B</span>
          <span
            style={{
              width: scoreB,
              height: 16,
              borderRadius: 999,
              background: "#dbe7f6",
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default function TransferabilityVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 620,
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
          Black-box attacks use a proxy model
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#fdf8ef",
            color: "#e5a93d",
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          transferability
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 120px 1fr",
          gap: 16,
          alignItems: "center",
          flex: 1,
        }}
      >
        {modelPanel("Source model", "76%", "18%", "#4f83d1")}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
            fontWeight: 900,
            color: "#7c9fa8",
          }}
        >
          →
        </div>
        {modelPanel("Target model", "71%", "22%", "#2ca089")}
      </div>

      <div style={{ display: "flex", gap: 16 }}>
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
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
            White box
          </div>
          <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.6 }}>
            The attacker knows the model parameters and can backpropagate
            through the exact network.
          </div>
        </div>
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
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
            Black box
          </div>
          <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.6 }}>
            A proxy model is trained from available data, and the crafted
            perturbation is transferred to the target system.
          </div>
        </div>
      </div>
    </div>
  );
}
