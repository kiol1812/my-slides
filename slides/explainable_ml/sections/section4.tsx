import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout, ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { RepresentationVisualizer, ProbeAttentionVisualizer } from "../assets/RepresentationVisualizer";
import { sectionData } from "../meta";

const RepresentationSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Inside the Network"
    title="Hidden States Become More Organized Layer by Layer"
    authorInfo="Explainable ML"
  >
    <RepresentationVisualizer />
  </ContentLayout>
);

const ProbeSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Inside the Network"
    title="A Probe Checks Whether the Information Is Present"
    authorInfo="Explainable ML"
    imageNode={<ProbeAttentionVisualizer />}
    textFlex={1}
    imgFlex={1.14}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      A probe is a small model trained on hidden features. If it can recover the
      concept we want, then that concept is likely encoded there.
    </p>
  </ContentWithImgLayout>
);

const AttentionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Inside the Network"
    title="Attention Can Be Inspected, But It Is Not Automatically a Full Explanation"
    authorInfo="Explainable ML"
  >
    <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
      <div style={{ flex: 1, borderRadius: 28, padding: 24, background: "rgba(255,255,255,0.78)", border: "1px solid rgba(10,47,65,0.08)" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#0a2f41", marginBottom: 10 }}>What we can inspect</div>
        <div style={{ fontSize: 18, lineHeight: 1.7, color: "#5e6b78" }}>We can visualize weights, compare heads, and see which tokens or regions receive more focus.</div>
      </div>
      <div style={{ flex: 1, borderRadius: 28, padding: 24, background: "rgba(255,255,255,0.78)", border: "1px solid rgba(10,47,65,0.08)" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#0a2f41", marginBottom: 10 }}>What we cannot assume</div>
        <div style={{ fontSize: 18, lineHeight: 1.7, color: "#5e6b78" }}>A visually clear attention map is not proof of causality. It is a useful signal, not the final answer.</div>
      </div>
    </div>
  </ContentLayout>
);

export const section4Slides: Page[] = [
  createSectionSlide(3, sectionData),
  RepresentationSlide,
  ProbeSlide,
  AttentionSlide,
];
