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

import networkImg from "../assets/network.png";
import { chain_nodes, chain_edges } from "../assets/chain_rule";
import {
  bp_nodes,
  bp_edges,
  bp2_nodes,
  bp2_edges,
} from "../assets/backpropagation";
import multiLayerImg from "../assets/multi-layer.png";

const Gradient_Descent_Page: Page = () => (
  <ContentLayout eyebrow="Section 4: Backpropagation" title="Gradient Descent">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Network parameters{" "}
      <MathInline math="\theta = \{w_1, w_2, \cdots, b_1, b_2, \cdots \}" />.
      <br /> Starting Parameters{" "}
      <MathInline math="\theta^0 \rightarrow \theta^1 \rightarrow \theta^2 \rightarrow \cdots" />
      <br />
      To compute the gradients efficiently, we use{" "}
      <Highlight>backpropagation</Highlight>.
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-70px" }}
    >
      <MathBlock math="\bigtriangledown L(\theta) = \begin{bmatrix} \partial L(\theta)/ \partial w_1 \\ \partial L(\theta)/ \partial w_2 \\ \vdots \\ \partial L(\theta)/ \partial b_1 \\ \partial L(\theta)/ \partial b_2 \\ \vdots \end{bmatrix}, \begin{matrix} \text{Compute} \bigtriangledown L(\theta^0) & & \theta^1 = \theta^0 - \eta \bigtriangledown L(\theta^0) \\ \text{Compute} \bigtriangledown L(\theta^1) & & \theta^2 = \theta^1 - \eta \bigtriangledown L(\theta^1) \\ & \vdots & \end{matrix}" />
    </div>
  </ContentLayout>
);

const Chain_Rule_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Backpropagation"
    title="Chain Rule"
    textFlex={1}
    imgFlex={1}
    imageNode={<FlowDiagram nodes={chain_nodes} edges={chain_edges} />}
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 48,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Case I. <br />
      <MathInline math="y = g(x), z = h(y)" />
      <br />
      <MathInline math="\frac{dz}{dx} = \frac{dz}{dy}\frac{dy}{dx}" />
      <br />
      Case II. <br />
      <MathInline math="x = g(s), y = h(s), z = k(x, y)" />
      <br />
      <MathInline math="\frac{dz}{ds} = \frac{dz}{dx}\frac{dx}{ds} + \frac{dz}{dy}\frac{dy}{ds}" />
    </p>
  </ContentWithImgLayout>
);

const Backpropagation_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Backpropagation"
    title="Backpropagation"
    textFlex={1}
    imgFlex={1}
    imageNode={<FlowDiagram nodes={bp_nodes} edges={bp_edges} />}
  >
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-70px" }}
    >
      <MathBlock math="\begin{matrix}L(\theta) = \sum_{n=1}^{N}C^n(\theta) \\ \\ \Downarrow \\ \\ \frac{\partial L(\theta)}{\partial w} = \sum_{n=1}^{N} \frac{\partial C^n(\theta)}{\partial w} \\ \\ \frac{\partial C}{\partial w} = \frac{\partial z}{\partial w}\frac{\partial C}{\partial z} \end{matrix}" />
    </div>
  </ContentWithImgLayout>
);

const Backpropagation2_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Backpropagation"
    title="Backpropagation"
    textFlex={0}
    imgFlex={4}
    imageNode={<FlowDiagram nodes={bp2_nodes} edges={bp2_edges} />}
    bottomContent={
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", position: "relative", top: "-60px" }}
      >
        <Callout type="warning" title="Forward pass">
          Compute <MathInline math="\partial z / \partial w" /> for all
          parameters.
        </Callout>
        <Callout type="warning" title="Backward pass">
          Compute <MathInline math="\partial C / \partial z" /> for all
          activation function inputs z.
        </Callout>
      </div>
    }
  >
    <div />
  </ContentWithImgLayout>
);

const Forward_Pass_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Backpropagation"
    title="Forward Pass"
    textFlex={0}
    imgFlex={4}
    imageNode={<FlowDiagram nodes={bp2_nodes} edges={bp2_edges} />}
    bottomContent={
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", position: "relative", top: "0px" }}
      >
        <MathBlock math="\begin{align*} & z = x_1 w_1 + x_2 w_2 + b \\ & \partial z / \partial w_1 = x_1, \partial z / \partial w_2 = x_2 \\ & \partial z / \partial w \text{ is the value of the input connected by the weight.} \end{align*}" />
      </div>
    }
  >
    <div />
  </ContentWithImgLayout>
);

const Backward_Pass_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Backpropagation"
    title="Backward Pass"
    textFlex={0}
    imgFlex={4}
    imageNode={<FlowDiagram nodes={bp2_nodes} edges={bp2_edges} />}
    bottomContent={
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", position: "relative", top: "0px" }}
      >
        <MathBlock
          math="\frac{\partial C}{\partial z} = \frac{\partial a}{\color{seagreen} \partial z}\color{royalblue}\frac{\partial C}{\partial a}\color{black}, \frac{\partial C}{\partial a} = \frac{\partial z'}{\partial a}\frac{\partial C}{\partial z'} + \frac{\partial z''}{\partial a}\frac{\partial C}{\partial z''} \\
          \frac{\partial C}{\partial z} = \sigma'(z)(w_3 \frac{\partial C}{\partial z'} + w_4 \frac{\partial C}{\partial z''}), \sigma'(z) \text{ is a constant}"
        />
      </div>
    }
  >
    <div />
  </ContentWithImgLayout>
);

const Summary_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 4: Backpropagation"
    title="Summary"
    textFlex={0}
    imgFlex={4}
    imageNode={<FlowDiagram nodes={bp2_nodes} edges={bp2_edges} />}
    bottomContent={
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", position: "relative", top: "0px" }}
      >
        <MathBlock math="\begin{align*} \frac{\partial C}{\partial w} & = \color{seagreen}\frac{\partial z}{\partial w} \color{black} \times \color{royalblue} \frac{\partial C}{\partial z} \color{black} \\ & = \color{seagreen} a \color{black} \times \color{royalblue} \frac{\partial C}{\partial z} \end{align*}" />
      </div>
    }
  >
    <div />
  </ContentWithImgLayout>
);

export const section4Slides: Page[] = [
  createSectionSlide(3, sectionData),
  Gradient_Descent_Page,
  Chain_Rule_Page,
  Backpropagation_Page,
  Backpropagation2_Page,
  Forward_Pass_Page,
  Backward_Pass_Page,
  Summary_Page,
];
