import { MathInline } from "../../../components/shared/math";
import React from "react";

const codeCell = (label: string, active = false) => (
  <div
    style={{
      width: 104,
      height: 88,
      borderRadius: 20,
      background: active
        ? "linear-gradient(135deg, #4f83d1 0%, #2ca089 100%)"
        : "#ffffff",
      border: active ? "none" : "1px solid #d7e3f2",
      color: active ? "#ffffff" : "#0a2f41",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30,
      fontWeight: 800,
      boxShadow: active
        ? "0 18px 38px rgba(79, 131, 209, 0.28)"
        : "0 12px 28px rgba(10, 47, 65, 0.08)",
    }}
  >
    {label}
  </div>
);

export default function CodebookVisualizer() {
  return (
    <div
      style={{
        width: "100%",
        height: 600,
        borderRadius: 32,
        padding: 28,
        background:
          "radial-gradient(circle at top left, #fffdf5 0%, #f5f0de 42%, #f8fafc 100%)",
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
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>
            Discrete latent representation
          </div>
          <div style={{ fontSize: 18, color: "#51606c", marginTop: 6 }}>
            The encoder chooses one code from a finite vocabulary.
          </div>
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
          bottleneck = codebook
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, alignItems: "center", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Input x</div>
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 32,
              background: "linear-gradient(135deg, #f0f4f5 0%, #e7eef7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 900,
              color: "#4f83d1",
              boxShadow: "inset 0 0 0 1px rgba(10,47,65,0.06)",
            }}
          >
            <MathInline math="\mathbf{x}" />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: 4,
              borderRadius: 999,
              background: "linear-gradient(90deg, #0a2f41 0%, #4f83d1 100%)",
            }}
          />
          <div style={{ fontSize: 20, color: "#51606c", fontWeight: 700 }}>
            nearest code selection
          </div>
          <div
            style={{
              width: 100,
              height: 4,
              borderRadius: 999,
              background: "linear-gradient(90deg, #4f83d1 0%, #2ca089 100%)",
            }}
          />
        </div>

        <div
          style={{
            flex: 1.4,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800 }}>Codebook</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 12,
            }}
          >
            {codeCell("q1")}
            {codeCell("q2")}
            {codeCell("q3", true)}
            {codeCell("q4")}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Decoder output
          </div>
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 32,
              background: "linear-gradient(135deg, #f0f4f5 0%, #e7eef7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 900,
              color: "#4f83d1",
              boxShadow: "inset 0 0 0 1px rgba(10,47,65,0.06)",
            }}
          >
            <MathInline math="\hat{\mathbf{x}}" />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {[
          [
            "one-hot style bottleneck",
            "the latent is constrained to a small set of choices",
          ],
          [
            "vector quantization",
            "the encoder output is snapped to the nearest code",
          ],
          [
            "structured reuse",
            "a finite dictionary helps regularize the representation",
          ],
        ].map(([title, body]) => (
          <div
            key={title}
            style={{
              borderRadius: 22,
              background: "rgba(255,255,255,0.72)",
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
