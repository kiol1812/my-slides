import { MathInline } from "../../../components/shared/math";
import { Position, MarkerType } from "@xyflow/react";

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
export const chain_nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta x" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 150, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta y" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 300, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta z" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 0, y: 200 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta s" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 150, y: 150 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta x" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: 150, y: 250 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta y" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "7",
    type: "custom",
    position: { x: 300, y: 200 },
    data: {
      label: (
        <span>
          <MathInline math="\Delta z" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
];

// 定義連線 (帶有動畫的箭頭)
export const chain_edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "straight",
    animated: true,
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "straight",
    animated: true,
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "straight",
    animated: true,
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type: "straight",
    animated: true,
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e5-7",
    source: "5",
    target: "7",
    type: "straight",
    animated: true,
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "straight",
    animated: true,
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
];
