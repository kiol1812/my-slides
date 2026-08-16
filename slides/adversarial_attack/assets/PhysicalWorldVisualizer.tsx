import React from "react";

const frame = {
  flex: "1 1 240px",
  minWidth: 240,
  borderRadius: 28,
  padding: 22,
  background: "rgba(255,255,255,0.84)",
  border: "1px solid rgba(10,47,65,0.08)",
  boxShadow: "0 20px 50px rgba(10,47,65,0.08)",
  display: "flex",
  flexDirection: "column",
} as React.CSSProperties;

export default function PhysicalWorldVisualizer() {
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
        gap: 30,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ fontSize: "clamp(20px, 4vw, 30px)", fontWeight: 800 }}>
          The camera sees a different world than the model
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#eef8f6",
            color: "#2ca089",
            fontSize: 18,
            fontWeight: 800,
            whiteSpace: "nowrap",
          }}
        >
          print and capture
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          flex: 1,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <div style={frame}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Digital patch
          </div>
          <div
            style={{
              width: "100%",
              height: 210,
              borderRadius: 26,
              background: "linear-gradient(180deg, #f7fbff 0%, #edf5fb 100%)",
              border: "1px solid #d9e5ef",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#0a2f41",
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#2ca089",
                }}
              />
            </div>
            <div
              style={{
                width: "60%",
                height: 48,
                borderRadius: 18,
                background: "linear-gradient(90deg, #4f83d1 0%, #2ca089 100%)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 50,
            fontWeight: 900,
            color: "#7c9fa8",
          }}
        >
          →
        </div>
        <div style={frame}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Printed object
          </div>
          <div
            style={{
              width: "100%",
              height: 210,
              borderRadius: 26,
              background: "linear-gradient(180deg, #f7fbff 0%, #edf5fb 100%)",
              border: "1px solid #d9e5ef",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 130,
                height: 150,
                background: "#ffffff",
                borderRadius: 4,
                boxShadow: "2px 6px 16px rgba(0,0,0,0.15)",
                border: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(-5deg)",
                padding: 12,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px dashed #b0c4de",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    justifyContent: "center",
                    width: "100%",
                    opacity: 0.85,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#0a2f41",
                    }}
                  />
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#2ca089",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "70%",
                    height: 20,
                    borderRadius: 10,
                    background:
                      "linear-gradient(90deg, #4f83d1 0%, #2ca089 100%)",
                    opacity: 0.85,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 50,
            fontWeight: 900,
            color: "#7c9fa8",
          }}
        >
          →
        </div>

        <div style={frame}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Camera and model
          </div>
          <div
            style={{
              width: "100%",
              height: 210,
              borderRadius: 26,
              background: "linear-gradient(180deg, #f7fbff 0%, #edf5fb 100%)",
              border: "1px solid #d9e5ef",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 160,
                height: 120,
                background: "#1e293b",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "80%",
                  background: "#0f172a",
                  borderRadius: 8,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    width: 12,
                    height: 12,
                    borderTop: "2px solid rgba(255,255,255,0.6)",
                    borderLeft: "2px solid rgba(255,255,255,0.6)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 12,
                    height: 12,
                    borderTop: "2px solid rgba(255,255,255,0.6)",
                    borderRight: "2px solid rgba(255,255,255,0.6)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    left: 8,
                    width: 12,
                    height: 12,
                    borderBottom: "2px solid rgba(255,255,255,0.6)",
                    borderLeft: "2px solid rgba(255,255,255,0.6)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    width: 12,
                    height: 12,
                    borderBottom: "2px solid rgba(255,255,255,0.6)",
                    borderRight: "2px solid rgba(255,255,255,0.6)",
                  }}
                />

                <div
                  style={{
                    width: 85,
                    height: 100,
                    background: "#cbd5e1",
                    borderRadius: 3,
                    transform: "rotate(-8deg) scale(0.9)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    filter: "blur(1.5px) contrast(0.85)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#0a2f41",
                      }}
                    />
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#2ca089",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "70%",
                      height: 14,
                      borderRadius: 8,
                      background:
                        "linear-gradient(90deg, #4f83d1 0%, #2ca089 100%)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.2) 100%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#51606c",
              lineHeight: 1.6,
              marginTop: 16,
            }}
          >
            The perturbation must survive printing, lighting changes, and
            capture noise.
          </div>
        </div>
      </div>
    </div>
  );
}
