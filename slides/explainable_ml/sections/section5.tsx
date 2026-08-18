import React from "react";
import { type Page } from "@open-slide/core";

import { ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { ActivationMaximizationVisualizer } from "../assets/ActivationMaximizationVisualizer";
import { sectionData } from "../meta";

const FilterSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 5: Global Explanation"
    title="Activation Maximization Reveals What a Filter Wants"
    authorInfo="Explainable ML"
    imageNode={<ActivationMaximizationVisualizer />}
    textFlex={1}
    imgFlex={1.16}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      A global explanation does not focus on one sample. Instead, it searches
      for an input that makes a filter or class score as large as possible.
    </p>
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      If we only optimize the class score, the result may become hard to read.
      The model wants the strongest signal, not necessarily a natural-looking
      digit.
    </p>
  </ContentWithImgLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  FilterSlide,
];
