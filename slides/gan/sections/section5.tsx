import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Badge } from "../../../components/shared/badge";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";
import { MathBlock } from "../../../components/shared/math";
import { sectionData } from "../meta";

import ModeCollapseVisualizer from "../assets/ModeCollapseVisualizer";
import ImageClassifierVisualizer from "../assets/ImageClassifierVisualizer";
import MultiClassifierVisualizer, {
  BarGraph,
} from "../assets/MultiClassifierVisualizer";

export const HowToEval: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Evaluation & Challenges"
    title="Quality of Image"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{ display: "flex", flexDirection: "row", gap: 30, height: "100%" }}
    >
      <div
        style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <ul
          className="ac-fadeIn"
          style={{
            fontSize: 24,
            color: "#555",
            lineHeight: 1.7,
            margin: 0,
            paddingLeft: 40,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <li>Human evaluation is expensive (and sometime unfair/unstable).</li>
          <li>
            How to evaluate the quality of the qenerated images{" "}
            <Highlight>automatically</Highlight>?
          </li>
        </ul>
      </div>
      <div className="ac-fadeIn" style={{ flex: 1.2, animationDelay: "0.3s" }}>
        <ImageClassifierVisualizer />
      </div>
    </div>
  </ContentLayout>
);

export const ModeCollapseSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Evaluation & Challenges"
    title="Diversity Issues: Mode Collapse & Dropping"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{ display: "flex", flexDirection: "row", gap: 30, height: "100%" }}
    >
      <div
        style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <ul
          className="ac-fadeIn"
          style={{
            fontSize: 24,
            color: "#555",
            lineHeight: 1.7,
            margin: 0,
            paddingLeft: 40,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <li>
            <strong style={{ color: "#e5a93d" }}>Mode Collapse:</strong> The
            generator discovers that a specific output easily fools the
            discriminator and starts generating only that identical sample.
          </li>
          <li>
            <strong style={{ color: "#e5a93d" }}>Mode Dropping:</strong> The
            generator captures only a subset of the real data modes and
            completely ignores others.
          </li>
          <li>
            The animation demonstrates how a generator might jump between single
            modes during training iterations rather than covering the entire
            target distribution simultaneously.
          </li>
        </ul>
      </div>
      <div className="ac-fadeIn" style={{ flex: 1, animationDelay: "0.3s" }}>
        <ModeCollapseVisualizer />
      </div>
    </div>
  </ContentLayout>
);

export const Diversity: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Evaluation & Challenges"
    title="Diversity"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{ display: "flex", flexDirection: "row", gap: 30, height: "100%" }}
    >
      <div className="ac-fadeIn" style={{ flex: 1, animationDelay: "0.3s" }}>
        <MultiClassifierVisualizer />
      </div>
      <div
        style={{ flex: 0.7, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <MathBlock math="P(c) = \frac{1}{N}{\sum_n P(c|y^n)}" />
      </div>
      <div
        style={{ flex: 0.3, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <BarGraph
          distributions={[
            { label: "class 1", height: 30, color: "#eda784" },
            { label: "class 2", height: 30, color: "#8ba7df" },
            { label: "class 3", height: 30, color: "#9eca98" },
          ]}
        />
        <br />
        <p
          className="ac-fadeIn"
          style={{
            fontSize: 24,
            color: "#555",
            lineHeight: 1.6,
            margin: 0,
            width: "85%",
          }}
        >
          Uniform means higher variety
        </p>
      </div>
    </div>
  </ContentLayout>
);

export const EvaluationSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Evaluation & Challenges"
    title="Evaluation: IS and FID"
    authorInfo="Generative Adversarial Network"
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div
        className="ac-fadeIn"
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Badge>Inception Score (IS)</Badge>
          <span style={{ fontSize: 22, fontWeight: "bold", color: "#2ca089" }}>
            Larger is better
          </span>
        </div>
        <ul
          style={{
            fontSize: 24,
            color: "#555",
            lineHeight: 1.6,
            paddingLeft: 40,
          }}
        >
          <li>
            Uses an off-the-shelf classifier (e.g., Inception Net) to measure
            quality and diversity.
          </li>
          <li>
            High confidence for single images (quality) and uniform label
            distribution across all images (diversity).
          </li>
        </ul>
      </div>

      <div
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Badge>Fréchet Inception Distance (FID)</Badge>
          <span style={{ fontSize: 22, fontWeight: "bold", color: "#e5a93d" }}>
            Smaller is better
          </span>
        </div>
        <ul
          style={{
            fontSize: 24,
            color: "#555",
            lineHeight: 1.6,
            paddingLeft: 40,
          }}
        >
          <li>Extracts features from a hidden layer of a pre-trained CNN.</li>
          <li>
            Models the feature distributions of real and generated images as
            Gaussians.
          </li>
          <li>
            Calculates the Fréchet distance between these two multivariate
            Gaussians.
          </li>
        </ul>
      </div>

      <div
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          position: "relative",
          top: "-40px",
        }}
      >
        <MathBlock math="\begin{align*} IS(G) &= exp(\mathbb{E}_{x \sim p_g} D_{KL}(p(y|x)||p(y))) \\ D_{KL}(P||Q) &= \sum p(x) \log \frac{p(x)}{q(x)} = \sum p(x)(\log(p(x)) - \log(q(x))) \end{align*}" />
      </div>
    </div>
  </ContentLayout>
);

export const MemoryGansSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Evaluation & Challenges"
    title="The Memorization Problem"
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
          A generator could theoretically achieve a perfect score (like an
          extremely small FID) by simply{" "}
          <strong style={{ color: "#e5a93d" }}>
            memorizing and reproducing
          </strong>{" "}
          the exact training data.
        </li>
        <li>
          Flipping, cropping, or verbatim copying real data does not constitute
          true generation.
        </li>
        <li>
          We want models that learn the underlying distribution and can
          synthesize entirely <Highlight>novel, unseen samples</Highlight>.
        </li>
      </ul>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", marginTop: 20 }}
      >
        <Callout type="insight" title="Evaluation Caveat">
          Metrics like IS and FID measure distribution alignment but cannot
          easily detect if a model is merely acting as a lookup table for the
          training dataset.
        </Callout>
      </div>
    </div>
  </ContentLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  HowToEval,
  ModeCollapseSlide,
  Diversity,
  EvaluationSlide,
  MemoryGansSlide,
];
