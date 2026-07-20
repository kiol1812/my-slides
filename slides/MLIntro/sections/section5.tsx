import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathBlock } from "../../../components/shared/math";
import { Highlight } from "../../../components/shared/highlight";
import { FlowDiagram } from "../../../components/shared/flowDiagram";
import { MathDiagram } from "../../../components/shared/mathDiagram";

import { Plot, Line, Theme, Ellipse, Point, Text, LaTeX } from "mafs";

import { sectionData } from "../meta";

import { guide_nodes, guide_edges } from "../assets/guide";

const General_Guide_Page: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 5: Machine Learning Task"
    title="General Guide"
    textFlex={0}
    imgFlex={4}
    imageNode={<FlowDiagram nodes={guide_nodes} edges={guide_edges} />}
    bottomContent={
      <p
        className="ac-fadeIn"
        style={{
          fontSize: 32,
          color: "#0a2f41",
          lineHeight: 1.6,
          margin: 0,
          position: "relative",
          top: "-60px",
        }}
      >
        Trade-off: split your training data into training set and validation set
        for model selection.
      </p>
    }
  >
    <div />
  </ContentWithImgLayout>
);

const Model_Bias_Page: Page = () => (
  <ContentLayout eyebrow="Section 5: Machine Learning Task" title="Model Bias">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      The model is too simple. <br />
      Solution: redesign model to make it more <Highlight>flexible</Highlight>.
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
        <MathBlock math="y = b + wx_1 \xrightarrow{More features} y = b + \sum_{j=1}^{56} w_j x_j \\ \text{Deep Learning (more neurons, layers)} \downarrow \\ y = b + \sum_i c_i \sigma(b_i + \sum_j w_{ij}x_j)" />
      </div>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", width: "90%" }}
      >
        <MathDiagram
          viewBox={{ x: [-1, 3], y: [-2, 2] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Ellipse center={[0, 0]} radius={[3, 2]} />
          <Point x={1} y={-1} />
          <Text x={1} y={-1} attach="e" attachDistance={15} size={48}>
            f1(x)
          </Text>
          <Point x={2} y={2} />
          <Text x={2} y={2} attach="e" attachDistance={15} size={48}>
            f*(x)
          </Text>
        </MathDiagram>
      </div>
    </div>
  </ContentLayout>
);

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
const Optimization_Issue_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Machine Learning Task"
    title="Optimization Issue"
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
      Large loss not always imply model bias. There is another possibility ...
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
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", width: "90%" }}
      >
        <MathDiagram
          viewBox={{ x: [-1, 3], y: [-2, 2] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Ellipse center={[0, 0]} radius={[3, 2]} />
          <Point x={1} y={-1} />
          <Text x={1} y={-1} attach="e" attachDistance={15} size={48}>
            f1(x)
          </Text>
          <Point x={2} y={1} />
          <Text x={2} y={1} attach="e" attachDistance={15} size={48}>
            f*(x)
          </Text>
        </MathDiagram>
      </div>
    </div>
  </ContentLayout>
);

const curve20Train = (x: number) => {
  if (x < 0) return 20;
  const base = 15 * Math.exp(-0.7 * x) + 4.5 + 0.25 * Math.sin(x * 12);
  const drop = x >= 3.2 ? 2.5 : 0;
  return Math.max(2.5, base - drop);
};
const curve20Test = (x: number) => {
  if (x < 0) return 20;
  const base = 13 * Math.exp(-0.6 * x) + 11.5 + 0.25 * Math.sin(x * 11);
  const drop = x >= 3.2 ? 4.5 : 0;
  return Math.max(7.5, base - drop);
};
const curve56Train = (x: number) => {
  if (x < 1.8) return 20;
  const drop1 = x >= 3.2 ? 3 : 0;
  const base = 18 * Math.exp(-0.5 * x) + 6 + 0.4 * Math.cos(x * 15);
  return Math.max(4.0, base - drop1);
};
const curve56Test = (x: number) => {
  if (x < 1.8) return 20;
  const drop1 = x >= 3.2 ? 5.5 : 0;
  const base = 18 * Math.exp(-0.5 * x) + 11 + 0.4 * Math.sin(x * 14);
  return Math.max(8.0, base - drop1);
};
const Comparison_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Machine Learning Task"
    title="Model Bias v.s. Optimization Issue"
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
      While a 56-layers model is more flexible than a 20-layers model, it
      suffers from <br /> higher error rate due to optimization issue.
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
          viewBox={{ x: [15, 20], y: [0, 20] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Text x={12} y={18} attach="e" attachDistance={15} size={48}>
            Testing Loss
          </Text>
          <Text
            x={12}
            y={15}
            attach="e"
            attachDistance={15}
            size={48}
            color="#b5a642"
          >
            20-Layers
          </Text>
          <Text
            x={12}
            y={12}
            attach="e"
            attachDistance={15}
            size={48}
            color="#d93838"
          >
            56-Layers
          </Text>
          <Plot.OfX y={curve20Test} color="#b5a642" weight={3} />
          <Plot.OfX y={curve56Test} color="#d93838" weight={3} />
        </MathDiagram>
      </div>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", width: "90%" }}
      >
        <MathDiagram
          viewBox={{ x: [15, 20], y: [0, 20] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Text x={12} y={18} attach="e" attachDistance={15} size={48}>
            Training Loss
          </Text>
          <Text
            x={12}
            y={15}
            attach="e"
            attachDistance={15}
            size={48}
            color="#b5a642"
          >
            20-Layers
          </Text>
          <Text
            x={12}
            y={12}
            attach="e"
            attachDistance={15}
            size={48}
            color="#d93838"
          >
            56-Layers
          </Text>
          <Plot.OfX y={curve20Train} color="#b5a642" weight={3} />
          <Plot.OfX y={curve56Train} color="#d93838" weight={3} />
        </MathDiagram>
      </div>
    </div>
  </ContentLayout>
);

const flexibleModel = (x: number) => {
  return (
    0.04 * Math.pow(x - 5, 5) +
    0.08 * Math.pow(x - 5, 4) -
    0.3 * Math.pow(x - 5, 3) +
    1.8 * Math.sin(0.8 * (x - 5)) +
    3
  );
};
const realDistribution = (x: number) => {
  return -0.4 * Math.pow(x - 4, 2) + 5;
};
const Overfitting_Page: Page = () => (
  <ContentLayout eyebrow="Section 5: Machine Learning Task" title="Overfitting">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      To address overfitting, we can increase the size of the training dataset.
    </p>
    <ul
      className="ac-fadeIn"
      style={{
        fontSize: 28,
        color: "#555",
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: 40,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <li>Collect more data.</li>
      <li>Data augmentation, such as zoom in, flip, and rotate, etc.</li>
      <li>
        Constrain model. Let model be less flexible by less parameters, share
        parameters, less features, early stopping, regularization, and dropout,
        etc.
      </li>
    </ul>
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "90%",
        position: "relative",
        top: "-45px",
      }}
    >
      <MathDiagram
        viewBox={{ x: [2, 6], y: [0, 6] }}
        zoom={{ min: 0.1, max: 2 }}
      >
        <Text
          x={-6}
          y={4}
          attach="e"
          attachDistance={15}
          size={48}
          color="#b5a642"
        >
          Flexible Model
        </Text>
        <Text
          x={-6}
          y={2}
          attach="e"
          attachDistance={15}
          size={48}
          color="#d93838"
        >
          Real Distribution
        </Text>
        <Plot.OfX y={flexibleModel} color="#b5a642" weight={3} />
        <Plot.OfX y={realDistribution} color="#d93838" weight={3} />
        <Point x={0.96717} y={1.32077} color="#68b9d4" />
        <Point x={2.7575} y={4.38248} color="#68b9d4" />
        <Point x={5.68471} y={3.86471} color="#68b9d4" />
        <Point x={2} y={3.4} color="#e3741a" />
        <Point x={4} y={5} color="#e3741a" />
        <Point x={6.75} y={1.975} color="#e3741a" />
        <Line.Segment
          point1={[2, 3.4]}
          point2={[2, flexibleModel(2)]}
          style="dashed"
          weight={5}
          color="#e3741a44"
        />
        <Line.Segment
          point1={[4, 5]}
          point2={[4, flexibleModel(4)]}
          style="dashed"
          weight={5}
          color="#e3741a44"
        />
        <Line.Segment
          point1={[6.75, 1.975]}
          point2={[6.75, flexibleModel(6.75)]}
          style="dashed"
          weight={5}
          color="#e3741a44"
        />
      </MathDiagram>
    </div>
  </ContentLayout>
);

const trade_off_testing = (x: number) => {
  return Math.pow(0.3 * x - 3, 2) + 5.5;
};
const trade_off_training = (x: number) => {
  return Math.max(-6 * Math.log10(x) + 8.5, 0.7);
};
const Trade_off_Page: Page = () => (
  <ContentLayout
    eyebrow="Section 5: Machine Learning Task"
    title="Bias-Complexity Trade-off"
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
      Over-constraining the model limits its cability and introduces model bias.
    </p>
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "90%",
      }}
    >
      <MathDiagram
        viewBox={{ x: [14, 20], y: [-1, 12] }}
        zoom={{ min: 0.1, max: 2 }}
      >
        <Text x={-0.5} y={11} attach="w" attachDistance={15} size={48}>
          Loss
        </Text>
        <Text x={1} y={-1} attach="e" attachDistance={15} size={48}>
          Model becomes complex (e.g. more features, more parameters)
        </Text>
        <Text x={6.3} y={8} attach="e" attachDistance={15} size={48}>
          Early stop
        </Text>
        <Text
          x={18}
          y={10}
          attach="e"
          attachDistance={15}
          size={48}
          color="#b5a642"
        >
          Testing loss
        </Text>
        <Text
          x={18}
          y={2}
          attach="e"
          attachDistance={15}
          size={48}
          color="#d93838"
        >
          Training loss
        </Text>
        <Plot.OfX y={trade_off_testing} color="#b5a642" weight={3} />
        <Plot.OfX y={trade_off_training} color="#d93838" weight={3} />
        <Line.Segment
          point1={[10, 0]}
          point2={[10, 7]}
          style="dashed"
          weight={5}
          color="#e3741a44"
        />
      </MathDiagram>
    </div>
  </ContentLayout>
);

const Mismatch_Page: Page = () => (
  <ContentLayout eyebrow="Section 5: Machine Learning Task" title="Mismatch">
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      The training and testing data have different distributions.
    </p>
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "90%",
        position: "relative",
        top: "-45px",
      }}
    >
      <MathDiagram
        viewBox={{ x: [2, 6], y: [0, 8] }}
        zoom={{ min: 0.1, max: 2 }}
      >
        <Plot.OfX y={flexibleModel} weight={3} />
        <Point x={5} y={0} color="#68b9d4" />
        <Point x={5} y={flexibleModel(5)} color="#68b9d4" />
        <Line.Segment
          point1={[5, 0]}
          point2={[5, flexibleModel(5)]}
          style="dashed"
          weight={5}
          color="#68b9d444"
        />
        <Point x={10} y={0} color="#e3741a" />
        <Line.Segment
          point1={[10, 0]}
          point2={[10, 10]}
          style="dashed"
          weight={5}
          color="#e3741a44"
        />
      </MathDiagram>
    </div>
  </ContentLayout>
);

export const section5Slides: Page[] = [
  createSectionSlide(4, sectionData),
  General_Guide_Page,
  Model_Bias_Page,
  Optimization_Issue_Page,
  Comparison_Page,
  Overfitting_Page,
  Trade_off_Page,
  Mismatch_Page,
];
