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

const MathDemoPage: Page = () => (
  <ContentLayout eyebrow="Section 2: Deep Learning" title="Forward Propagation">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#555",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      In a basic neural network, the output of a neuron is calculated using a
      linear transformation followed by an activation function. Let weights be{" "}
      <MathInline math="W" />, inputs be <MathInline math="x" />, and bias be{" "}
      <MathInline math="b" />.
    </p>

    {/* 區塊公式：呈現主要的數學模型 */}
    <MathBlock math="z = W \cdot x + b" />

    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#555",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      We then apply a non-linear activation function, such as the Sigmoid
      function, to introduce non-linearity into the model:
    </p>

    {/* 區塊公式：呈現複雜的分數與指數 */}
    <MathBlock math="\sigma(z) = \frac{1}{1 + e^{-z}}" />
  </ContentLayout>
);

const gradientDescentCode = `
def gradient_descent(x, y, lr=0.01, epochs=1000):
    w, b = 0.0, 0.0
    n = len(x)
    
    for _ in range(epochs):
        y_pred = w * x + b
        
        # Calculate gradients
        dw = (2/n) * sum(x * (y_pred - y))
        db = (2/n) * sum(y_pred - y)
        
        # Update weights
        w = w - lr * dw
        b = b - lr * db
        
    return w, b
`.trim();

const GradientDescentPage: Page = () => (
  <ContentLayout
    eyebrow={
      <div style={{ display: "flex", alignItems: "center" }}>
        Section 3: Optimization <Badge>Live Code</Badge>
      </div>
    }
    title="Implementing Gradient Descent"
  >
    {/* 1. 概念解說區塊，使用 Highlight 強調關鍵字 */}
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      The core mechanism of learning is <Highlight>Gradient Descent</Highlight>.
      By calculating the partial derivative of the Loss function with respect to
      each weight, we take steps proportional to the negative of the gradient to
      find the local minimum.
    </p>

    {/* 2. 程式碼區塊 */}
    <div className="ac-fadeIn">
      <CodeBlock code={gradientDescentCode} language="python" />
    </div>

    {/* 3. 提示區塊，使用 Callout 提醒常犯錯誤，並結合 MathInline 標示數學符號 */}
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <Callout type="warning" title="Watch your Learning Rate (lr)">
        Setting the learning rate <MathInline math="\alpha" /> too high can
        cause the algorithm to overshoot the minimum and diverge (loss becomes
        NaN). Setting it too low will make the training process painfully slow.
      </Callout>
    </div>
  </ContentLayout>
);

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      label: (
        <span>
          Input <MathInline math="X" />
        </span>
      ),
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 0, y: 150 },
    data: {
      label: (
        <span>
          Linear <MathInline math="z = WX + b" />
        </span>
      ),
      highlight: true,
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 0, y: 300 },
    data: {
      label: (
        <span>
          Activation <MathInline math="a = \sigma(z)" />
        </span>
      ),
    },
  },
];

// 定義連線 (帶有動畫的箭頭)
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
];

const ForwardPropPage: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Deep Learning"
    title="Forward Propagation Pipeline"
    textFlex={1}
    imgFlex={1.5} // 讓圖表區塊大一點
    // 將 FlowDiagram 直接作為 imageNode 傳入右側
    imageNode={<FlowDiagram nodes={initialNodes} edges={initialEdges} />}
  >
    <p style={{ fontSize: 32, color: "#555", lineHeight: 1.6 }}>
      The data flows through the network in a distinct sequence.
    </p>
    <ul
      style={{
        fontSize: 28,
        color: "#555",
        lineHeight: 1.8,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <li>
        <strong>Input:</strong> Raw data features are fed into the network.
      </li>
      <li>
        <strong>Linear:</strong> Weights and biases are applied.
      </li>
      <li>
        <strong>Activation:</strong> Non-linearity is introduced.
      </li>
    </ul>
  </ContentWithImgLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  NeuralNetworkPage,
  MathDemoPage,
  GradientDescentPage,
  ForwardPropPage,
];
