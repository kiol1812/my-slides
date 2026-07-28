import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import { sectionData } from "../meta";

export const JSDivergenceIssueSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Wasserstein GAN"
    title="Why JS Divergence is Not Suitable"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <ul
        className="ac-fadeIn"
        style={{
          fontSize: 26,
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
          In high-dimensional spaces, <MathInline math="P_G" /> and{" "}
          <MathInline math="P_{data}" /> are low-dimensional manifolds.
        </li>
        <li>
          The probability of them overlapping is extremely low. Even if they do,
          finite sampling makes it unobservable.
        </li>
        <li>
          If two distributions do not overlap, a binary classifier can easily
          achieve 100% accuracy.
        </li>
        <li>
          In such cases, the JS Divergence becomes a constant{" "}
          <MathInline math="\log 2" />, meaning the{" "}
          <Highlight>gradient vanishes</Highlight>.
        </li>
      </ul>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", marginTop: 20 }}
      >
        <Callout type="warning" title="The Vanishing Gradient Problem">
          When the Discriminator becomes too strong, the Generator receives no
          meaningful gradients to improve, as the loss function provides no
          directional guidance.
        </Callout>
      </div>
    </div>
  </ContentLayout>
);

export const WassersteinSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Wasserstein GAN"
    title="Wasserstein Distance (Earth Mover's Distance)"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <ul
          className="ac-fadeIn"
          style={{
            fontSize: 26,
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
            Consider one distribution <MathInline math="P_{data}" /> as a pile
            of earth and <MathInline math="P_G" /> as the target holes.
          </li>
          <li>
            The Wasserstein distance is the{" "}
            <Highlight>minimum average distance</Highlight> the earth mover has
            to move the earth to transform one distribution into the other.
          </li>
          <li>
            Unlike JS Divergence, Wasserstein distance provides a meaningful
            value and a smooth gradient even when distributions do not overlap.
          </li>
        </ul>
        <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
          <MathBlock math="W(P_{data}, P_G) = \inf_{\gamma \in \Pi(P_{data}, P_G)} \mathbb{E}_{(x, y) \sim \gamma}[\|x - y\|]" />
        </div>
      </div>
    </div>
  </ContentLayout>
);

export const WGANObjectiveSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Wasserstein GAN"
    title="WGAN Objective and Lipschitz Constraint"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="ac-fadeIn">
        <MathBlock math="\max_{D \in 1	ext{-Lipschitz}} \left\{ \mathbb{E}_{x \sim P_{data}}[D(x)] - \mathbb{E}_{x \sim P_G}[D(x)] \right\}" />
      </div>
      <ul
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          fontSize: 26,
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
          The Discriminator <MathInline math="D" /> must be smooth enough (
          <Highlight>1-Lipschitz constraint</Highlight>). Without this,{" "}
          <MathInline math="D(x)" /> would diverge to infinity.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Original WGAN:</strong> Uses
          Weight Clipping to force weights between <MathInline math="[-c, c]" />
          .
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Improved WGAN (WGAN-GP):</strong>{" "}
          Uses Gradient Penalty to keep the gradient norm close to 1.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>
            Spectral Normalization (SNGAN):
          </strong>{" "}
          Normalizes weight matrices to strictly bound the Lipschitz constant.
        </li>
      </ul>
    </div>
  </ContentLayout>
);

export const section4Slides: Page[] = [
  createSectionSlide(3, sectionData),
  JSDivergenceIssueSlide,
  WassersteinSlide,
  WGANObjectiveSlide,
];
