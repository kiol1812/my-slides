import React from "react";
import { type Page } from "@open-slide/core";

import { ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import LocalMaskVisualizer from "../assets/LocalMaskVisualizer";
import { sectionData } from "../meta";

const WhyThisDigitSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Local Explanations"
    title="Why Is This Digit an 8?"
    authorInfo="Explainable ML"
    imageNode={<LocalMaskVisualizer />}
    textFlex={1}
    imgFlex={1.15}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      Local explanation focuses on <Highlight>one sample</Highlight>. The
      question is not what the model believes in general, but why this specific
      digit receives its label.
    </p>
    <ul
      style={{
        fontSize: 24,
        color: "#555",
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: 36,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <li>Mask or perturb a small region.</li>
      <li>Observe how the confidence changes.</li>
      <li>Mark the region as important if the score shifts a lot.</li>
    </ul>
  </ContentWithImgLayout>
);

const DecisionRegionSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Local Explanations"
    title="Critical Region"
    authorInfo="Explainable ML"
    imageNode={<LocalMaskVisualizer />}
    textFlex={1}
    imgFlex={1.15}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The explanation is built by testing counterfactual input changes. If a
      small edit breaks the prediction, that area is likely carrying important
      evidence.
    </p>
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
      {[
        ["Local", "One example only"],
        ["Counterfactual", "What happens if we remove evidence?"],
        ["Actionable", "Useful for debugging the model"],
      ].map(([title, description]) => (
        <div
          key={title}
          style={{
            padding: 18,
            borderRadius: 22,
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(10,47,65,0.08)",
            minWidth: 190,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#0a2f41",
              marginBottom: 8,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 16, color: "#5e6b78", lineHeight: 1.6 }}>
            {description}
          </div>
        </div>
      ))}
    </div>
    <Callout type="insight" title="Take a way">
      A critical region is a region that changes the decision
    </Callout>
  </ContentWithImgLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  WhyThisDigitSlide,
  DecisionRegionSlide,
];
