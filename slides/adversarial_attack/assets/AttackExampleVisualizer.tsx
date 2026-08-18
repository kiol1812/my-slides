import React from "react";

const cellStyle = (fill: string): React.CSSProperties => ({
  width: 34,
  height: 34,
  borderRadius: 10,
  background: fill,
});

const barStyle = (width: string, color: string): React.CSSProperties => ({
  width,
  height: 18,
  borderRadius: 999,
  background: color,
});

const panelStyle: React.CSSProperties = {
  flex: 1,
  borderRadius: 28,
  padding: 28,
  background: "rgba(255,255,255,0.82)",
  border: "1px solid rgba(10,47,65,0.08)",
  boxShadow: "0 20px 50px rgba(10,47,65,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: 20,
};

export default function AttackExampleVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 660,
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: 30, fontWeight: 800 }}>
          A tiny change can flip the prediction
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
          untargeted and targeted
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "stretch", gap: 16, flex: 1 }}>
        <div style={panelStyle}>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Original input</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
            }}
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                style={cellStyle(
                  index % 5 === 0
                    ? "linear-gradient(135deg, #99b2df 0%, #4f83d1 100%)"
                    : "#e7eef7",
                )}
              />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 18, color: "#51606c" }}>cat</span>
              <span style={barStyle("82%", "#4f83d1")} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 18, color: "#51606c" }}>dog</span>
              <span style={barStyle("14%", "#dbe7f6")} />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 72,
            fontWeight: 900,
            color: "#7c9fa8",
          }}
        >
          →
        </div>

        <div style={panelStyle}>
          <div style={{ fontSize: 22, fontWeight: 800 }}>
            Adversarial example
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
            }}
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                style={cellStyle(
                  index % 5 === 0
                    ? "linear-gradient(135deg, #8fd4c5 0%, #2ca089 100%)"
                    : "#e7eef7",
                )}
              />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 18, color: "#51606c" }}>cat</span>
              <span style={barStyle("18%", "#dbe7f6")} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 18, color: "#51606c" }}>dog</span>
              <span style={barStyle("76%", "#2ca089")} />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 72,
            fontWeight: 900,
            color: "#7c9fa8",
          }}
        >
          →
        </div>

        <div style={panelStyle}>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Perturbation</div>
          <div
            style={{
              width: "100%",
              height: 260,
              position: "relative",
              borderRadius: 24,
              background: "linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%)",
              border: "1px solid #d9e5ef",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "40%",
                top: "50%",
                width: 4,
                height: 400,
                background: "rgba(10, 47, 65, 0.15)",
                transform: "translate(45px, -50%) rotate(20deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "40%",
                top: 20,
                transform: "translateX(65px)",
                fontSize: 13,
                fontWeight: 800,
                color: "#7c9fa8",
              }}
            >
              Decision Boundary
            </div>
            <div
              style={{
                position: "absolute",
                left: "40%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 160,
                height: 160,
                borderRadius: "50%",
                border: "3px dashed #4f83d1",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 10,
              }}
            >
              <span style={{ color: "#4f83d1", fontSize: 16, fontWeight: 800 }}>
                ε-ball
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                left: "40%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#0a2f41",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "40%",
                top: "50%",
                transform: "translate(-35px, 5px)",
                fontSize: 22,
                fontWeight: 800,
                color: "#0a2f41",
              }}
            >
              x
            </div>
            <div
              style={{
                position: "absolute",
                left: "40%",
                top: "50%",
                width: 70,
                height: 4,
                borderRadius: 999,
                background: "linear-gradient(90deg, #4f83d1 0%, #2ca089 100%)",
                transformOrigin: "left center",
                transform: "translate(0, -50%) rotate(15deg)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(40% + 68px)",
                top: "calc(50% + 18px)",
                width: 18,
                height: 18,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: "#2ca089",
                boxShadow: "0 0 0 8px rgba(44,160,137,0.12)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(40% + 75px)",
                top: "calc(50% + 10px)",
                fontSize: 22,
                fontWeight: 800,
                color: "#2ca089",
              }}
            >
              x + δ
            </div>
          </div>
          <div style={{ fontSize: 16, color: "#51606c", lineHeight: 1.6 }}>
            The perturbation <strong>δ</strong> is bounded by <strong>ε</strong>{" "}
            (imperceptible to humans)
          </div>
        </div>
      </div>
    </div>
  );
}
