import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import { MathDiagram } from "../../../components/shared/mathDiagram";
import { MathInline, MathBlock } from "../../../components/shared/math";

import React, { useState } from "react";
import {
  Plot,
  Vector,
  MovablePoint,
  Point,
  Line,
  Theme,
  Text,
  LaTeX,
} from "mafs";

import { sectionData } from "../meta";

import batchImg from "../assets/batch.png";
import batch2Img from "../assets/batch_small_or_large.png";
import batch3Img from "../assets/batch_small_or_large2.png";
import BNImg from "../assets/batch_normalization.png";
import BN2Img from "../assets/batch_normalization2.png";
import CDLImg from "../assets/CDL.png";
import BN3Img from "../assets/BN.png";
import BNTImg from "../assets/BNT.png";
import MomentumImg from "../assets/momentum.png";
import ALRImg from "../assets/ALR.png";
import ALRSImg from "../assets/LRSummary.png";

import { SigmoidChart } from "./section3";

const Batch_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Review: Batch"
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

const Batch2_Page: Page = () => (
  <ContentLayout eyebrow="Section 7: Optimization" title="Review: Batch">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Update for each small batch{" "}
      <MathInline math="\rightarrow \underline{\text{short time for cooldown}}_{\text{x}}" />
      , but noisy. <br />
      Larger batch
      <MathInline math="\rightarrow \underline{\text{long time for cooldown}}_{\text{x}}" />
      , but powerful. <br />
      <br />
      Larger batch size does not require longer time to compute gradient, <br />
      because we have <Highlight>parallel computing</Highlight>. But parallel
      computing have limitation. <br />
      <br />
      Smaller batch requires longer time for one epoch (longer time for seeing
      all data once).
      <Callout type="warning" title="Take a way">
        Noisy update is better for training. small batch is better on testing
        data.
      </Callout>
    </p>
  </ContentLayout>
);

const Batch3_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Smaller Batch or Larger Batch?"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={batch2Img}
        alt="Data Representation"
        style={{
          width: "100%",
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

const Batch4_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Smaller Batch or Larger Batch?"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={batch3Img}
        alt="Data Representation"
        style={{
          width: "80%",
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

const WinBadge = () => (
  <span
    style={{
      marginLeft: "12px",
      backgroundColor: "#E53E3E",
      color: "#FFFFFF",
      fontSize: "18px",
      fontWeight: "bold",
      padding: "4px 8px",
      borderRadius: "6px",
      boxShadow: "0 2px 4px rgba(229, 62, 62, 0.4)",
      display: "inline-block",
      transform: "rotate(-4deg)",
    }}
  >
    WIN
  </span>
);
export const BatchSizeComparisonTable = () => {
  const data = [
    {
      feature: "Speed for one update\n(no parallel)",
      small: "Faster",
      large: "Slower",
      win: null,
    },
    {
      feature: "Speed for one update\n(with parallel)",
      small: "Same",
      large: "Same (not too large)",
      win: null,
    },
    {
      feature: "Time for one epoch",
      small: "Slower",
      large: "Faster",
      win: "large",
    },
    {
      feature: "Gradient",
      small: "Noisy",
      large: "Stable",
      win: null,
    },
    {
      feature: "Optimization",
      small: "Better",
      large: "Worse",
      win: "small",
    },
    {
      feature: "Generalization",
      small: "Better",
      large: "Worse",
      win: "small",
    },
  ];

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontSize: "32px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#4285F4", color: "#FFFFFF" }}>
          <th
            style={{ width: "46%", padding: "20px 24px", textAlign: "left" }}
          ></th>
          <th
            style={{
              width: "27%",
              padding: "20px 24px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Small
          </th>
          <th
            style={{
              width: "27%",
              padding: "20px 24px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Large
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const isEven = index % 2 === 0;
          return (
            <tr
              key={index}
              style={{
                backgroundColor: isEven ? "#F8FAFC" : "#EDF2F7",
              }}
            >
              {/* 項目名稱 */}
              <td
                style={{
                  padding: "20px 24px",
                  fontWeight: "500",
                  color: "#2D3748",
                  whiteSpace: "pre-line",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                {row.feature}
              </td>

              {/* Small Batch 結果 */}
              <td
                style={{
                  padding: "20px 24px",
                  textAlign: "center",
                  color: "#2D3748",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <span>{row.small}</span>
                {row.win === "small" && <WinBadge />}
              </td>

              {/* Large Batch 結果 */}
              <td
                style={{
                  padding: "20px 24px",
                  textAlign: "center",
                  color: "#2D3748",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <span>{row.large}</span>
                {row.win === "large" && <WinBadge />}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
const Batch5_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Optimization"
    title="Smaller Batch or Larger Batch?"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "90%",
        position: "relative",
        top: "-30px",
      }}
    >
      <BatchSizeComparisonTable />
    </div>
  </ContentLayout>
);

const Batch_Normalization_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Changing Landscape"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={BNImg}
        alt="Data Representation"
        style={{
          width: "80%",
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

const Batch_Normalization2_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Feature Normalization"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={BN2Img}
        alt="Data Representation"
        style={{
          width: "80%",
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

const Considering_Deep_Learning_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Optimization"
    title="Considering Deep Learning"
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
      <MathInline math="\text{Feature Normalization}(x^i) \rightarrow W^1 \rightarrow z^i \rightarrow \color{brown}\sigma\color{#0a2f41} \rightarrow a^i \rightarrow W^2 \rightarrow \cdots" />
      <br />
      <MathInline math="\text{Feature Normalization}(x^j) \rightarrow W^1 \rightarrow z^j \rightarrow \color{brown}\sigma\color{#0a2f41} \rightarrow a^j \rightarrow W^2 \rightarrow \cdots" />
      <br />
      <MathInline math="\text{Feature Normalization}(x^k) \rightarrow W^1 \rightarrow z^k \rightarrow \color{brown}\sigma\color{#0a2f41} \rightarrow a^k \rightarrow W^2 \rightarrow \cdots" />
      <br />
      <MathInline math="(z^i, z^j, z^k)" />
      {": "} different dims have different ranges.
    </p>
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "90%",
        position: "relative",
        top: "-20px",
      }}
    >
      <SigmoidChart />
    </div>
  </ContentLayout>
);

const Considering_Deep_Learning2_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Considering Deep Learning"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={CDLImg}
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

const Batch_Normalization3_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Normalization"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={BN3Img}
        alt="Data Representation"
        style={{
          width: "65%",
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

const Batch_Normalization4_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Batch Normalization - Testing"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={BNTImg}
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

const Momentum_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Momentum"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={MomentumImg}
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

const Adaptive_Learning_Rate_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Adaptive Learning Rate"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={ALRImg}
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

const Adaptive_Learning_Rate2_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Optimization"
    title="Adaptive Learning Rate"
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
      Different parameters needs different learning rate.
      <MathBlock
        math="\theta_i^{t+1} \leftarrow \theta_i^t - \color{brown}\eta\color{#0a2f41} g_i^t \\
        g_i^t = \frac{\partial L}{\partial \theta_i}|_{\theta = \theta^t} \\
        \theta_i^{t+1} \leftarrow \theta_i^t - \color{brown}\frac{\eta}{\sigma_i^t}\color{#0a2f41} g_i^t "
      />
      <MathInline math="\sigma_i^t" /> dependented by parameters.
    </p>
  </ContentLayout>
);

const Root_Mean_Square_Page: Page = () => (
  <ContentLayout eyebrow="Section 7: Optimization" title="Root Mean Square">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        position: "relative",
        top: "-160px",
      }}
    >
      <MathBlock
        math="\begin{align*} & \theta_i^1 \leftarrow \theta_i^0 - \frac{\eta}{\sigma_i^0} g_i^0 && \sigma_i^0 = \sqrt{(g_i^0)^2} = |g_i^0| \\
        & \theta_i^2 \leftarrow \theta_i^1 - \frac{\eta}{\sigma_i^1} g_i^1 && \sigma_i^1 = \sqrt{\frac{1}{2}[(g_i^0)^2+(g_i^1)^2]} \\
& \theta_i^3 \leftarrow \theta_i^2 - \frac{\eta}{\sigma_i^2} g_i^2 && \sigma_i^2 = \sqrt{\frac{1}{3}[(g_i^0)^2+(g_i^1)^2+(g_i^2)^2]} \\
        & \vdots \\
& \theta_i^{t+1} \leftarrow \theta_i^t - \frac{\eta}{\sigma_i^t} g_i^t && \sigma_i^t = \sqrt{\frac{1}{t+1}\sum_{j=0}^t(g_i^j)^2} \\
\end{align*}"
      />
    </p>
  </ContentLayout>
);

const RMSProp_Page: Page = () => (
  <ContentLayout eyebrow="Section 7: Optimization" title="RMSProp">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        position: "relative",
        top: "-160px",
      }}
    >
      <MathBlock
        math="\begin{align*} & \theta_i^1 \leftarrow \theta_i^0 - \frac{\eta}{\sigma_i^0} g_i^0 && \sigma_i^0 = \sqrt{(g_i^0)^2} \\
        & \theta_i^2 \leftarrow \theta_i^1 - \frac{\eta}{\sigma_i^1} g_i^1 && \sigma_i^1 = \sqrt{a(\sigma_i^0)^2+(1-a)(g_i^1)^2} \\
& \theta_i^3 \leftarrow \theta_i^2 - \frac{\eta}{\sigma_i^2} g_i^2 && \sigma_i^2 = \sqrt{a(\sigma_i^1)^2+(1-a)(g_i^2)^2} \\
        & \vdots \\
& \theta_i^{t+1} \leftarrow \theta_i^t - \frac{\eta}{\sigma_i^t} g_i^t && \sigma_i^t = \sqrt{a(\sigma_i^{t-1})^2+(1-a)(g_i^t)^2} \\
\end{align*}"
      />
    </p>
  </ContentLayout>
);

const RMSProp2_Page: Page = () => (
  <ContentLayout eyebrow="Section 7: Optimization" title="RMSProp">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        position: "relative",
        top: "-30px",
      }}
    >
      <MathBlock math="\begin{align*} & \theta_i^{t+1} \leftarrow \theta_i^t - \frac{\eta}{\sigma_i^t} g_i^t && \sigma_i^t = \sqrt{a(\sigma_i^{t-1})^2+(1-a)(g_i^t)^2} \end{align*}" />
      The recent gradient has larger influence and the past gradient have less
      influence. <br />
      <br />
      flat: small <MathInline math="\sigma_i^t" /> larger step. <br />
      steep: large <MathInline math="\sigma_i^t" /> smaller step. <br />
      <br /> Adam: RMSProp + Momentum
    </p>
  </ContentLayout>
);

const Learning_Rate_Scheduling_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 7: Optimization"
    title="Learning Rate Scheduling"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        position: "relative",
        top: "-30px",
      }}
    >
      <MathBlock math="\theta_i^{t+1} \leftarrow \theta_i^t - \frac{\color{brown}\eta^t\color{#0a2f41}}{\sigma_i^t} g_i^t " />
      Learning Rate Decay: <br />
      After the training goes, we are close to the destination, so we reduce the
      learning rate. <br />
      <br />
      Warn Up: <br />
      At the beginning, the estimate of <MathInline math="\sigma_i^t" /> has
      large variance.
    </p>
  </ContentLayout>
);

const Summary_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 7: Optimization"
    title="Summary of Adaptive Learning Rate"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={ALRSImg}
        alt="Data Representation"
        style={{
          width: "100%",
          borderRadius: 16,
          objectFit: "cover",
          position: "relative",
          left: "-80px",
          top: "-70px",
        }}
      />
    }
  >
    <div />
  </ContentWithImgLayout>
);

export const section7Slides: Page[] = [
  createSectionSlide(6, sectionData),
  Batch_Page,
  Batch2_Page,
  Batch3_Page,
  Batch4_Page,
  Batch5_Page,
  Batch_Normalization_Page,
  Batch_Normalization2_Page,
  Considering_Deep_Learning_Page,
  Considering_Deep_Learning2_Page,
  Batch_Normalization3_Page,
  Batch_Normalization4_Page,
  Momentum_Page,
  Adaptive_Learning_Rate_Page,
  Adaptive_Learning_Rate2_Page,
  Root_Mean_Square_Page,
  RMSProp_Page,
  RMSProp2_Page,
  Learning_Rate_Scheduling_Page,
  Summary_Page,
];
