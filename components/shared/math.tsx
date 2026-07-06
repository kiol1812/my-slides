import React from "react";
// @ts-ignore
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

interface MathProps {
  math: string; // LaTeX 公式字串
}

export const MathInline = ({ math }: MathProps) => (
  <span style={{ color: "#0a2f41", padding: "0 6px" }}>
    <InlineMath math={math} />
  </span>
);

export const MathBlock = ({ math }: MathProps) => (
  <div
    className="ac-fadeIn"
    style={{
      background: "#f8f9fa", // 淺灰底色
      padding: "40px", // 寬敞的內距
      borderRadius: "16px", // 圓角
      display: "flex",
      justifyContent: "center", // 居中對齊
      alignItems: "center",
      fontSize: "48px", // 針對簡報放大的字體
      color: "#0a2f41", // 主色調
      boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
      margin: "20px 0",
    }}
  >
    <BlockMath math={math} />
  </div>
);
