// ==========================================
// Flow Diagram Definitions
// ==========================================
//
import { Position, MarkerType, type Node, type Edge } from "@xyflow/react";

export const createArrowEdge = (
  source: string,
  target: string,
  color: string = "#7c9fa8",
) => ({
  id: `e${source}-${target}`,
  source,
  target,
  animated: true,
  style: { stroke: color, strokeWidth: 3 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color,
  },
});

// 1. Basic GAN Architecture Flow
export const basic_gan_nodes: Node[] = [
  {
    id: "x",
    type: "custom",
    position: { x: 50, y: 50 },
    data: {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>x</span>
        </div>
      ),
      sourcePosition: Position.Right,
      width: "240px",
      height: "90px",
    },
  },
  {
    id: "z",
    type: "custom",
    position: { x: 50, y: 150 },
    data: {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Simple Distribution</span>
          <span style={{ fontSize: 16, color: "#777" }}>(Noise z)</span>
        </div>
      ),
      sourcePosition: Position.Right,
      width: "240px",
      height: "90px",
    },
  },
  {
    id: "g",
    type: "custom",
    position: { x: 400, y: 150 },
    data: {
      label: <span>Generator (Network)</span>,
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "280px",
      height: "90px",
    },
  },
  {
    id: "y",
    type: "custom",
    position: { x: 800, y: 150 },
    data: {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Complex Distribution</span>
          <span style={{ fontSize: 16, color: "#777" }}>(Generated y)</span>
        </div>
      ),
      targetPosition: Position.Left,
      width: "260px",
      height: "90px",
    },
  },
];
export const basic_gan_edges: Edge[] = [
  createArrowEdge("x", "g"),
  createArrowEdge("z", "g"),
  createArrowEdge("g", "y"),
];

// 2. Discriminator Flow
export const discriminator_nodes: Node[] = [
  {
    id: "real",
    type: "custom",
    position: { x: 100, y: 50 },
    data: {
      label: <span>Real Image</span>,
      sourcePosition: Position.Right,
      width: "200px",
    },
  },
  {
    id: "d1",
    type: "custom",
    position: { x: 400, y: 50 },
    data: {
      label: <span>Discriminator</span>,
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "240px",
    },
  },
  {
    id: "out1",
    type: "custom",
    position: { x: 750, y: 50 },
    data: {
      label: <span>1.0 (Real)</span>,
      targetPosition: Position.Left,
      width: "160px",
      erase_bg: true,
    },
  },
  {
    id: "fake",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      label: <span>Fake Image</span>,
      sourcePosition: Position.Right,
      width: "200px",
    },
  },
  {
    id: "d2",
    type: "custom",
    position: { x: 400, y: 200 },
    data: {
      label: <span>Discriminator</span>,
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "240px",
    },
  },
  {
    id: "out2",
    type: "custom",
    position: { x: 750, y: 200 },
    data: {
      label: <span>0.1 (Fake)</span>,
      targetPosition: Position.Left,
      width: "160px",
      erase_bg: true,
    },
  },
];
export const discriminator_edges: Edge[] = [
  createArrowEdge("real", "d1"),
  createArrowEdge("d1", "out1", "#2ca089"),
  createArrowEdge("fake", "d2"),
  createArrowEdge("d2", "out2", "#e5a93d"),
];

// 3. Training Step 1 Flow (Update D)
export const train1_nodes: Node[] = [
  {
    id: "db",
    type: "custom",
    position: { x: 50, y: 50 },
    data: {
      label: <span>Database</span>,
      sourcePosition: Position.Right,
      width: "150px",
    },
  },
  {
    id: "real",
    type: "custom",
    position: { x: 280, y: 50 },
    data: {
      label: <span>Real Objects</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "180px",
      erase_bg: true,
    },
  },
  {
    id: "d1",
    type: "custom",
    position: { x: 550, y: 50 },
    data: {
      label: <span>Discriminator (Update)</span>,
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "280px",
    },
  },
  {
    id: "out1",
    type: "custom",
    position: { x: 920, y: 50 },
    data: {
      label: <span>Target: 1</span>,
      targetPosition: Position.Left,
      width: "140px",
      erase_bg: true,
    },
  },

  {
    id: "z",
    type: "custom",
    position: { x: 50, y: 200 },
    data: {
      label: <span>Noise (z)</span>,
      sourcePosition: Position.Right,
      width: "150px",
    },
  },
  {
    id: "g",
    type: "custom",
    position: { x: 280, y: 200 },
    data: {
      label: <span>Generator (Fix)</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "180px",
      erase_bg: true,
    },
  },
  {
    id: "fake",
    type: "custom",
    position: { x: 550, y: 200 },
    data: {
      label: <span>Generated Objects</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "220px",
    },
  },
  {
    id: "d2",
    type: "custom",
    position: { x: 850, y: 200 },
    data: {
      label: <span>Discriminator (Update)</span>,
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "280px",
    },
  },
  {
    id: "out2",
    type: "custom",
    position: { x: 1220, y: 200 },
    data: {
      label: <span>Target: 0</span>,
      targetPosition: Position.Left,
      width: "140px",
      erase_bg: true,
    },
  },
];
export const train1_edges: Edge[] = [
  createArrowEdge("db", "real"),
  createArrowEdge("real", "d1"),
  createArrowEdge("d1", "out1"),
  createArrowEdge("z", "g"),
  createArrowEdge("g", "fake"),
  createArrowEdge("fake", "d2"),
  createArrowEdge("d2", "out2"),
];

// 4. Training Step 2 Flow (Update G)
export const train2_nodes: Node[] = [
  {
    id: "z",
    type: "custom",
    position: { x: 50, y: 150 },
    data: {
      label: <span>Noise (z)</span>,
      sourcePosition: Position.Right,
      width: "160px",
    },
  },
  {
    id: "g",
    type: "custom",
    position: { x: 280, y: 150 },
    data: {
      label: <span>Generator (Update)</span>,
      highlight: true,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "260px",
    },
  },
  {
    id: "fake",
    type: "custom",
    position: { x: 620, y: 150 },
    data: {
      label: <span>Generated Objects</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "220px",
    },
  },
  {
    id: "d",
    type: "custom",
    position: { x: 920, y: 150 },
    data: {
      label: <span>Discriminator (Fix)</span>,
      targetPosition: Position.Left,
      sourcePosition: Position.Right,
      width: "260px",
      erase_bg: true,
    },
  },
  {
    id: "out",
    type: "custom",
    position: { x: 1260, y: 150 },
    data: {
      label: <span>Target: 1</span>,
      targetPosition: Position.Left,
      width: "140px",
      erase_bg: true,
    },
  },
];
export const train2_edges: Edge[] = [
  createArrowEdge("z", "g"),
  createArrowEdge("g", "fake"),
  createArrowEdge("fake", "d"),
  createArrowEdge("d", "out", "#e5a93d"),
];
