import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout, ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import LatentFactorVisualizer from "../assets/LatentFactorVisualizer";
import { sectionData } from "../meta";

const DisentanglementSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Feature Disentanglement"
    title="One Latent Direction, One Meaningful Change"
    authorInfo="Auto-encoder"
    imageNode={<LatentFactorVisualizer />}
    textFlex={1}
    imgFlex={1.2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      A disentangled latent space tries to isolate factors such as pose, scale, color, speaker identity,
      or content into separate directions.
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
      <li>Changing one coordinate should mostly change one attribute.</li>
      <li>Interpretability improves when the latent factors are less entangled.</li>
      <li>This can help with editing, transfer, and controlled generation.</li>
    </ul>
  </ContentWithImgLayout>
);

const VoiceConversionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Feature Disentanglement"
    title="Why It Matters in Voice Conversion"
    authorInfo="Auto-encoder"
  >
    <Callout type="info" title="Example">
      If one part of the latent code stores speaker identity and another part stores linguistic content,
      we can recombine them to synthesize a new utterance.
    </Callout>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The goal is not just reconstruction accuracy. It is to make the representation controllable and
      semantically meaningful.
    </p>
  </ContentLayout>
);

export const section4Slides: Page[] = [
  createSectionSlide(3, sectionData),
  DisentanglementSlide,
  VoiceConversionSlide,
];