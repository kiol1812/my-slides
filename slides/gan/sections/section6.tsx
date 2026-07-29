import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { Callout } from "../../../components/shared/callout";
import { sectionData } from "../meta";

export const ConditionalGanSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Conditional Generation"
    title="Conditional GAN (cGAN)"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "-90px",
      }}
    >
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
  ConditionalGanSlide,
];
