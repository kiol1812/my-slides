import { type Page } from "@open-slide/core";
import { type SlideMeta } from "@open-slide/core";

import { Cover } from "../../components/academic/cover";
import { createTocSlide } from "../../components/academic/toc";

import { sectionData } from "./meta";
import { section1Slides } from "./sections/section1";
import { section2Slides } from "./sections/section2";

export const meta: SlideMeta = {
  title: "Machine Learning Intro",
  theme: "academic",
};
export default [
  Cover,
  createTocSlide(sectionData),
  ...section1Slides,
  ...section2Slides,
] satisfies Page[];
