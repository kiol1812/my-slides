import { MathInline } from "../../../components/shared/math";
import { Position, MarkerType } from "@xyflow/react";

const line1_y = 40;
const line2_y = 190;

const col2_x = 350;
const col3_x = 450;

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
export const vector_input_nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 225, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: col2_x, y: line1_y },
    data: {
      label: (
        <span>
          <MathInline math="f" />
        </span>
      ),
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "50px",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: col3_x, y: line1_y },
    data: {
      label: <span>Scalar or Classes</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      erase_bg: true,
      erase_border: true,
      width: "300px",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 225, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4-2",
    type: "custom",
    position: { x: 150, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4-3",
    type: "custom",
    position: { x: 75, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4-4",
    type: "custom",
    position: { x: 0, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: col2_x, y: line2_y },
    data: {
      label: (
        <span>
          <MathInline math="f" />
        </span>
      ),
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "50px",
    },
  },
  {
    id: "6",
    type: "custom",
    position: { x: col3_x, y: line2_y },
    data: {
      label: <span>Scalar or Classes</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      erase_bg: true,
      erase_border: true,
      width: "300px",
    },
  },
];

// 定義連線 (帶有動畫的箭頭)
export const vector_input_edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
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
    animated: true,
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
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
];
