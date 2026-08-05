import React from "react";

const sample = (
  size: number,
  color: string,
  angle: number,
  borderColor: string,
) => (
  <div
    style={{
      width: 90,
      height: 90,
      borderRadius: 28,
      border: `2px solid ${borderColor}`,
      background: "rgba(255,255,255,0.84)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 30px rgba(10, 47, 65, 0.08)",
    }}
  >
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: color,
        transform: `rotate(${angle}deg)`,
        boxShadow: "inset 0 0 0 10px rgba(255,255,255,0.16)",
      }}
    />
  </div>
);

export default function LatentFactorVisualizer() {
  const grid = [
    [
      sample(34, "#4f83d1", 0, "#c7d7f0"),
      sample(44, "#4f83d1", 18, "#c7d7f0"),
      sample(54, "#4f83d1", 36, "#c7d7f0"),
    ],
    [
      sample(34, "#2ca089", 18, "#c5ece4"),
      sample(44, "#2ca089", 36, "#c5ece4"),
      sample(54, "#2ca089", 54, "#c5ece4"),
    ],
    [
      sample(34, "#f3c14b", 36, "#f8e7b0"),
      sample(44, "#f3c14b", 54, "#f8e7b0"),
      sample(54, "#f3c14b", 72, "#f8e7b0"),
    ],
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: 560,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #f7fbff 0%, #f0f6ff 40%, #f8fafc 100%)",
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
          gap: 20,
        }}
      >
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>
            Separate factors in latent space
          </div>
          <div style={{ fontSize: 18, color: "#51606c", marginTop: 6 }}>
            One dimension changes shape, another changes style.
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "#e7eef7",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            z1
          </div>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "#eef8f6",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            z2
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, flex: 1, alignItems: "stretch" }}>
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {cell}
              </div>
            )),
          )}
        </div>

        <div
          style={{
            width: 460,
            borderRadius: 28,
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(10,47,65,0.1)",
            padding: 22,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800 }}>
            What disentanglement means
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.6, color: "#51606c" }}>
            A small movement in one latent direction should modify one semantic
            attribute without changing the rest.
          </div>
          <div style={{ height: 2, background: "#d7e3f2" }} />
          <div style={{ fontSize: 18, lineHeight: 1.6, color: "#51606c" }}>
            That makes the representation easier to inspect, edit, and reuse for
            downstream tasks.
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {[
          ["speaker identity", "one subspace can track the voice of a person"],
          ["content", "another subspace can carry the linguistic message"],
          ["editability", "mix the parts to synthesize a controlled output"],
        ].map(([title, body]) => (
          <div
            key={title}
            style={{
              flex: 1,
              borderRadius: 22,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(10,47,65,0.1)",
              padding: "18px 20px",
            }}
          >
            <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 8 }}>
              {title}
            </div>
            <div style={{ fontSize: 17, color: "#51606c", lineHeight: 1.5 }}>
              {body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
