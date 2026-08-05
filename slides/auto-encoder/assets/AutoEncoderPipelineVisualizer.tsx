import React from "react";

const stageStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 220,
  borderRadius: 28,
  padding: "28px 24px",
  background: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(10, 47, 65, 0.1)",
  boxShadow: "0 20px 50px rgba(10, 47, 65, 0.08)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const arrowStyle: React.CSSProperties = {
  width: 16,
  height: 4,
  borderRadius: 999,
  background: "linear-gradient(90deg, #0a2f41 0%, #4f83d1 100%)",
  position: "relative",
};

const arrowHead = {
  position: "absolute" as const,
  right: -2,
  top: -5,
  width: 0,
  height: 0,
  borderTop: "7px solid transparent",
  borderBottom: "7px solid transparent",
  borderLeft: "12px solid #4f83d1",
};

const bar = (width: number, height: number, fill: string) => (
  <div
    style={{
      width,
      height,
      borderRadius: 12,
      background: fill,
    }}
  />
);

export default function AutoEncoderPipelineVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 660,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #f8fcff 0%, #eef5fb 42%, #f6f8fb 100%)",
        border: "1px solid #d9e5ef",
        boxShadow: "0 24px 60px rgba(10, 47, 65, 0.12)",
        color: "#0a2f41",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#2ca089",
          }}
        />
        <div style={{ fontSize: 28, fontWeight: 800 }}>
          Encode, compress, reconstruct
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 6,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={stageStyle}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
              Input x
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
              }}
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    height: 42,
                    borderRadius: 12,
                    background:
                      index % 5 === 0
                        ? "linear-gradient(135deg, #99b2df 0%, #4f83d1 100%)"
                        : "#e7eef7",
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#51606c" }}>
            High-dimensional observation
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={arrowStyle}>
            <span style={arrowHead} />
          </div>
        </div>

        <div style={stageStyle}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
              Encoder f(x)
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-end",
                height: 136,
              }}
            >
              {bar(34, 72, "#dbe7f6")}
              {bar(34, 108, "#99b2df")}
              {bar(34, 136, "#4f83d1")}
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#51606c" }}>
            Feature extraction and compression
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={arrowStyle}>
            <span style={arrowHead} />
          </div>
        </div>

        <div style={stageStyle}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
              Latent z
            </div>
            <div
              style={{
                width: 160,
                height: 160,
                margin: "0 auto",
                borderRadius: 32,
                background: "radial-gradient(#2ca089 46%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 54,
                fontWeight: 900,
                boxShadow: "inset 0 0 0 12px rgba(255,255,255,0.16)",
              }}
            >
              z
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#51606c", textAlign: "center" }}>
            Bottleneck representation
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={arrowStyle}>
            <span style={arrowHead} />
          </div>
        </div>

        <div style={stageStyle}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
              Decoder g(z)
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
              }}
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    height: 42,
                    borderRadius: 12,
                    background:
                      index % 5 === 0
                        ? "linear-gradient(135deg, #8fd4c5 0%, #2ca089 100%)"
                        : "#e7eef7",
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#51606c" }}>
            Reconstruction x-hat
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <div style={{ fontSize: 22, color: "#51606c" }}>
          The model learns what must be preserved to recover the input.
        </div>
        <div
          style={{
            padding: "12px 18px",
            borderRadius: 999,
            background: "#eef8f6",
            color: "#2ca089",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          minimize reconstruction loss
        </div>
      </div>
    </div>
  );
}
