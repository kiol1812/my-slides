import React from "react";

interface CodeBlockProps {
  code: string;
  language?: string; // e.g. "python", "bash"
}

export const CodeBlock = ({ code, language = "python" }: CodeBlockProps) => (
  <div style={{ position: "relative", margin: "20px 0" }}>
    {language && (
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          background: "#7c9fa8",
          color: "white",
          padding: "4px 12px",
          fontSize: 16,
          borderBottomLeftRadius: 8,
          borderTopRightRadius: 12,
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {language}
      </div>
    )}
    <pre
      style={{
        background: "#0a2f41",
        color: "#f8f9fa",
        padding: "32px",
        borderRadius: 12,
        fontSize: 24,
        fontFamily: 'JetBrains Mono, "Fira Code", monospace',
        overflowX: "auto",
        lineHeight: 1.6,
        boxShadow: "0 8px 24px rgba(10, 47, 65, 0.15)",
      }}
    >
      <code>{code}</code>
    </pre>
  </div>
);
