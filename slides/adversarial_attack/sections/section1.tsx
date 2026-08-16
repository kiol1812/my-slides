import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";
import { MathBlock, MathInline } from "../../../components/shared/math";

import AttackExampleVisualizer from "../assets/AttackExampleVisualizer";
import { sectionData } from "../meta";

const IntuitionSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Attack Intuition"
    title="A small perturbation can change the label"
    authorInfo="Adversarial Attack"
  >
    <ul
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
        An adversarial attack intentionally changes the input so the model makes
        a wrong prediction.
      </li>
      <li>
        The perturbation is usually tiny in pixel space, but it can cross the
        decision boundary.
      </li>
      <li>
        We usually distinguish between <Highlight>non-targeted</Highlight>{" "}
        attacks and <Highlight>targeted</Highlight> attacks.
      </li>
    </ul>

    <Callout type="insight" title="Core idea">
      The attacker keeps the input visually similar while steering the model
      toward a different output.
    </Callout>
  </ContentLayout>
);

const ExampleSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 1: Attack Intuition"
    title="Targeted and non-targeted examples"
    authorInfo="Adversarial Attack"
    imageNode={<AttackExampleVisualizer />}
    textFlex={1}
    imgFlex={1.2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      For a non-targeted attack, any wrong class is acceptable.
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-45px" }}
    >
      <MathBlock math="L(x) = -e(y, \hat{y})" />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-60px" }}
    >
      <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
        For a targeted attack, the adversary wants the output to become a
        specific class.
      </p>
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-105px" }}
    >
      <MathBlock math="L(x) = -e(y, \hat{y}) + e(y, y^{target})" />
    </div>
  </ContentWithImgLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  IntuitionSlide,
  ExampleSlide,
];

