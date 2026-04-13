// ════════════════════════════════════════════
// 커리큘럼 규정 데이터
// ════════════════════════════════════════════
//
// ⚠️ 원본 문서(3-1 공통 규정 + 3-3 과목별 뼈대)의 literal 값만 담음.
// 빈칸/모순/누락은 `gaps`, `anomalies`, `MISSING_SUBJECTS`에 명시되어 있으며
// 임의로 채우지 않았다. 보강은 원본 확정 후에만 추가할 것.
//
// 원본 문서에 있는 비정상 상태:
//   - 공통 고정 칼럼에 '4'번 항목이 2회 등장 (원본 그대로 보존)
//   - 공통 선택 칼럼 4번 본문은 '필수'로 표기 (원본 그대로 보존)
//   - 3-3 첫 블록에 과목 라벨이 없음
//   - 3-3 첫 블록 고정 3·4 빈칸
//   - 3-3 C(윤리) 고정 4 빈칸
//   - 3-3 D(테솔) 블록 전체 누락
// ════════════════════════════════════════════

export type Tier = "fixed" | "semi" | "optional";

export const TIER_LABEL: Record<Tier, string> = {
  fixed: "고정",
  semi: "준고정",
  optional: "선택",
};

export interface RegulationItem {
  no: number;
  text: string;
}

export interface RegulationBlock {
  fixed: RegulationItem[];
  semi: RegulationItem[];
  optional: RegulationItem[];
}

// ─── 3-1. 커리 공통 규정 ───
export interface CommonRegulation {
  source: string;
  block: RegulationBlock;
  extras: string[];
  anomalies: string[];
}

export const COMMON_REGULATION: CommonRegulation = {
  source: "3-1. 커리 공통 규정",
  block: {
    fixed: [
      {
        no: 1,
        text: "커리 구분: 1) 과목·급수·대상 표시 필수  2) 분야별, 컨텐츠별  3) 총 시간·주차·수업 목표  4) 이론·실습·평가 넣기",
      },
      {
        no: 2,
        text: "과목(프롬, 테솔, 번역, 윤리) → 급수(일반, 전문, 교육) → 기능(문서·영상·음성 등) → 분야별(산업), 컨텐츠, 전문영역 → 번역윤리, 보안을 추가로 얹는다 (모든 항목은 규정, 준규정, 선택규정)",
      },
      { no: 3, text: "도구 활용 범위 표시 필수" },
      { no: 4, text: "결과물 형태 표시 필수" },
      { no: 4, text: "퀴즈, 객관식, 주관식, 서술형 형태로 사례 판단 평가 포함 필수" },
    ],
    semi: [
      { no: 1, text: "시간 배분은 과목 특성에 따라 조정 가능" },
      { no: 2, text: "주차 수는 운영 방식에 따라 조정 가능" },
      { no: 3, text: "실습 비율은 급수와 대상에 따라 조정 가능" },
      { no: 4, text: "발표·과제·모의평가 비중은 과정 목적에 따라 조정 가능" },
    ],
    optional: [
      { no: 1, text: "툴 실습 추가 가능" },
      { no: 2, text: "사례 토론 추가 가능" },
      { no: 3, text: "발표 수업 추가 가능" },
      { no: 4, text: "모든 커리는 시험 연결 여부와 수료 기준 표시 필수" },
    ],
  },
  extras: ["중간고사 기말고사 → 자격증으로 연결됨"],
  anomalies: [
    "고정 칼럼에 번호 '4'가 두 번 등장 ('결과물 형태 표시'와 '사례 판단 평가') — 5번으로 재번호할지 원본 확정 필요",
    "선택 칼럼 4번 본문이 '필수'로 표기 — 등급(고정/준고정/선택) 원본 확정 필요",
  ],
};

// ─── 3-3. 과목별 커리 규정 뼈대 ───
export interface SubjectRegulation {
  id: string;
  label: string;
  block: RegulationBlock;
  gaps: string[]; // 원본에서 실제로 비어 있던 칸에 대한 명시적 기록
}

export const SUBJECT_REGULATIONS: SubjectRegulation[] = [
  {
    id: "unlabeled-A",
    label: "A. (원본 문서에 과목 라벨 미기재)",
    block: {
      fixed: [
        { no: 1, text: "급수별 목표 차이 구분 필수" },
        { no: 2, text: "질문 만들기 → 구조화 → 응용 → 실무 흐름 유지" },
      ],
      semi: [
        { no: 1, text: "도구 종류는 시기별 조정 가능" },
        { no: 2, text: "실습 주제는 분야별 조정 가능" },
        { no: 3, text: "문서형·이미지형·업무형 비중 조정 가능" },
        { no: 4, text: "학생용·일반용·전문용 예시 차등 운영 가능" },
      ],
      optional: [
        { no: 1, text: "비교 실습 추가 가능" },
        { no: 2, text: "역할지시 실습 추가 가능" },
        { no: 3, text: "자동화 실습 추가 가능" },
        { no: 4, text: "도메인 특화 실습 추가 가능" },
      ],
    },
    gaps: [
      "과목 라벨 미기재 — 프롬프트/테솔 중 무엇인지 원본 확정 필요",
      "고정 항목 3번 빈칸",
      "고정 항목 4번 빈칸",
    ],
  },
  {
    id: "translation",
    label: "B. 번역 커리 규정 뼈대",
    block: {
      fixed: [
        { no: 1, text: "공통 이론 + 분야 실습 + 평가 구조 유지" },
        { no: 2, text: "Pre/Post Editing 구간 포함 필수" },
        { no: 3, text: "도메인별 실습 구분 필수" },
        { no: 4, text: "모의시험 또는 실전 평가 포함 필수" },
      ],
      semi: [
        { no: 1, text: "언어군별 실습 비중 조정 가능" },
        { no: 2, text: "콘텐츠·실무 도메인 비중 조정 가능" },
        { no: 3, text: "발표·피드백 시간 조정 가능" },
        { no: 4, text: "일반·전문 과정별 실습 깊이 조정 가능" },
      ],
      optional: [
        { no: 1, text: "툴 비교 실습 추가 가능" },
        { no: 2, text: "스타일가이드 실습 추가 가능" },
        { no: 3, text: "팀 번역 실습 추가 가능" },
        { no: 4, text: "실무 문서 샘플 분석 추가 가능" },
      ],
    },
    gaps: [],
  },
  {
    id: "ethics",
    label: "C. 윤리 커리 규정 뼈대",
    block: {
      fixed: [
        { no: 1, text: "기본 원칙 + 위험 사례 + 적용 판단 구조 유지" },
        { no: 2, text: "포함항목: 편향·허위정보·저작권·개인정보 항목 포함 필수" },
        { no: 3, text: "분야별·컨텐츠별·국가별·국제기구 사례 분석 포함 필수" },
      ],
      semi: [
        { no: 1, text: "사례 비중은 과목 연계 정도에 따라 조정 가능" },
        { no: 2, text: "토론 비중은 대상 연령에 따라 조정 가능" },
        { no: 3, text: "의료·법률·교육 사례 비중 조정 가능" },
        { no: 4, text: "실습형·이론형 비중 조정 가능" },
      ],
      optional: [
        { no: 1, text: "자기점검표 추가 가능" },
        { no: 2, text: "토론 활동 추가 가능" },
        { no: 3, text: "OX 퀴즈 추가 가능" },
        { no: 4, text: "프롬프트 윤리 실습 추가 가능" },
      ],
    },
    gaps: ["고정 항목 4번 빈칸"],
  },
];

// ─── 원본 문서에서 통째로 누락된 과목 ───
export const MISSING_SUBJECTS: string[] = [
  "D. 테솔 커리 규정 뼈대 — 원본 문서에 항목 1~4 × 고정/준고정/선택 12칸 전체 누락",
];

// ─── 축/구조 용어 — 원본에 문장만 있고 의미 미확정 ───
export const STRUCTURE_NOTES: { text: string; status: "literal" | "unresolved" }[] = [
  {
    text: "분야별(산업), 컨텐츠, 전문영역 → 평행 3축인지 단계 구조인지 원본 확정 필요",
    status: "unresolved",
  },
  {
    text: "마지막 줄: 상품, 교육, 강사, 직원권한설계 (팔것, 운영, 인증할것) → 5번째 축 추가인지 기존 축 매핑인지 원본 확정 필요",
    status: "unresolved",
  },
  {
    text: "기능(문서·영상·음성 등) ↔ 현재 CATEGORY_TREE A축(문서/음성/영상/IT/창의/번역/프롬프트/확장)과 동일 개념인지 원본 확정 필요",
    status: "unresolved",
  },
];
