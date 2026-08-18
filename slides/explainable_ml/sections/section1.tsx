import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { sectionData } from "../meta";

const OverviewSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Introduction and the Meaning of Explanation"
    title="A Prediction Is Not the Same as an Explanation"
    authorInfo="Explainable ML"
  >
    <p style={{ fontSize: 30, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      A model can be accurate and still be hard to trust. Explanation helps us
      understand <Highlight>why</Highlight> a result appeared and how the model
      may be improved.
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18,
      }}
    >
      {[
        ["Input", "A handwritten digit arrives."],
        ["Model", "The network maps it to a class."],
        ["Explanation", "We inspect the reason behind the class."],
      ].map(([title, description]) => (
        <div
          key={title}
          style={{
            borderRadius: 24,
            padding: 22,
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(10,47,65,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#0a2f41",
              marginBottom: 10,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 18, color: "#5e6b78", lineHeight: 1.65 }}>
            {description}
          </div>
        </div>
      ))}
    </div>
  </ContentLayout>
);

const ConceptsSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Introduction and the Meaning of Explanation"
    title="Interpretable Versus Explainable"
    authorInfo="Explainable ML"
  >
    <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
      <div
        style={{
          flex: 1,
          borderRadius: 28,
          background: "rgba(255,255,255,0.78)",
          padding: 24,
          border: "1px solid rgba(10,47,65,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#0a2f41",
            marginBottom: 12,
          }}
        >
          Interpretable
        </div>
        <div style={{ fontSize: 18, color: "#5e6b78", lineHeight: 1.7 }}>
          The model is built so that its logic is readable from the start, such
          as a linear model or a small decision tree.
        </div>
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: 28,
          background: "rgba(255,255,255,0.78)",
          padding: 24,
          border: "1px solid rgba(10,47,65,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#0a2f41",
            marginBottom: 12,
          }}
        >
          Explainable
        </div>
        <div style={{ fontSize: 18, color: "#5e6b78", lineHeight: 1.7 }}>
          The model may still be complex, but we add tools that let us inspect
          or approximate its reasoning.
        </div>
      </div>
    </div>
    <div style={{ marginTop: 12 }}>
      <MathBlock math="\begin{align*} \text{Simple model} & \leftrightarrow \text{easy to read} \\ \text{Deep model} & \leftrightarrow \text{more powerful but harder to inspect} \end{align*}" />
    </div>
    <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
      The practical goal is not perfect transparency. It is to give a reason
      that is good enough for debugging and trust.
    </p>
  </ContentLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  OverviewSlide,
  ConceptsSlide,
];
