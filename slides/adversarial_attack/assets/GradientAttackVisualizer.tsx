import React from "react";

const stepCard = (title: string, subtitle: string, accent: string) => (
  <div
    style={{
      flex: 1,
      borderRadius: 24,
      padding: 22,
      background: "rgba(255,255,255,0.84)",
      border: "1px solid rgba(10,47,65,0.08)",
      boxShadow: "0 18px 40px rgba(10,47,65,0.08)",
    }}
  >
    <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
      {title}
    </div>
    <div
      style={{
        width: "100%",
        height: 16,
        borderRadius: 999,
        background: `linear-gradient(90deg, ${accent} 0%, #e7eef7 100%)`,
        marginBottom: 14,
      }}
    />
    <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.6 }}>
      {subtitle}
    </div>
  </div>
);

export default function GradientAttackVisualizer() {
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
          Optimize the input, not the weights
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, flex: 1 }}>
        {stepCard(
          "1. Measure loss",
          "Evaluate the model at the current input and compute the gradient with respect to x.",
          "#4f83d1",
        )}
        {stepCard(
          "2. Step along the sign",
          "FGSM keeps only the sign of the gradient to make a single large move.",
          "#2ca089",
        )}
        {stepCard(
          "3. Project back",
          "Clip the update so the final point stays inside the allowed ε-ball.",
          "#e5a93d",
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: 16,
          flex: 1,
        }}
      >
        <div
          style={{
            borderRadius: 28,
            padding: 24,
            background: "rgba(255,255,255,0.82)",
            border: "1px solid rgba(10,47,65,0.08)",
            boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
            Iteration path
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 200,
              borderRadius: 24,
              background: "linear-gradient(180deg, #f7fbff 0%, #edf5fb 100%)",
              border: "1px solid #d9e5ef",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <svg
              viewBox="0 0 300 150"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <circle
                cx="150"
                cy="65"
                r="50"
                fill="none"
                stroke="#4f83d1"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
              <polyline
                points="110,90 135,70 160,50 190,65"
                fill="none"
                stroke="#a0b5c4"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <circle cx="110" cy="90" r="6" fill="#0a2f41" /> {/* x0 */}
              <circle cx="135" cy="70" r="6" fill="#4f83d1" /> {/* x1 */}
              <circle cx="160" cy="50" r="6" fill="#2ca089" /> {/* x2 */}
              <circle cx="190" cy="65" r="6" fill="#e5a93d" /> {/* x* */}
              <text
                x="90"
                y="105"
                fontSize="15"
                fill="#0a2f41"
                fontWeight="bold"
              >
                x₀
              </text>
              <text
                x="115"
                y="60"
                fontSize="15"
                fill="#4f83d1"
                fontWeight="bold"
              >
                x₁
              </text>
              <text
                x="145"
                y="40"
                fontSize="15"
                fill="#2ca089"
                fontWeight="bold"
              >
                x₂
              </text>
              <text
                x="200"
                y="60"
                fontSize="15"
                fill="#e5a93d"
                fontWeight="bold"
              >
                x*
              </text>
              <text
                x="180"
                y="105"
                fontSize="13"
                fill="#4f83d1"
                fontWeight="600"
                opacity="0.8"
              >
                ε-ball
              </text>
            </svg>
            <div
              style={{
                position: "absolute",
                bottom: 8,
                fontSize: 14,
                color: "#51606c",
                fontWeight: 600,
                background: "rgba(255,255,255,0.85)",
                padding: "4px 14px",
                borderRadius: 999,
                border: "1px solid #d9e5ef",
              }}
            >
              x₀ → x₁ → x₂ → x*
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              borderRadius: 28,
              padding: 24,
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(10,47,65,0.08)",
              boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
              Why FGSM matters
            </div>
            <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.7 }}>
              The fast gradient sign method uses one gradient evaluation and one
              projection step, which makes it a strong baseline for first-order
              attacks.
            </div>
          </div>

          <div
            style={{
              borderRadius: 28,
              padding: 24,
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(10,47,65,0.08)",
              boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
              Iterative refinement
            </div>
            <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.7 }}>
              Repeating the update improves attack success, but every step must
              stay inside the same ε constraint.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
