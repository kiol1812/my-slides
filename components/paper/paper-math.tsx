import React, { CSSProperties } from "react";
// @ts-ignore
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

import { paperTheme } from "./paper-theme";

/* =========================================================================
 * Math — no forced padding/background/margin by default.
 * Spacing is left entirely to whatever layout the component is placed in
 * (e.g. the `gap` on BulletLayout / SlideShell). Opt into a boxed look with
 * `variant="panel"`, which reuses the theme's own panel color instead of a
 * hardcoded one.
 * ========================================================================= */

export interface MathInlineProps {
  math: string;
  /** Font size in px. Defaults to inherit from surrounding text. */
  size?: number;
}

export const MathInline = ({ math, size }: MathInlineProps) => (
  <span style={{ color: "inherit", fontSize: size, padding: "0 2px" }}>
    <InlineMath math={math} />
  </span>
);

export interface MathBlockProps {
  math: string;
  /**
   * "plain" (default): no padding/background/margin — inherits the parent
   * layout's spacing and color, so it drops into any *Layout unchanged.
   * "panel": boxed look using the theme's panel color, for when you do
   * want the formula visually set apart.
   */
  variant?: "plain" | "panel";
  /** Font size in px for the rendered formula. */
  size?: number;
  align?: "center" | "left";
  style?: CSSProperties;
}

export const MathBlock = ({
  math,
  variant = "plain",
  size = 40,
  align = "center",
  style,
}: MathBlockProps) => (
  <div
    className="ac-fadeIn"
    style={{
      display: "flex",
      justifyContent: align === "center" ? "center" : "flex-start",
      alignItems: "center",
      width: "100%",
      boxSizing: "border-box",
      fontSize: size,
      color: "inherit",
      ...(variant === "panel"
        ? {
            background: paperTheme.color.panel,
            borderRadius: 12,
            padding: "28px 40px",
          }
        : {}),
      ...style,
    }}
  >
    <BlockMath math={math} />
  </div>
);
