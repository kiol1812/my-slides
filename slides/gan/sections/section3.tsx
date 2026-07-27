import React from "react";
import { type Page } from "@open-slide/core";
import { Plot, Text } from "mafs";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { MathDiagram } from "../../../components/shared/mathDiagram";
import { Highlight } from "../../../components/shared/highlight";
import { Callout } from "../../../components/shared/callout";
import { sectionData } from "../meta";

const ObjectiveSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Mathematical Objective"
    title="Our Objective: Minimize Divergence"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{ display: "flex", flexDirection: "row", gap: 40, height: "100%" }}
    >
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
      >
        <ul
          className="ac-fadeIn"
          style={{
            fontSize: 26,
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
            We want the generated distribution <MathInline math="P_G" /> to be{" "}
            <strong style={{ color: "#0a2f41" }}>as close as possible</strong>{" "}
            to the real data distribution <MathInline math="P_{data}" />.
          </li>
          <li>
            We formulate this by minimizing the divergence between the two
            distributions.
          </li>
          <li>
            Since we don't know the exact mathematical formulas for{" "}
            <MathInline math="P_G" /> and <MathInline math="P_{data}" />, we
            cannot calculate the divergence directly.
          </li>
          <li>
            However, <Highlight>sampling is good enough</Highlight>. We can
            estimate the divergence by drawing samples from both distributions.
          </li>
        </ul>

        <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
          <MathBlock math="G^* = \arg\min_G \text{Div}(P_G, P_{data})" />
        </div>
      </div>

      <div className="ac-fadeIn" style={{ flex: 0.8, animationDelay: "0.4s" }}>
        <div
          style={{
            height: "400px",
            borderRadius: 16,
            overflow: "hidden",
            border: "2px solid #ddd",
          }}
        >
          <MathDiagram
            viewBox={{ x: [-5, 5], y: [-0.5, 1.5] }}
            zoom={{ min: 1, max: 1 }}
          >
            {/* P_G (Generated Distribution) */}
            <Plot.OfX
              y={(x) => 0.8 * Math.exp(-Math.pow(x + 1.5, 2))}
              color="#2ca089"
              weight={5}
            />
            <Text x={-1.5} y={1.0} size={40} color="#2ca089">
              P_G
            </Text>

            {/* P_data (Real Distribution) */}
            <Plot.OfX
              y={(x) => Math.exp(-Math.pow(x - 2, 2))}
              color="#4a7499"
              weight={5}
            />
            <Text x={2} y={1.2} size={40} color="#4a7499">
              P_data
            </Text>

            {/* Arrow connecting them */}
            <Plot.OfX
              y={() => 0.4}
              domain={[-0.2, 0.5]}
              color="#555"
              weight={3}
              style="dashed"
            />
          </MathDiagram>
        </div>
      </div>
    </div>
  </ContentLayout>
);

const JSDivergenceSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Mathematical Objective"
    title="Discriminator and JS Divergence"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%",
      }}
    >
      <ul
        className="ac-fadeIn"
        style={{
          fontSize: 26,
          color: "#555",
          lineHeight: 1.6,
          margin: 0,
          paddingLeft: 40,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <li>
          Training the Discriminator is mathematically equivalent to estimating
          the{" "}
          <strong style={{ color: "#0a2f41" }}>
            Jensen-Shannon (JS) Divergence
          </strong>
          .
        </li>
        <li>
          If the divergence is{" "}
          <strong style={{ color: "#2ca089" }}>small</strong>, the distributions
          overlap, making it <Highlight>hard to discriminate</Highlight>.
        </li>
        <li>
          If the divergence is{" "}
          <strong style={{ color: "#e5a93d" }}>large</strong>, the distributions
          are distinct, making it <Highlight>easy to discriminate</Highlight>.
        </li>
      </ul>

      <div
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Callout type="info" title="Objective Function for Discriminator (V)">
          <div style={{ fontSize: 24, textAlign: "center", marginTop: 10 }}>
            <MathBlock math="V(G,D) = E_{y \sim P_{data}}[\log D(y)] + E_{y \sim P_G}[\log(1 - D(y))]" />
          </div>
        </Callout>
      </div>
    </div>
  </ContentLayout>
);

const JSDivergence2Slide: Page = () => (
  <ContentLayout
    eyebrow="Section 3: Mathematical Objective"
    title="Discriminator and JS Divergence"
    authorInfo="Generative Adversarial Network"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%",
      }}
    >
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.4s", marginTop: "10px" }}
      >
        <MathBlock math="D^* = \arg\max_D V(D,G)" />
        <div
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "#777",
            fontStyle: "italic",
            marginTop: "-10px",
          }}
        >
          (Equivalent to minimizing negative cross-entropy for a binary
          classifier)
        </div>
      </div>
    </div>
  </ContentLayout>
);

export const section3Slides: Page[] = [
  createSectionSlide(2, sectionData),
  ObjectiveSlide,
  JSDivergenceSlide,
  JSDivergence2Slide,
];
