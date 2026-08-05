import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { MathBlock } from "../../../components/shared/math";

import AutoEncoderPipelineVisualizer from "../assets/AutoEncoderPipelineVisualizer";
import { sectionData } from "../meta";

const LatentSpaceSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Latent Compression"
    title="Why a Bottleneck Matters"
    authorInfo="Auto-encoder"
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      When the latent vector is smaller than the input, the network is forced to
      keep only the most informative factors.
    </p>
    <MathBlock math="x \in \mathbb{R}^d \rightarrow z \in \mathbb{R}^k, \quad k \ll d" />
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
      <li>The encoder performs nonlinear dimensionality reduction.</li>
      <li>The latent code acts as a learned summary of the sample.</li>
      <li>
        Useful structure survives even when the input is high-dimensional.
      </li>
    </ul>
  </ContentLayout>
);

const BottleneckSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Latent Compression"
    title="The Bottleneck Is a Design Choice"
    authorInfo="Auto-encoder"
  >
    <Callout type="insight" title="Underlying assumption">
      Natural images and many other signals often vary along fewer factors than
      their raw dimension suggests.
    </Callout>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      If the bottleneck is too wide, the network can memorize the input. If it
      is too narrow, the model loses important detail.
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
      <li>Latent size controls how much information can pass through.</li>
      <li>
        The bottleneck encourages abstraction instead of copy-paste
        reconstruction.
      </li>
      <li>
        This is why autoencoders are often described as learned compression
        models.
      </li>
    </ul>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  LatentSpaceSlide,
  BottleneckSlide,
];
