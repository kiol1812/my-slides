import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";

import { sectionData } from "../meta";

const NspSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Sentence-Level Objectives"
    title="Next Sentence Prediction"
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
        BERT feeds sentence pairs with{" "}
        <strong style={{ color: "#0a2f41" }}>[CLS]</strong> at the front and{" "}
        <strong style={{ color: "#0a2f41" }}>[SEP]</strong> between the
        sentences.
      </li>
      <li>
        The final <strong style={{ color: "#0a2f41" }}>[CLS]</strong>{" "}
        representation is sent to a binary classifier.
      </li>
      <li>
        The model predicts whether the second sentence really follows the first
        one in the original corpus.
      </li>
    </ul>
    <Callout type="warning" title="Limitation">
      NSP was later shown to contribute little to downstream gains.
    </Callout>
  </ContentLayout>
);

const SopSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Sentence-Level Objectives"
    title="Sentence Order Prediction"
    authorInfo="Self-Supervised Learning"
  >
    <div
      className="ac-fadeIn"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        marginTop: 10,
      }}
    >
      <div
        style={{
          border: "2px solid #7c9fa8",
          borderRadius: 18,
          padding: 24,
          background: "#f8fbfc",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 30, color: "#0a2f41" }}>
          Positive pair
        </h3>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 24,
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          Two consecutive sentences from the same document in the correct order.
        </p>
      </div>
      <div
        style={{
          border: "2px solid #e5a93d",
          borderRadius: 18,
          padding: 24,
          background: "#fffaf0",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 30, color: "#0a2f41" }}>
          Negative pair
        </h3>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 24,
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          The same sentences are reversed, so the model must detect the
          incorrect order.
        </p>
      </div>
    </div>
    <p
      className="ac-fadeIn"
      style={{ fontSize: 28, color: "#0a2f41", lineHeight: 1.7, margin: 0 }}
    >
      SOP focuses on coherence rather than topical relatedness, which makes it a
      cleaner sentence-level objective than NSP.
    </p>
    <p
      className="ac-fadeIn"
      style={{ fontSize: 26, color: "#555", lineHeight: 1.7, margin: 0 }}
    >
      ALBERT uses this formulation to keep the model lightweight while still
      training sentence-order awareness.
    </p>
  </ContentLayout>
);

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  NspSlide,
  SopSlide,
];
