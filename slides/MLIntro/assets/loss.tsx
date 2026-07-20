import { MathInline } from "../../../components/shared/math";
import { Position, MarkerType } from "@xyflow/react";

// 定義節點 (注意 data.label 裡面可以直接放 JSX / React 元件)
export const label_nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 100, y: 20 },
    data: {
      label: (
        <span>
          <MathInline math="y" />
        </span>
      ),
      targetPosition: Position.Bottom,
      sourcePosition: Position.Bottom,
      top: "0%",
      left: "100%",
      width: "50px",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 100, y: 220 },
    data: {
      label: (
        <span>
          <MathInline math="\hat{y}" />
        </span>
      ),
      targetPosition: Position.Top,
      sourcePosition: Position.Top,
      top: "0%",
      left: "100%",
      width: "50px",
    },
  },
];

// 定義連線 (帶有動畫的箭頭)
export const label_edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "straight",
    animated: true,
    label: "e",
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
