import { type Page } from "@open-slide/core";

import { fill } from "./fill";
import { Eyebrow } from "./eyebrow";
import { Footer } from "./footer";

export interface SectionItem {
  title: string;
  subtitle?: string;
}

export const createTocSlide = (sectionData: SectionItem[]): Page => {
  return () => (
    <div style={fill}>
      <div
        style={{
          padding: "120px 140px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* ===== Header ===== */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            marginBottom: 60,
          }}
        >
          <Eyebrow>Agenda</Eyebrow>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Outline
          </h1>
        </div>

        {/* ===== Contents ===== */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 36,
            flex: 1,
            paddingLeft: 20,
            justifyContent: "start",
          }}
        >
          {sectionData.map((item, index) => (
            <div
              key={index}
              className="ac-fadeIn"
              style={{ display: "flex", alignItems: "center", gap: 40 }}
            >
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#6C757D",
                  opacity: 0.7,
                }}
              >
                0{index + 1}
              </span>
              <span style={{ fontSize: 44, fontWeight: 500 }}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer authorInfo="Machine Learning Intro" />
    </div>
  );
};
