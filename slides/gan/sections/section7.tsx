import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import { Badge } from "../../../components/shared/badge";
import { sectionData } from "../meta";

import CycleGANVisualizer from "../assets/CycleGANVisualizer";

export const UnpairedDataSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Unsupervised Conditional Generation"
    title="Learning from Unpaired Data"
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
          In many real-world scenarios, finding perfectly paired datasets is
          impossible (e.g., real photos mapping exactly to Van Gogh paintings).
        </li>
        <li>
          We want to learn the mapping between{" "}
          <strong style={{ color: "#0a2f41" }}>Domain X</strong> and{" "}
          <strong style={{ color: "#0a2f41" }}>Domain Y</strong> using
          completely <Highlight>unpaired datasets</Highlight>.
        </li>
        <li>
          If we only train a generator <MathInline math="G_{X \to Y}" /> with a
          discriminator <MathInline math="D_Y" />, the generator might{" "}
          <strong style={{ color: "#e5a93d" }}>
            ignore the input completely
          </strong>{" "}
          and just output random, valid Domain Y images to fool the
          discriminator.
        </li>
      </ul>
    </div>
  </ContentLayout>
);

export const CycleGanSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Unsupervised Conditional Generation"
    title="Cycle GAN & Cycle Consistency"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%",
      }}
    >
      <div style={{ flex: 1 }}>
        <CycleGANVisualizer />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          top: "-30px",
        }}
      >
        <ul
          className="ac-fadeIn"
          style={{
            animationDelay: "0.4s",
            fontSize: 24,
            color: "#555",
            lineHeight: 1.7,
            margin: 0,
            paddingLeft: 40,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <li>
            To prevent the generator from ignoring the input, we introduce a
            second generator <MathInline math="G_{Y \to X}" />.
          </li>
          <li>
            <strong style={{ color: "#0a2f41" }}>Cycle Consistency:</strong> If
            we map an image from Domain X to Domain Y, we must be able to
            translate it back to the exact original image in Domain X.
          </li>
          <li>
            This constraint forces the intermediate representation to retain the
            structural relationship with the original input.
          </li>
        </ul>
      </div>
    </div>
  </ContentLayout>
);

export const TextStyleTransferSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Unsupervised Conditional Generation"
    title="Text Style Transfer"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div
        className="ac-fadeIn"
        style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
      >
        <Badge>Seq2Seq with Cycle GAN</Badge>
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
          Cycle GAN concepts can be applied to text, such as transferring
          negative sentiment sentences to positive ones without paired examples.
        </li>
        <li>
          <strong style={{ color: "#e5a93d" }}>The Challenge:</strong> Passing
          discrete text tokens from the Generator to the Discriminator breaks
          the computational graph, making it{" "}
          <Highlight>non-differentiable</Highlight>.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>The Solution:</strong> The
          Generator is treated as a policy network, and the Discriminator
          provides a reward, utilizing{" "}
          <Highlight>Reinforcement Learning (RL)</Highlight> to update the
          model.
        </li>
      </ul>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.4s", marginTop: 20 }}
      >
        <Callout type="insight" title="Beyond Images">
          Unsupervised conditional generation has expanded into Unsupervised
          Abstractive Summarization, Unsupervised Machine Translation, and
          Unsupervised Automatic Speech Recognition (ASR).
        </Callout>
      </div>
    </div>
  </ContentLayout>
);

export const section7Slides: Page[] = [
  createSectionSlide(6, sectionData),
  UnpairedDataSlide,
  CycleGanSlide,
  TextStyleTransferSlide,
];
