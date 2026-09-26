# Paper

專為論文 / 研究報告簡報設計的主題。延續 Academic 主題的配色（白底、深藍字、灰藍 accent），
但重新梳理了字體、Footer、頁面元件的一致性問題，並補上論文報告常缺的版面（虛擬碼、時間軸、參考文獻、結尾頁）。

## Palette

| Role       | Value                | Notes                                                               |
| ---------- | -------------------- | ------------------------------------------------------------------- |
| bg         | `#FFFFFF`            | 主要頁面背景                                                        |
| text       | `#0A2F41`            | 主要文字，深藍近黑，對比度高但不刺眼                                |
| accent     | `#7C9FA8`            | 灰藍 accent，用於連結、圖表強調、時間軸圓點                         |
| accentDark | `#4F7580`            | 較深的 accent，用於需要在白底上有足夠對比的強調文字（如時間軸年份） |
| surface    | `#F4F6F7`            | 圖表容器 / 卡片底色                                                 |
| panel      | `#EAECEF`            | 虛擬碼區塊、圖表區塊背景                                            |
| border     | `#DEE2E6`            | 表格框線、分隔線                                                    |
| muted      | `#6C757D`            | 次要文字、圖說、頁碼、Footer                                        |
| subtle     | `rgba(10,47,65,0.6)` | 內文次要說明文字（以 text 色為基底做透明度）                        |
| onAccent   | `#FFFFFF`            | 疊在 accent 實色色塊上的文字（例如表格高亮列標籤、強調徽章）        |

> 修正說明：原 Academic 主題的 `onAccent: #a1718b`（莫夫紫）在色票中找不到對應的深色色塊可疊加，
> 屬孤立殘留值。新主題把它重新定義為「疊在 accent 實色塊上要用的顏色」，並固定為白色以確保對比。

## Typography

- Display / Body font：`"Helvetica Neue", Helvetica, Arial, sans-serif`。全站統一，不再有頁面
  意外變成等寬字體的問題。
- Mono font：`"JetBrains Mono", "Fira Code", "Courier New", monospace`，**僅**用於虛擬碼、
  hyperparameter、程式碼片段。
- Type-scale：
  - Cover 標題：80px / `fontWeight: 700`
  - 內容頁標題（SlideShell 標題）：72px / `fontWeight: 700` / `letterSpacing: -0.01em`
  - Section 分隔頁標題：96px / `fontWeight: 800`
  - 條列 / 內文：28–34px
  - 表格內文：24–26px
  - 圖說 / Caption：20–22px，`color: muted`
  - Footer / 頁碼：18px

## Layout

- 內容留白：120px（上）/ 140px（左右）標準邊界，14:9 (1920×1080) 畫布。
- 所有內容頁共用 `SlideShell`：Eyebrow + 標題 + 內容區 + Footer，確保每頁節奏一致。
- 雙欄類版面（Compare / Chart）欄距固定 40–80px，避免每次手動調 flex 比例。

## 元件總覽

### 基礎 / 結構

- `fill`：頁面底層樣式（背景、字體、overflow）。
- `Eyebrow`：小標籤文字。
- `Footer`：作者資訊 + 頁碼，含左右裝飾線，頁碼計算已修正。
- `SlideShell`：內容頁共用外殼（Eyebrow + 標題 + Footer），所有 `*Layout` 元件都建立在此之上。

### 開場 / 導覽 / 分節

- `Cover`：封面頁。
- `createTocSlide`：Agenda / Outline 頁。
- `createSectionSlide` / `SectionLayout`：章節分隔頁。

### 內容版面（本次重點）

| Component       | 用途                                               |
| --------------- | -------------------------------------------------- |
| `BulletLayout`  | 純文字條列，支援兩層縮排與強調字                   |
| `FigureLayout`  | 單一圖片為主，圖說可放上方或下方                   |
| `CompareLayout` | 兩欄對比（baseline vs proposed、before vs after）  |
| `TableLayout`   | 表格為主，內建 `DataTable`，支援標示最佳結果那一列 |
| `ChartLayout`   | 1–2 張圖表並排（Loss / Accuracy 這類雙圖比較）     |

### 資料展示輔助元件

- `AcademicTable`：原始表格外殼（維持彈性，接受自訂 `<thead>` / `<tbody>`）。
- `DataTable`：`AcademicTable` 的便利版，直接吃 `headers` / `rows` 陣列，並支援 `highlightRowIndex`。
- `CaptionText` / `ColumnHeading`：圖說與欄位標題的共用樣式。

### 新增版面（本輪選定）

| Component          | 用途                                                  |
| ------------------ | ----------------------------------------------------- |
| `PseudocodeLayout` | 演算法虛擬碼區塊，行號 + 等寬字 + panel 底色          |
| `TimelineLayout`   | Related Work / 時間軸，年份 + 標籤 + 說明，垂直時間線 |
| `ReferencesLayout` | 參考文獻頁，`[編號]` 格式，支援單欄或雙欄自動分配     |
| `ClosingSlide`     | 結尾頁，標題 + 訊息 + 可選聯絡資訊                    |

## Decorative motifs

### Pseudocode block

等寬字、行號靠右對齊、`panel` 底色、`border` 描邊，縮排以字串前導空白 + `whiteSpace: pre` 處理。

### Timeline

垂直線用 `border` 色，圓點用 `accent` 色，年份文字用 `accentDark` 確保白底可讀。

## Motion

- 哲學不變：**即時且功能導向**，維持 `ac-fadeIn` 這組簡單淡入，僅用在 Cover / Section /
  Closing 這類低頻率出現的頁面，內容頁（表格、圖表、條列）不加動畫，避免資訊延遲呈現。

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

延續原本乾淨、高對比、資料導向的學術簡報調性：白底、深藍字、灰藍 accent，表格與圖表是主角，
裝飾元素降到最低。這一版的目標是「一致性」——同一套字體、同一個內容外殼（`SlideShell`）、
同一套色票變數貫穿所有頁面，減少每次寫新頁面時要重新決定排版細節的成本。

## 數學公式（`paper-math.tsx`）

- `MathInline`：行內公式，`color: inherit`，僅保留最小 padding，字級可用 `size` 覆寫。
- `MathBlock`：區塊公式，**預設 `variant="plain"`**——不帶 padding、背景、陰影或 margin，
  留白完全交給外層版面的 `gap` 決定，可以直接放進任何 `*Layout` 而不會多出一圈不屬於當前頁面
  設計的留白。需要視覺上特別強調時才用 `variant="panel"`，此時底色改用 `paperTheme.color.panel`
  而非寫死的灰色，維持跟整體色票一致。

> 修正說明：原本 `MathBlock` 強制 `padding: 40px`、`background: #f8f9fa`、
> `boxShadow`、`margin: 20px 0`，導致公式框永遠自帶一圈灰底，無法依頁面留白/密度做調整。

## Demo（`paper.demo.tsx`）

`paper.demo.tsx` 示範了所有版面（Cover、Toc、Section、Bullet、Figure、Compare、Table、
Chart、Pseudocode、Timeline、References、Closing）串成一份完整簡報，並展示 `MathInline` /
`MathBlock` 兩種 variant 的用法，包含直接使用 `SlideShell`（不透過任何 `*Layout`）自行排列
段落文字與公式的自由排版寫法。使用前請依實際檔案位置調整檔頭的 import path。

## 尚未實作

- Pipeline / 架構流程圖容器
- 重點 Highlight / Callout 框
- Ablation 表格變體（最佳列標示已在 `DataTable` 提供，但尚無專屬統計符號如 `↑ / ↓ / ±`）
- 完整組裝版 Confusion Matrix（含行列標籤）
