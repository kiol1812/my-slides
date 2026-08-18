import React from "react";

import DigitGrid from "./DigitGrid";
import { createDigitsForComparison } from "./digitData";

const layerLabels = [
  "Input space",
  "Hidden representation",
  "Probe-friendly space",
];

const layerPoints = [
  [
    { x: 0.22, y: 0.28, color: "#4f83d1" },
    { x: 0.35, y: 0.64, color: "#2ca089" },
    { x: 0.6, y: 0.34, color: "#f0a23b" },
    { x: 0.74, y: 0.6, color: "#d16b85" },
  ],
  [
    { x: 0.24, y: 0.38, color: "#4f83d1" },
    { x: 0.4, y: 0.58, color: "#4f83d1" },
    { x: 0.62, y: 0.38, color: "#2ca089" },
    { x: 0.76, y: 0.55, color: "#f0a23b" },
  ],
  [
    { x: 0.18, y: 0.52, color: "#4f83d1" },
    { x: 0.34, y: 0.29, color: "#4f83d1" },
    { x: 0.66, y: 0.3, color: "#2ca089" },
    { x: 0.77, y: 0.65, color: "#f0a23b" },
  ],
];

const layerTitles = [
  "Examples are still mixed together",
  "Useful structure starts to appear",
  "Classes become easier to separate",
];

const pointPlot = (points: { x: number; y: number; color: string }[]) => (
  <div
    style={{
      position: "relative",
      width: 270,
      height: 220,
      borderRadius: 22,
      background: "rgba(255,255,255,0.74)",
      border: "1px solid rgba(10,47,65,0.08)",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 24,
        right: 24,
        top: 24,
        bottom: 24,
        borderLeft: "2px solid rgba(10,47,65,0.12)",
        borderBottom: "2px solid rgba(10,47,65,0.12)",
      }}
    />
    {points.map((point, index) => (
      <div
        key={index}
        style={{
          position: "absolute",
          left: `${24 + point.x * 220}px`,
          top: `${24 + (1 - point.y) * 150}px`,
          width: 16,
          height: 16,
          borderRadius: 999,
          background: point.color,
          boxShadow: `0 0 0 5px ${point.color}22`,
        }}
      />
    ))}
  </div>
);

export function RepresentationVisualizer() {
  const comparison = createDigitsForComparison();

  return (
    <div
      style={{
        width: "100%",
        height: 600,
        borderRadius: 32,
        padding: 28,
        background: "linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%)",
        border: "1px solid #d9e5ef",
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
            How the network organizes the input
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            The representation becomes more structured as layers deepen.
          </div>
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#e9f2ff",
            color: "#4f83d1",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          probe the hidden state
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 14,
        }}
      >
        <DigitGrid
          grid={comparison.reference}
          width={240}
          height={360}
          label="Sample 1"
          subtitle="Reference handwritten digit"
          accent="#4f83d1"
        />
        <DigitGrid
          grid={comparison.alternate}
          width={240}
          height={360}
          label="Sample 2"
          subtitle="Another nearby digit"
          accent="#2ca089"
        />
        <DigitGrid
          grid={comparison.prototype}
          width={240}
          height={360}
          label="Sample 3"
          subtitle="A different digit family"
          accent="#f0a23b"
        />
        {layerPoints.map((points, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41" }}>
              {layerLabels[index]}
            </div>
            {pointPlot(points)}
            <div
              style={{
                borderRadius: 22,
                background: "rgba(255,255,255,0.76)",
                padding: 16,
                border: "1px solid rgba(10,47,65,0.08)",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#5e6b78",
              }}
            >
              {layerTitles[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProbeAttentionVisualizer() {
  const heads = [
    0.82, 0.56, 0.74, 0.38, 0.9, 0.44, 0.66, 0.27, 0.71, 0.49, 0.36, 0.63, 0.48,
    0.81, 0.58, 0.32,
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 700,
        borderRadius: 32,
        padding: 28,
        background: "linear-gradient(180deg, #fffdf8 0%, #f3f0e7 100%)",
        border: "1px solid #e4d7c3",
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
            Probing and attention
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            A probe checks whether the hidden state contains the concept we care
            about.
          </div>
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#f7ead1",
            color: "#b8771a",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          not every signal is explanation
        </div>
      </div>

      <div style={{ display: "flex", gap: 18, flex: 1, minHeight: 0 }}>
        <div
          style={{
            flex: 1,
            borderRadius: 26,
            background: "rgba(255,255,255,0.76)",
            padding: 20,
            border: "1px solid rgba(10,47,65,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41" }}>
            Probe accuracy
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
              flex: 1,
            }}
          >
            {heads.map((value, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 180,
                    borderRadius: 999,
                    background: "#edf2f7",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: `${value * 100}%`,
                      background: `linear-gradient(180deg, #f0a23b 0%, #4f83d1 100%)`,
                    }}
                  />
                </div>
                <div style={{ fontSize: 14, color: "#5e6b78" }}>
                  H{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            borderRadius: 26,
            background: "rgba(255,255,255,0.76)",
            padding: 20,
            border: "1px solid rgba(10,47,65,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#0a2f41" }}>
            Attention map
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 10,
              flex: 1,
            }}
          >
            {Array.from({ length: 16 }).map((_, index) => {
              const value = heads[index];
              return (
                <div
                  key={index}
                  style={{
                    borderRadius: 18,
                    background: `rgba(79, 131, 209, ${0.12 + value * 0.78})`,
                    minHeight: 70,
                  }}
                />
              );
            })}
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>
            Attention can be inspected, but the result is not automatically a
            faithful explanation. It is only one lens on the model.
          </div>
        </div>
      </div>
    </div>
  );
}
