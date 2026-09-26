import { type Page } from "@open-slide/core";
import { type SlideMeta } from "@open-slide/core";

// 請依實際檔案位置調整以下 import path
import {
  Cover,
  createTocSlide,
  createSectionSlide,
  SlideShell,
  BulletLayout,
  FigureLayout,
  CompareLayout,
  TableLayout,
  ChartLayout,
  PseudocodeLayout,
  TimelineLayout,
  ReferencesLayout,
  ClosingSlide,
  type SectionItem,
} from "../components/paper/paper-theme";
import { MathInline, MathBlock } from "../components/paper/paper-math";

const AUTHOR = "Gradient Descent: A Study on Optimization";

const sections: SectionItem[] = [
  { title: "Background & Motivation", authorInfo: AUTHOR },
  { title: "Method", authorInfo: AUTHOR },
  { title: "Experiments", authorInfo: AUTHOR },
  { title: "Related Work", authorInfo: AUTHOR },
  { title: "Conclusion", authorInfo: AUTHOR },
];

/* ---------- Cover / Agenda ---------- */

const CoverPage = Cover({
  title: "Gradient Descent:\nA Study on Optimization in Neural Networks",
  paperInfo: "kiol1812 · Dept. of Computer Science\nSubmitted to ... 2026",
  presenter: "kiol1812",
  date: "2026/09/26",
});

const TocPage = createTocSlide(sections);

/* ---------- Section 1: Background ---------- */

const Section1 = createSectionSlide(0, sections);

const MotivationPage: Page = () => (
  <BulletLayout
    eyebrow="Section 1 · Background"
    title="Why Optimization Matters"
    authorInfo={AUTHOR}
    items={[
      {
        text: "Training a neural network is fundamentally a search over parameter space.",
      },
      { text: "The loss surface is high-dimensional and non-convex." },
      {
        text: (
          <>
            We need an update rule that reliably decreases the loss{" "}
            <MathInline math="\mathcal{L}(\theta)" /> at every step.
          </>
        ),
        emphasis: true,
      },
      { text: "Batch size", level: 1 },
      { text: "Learning rate schedule", level: 1 },
    ]}
  />
);

/* ---------- Section 2: Method ---------- */

const Section2 = createSectionSlide(1, sections);

// 自由排版頁：直接用 SlideShell，示範段落文字 + 兩種 MathBlock variant 交錯排列
// 版面完全交給外層的 gap 控制，MathBlock 本身不再帶任何強制留白或底色
const MethodPage: Page = () => (
  <SlideShell
    eyebrow="Section 2 · Method"
    title="Forward Propagation"
    authorInfo={AUTHOR}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        Let weights be <MathInline math="W" />, inputs be{" "}
        <MathInline math="x" />, and bias be <MathInline math="b" />. The
        pre-activation is a simple linear map:
      </p>

      {/* plain：不帶底色，融入頁面留白節奏 */}
      <MathBlock math="z = W \cdot x + b" />

      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        We then apply a non-linear activation, such as the sigmoid function, to
        introduce non-linearity:
      </p>

      {/* panel：想要強調重點公式時才用，底色取自 theme.panel */}
      <MathBlock math="\sigma(z) = \frac{1}{1 + e^{-z}}" variant="panel" />
    </div>
  </SlideShell>
);

const PseudocodePage: Page = () => (
  <PseudocodeLayout
    eyebrow="Section 2 · Method"
    title="Implementing Gradient Descent"
    algorithmTitle="Algorithm 1: Batch Gradient Descent"
    authorInfo={AUTHOR}
    lines={[
      "Input: x, y, learning rate α, epochs E",
      "w, b ← 0, 0",
      "for e ← 1 to E do",
      "    y_pred ← w · x + b",
      "    dw ← (2/n) · Σ x · (y_pred - y)",
      "    db ← (2/n) · Σ (y_pred - y)",
      "    w ← w - α · dw",
      "    b ← b - α · db",
      "end for",
      "return w, b",
    ]}
  />
);

const CompareOptimizersPage: Page = () => (
  <CompareLayout
    eyebrow="Section 2 · Method"
    title="Batch vs. Stochastic Gradient Descent"
    authorInfo={AUTHOR}
    left={{
      heading: "Batch GD",
      content: (
        <>
          <p style={{ fontSize: 28, lineHeight: 1.6, margin: 0 }}>
            Uses the entire dataset to compute each gradient step:
          </p>
          <MathBlock
            math="\nabla_\theta \mathcal{L} = \frac{1}{n}\sum_{i=1}^{n} \nabla_\theta \ell_i"
            size={32}
          />
          <p style={{ fontSize: 24, color: "#6C757D", margin: 0 }}>
            Stable convergence, but expensive per step.
          </p>
        </>
      ),
    }}
    right={{
      heading: "Stochastic GD",
      content: (
        <>
          <p style={{ fontSize: 28, lineHeight: 1.6, margin: 0 }}>
            Uses a single (or mini-batch) sample per step:
          </p>
          <MathBlock
            math="\nabla_\theta \mathcal{L} \approx \nabla_\theta \ell_i"
            size={32}
          />
          <p style={{ fontSize: 24, color: "#6C757D", margin: 0 }}>
            Noisier updates, but far cheaper and often faster to converge.
          </p>
        </>
      ),
    }}
  />
);

/* ---------- Section 3: Experiments ---------- */

const Section3 = createSectionSlide(2, sections);

const ArchitectureFigurePage: Page = () => (
  <FigureLayout
    eyebrow="Section 3 · Experiments"
    title="Network Architecture"
    imageHint="Drop the architecture diagram here"
    caption="A 3-layer MLP: 784 → 128 → 64 → 10, ReLU activations, softmax output."
    authorInfo={AUTHOR}
  />
);

const ResultsTablePage: Page = () => (
  <TableLayout
    eyebrow="Section 3 · Experiments"
    title="Test Set Performance"
    authorInfo={AUTHOR}
    headers={["Optimizer", "Accuracy", "Precision", "Recall", "F1-Score"]}
    rows={[
      ["SGD", "91.2%", "0.90", "0.89", "0.895"],
      ["SGD + Momentum", "93.4%", "0.93", "0.92", "0.925"],
      ["Adam", "95.8%", "0.96", "0.95", "0.955"],
    ]}
    highlightRowIndex={2}
    note="Best result in bold. Averaged over 5 runs."
  />
);

const LossAccuracyChartPage: Page = () => (
  <ChartLayout
    eyebrow="Section 3 · Experiments"
    title="Training Curves"
    authorInfo={AUTHOR}
    charts={[
      {
        node: (
          <span style={{ color: "#6C757D", fontSize: 24 }}>
            Loss chart placeholder
          </span>
        ),
        caption: "Training / validation loss over 50 epochs.",
      },
      {
        node: (
          <span style={{ color: "#6C757D", fontSize: 24 }}>
            Accuracy chart placeholder
          </span>
        ),
        caption: "Training / validation accuracy over 50 epochs.",
      },
    ]}
  />
);

/* ---------- Section 4: Related Work ---------- */

const Section4 = createSectionSlide(3, sections);

const RelatedWorkPage: Page = () => (
  <TimelineLayout
    eyebrow="Section 4 · Related Work"
    title="Evolution of Optimizers"
    authorInfo={AUTHOR}
    items={[
      {
        period: "1951",
        label: "Robbins-Monro",
        description: "First stochastic approximation method.",
      },
      {
        period: "1986",
        label: "Momentum",
        description: "Accelerates SGD along consistent gradient directions.",
      },
      {
        period: "2011",
        label: "AdaGrad",
        description: "Per-parameter adaptive learning rates.",
      },
      {
        period: "2014",
        label: "Adam",
        description: "Combines momentum with adaptive learning rates.",
      },
    ]}
  />
);

/* ---------- Section 5: Conclusion ---------- */

const Section5 = createSectionSlide(4, sections);

const ReferencesPage: Page = () => (
  <ReferencesLayout
    authorInfo={AUTHOR}
    references={[
      "Robbins, H., & Monro, S. (1951). A Stochastic Approximation Method. Annals of Mathematical Statistics.",
      "Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. Nature.",
      "Duchi, J., Hazan, E., & Singer, Y. (2011). Adaptive Subgradient Methods. JMLR.",
      "Kingma, D. P., & Ba, J. (2014). Adam: A Method for Stochastic Optimization. arXiv.",
      "Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.",
      "He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep Residual Learning. CVPR.",
    ]}
  />
);

const ClosingPage: Page = () => (
  <ClosingSlide
    title="Thank You"
    message="Questions & Discussion"
    contact="kiol1812@example.com"
    authorInfo={AUTHOR}
  />
);

export const meta: SlideMeta = {
  title: "Gradient Descent: A Study on Optimization",
  theme: "paper",
};

export default [
  CoverPage,
  TocPage,
  Section1,
  MotivationPage,
  Section2,
  MethodPage,
  PseudocodePage,
  CompareOptimizersPage,
  Section3,
  ArchitectureFigurePage,
  ResultsTablePage,
  LossAccuracyChartPage,
  Section4,
  RelatedWorkPage,
  Section5,
  ReferencesPage,
  ClosingPage,
] satisfies Page[];
