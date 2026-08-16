import React from "react";

export default function TrainingAttackVisualizer() {
  return (
    <div style={{ width: "100%", height: 620, borderRadius: 34, padding: 28, background: "radial-gradient(circle at top left, #f8fcff 0%, #edf5fb 42%, #f5f8fb 100%)", border: "1px solid #d9e5ef", boxShadow: "0 24px 60px rgba(10,47,65,0.12)", color: "#0a2f41", display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 30, fontWeight: 800 }}>Training-time attacks hide inside the data</div>
        <div style={{ padding: "10px 16px", borderRadius: 999, background: "#fdf8ef", color: "#e5a93d", fontSize: 18, fontWeight: 800 }}>poisoning and backdoors</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 1fr 120px 1fr", gap: 16, flex: 1, alignItems: "center" }}>
        <div style={{ borderRadius: 28, padding: 22, background: "rgba(255,255,255,0.84)", border: "1px solid rgba(10,47,65,0.08)", boxShadow: "0 20px 50px rgba(10,47,65,0.08)" }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>Clean data</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} style={{ height: 44, borderRadius: 12, background: index % 4 === 0 ? "linear-gradient(135deg, #99b2df 0%, #4f83d1 100%)" : "#e7eef7" }} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, fontWeight: 900, color: "#7c9fa8" }}>→</div>

        <div style={{ borderRadius: 28, padding: 22, background: "rgba(255,255,255,0.84)", border: "1px solid rgba(10,47,65,0.08)", boxShadow: "0 20px 50px rgba(10,47,65,0.08)" }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>Poisoned samples</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} style={{ height: 44, borderRadius: 12, background: index === 4 ? "linear-gradient(135deg, #e5a93d 0%, #f3c56b 100%)" : index % 4 === 0 ? "linear-gradient(135deg, #8fd4c5 0%, #2ca089 100%)" : "#e7eef7" }} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, fontWeight: 900, color: "#7c9fa8" }}>→</div>

        <div style={{ borderRadius: 28, padding: 22, background: "rgba(255,255,255,0.84)", border: "1px solid rgba(10,47,65,0.08)", boxShadow: "0 20px 50px rgba(10,47,65,0.08)" }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>Backdoored model</div>
          <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.7 }}>
            The model behaves normally on clean inputs, but a hidden trigger can force a chosen wrong output during inference.
          </div>
        </div>
      </div>
    </div>
  );
}