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
import { MathDiagram } from "../../../components/shared/mathDiagram";
import { Plot, Line, Theme, LaTeX, Text } from "mafs";

import { sectionData } from "../meta";

const Tasks: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Computer Vision"
    title="Tasks"
    authorInfo="Convolutional Neural Network"
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
      Computer Vision (CV) treats images as mathematical matrices to uncover
      underlying patterns.
      <br />
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
        <strong style={{ color: "#0a2f41" }}>Classification:</strong> Determines
        what object is present in an image.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Object Detection:</strong>{" "}
        Identifies what the object is and locates where it is using bounding
        boxes.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Semantic Segmentation:</strong>{" "}
        Performs pixel-based classification, assigning a label to every pixel{" "}
        <br /> to generate a mask.
      </li>
    </ul>
  </ContentLayout>
);

const Img_Representation: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Computer Vision"
    title="Image Representation"
    authorInfo="Convolutional Neural Network"
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
        <strong style={{ color: "#0a2f41" }}>Pixel Representation:</strong>
      </li>
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
          <strong style={{ color: "#0a2f41" }}>Balck & White:</strong> 1
          bits/pixel (<MathInline math="M \times N \times 1" />)
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Grayscale:</strong> 8 bits/pixel
          (0~255) (<MathInline math="M \times N \times 8" />)
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>RGB:</strong> 24 bits/pixel (
          <MathInline math="3 \times 8" /> bits per channel) (
          <MathInline math="M \times N \times 24" />)
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>RGBA:</strong> 32 bits/pixel (RGB
          + Alpha) (
          <MathInline math="M \times N \times 32" />)
        </li>
      </ul>
      <li>
        <strong style={{ color: "#0a2f41" }}>
          Spatial Coordinate Standard:
        </strong>
      </li>
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
          <strong style={{ color: "#0a2f41" }}>Top-left origin:</strong> (0, 0).
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Positive directions:</strong>{" "}
          Right and Down.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Traversal Orders:</strong>{" "}
          Inverse S-order, Z-order.
        </li>
      </ul>
    </ul>
  </ContentLayout>
);

const Img_Binarization: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Computer Vision"
    title="Image Binarization"
    authorInfo="Convolutional Neural Network"
  >
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-80px" }}
    >
      <MathBlock math="Gray = 0.299R + 0.587G + 0.114B | 0 \le Gray, R, G, B \le 255" />
    </div>
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        width: "85%",
        position: "relative",
        top: "-120px",
      }}
    >
      Converts grayscale images into binary (0 or 255) using a threshold{" "}
      <MathInline math="T" />.
      <MathDiagram viewBox={{ x: [3, 5], y: [-0.2, 7.8] }}>
        <Plot.OfX
          y={(x) => 0.1 * Math.pow(x - 8, 3) + 0.8 * Math.pow(x - 8, 2)}
          color={Theme.blue}
        />
        <Line.Segment
          point1={[5, 0]}
          point2={[5, 4.5]}
          style="dashed"
          weight={5}
          color="#7bb58a"
        />
        <LaTeX at={[2.8, 5]} tex={String.raw`R_0`} />
        <LaTeX at={[8, 2]} tex={String.raw`R_1`} />
        <LaTeX at={[5.2, 5]} tex={String.raw`T`} />
        <LaTeX at={[13, 0.5]} tex={String.raw`f(x, y)`} />
        <Text x={-2.3} y={7} attach="s" attachDistance={15} size={48}>
          # of pixels
        </Text>
        <Text x={-7.5} y={7.5} attach="s" attachDistance={15} size={48}>
          Intensity
        </Text>
      </MathDiagram>
    </p>
  </ContentLayout>
);

const Thresholding: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Computer Vision"
    title="Thresholding"
    authorInfo="Convolutional Neural Network"
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
        <strong style={{ color: "#0a2f41" }}>Otsu's Algorithm:</strong>{" "}
        Masimizes inter-class variance (or minimizes intra-class variance)
        between foreground and background. Time complexity is{" "}
        <MathInline math="O(m^k)" />.
      </li>
    </ul>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-60px" }}
    >
      <MathBlock
        math="\begin{align*} & w_0(t) = \sum_{i=0}^{t}{P(i)}, && w_1(t) = \sum_{i=t}^{T-1}{P(i)} \\
        & \mu_0(t) = \frac{\sum_{i=0}^{t-1}{iP(i)}}{w_0(t)}, && \mu_1(t) = \frac{\sum_{i=t}^{T-1}{iP(i)}}{w_1(t)} \\
        & \sigma_0^2(t) = \frac{\sum_{i=0}^{t-1}{(i-\mu_0)^2 P(i)}}{w_0(t)}, && \sigma_1^2(t) = \frac{\sum_{i=t}^{T-1}{(i-\mu_1)^2 P(i)}}{w_1(t)} \end{align*}"
      />
    </div>
  </ContentLayout>
);

const Thresholding2: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 1: Computer Vision"
    title="Thresholding"
    authorInfo="Convolutional Neural Network"
    textFlex={1.64}
    imgFlex={1}
    imageNode={
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/34/Otsu%27s_Method_Visualization.gif"
        alt="Otsu's Method Visualization.gif"
        style={{
          width: "100%",
          borderRadius: 16,
          objectFit: "cover",
          position: "relative",
          left: "-60px",
          top: "-70px",
        }}
      />
    }
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
      Let, <MathInline math="\sigma_b^2(t)" /> be the inter-class (pixel
      intensity) variance, which is defined as the weighted sum of variances of
      aforementionedd two classes.
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-60px" }}
    >
      <MathBlock math="\sigma_b^2(t) = w_0 w_1 (\mu_0 - \mu_1)^2 \\ \sigma_b^2(t^*) = \max_{0<t<T}{\sigma_b^2(t)}" />
    </div>
  </ContentWithImgLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  Tasks,
  Img_Representation,
  Img_Binarization,
  Thresholding,
  Thresholding2,
];
