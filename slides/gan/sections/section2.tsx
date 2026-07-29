import React from "react";
import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { FlowDiagram } from "../../../components/shared/flowDiagram";
import { Highlight } from "../../../components/shared/highlight";
import { Badge } from "../../../components/shared/badge";
import { sectionData } from "../meta";

import {
  discriminator_edges,
  discriminator_nodes,
  train1_nodes,
  train1_edges,
  train2_nodes,
  train2_edges,
} from "../assets/diagrams";

const DiscriminatorSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Discriminator & Generator"
    title="The Discriminator"
    authorInfo="Generative Adversarial Network"
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
        The <strong style={{ color: "#0a2f41" }}>Discriminator</strong> is also
        a neural network (a function).
      </li>
      <li>
        It takes an image (or data object) as input and outputs a{" "}
        <Highlight>scalar value</Highlight>.
      </li>
      <li>
        A larger value indicates the input is <strong>real</strong>, while a
        smaller value indicates it is <strong>fake</strong> (generated).
      </li>
    </ul>

    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "550px",
        width: "100%",
        marginTop: "20px",
        position: "relative",
        top: "-90px",
      }}
    >
      <FlowDiagram nodes={discriminator_nodes} edges={discriminator_edges} />
    </div>
  </ContentLayout>
);

const TrainingStep1Slide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Discriminator & Generator"
    title="Algorithm Step 1: Update Discriminator"
    authorInfo="Generative Adversarial Network"
  >
    <div
      className="ac-fadeIn"
      style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
    >
      <span style={{ fontSize: 26, fontWeight: 600, color: "#0a2f41" }}>
        In each training iteration:
      </span>
      <Badge>Step 1</Badge>
    </div>

    <ul
      className="ac-fadeIn"
      style={{
        animationDelay: "0.1s",
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
        <strong style={{ color: "#e5a93d" }}>Fix the Generator (G)</strong> and
        only update the Discriminator (D).
      </li>
      <li>
        The Discriminator learns to assign high scores to real objects and low
        scores to generated objects. This is effectively training a binary
        classifier.
      </li>
    </ul>

    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.3s",
        height: "450px",
        width: "100%",
        marginTop: "10px",
        position: "relative",
        top: "-90px",
      }}
    >
      <FlowDiagram nodes={train1_nodes} edges={train1_edges} />
    </div>
  </ContentLayout>
);

const TrainingStep2Slide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Discriminator & Generator"
    title="Algorithm Step 2: Update Generator"
    authorInfo="Generative Adversarial Network"
  >
    <div
      className="ac-fadeIn"
      style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
    >
      <span style={{ fontSize: 26, fontWeight: 600, color: "#0a2f41" }}>
        In each training iteration:
      </span>
      <Badge>Step 2</Badge>
    </div>

    <ul
      className="ac-fadeIn"
      style={{
        animationDelay: "0.1s",
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
        <strong style={{ color: "#e5a93d" }}>Fix the Discriminator (D)</strong>{" "}
        and only update the Generator (G).
      </li>
      <li>
        The Generator learns to "fool" the Discriminator by updating its
        parameters to maximize the output score (trying to push it towards 1).
      </li>
      <li>
        We treat them as one <Highlight>large network</Highlight> during
        backpropagation, but freeze the weights of the Discriminator.
      </li>
    </ul>

    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.3s",
        height: "400px",
        width: "100%",
        marginTop: "10px",
        position: "relative",
        top: "-120px",
      }}
    >
      <FlowDiagram nodes={train2_nodes} edges={train2_edges} />
    </div>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  DiscriminatorSlide,
  TrainingStep1Slide,
  TrainingStep2Slide,
];
