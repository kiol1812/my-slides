import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";

import { sectionData } from "../meta";

const MLIntroPage: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Fundamentals"
    title="What is Machine Learning?"
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
      Machine learning is a subset of artificial intelligence that involves
      training algorithms to learn from and make predictions or decisions based
      on data, without being explicitly programmed for the task.
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
        <strong style={{ color: "#0a2f41" }}>Supervised Learning:</strong>{" "}
        Algorithms are trained on labeled datasets.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Unsupervised Learning:</strong>{" "}
        Discover hidden patterns in unlabeled data.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Reinforcement Learning:</strong>{" "}
        Learning through trial and error.
      </li>
    </ul>
  </ContentLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  MLIntroPage,
];
