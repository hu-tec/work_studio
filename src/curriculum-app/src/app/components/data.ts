import type { SavedCurriculum } from "./types";

// ─── Step 1: 분류체계 ───
export const CATEGORY_TREE: Record<string, Record<string, string[]>> = {
  "문서": {
    "비즈니스": [],
    "사업계획서": [],
    "회사소개": [],
    "PPT": [],
    "엑셀": [],
    "기획서": [],
    "법률": ["소송장", "준비서면", "형사", "민사"],
    "의료": [],
    "특허": [],
    "노무": [],
    "교재": [],
    "논문": [],
    "기사": [],
    "고전": [],
    "그외": [],
  },
  "음성": {
    "아나운서": [],
    "관광가이드": [],
    "큐레이터": [],
    "안내 방송": [],
    "교육 강의": [],
    "실시간": [],
    "화상수업": [],
  },
  "영상": {
    "SNS": [],
    "유튜브": [],
    "다큐멘터리": [],
    "영화": [],
    "드라마": [],
    "예능": [],
  },
  "개발": {
    "보안": [],
    "AI": [],
    "에이전트": [],
    "디자인-웹/모바일": [],
    "기획-웹": [],
    "웹기획": [],
    "홈페이지 UIUX": [],
    "디비(DB)": [],
    "빅데이터": [],
    "컨텐츠": [],
    "백엔드": [],
    "프론트": [],
    "프로그램": [],
  },
  "창의적활동": {
    "드라마": [],
    "웹툰소설": [],
    "소설": [],
    "시": [],
    "음악": [],
    "미술": [],
  },
  "번역추가": {
    "순차통역": [],
    "동시통역": [],
    "음성번역": [],
    "자가선택": [],
  },
  "프롬프트추가": {},
  "확장영역": {
    "암": [],
    "요리": [],
    "재무": [],
    "주식": [],
    "부동산": [],
    "자녀": [],
    "연애": [],
    "입시": [],
    "사주": [],
    "결혼": [],
    "영어": [],
    "직장찾기": [],
    "운동": [],
    "사업": [],
  },
};

// ─── Step 2: 급수 ───
export const FIELD_OPTIONS = ["프롬프트", "번역", "AI 윤리"];
export const MID_OPTIONS = ["교육", "일반", "전문"];

export const LEVEL_BY_MID: Record<string, string[]> = {
  "교육": ["1급", "2급", "3급", "4급", "5급", "6급", "7급", "8급"],
  "일반": ["1급", "2급", "3급"],
  "전문": ["1급", "2급"],
};

export function getTargets(mid: string, level: string): string[] {
  if (mid === "교육") {
    if (["1급", "2급"].includes(level)) return ["초등 고학년"];
    if (["3급", "4급"].includes(level)) return ["중학교"];
    if (["5급", "6급"].includes(level)) return ["고1 ~ 고2"];
    if (["7급", "8급"].includes(level)) return ["고3"];
  }
  if (mid === "일반") {
    if (["1급", "2급"].includes(level)) return ["일반 성인", "비전공 대학생", "프롬프트 입문자"];
    if (level === "3급") return ["기업 실무자", "팀 리더", "정책기획자", "콘텐츠 기획자"];
  }
  if (mid === "전문") {
    if (["1급", "2급"].includes(level)) return ["변호사", "노무사", "의사", "회계사 등 고도화된 도메인 실무자"];
  }
  return [];
}

// ─── Step 3: 키워드 ───
export const COMMON_KEYWORDS = [
  "Pre-Prompt 설계 (목적별 프롬프트)",
  "Prompt Translation (GPT 기반 작성)",
  "Post-Editing (결과물 품질 평가 및 수정)",
  "AI 번역 실무 (전/후편집 및 품질 비교)",
  "콘텐츠 번역 실습 (웹툰/영상/마케팅)",
  "언어별 실무 과정 (언어별 표현/스타일 가이드)",
  "AI 융합 실습 (GPT 프롬프트 매뉴얼)",
  "중간 발표 및 리플렉션 (10분 피드백)",
  "기말 모의 자격시험 (실무형 포맷)",
  "종합 포트폴리오 완성",
];

export const PROMPT_KEYWORDS = [
  "생성형 AI 개론 및 기본 프롬프트 구조",
  "문체/톤 제어 및 문서 생성 실습",
  "결과물 평가 루브릭 이해",
  "고급 프롬프트 설계 (조건문, 다중지시)",
  "팀 협업형 다중 프롬프트 연계",
  "이미지/영상 생성 지시 및 구도 설정",
  "자동화 워크플로우 연계 (Python, Zapier 등)",
  "복합 문서 및 실전 출력 자동화",
  "도메인 특화 실전 프롬프트 (교육/법률/의료 등)",
  "전문가 평가 및 실전 포트폴리오 구축",
];

export const SPECIALTY_KEYWORDS = [
  "문서·기획 (제안서, 홍보문 등 실무문서 생성)",
  "번역·로컬라이제이션 (인간 감수 병행 훈련)",
  "이미지·디자인 (브랜드 캠페인용 비주얼 제작)",
  "영상·스토리텔링 (스토리보드 및 대본 기획)",
  "코딩·개발 (코드 생성 및 스크립트 자동화)",
  "마케팅·SNS (광고 카피 및 캠페인 자동화)",
  "교육 콘텐츠 (교안 및 문제은행 AI 설계)",
  "법률/의료 전문 프롬프트 (조문/진단 명세화)",
  "판례·논문 분석 및 정보 추출 자동화",
  "상담·설문 시나리오 인터랙티브 설계",
];

export const ETHICS_KEYWORDS = [
  "개인정보 및 보안 (데이터 노출 사례 분석)",
  "저작권 및 오픈소스 라이선스 이해",
  "공정성 및 편향성 (알고리즘 차별 원인 분석)",
  "책임성 구조 (Responsible AI Officer의 역할)",
  "안전성 테스트 (오남용 방지 및 팩트체크)",
  "글로벌 가이드라인 (OECD, EU 등 규범 비교)",
  "국내 AI 윤리기준 및 정책 방향",
  "AI 거버넌스 및 내부 준법 체계 구축",
  "실전 케이스 기반 윤리 딜레마 토론",
  "윤리적 프롬프트 설계 실습",
];

export function getFieldKeywords(field: string): { label: string; keywords: string[]; key: "prompt" | "specialty" | "ethics" } {
  switch (field) {
    case "프롬프트":
      return { label: "프롬프트 전용", keywords: PROMPT_KEYWORDS, key: "prompt" };
    case "번역":
      return { label: "번역 전용", keywords: SPECIALTY_KEYWORDS, key: "specialty" };
    case "AI 윤리":
      return { label: "AI 윤리 전용", keywords: ETHICS_KEYWORDS, key: "ethics" };
    default:
      return { label: "", keywords: [], key: "prompt" };
  }
}

// ─── 더미 데이터 ───
export const DUMMY_DATA: SavedCurriculum[] = [
  {
    id: "demo-01",
    created_at: "2026-02-20",
    category: { large: "문서", medium: "법률", small: "민사" },
    instructor_grade: { field: "프롬프트", mid: "교육", level: "3급" },
    targets: ["중학교"],
    keywords: {
      common: ["Pre-Prompt 설계 (목적별 프롬프트)", "AI 융합 실습 (GPT 프롬프트 매뉴얼)"],
      prompt: ["생성형 AI 개론 및 기본 프롬프트 구조", "고급 프롬프트 설계 (조건문, 다중지시)"],
      specialty: [],
      ethics: [],
    },
    titles: { basicClass: "", practiceClass: "", basicUnits: ["g-edu34-1", "f-pr-1", "f-pr-2"], practiceUnits: ["p-c-1", "p-c-2"] },
  },
  {
    id: "demo-02",
    created_at: "2026-02-19",
    category: { large: "개발", medium: "AI", small: "" },
    instructor_grade: { field: "번역", mid: "일반", level: "1급" },
    targets: ["일반 성인", "프롬프트 입문자"],
    keywords: {
      common: ["Post-Editing (결과물 품질 평가 및 수정)"],
      prompt: [],
      specialty: ["코딩·개발 (코드 생성 및 스크립트 자동화)"],
      ethics: [],
    },
    titles: { basicClass: "", practiceClass: "", basicUnits: ["g-b-1", "g-b-2", "f-pr-8"], practiceUnits: ["p-c-1", "p-pr-4"] },
  },
  {
    id: "demo-03",
    created_at: "2026-02-18",
    category: { large: "영상", medium: "유튜브", small: "" },
    instructor_grade: { field: "AI 윤리", mid: "전문", level: "2급" },
    targets: ["변호사", "회계사 등 고도화된 도메인 실무자"],
    keywords: {
      common: ["기말 모의 자격시험 (실무형 포맷)"],
      prompt: [],
      specialty: [],
      ethics: ["저작권 및 오픈소스 라이선스 이해", "실전 케이스 기반 윤리 딜레마 토론"],
    },
    titles: { basicClass: "", practiceClass: "", basicUnits: ["g-e-1", "f-et-1", "f-et-2"], practiceUnits: ["p-c-3", "p-et-1"] },
  },
  {
    id: "demo-04",
    created_at: "2026-02-17",
    category: { large: "음성", medium: "교육 강의", small: "" },
    instructor_grade: { field: "프롬프트", mid: "교육", level: "7급" },
    targets: ["고3"],
    keywords: {
      common: ["Prompt Translation (GPT 기반 작성)", "종합 포트폴리오 완성"],
      prompt: ["도메인 특화 실전 프롬프트 (교육/법률/의료 등)"],
      specialty: [],
      ethics: [],
    },
    titles: { basicClass: "", practiceClass: "", basicUnits: ["g-edu78-1", "g-edu78-2", "f-pr-1"], practiceUnits: ["p-c-5", "p-pr-1"] },
  },
  {
    id: "demo-05",
    created_at: "2026-02-16",
    category: { large: "문서", medium: "비즈니스", small: "" },
    instructor_grade: { field: "번역", mid: "일반", level: "1급" },
    targets: ["일반 성인", "프롬프트 입문자"],
    keywords: {
      common: ["AI 번역 실무 (전/후편집 및 품질 비교)", "언어별 실무 과정 (언어별 표현/스타일 가이드)"],
      prompt: [],
      specialty: ["문서·기획 (제안서, 홍보문 등 실무문서 생성)", "마케팅·SNS (광고 카피 및 캠페인 자동화)"],
      ethics: [],
    },
    titles: { basicClass: "", practiceClass: "", basicUnits: ["g-i-1", "g-i-2", "f-pr-4", "f-pr-9"], practiceUnits: ["p-c-1", "p-c-4", "p-pr-4", "p-pr-9"] },
  },
];

export const STORAGE_KEY = "instructor-curriculum-data-v7";