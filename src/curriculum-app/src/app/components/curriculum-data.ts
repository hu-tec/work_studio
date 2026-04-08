// ─── 커리큘럼 단(Unit) 구조 ───
export interface CurriculumUnit {
  id: string;
  title: string;
  hours?: string;
  content: string;
}

export interface CurriculumGroup {
  name: string;
  subtitle?: string;
  units: CurriculumUnit[];
}

// ════════════════════════════════════════════
// 기본 수업 커리큘럼 — 급수별 (커리 급수)
// ════════════════════════════════════════════

const BASIC_BEGINNER: CurriculumGroup = {
  name: "1단계: 초급반",
  subtitle: "프롬프트 엔지니어 일반 1·2급 과정 (60시간)",
  units: [
    { id: "g-b-1", title: "1주차 · 생성형 AI 개론", content: "GPT 개념, 프롬프트란 무엇인가, 활용 사례 탐색" },
    { id: "g-b-2", title: "2주차 · 기본 프롬프트 구조", content: "역할 부여, 지시 목적, 형식 지정법 배우기" },
    { id: "g-b-3", title: "3주차 · 문체/톤 제어", content: "따뜻한 설명체, 뉴스 스타일 등 톤 조절 연습" },
    { id: "g-b-4", title: "4주차 · 문서 생성 실습", content: "리포트, 이메일, 안내문 등 작성 실습" },
    { id: "g-b-5", title: "5주차 · 일상 활용 예제", content: "여행계획, 쇼핑정보, 생활조언 생성 프롬프트" },
    { id: "g-b-6", title: "6주차 · 윤리 이해와 기본 오류 수정", content: "허위정보 탐지, 과장 표현 수정 실습" },
    { id: "g-b-7", title: "7주차 · 간단한 결과물 분석", content: "생성 결과 평가 및 간단한 수정 연습" },
    { id: "g-b-8", title: "8주차 · 초급 종합 과제", content: "주어진 주제에 맞는 프롬프트 기획 + 결과 수정" },
  ],
};

const BASIC_INTERMEDIATE: CurriculumGroup = {
  name: "2단계: 중급반",
  subtitle: "프롬프트 엔지니어 일반 3급 과정 (60시간)",
  units: [
    { id: "g-i-1", title: "1주차 · 산업별 AI 활용 현황", content: "마케팅, 교육, 정책, 제조 등 분야별 사례 분석" },
    { id: "g-i-2", title: "2주차 · 고급 프롬프트 설계", content: "조건문, 다중 지시, 모델 응답 제어 기법" },
    { id: "g-i-3", title: "3주차 · 결과물 평가 루브릭 이해", content: "프롬프트-출력-수정의 품질평가 기준 학습" },
    { id: "g-i-4", title: "4주차 · 업무용 문서 프롬프트", content: "보고서, 발표자료, 정책 제안서 등 실습" },
    { id: "g-i-5", title: "5주차 · 팀 협업형 생성 과제", content: "역할 분담 기반 다중 프롬프트 연계 과제 수행" },
    { id: "g-i-6", title: "6주차 · 이미지·영상 생성 실습", content: "스타일 지시, 구도 설정, 내레이션 구성 등" },
    { id: "g-i-7", title: "7주차 · GPT 결과 자동화 활용", content: "워크플로우 도구(Python, Zapier 등)와 연계" },
    { id: "g-i-8", title: "8주차 · 중급 종합 프로젝트", content: "기업 시나리오 기반 프롬프트 기획 → 실행 → 평가" },
  ],
};

const BASIC_EXPERT: CurriculumGroup = {
  name: "3단계: 전문가반",
  subtitle: "프롬프트 엔지니어 전문 1·2급 과정 (60시간)",
  units: [
    { id: "g-e-1", title: "1주차 · 도메인 AI 활용 트렌드", content: "법률, 의료, 인사, 회계 분야별 사례 리뷰" },
    { id: "g-e-2", title: "2주차 · 법률/의료용 프롬프트 설계", content: "실제 조문, 진단 분류 기반 명세화 방법" },
    { id: "g-e-3", title: "3주차 · 판례·논문 분석 자동화", content: "GPT로 정보 추출, 요약, 분류 기법 실습" },
    { id: "g-e-4", title: "4주차 · 상담·설문 시나리오 프롬프트", content: "진단/질문 자동화 설계, 인터랙티브 프롬프트" },
    { id: "g-e-5", title: "5주차 · AI 생성물의 법적·윤리적 검토", content: "위법 가능성, 편향 판단, 책임 분리 구조 이해" },
    { id: "g-e-6", title: "6주차 · 복합 문서 자동화", content: "계약서, 동의서, 진단서 등 실전 출력 실습" },
    { id: "g-e-7", title: "7주차 · 전문가 포트폴리오 구축", content: "도메인별 생성 예시 + 수정본 + 활용 로그 정리" },
    { id: "g-e-8", title: "8주차 · 전문가 평가 + 실전 과제", content: "모의 사례기반 생성 및 전문가 루브릭 평가" },
  ],
};

const BASIC_EDU_12: CurriculumGroup = {
  name: "교육 1~2급 (초등 고학년)",
  subtitle: "GPT가 하는 일 이해 / 질문 구성 / 간단한 대화",
  units: [
    { id: "g-edu12-1", title: "GPT 이해와 기본 질문", content: "\"동물에 대해 물어보기\", \"상상 친구 만들기\" 등 간단한 대화형 프롬프트" },
    { id: "g-edu12-2", title: "연령별 맞춤 실습지", content: "예제 중심 텍스트, GPT 대화 환경 제공" },
  ],
};

const BASIC_EDU_34: CurriculumGroup = {
  name: "교육 3~4급 (중학교)",
  subtitle: "질문의 정확성, 간단한 명령어 활용 / 톤 이해",
  units: [
    { id: "g-edu34-1", title: "정확한 질문과 명령어 활용", content: "\"자기소개서 써보기\", \"나만의 설명문 만들기\" 등" },
    { id: "g-edu34-2", title: "톤·스타일 이해 실습", content: "다양한 문체로 같은 내용 작성해보기" },
  ],
};

const BASIC_EDU_56: CurriculumGroup = {
  name: "교육 5~6급 (고1~고2)",
  subtitle: "문체/형식 지정 / 윤리 구분 / 결과 수정",
  units: [
    { id: "g-edu56-1", title: "문체·형식 지정 프롬프트", content: "\"학교 신문 기사 만들기\", \"비건 식단 설명 프롬프트\" 등" },
    { id: "g-edu56-2", title: "윤리 구분과 결과 수정", content: "AI 생성 결과의 문제점 식별 및 수정 훈련" },
  ],
};

const BASIC_EDU_78: CurriculumGroup = {
  name: "교육 7~8급 (고3)",
  subtitle: "실전형 프롬프트 작성 / 결과 분석 / 수정 보완",
  units: [
    { id: "g-edu78-1", title: "실전형 프롬프트 작성", content: "\"진로 탐색 자기소개서\", \"AI 토론 주제 정리\" 등" },
    { id: "g-edu78-2", title: "결과 분석 및 수정 보완", content: "고도화된 프롬프트 설계 및 피드백 반영 훈련" },
  ],
};

// ════════════════════════════════════════════
// 기본 수업 커리큘럼 — 분야별 (커리 분야)
// ════════════════════════════════════════════

const FIELD_BASIC_TRANSLATION: CurriculumGroup[] = [
  {
    name: "번역 기본 커리큘럼",
    subtitle: "이론 중심 60시간",
    units: [
      { id: "f-tr-1", title: "AI 번역 실무 (공통)", hours: "10시간", content: "AI 번역 개념 이해 및 비교 실습 · Pre & Post Editing 기초 · 주요 AI 번역 툴(GPT, DeepL 등) 활용" },
      { id: "f-tr-2", title: "콘텐츠 번역 수업 (공통)", hours: "20시간", content: "웹툰·웹소설·영상자막 번역 실습 · 마케팅·비즈니스 문서 번역 · 문체와 표현력 훈련" },
      { id: "f-tr-3", title: "AI 융합 수업 (공통)", hours: "5시간", content: "GPT 프롬프트 설계 및 적용 · AI 윤리와 데이터 관리 · TESOL 융합 개념 학습" },
      { id: "f-tr-4", title: "언어별 실무 수업 (선택)", hours: "20시간", content: "영어·일본어·중국어·베트남어 중 선택 · 언어별 번역 교정 및 비교 · AI vs 인간 번역 차이 분석" },
      { id: "f-tr-5", title: "중간 발표 수업 (필수)", content: "과정 중 발표 1회 (10분 발표 + 피드백) · 주제: AI 번역 결과 분석 또는 콘텐츠 번역 사례" },
      { id: "f-tr-6", title: "기말 모의 자격시험 (필수)", content: "AI 번역 에디터 모의 자격시험 실시 · 시험 형태: Pre-Editing + Post-Editing 실습 평가" },
      { id: "f-tr-7", title: "종합 리뷰 및 피드백", hours: "5시간", content: "개인 포트폴리오 완성 · 수업 리플렉션 & 피드백 · 강사 인증서 발급 준비" },
    ],
  },
];

const FIELD_BASIC_PROMPT: CurriculumGroup[] = [
  {
    name: "Ⅰ. 공통 과정",
    subtitle: "총 30시간",
    units: [
      { id: "f-pr-1", title: "1. Pre-Prompt", hours: "10시간", content: "AI에게 질문을 올바르게 던지는 기술 · 목적별 프롬프트 설계 방법 · GPT·Gemini·Claude 비교 실습" },
      { id: "f-pr-2", title: "2. Prompt Translation", hours: "10시간", content: "GPT 기반 프롬프트 작성 실습 · 한국어 ↔ 영어 변환 프롬프트 설계 · 산업별 프롬프트 응용 (기획, 마케팅, 번역 등) · 커스터마이징 프롬프트 실습" },
      { id: "f-pr-3", title: "3. Post-Editing", hours: "10시간", content: "AI 결과물의 품질 평가 및 수정 기준 · 번역·문체·디자인 표현력 강화 훈련 · GPT·Gemini·Claude 간 결과 비교 및 개선안 도출 · 완성도 높은 결과물 제작 실습" },
    ],
  },
  {
    name: "Ⅱ. 분야별 전문 과정",
    subtitle: "총 30시간 (1개 이상 분야 선택)",
    units: [
      { id: "f-pr-4", title: "문서·기획 분야", content: "보고서, 제안서, 홍보문 등 실무문서 생성 및 개선 실습" },
      { id: "f-pr-5", title: "번역·로컬라이제이션 분야", content: "AI 번역 + 인간 감수 병행 훈련, 자연스러운 표현 훈련" },
      { id: "f-pr-6", title: "이미지·디자인 분야", content: "Midjourney, DALL·E 활용 이미지 생성·수정 실습" },
      { id: "f-pr-7", title: "영상·스토리텔링 분야", content: "ChatGPT, Gemini 기반 스토리보드·대본 작성, 영상 콘셉트 기획" },
      { id: "f-pr-8", title: "코딩·개발 자동화 분야", content: "GPT 코드 생성, 스크립트 자동화, 간단한 앱 구현" },
      { id: "f-pr-9", title: "마케팅·SNS 콘텐츠 분야", content: "광고 카피, SNS 콘텐츠, 이메일 캠페인 자동화 실습" },
      { id: "f-pr-10", title: "교육 콘텐츠 개발 분야", content: "교안·문제은행·교육자료를 AI로 설계·개선하는 실습" },
    ],
  },
  {
    name: "평가 및 인증",
    units: [
      { id: "f-pr-11", title: "중간 발표수업 (1회)", content: "10분 발표 · 프롬프트 실습결과 및 개선안 발표 · 강사 및 동료 간 피드백" },
      { id: "f-pr-12", title: "기말 모의 자격시험 (실무형)", content: "자격시험 포맷 · 성취도 평가 및 AI 프롬프트 실무 인증서 발급" },
    ],
  },
];

const FIELD_BASIC_ETHICS: CurriculumGroup[] = [
  {
    name: "AI 윤리 강의 커리큘럼",
    subtitle: "총 30시간",
    units: [
      { id: "f-et-1", title: "1️⃣ 개인정보·보안 윤리", hours: "5시간", content: "AI 학습 데이터에서 개인정보가 노출되는 사례 · 프라이버시 보호를 위한 최소 수집 원칙 · 국내외 개인정보 보호법(GDPR, PIPA) 비교 · 보안 위반 사례 분석 및 대응 가이드라인" },
      { id: "f-et-2", title: "2️⃣ 저작권·라이선스 윤리", hours: "5시간", content: "AI 생성물의 저작권 개념과 판례 · 라이선스 유형(오픈소스, 크리에이티브커먼즈 등) 이해 · 프롬프트 결과물의 재사용·공유 시 유의점 · 실제 저작권 분쟁 사례 토론" },
      { id: "f-et-3", title: "3️⃣ 공정성·책임성 윤리", hours: "5시간", content: "알고리즘 편향과 차별의 원인 · 공정한 AI 설계와 검증 절차 · 기업 내 AI 책임자(Responsible AI Officer)의 역할 · 조직 내 윤리경영 실천 사례" },
      { id: "f-et-4", title: "4️⃣ 안전성·사실성 윤리", hours: "5시간", content: "AI 허위정보 감별 기준과 팩트체크 절차 · 안전성 테스트 및 AI 오남용 방지 체계 · AI 콘텐츠의 위험요소 사전 식별 훈련 · 실제 뉴스·정책 기반 실습 과제" },
      { id: "f-et-5", title: "5️⃣ 규정 준수·국제 기준", hours: "5시간", content: "OECD, UNESCO, EU 등 주요 국제 규범 비교 · 한국 AI 윤리기준 및 정부 정책 방향 · AI 거버넌스와 내부 준법 체계 구축 사례 · 시험 대비 핵심 요약 및 질의응답" },
      { id: "f-et-6", title: "6️⃣ 실습 및 프로젝트", hours: "5시간", content: "실제 AI 윤리 딜레마 상황 토론 및 해결안 도출 · GPT·Gemini 활용한 윤리적 프롬프트 설계 실습 · AI 윤리 자격시험 모의테스트 · 결과물 피드백 및 발표" },
    ],
  },
];

// ════════════════════════════════════════════
// 실습 커리큘럼 — 공통 실습 (급수 공통)
// ════════════════════════════════════════════

const PRACTICE_COMMON: CurriculumGroup = {
  name: "공통 실습 구성",
  subtitle: "각 단계별 실습 포함 항목",
  units: [
    { id: "p-c-1", title: "프롬프트 설계 실습", content: "목적, 문체, 형식 조건을 반영하여 직접 작성" },
    { id: "p-c-2", title: "GPT 결과 생성 실습", content: "다양한 모델(GPT-4o, Claude 등)을 활용한 결과 생성" },
    { id: "p-c-3", title: "결과 수정 및 평가 실습", content: "AI 결과의 문제점을 인식하고 보완하는 훈련" },
    { id: "p-c-4", title: "도메인별 실전 실습", content: "교육/법률/의료/콘텐츠 등 분야 특화 프롬프트 구성" },
    { id: "p-c-5", title: "모의 시험 실습", content: "PromptCert 유형에 맞춘 실전형 문제 풀이 및 루브릭 기반 자가평가" },
  ],
};

// ════════════════════════════════════════════
// 실습 커리큘럼 — 분야별
// ════════════════════════════════════════════

const PRACTICE_TRANSLATION: CurriculumGroup[] = [
  {
    name: "번역 실습 커리큘럼",
    subtitle: "실무 중심 60시간",
    units: [
      { id: "p-tr-1", title: "AI 번역 실무 실습", hours: "10시간", content: "원문 Pre-Editing · AI 결과 Post-Editing · 번역 품질 비교 실험 → Pre/Post Editing 리포트" },
      { id: "p-tr-2", title: "콘텐츠 번역 실습", hours: "20시간", content: "웹툰/영상/마케팅 문서 번역 실습 · 문체 변환 및 교정 → 콘텐츠 번역 포트폴리오" },
      { id: "p-tr-3", title: "AI 융합 실습", hours: "5시간", content: "GPT 프롬프트 제작 · AI 번역 프롬프트 최적화 → 프롬프트 매뉴얼" },
      { id: "p-tr-4", title: "언어별 실습 과정", hours: "20시간", content: "언어별 번역 비교 분석 · 스타일 가이드 제작 → 언어별 번역 리포트" },
      { id: "p-tr-5", title: "중간 발표 수업", content: "개인 10분 발표 (1회) · 주제: AI 번역/콘텐츠 개선 프로젝트 → 발표 평가 리포트" },
      { id: "p-tr-6", title: "기말 모의 자격시험", content: "실제 시험 형태로 평가 · AI 번역 실습 + 이론 문항 병행 → 자격인증 모의 결과표" },
      { id: "p-tr-7", title: "최종 리뷰", hours: "5시간", content: "포트폴리오 점검 · 개인 강의안 피드백 → 수료증 + 강사 추천서" },
    ],
  },
];

const PRACTICE_PROMPT: CurriculumGroup[] = [
  {
    name: "Ⅰ. 공통 심화 실습",
    subtitle: "총 30시간",
    units: [
      { id: "p-pr-1", title: "1. Pre-Prompt 실습", hours: "10시간", content: "실전 과제 중심 프롬프트 설계 · 산업별 목적형 질문 훈련 · 팀별 프롬프트 전략 피드백 · 프롬프트 구조 분석 및 품질 평가" },
      { id: "p-pr-2", title: "2. Prompt Translation 실습", hours: "10시간", content: "실무 프로젝트 기반 프롬프트 작성 · 협업툴 연동 (Notion, Canva, Slack 등) · 데이터 입력→AI 생성→결과 활용까지 실습" },
      { id: "p-pr-3", title: "3. Post-Editing 실습", hours: "10시간", content: "AI 결과물의 완성도 향상 · 문장 교정·톤 조정·시각 콘텐츠 리터칭 · 실제 결과물 제출 및 평가" },
    ],
  },
  {
    name: "Ⅱ. 분야별 프로젝트 실습",
    subtitle: "총 30시간",
    units: [
      { id: "p-pr-4", title: "문서·기획 프로젝트", content: "실제 제안서·보도자료 작성 프로젝트" },
      { id: "p-pr-5", title: "번역·로컬라이제이션 프로젝트", content: "AI 번역 후편집 + 표현력 개선 평가" },
      { id: "p-pr-6", title: "이미지·디자인 프로젝트", content: "브랜드 캠페인용 비주얼 시리즈 제작" },
      { id: "p-pr-7", title: "영상·스토리텔링 프로젝트", content: "대본→영상 콘셉트→AI 영상 구현 실습" },
      { id: "p-pr-8", title: "코딩·개발 자동화 프로젝트", content: "웹페이지 자동화 또는 스크립트 빌더 제작" },
      { id: "p-pr-9", title: "마케팅·SNS 콘텐츠 프로젝트", content: "SNS 광고 캠페인용 포스팅·카피 작성 실습" },
      { id: "p-pr-10", title: "교육 콘텐츠 개발 프로젝트", content: "실제 교안·시험문제·강의 자료 설계 프로젝트" },
    ],
  },
  {
    name: "평가 및 인증",
    units: [
      { id: "p-pr-11", title: "중간 발표수업 (1회)", content: "10분 발표 · 프롬프트 실습결과 및 개선안 발표" },
      { id: "p-pr-12", title: "기말 모의 자격시험 (실무형)", content: "자격시험 포맷 · 성취도 평가 및 AI 프롬프트 실무 인증서 발급" },
    ],
  },
];

const PRACTICE_ETHICS: CurriculumGroup[] = [
  {
    name: "AI 윤리 실습",
    subtitle: "케이스 기반 학습 + 실무 중심 구성",
    units: [
      { id: "p-et-1", title: "케이스 중심 학습", content: "실제 AI 현장에서의 윤리 이슈 해결 훈련" },
      { id: "p-et-2", title: "실무 중심 구성", content: "기업·기관에서도 바로 적용 가능한 교육" },
      { id: "p-et-3", title: "국제 표준 반영", content: "글로벌 윤리 기준에 따른 강의 운영" },
      { id: "p-et-4", title: "윤리적 프롬프트 설계 실습", content: "GPT·Gemini 활용한 윤리적 프롬프트 설계" },
      { id: "p-et-5", title: "AI 윤리 자격시험 모의테스트", content: "국내 최초 AI 윤리 자격시험 연계 · 강의 후 자격 응시 가능" },
    ],
  },
];

// ════════════════════════════════════════════
// 조회 함수들
// ════════════════════════════════════════════

export function getGradeBasicCurriculum(mid: string, level: string): CurriculumGroup[] {
  if (mid === "일반" && ["1급", "2급"].includes(level)) return [BASIC_BEGINNER];
  if (mid === "일반" && level === "3급") return [BASIC_INTERMEDIATE];
  if (mid === "전문" && ["1급", "2급"].includes(level)) return [BASIC_EXPERT];
  if (mid === "교육") {
    if (["1급", "2급"].includes(level)) return [BASIC_EDU_12];
    if (["3급", "4급"].includes(level)) return [BASIC_EDU_34];
    if (["5급", "6급"].includes(level)) return [BASIC_EDU_56];
    if (["7급", "8급"].includes(level)) return [BASIC_EDU_78];
  }
  return [];
}

export function getFieldBasicCurriculum(field: string): CurriculumGroup[] {
  switch (field) {
    case "프롬프트": return FIELD_BASIC_PROMPT;
    case "번역": return FIELD_BASIC_PROMPT; // 번역도 프롬프트 기본 과정 포함
    case "AI 윤리": return FIELD_BASIC_ETHICS;
    default: return [];
  }
}

export function getPracticeCurriculum(field: string): CurriculumGroup[] {
  const common = [PRACTICE_COMMON];
  switch (field) {
    case "프롬프트": return [...common, ...PRACTICE_PROMPT];
    case "번역": return [...common, ...PRACTICE_PROMPT];
    case "AI 윤리": return [...common, ...PRACTICE_ETHICS];
    default: return common;
  }
}

// 번역 커리큘럼 (분류체계가 번역 관련일 때)
export function getTranslationBasicCurriculum(): CurriculumGroup[] {
  return FIELD_BASIC_TRANSLATION;
}

export function getTranslationPracticeCurriculum(): CurriculumGroup[] {
  return PRACTICE_TRANSLATION;
}