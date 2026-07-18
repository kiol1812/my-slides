import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Callout } from "../../../components/shared/callout";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { FlowDiagram } from "../../../components/shared/flowDiagram";

import { sectionData } from "../meta";
import {
  different_type_of_functions_nodes,
  different_type_of_functions_edges,
} from "../assets/different_type_of_functions";
import dataRepresentationImg from "../assets/data_representation.png";

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
        width: "85%",
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
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", position: "relative", top: "-60px" }}
      >
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

const Model_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Introduction to Machine Learning"
    title="Machine Learning Model"
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathBlock math="y = f_w(\phi(x)) \triangleq \sigma(w^T \phi(x)), \text{ where } \sigma(s) = \frac{1}{1+e^{-s}}" />
    </div>
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
          <MathInline math="\boldsymbol{x}" />
        </strong>
        {": "}
        Original data.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          <MathInline math="\boldsymbol{\phi(x)}" />
        </strong>
        {": "}
        Data representation of original data, make data points splitting easily.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          <MathInline math="\boldsymbol{y \in (0, 1)}" />
        </strong>
        {": "}
        Model prediction with parameter <MathInline math="w" />.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          <MathInline math="\boldsymbol{t \in 0, 1}" />
        </strong>
        {": "}
        Ground-truth.
      </li>
    </ul>
  </ContentLayout>
);

const Data_Representation_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 1: Introduction to Machine Learning"
    title="Why Data Representation Matters?"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={dataRepresentationImg}
        alt="Data Representation"
        style={{
          width: "90%",
          borderRadius: 16,
          objectFit: "cover",
          position: "relative",
          left: "-150px",
          top: "-70px",
        }}
      />
    }
  >
    <div />
  </ContentWithImgLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  What_is_ML_Page,
  Different_type_of_functions_Page,
  Model_Page,
  Data_Representation_Page,
];
