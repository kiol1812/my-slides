import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import TransferabilityVisualizer from "../assets/TransferabilityVisualizer";
import { sectionData } from "../meta";

const WhiteBlackSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: White Box vs Black Box"
    title="Attacks transfer across models"
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
        A white-box attacker knows the parameters and can differentiate through
        the exact model.
      </li>
      <li>
        A black-box attacker cannot inspect the parameters directly, so it uses
        a proxy model.
      </li>
      <li>
        The key assumption is that adversarial examples often transfer between
        similar networks.
      </li>
    </ul>
    <Callout type="warning" title="Transferability">
      If two models learn similar decision boundaries, a perturbation crafted on
      one model may also fool the other.
    </Callout>
  </ContentLayout>
);

const ProxySlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: White Box vs Black Box"
    title="Proxy models make black-box attacks practical"
    authorInfo="Adversarial Attack"
    imageNode={<TransferabilityVisualizer />}
    textFlex={1}
    imgFlex={1.2}
  >
    <p style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}>
      The attacker trains a local model on available data and crafts the
      perturbation there.
    </p>
    <p style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}>
      The resulting adversarial example can often be reused on a different
      target model without any access to its internal weights.
    </p>
    <div style={{ fontSize: 26, color: "#555", lineHeight: 1.7 }}>
      This makes transferability the central mechanism behind many practical
      black-box attacks.
    </div>
  </ContentWithImgLayout>
);

export const section4Slides: Page[] = [
  createSectionSlide(3, sectionData),
  WhiteBlackSlide,
  ProxySlide,
];

