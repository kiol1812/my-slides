import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";

import { sectionData } from "../meta";

const DenoisingSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Denoising Seq2Seq Pretraining"
    title="Reconstruct the Original Sequence"
    authorInfo="Self-Supervised Learning"
  >
    <p
      className="ac-fadeIn"
      style={{ fontSize: 32, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}
    >
      BART and T5 pretrain an encoder-decoder model by corrupting the input and asking the decoder to recover the original text.
    </p>
    <div className="ac-fadeIn" style={{ animationDelay: "0.1s" }}>
      <MathBlock math="\tilde{x} = \text{corrupt}(x), \quad \hat{x} = g(f(\tilde{x}))" />
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
        The encoder reads the corrupted sequence and the decoder reconstructs the clean sequence autoregressively.
      </li>
      <li>
        This is a natural fit for tasks where the output should remain fluent and structured.
      </li>
      <li>
        The training objective is a reconstruction loss over the original tokens.
      </li>
    </ul>
    <Callout type="insight" title="General pattern">
      Denoising autoencoders learn by undoing a deliberate corruption process.
    </Callout>
  </ContentLayout>
);

const CorruptionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Denoising Seq2Seq Pretraining"
    title="What Corruption Works Best?"
    authorInfo="Self-Supervised Learning"
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
        Common corruption strategies include token masking, token deletion, span infilling, and sentence permutation.
      </li>
      <li>
        Different objectives stress different kinds of reasoning, so the best choice depends on the downstream task.
      </li>
      <li>
        T5 frames the question as a design problem for how to generate the corrupted text.
      </li>
    </ul>
    <p
      className="ac-fadeIn"
      style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}
    >
      The main idea is not to memorize noise, but to learn how to restore <Highlight>missing structure</Highlight> from context.
    </p>
  </ContentLayout>
);

export const section6Slides: Page[] = [
  createSectionSlide(5, sectionData),
  DenoisingSlide,
  CorruptionSlide,
];
