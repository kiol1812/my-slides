import React from "react";

import DigitGrid from "./DigitGrid";
import { addNoise, createDigitGrid, interpolateGrids } from "./digitData";

const noise = createDigitGrid("8", { noise: 0.26, seed: 9 });
const target = createDigitGrid("8", { noise: 0.03, seed: 18 });
const mid = interpolateGrids(noise, target, 0.58);

export function ActivationMaximizationVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 600,
        borderRadius: 32,
        padding: 28,
        background: "linear-gradient(180deg, #fff8f3 0%, #f5ede5 100%)",
        border: "1px solid #e6d3c5",
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
            Activation maximization
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            Hold the weights fixed and move the input toward the pattern that
            maximizes the score.
          </div>
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#b9751a",
            background: "#f8e6cf",
            borderRadius: 999,
            padding: "10px 16px",
          }}
        >
          X updates, model stays fixed
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
        <DigitGrid
          grid={noise}
          width={320}
          label="Start from noise"
          subtitle="The optimization begins with a blank, rough canvas"
          accent="#d68c43"
        />
        <DigitGrid
          grid={mid}
          width={320}
          label="Gradient ascent"
          subtitle="Useful strokes become more visible after each update"
          accent="#f0a23b"
        />
        <DigitGrid
          grid={target}
          width={320}
          label="Maximizing input"
          subtitle="The resulting pattern reveals the filter or class preference"
          accent="#4f83d1"
        />
      </div>
    </div>
  );
}

export function ConstrainedOptimizationVisualizer() {
  const constrained = addNoise(
    createDigitGrid("8", { noise: 0.03, seed: 26 }),
    0.03,
    14,
  );

  return (
    <div
      style={{
        width: "100%",
        height: 700,
        borderRadius: 32,
        padding: 28,
        background: "linear-gradient(180deg, #f5fff8 0%, #ebf5ef 100%)",
        border: "1px solid #d3e5db",
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
            Make the result interpretable
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78" }}>
            A regularizer or generator prior keeps the optimized image closer to
            natural digits.
          </div>
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#2ca089",
            background: "#e5f3ee",
            borderRadius: 999,
            padding: "10px 16px",
          }}
        >
          constraint + prior
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
          flex: 1,
          minHeight: 0,
        }}
      >
        <DigitGrid
          grid={target}
          width={340}
          label="Unconstrained target"
          subtitle="Pure optimization often drifts into texture-like noise"
          accent="#f0a23b"
        />
        <DigitGrid
          grid={constrained}
          width={340}
          label="Constrained result"
          subtitle="The prior pushes the image back toward a readable handwritten digit"
          accent="#2ca089"
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
            Regularization matters
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>
            A constraint limits the search space, which makes the explanation
            closer to human expectations.
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
            Generator prior
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.65, color: "#5e6b78" }}>
            Instead of optimizing pixels directly, optimize inside a learned
            latent space and decode the sample back to image space.
          </div>
        </div>
      </div>
    </div>
  );
}
