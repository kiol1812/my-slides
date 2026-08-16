import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout, ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import TrainingAttackVisualizer from "../assets/TrainingAttackVisualizer";
import { sectionData } from "../meta";

const TrainingSlide: Page = () => (
  <ContentLayout eyebrow="Section 6: Training-Time Attacks" title="The attack can be planted during training" authorInfo="Adversarial Attack">
    <ul style={{ fontSize: 28, color: "#555", lineHeight: 1.8, margin: 0, paddingLeft: 40, display: "flex", flexDirection: "column", gap: 16 }}>
      <li>A backdoor attack poisons part of the training data so the model learns a hidden trigger.</li>
      <li>Adversarial reprogramming changes the effective task the model performs.</li>
      <li>These attacks act before deployment, so they are difficult to notice from the final model alone.</li>
    </ul>
    <Callout type="warning" title="Training phase">
      The model can appear normal on clean inputs while still containing a hidden malicious behavior.
    </Callout>
  </ContentLayout>
);

const BackdoorSlide: Page = () => (
  <ContentWithImgLayout eyebrow="Section 6: Training-Time Attacks" title="Poisoned data can create a hidden trigger" authorInfo="Adversarial Attack" imageNode={<TrainingAttackVisualizer />} textFlex={1} imgFlex={1.2}>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The poisoned samples look almost normal, so a human reviewer may not notice the training-time attack.
    </p>
    <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
      Once the model is trained, the trigger can force a specific target class or behavior.
    </p>
  </ContentWithImgLayout>
);

export const section6Slides: Page[] = [createSectionSlide(5, sectionData), TrainingSlide, BackdoorSlide];