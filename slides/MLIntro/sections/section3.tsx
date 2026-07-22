import { type Page } from "@open-slide/core";

import React, { useState } from "react";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { FlowDiagram } from "../../../components/shared/flowDiagram";
import { MathDiagram } from "../../../components/shared/mathDiagram";

import { Plot, Line, Theme } from "mafs";

import { sectionData } from "../meta";

import networkImg from "../assets/network.png";
import { label_edges, label_nodes } from "../assets/loss";
import batchImg from "../assets/batch.png";
import multiLayerImg from "../assets/multi-layer.png";

const Sum_of_Sigmoid_Chart = () => (
  <MathDiagram viewBox={{ x: [0, 3], y: [-1, 4] }} zoom={{ min: 0.1, max: 2 }}>
    <Line.Segment point1={[-10, 1]} point2={[11, 1]} color={Theme.blue} />
    <Line.Segment point1={[-10, 0]} point2={[5, 0]} color={Theme.blue} />
    <Line.Segment point1={[0, 0]} point2={[3, 3]} color={Theme.blue} />
    <Line.Segment point1={[3, 3]} point2={[11, 3]} color={Theme.blue} />
    <Line.Segment point1={[3, 0]} point2={[5, -2]} color={Theme.blue} />
    <Line.Segment point1={[5, -2]} point2={[11, -2]} color={Theme.blue} />
    <Line.Segment point1={[5, 0]} point2={[9, 2]} color={Theme.blue} />
    <Line.Segment point1={[9, 2]} point2={[11, 2]} color={Theme.blue} />
    <Line.Segment point1={[-10, 1]} point2={[0, 1]} color={Theme.red} />
    <Line.Segment point1={[0, 1]} point2={[3, 4]} color={Theme.red} />
    <Line.Segment point1={[3, 4]} point2={[5, 2]} color={Theme.red} />
    <Line.Segment point1={[5, 2]} point2={[9, 4]} color={Theme.red} />
  </MathDiagram>
);
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
      <Sum_of_Sigmoid_Chart />
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
      <MathBlock math="y = c\frac{1}{1+e^{-(b+wx)}} = \color{brown}c \color{#0a2f41} \mathbb{sigmoid}(\color{seagreen}b\color{#0a2f41}+\color{royalblue}w\color{#0a2f41}x)" />
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
      <Sum_of_Sigmoid_Chart />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "240px" }}
    >
      <MathBlock math="y = b + \sum_i \color{brown}c_i \color{#0a2f41} \mathbb{sigmoid}(\color{seagreen}b_i\color{#0a2f41}+\color{royalblue}w_i\color{#0a2f41}x)" />
    </div>
  </ContentLayout>
);

const Organize_a_Function2_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Unlinear Model"
    title="Organize a Function"
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathBlock math="\begin{align*} y&= b + Wx \\ y &= b + \sum_jw_jx_j \\ y &= b + \sum_i \color{brown}c_i \color{#0a2f41} \mathbb{sigmoid}(\color{seagreen}b_i\color{#0a2f41}+\sum_j\color{royalblue}w_{ij}\color{#0a2f41}x_j)\end{align*}" />
    </div>
  </ContentLayout>
);

const Organize_a_Function3_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Unlinear Model"
    title="Organize a Function"
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathBlock math="y = b + \sum_i \color{brown}c_i \color{#0a2f41} \mathbb{sigmoid}(\color{seagreen}b_i\color{#0a2f41}+\sum_j\color{royalblue}w_{ij}\color{#0a2f41}x_j)" />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-160px" }}
    >
      <MathBlock math="\begin{bmatrix}r_1\\r_2\\r_3\end{bmatrix} = \begin{bmatrix}\color{seagreen}b_1\\\color{seagreen}b_2\\\color{seagreen}b_3\end{bmatrix} + \begin{bmatrix}\color{royalblue}w_{11} & \color{royalblue}w_{12} & \color{royalblue}w_{13} \\\color{royalblue}w_{21} & \color{royalblue}w_{22} & \color{royalblue}w_{23} \\\color{royalblue}w_{31} & \color{royalblue}w_{32} & \color{royalblue}w_{33} \\ \end{bmatrix}\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}" />
    </div>
  </ContentLayout>
);

const Organize_a_Function4_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Unlinear Model"
    title="Organize a Function"
    textFlex={1}
    imgFlex={4}
    imageNode={
      <img
        src={networkImg}
        alt="Data Representation"
        style={{
          width: "75%",
          borderRadius: 16,
          objectFit: "cover",
          position: "relative",
          left: "-150px",
          top: "-70px",
        }}
      />
    }
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
        <strong style={{ color: "#0a2f41" }}>
          <MathInline math="\boldsymbol{a_n = \sigma{(r_n)}}" />
        </strong>
      </li>
      <li>Left b, gray one, is a constant.</li>
      <li>Right b, green one, is a vector.</li>
    </ul>
  </ContentWithImgLayout>
);

const Loss_Page: Page = () => (
  <ContentLayout eyebrow="Section 3: Unlinear Model" title="Loss">
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathBlock math="y = b + \vec{c}^T \sigma{(\vec{b}+\vec{\vec{W}}\vec{x})}" />
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
          <MathInline math="\boldsymbol{x}" /> is feature.
        </strong>
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          <MathInline math="\boldsymbol{\vec{\vec{W}}, \vec{b}, c^T, b}" /> is
          unknown parameters. Let{" "}
          <MathInline math="\boldsymbol{\theta = \begin{bmatrix}\theta_1 & \theta_2 & \cdots\end{bmatrix}}" />{" "}
          represent a set of unknown parameters.
        </strong>
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          Loss is a function of parameters{" "}
          <MathInline math="\boldsymbol{L(\theta)}" />. It means{" "}
          <Highlight>how good a set of values is</Highlight>.
        </strong>
      </li>
    </ul>
  </ContentLayout>
);

const Loss2_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Unlinear Model"
    title="Loss"
    textFlex={2}
    imgFlex={1}
    imageNode={<FlowDiagram nodes={label_nodes} edges={label_edges} />}
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathBlock math="y = b + \vec{c}^T \sigma{(\vec{b}+\vec{\vec{W}}\vec{x})}" />
    </div>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-120px" }}
    >
      <MathBlock math="L = \frac{1}{N}\sum_n e_n" />
    </div>
  </ContentWithImgLayout>
);

const Optimization_of_New_Model_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Unlinear Model"
    title="Optimization of New Model"
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
        <strong style={{ color: "#0a2f41" }}>
          <MathInline math="\boldsymbol{\theta^* = arg \min_\theta L}" />
        </strong>
      </li>
      <li>
        Randomly pick initial values <MathInline math="\theta^0" />
      </li>
    </ul>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-40px" }}
    >
      <MathBlock
        math="\begin{align*}\text{gradient } g &= \begin{bmatrix}
\frac{\partial L}{\partial \theta_1} \Big|_{\theta=\theta^0} \\ 
\frac{\partial L}{\partial \theta_2} \Big|_{\theta=\theta^0} \\ 
\vdots 
\end{bmatrix} \text{ , } \begin{bmatrix}\theta^1_1 \\ \theta^1_2 \\ \vdots \end{bmatrix} \leftarrow \begin{bmatrix}\theta^0_1 \\ \theta^0_2 \\ \vdots \end{bmatrix} - \begin{bmatrix}
\color{brown}\eta\color{#0a2f41}\frac{\partial L}{\partial \theta_1} \Big|_{\theta=\theta^0} \\ 
\color{brown}\eta\color{#0a2f41}\frac{\partial L}{\partial \theta_2} \Big|_{\theta=\theta^0} \\ 
\vdots 
\end{bmatrix} \\
        g &= \bigtriangledown L(\theta^0) \text{ , } \theta^1 \leftarrow \theta^0 - \color{brown}\eta \color{#0a2f41}g\end{align*}"
      />
    </div>
  </ContentLayout>
);

const Batch_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Unlinear Model"
    title="Batch"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={batchImg}
        alt="Data Representation"
        style={{
          width: "75%",
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

const Activation_Function_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Unlinear Model"
    title="Activation Function"
  >
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathBlock math="\begin{align*}&\text{Sigmoid }&& \frac{1}{1+e^{-(b+wx)}} \\ \\ &\text{Rectified Linear Unit, ReLU }&& c \max{(0, b+wx)} \end{align*}" />
    </div>
  </ContentLayout>
);

const Multi_Layer_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 3: Unlinear Model"
    title="Multi-layer"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={multiLayerImg}
        alt="Data Representation"
        style={{
          width: "70%",
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

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  Unlinear_Function_Page,
  Sigmoid_Page,
  Sum_of_Sigmoid_Page,
  Organize_a_Function2_Page,
  Organize_a_Function3_Page,
  Organize_a_Function4_Page,
  Loss_Page,
  Loss2_Page,
  Optimization_of_New_Model_Page,
  Batch_Page,
  Activation_Function_Page,
  Multi_Layer_Page,
];
