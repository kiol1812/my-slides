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

export const section2Slides: Page[] = [createSectionSlide(1, sectionData)];
