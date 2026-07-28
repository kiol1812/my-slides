import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import { sectionData } from "../meta";

export const MemoryGansSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Conditional Generation"
    title="The Memorization Problem"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <ul
        className="ac-fadeIn"
        style={{
          fontSize: 26,
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
          A generator could theoretically achieve a perfect score (like an
          extremely small FID) by simply{" "}
          <strong style={{ color: "#e5a93d" }}>
            memorizing and reproducing
          </strong>{" "}
          the exact training data.
        </li>
        <li>
          Flipping, cropping, or verbatim copying real data does not constitute
          true generation.
        </li>
        <li>
          We want models that learn the underlying distribution and can
          synthesize entirely <Highlight>novel, unseen samples</Highlight>.
        </li>
      </ul>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", marginTop: 20 }}
      >
        <Callout type="insight" title="Evaluation Caveat">
          Metrics like IS and FID measure distribution alignment but cannot
          easily detect if a model is merely acting as a lookup table for the
          training dataset.
        </Callout>
      </div>
    </div>
  </ContentLayout>
);

export const ConditionalGanSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Conditional Generation"
    title="Conditional GAN (cGAN)"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <div className="ac-fadeIn">
        <MathBlock math="y = G(c, z)" />
      </div>
      <ul
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          fontSize: 26,
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
          <strong style={{ color: "#0a2f41" }}>Generator:</strong> Takes a
          condition <MathInline math="c" /> (e.g., text "Red eyes") alongside
          the normal distribution noise <MathInline math="z" />.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Discriminator:</strong> Evaluates
          both the generated image <MathInline math="y" /> and the condition{" "}
          <MathInline math="x" />.
        </li>
        <li>
          The Discriminator must verify two criteria simultaneously:
          <ol
            style={{
              marginTop: 8,
              paddingLeft: 30,
              color: "#2ca089",
              fontWeight: 600,
            }}
          >
            <li>
              Is the image <MathInline math="y" /> realistic?
            </li>
            <li>
              Do the condition <MathInline math="x" /> and image{" "}
              <MathInline math="y" /> match?
            </li>
          </ol>
        </li>
      </ul>
      <div className="ac-fadeIn" style={{ animationDelay: "0.4s" }}>
        <Callout type="info" title="Training Requirement">
          Training cGANs requires explicit paired data. The Discriminator must
          be fed positive pairs (true text-image matches) and negative pairs
          (mismatched text-image pairs or fake images).
        </Callout>
      </div>
    </div>
  </ContentLayout>
);

export const section6Slides: Page[] = [
  createSectionSlide(5, sectionData),
  MemoryGansSlide,
  ConditionalGanSlide,
];
