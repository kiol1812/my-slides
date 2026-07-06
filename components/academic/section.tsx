import { type Page } from "@open-slide/core";

import { ReactNode } from "react";

import { fill } from "./fill";
import { Eyebrow } from "./eyebrow";
import { Footer } from "./footer";

import { SectionItem } from "./toc";

interface SectionLayoutProps {
  sectionNumber: string | number;
  title: ReactNode;
  subtitle?: ReactNode;
  authorInfo?: string;
}

const SectionLayout = ({
  sectionNumber,
  title,
  subtitle,
  authorInfo = "Machine Learning Intro",
}: SectionLayoutProps) => {
  const formattedNumber =
    typeof sectionNumber === "number" && sectionNumber < 10
      ? `0${sectionNumber}`
      : sectionNumber;

  return (
    <div style={fill}>
      <div
        style={{
          padding: "120px 140px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          boxSizing: "border-box",
          gap: 80,
        }}
      >
        {/* Left: Number */}
        <div
          className="ac-fadeIn"
          style={{
            fontSize: 360,
            fontWeight: 900,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "6px #0a2f41",
            opacity: 0.15,
          }}
        >
          {formattedNumber}
        </div>

        {/* Mid: Line */}
        <div
          style={{
            width: "4px",
            height: "280px",
            backgroundColor: "#7c9fa8",
            opacity: 0.5,
          }}
        />

        {/* Right: Title and subtitle */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
        >
          <Eyebrow>Chapter {formattedNumber}</Eyebrow>

          <h1
            className="ac-fadeIn"
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#0a2f41",
              margin: 0,
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="ac-fadeIn"
              style={{
                fontSize: 36,
                color: "#6C757D",
                lineHeight: 1.5,
                margin: 0,
                marginTop: 16,
                fontWeight: 400,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <Footer authorInfo={authorInfo} />
    </div>
  );
};

export const createSectionSlide = (
  index: number,
  sectionData: SectionItem[],
): Page => {
  const data = sectionData[index];

  return () => (
    <SectionLayout
      sectionNumber={index + 1}
      title={data.title}
      subtitle={data.subtitle}
    />
  );
};
