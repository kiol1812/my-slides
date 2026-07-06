import { useSlidePageNumber } from "@open-slide/core";

export const Footer = ({ authorInfo = "DL&CV Final Project" }) => {
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
      <span>{current - 1}</span>
      <div style={{ ...lineStyle, flex: 1 }} />
    </div>
  );
};
