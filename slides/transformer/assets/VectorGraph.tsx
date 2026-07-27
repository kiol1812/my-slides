import { Position } from "@xyflow/react";

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
export const vector_graph_nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 35, y: 62 },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 212, y: 127 },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 124, y: 7 },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 371, y: 34 },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
];

// 定義連線
export const vector_graph_edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
  },
  {
    id: "e2-3",
    source: "3",
    target: "2",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
  },
];
