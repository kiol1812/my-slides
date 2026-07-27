import { type Page } from "@open-slide/core";
import { fill } from "./fill";

interface CoverProps {
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

export const Cover = ({
  title = "Machine Learning Intro",
  subtitle = "Deep Learning Study",
  author = "kiol1812",
  date = "2026/07/22",
}: CoverProps): Page => {
  return () => (
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
          {title}
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
          {subtitle}
        </h2>
        <div className="ac-fadeIn" style={{ fontSize: 36, lineHeight: 1.6 }}>
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
