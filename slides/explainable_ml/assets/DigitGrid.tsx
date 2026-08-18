import React from "react";

import { type CellGrid, GRID_SIZE } from "./digitData";

interface DigitGridProps {
  grid: CellGrid;
  width?: number;
  height?: number;
  accent?: string;
  label?: string;
  subtitle?: string;
  frameColor?: string;
  background?: string;
  tone?: "dark" | "light";
}

const colorFromValue = (
  value: number,
  accent: string,
  tone: "dark" | "light",
) => {
  const opacity = Math.max(0, Math.min(1, value));
  if (tone === "dark") {
    return `rgba(255, 255, 255, ${0.04 + opacity * 0.9})`;
  }
  return `color-mix(in srgb, ${accent} ${18 + opacity * 72}%, white)`;
};

export default function DigitGrid({
  grid,
  width = 336,
  height,
  accent = "#4f83d1",
  label,
  subtitle,
  frameColor = "rgba(10, 47, 65, 0.1)",
  background = "rgba(255, 255, 255, 0.78)",
  tone = "light",
}: DigitGridProps) {
  const cellSize = width / GRID_SIZE;
  const finalHeight = height ?? width;

  return (
    <div
      style={{
        width,
        height: finalHeight,
        borderRadius: 28,
        padding: 18,
        background,
        border: `1px solid ${frameColor}`,
        boxShadow: "0 20px 50px rgba(10, 47, 65, 0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxSizing: "border-box",
      }}
    >
      {(label || subtitle) && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {label && (
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: tone === "dark" ? "white" : "#0a2f41",
              }}
            >
              {label}
            </div>
          )}
          {subtitle && (
            <div
              style={{
                fontSize: 16,
                color: tone === "dark" ? "rgba(255,255,255,0.72)" : "#5e6b78",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      )}

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
          overflow: "hidden",
          borderRadius: 20,
          background:
            tone === "dark"
              ? "rgba(8, 18, 30, 0.66)"
              : "rgba(240, 245, 251, 0.72)",
        }}
      >
        {grid.flatMap((row, rowIndex) =>
          row.map((value, columnIndex) => (
            <div
              key={`${rowIndex}-${columnIndex}`}
              style={{
                width: cellSize,
                height: cellSize,
                background: colorFromValue(value, accent, tone),
                border: `1px solid ${
                  tone === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.4)"
                }`,
                boxSizing: "border-box",
              }}
            />
          )),
        )}
      </div>
    </div>
  );
}
