import { type Page } from "@open-slide/core";

import {
  ContentLayout,
  ContentWithImgLayout,
} from "../../../components/academic/content";
import { createSectionSlide } from "../../../components/academic/section";
import { MathInline, MathBlock } from "../../../components/shared/math";
import { sectionData } from "../meta";
import EncoderImg from "../assets/encoder.png";
import DecoderImg from "../assets/decoder.png";
import TransformerImg from "../assets/transformer.png";

// ==========================================
// Custom Visual Components for Section 2
// ==========================================

const Seq2SeqDiagram = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "center",
      marginTop: 20,
    }}
  >
    {/* Diagram: Machine Translation */}
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <div style={{ display: "flex", gap: 6 }}>
        {["#b3c6e6", "#ffcc00", "#ffcc00", "#b3c6e6"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 24,
              height: 60,
              backgroundColor: c,
              borderRadius: 6,
              border: "2px solid #555",
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 24, fontWeight: "bold", color: "#555" }}>→</span>
      <div
        style={{
          padding: "16px 24px",
          backgroundColor: "#0a2f41",
          color: "white",
          borderRadius: 12,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Seq2Seq Model
      </div>
      <span style={{ fontSize: 24, fontWeight: "bold", color: "#555" }}>→</span>
      <div style={{ display: "flex", gap: 8 }}>
        {["#ffcc00", "#b3c6e6", "#669933"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 30,
              height: 30,
              backgroundColor: c,
              borderRadius: "50%",
              border: "2px solid #555",
            }}
          />
        ))}
      </div>
    </div>
    <div style={{ color: "#777", fontStyle: "italic", fontSize: 20 }}>
      (e.g., Machine Translation, Speech Recognition, QA)
    </div>
  </div>
);

const CrossAttentionDiagram = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 15,
      padding: 20,
      backgroundColor: "#f7f9fa",
      borderRadius: 16,
      border: "1px solid #ddd",
    }}
  >
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "80%" }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", marginBottom: 5, color: "#0a2f41" }}>
          Encoder
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "#ffcc00",
              borderRadius: 8,
            }}
          >
            <MathInline math="K" />
          </div>
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "#b3c6e6",
              borderRadius: 8,
            }}
          >
            <MathInline math="V" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", marginBottom: 5, color: "#0a2f41" }}>
          Decoder
        </div>
        <div
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff9900",
            borderRadius: 8,
          }}
        >
          <MathInline math="Q" />
        </div>
      </div>
    </div>
    <div style={{ fontSize: 24, color: "#555" }}>↓</div>
    <div
      style={{
        padding: "12px 30px",
        backgroundColor: "#d9e2ec",
        borderRadius: 8,
        fontWeight: "bold",
        color: "#0a2f41",
        border: "2px solid #9fb3c8",
      }}
    >
      Cross Attention
    </div>
    <div style={{ fontSize: 24, color: "#555" }}>↓</div>
    <MathBlock math="b^{(i)} = \sum_{j} \alpha_{i,j} v^{(j)}" />
  </div>
);

const ATNATDiagram = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width: "100%",
      marginTop: 10,
    }}
  >
    {/* AT Decoder Box */}
    <div
      style={{
        padding: 20,
        border: "2px solid #ccc",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: 22,
          marginBottom: 16,
          color: "#0a2f41",
        }}
      >
        AT Decoder (Autoregressive)
      </div>
      <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 18, color: "#555" }}>BEGIN</span>
          <span style={{ color: "#888" }}>↓</span>
          <div
            style={{
              padding: "8px 12px",
              backgroundColor: "#e3f2fd",
              borderRadius: 6,
            }}
          >
            <MathInline math="w_1" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 18, color: "#555" }}>
            <MathInline math="w_1" />
          </span>
          <span style={{ color: "#888" }}>↓</span>
          <div
            style={{
              padding: "8px 12px",
              backgroundColor: "#e3f2fd",
              borderRadius: 6,
            }}
          >
            <MathInline math="w_2" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 18, color: "#555" }}>
            <MathInline math="w_2" />
          </span>
          <span style={{ color: "#888" }}>↓</span>
          <div
            style={{
              padding: "8px 12px",
              backgroundColor: "#e3f2fd",
              borderRadius: 6,
            }}
          >
            <MathInline math="w_3" />
          </div>
        </div>
      </div>
    </div>

    {/* NAT Decoder Box */}
    <div
      style={{
        padding: 20,
        border: "2px dashed #9fb3c8",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: 22,
          marginBottom: 16,
          color: "#0a2f41",
        }}
      >
        NAT Decoder (Non-Autoregressive)
      </div>
      <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
        {["w_1", "w_2", "END", "w_4"].map((token, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 18, color: "#555" }}>BEGIN</span>
            <span style={{ color: "#888" }}>↓</span>
            <div
              style={{
                padding: "8px 12px",
                backgroundColor: token === "END" ? "#333" : "#e3f2fd",
                color: token === "END" ? "#fff" : "#000",
                borderRadius: 6,
              }}
            >
              {token === "END" ? "END" : <MathInline math={token} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ==========================================
// Slide Pages
// ==========================================

const Seq2Seq_Overview: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Transformer"
    title="Sequence-to-Sequence (Seq2Seq)"
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
          flex: 1.2,
          paddingRight: "30px",
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
            Input a sequence, output a sequence. The output length is determined
            dynamically by the model.
          </li>
          <li>
            <strong style={{ color: "#0a2f41" }}>Applications:</strong>
            Speech Recognition, Machine Translation, Question Answering (QA),
            and Syntactic Parsing.
          </li>
          <li>
            <strong style={{ color: "#0a2f41" }}>
              Multi-label Classification:
            </strong>
            An object can belong to multiple classes, which is fundamentally
            different from multi-class (single label).
          </li>
        </ul>
      </div>
      <div className="ac-fadeIn" style={{ animationDelay: "0.2s", flex: 0.8 }}>
        <Seq2SeqDiagram />
      </div>
    </div>
  </ContentLayout>
);

const Transformer_Encoder_Details: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Transformer"
    title="Encoder Architecture"
    authorInfo="Transformer"
    textFlex={1}
    imgFlex={1}
    imageNode={
      <img
        src={EncoderImg}
        alt="Encoder Representation"
        style={{
          width: "85%",
          borderRadius: 16,
          objectFit: "contain",
        }}
      />
    }
  >
    <div
      className="ac-fadeIn"
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      <ul
        style={{
          fontSize: 26,
          color: "#555",
          lineHeight: 1.6,
          margin: 0,
          paddingLeft: 20,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <li>
          Reads the entire sequence simultaneously to understand the global
          context.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Block Structure:</strong>
          <br />
          Self-Attention <MathInline math="\to" /> Add & Norm{" "}
          <MathInline math="\to" /> Feed Forward <MathInline math="\to" /> Add &
          Norm.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Add & Norm:</strong>A combination
          of Residual connection and Layer Normalization.
        </li>
      </ul>

      <div
        style={{
          padding: "10px 20px",
          backgroundColor: "#f0f4f8",
          borderRadius: 12,
          borderLeft: "6px solid #4a7499",
        }}
      >
        <div style={{ fontWeight: "bold", color: "#0a2f41", marginBottom: 8 }}>
          Layer Normalization:
        </div>
        <MathBlock math="x'_i = \frac{x_i - m}{\sigma}" />
      </div>
    </div>
  </ContentWithImgLayout>
);

const Transformer_Decoder_Details: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Transformer"
    title="Decoder Architecture"
    authorInfo="Transformer"
    textFlex={1}
    imgFlex={1}
    imageNode={
      <img
        src={DecoderImg}
        alt="Decoder Representation"
        style={{
          width: "90%",
          borderRadius: 16,
          objectFit: "contain",
        }}
      />
    }
  >
    <div
      className="ac-fadeIn"
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      <ul
        style={{
          fontSize: 26,
          color: "#555",
          lineHeight: 1.6,
          margin: 0,
          paddingLeft: 20,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <li>
          Acts as an autoregressive translator, referencing the encoder's
          encoded output to generate the sequence token by token.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Masked Self-Attention:</strong>
          Prevents the model from "looking ahead" at future tokens during
          training, ensuring it only attends to previous tokens.
        </li>
        <li>
          <strong style={{ color: "#0a2f41" }}>Two Attention Layers:</strong>
          It first performs Masked Multi-Head Attention, followed by Cross
          Attention with the Encoder.
        </li>
      </ul>
    </div>
  </ContentWithImgLayout>
);

const Transformer_Details: Page = () => (
  <ContentWithImgLayout
    eyebrow="Section 2: Transformer"
    title="Transformer Architecture"
    authorInfo="Transformer"
    textFlex={1}
    imgFlex={1}
    imageNode={
      <img
        src={TransformerImg}
        alt="Transformer Representation"
        style={{
          width: "100%",
          borderRadius: 16,
          objectFit: "contain",
          position: "relative",
          top: "-80px",
          left: "-550px",
        }}
      />
    }
  >
    <div />
  </ContentWithImgLayout>
);

const Cross_Attention: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Transformer"
    title="Cross Attention"
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
          flex: 1.3,
          paddingRight: "30px",
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
            gap: 20,
          }}
        >
          <li>
            The Decoder provides the{" "}
            <strong style={{ color: "#0a2f41" }}>Query (Q)</strong> to extract
            essential features.
          </li>
          <li>
            The Encoder provides its output as the{" "}
            <strong style={{ color: "#0a2f41" }}>Key (K)</strong> and{" "}
            <strong style={{ color: "#0a2f41" }}>Value (V)</strong>.
          </li>
          <li>
            This mechanism allows every decoding step to attend to the entire
            input sequence dynamically.
          </li>
        </ul>
      </div>
      <div className="ac-fadeIn" style={{ animationDelay: "0.2s", flex: 0.7 }}>
        <CrossAttentionDiagram />
      </div>
    </div>
  </ContentLayout>
);

const AT_vs_NAT: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Transformer"
    title="AT v.s. NAT Decoder"
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
      <div style={{ flex: 1, paddingRight: "30px" }}>
        <ul
          className="ac-fadeIn"
          style={{
            fontSize: 26,
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
            <strong style={{ color: "#0a2f41" }}>AT (Autoregressive):</strong>
            Generates tokens one by one. The previous output becomes the current
            input.
          </li>
          <li>
            <strong style={{ color: "#0a2f41" }}>
              NAT (Non-Autoregressive):
            </strong>
            Generates all tokens at once in parallel. It requires an external
            predictor to determine the output length.
          </li>
          <li>
            <strong>Advantage of NAT:</strong> Highly parallelizable, faster
            generation.
          </li>
          <li>
            <strong>Disadvantage of NAT:</strong> Often performs worse than AT
            due to the multi-modality problem.
          </li>
        </ul>
      </div>
      <div className="ac-fadeIn" style={{ animationDelay: "0.2s", flex: 1 }}>
        <ATNATDiagram />
      </div>
    </div>
  </ContentLayout>
);

const Training_And_Tips: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Transformer"
    title="Training & Decoding Tips"
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
        <strong style={{ color: "#0a2f41" }}>Teacher Forcing:</strong> Using the
        ground truth sequence directly as the decoder input to minimize
        cross-entropy loss during training.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Exposure Bias:</strong> The
        mismatch caused because the model sees ground truth during training, but
        its own flawed predictions during inference. Addressed by{" "}
        <em>Scheduled Sampling</em>.
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Beam Search vs Sampling:</strong>
        Beam Search optimizes for the highest probability path (best for
        deterministic tasks); Sampling injects randomness (best for creative
        text or TTS).
      </li>
      <li>
        <strong style={{ color: "#0a2f41" }}>Copy Mechanism:</strong> Allows the
        model to directly replicate out-of-vocabulary segments from the input
        sequence (useful for chat-bots).
      </li>
    </ul>
  </ContentLayout>
);

const BeamSearchTree = () => {
  // SVG drawing for the bottom-up Beam Search tree
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 800 450"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#333" />
          </marker>
          <marker
            id="redArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#e74c3c" />
          </marker>
          <marker
            id="greenArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#2ecc71" />
          </marker>
        </defs>

        {/* Level 1 Edges */}
        <line
          x1="400"
          y1="380"
          x2="290"
          y2="280"
          stroke="#e74c3c"
          strokeWidth="6"
          markerEnd="url(#redArrow)"
        />
        <line
          x1="400"
          y1="380"
          x2="510"
          y2="280"
          stroke="#2ecc71"
          strokeWidth="6"
          markerEnd="url(#greenArrow)"
        />

        {/* Level 2 Edges (from Left Node) */}
        <line
          x1="280"
          y1="260"
          x2="190"
          y2="160"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <line
          x1="280"
          y1="260"
          x2="350"
          y2="160"
          stroke="#e74c3c"
          strokeWidth="6"
          markerEnd="url(#redArrow)"
        />

        {/* Level 2 Edges (from Right Node) */}
        <line
          x1="520"
          y1="260"
          x2="450"
          y2="160"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <line
          x1="520"
          y1="260"
          x2="610"
          y2="160"
          stroke="#2ecc71"
          strokeWidth="6"
          markerEnd="url(#greenArrow)"
        />

        {/* Level 3 Edges */}
        <line
          x1="180"
          y1="140"
          x2="110"
          y2="60"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <line
          x1="180"
          y1="140"
          x2="230"
          y2="60"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />

        <line
          x1="340"
          y1="140"
          x2="300"
          y2="60"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <line
          x1="340"
          y1="140"
          x2="390"
          y2="60"
          stroke="#e74c3c"
          strokeWidth="6"
          markerEnd="url(#redArrow)"
        />

        <line
          x1="460"
          y1="140"
          x2="410"
          y2="60"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <line
          x1="460"
          y1="140"
          x2="510"
          y2="60"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />

        <line
          x1="620"
          y1="140"
          x2="570"
          y2="60"
          stroke="#333"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
        <line
          x1="620"
          y1="140"
          x2="690"
          y2="60"
          stroke="#2ecc71"
          strokeWidth="6"
          markerEnd="url(#greenArrow)"
        />

        {/* Nodes */}
        <circle cx="400" cy="390" r="12" fill="#4a7499" />

        <circle cx="280" cy="270" r="12" fill="#4a7499" />
        <circle cx="520" cy="270" r="12" fill="#4a7499" />

        <circle cx="180" cy="150" r="12" fill="#4a7499" />
        <circle cx="340" cy="150" r="12" fill="#4a7499" />
        <circle cx="460" cy="150" r="12" fill="#4a7499" />
        <circle cx="620" cy="150" r="12" fill="#4a7499" />

        <circle cx="110" cy="50" r="12" fill="#4a7499" />
        <circle cx="230" cy="50" r="12" fill="#4a7499" />
        <circle cx="300" cy="50" r="12" fill="#4a7499" />
        <circle cx="390" cy="50" r="12" fill="#4a7499" />
        <circle cx="410" cy="50" r="12" fill="#4a7499" />
        <circle cx="510" cy="50" r="12" fill="#4a7499" />
        <circle cx="570" cy="50" r="12" fill="#4a7499" />
        <circle cx="690" cy="50" r="12" fill="#4a7499" />

        {/* Text Labels for Branches */}
        <text x="320" y="360" fontSize="22" fill="#333" fontWeight="bold">
          A
        </text>
        <text x="470" y="360" fontSize="22" fill="#333" fontWeight="bold">
          B
        </text>

        <text x="210" y="235" fontSize="20" fill="#333">
          A
        </text>
        <text x="325" y="235" fontSize="20" fill="#333">
          B
        </text>
        <text x="470" y="235" fontSize="20" fill="#333">
          A
        </text>
        <text x="560" y="235" fontSize="20" fill="#333">
          B
        </text>

        <text x="130" y="110" fontSize="18" fill="#333">
          A
        </text>
        <text x="210" y="110" fontSize="18" fill="#333">
          B
        </text>
        <text x="290" y="110" fontSize="18" fill="#333">
          A
        </text>
        <text x="350" y="110" fontSize="18" fill="#333">
          B
        </text>
        <text x="430" y="110" fontSize="18" fill="#333">
          A
        </text>
        <text x="500" y="110" fontSize="18" fill="#333">
          B
        </text>
        <text x="570" y="110" fontSize="18" fill="#333">
          A
        </text>
        <text x="660" y="110" fontSize="18" fill="#333">
          B
        </text>

        {/* Probability Boxes */}
        <g transform="translate(240, 340)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.6
          </text>
        </g>
        <g transform="translate(500, 340)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.4
          </text>
        </g>

        <g transform="translate(140, 220)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.4
          </text>
        </g>
        <g transform="translate(340, 220)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.6
          </text>
        </g>
        <g transform="translate(530, 220)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.9
          </text>
        </g>

        <g transform="translate(220, 100)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.4
          </text>
        </g>
        <g transform="translate(350, 100)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.6
          </text>
        </g>
        <g transform="translate(640, 100)">
          <rect width="60" height="35" fill="#f8c471" rx="4" />
          <text
            x="30"
            y="25"
            fontSize="20"
            fill="#333"
            textAnchor="middle"
            fontWeight="bold"
          >
            0.9
          </text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// Slide Pages
// ==========================================

export const BeamSearchSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Transformer"
    title="Beam Search"
    authorInfo="Transformer"
  >
    <div
      style={{
        position: "absolute",
        top: 40,
        right: 60,
        fontSize: 24,
        color: "#555",
      }}
    >
      Assume there are only two tokens (<MathInline math="V=2" />
      ).
    </div>

    <div
      className="ac-fadeIn"
      style={{ height: "450px", width: "100%", marginTop: "20px" }}
    >
      <BeamSearchTree />
    </div>

    <div
      className="ac-fadeIn"
      style={{ animationDelay: "0.2s", marginTop: "20px", paddingLeft: "40px" }}
    >
      <div style={{ fontSize: 28, marginBottom: 10, color: "#333" }}>
        The <span style={{ color: "#e74c3c", fontWeight: "bold" }}>red</span>{" "}
        path is <i>Greedy Decoding</i>.
      </div>
      <div style={{ fontSize: 28, marginBottom: 10, color: "#333" }}>
        The <span style={{ color: "#2ecc71", fontWeight: "bold" }}>green</span>{" "}
        path is the best one.
      </div>
      <div style={{ fontSize: 28, color: "#333" }}>
        Not possible to check all the paths ... &nbsp;
        <span style={{ fontWeight: "bold", color: "#0a2f41" }}>
          → Beam Search
        </span>
      </div>
    </div>
  </ContentLayout>
);

export const SamplingSlide: Page = () => (
  <ContentLayout
    eyebrow="Section 2: Transformer"
    title="Sampling"
    authorInfo="Transformer"
  >
    <div
      className="ac-fadeIn"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: 24,
          color: "#555",
          fontStyle: "italic",
        }}
      >
        The Curious Case of Neural Text Degeneration
        <br />
        <span style={{ fontSize: 20, color: "#888" }}>
          https://arxiv.org/abs/1904.09751
        </span>
      </div>

      <div
        style={{
          padding: "16px 24px",
          backgroundColor: "#f7f9fa",
          borderRadius: 12,
          borderLeft: "6px solid #0a2f41",
          fontSize: 22,
          lineHeight: 1.6,
          color: "#333",
        }}
      >
        <strong>Context:</strong> In a shocking finding, scientist discovered a
        herd of unicorns living in a remote, previously unexplored valley, in
        the Andes Mountains. Even more surprising to the researchers was the
        fact that the unicorns spoke perfect English.
      </div>

      <div style={{ display: "flex", gap: 40, marginTop: 10 }}>
        {/* Left Column: Beam Search */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: 22,
              borderBottom: "2px solid #ddd",
              paddingBottom: 8,
            }}
          >
            Beam Search, <MathInline math="b=32" />:
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.6, color: "#444" }}>
            "The study, published in the Proceedings of the National Academy of
            Sciences of the United States of America (PNAS), was conducted by
            researchers from the Universidad Nacional Autónoma de México (UNAM)
            and{" "}
            <span style={{ color: "#2980b9" }}>
              the Universidad Nacional Autónoma de México (UNAM/Universidad
              Nacional Autónoma de México/Universidad Nacional Autónoma de
              México/Universidad Nacional Autónoma de México/Universidad
              Nacional Autónoma de ...
            </span>
            "
          </div>
        </div>

        {/* Right Column: Pure Sampling */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: 22,
              borderBottom: "2px solid #ddd",
              paddingBottom: 8,
            }}
          >
            Pure Sampling:
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.6, color: "#444" }}>
            They were cattle called{" "}
            <span style={{ color: "#e74c3c" }}>Bolivian Cavalleros</span>; they
            live in a remote desert{" "}
            <span style={{ color: "#e74c3c" }}>
              uninterrupted by town, and they speak huge, beautiful,
              paradisiacal Bolivian linguistic thing.
            </span>{" "}
            They say,{" "}
            <span style={{ color: "#e74c3c" }}>
              'Lunch, marge.' They don't tell what the lunch is,"
            </span>{" "}
            director Professor Chuperas Omwell told Sky News.{" "}
            <span style={{ color: "#e74c3c" }}>
              "They've only been talking to scientists, like we're being
              interviewed by TV reporters. We don't even stick around to be
              interviewed by TV reporters. Maybe that's how they figured out
              that they're cosplaying as the Bolivian Cavalleros."
            </span>
          </div>
        </div>
      </div>

      <div
        className="ac-fadeIn"
        style={{
          animationDelay: "0.4s",
          marginTop: "auto",
          padding: "16px 24px",
          backgroundColor: "#e3f2fd",
          borderRadius: 12,
          fontSize: 26,
          color: "#0a2f41",
          fontWeight: "bold",
          textAlign: "center",
          position: "relative",
          top: "-120px",
        }}
      >
        Randomness is needed for decoder when generating sequence in some tasks
        (e.g., sentence completion, TTS).
      </div>
    </div>
  </ContentLayout>
);

export const section2Slides: Page[] = [
  createSectionSlide(1, sectionData),
  Seq2Seq_Overview,
  Transformer_Encoder_Details,
  Transformer_Decoder_Details,
  Transformer_Details,
  Cross_Attention,
  AT_vs_NAT,
  Training_And_Tips,
  BeamSearchSlide,
  SamplingSlide,
];
