import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout, ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import CodebookVisualizer from "../assets/CodebookVisualizer";
import { sectionData } from "../meta";

const DiscreteLatentSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 5: Discrete Latent Codes"
    title="A Latent Code Can Be a Word from a Finite Vocabulary"
    authorInfo="Auto-encoder"
    imageNode={<CodebookVisualizer />}
    textFlex={1}
    imgFlex={1.3}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      Instead of a continuous vector, the encoder can map the sample to a discrete code chosen from a
      learned codebook.
    </p>
    <ul
      style={{
        fontSize: 26,
        color: "#555",
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: 40,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <li>The bottleneck behaves more like classification than regression.</li>
      <li>Quantization limits output variability and regularizes the representation.</li>
      <li>Discrete latents are useful when the structure is naturally symbolic or compositional.</li>
    </ul>
  </ContentWithImgLayout>
);

const TextRepresentationSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Discrete Latent Codes"
    title="From Text Tokens to Trees"
    authorInfo="Auto-encoder"
  >
    <Callout type="insight" title="Text as representation">
      A sequence-to-sequence autoencoder can be used for unsupervised text summarization, but the latent
      space often needs extra constraints to stay readable.
    </Callout>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The same discrete idea can extend to structured objects such as trees, where the latent code acts
      as a compact symbolic summary.
    </p>
  </ContentLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  DiscreteLatentSlide,
  TextRepresentationSlide,
];