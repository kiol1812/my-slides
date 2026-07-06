import { type Page } from "@open-slide/core";
import { fill } from "./fill";

export const Cover: Page = () => (
  <div style={fill}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "160px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        className="ac-fadeIn"
        style={{ fontSize: 80, fontWeight: 700, marginBottom: 24 }}
      >
        Machine Learning Intro
      </h1>
      <h2
        className="ac-fadeIn"
        style={{
          fontSize: 56,
          fontWeight: 500,
          color: "#6C757D",
          marginBottom: 64,
        }}
      >
        Deep Learning Study
      </h2>
      <div className="ac-fadeIn" style={{ fontSize: 36, lineHeight: 1.6 }}>
        <p>kiol1812</p>
        <p>2026/07/06</p>
      </div>
    </div>
  </div>
);
