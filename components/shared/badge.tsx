import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => (
  <span
    style={{
      display: "inline-block",
      padding: "6px 16px",
      borderRadius: 999, // 膠囊形狀
      backgroundColor: "#0a2f41",
      color: "#ffffff",
      fontSize: 18,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      verticalAlign: "middle",
      marginLeft: 16,
    }}
  >
    {children}
  </span>
);
