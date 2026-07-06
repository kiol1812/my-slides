import React, { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  color?: string;
}

export const Highlight = ({ children, color = "#ffeb3b" }: HighlightProps) => (
  <span
    style={{
      background: `linear-gradient(120deg, ${color} 0%, ${color} 100%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 40%",
      backgroundPosition: "0 88%",
      fontWeight: 600,
      color: "#0a2f41",
      padding: "0 4px",
    }}
  >
    {children}
  </span>
);
