import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline } from "../../../components/shared/math";
import { FlowDiagram } from "../../../components/shared/flowDiagram";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import { sectionData } from "../meta";

import { basic_gan_nodes, basic_gan_edges } from "../assets/diagrams";

// ==========================================
// Slides
// ==========================================

const IntroductionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Introduction to GANs"
    title="Generative Adversarial Network"
    authorInfo="Generative Adversarial Network"
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
        Traditional models output a{" "}
        <strong style={{ color: "#0a2f41" }}>fixed prediction</strong>{" "}
        <MathInline math="y" /> given an input <MathInline math="x" />.
      </li>
      <li>
        A <Highlight>Generator</Highlight> takes an additional{" "}
        <strong style={{ color: "#0a2f41" }}>simple distribution</strong> (e.g.,
        normal distribution <MathInline math="z" />) as input.
      </li>
      <li>
        This formulation allows the output to be a{" "}
        <strong style={{ color: "#0a2f41" }}>complex distribution</strong> with
        inherent randomness.
      </li>
    </ul>

    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "550px",
        width: "100%",
        marginTop: "40px",
        position: "relative",
        top: "-120px",
      }}
    >
      <FlowDiagram nodes={basic_gan_nodes} edges={basic_gan_edges} />
    </div>
  </ContentLayout>
);

const WhyDistributionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Introduction to GANs"
    title="Why output a distribution?"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{ display: "flex", flexDirection: "row", gap: 40, height: "100%" }}
    >
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
      >
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
            <strong style={{ color: "#0a2f41" }}>
              Video Prediction Example:
            </strong>{" "}
            When predicting the next frame in a game, both turning left and
            turning right might be correct actions based on the previous frames.
          </li>
          <li>
            If the network only outputs a single deterministic result, it might
            attempt to satisfy all valid paths, leading to a blurry or
            overlapping prediction (e.g., rendering both left and right
            movements simultaneously).
          </li>
          <li>
            By providing a random distribution <MathInline math="z" /> as input,
            the model is forced to collapse the possibilities and{" "}
            <Highlight>output a single, valid distinct path</Highlight>.
          </li>
        </ul>

        <div className="ac-fadeIn" style={{ animationDelay: "0.3s" }}>
          <Callout type="insight" title="Unconditional Generation">
            Useful for tasks requiring "creativity", such as drawing characters
            (random anime faces) or chatbots (generating varied and natural
            responses rather than repetitive deterministic answers).
          </Callout>
        </div>
      </div>
    </div>
  </ContentLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  IntroductionSlide,
  WhyDistributionSlide,
];
