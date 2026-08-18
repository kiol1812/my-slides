import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { ConstrainedOptimizationVisualizer } from "../assets/ActivationMaximizationVisualizer";
import { sectionData } from "../meta";

const ConstraintSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 6: Making Explanations Interpretable"
    title="Constraints Keep the Optimized Digit Readable"
    authorInfo="Explainable ML"
    imageNode={<ConstrainedOptimizationVisualizer />}
    textFlex={1}
    imgFlex={1.18}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      A constraint adds human knowledge back into the search. It prevents the
      optimized image from becoming pure texture.
    </p>
  </ContentWithImgLayout>
);

export const section6Slides: Page[] = [
  createSectionSlide(5, sectionData),
  ConstraintSlide,
];
