import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import DenoisingAutoencoderVisualizer from "../assets/DenoisingAutoencoderVisualizer";
import { sectionData } from "../meta";

const DenoisingSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Denoising Autoencoders"
    title="Learn the Clean Signal from the Corrupted One"
    authorInfo="Auto-encoder"
    imageNode={<DenoisingAutoencoderVisualizer />}
    textFlex={1}
    imgFlex={1.25}
  >
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
      <li>The model must infer the missing information from context.</li>
      <li>
        This pushes the representation toward robust structure rather than
        surface copying.
      </li>
    </ul>
  </ContentWithImgLayout>
);

const BERTSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Denoising Autoencoders"
    title="BERT Fits the Same Pattern"
    authorInfo="Auto-encoder"
  >
    <Callout type="insight" title="Masked language modeling">
      BERT can be read as a masked denoising autoencoder: corrupt the tokens,
      encode the context, and reconstruct the missing words.
    </Callout>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The decoder is lightweight, but the reconstruction objective still teaches
      the encoder to build contextualized latent representations.
    </p>
  </ContentLayout>
);

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  DenoisingSlide,
  BERTSlide,
];
