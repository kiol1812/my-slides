import { MathInline } from "../../../components/shared/math";
import { Position, MarkerType } from "@xyflow/react";

const line1_y = 40;
const line2_y = 190;
const line3_y = 340;

const col1_x = 625;
const col2_x = 750;
const col3_x = 850;

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
export const vector_output_nodes = [
  {
    id: "0-1",
    type: "custom",
    position: { x: 0, y: line1_y },
    data: {
      label: <span>Each vector has a label.</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "350px",
    },
  },
  {
    id: "0-2",
    type: "custom",
    position: { x: 0, y: line2_y },
    data: {
      label: <span>The whole sequence has a label.</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "350px",
    },
  },
  {
    id: "0-3",
    type: "custom",
    position: { x: 0, y: line3_y },
    data: {
      label: <span>Model decides the number of labels itself. (Seq2Seq)</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "350px",
    },
  },
  {
    id: "1",
    type: "custom",
    position: { x: col1_x, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "1-2",
    type: "custom",
    position: { x: col1_x - 75, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "1-3",
    type: "custom",
    position: { x: col1_x - 150, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "1-4",
    type: "custom",
    position: { x: col1_x - 225, y: line1_y },
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
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "3-2",
    type: "custom",
    position: { x: col3_x + 75, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "3-3",
    type: "custom",
    position: { x: col3_x + 150, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "3-4",
    type: "custom",
    position: { x: col3_x + 225, y: line1_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: col1_x, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4-2",
    type: "custom",
    position: { x: col1_x - 75, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4-3",
    type: "custom",
    position: { x: col1_x - 150, y: line2_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "4-4",
    type: "custom",
    position: { x: col1_x - 225, y: line2_y },
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
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "7",
    type: "custom",
    position: { x: col1_x, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "7-2",
    type: "custom",
    position: { x: col1_x - 75, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "7-3",
    type: "custom",
    position: { x: col1_x - 150, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "7-4",
    type: "custom",
    position: { x: col1_x - 225, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "8",
    type: "custom",
    position: { x: col2_x, y: line3_y },
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
    id: "9",
    type: "custom",
    position: { x: col3_x, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "9-2",
    type: "custom",
    position: { x: col3_x + 75, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
  {
    id: "9-3",
    type: "custom",
    position: { x: col3_x + 150, y: line3_y },
    data: {
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "20px",
    },
  },
];

// 定義連線 (帶有動畫的箭頭)
export const vector_output_edges = [
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
  {
    id: "e7-8",
    source: "7",
    target: "8",
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
    id: "e8-9",
    source: "8",
    target: "9",
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
