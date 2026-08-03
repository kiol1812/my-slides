import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";

import { sectionData } from "../meta";

const OverviewSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Learning from the Data Itself"
    title="What Self-Supervised Learning Optimizes"
    authorInfo="Self-Supervised Learning"
  >
    <p
      className="ac-fadeIn"
      style={{ fontSize: 32, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}
    >
      Self-supervised learning builds a training signal from the input data itself, so the model can learn useful structure without manual labels.
    </p>
    <div className="ac-fadeIn" style={{ animationDelay: "0.1s" }}>
      <MathBlock math="x \rightarrow x' , x'' \quad \text{and} \quad \min \; d\big(f(x'), x''\big)" />
    </div>
    <ul
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
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
        The input is split into a <strong style={{ color: "#0a2f41" }}>context</strong> and a <strong style={{ color: "#0a2f41" }}>target</strong> derived from the same sample.
      </li>
      <li>
        The model learns by predicting the missing or transformed part of the data.
      </li>
      <li>
        This turns unlabeled data into a <Highlight>supervision source</Highlight>.
      </li>
    </ul>
  </ContentLayout>
);

const PretrainFineTuneSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Learning from the Data Itself"
    title="Why Pre-Training Helps"
    authorInfo="Self-Supervised Learning"
  >
    <ul
      className="ac-fadeIn"
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
        The pre-training task is usually a <strong style={{ color: "#0a2f41" }}>proxy objective</strong> that is easier to define than the downstream task.
      </li>
      <li>
        The learned representations are transferred to the task we really care about through <strong style={{ color: "#0a2f41" }}>fine-tuning</strong>.
      </li>
      <li>
        The main benefit is better initialization, especially when labeled data is limited.
      </li>
    </ul>
    <Callout type="insight" title="Core idea">
      Pre-training solves a data-centered task first, then fine-tuning adapts the model to the real application.
    </Callout>
    <p
      className="ac-fadeIn"
      style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}
    >
      In practice, the model learns reusable features instead of memorizing a single label space.
    </p>
  </ContentLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  OverviewSlide,
  PretrainFineTuneSlide,
];
