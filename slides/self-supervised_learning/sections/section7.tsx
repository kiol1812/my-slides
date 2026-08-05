import React from "react";
import { type Page } from "@open-slide/core";

import {
  ContentWithImgLayout,
  ContentLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Callout } from "../../../components/shared/callout";

import { sectionData } from "../meta";
import MultilingualBertVisualizer from "../assets/MultilingualBertVisualizer";

const ContextualEmbeddingSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Contextual Embeddings and GPT"
    title="Why BERT Works"
    authorInfo="Self-Supervised Learning"
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.1s" }}>
      <MathBlock math="\cos(\mathbf{h}_{\text{apple in computer}}, \mathbf{h}_{\text{apple in juice}}), \cos \triangleq \text{cosine similarity}" />
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
        The same token can have very different hidden states in different
        contexts.
      </li>
      <li>
        BERT acts as a deep contextual embedding model rather than a static word
        embedding table.
      </li>
      <li>
        Masked Language Modeling (MLM) is a bidirectional generalization of the
        idea behind CBOW.
      </li>
    </ul>
    <Callout type="insight" title="Representation shift">
      The model learns meaning from context, not only from token identity.
    </Callout>
  </ContentLayout>
);

const MultiLingualAndGptSlide: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Contextual Embeddings and GPT"
    title="Multilingual BERT and Next-Token Prediction"
    authorInfo="Self-Supervised Learning"
    imageNode={<MultilingualBertVisualizer />}
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
        Multilingual BERT learns a shared representation space from many
        languages.
      </li>
      <li>
        When the data scale is large enough, cross-lingual alignment improves
        naturally.
      </li>
      <li>
        GPT uses next-token prediction and can perform few-shot or zero-shot
        learning from the prompt alone.
      </li>
    </ul>
    <Callout type="warning" title="Prompting behavior (in-context learning)">
      A small number of examples in the prompt can guide the model without
      changing its weights.
    </Callout>
  </ContentWithImgLayout>
);

export const section7Slides: Page[] = [
  createSectionSlide(6, sectionData),
  ContextualEmbeddingSlide,
  MultiLingualAndGptSlide,
];
