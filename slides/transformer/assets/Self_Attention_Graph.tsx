import { Position, type Node, type Edge } from "@xyflow/react";

// 自動計算連線相對位置，決定應該從哪一面出入
const getSide = (dx: number, dy: number): Position => {
  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? Position.Right : Position.Left;
  } else {
    return dy > 0 ? Position.Bottom : Position.Top;
  }
};

const generateGraphFlow = () => {
  const generatedNodes = new Set<string>();
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // 原始節點坐標
  const nodePositions: Record<string, { x: number; y: number }> = {
    "1": { x: 180, y: 50 },
    "2": { x: 330, y: 50 },
    "3": { x: 400, y: 150 },
    "4": { x: 380, y: 300 },
    "5": { x: 280, y: 350 },
    "6": { x: 150, y: 350 },
    "7": { x: 80, y: 250 },
    "8": { x: 80, y: 130 },
  };

  const edgeDefinitions = [
    { s: "1", t: "8", color: "#ff9900" },
    { s: "1", t: "6", color: "#ffcc00" },
    { s: "1", t: "5", color: "#669933" },
    { s: "2", t: "3", color: "#999999" },
    { s: "3", t: "4", color: "#000" },
    { s: "3", t: "5", color: "#000" },
    { s: "3", t: "6", color: "#000" },
    { s: "4", t: "5", color: "#000" },
    { s: "6", t: "7", color: "#000" },
    { s: "7", t: "8", color: "#000" },
  ];

  // 動態建立節點：若同個節點需要不同的出入點，會建立多個在同位置重疊的節點
  const addNodeIfNeeded = (baseId: string, side: Position) => {
    const id = `${baseId}-${side}`;
    if (!generatedNodes.has(id)) {
      generatedNodes.add(id);
      nodes.push({
        id: id,
        type: "custom",
        position: { x: nodePositions[baseId].x, y: nodePositions[baseId].y },
        data: {
          label: (
            <span
              style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
            >
              {baseId}
            </span>
          ),
          sourcePosition: side,
          targetPosition: side,
          width: "50px",
          erase_bg: true,
        },
        style: {
          backgroundColor: "#000",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          position: "absolute",
        },
      });
    }
    return id;
  };

  edgeDefinitions.forEach(({ s, t, color }) => {
    const dx = nodePositions[t].x - nodePositions[s].x;
    const dy = nodePositions[t].y - nodePositions[s].y;

    const srcPos = getSide(dx, dy);
    const tgtPos = getSide(-dx, -dy);

    const sId = addNodeIfNeeded(s, srcPos);
    const tId = addNodeIfNeeded(t, tgtPos);

    edges.push({
      id: `e${sId}-${tId}`,
      source: sId,
      target: tId,
      style: { stroke: color, strokeWidth: 3 },
    });
  });

  return { nodes, edges };
};

export const {
  nodes: self_attention_graph_nodes,
  edges: self_attention_graph_edges,
} = generateGraphFlow();
