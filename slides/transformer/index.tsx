import { type Page } from "@open-slide/core";
import { type SlideMeta } from "@open-slide/core";

import { Cover } from "../../components/academic/cover";
import { createTocSlide } from "../../components/academic/toc";

import { sectionData } from "./meta";
import { section1Slides } from "./sections/section1";
export const meta: SlideMeta = {
  title: "Transformer",
  theme: "academic",
};
export default [
  Cover({ title: "Transformer", date: "2026/07/29" }),
  createTocSlide(sectionData),
  ...section1Slides,
] satisfies Page[];
