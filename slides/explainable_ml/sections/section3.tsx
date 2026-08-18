import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentWithImgLayout,
  ContentLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import SaliencyVisualizer from "../assets/SaliencyVisualizer";
import SmoothGradVisualizer from "../assets/SmoothGradVisualizer";
import IntegratedGradientsVisualizer from "../assets/IntegratedGradientsVisualizer";
import { sectionData } from "../meta";

const SaliencySlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Saliency Methods"
    title="Saliency Maps Highlight Sensitive Pixels"
    authorInfo="Explainable ML"
    imageNode={<SaliencyVisualizer />}
    textFlex={1}
    imgFlex={1.12}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      A saliency map shows where a tiny change would alter the model score the
      most. The brightest areas are the most sensitive parts of the digit.
    </p>
  </ContentWithImgLayout>
);

const SmoothGradSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Saliency Methods"
    title="SmoothGrad"
    authorInfo="Explainable ML"
    imageNode={<SmoothGradVisualizer />}
    textFlex={1}
    imgFlex={1.18}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      SmoothGrad Reduces Noise by Averaging Many Saliency Maps
    </p>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      Instead of trusting one noisy gradient, we add small perturbations to the
      same digit and average the explanations.
    </p>
  </ContentWithImgLayout>
);

const IntegratedGradientsSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Saliency Methods"
    title="Integrated Gradients Accumulate Evidence Along a Path"
    authorInfo="Explainable ML"
  >
    <div style={{ marginTop: -10 }}>
      <IntegratedGradientsVisualizer />
    </div>
  </ContentLayout>
);

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  SaliencySlide,
  SmoothGradSlide,
  IntegratedGradientsSlide,
];
