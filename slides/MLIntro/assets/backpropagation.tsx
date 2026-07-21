import { MathInline } from "../../../components/shared/math";
import { Position, MarkerType } from "@xyflow/react";

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
export const bp_nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 30 },
    data: {
      label: (
        <span>
          <MathInline math="x^n" />
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
    position: { x: 150, y: 30 },
    data: {
      label: (
        <span>
          <MathInline math="\begin{matrix} NN \\ \theta \end{matrix}" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "2_o",
    type: "custom",
    position: { x: 300, y: 30 },
    data: {
      label: (
        <span>
          <MathInline math="\sigma{(z)}" />
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
    position: { x: 450, y: 30 },
    data: {
      label: (
        <span>
          <MathInline math="y^n" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Bottom,
      width: "80px",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 450, y: 210 },
    data: {
      label: (
        <span>
          <MathInline math="\hat{y}^n" />
        </span>
      ),
      targetPosition: Position.Top,
      sourcePosition: Position.Top,
      width: "80px",
    },
  },
];

// 定義連線 (帶有動畫的箭頭)
export const bp_edges = [
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
    id: "e2-2_o",
    source: "2",
    target: "2_o",
    type: "straight",
    animated: true,
    label: "z^n",
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
    id: "e2_o-3",
    source: "2_o",
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
    id: "e3-4",
    source: "3",
    target: "4",
    type: "straight",
    animated: true,
    label: "C^n",
    labelStyle: { fill: "#7c9fa8", fontWeight: 700, fontSize: "20px" },
    style: { stroke: "#7c9fa8", strokeWidth: 3 },
    markerStart: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#7c9fa8",
    },
  },
];

export const bp2_nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="x_1" />
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
    position: { x: 0, y: 100 },
    data: {
      label: (
        <span>
          <MathInline math="x_2" />
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
    position: { x: 150, y: 100 },
    data: {
      label: (
        <span>
          <MathInline math="b" />
        </span>
      ),
      targetPosition: Position.Top,
      sourcePosition: Position.Top,
      width: "80px",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 200, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="+" />
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
    position: { x: 350, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="\sigma" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "6_1",
    type: "custom",
    position: { x: 550, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="+" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "6_2",
    type: "custom",
    position: { x: 550, y: 100 },
    data: {
      label: (
        <span>
          <MathInline math="+" />
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
    position: { x: 700, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="\sigma" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "8",
    type: "custom",
    position: { x: 850, y: 0 },
    data: {
      label: (
        <span>
          <MathInline math="y_1" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "9",
    type: "custom",
    position: { x: 700, y: 100 },
    data: {
      label: (
        <span>
          <MathInline math="\sigma" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "10",
    type: "custom",
    position: { x: 850, y: 100 },
    data: {
      label: (
        <span>
          <MathInline math="y_2" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "80px",
    },
  },
  {
    id: "_",
    type: "custom",
    position: { x: 250, y: 125 },
    data: {
      label: (
        <span
          style={{
            fontSize: 28,
            color: "#0a2f41",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          <MathInline math="\frac{\partial C}{\partial w} = \frac{\partial z}{\partial w}\frac{\partial C}{\partial z}" />
        </span>
      ),
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "240px",
      height: "80px",
      erase_bg: true,
      erase_border: true,
    },
  },
];

export const bp2_edges = [
  {
    id: "e1-4",
    source: "1",
    target: "4",
    type: "straight",
    animated: true,
    label: "w_1",
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
    id: "e2-4",
    source: "2",
    target: "4",
    type: "straight",
    animated: true,
    label: "w_2",
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
    id: "e3-4",
    source: "3",
    target: "4",
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
    label: "z",
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
    id: "e5-6_1",
    source: "5",
    target: "6_1",
    type: "straight",
    animated: true,
    label: "a,w_3",
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
    id: "e5-6_2",
    source: "5",
    target: "6_2",
    type: "straight",
    animated: true,
    label: "w_4",
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
    id: "e6_1-7",
    source: "6_1",
    target: "7",
    type: "straight",
    animated: true,
    label: "z'",
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
    id: "e6_2-9",
    source: "6_2",
    target: "9",
    type: "straight",
    animated: true,
    label: "z''",
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
    id: "e7-8",
    source: "7",
    target: "8",
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
    id: "e9-10",
    source: "9",
    target: "10",
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
