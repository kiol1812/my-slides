import React from "react";

const card = (label: string, score: number, accent: string, error: boolean) => (
  <div
    style={{
      flex: 1,
      borderRadius: 24,
      padding: 18,
      background: error ? "#fff5f5" : "rgba(255,255,255,0.85)",
      border: error ? "1px solid #f2c0c0" : "1px solid #d7e3f2",
      boxShadow: "0 14px 32px rgba(10, 47, 65, 0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 800 }}>{label}</div>
      <div
        style={{
          padding: "6px 12px",
          borderRadius: 999,
          background: accent,
          color: "white",
          fontSize: 16,
          fontWeight: 800,
        }}
      >
        score {score}
      </div>
    </div>
    <div
      style={{ display: "flex", gap: 10, alignItems: "flex-end", height: 120 }}
    >
      {[28, 42, 54, 38, 62].map((height, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            height: error && index === 2 ? 28 : height,
            borderRadius: 14,
            background:
              error && index === 2
                ? "#f2a2a2"
                : "linear-gradient(180deg, #8fd4c5 0%, #2ca089 100%)",
          }}
        />
      ))}
    </div>
  </div>
);

export default function AnomalyDetectionVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 660,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #f7fbff 0%, #eef5fb 42%, #f8fafc 100%)",
        border: "1px solid #d7e3f2",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
        color: "#0a2f41",
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>
            Anomaly detection by reconstruction error
          </div>
          <div style={{ fontSize: 18, color: "#51606c", marginTop: 6 }}>
            Normal samples are easy to rebuild; unusual ones are not.
          </div>
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
          threshold on error
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, flex: 1, alignItems: "stretch" }}>
        {card("normal sample", 0.12, "#2ca089", false)}
        {card("normal sample", 0.18, "#2ca089", false)}
        {card("anomalous sample", 0.81, "#d56b6b", true)}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 16,
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(10,47,65,0.1)",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>
            Decision rule
          </div>
          <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.6 }}>
            If the autoencoder can reconstruct a sample only poorly, the input
            is likely outside the normal training distribution.
          </div>
        </div>
        <div
          style={{
            borderRadius: 24,
            padding: 20,
            background: "#fff5f5",
            border: "1px solid #f2c0c0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#b24f4f" }}>
            high reconstruction error
          </div>
          <div style={{ fontSize: 40, fontWeight: 900, color: "#b24f4f" }}>
            anomaly
          </div>
        </div>
      </div>
    </div>
  );
}
