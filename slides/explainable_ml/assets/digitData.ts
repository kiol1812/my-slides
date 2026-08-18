export type DigitKind = "2" | "3" | "7" | "8";

export type CellGrid = number[][];

export const GRID_SIZE = 28;

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

const createGrid = (fill = 0): CellGrid =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => fill),
  );

const lerp = (start: number, end: number, t: number) =>
  start + (end - start) * t;

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp01((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

const distance = (x: number, y: number, cx: number, cy: number) =>
  Math.hypot(x - cx, y - cy);

const pointSegmentDistance = (
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
) => {
  const vx = bx - ax;
  const vy = by - ay;
  const wx = px - ax;
  const wy = py - ay;
  const lengthSquared = vx * vx + vy * vy;
  const ratio =
    lengthSquared === 0 ? 0 : clamp01((wx * vx + wy * vy) / lengthSquared);
  const projectionX = ax + ratio * vx;
  const projectionY = ay + ratio * vy;
  return Math.hypot(px - projectionX, py - projectionY);
};

const circleStroke = (
  x: number,
  y: number,
  cx: number,
  cy: number,
  radius: number,
  thickness: number,
) => {
  const shellDistance = Math.abs(distance(x, y, cx, cy) - radius);
  return Math.exp(-(shellDistance * shellDistance) / (2 * thickness * thickness));
};

const lineStroke = (
  x: number,
  y: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
  thickness: number,
) => {
  const shellDistance = pointSegmentDistance(x, y, ax, ay, bx, by);
  return Math.exp(-(shellDistance * shellDistance) / (2 * thickness * thickness));
};

const arcStroke = (
  x: number,
  y: number,
  cx: number,
  cy: number,
  radius: number,
  thickness: number,
  startAngle: number,
  endAngle: number,
) => {
  const dx = x - cx;
  const dy = y - cy;
  const currentAngle = Math.atan2(dy, dx);
  const normalizedStart = startAngle < 0 ? startAngle + Math.PI * 2 : startAngle;
  const normalizedEnd = endAngle < 0 ? endAngle + Math.PI * 2 : endAngle;
  const normalizedAngle = currentAngle < 0 ? currentAngle + Math.PI * 2 : currentAngle;
  const inRange =
    normalizedStart <= normalizedEnd
      ? normalizedAngle >= normalizedStart && normalizedAngle <= normalizedEnd
      : normalizedAngle >= normalizedStart || normalizedAngle <= normalizedEnd;
  if (!inRange) {
    return 0;
  }
  const shellDistance = Math.abs(distance(x, y, cx, cy) - radius);
  return Math.exp(-(shellDistance * shellDistance) / (2 * thickness * thickness));
};

const seededNoise = (row: number, column: number, seed: number) => {
  const value = Math.sin((row + 1) * 12.9898 + (column + 1) * 78.233 + seed * 19.19) * 43758.5453;
  return value - Math.floor(value);
};

export const createDigitGrid = (
  kind: DigitKind,
  options?: {
    shiftX?: number;
    shiftY?: number;
    scale?: number;
    thickness?: number;
    noise?: number;
    seed?: number;
    invert?: boolean;
  },
): CellGrid => {
  const {
    shiftX = 0,
    shiftY = 0,
    scale = 1,
    thickness = 0.045,
    noise = 0,
    seed = 0,
    invert = false,
  } = options ?? {};

  const grid = createGrid();

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let column = 0; column < GRID_SIZE; column += 1) {
      const x = lerp(0.08, 0.92, (column + 0.5) / GRID_SIZE) - shiftX;
      const y = lerp(0.08, 0.92, (row + 0.5) / GRID_SIZE) - shiftY;
      const centeredX = (x - 0.5) / scale + 0.5;
      const centeredY = (y - 0.5) / scale + 0.5;

      let value = 0;

      if (kind === "8") {
        const upperLoop = circleStroke(centeredX, centeredY, 0.5, 0.33, 0.16, thickness);
        const lowerLoop = circleStroke(centeredX, centeredY, 0.5, 0.67, 0.17, thickness);
        const middleLink = lineStroke(centeredX, centeredY, 0.42, 0.47, 0.58, 0.53, thickness * 0.85);
        const waist = 1 - smoothstep(0.0, 0.14, Math.abs(centeredY - 0.5));
        value = Math.max(upperLoop, lowerLoop, middleLink * 0.72) * (0.88 - 0.25 * waist);
      }

      if (kind === "3") {
        const upperArc = arcStroke(centeredX, centeredY, 0.52, 0.36, 0.14, thickness, 4.65, 1.0);
        const lowerArc = arcStroke(centeredX, centeredY, 0.52, 0.66, 0.14, thickness, 5.05, 0.65);
        const spine = lineStroke(centeredX, centeredY, 0.38, 0.27, 0.58, 0.73, thickness * 0.85);
        value = Math.max(upperArc, lowerArc, spine * 0.58);
      }

      if (kind === "7") {
        const bar = lineStroke(centeredX, centeredY, 0.2, 0.24, 0.77, 0.24, thickness * 0.75);
        const diagonal = lineStroke(centeredX, centeredY, 0.75, 0.26, 0.36, 0.82, thickness * 0.78);
        const leg = lineStroke(centeredX, centeredY, 0.48, 0.56, 0.34, 0.86, thickness * 0.6);
        value = Math.max(bar, diagonal, leg * 0.58);
      }

      if (kind === "2") {
        const upperArc = arcStroke(centeredX, centeredY, 0.49, 0.33, 0.15, thickness, 3.8, 0.9);
        const diagonal = lineStroke(centeredX, centeredY, 0.66, 0.47, 0.35, 0.78, thickness * 0.78);
        const bottomBar = lineStroke(centeredX, centeredY, 0.26, 0.79, 0.76, 0.79, thickness * 0.72);
        value = Math.max(upperArc, diagonal, bottomBar);
      }

      const irregularity = (seededNoise(row, column, seed) - 0.5) * noise;
      const shaped = clamp01(value + irregularity + (seededNoise(column, row, seed + 11) - 0.5) * noise * 0.5);
      grid[row][column] = invert ? clamp01(1 - shaped) : shaped;
    }
  }

  return grid;
};

export const normalizeGrid = (grid: CellGrid) => {
  const maximum = Math.max(...grid.flat());
  const minimum = Math.min(...grid.flat());
  const span = maximum - minimum || 1;
  return grid.map((row) => row.map((value) => (value - minimum) / span));
};

export const blurGrid = (grid: CellGrid, radius = 1) => {
  const output = createGrid();

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let column = 0; column < GRID_SIZE; column += 1) {
      let total = 0;
      let count = 0;

      for (let offsetRow = -radius; offsetRow <= radius; offsetRow += 1) {
        for (let offsetColumn = -radius; offsetColumn <= radius; offsetColumn += 1) {
          const sampleRow = row + offsetRow;
          const sampleColumn = column + offsetColumn;
          if (sampleRow < 0 || sampleRow >= GRID_SIZE || sampleColumn < 0 || sampleColumn >= GRID_SIZE) {
            continue;
          }
          total += grid[sampleRow][sampleColumn];
          count += 1;
        }
      }

      output[row][column] = total / Math.max(1, count);
    }
  }

  return output;
};

export const addNoise = (grid: CellGrid, amount: number, seed = 0) =>
  grid.map((row, rowIndex) =>
    row.map((value, columnIndex) =>
      clamp01(value + (seededNoise(rowIndex, columnIndex, seed) - 0.5) * amount),
    ),
  );

export const maskGrid = (
  grid: CellGrid,
  centerColumn: number,
  centerRow: number,
  size: number,
  strength = 0.15,
) =>
  grid.map((row, rowIndex) =>
    row.map((value, columnIndex) => {
      const distanceX = Math.abs(columnIndex - centerColumn);
      const distanceY = Math.abs(rowIndex - centerRow);
      if (distanceX > size || distanceY > size) {
        return value;
      }
      const falloff = 1 - Math.max(distanceX, distanceY) / Math.max(1, size);
      return clamp01(value * (1 - strength * falloff));
    }),
  );

export const emphasizeEdges = (grid: CellGrid) => {
  const output = createGrid();

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let column = 0; column < GRID_SIZE; column += 1) {
      const current = grid[row][column];
      const right = grid[row][Math.min(GRID_SIZE - 1, column + 1)];
      const down = grid[Math.min(GRID_SIZE - 1, row + 1)][column];
      const edge = Math.abs(current - right) + Math.abs(current - down);
      output[row][column] = clamp01(edge * 1.35);
    }
  }

  return normalizeGrid(output);
};

export const heatmapGrid = (grid: CellGrid, power = 1.5) =>
  normalizeGrid(grid).map((row) => row.map((value) => clamp01(Math.pow(value, power))));

export const interpolateGrids = (
  startGrid: CellGrid,
  endGrid: CellGrid,
  ratio: number,
) =>
  startGrid.map((row, rowIndex) =>
    row.map((value, columnIndex) =>
      lerp(value, endGrid[rowIndex][columnIndex], clamp01(ratio)),
    ),
  );

export const averageGrids = (grids: CellGrid[]) => {
  const output = createGrid();
  if (grids.length === 0) {
    return output;
  }

  grids.forEach((grid) => {
    grid.forEach((row, rowIndex) => {
      row.forEach((value, columnIndex) => {
        output[rowIndex][columnIndex] += value;
      });
    });
  });

  return output.map((row) => row.map((value) => value / grids.length));
};

export const createSaliencyBase = (kind: DigitKind) => {
  const base = createDigitGrid(kind, { noise: 0.02, seed: 8 });
  return emphasizeEdges(base);
};

export const createDigitsForComparison = () => ({
  reference: createDigitGrid("8", { noise: 0.03, seed: 1 }),
  alternate: createDigitGrid("3", { noise: 0.03, seed: 2 }),
  prototype: createDigitGrid("7", { noise: 0.03, seed: 3 }),
});
