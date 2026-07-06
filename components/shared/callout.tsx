import React, { ReactNode } from "react";

interface CalloutProps {
  type?: "info" | "warning" | "insight";
  title?: string;
  children: ReactNode;
}

export const Callout = ({ type = "info", title, children }: CalloutProps) => {
  const colors = {
    info: { border: "#7c9fa8", bg: "#f0f4f5" },
    warning: { border: "#e5a93d", bg: "#fdf8ef" },
    insight: { border: "#2ca089", bg: "#eef8f6" },
  };
  const theme = colors[type];

  return (
    <div
      style={{
        borderLeft: `8px solid ${theme.border}`,
        backgroundColor: theme.bg,
        padding: "24px 32px",
        borderRadius: "0 12px 12px 0",
        margin: "24px 0",
      }}
    >
      {title && (
        <h4 style={{ margin: "0 0 12px 0", color: "#0a2f41", fontSize: 28 }}>
          {title}
        </h4>
      )}
      <div style={{ fontSize: 26, color: "#444", lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
};
