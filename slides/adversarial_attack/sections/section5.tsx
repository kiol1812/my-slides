import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import PhysicalWorldVisualizer from "../assets/PhysicalWorldVisualizer";
import { sectionData } from "../meta";

const BeyondImagesSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Beyond Images"
    title="The same attack idea appears in other domains"
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
        Speech systems and language models can also be attacked by tiny but
        structured input changes.
      </li>
      <li>
        In physical settings, the perturbation must survive printing, lighting,
        camera noise, and viewpoint changes.
      </li>
      <li>
        The attack must be robust to the transformation pipeline between the
        attacker and the model.
      </li>
    </ul>
    <Callout type="insight" title="Robustness">
      A perturbation that works only on a digital file is weaker than one that
      still works after the object is printed and photographed.
    </Callout>
  </ContentLayout>
);

const PhysicalSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 5: Beyond Images"
    title="Physical-world attacks must survive the real pipeline"
    authorInfo="Adversarial Attack"
    imageNode={<PhysicalWorldVisualizer />}
    textFlex={1}
    imgFlex={1.2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The attacker is no longer optimizing a single tensor. The input passes
      through a printer, a scene, and a camera before it reaches the model.
    </p>
    <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
      That means the crafted pattern must remain effective after real-world
      transformations.
    </p>
  </ContentWithImgLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  BeyondImagesSlide,
  PhysicalSlide,
];

