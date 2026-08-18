import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import DefenseVisualizer from "../assets/DefenseVisualizer";
import { sectionData } from "../meta";

const DefenseOverviewSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Defenses"
    title="Defenses try to reduce attack success"
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
        Passive defenses try to remove the perturbation or detect suspicious
        inputs.
      </li>
      <li>
        Randomization makes the exact attack pattern less stable during
        preprocessing.
      </li>
      <li>
        Adversarial training improves robustness by training on attacked
        examples directly.
      </li>
    </ul>
    <Callout type="insight" title="Trade-off">
      Stronger robustness often costs extra training time or some accuracy on
      clean data.
    </Callout>
  </ContentLayout>
);

const TrainingDefenseSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Defenses"
    title="Adversarial training learns a harder boundary"
    authorInfo="Adversarial Attack"
    imageNode={<DefenseVisualizer />}
    textFlex={1}
    imgFlex={1.2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The training set is augmented with adversarial examples so the model sees
      both clean and attacked inputs.
    </p>
    <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
      Free adversarial training reduces the cost by reusing gradient information
      across multiple updates.
    </p>
  </ContentWithImgLayout>
);

export const section7Slides: Page[] = [
  createSectionSlide(6, sectionData),
  DefenseOverviewSlide,
  TrainingDefenseSlide,
];

