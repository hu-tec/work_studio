// 가연 엑셀(분류표) 시드 — 5축(A 분야 / B 급수 / C 홈페이지 / D 그룹) 참고용.
// 편집/CRUD 대상은 data.ts 의 CATEGORY_TREE; 여기는 원본 단일 소스 뷰 전용.
import raw from "./gayeon-data/classification.json";

export interface FieldA {
  large: string;
  mid: string;
  small: string;
}
export interface GradeB {
  subject: string; // 프롬/번역/윤리
  track: string; // 교육/일반/전문
  level: string; // 1~8급
}
export interface HomepageC {
  large: string;
  detail: string;
}
export interface GroupD {
  large: string;
  mid: string;
}

interface RawClassification {
  fieldA: FieldA[];
  gradeB: GradeB[];
  homepageC: HomepageC[];
  groupD: GroupD[];
}
const data = raw as unknown as RawClassification;

export const FIELD_A: FieldA[] = data.fieldA;
export const GRADE_B: GradeB[] = data.gradeB;
export const HOMEPAGE_C: HomepageC[] = data.homepageC;
export const GROUP_D: GroupD[] = data.groupD;

export const AXIS_LABEL = {
  A: "분야 (대/중/소)",
  B: "급수 (과목/트랙/등급)",
  C: "홈페이지 (대/세부)",
  D: "그룹/부서",
} as const;
