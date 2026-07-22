import { type Page } from "@open-slide/core";

import { ContentLayout } from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { Highlight } from "../../../components/shared/highlight";
import { MathDiagram } from "../../../components/shared/mathDiagram";
import { MathInline, MathBlock } from "../../../components/shared/math";

import React, { useState } from "react";
import {
  Plot,
  Vector,
  MovablePoint,
  Point,
  Line,
  Theme,
  Text,
  LaTeX,
} from "mafs";

import { sectionData } from "../meta";

const lossFunction = (x: number) => {
  return (
    0.08 * Math.pow(x, 4) -
    0.1 * Math.pow(x, 3) -
    1.2 * Math.pow(x, 2) +
    0.5 * x +
    4 +
    1.8 * Math.sin(1.8 * x)
  );
};

export default function SaddlePointDemo() {
  // 動態探針點位置 (x, y)
  const [point, setPoint] = useState<[number, number]>([1, 1]);
  const [x, y] = point;

  // 鞍點函數 f(x, y) = x^2 - y^2
  const z = x ** 2 - y ** 2;

  // 梯度 ∇f = [2x, -2y]
  const gradX = 2 * x;
  const gradY = -2 * y;

  // 等高線數值 c (x^2 - y^2 = c)
  const contours = [-4, -2, -1, 1, 2, 4];

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
      <MathDiagram viewBox={{ x: [-3, 3], y: [-3, 3] }}>
        {/* 1. 臨界漸近線 (y = x 與 y = -x) */}
        {/* 修正：Plot.Fx -> Plot.OfX， Theme.gray -> Theme.foreground */}
        <Plot.OfX
          y={(x: number) => x}
          color={Theme.foreground}
          style="dashed"
        />
        <Plot.OfX
          y={(x: number) => -x}
          color={Theme.foreground}
          style="dashed"
        />

        {/* 2. 等高線群 */}
        {contours.map((c) => {
          const isPositive = c > 0;
          const strokeColor = isPositive ? Theme.blue : Theme.red;

          return (
            <React.Fragment key={c}>
              {/* 正數等高線 (c > 0) */}
              {isPositive && (
                <>
                  {/* 修正：Plot.Fx -> Plot.OfX，明確指定 (x: number) 型別 */}
                  <Plot.OfX
                    y={(x: number) => Math.sqrt(Math.max(0, x ** 2 - c))}
                    color={strokeColor}
                  />
                  <Plot.OfX
                    y={(x: number) => -Math.sqrt(Math.max(0, x ** 2 - c))}
                    color={strokeColor}
                  />
                </>
              )}
              {/* 負數等高線 (c < 0) */}
              {!isPositive && (
                <>
                  {/* 修正：Plot.Fy -> Plot.OfY，明確指定 (y: number) 型別 */}
                  <Plot.OfY
                    x={(y: number) => Math.sqrt(Math.max(0, y ** 2 + c))}
                    color={strokeColor}
                  />
                  <Plot.OfY
                    x={(y: number) => -Math.sqrt(Math.max(0, y ** 2 + c))}
                    color={strokeColor}
                  />
                </>
              )}
            </React.Fragment>
          );
        })}

        {/* 3. 原點鞍點標示 */}
        <MovablePoint
          point={[0, 0]}
          onMove={setPoint}
          color={Theme.pink}
          constrain={() => [0, 0]}
        />
        <Text x={0.2} y={0.3} attach="e" color={Theme.pink}>
          Saddle Point (0,0)
        </Text>

        {/* 4. 可拖曳的探針點 */}
        <MovablePoint point={point} onMove={setPoint} color={Theme.yellow} />

        {/* 5. 梯度向量 (∇f) */}
        <Vector
          tail={point}
          tip={[x + gradX * 0.2, y + gradY * 0.2]}
          color={Theme.yellow}
        />
      </MathDiagram>

      {/* 數值面板 */}
      <div className="w-full bg-slate-800 text-white p-4 rounded-xl text-sm font-mono space-y-1">
        <p>
          座標位置: ({x.toFixed(2)}, {y.toFixed(2)})
        </p>
        <p>
          高度 f(x,y) = x² - y² ={" "}
          <span className="text-yellow-400">{z.toFixed(2)}</span>
        </p>
        <p>
          梯度 ∇f = [{gradX.toFixed(2)}, {gradY.toFixed(2)}]
        </p>
      </div>
    </div>
  );
}
const Why_Optimization_Fails_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Local Minima or Saddle Point"
    title="Why Optimization Fails?"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      Optimization fails because gradient is close to zero. (
      <Highlight>critical point</Highlight>)
    </p>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        boxSizing: "border-box",
        flex: 1,
      }}
    >
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", width: "90%" }}
      >
        <MathDiagram
          viewBox={{ x: [-4, 4], y: [-0.5, 7] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Plot.OfX y={lossFunction} color={Theme.foreground} weight={5} />
          <Line.Segment
            point1={[-1.3, 0]}
            point2={[-1.3, lossFunction(-1.3)]}
            style="dashed"
            weight={5}
            color="#7bb58a"
          />
          <LaTeX at={[-1.3, -0.3]} tex={String.raw`\theta^*`} />
          <LaTeX at={[7, 0.3]} tex={String.raw`\theta`} />
          <LaTeX at={[0.8, 7]} tex={String.raw`L(\theta)`} />
        </MathDiagram>
      </div>
      <SaddlePointDemo />
    </div>
  </ContentLayout>
);

const lossFunction2 = (x: number) => {
  return 0.4 * Math.pow(x, 2) - 0.2 * x * Math.abs(x) + 0.1 * x;
};
const Tayler_Series_Approximation_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Local Minima or Saddle Point"
    title="Tayler Series Approximation"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      <MathInline math="L(\theta)" /> around{" "}
      <MathInline math="\theta = \color{royalblue} \theta'" /> can be
      approximated below (at critical point{" "}
      <MathInline math="\Leftrightarrow" /> green is zero)
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", position: "relative", top: "-65px" }}
    >
      <MathBlock math="L(\theta) \approx L(\color{royalblue} \theta '\color{#0a2f41}) + \color{seagreen}\underline{\textcolor{#0a2f41}(\theta - \textcolor{royalblue} \theta '\textcolor{#0a2f41})^T \textcolor{seagreen}g}\color{#0a2f41} + \textcolor{brown}{\underline{\textcolor{#0a2f41}{\frac{1}{2}(\theta - \textcolor{royalblue}{\theta'})^T \textcolor{brown}{H}(\theta - \textcolor{royalblue}{\theta'})}}}" />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        boxSizing: "border-box",
        flex: 1,
        position: "relative",
        top: "-210px",
      }}
    >
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", position: "relative", top: "-75px" }}
      >
        <MathBlock
          math="\text{Gradient }\color{seagreen}g\color{#0a2f41}\text{ is a \underline{vector}} \\ \color{seagreen}g\color{#0a2f41} = \bigtriangledown L (\color{royalblue}\theta '\color{#0a2f41}), \color{seagreen}g\color{#0a2f41}_i = \frac{\partial L(\color{royalblue}\theta '\color{#0a2f41})}{\partial \theta_i} \\
          \text{Hessian }\color{brown}H\color{#0a2f41}\text{ is a \underline{matrix}} \\ \color{brown}H\color{#0a2f41}_{ij} = \frac{\partial^2}{\partial \theta_i \partial \theta_j} L(\color{royalblue}\theta '\color{#0a2f41})"
        />
      </div>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", width: "90%" }}
      >
        <MathDiagram
          viewBox={{ x: [-0.5, 3.5], y: [0, 1.8] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Plot.OfX y={lossFunction2} color={Theme.foreground} weight={5} />
          <Line.Segment
            point1={[1, 0.3]}
            point2={[3, 1.3]}
            weight={5}
            color="#7bb58a"
          />
          <Line.Segment
            point1={[1, 0.3]}
            point2={[3, 0.3]}
            weight={5}
            style="dashed"
          />
          <Line.Segment
            point1={[3, 0.3]}
            point2={[3, 1.3]}
            weight={5}
            color="#7bb58a"
            style="dashed"
          />
          <Line.Segment
            point1={[3, 1.3]}
            point2={[3, lossFunction2(3)]}
            weight={5}
            color="#a52a2a"
            style="dashed"
          />
          <Point x={1} y={0.3} color="#68b9d4" />
          <LaTeX at={[1, 0.4]} tex={String.raw`\color{royalblue}\theta '`} />
          <LaTeX at={[3, lossFunction2(3) + 0.1]} tex={String.raw`\theta`} />
          <LaTeX at={[-1, 1]} tex={String.raw`L(\theta)`} />
        </MathDiagram>
      </div>
    </div>
  </ContentLayout>
);

const Hessian_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Local Minima or Saddle Point"
    title="Hessian"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      At critical point:{" "}
      <MathInline math="L(\theta) \approx L(\color{royalblue} \theta '\color{#0a2f41}) + \textcolor{brown}{\underline{\textcolor{#0a2f41}{\frac{1}{2}(\theta - \textcolor{royalblue}{\theta'})^T \textcolor{brown}{H}(\theta - \textcolor{royalblue}{\theta'})}}}" />
      <br /> Let{" "}
      <MathInline math="v \triangleq (\theta - \textcolor{royalblue}{\theta'}) \Rightarrow \frac{1}{2}v^T\color{brown}H\color{#0a2f41}v" />
      <br />
      <br />
      <MathInline math="\text{For all } v\text{: }v^T\color{brown}H\color{#0a2f41}v > 0 \Rightarrow \text{Around } \color{royalblue}\theta '\color{#0a2f41}: L(\theta) > L(\color{royalblue}\theta '\color{#0a2f41}) \Rightarrow \underline{\text{Local minima}}" />
      <br />
      <MathInline math="\text{(}v^T\color{brown}H\color{#0a2f41}v > 0 = \color{brown}H\color{#0a2f41} \text{ is positive define} = \text{All eigen values are positive.)}" />
      <br />
      <br />
      <MathInline math="\text{For all } v\text{: }v^T\color{brown}H\color{#0a2f41}v < 0 \Rightarrow \text{Around } \color{royalblue}\theta '\color{#0a2f41}: L(\theta) < L(\color{royalblue}\theta '\color{#0a2f41}) \Rightarrow \underline{\text{Local maxima}}" />
      <br />
      <MathInline math="\text{(}v^T\color{brown}H\color{#0a2f41}v < 0 = \color{brown}H\color{#0a2f41} \text{ is negative define} = \text{All eigen values are negative.)}" />
      <br />
      <br />
      <MathInline math="\text{Sometimes }v^T\color{brown}H\color{#0a2f41}v > 0, \text{Sometimes }v^T\color{brown}H\color{#0a2f41}v < 0 \Rightarrow \underline{\text{Saddle point}}" />
      <br />
      <MathInline math="\text{(Some eigen values are positive, and some are negative.)}" />
    </p>
  </ContentLayout>
);

const Hessian2_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 6: Local Minima or Saddle Point"
    title="Don't Afraid of Saddle Point?"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      <MathInline math="\text{Sometimes }v^T\color{brown}H\color{#0a2f41}v > 0, \text{Sometimes }v^T\color{brown}H\color{#0a2f41}v < 0 \Rightarrow \underline{\text{Saddle point}}" />
      <br />
      <MathInline math="\color{brown} H \text{ may tell us parameter update direction!}" />
      <MathBlock
        math="\begin{matrix}\text{Let } u \text{ be an eigen vector of } \color{brown}H\color{#0a2f41} \\ \text{Let } \lambda \text{ be the eigen value of } u \\ \lambda < 0 \end{matrix} \Rightarrow
        \begin{matrix}u^T\color{brown}H\color{#0a2f41}u & = u^T(\lambda u) & = \lambda ||u||^2 \\ < 0 & & < 0 \end{matrix} \\
        L(\theta) \approx L(\color{royalblue} \theta '\color{#0a2f41}) + \textcolor{#0a2f41}{\frac{1}{2}(\theta - \textcolor{royalblue}{\theta'})^T \textcolor{brown}{H}(\theta - \textcolor{royalblue}{\theta'})} \Rightarrow L(\theta) < L(\color{royalblue}\theta'\color{#0a2f41}) \\
        \theta - \color{royalblue} \theta '\color{#0a2f41} = u, \theta = \color{royalblue} \theta '\color{#0a2f41} + u"
      />
    </p>
  </ContentLayout>
);

export const section6Slides: Page[] = [
  createSectionSlide(5, sectionData),
  Why_Optimization_Fails_Page,
  Tayler_Series_Approximation_Page,
  Hessian_Page,
  Hessian2_Page,
];
