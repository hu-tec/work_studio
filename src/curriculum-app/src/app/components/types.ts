export interface CategorySelection {
  large: string;
  medium: string;
  small: string;
}

export interface InstructorGrade {
  field: string;
  mid: string;
  level: string;
}

export interface CurriculumKeywords {
  common: string[];
  prompt: string[];
  specialty: string[];
  ethics: string[];
}

export interface UnitExtra {
  remark: string;
  attachment: string;
  qna: string;
  qnaAttachment: string;
}

export interface CustomUnit {
  id: string;
  groupKey: string;
  week: string;
  title: string;
  hours: string;
  content: string;
  remark: string;
  attachment: string;
  qna: string;
  qnaAttachment: string;
}

export interface CurriculumTitles {
  basicClass: string;
  practiceClass: string;
  basicUnits: string[];
  practiceUnits: string[];
  basicUnitExtras?: Record<string, UnitExtra>;
  practiceUnitExtras?: Record<string, UnitExtra>;
  basicCustomUnits?: CustomUnit[];
  practiceCustomUnits?: CustomUnit[];
}

// 교재 챕터 — 챕터별 제목 + 페이지 범위
export interface TextbookChapter {
  id: string;
  title: string;
  pages: string; // "1-30" 형식
  notes?: string;
}

// 교재 전용 데이터 — 모드=textbooks 일 때 채워짐
export interface TextbookData {
  title: string;       // 제목 (필수)
  subtitle: string;    // 부제
  author: string;      // 저자 (콤마 구분)
  publisher: string;   // 출판사
  year: string;        // 출판년도
  edition: string;     // 판수 ("초판", "2판" 등)
  isbn: string;        // ISBN
  pages: string;       // 총 페이지
  price: string;       // 정가
  fileUrl: string;     // PDF URL
  coverUrl: string;    // 표지 URL
  notes: string;       // 비고
  chapters: TextbookChapter[]; // 챕터 목록
}

export const EMPTY_TEXTBOOK: TextbookData = {
  title: "", subtitle: "", author: "", publisher: "", year: "",
  edition: "", isbn: "", pages: "", price: "", fileUrl: "",
  coverUrl: "", notes: "", chapters: [],
};

export interface SavedCurriculum {
  id: string;
  created_at: string;
  category: CategorySelection;
  instructor_grade: InstructorGrade;
  targets: string[];
  keywords: CurriculumKeywords;
  titles: CurriculumTitles;
  textbookData?: TextbookData; // 교재 모드 전용
}