"use client";

import React, { useState, useEffect } from "react";

export default function CycleGANVisualizer() {
  const [step, setStep] = useState(0);
  const totalSteps = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, 2000);
    return () => clearInterval(timer);
  }, [totalSteps]);

  const NodeBox = ({
    title,
    subtitle,
    color,
    isActive,
    x,
    y,
  }: {
    title: string;
    subtitle?: string;
    color: string;
    isActive: boolean;
    x: number;
    y: number;
  }) => (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        width: 160,
        height: 100,
        background: isActive ? color : "#f1f5f9",
        border: `3px solid ${color}`,
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: isActive ? "white" : color,
        boxShadow: isActive ? `0 0 20px ${color}80` : "none",
        transition: "all 0.5s ease-in-out",
        zIndex: 10,
      }}
    >
      <span style={{ fontSize: 24, fontWeight: "bold" }}>{title}</span>
      {subtitle && (
        <span style={{ fontSize: 16, marginTop: 4 }}>{subtitle}</span>
      )}
    </div>
  );

  const Edge = ({
    startX,
    startY,
    endX,
    endY,
    isActive,
    label,
  }: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    isActive: boolean;
    label?: string;
  }) => {
    const length = Math.sqrt(
      Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2),
    );
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    return (
      <div
        style={{
          position: "absolute",
          left: startX,
          top: startY,
          width: length,
          height: 4,
          background: isActive ? "#334155" : "#cbd5e1",
          transformOrigin: "0 50%",
          transform: `rotate(${angle}deg)`,
          transition: "background 0.5s ease-in-out",
          zIndex: 5,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -10,
            top: -8,
            width: 0,
            height: 0,
            borderTop: "10px solid transparent",
            borderBottom: "10px solid transparent",
            borderLeft: `16px solid ${isActive ? "#334155" : "#cbd5e1"}`,
            transition: "border-color 0.5s ease-in-out",
          }}
        />
        {label && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: -30,
              transform: `translateX(-50%) rotate(${-angle}deg)`,
              color: isActive ? "#334155" : "#94a3b8",
              fontWeight: "bold",
              fontSize: 16,
              transition: "color 0.5s ease-in-out",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "360px",
        background: "white",
        borderRadius: "16px",
        border: "2px solid #e2e8f0",
        position: "relative",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 24,
          fontSize: 18,
          color: "#64748b",
          fontWeight: "bold",
        }}
      >
        Phase:{" "}
        <span style={{ color: "#3b82f6" }}>
          {step === 0 && "Original Input"}
          {step === 1 && "Domain Translation (X -> Y)"}
          {step === 2 && "Fake Domain Y Generated"}
          {step === 3 && "Discriminator Evaluation"}
          {step === 4 && "Cycle Reconstruction (Y -> X)"}
          {step === 5 && "Cycle Consistency Loss Calculated"}
        </span>
      </div>

      <div
        style={{ position: "relative", width: "100%", height: "100%", top: 50 }}
      >
        <NodeBox
          title="Domain X"
          subtitle="Input Image"
          color="#3b82f6"
          isActive={step >= 0}
          x={150}
          y={150}
        />

        <Edge
          startX={230}
          startY={150}
          endX={400}
          endY={150}
          isActive={step >= 1}
        />

        <NodeBox
          title="Domain Y"
          subtitle="Fake Image"
          color="#f59e0b"
          isActive={step >= 2}
          x={480}
          y={150}
        />

        <Edge
          startX={480}
          startY={200}
          endX={480}
          endY={270}
          isActive={step >= 3}
        />

        <NodeBox
          title="D_Y"
          subtitle="Discriminator"
          color="#10b981"
          isActive={step >= 3}
          x={480}
          y={320}
        />

        <Edge
          startX={560}
          startY={150}
          endX={730}
          endY={150}
          isActive={step >= 4}
        />

        <NodeBox
          title="Domain X"
          subtitle="Reconstructed"
          color="#8b5cf6"
          isActive={step >= 5}
          x={810}
          y={150}
        />

        <svg
          style={{
            position: "absolute",
            left: 150,
            top: 20,
            width: 660,
            height: 100,
            pointerEvents: "none",
            zIndex: 15,
          }}
        >
          <path
            d="M 0 80 Q 330 -50 660 80"
            fill="transparent"
            stroke={step === 5 ? "#ef4444" : "#cbd5e1"}
            strokeWidth="4"
            strokeDasharray="8,8"
            style={{ transition: "stroke 0.5s ease-in-out" }}
          />
        </svg>

        <div
          style={{
            position: "absolute",
            left: 480,
            top: 20,
            transform: "translateX(-50%)",
            color: step === 5 ? "#ef4444" : "transparent",
            fontWeight: "bold",
            fontSize: 20,
            transition: "color 0.5s ease-in-out",
            zIndex: 20,
          }}
        >
          Cycle Consistency Loss
        </div>
      </div>
    </div>
  );
}
