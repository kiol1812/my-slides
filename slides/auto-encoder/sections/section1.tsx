import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";

import AutoEncoderPipelineVisualizer from "../assets/AutoEncoderPipelineVisualizer";
import { sectionData } from "../meta";

const OverviewSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: What an Autoencoder Learns"
    title="A Model That Rebuilds Its Own Input"
    authorInfo="Auto-encoder"
  >
    <p style={{ fontSize: 30, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      An autoencoder learns a compact internal representation by training the
      network to reconstruct the original input from itself.
    </p>
    <MathBlock math="x \xrightarrow{f_\theta} z \xrightarrow{g_\phi} \hat{x}" />
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
      <li>The input and target come from the same sample.</li>
      <li>
        The encoder keeps the information that matters for reconstruction.
      </li>
      <li>The decoder turns that latent code back into the original space.</li>
    </ul>
  </ContentLayout>
);

const ObjectiveSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 1: What an Autoencoder Learns"
    title="Reconstruction Is the Training Signal"
    authorInfo="Auto-encoder"
    imageNode={<AutoEncoderPipelineVisualizer />}
    textFlex={1.05}
    imgFlex={1.25}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The model is not asked to predict labels. It is asked to preserve enough
      structure so that the output stays close to the input.
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-60px" }}
    >
      <MathBlock math="\min_{\theta,\phi} \sum_i \lVert x_i - g_\phi(f_\theta(x_i)) \rVert_2^2" />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-120px" }}
    >
      <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
        This makes the representation useful for{" "}
        <Highlight>compression</Highlight>, feature learning, and later
        downstream adaptation.
      </p>
    </div>
  </ContentWithImgLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  OverviewSlide,
  ObjectiveSlide,
];
