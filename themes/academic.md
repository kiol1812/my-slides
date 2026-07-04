# Academic

## Palette

| Role     | Value             | Notes                                                                      |
| -------- | ----------------- | -------------------------------------------------------------------------- |
| bg       | `#FFFFFF`         | Clean white page background for optimal contrast                           |
| text     | `#0a2f41`         | Deep navy blue for primary text, ensuring high contrast with a softer feel |
| accent   | `#7c9fa8`         | Muted slate blue for accents, links, and visual highlights                 |
| surface  | `#ccd2d8`         | Light gray background for tables or highlighted areas                      |
| panel    | `#EAECEF`         | Recessed surface for chart backgrounds or metrics                          |
| border   | `#DEE2E6`         | Standard border color for confusion matrices and tables                    |
| muted    | `#6C757D`         | Secondary copy, minor labels, and footer text                              |
| subtle   | `rgba(0,0,0,0.5)` | Body secondary copy                                                        |
| onAccent | `#a1718b`         | Text placed on dark blue or primary accent fills                           |

## Typography

- Display font: `"Helvetica Neue", Helvetica, Arial, sans-serif` — weight 700 for headlines and section titles.
- Body font: `"Helvetica Neue", Helvetica, Arial, sans-serif` — weight 400–500 for standard slide bullet points.
- Mono font: `"Courier New", Courier, monospace` — weight 400, used for hyperparameters and system specs.
- Type-scale overrides:
  - Hero title: 96px, `fontWeight: 700`, `letterSpacing: '0em'`, `lineHeight: 1.1`
  - Section heading: 64px, `fontWeight: 700`, `letterSpacing: '0em'`, `lineHeight: 1.2`
  - Body text / List items: 32–36px
  - Table text: 24-28px

## Layout

- Content padding: 60–80px from canvas edges (1920×1080).
- Alignment: Left-aligned titles with multi-column layouts for charts (e.g., Loss and Accuracy comparisons) and tables.
- Grid: Standard table structures for performance metrics, using strict borders.

## Decorative motifs

### Academic Table

Standard table styling heavily utilized for metrics like Precision, Recall, F1-Score, and model hyperparameter iterations.

```tsx
const AcademicTable = ({ children }: { children: React.ReactNode }) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: '"Helvetica Neue", sans-serif',
      fontSize: 28,
      textAlign: "center",
      borderTop: "2px solid #000000",
      borderBottom: "2px solid #000000",
    }}
  >
    {children}
  </table>
);
```

### Confusion Matrix Cell

Styling for heatmaps and confusion matrix displays to emphasize data accuracy.

```tsx
const MatrixCell = ({
  value,
  intensity,
}: {
  value: number;
  intensity: number;
}) => (
  <div
    style={{
      background: `rgba(0, 86, 179, ${intensity})`,
      color: intensity > 0.5 ? "#FFFFFF" : "#000000",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
    }}
  >
    {value}
  </div>
);
```

## Fixed components

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.2,
      margin: 0,
      marginBottom: 40,
      color: "#000000",
      borderBottom: "2px solid #DEE2E6",
      paddingBottom: 16,
    }}
  >
    {children}
  </h1>
);
```

### Footer

The footer anchors the presenter's identity, the project scope, and slide enumeration clearly on every page.

```tsx
import { useSlidePageNumber } from "@open-slide/core";

const Footer = ({ authorInfo = "DL&CV Final Project" }) => {
  const { current } = useSlidePageNumber();
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>- {authorInfo}</span>
      </div>
      <span>{current}</span>
    </div>
  );
};
```

## Motion

- Philosophy: **Instant & Functional** — academic presentations prioritize information delivery over elaborate transitions.

- Reusable keyframes:

```css
@keyframes ac-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.ac-fadeIn {
  opacity: 0;
  animation: ac-fadeIn 0.3s ease forwards;
}
```

## Aesthetic

A clean, high-contrast, data-focused academic presentation style. The canvas relies on a strict white background (`#FFFFFF`) with solid black text (`#000000`) ensuring readability in potentially sub-optimal projection environments. The layout heavily features structured data, utilizing unstyled lists for outlines and rigid tables for evaluation metrics. Visualizations, such as dual-axis charts and confusion matrices, serve as the primary focal points rather than decorative elements.
