import React from "react";
import { Handle, Position } from "@xyflow/react";

export const CustomNode = ({ data }: { data: any }) => {
  return (
    <div
      style={{
        padding: "16px 24px",
        borderRadius: "12px",
        background: data.highlight ? "#0a2f41" : "#f8f9fa",
        color: data.highlight ? "#ffffff" : "#0a2f41",
        border: `2px solid ${data.highlight ? "#0a2f41" : "#7c9fa8"}`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontSize: "20px",
        fontWeight: 600,
        textAlign: "center",
        minWidth: "150px",
      }}
    >
      {/* 上方的連接點 */}
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#7c9fa8" }}
      />

      {/* 節點內容 (這裡可以直接渲染 React 元素！) */}
      {data.label}

      {/* 下方的連接點 */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#7c9fa8" }}
      />
    </div>
  );
};
