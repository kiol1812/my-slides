import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";

import AnomalyDetectionVisualizer from "../assets/AnomalyDetectionVisualizer";
import { sectionData } from "../meta";

const AnomalySlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Anomaly Detection"
    title="Unusual Inputs Are Hard to Reconstruct"
    authorInfo="Auto-encoder"
    imageNode={<AnomalyDetectionVisualizer />}
    textFlex={1}
    imgFlex={1.25}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      Train the autoencoder on normal data, then use reconstruction error as a
      score for inputs that may not fit that pattern.
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-60px" }}
    >
      <MathBlock math="s(x) = \lVert x - \hat{x} \rVert, \\ \quad s(x) > \tau \Rightarrow \text{anomaly}" />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-90px" }}
    >
      <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
        The normal manifold is easy to approximate, so atypical samples often
        produce visibly larger errors.
      </p>
    </div>
  </ContentWithImgLayout>
);

const SummarySlide: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Anomaly Detection"
    title="A Simple Rule with Broad Use"
    authorInfo="Auto-encoder"
  >
    <ul
      style={{
        fontSize: 28,
        color: "#555",
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: 40,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <li>Learn from the normal class only.</li>
      <li>Measure how well the network can rebuild each test input.</li>
      <li>Large reconstruction error is a practical anomaly signal.</li>
    </ul>
  </ContentLayout>
);

export const section7Slides: Page[] = [
  createSectionSlide(6, sectionData),
  AnomalySlide,
  SummarySlide,
];
