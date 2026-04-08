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

export interface SavedCurriculum {
  id: string;
  created_at: string;
  category: CategorySelection;
  instructor_grade: InstructorGrade;
  targets: string[];
  keywords: CurriculumKeywords;
  titles: CurriculumTitles;
}