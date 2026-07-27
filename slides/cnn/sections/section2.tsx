import React, { useState, useEffect, Suspense } from "react";
import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { MathDiagram } from "../../../components/shared/mathDiagram";
import { Plot, Line, Theme, LaTeX, Text, Ellipse } from "mafs";

import { sectionData } from "../meta";
import ConvVisualizer from "../assets/ConvVisualizer";
import WeightSharingVisualizer from "../assets/WeughtSharingVisualizer";
import MaxPoolingVisualizer from "../assets/MaxPoolingVisualizer";

const Overview: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Convolutional Nerual Network"
    title="Overview"
    authorInfo="Convolutional Neural Network"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        width: "85%",
      }}
    >
      Specifically designed for grid-structed data (e.g. images,
      spatial-temporal time-series).
      <br />
    </p>
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
        <strong style={{ color: "#0a2f41" }}>
          Spatial Local Feature Extraction:
        </strong>{" "}
        Captures spatial hierachies efficiently.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Weight Sharing:</strong> Greatly
        reduces parameter count and improves training efficiency.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Robustness:</strong> Enhances model
        robustness against spatial shifts.
      </li>
    </ul>
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        width: "85%",
      }}
    >
      Do we really need "full connected network" in image processing?
    </p>
  </ContentLayout>
);

const Observation_and_Simplification1: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Convolutional Nerual Network"
    title="Observation & Simplification 1"
    authorInfo="Convolutional Neural Network"
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
      <li>Some patterns are much smaller than the whole image.</li>
      <li>A neuron does not have to see the whole image.</li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          Simplification 1: Receptive field
        </strong>
        , it can be overlapped.
      </li>
    </ul>
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <ConvVisualizer />
    </div>
  </ContentLayout>
);

const Observation_and_Simplification2: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Convolutional Nerual Network"
    title="Observation & Simplification 2"
    authorInfo="Convolutional Neural Network"
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
      <li>The same patterns appear in different regions.</li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          Simplification 2: Sharing wights
        </strong>
        , same receptive field sharing weights.
      </li>
    </ul>
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <WeightSharingVisualizer />
    </div>
  </ContentLayout>
);

const Benefit_of_Convilutional_Layer: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Convolutional Nerual Network"
    title="Benefit of Convilutional Layer"
    authorInfo="Convolutional Neural Network"
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
      <li>Some patterns are much smaller than the whole image.</li>
      <li>The same patterns appear in different regions.</li>
    </ul>
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathDiagram
        viewBox={{ x: [8, 13], y: [1, 11] }}
        zoom={{ min: 1, max: 1 }}
      >
        <Ellipse center={[8, 4]} radius={[4, 3]} />
        <Ellipse center={[8, 5]} radius={[5, 4]} />
        <Ellipse center={[8, 6]} radius={[6, 5]} />
        <Text x={5} y={5.2} attach="e" attachDistance={15} size={32}>
          Parameter Sharing
        </Text>
        <Text x={5} y={3.8} attach="e" attachDistance={15} size={32}>
          Convolutional Layer, Larger model bias (for image)
        </Text>
        <Text x={5.3} y={7.6} attach="e" attachDistance={15} size={32}>
          Receptive Field
        </Text>
        <Text x={4.6} y={9.6} attach="e" attachDistance={15} size={32}>
          Full Connected Layer
        </Text>
      </MathDiagram>
    </div>
  </ContentLayout>
);

const Observation_and_Simplification3: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Convolutional Nerual Network"
    title="Observation & Simplification 3"
    authorInfo="Convolutional Neural Network"
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
      <li>Subsampling the pixels will not change the object.</li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Simplification 3: Pooling</strong>,
        maximum pooling and average pooling.
      </li>
    </ul>
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MaxPoolingVisualizer />
    </div>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  Overview,
  Observation_and_Simplification1,
  Observation_and_Simplification2,
  Benefit_of_Convilutional_Layer,
  Observation_and_Simplification3,
];
