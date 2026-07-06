import { type Page, useSlidePageNumber } from "@open-slide/core";
import { ImagePlaceholder, type SlideMeta } from "@open-slide/core";

import React, { ReactNode } from "react";

const fill = {
  width: "100%",
  height: "100%",
  background: "#FFFFFF",
  color: "#0a2f41",
  fontFamily: 'JetBrains Mono, "Fira Code", monospace',
  overflow: "hidden",
  position: "relative",
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 18,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "#6C757D",
      fontWeight: 600,
    }}
  >
    {children}
  </div>
);

const Footer = ({ authorInfo = "DL&CV Final Project" }) => {
  const { current } = useSlidePageNumber();

  const lineStyle = {
    height: "1px",
    backgroundColor: "#7c9fa8",
    margin: "0 15px",
    opacity: 0.8,
  };

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 30,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: '"Helvetica Neue", sans-serif',
        fontSize: 20,
        color: "#6C757D",
      }}
    >
      <div style={{ ...lineStyle, flex: 1 }} />
      <span>{authorInfo}</span>
      <div style={{ ...lineStyle, flex: 8 }} />
      <span>{current - 1}</span>
      <div style={{ ...lineStyle, flex: 1 }} />
    </div>
  );
};
const Cover: Page = () => (
  <div style={fill}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "160px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        className="ac-fadeIn"
        style={{ fontSize: 80, fontWeight: 700, marginBottom: 24 }}
      >
        Machine Learning Intro
      </h1>
      <h2
        className="ac-fadeIn"
        style={{
          fontSize: 56,
          fontWeight: 500,
          color: "#6C757D",
          marginBottom: 64,
        }}
      >
        Deep Learning Study
      </h2>
      <div className="ac-fadeIn" style={{ fontSize: 36, lineHeight: 1.6 }}>
        <p>kiol1812</p>
        <p>2026/07/06</p>
      </div>
    </div>
  </div>
);

const Toc: Page = () => {
  const agendaItems = [
    "Introduction to Machine Learning",
    "Neural Networks Basics",
    "Deep Learning Architecture",
    "Computer Vision Applications",
    "Conclusion & Q&A",
  ];

  return (
    <div style={fill}>
      <div
        style={{
          padding: "120px 140px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* ===== Header ===== */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            marginBottom: 60,
          }}
        >
          <Eyebrow>Agenda</Eyebrow>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Outline
          </h1>
        </div>

        {/* ===== Contents ===== */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 36,
            flex: 1,
            paddingLeft: 20,
            justifyContent: "start",
          }}
        >
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="ac-fadeIn"
              style={{ display: "flex", alignItems: "center", gap: 40 }}
            >
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#6C757D",
                  opacity: 0.7,
                }}
              >
                0{index + 1}
              </span>
              <span style={{ fontSize: 44, fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer authorInfo="Machine Learning Intro" />
    </div>
  );
};

interface ContentWithImgLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  children: ReactNode;

  imageNode?: ReactNode;
  imageWidth?: number | string;
  imageHeight?: number | string;
  imageHint?: string;

  textFlex?: number;
  imgFlex?: number;

  authorInfo?: string;
}

const ContentWithImgLayout = ({
  eyebrow,
  title,
  children,
  imageNode,
  imageWidth = 800,
  imageHeight = 500,
  imageHint = "Side image — drop a JPG or PNG here",
  textFlex = 1,
  imgFlex = 1,
  authorInfo = "Machine Learning Intro",
}: ContentWithImgLayoutProps) => (
  <div style={fill}>
    <div
      style={{
        padding: "120px 140px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ===== Header ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          marginBottom: 60,
        }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 1500,
          }}
        >
          {title}
        </h1>
      </div>

      {/* ===== Contents ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 80,
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        {/* Left: texts */}
        <div
          style={{
            flex: textFlex,
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          {children}
        </div>

        {/* Right: image */}
        <div
          style={{ flex: imgFlex, display: "flex", justifyContent: "center" }}
        >
          {imageNode ? (
            imageNode
          ) : (
            <ImagePlaceholder
              hint={imageHint}
              width={
                Number.isNaN(Number(imageWidth))
                  ? undefined
                  : Number(imageWidth)
              }
              height={
                Number.isNaN(Number(imageHeight))
                  ? undefined
                  : Number(imageHeight)
              }
            />
          )}
        </div>
      </div>
    </div>
    <Footer authorInfo={authorInfo} />
  </div>
);

const ImageDemoPage1: Page = () => (
  <ContentWithImgLayout
    eyebrow="Demo 1: Default Size"
    title="Standard 1:1 Layout"
  >
    <p style={{ fontSize: 32, color: "#555", lineHeight: 1.5 }}>
      This uses the default 1:1 layout ratio and the standard 800x500 image
      placeholder. Perfect for balanced content.
    </p>
  </ContentWithImgLayout>
);

const ImageDemoPage2: Page = () => (
  <ContentWithImgLayout
    eyebrow="Demo 2: Custom Ratio"
    title="More Text, Smaller Image"
    textFlex={2} // 文字區塊佔 2 份寬度
    imgFlex={1} // 圖片區塊佔 1 份寬度
    imageWidth={400} // 調整 Placeholder 寬度
    imageHeight={400} // 調整 Placeholder 高度
    imageHint="Drop a square image here"
  >
    <p style={{ fontSize: 32, color: "#555", lineHeight: 1.5 }}>
      By adjusting the <code>textFlex</code> and <code>imgFlex</code> props, we
      can give more breathing room to the text.
    </p>
    <ul style={{ fontSize: 28, color: "#555", lineHeight: 1.8 }}>
      <li>textFlex={2}</li>
      <li>imgFlex={1}</li>
      <li>ImagePlaceholder shrinks to 400x400</li>
    </ul>
  </ContentWithImgLayout>
);

const ImageDemoPage3: Page = () => (
  <ContentWithImgLayout
    eyebrow="Demo 3: Real Image"
    title="Using a Real Image Tag"
    imageNode={
      <img
        src="https://placehold.net/600x800.png"
        alt="Example"
        style={{
          width: "100%",
          maxWidth: 500,
          borderRadius: 16,
          objectFit: "cover",
        }}
      />
    }
  >
    <p style={{ fontSize: 32, color: "#555", lineHeight: 1.5 }}>
      Instead of a placeholder, you can pass an actual <code>&lt;img&gt;</code>{" "}
      component via the <code>imageNode</code> prop. You can style it exactly
      how you want.
    </p>
  </ContentWithImgLayout>
);

interface ContentLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  children: ReactNode;
  authorInfo?: string;
}
const ContentLayout = ({
  eyebrow,
  title,
  children,
  authorInfo = "Machine Learning Intro",
}: ContentLayoutProps) => (
  <div style={fill}>
    <div
      style={{
        padding: "120px 140px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ===== Header ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          marginBottom: 60,
        }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 1500,
          }}
        >
          {title}
        </h1>
      </div>

      {/* ===== Contents ===== */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 40,
          maxWidth: 1400,
        }}
      >
        {children}
      </div>
    </div>
    <Footer authorInfo={authorInfo} />
  </div>
);

const MLIntroPage: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Fundamentals"
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
      on data, without being explicitly programmed for the task.
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
  </ContentLayout>
);

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

export const meta: SlideMeta = {
  title: "Machine Learning Intro",
  theme: "academic",
};
export default [
  Cover,
  Toc,
  MLIntroPage,
  NeuralNetworkPage,
  ImageDemoPage1,
  ImageDemoPage2,
  ImageDemoPage3,
] satisfies Page[];
