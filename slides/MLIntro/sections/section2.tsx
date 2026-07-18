import { type Page } from "@open-slide/core";
import { MarkerType } from "@xyflow/react";

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

import { sectionData } from "../meta";

const Function_with_Unknow_Paramters: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Linear Model"
    title="Function with Unknow Parameters"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#555",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Form a function based on domain knowledge, e.g.
    </p>

    <MathBlock math="y = f_{\theta}(x) = b + Wx_1" />

    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#555",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      then, we called <MathInline math="f_{\theta}(x)" /> by{" "}
      <Highlight>
        <strong style={{ color: "#0a2f41" }}>model</strong>
      </Highlight>{" "}
      with{" "}
      <Highlight>
        <strong style={{ color: "#0a2f41" }}>feature</strong>
      </Highlight>{" "}
      <MathInline math="x_1" />,{" "}
      <Highlight>
        <strong style={{ color: "#0a2f41" }}>weight</strong>
      </Highlight>{" "}
      <MathInline math="W" /> and{" "}
      <Highlight>
        <strong style={{ color: "#0a2f41" }}>bias</strong>
      </Highlight>{" "}
      <MathInline math="b" />.
    </p>
  </ContentLayout>
);

const Define_Loss_from_Training_Data: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Linear Model"
    title="Define Loss from Training Data"
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
        <strong style={{ color: "#0a2f41" }}>Loss</strong> is a function of
        parameters, e.g. <MathInline math="L(b, W)" />.
      </li>
      <li>Loss will tell how good a set of value is.</li>
    </ul>
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#555",
        lineHeight: 1.6,
        margin: 0,
        width: "90%",
      }}
    >
      Calculate the gap, called <MathInline math="e_n" />, which between predict
      value <MathInline math="y" /> and ground true{" "}
      <MathInline math="\hat{y}" />. Ground true is also called by
      <Highlight>
        <strong style={{ color: "#0a2f41" }}>label</strong>
      </Highlight>
      .
    </p>
    <MathBlock math="L = \frac{1}{N}\sum_n{e_n}" />
  </ContentLayout>
);

const Loss_Functions: Page = () => (
  <ContentLayout eyebrow="Section 2: Linear Model" title="Loss functions">
    <MathBlock math="L = \frac{1}{N}\sum_n{e_n}" />
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
        <Highlight>
          <strong style={{ color: "#0a2f41" }}>Mean Absolute Error, MAE</strong>
        </Highlight>
        : <MathInline math="e=|y-\hat{y}|" />
      </li>
      <li>
        <Highlight>
          <strong style={{ color: "#0a2f41" }}>Mean Square Error, MSE</strong>
        </Highlight>
        : <MathInline math="e=(y-\hat{y})^2" />
      </li>
      <li>
        The choice of loss functuin depends on the requirements of the task and
        relies on the designer's understanding of the problem. (
        <Highlight> Domain Knowledge</Highlight>)
      </li>
    </ul>
  </ContentLayout>
);

const Optimization: Page = () => (
  <ContentLayout eyebrow="Section 2: Linear Model" title="Optimization">
    <MathBlock math="w^*, b^* = arg\min_{w,b}{L}" />
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#555",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Find an set of weights and bias to make loss to be minimum. It can be
      finded through{" "}
      <Highlight>
        <strong style={{ color: "#0a2f41" }}>Gradient Desent</strong>
      </Highlight>
      .
    </p>
  </ContentLayout>
);

const OptimizationSteps: Page = () => (
  <ContentLayout eyebrow="Section 2: Linear Model" title="Optimization Steps">
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
        Pick an initial value <MathInline math="W^0" /> (Randomly).
      </li>
      <li>
        Compute <MathInline math="\frac{\partial{L}}{\partial{w}}|_{w=w^0}" />:
        if negative then increase <MathInline math="W" />; if positive then
        decrease <MathInline math="W" />.
      </li>
      <li>
        Update weights. To determine how long the weights needed to update, it's
        rely on hyprparameters{" "}
        <MathInline math="\eta \frac{\partial{L}}{\partial{w}}|_{w=w^0}" />.{" "}
        <Highlight>
          <MathInline math="\eta" />
        </Highlight>{" "}
        is called by <Highlight>learning rate</Highlight>.
      </li>
    </ul>
    <MathBlock math="w^1 \leftarrow w^0-\eta\frac{\partial{L}}{\partial{w}}|_{w=w^0}" />
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
        Update weights iteratively and ended when reach maximum of steps or when
        gradient is <MathInline math="\to 0" />.
      </li>
    </ul>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  Function_with_Unknow_Paramters,
  Define_Loss_from_Training_Data,
  Loss_Functions,
  Optimization,
  OptimizationSteps,
];
