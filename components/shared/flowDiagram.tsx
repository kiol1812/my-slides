import React, { useEffect } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useReactFlow,
  useStore,
  getNodesBounds,
  getViewportForBounds,
  useUpdateNodeInternals,
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

function TopLeftAutoZoom() {
  const { setViewport, getNodes } = useReactFlow();
  const width = useStore((s) => s.width);
  const height = useStore((s) => s.height);

  useEffect(() => {
    const nodes = getNodes();
    if (!nodes.length || !width || !height) return;

    const bounds = getNodesBounds(nodes);
    // nodes bounds, board width, board height, minimum zoom, maximum zoom, padding
    const { zoom } = getViewportForBounds(bounds, width, height, 0.1, 2, 0.1);
    setViewport({ x: 0, y: 0, zoom: zoom * 0.85 });
  }, [width, height, getNodes, setViewport]);

  return null;
}

export const FlowDiagram = ({ nodes, edges }: FlowDiagramProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        // fitView // 自動縮放以顯示所有節點
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
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
        <TopLeftAutoZoom />
      </ReactFlow>
    </div>
  );
};
