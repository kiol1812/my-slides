import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { MathDiagram } from "../../../components/shared/mathDiagram";
import { FlowDiagram } from "../../../components/shared/flowDiagram";
import { Highlight } from "../../../components/shared/highlight";
import { Plot, Line, Theme, LaTeX, Text, Point, Polyline, Ellipse } from "mafs";

import { sectionData } from "../meta";
import {
  vector_input_edges,
  vector_input_nodes,
} from "../assets/SophisticatedInputs";
import { vector_graph_nodes, vector_graph_edges } from "../assets/VectorGraph";
import {
  vector_output_nodes,
  vector_output_edges,
} from "../assets/SophisticatedOutputs";
import {
  sequence_labeling_nodes,
  sequence_labeling_edges,
} from "../assets/SequenceLabeling";
import {
  self_attention_nodes,
  self_attention_edges,
} from "../assets/Self_Attention";
import MultiHeadImg from "../assets/multi_head.png";
import {
  self_attention_graph_nodes,
  self_attention_graph_edges,
} from "../assets/Self_Attention_Graph";

const Sophisticated_Input: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Sophisticated Input"
    authorInfo="Transformer"
  >
    <p
      className="ac-fadeIn"
      style={{
        fontSize: 32,
        color: "#0a2f41",
        lineHeight: 1.6,
        margin: 0,
        width: "85%",
      }}
    >
      Input is a vector v.s. Input is a set of vectors (
      <Highlight>may change length</Highlight>)
      <br />
    </p>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", height: "450px", width: "80%" }}
    >
      <FlowDiagram nodes={vector_input_nodes} edges={vector_input_edges} />
    </div>
  </ContentLayout>
);

const Vector_Set_as_Input: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Vector Set as Input"
    authorInfo="Transformer"
  >
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
        <MathBlock
          math="\text{One-hot Encoding} \\ \begin{align*}
          & apple && = \begin{bmatrix} 1 & 0 & 0 & 0 & \dots \end{bmatrix} \\
          & bag && = \begin{bmatrix} 0 & 1 & 0 & 0 & \dots \end{bmatrix} \\
          & cat && = \begin{bmatrix} 0 & 0 & 1 & 0 & \dots \end{bmatrix} \\
          & dog && = \begin{bmatrix} 0 & 0 & 0 & 1 & \dots \end{bmatrix} \\
          \end{align*}"
        />
      </div>
      <div
        className="ac-fadeIn"
        style={{ animationDelay: "0.2s", width: "90%" }}
      >
        <MathDiagram
          viewBox={{ x: [0, 5], y: [0, 5] }}
          zoom={{ min: 0.1, max: 2 }}
        >
          <Text x={0.5} y={5} attach="e" attachDistance={15} size={48}>
            Word Embedding
          </Text>
          <Point x={3} y={4} />
          <Text x={3} y={4} attach="e" attachDistance={15} size={48}>
            dog
          </Text>
          <Point x={3.4} y={3.6} />
          <Text x={3.4} y={3.6} attach="e" attachDistance={15} size={48}>
            cat
          </Text>
          <Point x={1} y={1} />
          <Text x={1} y={1} attach="e" attachDistance={15} size={48}>
            jump
          </Text>
          <Point x={1.4} y={1.6} />
          <Text x={1.4} y={1.6} attach="e" attachDistance={15} size={48}>
            run
          </Text>
          <Point x={4.5} y={1.8} />
          <Text x={4.5} y={1.8} attach="e" attachDistance={15} size={48}>
            tree
          </Text>
          <Point x={4.2} y={2.2} />
          <Text x={4.2} y={2.2} attach="e" attachDistance={15} size={48}>
            flower
          </Text>
        </MathDiagram>
      </div>
    </div>
  </ContentLayout>
);

export default function AudioFramingDiagram() {
  return (
    <MathDiagram
      viewBox={{ x: [-1, 8], y: [-1.5, 1.5] }}
      zoom={{ min: 0.5, max: 3 }}
    >
      <Plot.OfX
        y={(x) => {
          const envelope =
            0.02 +
            0.3 * Math.exp(-Math.pow((x - 1.8) / 0.3, 2)) +
            0.8 * Math.exp(-Math.pow((x - 3.2) / 0.5, 2)) +
            0.2 * Math.exp(-Math.pow((x - 5.0) / 0.3, 2)) +
            0.6 * Math.exp(-Math.pow((x - 6.5) / 0.5, 2)) +
            0.7 * Math.exp(-Math.pow((x - 9.5) / 0.4, 2));
          return Math.sin(80 * x) * Math.cos(25 * x) * envelope;
        }}
        color="blue"
        weight={1.5}
      />
      <Line.Segment point1={[0, 1]} point2={[3.5, 1]} color="red" weight={2} />
      <Line.Segment
        point1={[0, -1]}
        point2={[3.5, -1]}
        color="red"
        weight={2}
      />
      <Line.Segment point1={[0, 1]} point2={[0, -1]} color="red" weight={2} />
      <Line.Segment point1={[1, 1]} point2={[1, -1]} color="red" weight={2} />
      <Line.Segment
        point1={[2.5, 1]}
        point2={[2.5, -1]}
        color="red"
        weight={2}
      />
      <Line.Segment
        point1={[3.5, 1]}
        point2={[3.5, -1]}
        color="red"
        weight={2}
      />

      <Polyline
        points={[
          [0, 1.05],
          [0, 1.2],
          [0.5, 1.35],
          [1, 1.2],
          [1, 1.05],
        ]}
        color="black"
        weight={2}
      />
      <Text x={0.5} y={1.6} size={24}>
        10ms
      </Text>

      <Polyline
        points={[
          [0, -1.05],
          [0, -1.2],
          [1.25, -1.4],
          [2.5, -1.2],
          [2.5, -1.05],
        ]}
        color="black"
        weight={2}
      />
      <Text x={1.25} y={-1.7} size={24}>
        25ms
      </Text>

      <Text x={7} y={1.8} size={32}>
        1s → 100 frames
      </Text>
    </MathDiagram>
  );
}
const Vector_Set_as_Input2: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Vector Set as Input"
    authorInfo="Transformer"
  >
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
      <li>
        <strong style={{ color: "#0a2f41" }}>Sound signal</strong>: 25ms per
        frame.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Graph</strong>: consider each node
        as a vector.
      </li>
    </ul>
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
        style={{
          animationDelay: "0.2s",
          height: "450px",
          width: "100%",
        }}
      >
        <AudioFramingDiagram />
      </div>
      <div
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          height: "450px",
          width: "100%",
        }}
      >
        <FlowDiagram nodes={vector_graph_nodes} edges={vector_graph_edges} />
      </div>
    </div>
  </ContentLayout>
);

const Sophisticated_Output: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="What is the output?"
    authorInfo="Transformer"
  >
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "750px",
        width: "100%",
        position: "relative",
        top: "-60px",
      }}
    >
      <FlowDiagram nodes={vector_output_nodes} edges={vector_output_edges} />
    </div>
  </ContentLayout>
);

const Sequence_Labeling: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Sequence Labeling"
    authorInfo="Transformer"
  >
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
      <li>
        <strong style={{ color: "#0a2f41" }}>FC</strong>: Fully-Connected, it
        can consider the neighnor
      </li>
      <li>
        How to consider the whole sequence? A window covers the whole sequence?
      </li>
    </ul>
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "750px",
        width: "100%",
        position: "relative",
        top: "-60px",
      }}
    >
      <FlowDiagram
        nodes={sequence_labeling_nodes}
        edges={sequence_labeling_edges}
      />
    </div>
  </ContentLayout>
);

const Self_Attention: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Self-Attention"
    authorInfo="Transformer"
  >
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "750px",
        width: "100%",
        position: "relative",
        top: "-60px",
      }}
    >
      <FlowDiagram nodes={self_attention_nodes} edges={self_attention_edges} />
    </div>
  </ContentLayout>
);

const Self_Attention2: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Self-Attention"
    authorInfo="Transformer"
  >
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        height: "750px",
        width: "100%",
      }}
    >
      <MathBlock
        math="\begin{align*}
q^i &= W^q a^i & \underset{Q}{q^1 \, q^2 \, q^3 \, q^4} &= W^q \underset{\mathrm{I}}{a^1 \, a^2 \, a^3 \, a^4} \\[8pt]
k^i &= W^k a^i & \underset{K}{k^1 \, k^2 \, k^3 \, k^4} &= W^k \underset{\mathrm{I}}{a^1 \, a^2 \, a^3 \, a^4} \\[8pt]
v^i &= W^v a^i & \underset{V}{v^1 \, v^2 \, v^3 \, v^4} &= W^v \underset{\mathrm{I}}{a^1 \, a^2 \, a^3 \, a^4}
\end{align*}"
      />
    </div>
  </ContentLayout>
);

const Self_Attention3: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Self-Attention"
    authorInfo="Transformer"
  >
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "100%",
      }}
    >
      <MathBlock
        math="\underset{A'}{
\begin{matrix}
\alpha'_{1,1} & \alpha'_{2,1} & \alpha'_{3,1} & \alpha'_{4,1} \\[4pt]
\alpha'_{1,2} & \alpha'_{2,2} & \alpha'_{3,2} & \alpha'_{4,2} \\[4pt]
\alpha'_{1,3} & \alpha'_{2,3} & \alpha'_{3,3} & \alpha'_{4,3} \\[4pt]
\alpha'_{1,4} & \alpha'_{2,4} & \alpha'_{3,4} & \alpha'_{4,4}
\end{matrix}
}
\quad
\xleftarrow[\text{softmax}]{\quad\quad}
\quad
\underset{A}{
\begin{matrix}
\alpha_{1,1} & \alpha_{2,1} & \alpha_{3,1} & \alpha_{4,1} \\[4pt]
\alpha_{1,2} & \alpha_{2,2} & \alpha_{3,2} & \alpha_{4,2} \\[4pt]
\alpha_{1,3} & \alpha_{2,3} & \alpha_{3,3} & \alpha_{4,3} \\[4pt]
\alpha_{1,4} & \alpha_{2,4} & \alpha_{3,4} & \alpha_{4,4}
\end{matrix}
}
\;=\;
\underset{K^T}{
\begin{matrix}
k^1 \\[4pt] k^2 \\[4pt] k^3 \\[4pt] k^4
\end{matrix}
}
\quad
\underset{Q}{
\begin{matrix}
q^1 & q^2 & q^3 & q^4
\end{matrix}
}"
      />
    </div>
  </ContentLayout>
);

const Self_Attention4: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Self-Attention"
    authorInfo="Transformer"
  >
    <div
      className="ac-fadeIn"
      style={{
        animationDelay: "0.2s",
        width: "100%",
      }}
    >
      <MathBlock
        math="\underset{O}{
\begin{matrix}
b^1 & b^2 & b^3 & b^4
\end{matrix}
}
\;=\;
\underset{V}{
\begin{matrix}
v^1 & v^2 & v^3 & v^4
\end{matrix}
}
\quad
\underset{A'}{
\begin{matrix}
\alpha'_{1,1} & \alpha'_{2,1} & \alpha'_{3,1} & \alpha'_{4,1} \\[4pt]
\alpha'_{1,2} & \alpha'_{2,2} & \alpha'_{3,2} & \alpha'_{4,2} \\[4pt]
\alpha'_{1,3} & \alpha'_{2,3} & \alpha'_{3,3} & \alpha'_{4,3} \\[4pt]
\alpha'_{1,4} & \alpha'_{2,4} & \alpha'_{3,4} & \alpha'_{4,4}
\end{matrix}
}"
      />
    </div>
  </ContentLayout>
);

const Multi_Head: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 1: Self-Attention"
    title="Multi-Head"
    authorInfo="Transformer"
    textFlex={0}
    imgFlex={4}
    imageNode={
      <img
        src={MultiHeadImg}
        alt="Data Representation"
        style={{
          width: "80%",
          borderRadius: 16,
          objectFit: "cover",
          position: "relative",
          left: "-80px",
          top: "-70px",
        }}
      />
    }
  >
    <div />
  </ContentWithImgLayout>
);

const PositionalEncoding: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Positional Encoding"
    authorInfo="Transformer"
  >
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
      <li>No position information in self-attention.</li>
      <li>
        Each position has a unique positional vector <MathInline math="e^i" />.
      </li>
      <li>hand-crafted</li>
      <li>learned from data</li>
    </ul>
    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", height: "450px", width: "80%" }}
    >
      <MathBlock math="{a'}^i = e^i + a^i" />
    </div>
  </ContentLayout>
);

const Self_Attention_vs_CNN: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Self-Attention v.s. CNN"
    authorInfo="Transformer"
  >
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
      <li>CNN: self-attention that can only attends in a receptive field.</li>
      <li>CNN is simplified self-attention.</li>
      <li>Self-attention: CNN with learnable receptive field.</li>
      <li>Self-attention is the complex version of CNN (flexible).</li>
    </ul>
    <div className="ac-fadeIn" style={{ animationDelay: "0.2s" }}>
      <MathDiagram
        viewBox={{ x: [8, 13], y: [1, 11] }}
        zoom={{ min: 1, max: 1 }}
      >
        <Ellipse center={[8, 4]} radius={[4, 3]} />
        <Ellipse center={[8, 5]} radius={[5, 4]} />
        <Text x={6.8} y={5.2} attach="e" attachDistance={15} size={32}>
          CNN
        </Text>
        <Text x={5.7} y={7.6} attach="e" attachDistance={15} size={32}>
          Self-attention
        </Text>
      </MathDiagram>
    </div>
  </ContentLayout>
);

const AttentionMatrix = () => {
  const matrixData = [
    [0, 0, 0, 0, "#669933", "#ffcc00", 0, "#ff9900"], // Row 1
    [0, 0, "ring", 0, 0, 0, 0, 0], // Row 2
    [0, "ring", 0, 1, 1, 1, 0, 0], // Row 3
    [0, 0, 1, 0, 1, 0, 0, 0], // Row 4
    ["#669933", 0, 1, 1, 0, 0, 0, 0], // Row 5
    ["#ffcc00", 0, 1, 0, 0, 0, 1, 0], // Row 6
    [0, 0, 0, 0, 0, 1, 0, 1], // Row 7
    ["#ff9900", 0, 0, 0, 0, 0, 1, 0], // Row 8
  ];

  const gridItems = [];

  // 建立頂部欄位標頭 (1~8)
  gridItems.push(<div key="empty-top-left" />);
  for (let i = 1; i <= 8; i++) {
    gridItems.push(
      <div
        key={`header-col-${i}`}
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        {i}
      </div>,
    );
  }

  // 建立每一列以及其包含的單元格
  matrixData.forEach((row, rIdx) => {
    // 建立左側列頭 (1~8)
    gridItems.push(
      <div
        key={`header-row-${rIdx}`}
        style={{
          textAlign: "center",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rIdx + 1}
      </div>,
    );

    // 建立矩陣內部單元格
    row.forEach((cell, cIdx) => {
      gridItems.push(
        <div
          key={`cell-${rIdx}-${cIdx}`}
          style={{
            width: 32,
            height: 32,
            backgroundColor: cell !== 0 ? "#b3c6e6" : "transparent",
            border: "1px solid #777",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          {cell !== 0 && cell !== 1 && cell !== "ring" && (
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: cell as string,
              }}
            />
          )}
          {cell === "ring" && (
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                border: "3px solid #aaa",
                backgroundColor: "transparent",
              }}
            />
          )}
        </div>,
      );
    });
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <span
        style={{
          fontSize: 22,
          borderBottom: "2px solid #555",
          marginBottom: 10,
          color: "#333",
        }}
      >
        Attention Matrix
      </span>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 32px)",
          gap: 0,
        }}
      >
        {gridItems}
      </div>
    </div>
  );
};

// 將 AttentionMatrix 加入到投影片的左側內容區
const Self_Attention_For_Graph: Page = () => (
  <ContentLayout
    eyebrow="Section 1: Self-Attention"
    title="Self-attention for Graph"
    authorInfo="Transformer"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          paddingRight: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          <li>
            Consider <strong style={{ color: "#0a2f41" }}>edge</strong>: only
            attention to connected nodes.
          </li>
          <li>This is one type of Graph Neural Network (GNN).</li>
        </ul>

        <div className="ac-fadeIn" style={{ animationDelay: "0.4s" }}>
          <AttentionMatrix />
        </div>
      </div>

      <div
        className="ac-fadeIn"
        style={{
          animationDelay: "0.2s",
          flex: 1,
          height: "500px",
          position: "relative",
          top: "-30px",
        }}
      >
        <FlowDiagram
          nodes={self_attention_graph_nodes}
          edges={self_attention_graph_edges}
        />
      </div>
    </div>
  </ContentLayout>
);

export const section1Slides: Page[] = [
  createSectionSlide(0, sectionData),
  Sophisticated_Input,
  Vector_Set_as_Input,
  Vector_Set_as_Input2,
  Sophisticated_Output,
  Sequence_Labeling,
  Self_Attention,
  Self_Attention2,
  Self_Attention3,
  Self_Attention4,
  Multi_Head,
  PositionalEncoding,
  Self_Attention_vs_CNN,
  Self_Attention_For_Graph,
];
