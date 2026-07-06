import React from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
} from "@xyflow/react";
// @ts-ignore
import "@xyflow/react/dist/style.css";
import { CustomNode } from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

interface FlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
}

export const FlowDiagram = ({ nodes, edges }: FlowDiagramProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView // 自動縮放以顯示所有節點
        panOnDrag={false} // 簡報中建議關閉拖曳
        zoomOnScroll={false} // 簡報中建議關閉滾輪縮放
        nodesDraggable={false} // 簡報中禁止拖動節點
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={2}
          color="#ddd"
        />
      </ReactFlow>
    </div>
  );
};
