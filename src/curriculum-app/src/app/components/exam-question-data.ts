// 가연 엑셀(분류별 시험문제) 시드.
// STRUCTURED_QUESTIONS = "문제은행 1" 시트의 1~4차 프롬 차수별 문항(31건)
// CATEGORY_BANK        = "문제은행" 시트의 난이도(대/중/소) 라벨링 문항(50건)
// 기존 ANSWER_BANK(question-data.ts)와 별개로 공존.
// view-only — 다른 곳에서 eager import 하면 lazy split 효과가 사라진다.
import raw from "./gayeon-data/exam-questions.json";

export interface StructuredQuestion {
  seq: number;
  category: string;
  problem: string;
  prompt1: string;
  prompt2: string;
  prompt3: string;
  prompt4: string;
}

export interface CategoryBankItem {
  seq: number;
  label: string;
  content: string;
}

export interface BankGuideline {
  source: string;
  large: string;
  medium: string;
  small: string;
  instructions: string;
}

interface RawBank {
  structured: StructuredQuestion[];
  categoryBank: CategoryBankItem[];
  guideline: BankGuideline;
}

const data = raw as unknown as RawBank;

export const STRUCTURED_QUESTIONS: StructuredQuestion[] = data.structured;
export const CATEGORY_BANK: CategoryBankItem[] = data.categoryBank;
export const BANK_GUIDELINE: BankGuideline = data.guideline;

export const STRUCTURED_CATEGORIES: string[] = Array.from(
  new Set(STRUCTURED_QUESTIONS.map((q) => q.category).filter(Boolean))
);

export const CATEGORY_BANK_LABELS: string[] = Array.from(
  new Set(CATEGORY_BANK.map((q) => q.label).filter(Boolean))
);

export const QUESTION_STAGE_LABELS = {
  problem: "문제 원문",
  prompt1: "1차 프롬",
  prompt2: "2차 프롬",
  prompt3: "3차 프롬",
  prompt4: "4차 프롬",
} as const;
