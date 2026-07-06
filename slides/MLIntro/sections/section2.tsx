import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";

import { sectionData } from "../meta";

const NeuralNetworkPage: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Deep Learning"
    title="Neural Networks Basics"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Neural networks reflect the behavior of the human brain, allowing computer
      programs to recognize patterns and solve common problems in the fields of
      AI.
    </p>

    <div
      className="ac-fadeIn"
      style={{ display: "flex", gap: 30, marginTop: 20 }}
    >
      <div
        style={{
          flex: 1,
          padding: 30,
          background: "#f8f9fa",
          borderRadius: 12,
        }}
      >
        <h3 style={{ fontSize: 28, color: "#0a2f41", margin: "0 0 16px 0" }}>
          Input Layer
        </h3>
        <p style={{ fontSize: 24, color: "#555", margin: 0, lineHeight: 1.5 }}>
          Receives initial data for the neural network to process.
        </p>
      </div>
      <div
        style={{
          flex: 1,
          padding: 30,
          background: "#f8f9fa",
          borderRadius: 12,
        }}
      >
        <h3 style={{ fontSize: 28, color: "#0a2f41", margin: "0 0 16px 0" }}>
          Hidden Layers
        </h3>
        <p style={{ fontSize: 24, color: "#555", margin: 0, lineHeight: 1.5 }}>
          Performs computations and extracts features from the data.
        </p>
      </div>
      <div
        style={{
          flex: 1,
          padding: 30,
          background: "#f8f9fa",
          borderRadius: 12,
        }}
      >
        <h3 style={{ fontSize: 28, color: "#0a2f41", margin: "0 0 16px 0" }}>
          Output Layer
        </h3>
        <p style={{ fontSize: 24, color: "#555", margin: 0, lineHeight: 1.5 }}>
          Delivers the final prediction or classification result.
        </p>
      </div>
    </div>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  NeuralNetworkPage,
];
