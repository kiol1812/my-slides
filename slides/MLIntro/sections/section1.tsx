import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { MathInline } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { FlowDiagram } from "../../../components/shared/flowDiagram";

import { sectionData } from "../meta";
import {
  different_type_of_functions_nodes,
  different_type_of_functions_edges,
} from "../assets/different_type_of_functions";

const What_is_ML_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Introduction to Machine Learning"
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
      on data,{" "}
      <Highlight>without being explicitly programmed for the task</Highlight>.
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

    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <Callout type="warning" title="">
        Machine Learning <MathInline math="\approx" /> Looking for functions.
      </Callout>
    </div>
  </ContentLayout>
);

const Different_type_of_functions_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 1: Introduction to Machine Learning"
    title="Different Type of Functions"
    textFlex={1}
    imgFlex={1.4}
    imageNode={
      <FlowDiagram
        nodes={different_type_of_functions_nodes}
        edges={different_type_of_functions_edges}
      />
    }
    bottomContent={
      <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
        <Callout type="warning" title="Structured Learning">
          Create something with structure, e.g. image.
        </Callout>
      </div>
    }
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 44,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      <strong style={{ color: "#0a2f41" }}>Regression</strong>:
    </p>
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      The function outputs is a scalar.
    </p>
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 44,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      <strong style={{ color: "#0a2f41" }}>Classification</strong>:
    </p>
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Given options (classes), the function outputs the correct one.
    </p>
  </ContentWithImgLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  What_is_ML_Page,
  Different_type_of_functions_Page,
];
