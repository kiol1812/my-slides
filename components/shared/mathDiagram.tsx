import React from "react";
import { Mafs, Coordinates, Plot, Line, Theme } from "mafs";

// @ts-ignore
import "mafs/core.css";
// @ts-ignore
import "mafs/font.css";

interface MathDiagramProps {
  children: React.ReactNode;
  viewBox?: { x: [number, number]; y: [number, number] };
  backgroundColor?: string;
  zoom?: { min: number; max: number };
}

export const MathDiagram = ({
  children,
  viewBox = { x: [-5, 5], y: [-5, 5] },
  backgroundColor = "#f8f9fa",
  zoom = { min: 0.5, max: 2 },
}: MathDiagramProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        backgroundColor: backgroundColor,
      }}
    >
      <Mafs viewBox={viewBox} zoom={zoom}>
        <Coordinates.Cartesian />
        {children}
      </Mafs>
    </div>
  );
};
