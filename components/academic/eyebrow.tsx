import React from "react";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
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
