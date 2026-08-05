import React from "react";
import { type Page } from "@open-slide/core";

import { ContentWithImgLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { Badge } from "../../../components/shared/badge";

import { sectionData } from "../meta";
import SequenceClassificationVisualizer from "../assets/SequenceClassificationVisualizer";
import QuestionAnsweringVisualizer from "../assets/QuestionAnsweringVisualizer";

const ClassificationSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 5: BERT Downstream Tasks"
    title="Sequence Classification and Tagging"
    authorInfo="Self-Supervised Learning"
    imageNode={<SequenceClassificationVisualizer />}
    imageWidth={760}
    imageHeight={520}
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
        A pretrained BERT encoder can be reused for sentiment analysis, topic
        classification, or natural language inference.
      </li>
      <li>
        The pretrained encoder gives the classifier a much stronger starting
        point than random initialization.
      </li>
    </ul>
    <Badge>Transfer Learning</Badge>
    <Callout type="insight" title="What changes">
      The encoder stays mostly the same, while the task head adapts to the new
      output space.
    </Callout>
  </ContentWithImgLayout>
);

const QaSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 5: BERT Downstream Tasks"
    title="Extraction-Based Question Answering"
    authorInfo="Self-Supervised Learning"
    imageNode={<QuestionAnsweringVisualizer />}
    imageWidth={860}
    imageHeight={520}
  >
    <ul
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        fontSize: 26,
        color: "#555",
        lineHeight: 1.7,
        margin: 0,
        paddingLeft: 40,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <li>
        The model predicts a start position and an end position inside the
        passage.
      </li>
      <li>
        Inner-product attention helps score which token is most related to the
        question.
      </li>
      <li>
        The answer is extracted directly from the source text rather than
        generated from scratch.
      </li>
    </ul>
    <Callout type="warning" title="Key assumption">
      The answer must appear in the input passage, so the task is span
      extraction rather than free-form generation.
    </Callout>
  </ContentWithImgLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  ClassificationSlide,
  QaSlide,
];
