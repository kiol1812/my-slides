import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { MathBlock, MathInline } from "../../../components/shared/math";

import ObjectiveConstraintVisualizer from "../assets/ObjectiveConstraintVisualizer";
import { sectionData } from "../meta";

const ObjectiveSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Optimization Objective"
    title="Attack loss and perceptual constraints"
    authorInfo="Adversarial Attack"
  >
    <p style={{ fontSize: 28, color: "#555", lineHeight: 1.7, margin: 0 }}>
      Attack generation is an optimization problem: change the input to increase
      the attack objective while staying inside a small constraint region.
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-60px" }}
    >
      <MathBlock math="x^* = \arg\min_{d(x^0, x) \le \varepsilon} L(x) | x=x^0+\Delta x" />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.1s", position: "relative", top: "-90px" }}
    >
      <Callout type="warning" title="Constraint">
        The perturbation must stay small enough that people do not notice the
        difference.
      </Callout>
    </div>
  </ContentLayout>
);

const NormSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Optimization Objective"
    title="L2 and L∞ distance"
    authorInfo="Adversarial Attack"
    imageNode={<ObjectiveConstraintVisualizer />}
    textFlex={1}
    imgFlex={2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      L2 measures the total energy of the perturbation across all coordinates.
      <br />
      <MathInline math="d(x^0, x) = || \Delta x ||_2 = \\ (\Delta x_1)^2 + (\Delta x_2)^2 +  (\Delta x_3)^2 + \cdots" />
    </p>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      L∞ limits the largest coordinate change and is often used for image
      attacks.
      <br />
      <MathInline math="d(x^0, x) = || \Delta x ||_{\infty} = \max \{ |\Delta x_1|, |\Delta x_2|, |\Delta x_3|, \cdots \}" />
    </p>
  </ContentWithImgLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  ObjectiveSlide,
  NormSlide,
];

