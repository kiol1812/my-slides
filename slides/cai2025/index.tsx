import { type Page } from "@open-slide/core";
import { type SlideMeta } from "@open-slide/core";

import {
  Cover,
  createTocSlide,
  createSectionSlide,
  Em,
  Hl,
  SlideShell,
  Bullet,
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
} from "../../components/paper/paper-theme";
import { MathInline, MathBlock } from "../../components/paper/paper-math";

const AUTHOR = "Gradient Descent: A Study on Optimization";

const sections: SectionItem[] = [
  { title: "Introduce", authorInfo: AUTHOR },
  { title: "Related Work", authorInfo: AUTHOR },
  { title: "Methodology", authorInfo: AUTHOR },
  { title: "Experiment", authorInfo: AUTHOR },
  { title: "Conclusion", authorInfo: AUTHOR },
];

/* ---------- Cover / Agenda ---------- */

const CoverPage = Cover({
  title:
    "Sele-Perturbed Anomaly-Aware Graph Dynamics for Multivariate Time-Series Anomaly Detection",
  paperInfo:
    "Jinyu Cai, Yuan Xie, Glynnis Lim, Yifang Yin,\nRoger Zimmermann, See-Kiong Ng\n\nNeurIPS 2025 sporlight",
  presenter: "kiol1812",
  date: "2026/09/26",
});

const TocPage = createTocSlide(sections);

/* ---------- Section 1: Background ---------- */

const Section1 = createSectionSlide(0, sections);

const MotivationPage: Page = () => (
  <BulletLayout
    eyebrow={"Section 1 · " + sections[0].title}
    title="Problem definition"
    authorInfo={AUTHOR}
    items={[
      {
        text: (
          <>
            <Em>Time-series anomaly detection (TSAD)</Em> aims to identify
            patterns that deviate from expected behavior over a period of time.
          </>
        ),
      },
      {
        text: "Multivariate TSAD presents serval signigicant challenges",
      },
      {
        text: "The severe data imbalance → self-perturbation module",
        level: 1,
      },
      {
        text: "Static spatio-temporal correlation modeling → anomaly-aware graph construction module",
        level: 1,
      },
      {
        text: 'The "anomaly reconstruction" problem (overlooking anomalies with low reconstruction error, because the overfit towards normal patterns) → spatio-temporal anomaly detection module',
        level: 1,
      },
    ]}
  />
);

/* ---------- Section 2: Method ---------- */

const Section2 = createSectionSlide(1, sections);

const RelatedWorkPage: Page = () => (
  <TimelineLayout
    eyebrow={"Section 2 · " + sections[1].title}
    title="Overview of Related Work"
    authorInfo={AUTHOR}
    items={[
      {
        period: "2021",
        label: "GDN",
        description:
          "pre-constructs a similarity graph to help predict anomalies",
      },
      {
        period: "2022",
        label: "GRELEN",
        description:
          "integrates graph relational learning to improve feature extraction",
      },
      {
        period: "2022",
        label: "Anomaly Transformer and TranAD",
        description:
          "utilize a Transformer architecture to capture long-term dependencies",
      },
      {
        period: "2023",
        label: "TimesNet",
        description:
          "enhances detection accuracy through multi-scale temporal decomposition",
      },
    ]}
    aside={
      <Bullet
        items={[
          { text: <Em>Sequence-centric models</Em> },
          { text: "good at capture long-term dependencies", level: 1 },
          { text: "overlooking inter-variable correlations", level: 1 },
          { text: <Em>Graph-based models</Em> },
          {
            text: "address the limitation of inter-variable correlations",
            level: 1,
          },
          {
            text: "reliance on fixed graph structures renders them less effective in scenarios where time-series relationships evolve dynamically",
            level: 1,
          },
          { text: <Em>Both of above method</Em> },
          {
            text: "rely on strong assumptions and offen struggle with large-scale or high-dimensional data",
            level: 1,
          },
        ]}
      />
    }
    asideWidth={"50%"}
  />
);

/* ---------- Section 3: Experiments ---------- */

const Section3 = createSectionSlide(2, sections);

const ProblemFormulationPage: Page = () => (
  <BulletLayout
    eyebrow={"Section 3 · " + sections[2].title}
    title="Problem Formulation"
    authorInfo={AUTHOR}
    items={[
      {
        text: "time series $\\mathbf{X} = [\\mathbf{x_1}, \\mathbf{x_2}, \\dots, \\mathbf{x_T}]$ collected across $T$ discrete time steps. Each feature vector $\\mathbf{x}_t \\in \\mathbb{R}^d$",
      },
      {
        text: "a time-series dataset $\\mathcal{D} = {\\mathbf{X}_1, \\mathbf{X}_2, \\dots, \\mathbf{X}_N}$ with $N$ samples is constructed by applying sliding window of length $T$ to sample a long time series collected from different sources",
      },
      {
        text: "the goal is to train an anomaly detection model $\\mathcal{F}_\\Theta : \\mathbb{R}^{d \\times T} \\rightarrow \\{0, 1\\}$ parameterized by $\\Theta$ based on $\\mathcal{D}$, where the models is able to predict the anomaly state $\\hat{y} \\in \\{0, 1\\}$ for each test time sequence $\\hat{\\mathbf{X}}_i \\in \\mathcal{D}_{test}$",
      },
      {
        text: "propose Self-Perturbed Anomaly-aware Graph Dynamics (**SPAGD**), an end-to-end TSAD framework",
      },
      {
        text: "==self-perturbation time-series generation== to alleviate data imbalance",
        level: 1,
      },
      {
        text: "==graph construction== to model dynamical inter-variable correlations",
        level: 1,
      },
      {
        text: "a ==spatio-temporal anomaly detection module== to mitigle the anomaly reconstruction problem",
        level: 1,
      },
    ]}
  />
);

/*
const M1Page: Page = () => (
  <SlideShell
    eyebrow={"Section 3 · " + sections[2].title}
    title="Time-Series Generation via Self-Perturbation"
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
      <Bullet
        items={[
          {
            text: "self-perturbation mechanism harnesses the intrinsic imperfections of reconstruction models to generate pseudo-anomalous samples",
          },
          { text: "**key observations**" },
          {
            text: "during early trainin stages, the reconstruction model tends to produce systematic errors when replicating the inpit $\\mathbf{X} \\in \\mathbb{R}^{d \\times T}$ due to its limited representational capacity, Authors argue that these reconstruction errors, which manifest as deviations from the normal data, can serve as effective proxies for genuine anomalies",
            level: 1,
          },
          {
            text: "as the reconstruction model is progressively trained, the magnitude of these errors diminishes, exposing the anomaly detection model to a continuum of deviations. _i.e._, from large, obvious discrepancies to subtle differences",
            level: 1,
          },
          {
            text: "the anomaly detection model progressively refine tis decision boundary by identifying a broader spectrum of potential anomalous patterns",
          },
        ]}
      />
    </div>
  </SlideShell>
);
*/

const M1Page: Page = () => (
  <SlideShell
    eyebrow={"Section 3 · " + sections[2].title}
    title="Time-Series Generation via Self-Perturbation"
    authorInfo={AUTHOR}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        self-perturbation mechanism harnesses the intrinsic imperfections of
        reconstruction models to generate pseudo-anomalous samples
      </p>
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        the reconstruction model is trained on the Dataset{" "}
        <MathInline math="\mathcal{D} = \{\mathbf{X}_i \}_{i=1}^N" /> by
        minimizing:
      </p>
      <MathBlock math="\mathcal{L}_{sp} = \sum_{i=1}^N || \mathbf{X}_i - \text{Tran}_d (\text{Tran}_e (\mathbf{X}_i; \Theta_e); \Theta_d) ||_F^2" />
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        where Frobenius Norm{" "}
        <MathInline math="|| A ||_F^2 = \sum_i^m \sum_j^n |a_{ij}|^2 = \text{Tr}(A^T A)" />{" "}
      </p>
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        as training progresses and reconstruction quality improves,{" "}
        <MathInline math="\hat{\mathbf{X}}" /> will gradually converge towards{" "}
        <MathInline math="\mathbf{X}" />. this progressive refinement can
        dynamically update the quality of pseudo-anomalous smpales throughout
        the training process, wiich ensures that the anomaly detection model
        does not overfit to specific types of anomalies but instead generalizes
        to a broader range of potential anomalies
      </p>
    </div>
  </SlideShell>
);

const M2Page: Page = () => (
  <SlideShell
    eyebrow={"Section 3 · " + sections[2].title}
    title="Anomaly-Awarer Graph Construction, AAGC"
    authorInfo={AUTHOR}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}>
        dynamically adjust the graph structure based on the reconstruction
        residuals of the self-perturbed time series, thereby ensuring that the
        influence of potential anomalies on the spatial relationships can be
        emphasized
      </p>
    </div>
  </SlideShell>
);

const M3Page: Page = () => (
  <SlideShell
    eyebrow={"Section 3 · " + sections[2].title}
    title="Spatio-Temporal Modeling for TSAD"
    authorInfo={AUTHOR}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      <p style={{ fontSize: 32, lineHeight: 1.6, margin: 0 }}></p>
    </div>
  </SlideShell>
);

/* ---------- Section 4: Related Work ---------- */

const Section4 = createSectionSlide(3, sections);

/* ---------- Section 5: Conclusion ---------- */

const Section5 = createSectionSlide(4, sections);

const ConclusionPage: Page = () => (
  <BulletLayout
    eyebrow={"Section 5 · " + sections[4].title}
    title="Conclusion"
    authorInfo={AUTHOR}
    items={[
      {
        text: "authors introduced SPAGD, a new TSAD framework to address serval inherent challenges of Multivariate time-series anomaly detection",
      },
      {
        text: "self-perturbation module: mitigating the class imbalance as well as providing rich auxiliary protential anomalous signals for training",
      },
      {
        text: "anomaly-aware graph construction: dynamically adjust inter-variable correlations for evolving self-perturbed time series",
      },
      {
        text: "anomaly detector: distinguish the normal time series from the self-perturbed ones by modeling noth spatial and temporal dependencies",
      },
      {
        text: "SPAGD presumes a relatively homogeneous sensing landscape, which may not be applicable under highly heterogeneous sreams with asynchoronous sensors or weak inter-variable dependencies",
      },
    ]}
  />
);

const ReferencesPage: Page = () => (
  <ReferencesLayout
    authorInfo={AUTHOR}
    references={[
      "Cai, Jinyu and Xie, Yuan and Lim, Glynnis and Yin, Yifang and Zimmermann, Roger and Ng, See-Kiong (2025). Self-Perturbed Anomaly-Aware Graph Dynamics for Multivariate Time-Series Anomaly Detection",
    ]}
  />
);

const ClosingPage: Page = () => (
  <ClosingSlide
    title="Thank You"
    message="Questions & Discussion"
    contact=""
    authorInfo={AUTHOR}
  />
);

export const meta: SlideMeta = {
  title:
    "Self-Perturbed Anomaly-Aware Graph Dynamics for Multivariate Time-Series Anomaly Detection",
  theme: "paper",
};

export default [
  CoverPage,
  TocPage,
  Section1,
  MotivationPage,
  Section2,
  RelatedWorkPage,
  Section3,
  ProblemFormulationPage,
  M1Page,
  M2Page,
  M3Page,
  Section4,
  Section5,
  ConclusionPage,
  ReferencesPage,
  ClosingPage,
] satisfies Page[];
