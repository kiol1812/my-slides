import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Badge } from "../../../components/shared/badge";
import { sectionData } from "../meta";

import ModeCollapseVisualizer from "../assets/ModeCollapseVisualizer";

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
    </div>
  </ContentLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  ModeCollapseSlide,
  EvaluationSlide,
];
