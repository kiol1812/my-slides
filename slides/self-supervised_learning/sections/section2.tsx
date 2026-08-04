import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentWithImgLayout,
  ContentLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";

import { sectionData } from "../meta";
import MaskedLanguageModelingVisualizer from "../assets/MaskedLanguageModelingVisualizer";

const MaskingSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Masked Language Modeling"
    title="Predict the Missing Token"
    authorInfo="Self-Supervised Learning"
    imageNode={<MaskedLanguageModelingVisualizer />}
    imageWidth={760}
    imageHeight={520}
  >
    <ul
      className="ac-fadeIn"
      style={{
        fontSize: 28,
        color: "#555",
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: 40,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <li>
        BERT masks a portion of the input tokens and asks the encoder to recover
        the original words.
      </li>
      <li>
        The corrupted token may be replaced by{" "}
        <strong style={{ color: "#0a2f41" }}>[MASK]</strong>, a random token, or
        kept unchanged.
      </li>
      <li>The task forces the model to use both left and right context.</li>
    </ul>
    <Callout type="warning" title="Training signal">
      The target is the original token, not the masked symbol.
    </Callout>
  </ContentWithImgLayout>
);

const OutputHeadSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Masked Language Modeling"
    title="How BERT Produces Predictions"
    authorInfo="Self-Supervised Learning"
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.1s" }}>
      <MathBlock math="h_i \rightarrow W h_i + b \rightarrow \text{softmax} \rightarrow p(token \mid context)" />
    </div>
    <ul
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        fontSize: 28,
        color: "#555",
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: 40,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <li>
        Only the hidden states at masked positions are used for the
        reconstruction loss.
      </li>
      <li>
        The objective is a standard{" "}
        <strong style={{ color: "#0a2f41" }}>cross-entropy loss</strong> over
        the vocabulary.
      </li>
      <li>
        This makes the encoder learn{" "}
        <Highlight>contextual representations</Highlight> instead of static word
        lookup tables.
      </li>
    </ul>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  MaskingSlide,
  OutputHeadSlide,
];
