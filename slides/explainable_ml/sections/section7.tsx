import React from "react";
import { type Page } from "@open-slide/core";

import { ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import LimeSurrogateVisualizer from "../assets/LimeSurrogateVisualizer";
import { sectionData } from "../meta";

const OutlookSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Outlook"
    title="A Local Surrogate Can Mimic a Small Region of the Model"
    authorInfo="Explainable ML"
    imageNode={<LimeSurrogateVisualizer />}
    textFlex={1}
    imgFlex={1.16}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The idea behind Local Interpretable Model-Agnostic Explanations (LIME) is
      to approximate a complex model with a simpler one near the example we care
      about.
    </p>
  </ContentWithImgLayout>
);

export const section7Slides: Page[] = [
  createSectionSlide(6, sectionData),
  OutlookSlide,
];
