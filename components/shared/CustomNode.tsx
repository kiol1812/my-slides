import React from "react";
import { Handle, Position } from "@xyflow/react";

export const CustomNode = ({ id, data }: { id: string; data: any }) => {
  const targetPos = data.targetPosition || Position.Top;
  const sourcePos = data.sourcePosition || Position.Bottom;

  const width = data.width || "150px";
  const height = data.height || "72px";

  return (
    <div style={{ position: "relative" }}>
      {/* 上方的連接點 */}
      <Handle
        type="target"
        position={targetPos}
        style={{
          background: "#7c9fa8",
          top: data.top || "50%",
          left: data.left || "50%",
          opacity: 0,
        }}
      />

      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          width: width,
          height: height,
          boxSizing: "border-box",
          padding: "16px 24px",
          borderRadius: "12px",
          background: !data.erase_bg
            ? data.highlight
              ? "#0a2f41"
              : "#f8f9fa"
            : undefined,
          color: data.highlight ? "#ffffff" : "#0a2f41",
          border: !data.erase_border
            ? `2px solid ${data.highlight ? "#0a2f41" : "#7c9fa8"}`
            : undefined,
          boxShadow: data.erase_bg ? undefined : "0 4px 12px rgba(0,0,0,0.05)",
          fontSize: "20px",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {/* 節點內容 (這裡可以直接渲染 React 元素！) */}
        {data.label}
      </div>
      {/* 下方的連接點 */}
      <Handle
        type="source"
        position={sourcePos}
        style={{
          background: "#7c9fa8",
          top:
            targetPos == Position.Left || targetPos == Position.Right
              ? "75%"
              : "0%",
          opacity: 0,
        }}
      />
    </div>
  );
};
