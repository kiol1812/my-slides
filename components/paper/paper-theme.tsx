import { ImagePlaceholder } from "@open-slide/core";
import { useSlidePageNumber } from "@open-slide/core";
import { type Page } from "@open-slide/core";

import { ReactNode } from "react";

/* =========================================================================
 * Design tokens
 * ========================================================================= */

export const paperTheme = {
  color: {
    bg: "#FFFFFF",
    text: "#0A2F41",
    accent: "#7C9FA8",
    accentDark: "#4F7580",
    surface: "#F4F6F7",
    panel: "#EAECEF",
    border: "#DEE2E6",
    muted: "#6C757D",
    subtle: "rgba(10,47,65,0.6)",
    onAccent: "#FFFFFF",
  },
  font: {
    display: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
  },
} as const;

/* =========================================================================
 * Base / structural primitives
 * ========================================================================= */

export const fill = {
  width: "100%",
  height: "100%",
  background: paperTheme.color.bg,
  color: paperTheme.color.text,
  fontFamily: paperTheme.font.body,
  overflow: "hidden",
  position: "relative",
} as const;

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 18,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: paperTheme.color.muted,
      fontWeight: 600,
    }}
  >
    {children}
  </div>
);

export const CaptionText = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      fontSize: 20,
      color: paperTheme.color.muted,
      fontStyle: "italic",
      textAlign: "center",
      margin: 0,
      lineHeight: 1.5,
    }}
  >
    {children}
  </p>
);

export const ColumnHeading = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 30,
      fontWeight: 700,
      color: paperTheme.color.accentDark,
      borderBottom: `2px solid ${paperTheme.color.border}`,
      paddingBottom: 12,
      marginBottom: 4,
    }}
  >
    {children}
  </div>
);

/**
 * Footer — single source of truth. Page-number math fixed (no more `-1`).
 */
export const Footer = ({
  authorInfo = "Paper Presentation",
}: {
  authorInfo?: string;
}) => {
  const { current } = useSlidePageNumber();
  const line = {
    height: 1,
    backgroundColor: paperTheme.color.accent,
    opacity: 0.5,
  } as const;

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 30,
        display: "flex",
        alignItems: "center",
        gap: 15,
        fontFamily: paperTheme.font.body,
        fontSize: 18,
        color: paperTheme.color.muted,
      }}
    >
      <div style={{ ...line, flex: 1 }} />
      <span>{authorInfo}</span>
      <div style={{ ...line, flex: 6 }} />
      <span>{current}</span>
    </div>
  );
};

/**
 * SlideShell — shared shell for every content page: Eyebrow + Title + body + Footer.
 * All *Layout components below are thin wrappers around this.
 */
interface SlideShellProps {
  eyebrow: ReactNode;
  title: ReactNode;
  authorInfo?: string;
  children: ReactNode;
}

export const SlideShell = ({
  eyebrow,
  title,
  authorInfo = "Paper Presentation",
  children,
}: SlideShellProps) => (
  <div style={fill}>
    <div
      style={{
        padding: "120px 140px 0 140px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          marginBottom: 56,
        }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {title}
        </h1>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          paddingBottom: 100,
        }}
      >
        {children}
      </div>
    </div>
    <Footer authorInfo={authorInfo} />
  </div>
);

/* =========================================================================
 * Cover / Agenda / Section divider
 * ========================================================================= */

interface CoverProps {
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

export const Cover = ({
  title = "Paper Title",
  subtitle = "Research Presentation",
  author = "Author",
  date = "2026/09/26",
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
            color: paperTheme.color.muted,
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

export interface SectionItem {
  title: string;
  subtitle?: string;
  authorInfo?: string;
}

export const createTocSlide = (sectionData: SectionItem[]): Page => {
  return () => (
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <Eyebrow>Agenda</Eyebrow>
          <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0 }}>
            Outline
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 36,
            flex: 1,
            paddingLeft: 20,
          }}
        >
          {sectionData.map((item, index) => (
            <div
              key={index}
              className="ac-fadeIn"
              style={{ display: "flex", alignItems: "center", gap: 40 }}
            >
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  color: paperTheme.color.muted,
                  opacity: 0.7,
                }}
              >
                0{index + 1}
              </span>
              <span style={{ fontSize: 44, fontWeight: 500 }}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer
        authorInfo={sectionData[0]?.authorInfo ?? "Paper Presentation"}
      />
    </div>
  );
};

interface SectionLayoutProps {
  sectionNumber: string | number;
  title: ReactNode;
  subtitle?: ReactNode;
  authorInfo?: string;
}

const SectionLayout = ({
  sectionNumber,
  title,
  subtitle,
  authorInfo = "Paper Presentation",
}: SectionLayoutProps) => {
  const formattedNumber =
    typeof sectionNumber === "number" && sectionNumber < 10
      ? `0${sectionNumber}`
      : sectionNumber;

  return (
    <div style={fill}>
      <div
        style={{
          padding: "120px 140px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          boxSizing: "border-box",
          gap: 80,
        }}
      >
        <div
          className="ac-fadeIn"
          style={{
            fontSize: 360,
            fontWeight: 900,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: `6px ${paperTheme.color.text}`,
            opacity: 0.15,
          }}
        >
          {formattedNumber}
        </div>
        <div
          style={{
            width: 4,
            height: 280,
            backgroundColor: paperTheme.color.accent,
            opacity: 0.5,
          }}
        />
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}
        >
          <Eyebrow>Chapter {formattedNumber}</Eyebrow>
          <h1
            className="ac-fadeIn"
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="ac-fadeIn"
              style={{
                fontSize: 36,
                color: paperTheme.color.muted,
                lineHeight: 1.5,
                margin: 0,
                marginTop: 16,
                fontWeight: 400,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <Footer authorInfo={authorInfo} />
    </div>
  );
};

export const createSectionSlide = (
  index: number,
  sectionData: SectionItem[],
): Page => {
  const data = sectionData[index];
  return () => (
    <SectionLayout
      sectionNumber={index + 1}
      title={data.title}
      subtitle={data.subtitle}
      authorInfo={data.authorInfo}
    />
  );
};

/* =========================================================================
 * Table primitives
 * ========================================================================= */

export const AcademicTable = ({ children }: { children: ReactNode }) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: paperTheme.font.body,
      fontSize: 26,
      textAlign: "center",
      borderTop: `2px solid ${paperTheme.color.text}`,
      borderBottom: `2px solid ${paperTheme.color.text}`,
    }}
  >
    {children}
  </table>
);

export interface DataTableProps {
  headers: string[];
  rows: (string | number)[][];
  highlightRowIndex?: number;
  align?: "center" | "left";
}

/** Convenience wrapper over AcademicTable for the common headers/rows case. */
export const DataTable = ({
  headers,
  rows,
  highlightRowIndex,
  align = "center",
}: DataTableProps) => (
  <AcademicTable>
    <thead>
      <tr>
        {headers.map((h, i) => (
          <th
            key={i}
            style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${paperTheme.color.border}`,
              fontWeight: 700,
              textAlign: align,
            }}
          >
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, ri) => {
        const isHighlight = ri === highlightRowIndex;
        return (
          <tr
            key={ri}
            style={{
              background: isHighlight ? paperTheme.color.panel : "transparent",
              fontWeight: isHighlight ? 700 : 400,
            }}
          >
            {row.map((cell, ci) => (
              <td
                key={ci}
                style={{
                  padding: "14px 20px",
                  borderBottom: `1px solid ${paperTheme.color.border}`,
                  textAlign: align,
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </AcademicTable>
);

/* =========================================================================
 * Content layouts (core five)
 * ========================================================================= */

export interface BulletItem {
  text: ReactNode;
  level?: 0 | 1;
  emphasis?: boolean;
}

export interface BulletLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  items: BulletItem[];
  authorInfo?: string;
}

export const BulletLayout = ({
  eyebrow,
  title,
  items,
  authorInfo,
}: BulletLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 28,
        justifyContent: "center",
        flex: 1,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            marginLeft: item.level === 1 ? 60 : 0,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              marginTop: 14,
              flexShrink: 0,
              borderRadius: item.level === 1 ? 2 : "50%",
              background:
                item.level === 1
                  ? paperTheme.color.muted
                  : paperTheme.color.accent,
            }}
          />
          <span
            style={{
              fontSize: item.level === 1 ? 28 : 34,
              fontWeight: item.emphasis ? 700 : 400,
              lineHeight: 1.4,
            }}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </SlideShell>
);

export interface FigureLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  imageNode?: ReactNode;
  imageHint?: string;
  caption?: ReactNode;
  captionPosition?: "top" | "bottom";
  authorInfo?: string;
}

export const FigureLayout = ({
  eyebrow,
  title,
  imageNode,
  imageHint = "Figure — drop image here",
  caption,
  captionPosition = "bottom",
  authorInfo,
}: FigureLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 24 }}>
      {captionPosition === "top" && caption && <CaptionText>{caption}</CaptionText>}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imageNode ?? <ImagePlaceholder hint={imageHint} />}
      </div>
      {captionPosition !== "top" && caption && <CaptionText>{caption}</CaptionText>}
    </div>
  </SlideShell>
);

export interface CompareLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  left: { heading: ReactNode; content: ReactNode };
  right: { heading: ReactNode; content: ReactNode };
  divider?: boolean;
  authorInfo?: string;
}

export const CompareLayout = ({
  eyebrow,
  title,
  left,
  right,
  divider = true,
  authorInfo,
}: CompareLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div style={{ display: "flex", flex: 1, gap: 0 }}>
      <div
        style={{
          flex: 1,
          paddingRight: 40,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <ColumnHeading>{left.heading}</ColumnHeading>
        {left.content}
      </div>
      {divider && (
        <div style={{ width: 2, background: paperTheme.color.border }} />
      )}
      <div
        style={{
          flex: 1,
          paddingLeft: 40,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <ColumnHeading>{right.heading}</ColumnHeading>
        {right.content}
      </div>
    </div>
  </SlideShell>
);

export interface TableLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  headers: string[];
  rows: (string | number)[][];
  highlightRowIndex?: number;
  note?: ReactNode;
  authorInfo?: string;
}

export const TableLayout = ({
  eyebrow,
  title,
  headers,
  rows,
  highlightRowIndex,
  note,
  authorInfo,
}: TableLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <DataTable headers={headers} rows={rows} highlightRowIndex={highlightRowIndex} />
      {note && <CaptionText>{note}</CaptionText>}
    </div>
  </SlideShell>
);

export interface ChartItem {
  node: ReactNode;
  caption?: ReactNode;
}

export interface ChartLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  charts: ChartItem[];
  authorInfo?: string;
}

export const ChartLayout = ({
  eyebrow,
  title,
  charts,
  authorInfo,
}: ChartLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div style={{ flex: 1, display: "flex", gap: 60, alignItems: "stretch" }}>
      {charts.map((c, i) => (
        <div
          key={i}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: paperTheme.color.panel,
              borderRadius: 8,
            }}
          >
            {c.node}
          </div>
          {c.caption && <CaptionText>{c.caption}</CaptionText>}
        </div>
      ))}
    </div>
  </SlideShell>
);

/* =========================================================================
 * New layouts: Pseudocode / Timeline / References / Closing
 * ========================================================================= */

export interface PseudocodeLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  algorithmTitle?: string;
  /** One entry per line. Use leading spaces in the string for indentation. */
  lines: string[];
  authorInfo?: string;
}

export const PseudocodeLayout = ({
  eyebrow,
  title,
  algorithmTitle = "Algorithm 1",
  lines,
  authorInfo,
}: PseudocodeLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "100%",
          background: paperTheme.color.panel,
          border: `1px solid ${paperTheme.color.border}`,
          borderRadius: 8,
          padding: "32px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: paperTheme.font.body,
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 20,
          }}
        >
          {algorithmTitle}
        </div>
        <div style={{ fontFamily: paperTheme.font.mono, fontSize: 22, lineHeight: 1.9 }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: 20 }}>
              <span
                style={{
                  color: paperTheme.color.muted,
                  width: 32,
                  textAlign: "right",
                  flexShrink: 0,
                  userSelect: "none",
                }}
              >
                {i + 1}
              </span>
              <span style={{ whiteSpace: "pre" }}>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideShell>
);

export interface TimelineItem {
  period: string;
  label: ReactNode;
  description?: ReactNode;
}

export interface TimelineLayoutProps {
  eyebrow: ReactNode;
  title: ReactNode;
  items: TimelineItem[];
  authorInfo?: string;
}

export const TimelineLayout = ({
  eyebrow,
  title,
  items,
  authorInfo,
}: TimelineLayoutProps) => (
  <SlideShell eyebrow={eyebrow} title={title} authorInfo={authorInfo}>
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingLeft: 26,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 31,
          top: 10,
          bottom: 10,
          width: 2,
          background: paperTheme.color.border,
        }}
      />
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 32, padding: "16px 0" }}>
          <div style={{ position: "relative", width: 12, flexShrink: 0 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: paperTheme.color.accent,
                marginTop: 8,
              }}
            />
          </div>
          <div
            style={{
              width: 140,
              flexShrink: 0,
              fontWeight: 700,
              fontSize: 24,
              color: paperTheme.color.accentDark,
            }}
          >
            {item.period}
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 28, fontWeight: 600 }}>{item.label}</div>
            {item.description && (
              <div style={{ fontSize: 22, color: paperTheme.color.muted }}>
                {item.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </SlideShell>
);

export interface ReferencesLayoutProps {
  title?: string;
  references: string[];
  columns?: 1 | 2;
  authorInfo?: string;
}

export const ReferencesLayout = ({
  title = "References",
  references,
  columns = 2,
  authorInfo = "Paper Presentation",
}: ReferencesLayoutProps) => {
  const mid = Math.ceil(references.length / columns);
  const cols =
    columns === 2 ? [references.slice(0, mid), references.slice(mid)] : [references];

  return (
    <div style={fill}>
      <div
        style={{
          padding: "120px 140px 0 140px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            margin: 0,
            marginBottom: 56,
            borderBottom: `2px solid ${paperTheme.color.border}`,
            paddingBottom: 16,
          }}
        >
          {title}
        </h1>
        <div style={{ flex: 1, display: "flex", gap: 80, paddingBottom: 100 }}>
          {cols.map((col, ci) => (
            <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
              {col.map((ref, i) => {
                const num = ci === 0 ? i + 1 : mid + i + 1;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: paperTheme.color.muted, flexShrink: 0 }}>
                      [{num}]
                    </span>
                    <span>{ref}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Footer authorInfo={authorInfo} />
    </div>
  );
};

export interface ClosingSlideProps {
  title?: string;
  message?: string;
  contact?: string;
  authorInfo?: string;
}

export const ClosingSlide = ({
  title = "Thank You",
  message = "Questions & Discussion",
  contact,
  authorInfo = "Paper Presentation",
}: ClosingSlideProps) => (
  <div style={fill}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 24,
      }}
    >
      <h1 className="ac-fadeIn" style={{ fontSize: 88, fontWeight: 700, margin: 0 }}>
        {title}
      </h1>
      <p
        className="ac-fadeIn"
        style={{ fontSize: 40, color: paperTheme.color.muted, margin: 0 }}
      >
        {message}
      </p>
      {contact && (
        <p
          className="ac-fadeIn"
          style={{ fontSize: 26, color: paperTheme.color.accentDark, marginTop: 40 }}
        >
          {contact}
        </p>
      )}
    </div>
    <Footer authorInfo={authorInfo} />
  </div>
);
