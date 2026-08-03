import { type Page, type SlideMeta } from "@open-slide/core";

import { Cover } from "../../components/academic/cover";
import { createTocSlide } from "../../components/academic/toc";

import { sectionData } from "./meta";
import { section1Slides } from "./sections/section1";
import { section2Slides } from "./sections/section2";
import { section3Slides } from "./sections/section3";
import { section4Slides } from "./sections/section4";
import { section5Slides } from "./sections/section5";
import { section6Slides } from "./sections/section6";
import { section7Slides } from "./sections/section7";

export const meta: SlideMeta = {
  title: "Self-Supervised Learning",
  theme: "academic",
};

export default [
  Cover({ title: "Self-Supervised Learning", date: "2026/08/03" }),
  createTocSlide(sectionData),
  ...section1Slides,
  ...section2Slides,
  ...section3Slides,
  ...section4Slides,
  ...section5Slides,
  ...section6Slides,
  ...section7Slides,
] satisfies Page[];