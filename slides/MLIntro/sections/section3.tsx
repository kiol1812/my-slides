import { type Page } from "@open-slide/core";
import { MarkerType } from "@xyflow/react";

import React, { useState } from "react";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { CodeBlock } from "../../../components/shared/codeBlock";
import { Callout } from "../../../components/shared/callout";
import { Highlight } from "../../../components/shared/highlight";
import { Badge } from "../../../components/shared/badge";
import { FlowDiagram } from "../../../components/shared/flowDiagram";
import { MathDiagram } from "../../../components/shared/mathDiagram";

import { Plot, Line, Theme } from "mafs";

import { sectionData } from "../meta";

const Unlinear_Function_Page: Page = () => (
  <ContentLayout eyebrow="Section 3: Unlinear Model" title="Unlinear Function">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Linear models are often too simplistic. We need a more sophisticated
      approach,
      <br /> such as <Highlight>piecewise linear curves</Highlight>.
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
      The curve is defined as <Highlight>a constant</Highlight> plus{" "}
      <Highlight>the sum of a set of sigmoid function</Highlight>.
    </p>
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s", width: "90%" }}>
      <MathDiagram
        viewBox={{ x: [0, 3], y: [-1, 4] }}
        zoom={{ min: 0.1, max: 2 }}
      >
        <Line.Segment point1={[-10, 1]} point2={[10, 1]} color={Theme.blue} />
        <Line.Segment point1={[-10, 0]} point2={[5, 0]} color={Theme.blue} />
        <Line.Segment point1={[0, 0]} point2={[5, 5]} color={Theme.blue} />
        <Line.Segment point1={[3, 0]} point2={[4, -2]} color={Theme.blue} />
        <Line.Segment point1={[5, 0]} point2={[9, 2]} color={Theme.blue} />
        <Line.Segment point1={[-10, 1]} point2={[0, 1]} color={Theme.red} />
        <Line.Segment point1={[0, 1]} point2={[3, 4]} color={Theme.red} />
        <Line.Segment point1={[3, 4]} point2={[5, 2]} color={Theme.red} />
        <Line.Segment point1={[5, 2]} point2={[9, 3]} color={Theme.red} />
      </MathDiagram>
    </div>
  </ContentLayout>
);

export const SigmoidChart = () => {
  const [c, setC] = useState(3);
  const [b, setB] = useState(0);
  const [w, setW] = useState(2);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ padding: "10px", backgroundColor: "#fff", flex: 1 }}>
        <label>
          Constant: {c}, <Highlight>Change height</Highlight>
        </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={c}
          onChange={(e) => setC(parseFloat(e.target.value))}
          style={{ width: "100%", marginTop: "8px" }}
        />
        <label>
          Bias: {b}, <Highlight>Shift</Highlight>
        </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={b}
          onChange={(e) => setB(parseFloat(e.target.value))}
          style={{ width: "100%", marginTop: "8px" }}
        />
        <label>
          Weight: {w}, <Highlight>Change slopes</Highlight>
        </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={w}
          onChange={(e) => setW(parseFloat(e.target.value))}
          style={{ width: "100%", marginTop: "8px" }}
        />
      </div>

      <div style={{ flex: 2 }}>
        <MathDiagram viewBox={{ x: [-5, 5], y: [-1, 4] }}>
          <Plot.OfX
            y={(x) => c / (1 + Math.exp(-(b + w * x)))}
            color={Theme.blue}
          />
        </MathDiagram>
      </div>
    </div>
  );
};

const Sigmoid_Page: Page = () => (
  <ContentLayout eyebrow="Section 3: Unlinear Model" title="Sigmoid Function">
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-120px" }}
    >
      <MathBlock math="y = c\frac{1}{1+e^{-(b+wx_1)}} = \color{brown}c \color{black} \mathbb{sigmoid}(\color{seagreen}b\color{black}+\color{royalblue}w\color{black}x_1)" />
    </div>
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "90%",
        position: "relative",
        top: "-220px",
      }}
    >
      <SigmoidChart />
    </div>
  </ContentLayout>
);

const Sum_of_Sigmoid_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Unlinear Model"
    title="Organize a Function"
  >
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "100px",
        width: "90%",
        position: "relative",
        top: "-50px",
      }}
    >
      <MathDiagram
        viewBox={{ x: [1, 3], y: [-1, 4] }}
        zoom={{ min: 0.1, max: 2 }}
      >
        <Line.Segment point1={[-10, 1]} point2={[10, 1]} color={Theme.blue} />
        <Line.Segment point1={[-10, 0]} point2={[5, 0]} color={Theme.blue} />
        <Line.Segment point1={[0, 0]} point2={[5, 5]} color={Theme.blue} />
        <Line.Segment point1={[3, 0]} point2={[4, -2]} color={Theme.blue} />
        <Line.Segment point1={[5, 0]} point2={[9, 2]} color={Theme.blue} />
        <Line.Segment point1={[-10, 1]} point2={[0, 1]} color={Theme.red} />
        <Line.Segment point1={[0, 1]} point2={[3, 4]} color={Theme.red} />
        <Line.Segment point1={[3, 4]} point2={[5, 2]} color={Theme.red} />
        <Line.Segment point1={[5, 2]} point2={[9, 3]} color={Theme.red} />
      </MathDiagram>
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "200px" }}
    >
      <MathBlock math="y = b + \sum_i \color{brown}c_i \color{black} \mathbb{sigmoid}(\color{seagreen}b_i\color{black}+\color{royalblue}w_i\color{black}x_1)" />
    </div>
  </ContentLayout>
);

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  Unlinear_Function_Page,
  Sigmoid_Page,
  Sum_of_Sigmoid_Page,
];
