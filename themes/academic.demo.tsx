import { type Page, useSlidePageNumber } from "@open-slide/core";
import { ImagePlaceholder, type SlideMeta } from "@open-slide/core";

const fill = {
  width: "100%",
  height: "100%",
  background: "#FFFFFF",
  color: "#0a2f41",
  fontFamily: 'JetBrains Mono, "Fira Code", monospace',
  overflow: "hidden",
  position: "relative",
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 18,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "#6C757D",
      fontWeight: 600,
    }}
  >
    {children}
  </div>
);

const Footer = ({ authorInfo = "DL&CV Final Project" }) => {
  const { current } = useSlidePageNumber();

  const lineStyle = {
    height: "1px",
    backgroundColor: "#7c9fa8",
    margin: "0 15px",
    opacity: 0.8,
  };

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 30,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: '"Helvetica Neue", sans-serif',
        fontSize: 20,
        color: "#6C757D",
      }}
    >
      <div style={{ ...lineStyle, flex: 1 }} />
      <span>{authorInfo}</span>
      <div style={{ ...lineStyle, flex: 8 }} />
      <span>{current}</span>
      <div style={{ ...lineStyle, flex: 1 }} />
    </div>
  );
};
const Cover: Page = () => (
  <div style={fill}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "160px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        className="ac-fadeIn"
        style={{ fontSize: 80, fontWeight: 700, marginBottom: 24 }}
      >
        DL&CV Final Project
      </h1>
      <h2
        className="ac-fadeIn"
        style={{
          fontSize: 56,
          fontWeight: 500,
          color: "#6C757D",
          marginBottom: 64,
        }}
      >
        MNIST Digital Recognition
      </h2>
      <div className="ac-fadeIn" style={{ fontSize: 36, lineHeight: 1.6 }}>
        <p>kiol1812</p>
        <p>2026/06/09</p>
      </div>
      <Footer authorInfo="DL&CV Final Project" />
    </div>
  </div>
);

const ContentWitnImg: Page = () => (
  <div style={fill}>
    <div
      style={{
        padding: "120px 140px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* ===== Header ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          marginBottom: 60,
        }}
      >
        <Eyebrow>Image placeholder demo</Eyebrow>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 1500,
          }}
        >
          Drop an image to try it.
        </h1>
      </div>

      {/* ===== Contents ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 80,
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        {/* Left: texts */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 26,
              color: "#555",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Drag any image file from your file manager onto the placeholder
            right — it uploads to{" "}
            <code
              style={{
                background: "#EFEEEA",
                padding: "2px 8px",
                borderRadius: 6,
              }}
            >
              slides/slide-name/assets/
            </code>{" "}
            and slots in automatically.
          </p>
        </div>

        {/* Right: image */}
        <div style={{ flex: 1, display: "flex" }}>
          <ImagePlaceholder
            hint="Side image — drop a JPG or PNG here"
            width={800}
            height={500}
          />
        </div>
      </div>
    </div>
  </div>
);

export default [Cover, ContentWitnImg];
