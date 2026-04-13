// ════════════════════════════════════════════
// 콘텐츠 모드 — curriculum / questions / textbooks
// ════════════════════════════════════════════
//
// 커리큘럼의 5탭 셸(편집/전체펼치기/규정/저장목록/대시보드)을
// 문제은행·교재에도 literal하게 동일 적용하기 위한 모드 스위처.
//
// 원칙:
//   - 셸·필터·검색·컴팩트 UI·분류·급수 = 3모드 완전 공통
//   - 콘텐츠·전체펼치기·규정 데이터 = 모드별 분리
//   - 커리큘럼 외 모드는 원본 데이터 미제공 → 빈 상태 렌더
//   - localStorage 키 모드별 분리 (섞이지 않도록)
// ════════════════════════════════════════════

export type ContentMode = "curriculum" | "questions" | "textbooks";

export const CONTENT_MODES: ContentMode[] = ["curriculum", "questions", "textbooks"];

export const MODE_LABEL: Record<ContentMode, string> = {
  curriculum: "커리큘럼",
  questions: "문제은행",
  textbooks: "교재",
};

export const MODE_SHORT: Record<ContentMode, string> = {
  curriculum: "커리",
  questions: "문제",
  textbooks: "교재",
};

export const MODE_STORAGE_KEY: Record<ContentMode, string> = {
  curriculum: "instructor-curriculum-data-v8",
  questions: "instructor-questions-data-v1",
  textbooks: "instructor-textbooks-data-v1",
};

export function detectMode(): ContentMode {
  if (typeof window === "undefined") return "curriculum";
  try {
    const p = new URLSearchParams(window.location.search);
    const m = p.get("mode");
    if (m === "questions" || m === "textbooks" || m === "curriculum") return m;
  } catch {}
  return "curriculum";
}

export function getStorageKey(mode: ContentMode): string {
  return MODE_STORAGE_KEY[mode];
}
