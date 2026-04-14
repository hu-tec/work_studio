// 가연 엑셀(시험 채점기준표·점수표) 시드.
// view-only — 다른 곳에서 eager import 하면 lazy split 효과가 사라진다.
import raw from "./gayeon-data/grading.json";

export interface GradingSub {
  name: string;
  fields: Record<string, string>;
}

export type GradingKey = "정보성" | "적절성" | "효율성" | "윤리성" | "보안성";

export interface GradingCategory {
  key: GradingKey;
  name: string;
  weight: string;
  definition: string;
  bonus: string;
  penalty: string;
  guideline: string;
  detailed: string;
  sub: GradingSub[];
}

export interface OverallScaleRow {
  key: GradingKey;
  name: string;
  scales: string[]; // 5 level labels
  points: string[]; // 5 point values (0/1/2~3점/4/5)
}

export interface DetailedFormItem {
  name: string;
  weight: string;
}

export interface DetailedFormSection {
  key: GradingKey;
  category: string;
  items: DetailedFormItem[];
}

interface RawGrading {
  categories: GradingCategory[];
  overall: OverallScaleRow[];
  detailedForm: DetailedFormSection[];
}

const data = raw as unknown as RawGrading;

export const GRADING_CATEGORIES: GradingCategory[] = data.categories;
export const OVERALL_SCORE_TABLE: OverallScaleRow[] = data.overall;
export const DETAILED_SCORE_FORM: DetailedFormSection[] = data.detailedForm;

export const GRADING_TOTAL_WEIGHT = GRADING_CATEGORIES.reduce((s, c) => {
  const v = parseInt(c.weight);
  return isNaN(v) ? s : s + v;
}, 0);

export const GRADING_COLORS: Record<GradingKey, { bg: string; bd: string; tx: string; dot: string }> = {
  "정보성": { bg: "bg-blue-50", bd: "border-blue-300", tx: "text-blue-700", dot: "bg-blue-500" },
  "적절성": { bg: "bg-emerald-50", bd: "border-emerald-300", tx: "text-emerald-700", dot: "bg-emerald-500" },
  "효율성": { bg: "bg-amber-50", bd: "border-amber-300", tx: "text-amber-700", dot: "bg-amber-500" },
  "윤리성": { bg: "bg-rose-50", bd: "border-rose-300", tx: "text-rose-700", dot: "bg-rose-500" },
  "보안성": { bg: "bg-violet-50", bd: "border-violet-300", tx: "text-violet-700", dot: "bg-violet-500" },
};
