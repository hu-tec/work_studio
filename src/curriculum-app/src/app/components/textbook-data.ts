// 가연 엑셀(프롬·번역·윤리 교재) 시드.
// translation: 원본 교재 라벨이 1회만 기재되어 단원 번호 리셋 기준으로 분리.
// view-only — 다른 곳에서 eager import 하면 lazy split 효과가 사라진다.
import raw from "./gayeon-data/textbook.json";

export type TextbookSubject = "prompt" | "ethics" | "translation";

export interface TextbookUnit {
  no: string;
  title: string;
  objective: string;
  theoryPractice: string;
  pageRange: string;
  example: string;
  content: string;
  tools: string;
  emphasis: string;
}

export interface Textbook {
  name: string;
  subject: TextbookSubject;
  units: TextbookUnit[];
}

export interface TextbookTargets {
  prompt: Array<{ track: string; level: string; target: string }>;
  ethics: Array<{ track: string; level: string; age: string }>;
  translation: Array<{ track: string; level: string; target: string }>;
}

export interface EthicsLevelSummary {
  name: string;
  merged: string;
  audience: string;
  content: string;
}

export interface EthicsGradeDiff {
  grade: string;
  objective: string;
  translationExam: string;
  promptExam: string;
}

export interface PromptTextbookMeta {
  name: string;
  target: string;
  goal: string;
  tools: string;
}

export interface EthicsSample {
  title: string;
  lines: string[];
}

interface RawTextbook {
  prompt: Textbook[];
  ethics: Textbook[];
  translation: Textbook[];
  targets: TextbookTargets;
  ethicsLevels: EthicsLevelSummary[];
  ethicsToc: string[];
  ethicsGradeDiff: EthicsGradeDiff[];
  promptMeta: PromptTextbookMeta[];
  promptToc: string[];
  sampleChapters: { ethics: string[]; prompt: string[] };
  ethicsSamples: EthicsSample[];
  ethicsGuidelines: string[];
}

const data = raw as unknown as RawTextbook;

export const TEXTBOOKS_PROMPT: Textbook[] = data.prompt;
export const TEXTBOOKS_ETHICS: Textbook[] = data.ethics;
export const TEXTBOOKS_TRANSLATION: Textbook[] = data.translation;
export const TEXTBOOK_TARGETS: TextbookTargets = data.targets;
export const ETHICS_LEVEL_SUMMARIES: EthicsLevelSummary[] = data.ethicsLevels;
export const ETHICS_COMMON_TOC: string[] = data.ethicsToc;
export const ETHICS_GRADE_DIFF: EthicsGradeDiff[] = data.ethicsGradeDiff;
export const PROMPT_TEXTBOOK_META: PromptTextbookMeta[] = data.promptMeta;
export const PROMPT_COMMON_TOC: string[] = data.promptToc;
export const SAMPLE_CHAPTER_ETHICS: string[] = data.sampleChapters?.ethics || [];
export const SAMPLE_CHAPTER_PROMPT: string[] = data.sampleChapters?.prompt || [];
export const ETHICS_SAMPLES: EthicsSample[] = data.ethicsSamples || [];
export const ETHICS_AUTHORING_GUIDELINES: string[] = data.ethicsGuidelines || [];

export function getTextbooksBySubject(subject: TextbookSubject): Textbook[] {
  if (subject === "prompt") return TEXTBOOKS_PROMPT;
  if (subject === "ethics") return TEXTBOOKS_ETHICS;
  return TEXTBOOKS_TRANSLATION;
}

export const ALL_TEXTBOOKS: Textbook[] = [
  ...TEXTBOOKS_PROMPT,
  ...TEXTBOOKS_ETHICS,
  ...TEXTBOOKS_TRANSLATION,
];

export const TEXTBOOK_SUBJECT_LABEL: Record<TextbookSubject, string> = {
  prompt: "프롬프트",
  ethics: "AI 윤리",
  translation: "번역",
};
