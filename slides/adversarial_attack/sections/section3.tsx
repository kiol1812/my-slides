import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";

import GradientAttackVisualizer from "../assets/GradientAttackVisualizer";
import { sectionData } from "../meta";

const GradientSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Gradient-Based Attacks"
    title="Update the input instead of the parameters"
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
        Fix the model parameters and compute the gradient with respect to the
        input.
      </li>
      <li>
        Move the input in the direction that increases the attack objective.
      </li>
      <li>
        Project the update back into the allowed constraint set after each step.
      </li>
    </ul>
    <Callout type="insight" title="Fast Gradient Sign Method, FGSM">
      The FSGM uses only the sign of the gradient, so it can create a strong
      attack in one step.
    </Callout>
  </ContentLayout>
);

const IterativeSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Gradient-Based Attacks"
    title="One-step and iterative updates"
    authorInfo="Adversarial Attack"
    imageNode={<GradientAttackVisualizer />}
    textFlex={1}
    imgFlex={2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      One gradient step can be enough for a baseline attack, but iterative
      methods usually produce stronger results.
    </p>
    <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
      In each iteration, the update is clipped so the input remains inside the
      same <Highlight>ε-ball</Highlight> around the original sample.
    </p>
    <div style={{ fontSize: 26, color: "#555", lineHeight: 1.7 }}>
      This is the same idea behind projected gradient descent on the input
      space.
    </div>
  </ContentWithImgLayout>
);

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  GradientSlide,
  IterativeSlide,
];

