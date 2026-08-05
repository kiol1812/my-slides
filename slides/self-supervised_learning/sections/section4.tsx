import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";

import { sectionData } from "../meta";

const GlueSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Benchmarks and Tooling"
    title="GLUE Measures Downstream Performance"
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
        General Language Understanding Evaluation (GLUE) combines multiple
        language understanding tasks <br /> into a single benchmark.
      </li>
      <li>The score is usually computed as the average over the task suite.</li>
      <li>
        The goal is to measure the{" "}
        <strong style={{ color: "#0a2f41" }}>generalization ability</strong> of
        the pretrained encoder.
      </li>
    </ul>
    <Callout type="insight" title="Evaluation mindset">
      A pretrained model is useful only if it transfers to new tasks better than
      a random initialization.
    </Callout>
  </ContentLayout>
);

const SuperBSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 4: Benchmarks and Tooling"
    title="SUPERB for Speech and the s3prl Toolkit"
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
        <Highlight>Speech processing Universal PERformance Benchmark</Highlight>{" "}
        (SUPERB) is the speech counterpart of GLUE and evaluates multiple speech
        tasks with one representation backbone.
      </li>
      <li>
        It helps compare different self-supervised speech models under a shared
        protocol.
      </li>
      <li>
        The <Highlight>s3prl</Highlight> toolkit provides an implementation for
        running those benchmarks.
      </li>
    </ul>
    <div
      className="ac-fadeIn"
      style={{
        marginTop: 10,
        padding: 24,
        borderRadius: 18,
        background: "#f8fbfc",
        border: "1px solid #d9e5e8",
        fontSize: 24,
        lineHeight: 1.7,
        color: "#444",
      }}
    >
      A benchmark is valuable when it makes transfer, comparison, and
      reproducibility straightforward.
    </div>
  </ContentLayout>
);

export const section4Slides: Page[] = [
  createSectionSlide(3, sectionData),
  GlueSlide,
  SuperBSlide,
];
