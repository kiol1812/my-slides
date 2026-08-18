import React from "react";

import DigitGrid from "./DigitGrid";
import { createDigitGrid, maskGrid } from "./digitData";

const badgeStyle: React.CSSProperties = {
  padding: "8px 14px",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 800,
  letterSpacing: "0.02em",
};

export default function LocalMaskVisualizer() {
  const base = createDigitGrid("8", { noise: 0.02, seed: 12 });
  const masked = maskGrid(base, 14, 12, 4, 0.95);
  const shiftedMask = maskGrid(base, 19, 18, 3, 0.82);

  return (
    <div
      style={{
        width: "100%",
        height: 700,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top left, rgba(79, 131, 209, 0.18), transparent 36%), linear-gradient(180deg, #f8fbff 0%, #edf4fb 100%)",
        border: "1px solid #d9e5ef",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
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
            Local explanation with masking
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            The model is asked why this handwritten digit looks like an 8.
          </div>
        </div>
        <div style={{ ...badgeStyle, background: "#e8f4ff", color: "#2f6db3" }}>
          Prediction: 8
        </div>
      </div>

      <div style={{ display: "flex", gap: 18, flex: 1, minHeight: 0 }}>
        <div
          style={{
            flex: 1.1,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <DigitGrid
            grid={base}
            width={360}
            label="Original digit"
            subtitle="The reference sample before masking"
            accent="#4f83d1"
          />
          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                flex: 1,
                borderRadius: 24,
                background: "rgba(255,255,255,0.78)",
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
                Mask the decisive stroke
              </div>
              <div style={{ fontSize: 16, color: "#5e6b78", lineHeight: 1.6 }}>
                If the upper loop is hidden, the confidence drops quickly.
              </div>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 24,
                background: "rgba(255,255,255,0.78)",
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
                Critical region
              </div>
              <div style={{ fontSize: 16, color: "#5e6b78", lineHeight: 1.6 }}>
                The explanation is local, so it answers one specific prediction
                only.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <DigitGrid
            grid={masked}
            width={360}
            label="Mask over the loop"
            subtitle="Prediction drops because the decisive region is removed"
            accent="#f0a23b"
          />
          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                flex: 1,
                borderRadius: 24,
                background: "rgba(255,255,255,0.82)",
                padding: 18,
                border: "1px solid rgba(10,47,65,0.08)",
              }}
            >
              <div style={{ fontSize: 16, color: "#5e6b78", marginBottom: 10 }}>
                Confidence
              </div>
              <div
                style={{
                  height: 16,
                  borderRadius: 999,
                  background: "#dde7f4",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "87%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #4f83d1 0%, #8fc1ff 100%)",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#0a2f41",
                }}
              >
                0.87
              </div>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 24,
                background: "rgba(255,255,255,0.82)",
                padding: 18,
                border: "1px solid rgba(10,47,65,0.08)",
              }}
            >
              <div style={{ fontSize: 16, color: "#5e6b78", marginBottom: 10 }}>
                After masking
              </div>
              <div
                style={{
                  height: 16,
                  borderRadius: 999,
                  background: "#f0e5d5",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "34%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #f0a23b 0%, #f7c46f 100%)",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#0a2f41",
                }}
              >
                0.34
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
