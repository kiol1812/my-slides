import React from "react";

const point = (left: number, top: number, color: string) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: color,
      boxShadow: `0 0 0 8px ${color}22`,
    }}
  />
);

const ColorGrid = ({ left, top }: { left: number; top: number }) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width: 44,
      height: 44,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      border: "1px solid #111",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
    }}
  >
    <div
      style={{
        background: "#e60000",
        borderRight: "1px solid #111",
        borderBottom: "1px solid #111",
      }}
    />
    <div style={{ background: "#f0a30a", borderBottom: "1px solid #111" }} />
    <div style={{ background: "#eaff00", borderRight: "1px solid #111" }} />
    <div style={{ background: "#00cc00" }} />
  </div>
);

const LabelBox = ({
  left,
  top,
  text,
  bg,
}: {
  left: number;
  top: number;
  text: string;
  bg: string;
}) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      background: bg,
      padding: "4px 10px",
      fontSize: 16,
      fontWeight: 500,
      color: "#000",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      whiteSpace: "nowrap",
    }}
  >
    {text}
  </div>
);

export default function ObjectiveConstraintVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 640,
        borderRadius: 34,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #ffffff 0%, #eef4f8 46%, #f5f8fb 100%)",
        border: "1px solid #d9e5ef",
        boxShadow: "0 24px 60px rgba(10,47,65,0.12)",
        color: "#0a2f41",
        display: "grid",
        gridTemplateColumns: "0.8fr 1.2fr",
        gap: 20,
      }}
    >
      <div
        style={{
          borderRadius: 28,
          padding: 24,
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(10,47,65,0.08)",
          boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
          Constraint set
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 500,
            borderRadius: 24,
            background: "linear-gradient(180deg, #f7fbff 0%, #edf5fb 100%)",
            border: "1px solid #d9e5ef",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: "50%",
              height: 2,
              background: "#7c9fa8",
              opacity: 0.5,
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
              left: "50%",
              width: 2,
              background: "#7c9fa8",
              opacity: 0.5,
              transform: "translateX(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 300,
              borderRadius: "50%",
              border: "3px dashed #4f83d1",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 294,
              height: 294,
              borderRadius: "50%",
              background: "rgba(79,131,209,0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 90,
              height: 3,
              background: "linear-gradient(90deg, #0a2f41 0%, #2ca089 100%)",
              transformOrigin: "left center",
              transform: "translate(0, -50%) rotate(-35deg)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "calc(50% + 74px)",
              top: "calc(50% - 52px)",
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #2ca089 0%, #e5a93d 100%)",
              transformOrigin: "left center",
              transform: "translate(0, -50%) rotate(-10deg)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#0a2f41",
              boxShadow: "0 0 0 8px rgba(10,47,65,0.15)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-32px, 12px)",
              fontSize: 20,
              fontWeight: 800,
              color: "#0a2f41",
            }}
          >
            x₀
          </div>
          <div
            style={{
              position: "absolute",
              left: "calc(50% + 74px)",
              top: "calc(50% - 52px)",
              transform: "translate(-50%, -50%)",
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#2ca089",
              boxShadow: "0 0 0 6px rgba(44,160,137,0.15)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "calc(50% + 133px)",
              top: "calc(50% - 62px)",
              transform: "translate(-50%, -50%)",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#e5a93d",
              boxShadow: "0 0 0 8px rgba(229,169,61,0.2)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "calc(50% + 149px)",
              top: "calc(50% - 82px)",
              fontSize: 20,
              fontWeight: 800,
              color: "#e5a93d",
            }}
          >
            x*
          </div>
          <div
            style={{
              position: "absolute",
              left: 32,
              bottom: 28,
              fontSize: 20,
              fontWeight: 700,
              color: "#0a2f41",
            }}
          >
            d(x₀, x) ≤ ε
          </div>
          <div
            style={{
              position: "absolute",
              right: 32,
              top: 28,
              fontSize: 18,
              fontWeight: 700,
              color: "#51606c",
              background: "rgba(255,255,255,0.6)",
              padding: "4px 12px",
              borderRadius: 12,
            }}
          >
            move inside the ball
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            borderRadius: 28,
            padding: 24,
            background: "rgba(255,255,255,0.82)",
            border: "1px solid rgba(10,47,65,0.08)",
            boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: 400, height: 280 }}>
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1,
              }}
            >
              <defs>
                <marker
                  id="arrowSolid"
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,8 L8,4 z" fill="#000" />
                </marker>
                <marker
                  id="arrowDashed"
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,8 L8,4 z" fill="#000" />
                </marker>
              </defs>
              <path
                d="M 64 140 L 326 60"
                stroke="#000"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowSolid)"
              />
              <path
                d="M 64 140 L 326 220"
                stroke="#000"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowSolid)"
              />
              <path
                d="M 240 90 L 305 125"
                stroke="#000"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
                markerEnd="url(#arrowDashed)"
              />
              <path
                d="M 240 190 L 305 155"
                stroke="#000"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
                markerEnd="url(#arrowDashed)"
              />
            </svg>
            <ColorGrid left={40} top={140} />
            <ColorGrid left={360} top={60} />
            <div
              style={{
                position: "absolute",
                left: 100,
                top: 60,
                transform: "translateY(-50%)",
                fontSize: 16,
                lineHeight: 1.3,
                color: "#000",
              }}
            >
              Change
              <br />
              every pixel a<br />
              little bit
            </div>
            <LabelBox left={300} top={12} text="small L-∞" bg="#eab598" />
            <ColorGrid left={360} top={220} />
            <div
              style={{
                position: "absolute",
                left: 100,
                top: 220,
                transform: "translateY(-50%)",
                fontSize: 16,
                lineHeight: 1.3,
                color: "#000",
              }}
            >
              Change one
              <br />
              pixel much
            </div>
            <LabelBox left={300} top={268} text="large L-∞" bg="#eab598" />
            <LabelBox left={330} top={140} text="same L2" bg="#ebd38d" />
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
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
            Loss sketch
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.7, color: "#51606c" }}>
            <div style={{ marginBottom: 8 }}>
              Non-targeted:{" "}
              <span style={{ color: "#0a2f41", fontWeight: 700 }}>
                maximize
              </span>{" "}
              the error.
            </div>
            <div style={{ marginBottom: 8 }}>
              Targeted:{" "}
              <span style={{ color: "#0a2f41", fontWeight: 700 }}>
                maximize
              </span>{" "}
              the target score while preserving the norm bound.
            </div>
            <div>
              Common norms: L2 measures total energy, L∞ bounds the largest
              coordinate change.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
