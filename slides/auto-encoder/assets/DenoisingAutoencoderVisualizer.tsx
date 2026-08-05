import React from "react";

const rowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "center",
};

const token = (label: string, background: string, color = "#0a2f41") => (
  <div
    style={{
      width: 64,
      height: 64,
      borderRadius: 18,
      background,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      fontWeight: 800,
      boxShadow: "0 12px 28px rgba(10, 47, 65, 0.1)",
    }}
  >
    {label}
  </div>
);

const arrow = (label: string) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      marginTop: "75px",
    }}
  >
    <div
      style={{
        width: 88,
        height: 4,
        borderRadius: 999,
        background: "linear-gradient(90deg, #0a2f41 0%, #4f83d1 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -2,
          top: -5,
          width: 0,
          height: 0,
          borderTop: "7px solid transparent",
          borderBottom: "7px solid transparent",
          borderLeft: "12px solid #4f83d1",
        }}
      />
    </div>
    <div style={{ fontSize: 18, fontWeight: 700, color: "#51606c" }}>
      {label}
    </div>
  </div>
);

export default function DenoisingAutoencoderVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 560,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #fffdf5 0%, #f7f1df 42%, #f8fafc 100%)",
        border: "1px solid #e6d7a8",
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
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 800 }}>
          Learn to recover the clean signal
        </div>
        <div
          style={{
            padding: "10px 16px",
            borderRadius: 999,
            background: "#fff3c4",
            color: "#a87400",
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          input corruption
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 13,
          flex: 0.5,
          alignItems: "flex-start",
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Clean input
          </div>
          <div style={rowStyle}>
            {token("A", "#ffffff")}
            {token("B", "#ffffff")}
            {token("C", "#ffffff")}
            {token("D", "#ffffff")}
            {token("E", "#ffffff")}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {arrow("corrupt")}
        </div>

        <div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Corrupted input
          </div>
          <div style={rowStyle}>
            {token("A", "#ffffff")}
            {token("?", "#f3c14b", "#ffffff")}
            {token("C", "#ffffff")}
            {token("[MASK]", "#4f83d1", "#ffffff")}
            {token("E", "#ffffff")}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {arrow("encode then decode")}
        </div>

        <div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Reconstructed output
          </div>
          <div style={rowStyle}>
            {token("A", "#eef8f6")}
            {token("B", "#8fd4c5", "#ffffff")}
            {token("C", "#eef8f6")}
            {token("D", "#8fd4c5", "#ffffff")}
            {token("E", "#eef8f6")}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          flex: 1,
        }}
      >
        {[
          ["mask tokens", "replace part of the input with noise"],
          ["encode context", "let the model infer the missing pieces"],
          ["reconstruct", "match the original clean target"],
        ].map(([title, body]) => (
          <div
            key={title}
            style={{
              borderRadius: 22,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(10,47,65,0.1)",
              padding: "18px 20px",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>
              {title}
            </div>
            <div style={{ fontSize: 18, color: "#51606c", lineHeight: 1.5 }}>
              {body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
