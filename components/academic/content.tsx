import { ImagePlaceholder } from "@open-slide/core";

import { ReactNode } from "react";

import { fill } from "./fill";
import { Eyebrow } from "./eyebrow";
import { Footer } from "./footer";

export interface ContentWithImgLayoutProps {
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

  topContent?: ReactNode;
  bottomContent?: ReactNode;
}

export const ContentWithImgLayout = ({
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
  topContent,
  bottomContent,
}: ContentWithImgLayoutProps) => (
  <div style={fill}>
    <div
      style={{
        padding: "120px 0px 0px 140px",
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
            width: "100%",
            zIndex: 1,
          }}
        >
          {title}
        </h1>
      </div>

      {/* ===== Contents ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0, // 上下區塊與中間左右分欄的間距
          flex: 1,
        }}
      >
        {/* Top Content: 如果有傳入才渲染 */}
        {topContent && <div style={{ width: "100%" }}>{topContent}</div>}

        {/* Middle: 原本的左右分欄 */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 80,
            flex: 1, // 讓中間內容自動撐開剩餘空間
            alignItems: "stretch",
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
            style={{
              flex: imgFlex,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              position: "relative",
            }}
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

        {/* Bottom Content: 如果有傳入才渲染 */}
        {bottomContent && <div style={{ width: "100%" }}>{bottomContent}</div>}
      </div>
    </div>
    <Footer authorInfo={authorInfo} />
  </div>
);

export interface ContentLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  children: ReactNode;
  authorInfo?: string;
}
export const ContentLayout = ({
  eyebrow,
  title,
  children,
  authorInfo = "Machine Learning Intro",
}: ContentLayoutProps) => (
  <div style={fill}>
    <div
      style={{
        padding: "120px 0px 0px 140px",
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
            width: "100%",
            zIndex: 1,
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
        }}
      >
        {children}
      </div>
    </div>
    <Footer authorInfo={authorInfo} />
  </div>
);
