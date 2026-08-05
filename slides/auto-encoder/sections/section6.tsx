import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout, ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import AutoEncoderPipelineVisualizer from "../assets/AutoEncoderPipelineVisualizer";
import { sectionData } from "../meta";

const GenerativeSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 6: Generative and Compression Uses"
    title="The Decoder Can Act Like a Generator"
    authorInfo="Auto-encoder"
    imageNode={<AutoEncoderPipelineVisualizer />}
    textFlex={1}
    imgFlex={1.2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      If the latent space is structured well, sampling or interpolating in latent space can produce new
      outputs that look coherent to the decoder.
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
      <li>The decoder is not only a reverse mapping.</li>
      <li>It can be viewed as a learned synthesis function.</li>
      <li>Variational autoencoders extend this idea by making the latent code probabilistic.</li>
    </ul>
  </ContentWithImgLayout>
);

const CompressionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Generative and Compression Uses"
    title="Autoencoders as Lossy Compression"
    authorInfo="Auto-encoder"
  >
    <Callout type="warning" title="Compression perspective">
      The representation is compact, but reconstruction is not always perfect. That is why autoencoders
      are best understood as lossy compression systems.
    </Callout>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      This framing connects the model to representation learning, image compression, and latent-space
      generation in one clean pipeline.
    </p>
  </ContentLayout>
);

export const section6Slides: Page[] = [
  createSectionSlide(5, sectionData),
  GenerativeSlide,
  CompressionSlide,
];