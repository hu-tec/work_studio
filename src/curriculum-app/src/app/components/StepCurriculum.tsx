import { useState, lazy, Suspense } from "react";
import { COMMON_KEYWORDS, getFieldKeywords } from "./data";
import type { CurriculumKeywords, UnitExtra, CustomUnit, TextbookData, TextbookChapter } from "./types";
import { BookOpen, CheckSquare, Square, BookText, Wrench, Expand, Minimize2, FileWarning, Plus, Trash2 } from "lucide-react";
import { CurriculumUnits } from "./CurriculumUnits";
import type { CurriculumGroup } from "./curriculum-data";
import { getGradeBasicCurriculum, getFieldBasicCurriculum, getPracticeCurriculum, getTranslationBasicCurriculum, getTranslationPracticeCurriculum } from "./curriculum-data";
import { MODE_LABEL, type ContentMode } from "./mode";

const QuestionsView = lazy(() =>
  import("./QuestionsView").then((m) => ({ default: m.QuestionsView }))
);

interface Props {
  mode: ContentMode;
  selectedField: string;
  selectedMid: string;
  selectedLevel: string;
  catLarge: string;
  keywords: CurriculumKeywords;
  onToggleKeyword: (cat: keyof CurriculumKeywords, kw: string) => void;
  onSetAll: (cat: keyof CurriculumKeywords, all: string[], select: boolean) => void;
  basicClass: string;
  practiceClass: string;
  onBasicClassChange: (v: string) => void;
  onPracticeClassChange: (v: string) => void;
  basicUnits: string[];
  practiceUnits: string[];
  onToggleBasicUnit: (id: string) => void;
  onTogglePracticeUnit: (id: string) => void;
  onToggleAllBasicUnits: (ids: string[], select: boolean) => void;
  onToggleAllPracticeUnits: (ids: string[], select: boolean) => void;
  basicUnitExtras: Record<string, UnitExtra>;
  practiceUnitExtras: Record<string, UnitExtra>;
  onUpdateBasicExtra: (unitId: string, field: keyof UnitExtra, value: string) => void;
  onUpdatePracticeExtra: (unitId: string, field: keyof UnitExtra, value: string) => void;
  basicCustomUnits: CustomUnit[];
  practiceCustomUnits: CustomUnit[];
  onAddBasicCustomUnit: (groupKey: string) => void;
  onAddPracticeCustomUnit: (groupKey: string) => void;
  onUpdateBasicCustomUnit: (unitId: string, field: keyof CustomUnit, value: string) => void;
  onUpdatePracticeCustomUnit: (unitId: string, field: keyof CustomUnit, value: string) => void;
  onDeleteBasicCustomUnit: (unitId: string) => void;
  onDeletePracticeCustomUnit: (unitId: string) => void;
  // 교재 모드 전용 props (curriculum 모드에서는 무시)
  textbookData?: TextbookData;
  onUpdateTextbookField?: (field: keyof TextbookData, value: string) => void;
  onAddChapter?: () => void;
  onUpdateChapter?: (id: string, field: keyof TextbookChapter, value: string) => void;
  onDeleteChapter?: (id: string) => void;
}

function KeywordPanel({
  title,
  color,
  allKeywords,
  selected,
  categoryKey,
  onToggle,
  onSetAll,
}: {
  title: string;
  color: string;
  allKeywords: string[];
  selected: string[];
  categoryKey: keyof CurriculumKeywords;
  onToggle: (cat: keyof CurriculumKeywords, kw: string) => void;
  onSetAll: (cat: keyof CurriculumKeywords, all: string[], select: boolean) => void;
}) {
  const allSelected = allKeywords.length > 0 && allKeywords.every((k) => selected.includes(k));

  return (
    <div className="rounded-lg border border-border p-2.5 flex-1 min-w-0">
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
          <span className="text-[0.78rem] font-semibold">{title}</span>
          <span className="rounded-full bg-muted px-1.5 py-0.5 text-[0.66rem] font-medium text-muted-foreground">
            {selected.length}/{allKeywords.length}
          </span>
        </div>
        <button
          onClick={() => onSetAll(categoryKey, allKeywords, !allSelected)}
          className={`rounded-md px-2 py-0.5 text-[0.66rem] font-medium transition-colors ${
            allSelected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {allSelected ? "해제" : "전체"}
        </button>
      </div>
      <div className="columns-2 gap-x-2">
        {allKeywords.map((kw, i) => {
          const isSelected = selected.includes(kw);
          return (
            <button
              key={kw}
              onClick={() => onToggle(categoryKey, kw)}
              className={`flex w-full items-start gap-1.5 rounded-md px-1.5 py-0.5 text-left text-[0.74rem] transition-colors break-inside-avoid ${
                isSelected ? "bg-primary/5 text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {isSelected ? (
                <CheckSquare className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
              ) : (
                <Square className="mt-0.5 h-3 w-3 shrink-0" />
              )}
              <span className="truncate">
                <span className="text-[0.64rem] text-muted-foreground mr-0.5">{i + 1}.</span>
                {kw}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StepCurriculum({
  mode,
  selectedField,
  selectedMid,
  selectedLevel,
  catLarge,
  keywords,
  onToggleKeyword,
  onSetAll,
  basicClass,
  practiceClass,
  onBasicClassChange,
  onPracticeClassChange,
  basicUnits,
  practiceUnits,
  onToggleBasicUnit,
  onTogglePracticeUnit,
  onToggleAllBasicUnits,
  onToggleAllPracticeUnits,
  basicUnitExtras,
  practiceUnitExtras,
  onUpdateBasicExtra,
  onUpdatePracticeExtra,
  basicCustomUnits,
  practiceCustomUnits,
  onAddBasicCustomUnit,
  onAddPracticeCustomUnit,
  onUpdateBasicCustomUnit,
  onUpdatePracticeCustomUnit,
  onDeleteBasicCustomUnit,
  onDeletePracticeCustomUnit,
  textbookData,
  onUpdateTextbookField,
  onAddChapter,
  onUpdateChapter,
  onDeleteChapter,
}: Props) {
  const [showExtra, setShowExtra] = useState(false);
  const fieldInfo = selectedField ? getFieldKeywords(selectedField) : null;

  const isTranslation = catLarge === "번역추가";
  const hasGradeSelection = selectedMid && selectedLevel;

  let basicGroups: CurriculumGroup[] = [];
  let practiceGroups: CurriculumGroup[] = [];

  // 커리큘럼 모드에서만 단원 데이터 로드 — 다른 모드는 빈 상태
  if (mode === "curriculum") {
    if (hasGradeSelection) {
      basicGroups = [...getGradeBasicCurriculum(selectedMid, selectedLevel)];
    }
    if (selectedField) {
      if (isTranslation) {
        basicGroups = [...basicGroups, ...getTranslationBasicCurriculum()];
        practiceGroups = getTranslationPracticeCurriculum();
      } else {
        basicGroups = [...basicGroups, ...getFieldBasicCurriculum(selectedField)];
        practiceGroups = getPracticeCurriculum(selectedField);
      }
    }
  }

  const isOtherMode = mode !== "curriculum";
  const modeLabel = MODE_LABEL[mode];

  if (mode === "questions") {
    return (
      <Suspense fallback={<div className="text-[0.7rem] text-muted-foreground py-2 text-center">로딩 중...</div>}>
        <QuestionsView />
      </Suspense>
    );
  }

  // 교재 모드: 실제 입력 가능한 교재 편집 폼
  if (mode === "textbooks" && textbookData && onUpdateTextbookField && onAddChapter && onUpdateChapter && onDeleteChapter) {
    return (
      <TextbookEditor
        data={textbookData}
        onUpdate={onUpdateTextbookField}
        onAddChapter={onAddChapter}
        onUpdateChapter={onUpdateChapter}
        onDeleteChapter={onDeleteChapter}
      />
    );
  }

  // 나머지 모드: 원본 데이터 미제공 → 빈 상태 렌더 (현재는 없음)
  if (isOtherMode) {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-green-100 text-green-600">
            <BookOpen className="h-3 w-3" />
          </div>
          <h3 className="text-[11px] font-semibold tracking-tight">Step 3 — {modeLabel} 구성</h3>
        </div>
        <div className="rounded border border-dashed border-amber-300 bg-amber-50 p-3 flex items-start gap-2">
          <FileWarning className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 flex-1">
            <div className="text-[11px] font-semibold text-amber-900">
              {modeLabel} 원본 데이터 미제공
            </div>
            <div className="text-[10px] text-amber-800 leading-snug">
              커리큘럼과 동일한 5탭 셸(편집·전체펼치기·규정·저장목록·대시보드) · 필터 · 검색 · 컴팩트 UI는 적용되었습니다.
              Step3 콘텐츠·전체펼치기·규정 데이터는 원본 자료가 제공되면 literal하게 입력됩니다.
              임의 생성 금지 원칙으로 현재는 빈 상태입니다.
            </div>
            <div className="text-[10px] text-amber-700 leading-snug pt-1 border-t border-amber-200">
              ✓ 분류(Step1) · 급수(Step2) · 저장/불러오기 · 필터는 지금 바로 사용 가능
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Header with 전체보기 toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-green-100 text-green-600">
            <BookOpen className="h-3.5 w-3.5" />
          </div>
          <h3 className="text-[0.88rem] font-semibold tracking-tight">Step 3 — {MODE_LABEL[mode]} 구성</h3>
        </div>
        <button
          onClick={() => setShowExtra(!showExtra)}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-[0.74rem] font-medium border transition-all ${
            showExtra
              ? "border-primary/30 bg-primary/5 text-primary shadow-sm"
              : "border-border bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
          }`}
        >
          {showExtra ? (
            <>
              <Minimize2 className="h-3.5 w-3.5" />
              간략히 보기
            </>
          ) : (
            <>
              <Expand className="h-3.5 w-3.5" />
              전체보기
            </>
          )}
        </button>
      </div>

      {/* 키워드 섹션: 간략히=가로 2단, 전체보기=세로 1단 */}
      <div className={showExtra ? "space-y-3" : "flex gap-3"}>
        <KeywordPanel
          title="공통항목 키워드"
          color="bg-blue-500"
          allKeywords={COMMON_KEYWORDS}
          selected={keywords.common}
          categoryKey="common"
          onToggle={onToggleKeyword}
          onSetAll={onSetAll}
        />
        {fieldInfo && fieldInfo.keywords.length > 0 && (
          <KeywordPanel
            title={`${fieldInfo.label} 키워드`}
            color={
              selectedField === "프롬프트" ? "bg-orange-500"
                : selectedField === "번역" ? "bg-emerald-500"
                : "bg-rose-500"
            }
            allKeywords={fieldInfo.keywords}
            selected={keywords[fieldInfo.key]}
            categoryKey={fieldInfo.key}
            onToggle={onToggleKeyword}
            onSetAll={onSetAll}
          />
        )}
      </div>

      {/* 커리큘럼 단: 간략히=가로 2단, 전체보기=세로 1단 */}
      <div className={showExtra ? "space-y-3" : "grid grid-cols-2 gap-3"}>
        <CurriculumUnits
          label="기본 수업 커리"
          icon={<BookText className="h-4 w-4 text-indigo-600" />}
          color="bg-indigo-50"
          groups={basicGroups}
          selectedUnits={basicUnits}
          onToggleUnit={onToggleBasicUnit}
          onToggleAllGroup={onToggleAllBasicUnits}
          titleValue={basicClass}
          onTitleChange={onBasicClassChange}
          unitExtras={basicUnitExtras}
          onUpdateExtra={onUpdateBasicExtra}
          customUnits={basicCustomUnits}
          onAddCustomUnit={onAddBasicCustomUnit}
          onUpdateCustomUnit={onUpdateBasicCustomUnit}
          onDeleteCustomUnit={onDeleteBasicCustomUnit}
          showExtra={showExtra}
        />
        <CurriculumUnits
          label="실습 커리"
          icon={<Wrench className="h-4 w-4 text-teal-600" />}
          color="bg-teal-50"
          groups={practiceGroups}
          selectedUnits={practiceUnits}
          onToggleUnit={onTogglePracticeUnit}
          onToggleAllGroup={onToggleAllPracticeUnits}
          titleValue={practiceClass}
          onTitleChange={onPracticeClassChange}
          unitExtras={practiceUnitExtras}
          onUpdateExtra={onUpdatePracticeExtra}
          customUnits={practiceCustomUnits}
          onAddCustomUnit={onAddPracticeCustomUnit}
          onUpdateCustomUnit={onUpdatePracticeCustomUnit}
          onDeleteCustomUnit={onDeletePracticeCustomUnit}
          showExtra={showExtra}
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   교재 편집 폼 (Step3 — mode=textbooks)
   ════════════════════════════════════════════ */
function TextbookEditor({
  data,
  onUpdate,
  onAddChapter,
  onUpdateChapter,
  onDeleteChapter,
}: {
  data: TextbookData;
  onUpdate: (field: keyof TextbookData, value: string) => void;
  onAddChapter: () => void;
  onUpdateChapter: (id: string, field: keyof TextbookChapter, value: string) => void;
  onDeleteChapter: (id: string) => void;
}) {
  const inputCls =
    "w-full rounded border border-border bg-background px-1.5 py-0.5 text-[0.7rem] focus:outline-none focus:border-primary";
  const labelCls = "text-[0.6rem] text-muted-foreground font-medium mb-0.5";

  return (
    <div className="space-y-2">
      {/* 헤더 */}
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-100 text-cyan-600">
          <BookOpen className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[0.88rem] font-semibold tracking-tight">Step 3 — 교재 편집</h3>
        <span className="text-[0.62rem] text-muted-foreground">
          제목·저자·출판사·연도·판수·ISBN·가격·페이지·챕터·파일·비고
        </span>
        <span className="ml-auto text-[0.6rem] text-muted-foreground italic">
          제목만 필수 · 나머지는 선택
        </span>
      </div>

      {/* 기본정보 — 4단 그리드 (제목 한 줄, 나머지 4단) */}
      <div className="rounded-lg border border-border bg-card p-2 space-y-1.5">
        <div className="grid grid-cols-1 gap-1.5">
          <div>
            <div className={labelCls}>
              제목 <span className="text-rose-600">*</span>
            </div>
            <input
              className={inputCls}
              value={data.title}
              onChange={(e) => onUpdate("title", e.target.value)}
              placeholder="예: 초등 프롬프트 활용 1급"
            />
          </div>
          <div>
            <div className={labelCls}>부제</div>
            <input
              className={inputCls}
              value={data.subtitle}
              onChange={(e) => onUpdate("subtitle", e.target.value)}
              placeholder="예: AI와 함께하는 첫걸음"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          <div>
            <div className={labelCls}>저자</div>
            <input className={inputCls} value={data.author} onChange={(e) => onUpdate("author", e.target.value)} placeholder="홍길동, 김철수" />
          </div>
          <div>
            <div className={labelCls}>출판사</div>
            <input className={inputCls} value={data.publisher} onChange={(e) => onUpdate("publisher", e.target.value)} placeholder="출판사명" />
          </div>
          <div>
            <div className={labelCls}>출판년도</div>
            <input className={inputCls} value={data.year} onChange={(e) => onUpdate("year", e.target.value)} placeholder="2025" />
          </div>
          <div>
            <div className={labelCls}>판수</div>
            <input className={inputCls} value={data.edition} onChange={(e) => onUpdate("edition", e.target.value)} placeholder="초판 / 2판" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          <div>
            <div className={labelCls}>ISBN</div>
            <input className={inputCls} value={data.isbn} onChange={(e) => onUpdate("isbn", e.target.value)} placeholder="978-..." />
          </div>
          <div>
            <div className={labelCls}>총 페이지</div>
            <input className={inputCls} value={data.pages} onChange={(e) => onUpdate("pages", e.target.value)} placeholder="240" />
          </div>
          <div>
            <div className={labelCls}>정가</div>
            <input className={inputCls} value={data.price} onChange={(e) => onUpdate("price", e.target.value)} placeholder="18,000원" />
          </div>
          <div>
            <div className={labelCls}>표지 URL</div>
            <input className={inputCls} value={data.coverUrl} onChange={(e) => onUpdate("coverUrl", e.target.value)} placeholder="https://..." />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1.5">
          <div>
            <div className={labelCls}>PDF/파일 URL</div>
            <input className={inputCls} value={data.fileUrl} onChange={(e) => onUpdate("fileUrl", e.target.value)} placeholder="https://... (S3 등)" />
          </div>
        </div>
      </div>

      {/* 챕터 CRUD */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center gap-2 px-2 py-1 bg-muted/40 border-b border-border">
          <BookText className="h-3 w-3 text-cyan-600" />
          <span className="text-[0.72rem] font-semibold">챕터 목록</span>
          <span className="text-[0.6rem] text-muted-foreground">{data.chapters.length}개</span>
          <button
            onClick={onAddChapter}
            className="ml-auto flex items-center gap-0.5 rounded border border-cyan-300 bg-cyan-50 px-1.5 py-0.5 text-[0.62rem] font-medium text-cyan-700 hover:bg-cyan-100"
          >
            <Plus className="h-2.5 w-2.5" />챕터 추가
          </button>
        </div>
        {data.chapters.length === 0 ? (
          <div className="text-center py-3 text-[0.66rem] text-muted-foreground italic">
            챕터가 없습니다. "+챕터 추가"로 시작하세요.
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-2 py-1 text-[0.6rem] font-semibold text-muted-foreground text-center w-[30px]">#</th>
                <th className="px-2 py-1 text-[0.6rem] font-semibold text-muted-foreground text-left">챕터 제목</th>
                <th className="px-2 py-1 text-[0.6rem] font-semibold text-muted-foreground text-left w-[80px]">페이지</th>
                <th className="px-2 py-1 text-[0.6rem] font-semibold text-muted-foreground text-left">비고</th>
                <th className="px-2 py-1 text-[0.6rem] font-semibold text-muted-foreground text-center w-[30px]"></th>
              </tr>
            </thead>
            <tbody>
              {data.chapters.map((ch, i) => (
                <tr key={ch.id} className="border-b border-border hover:bg-muted/10">
                  <td className="px-1 py-0.5 text-[0.66rem] text-center text-muted-foreground tabular-nums">{i + 1}</td>
                  <td className="px-1 py-0.5">
                    <input
                      className="w-full bg-transparent text-[0.68rem] focus:outline-none focus:bg-white px-1 py-0.5 rounded"
                      value={ch.title}
                      onChange={(e) => onUpdateChapter(ch.id, "title", e.target.value)}
                      placeholder="챕터 제목"
                    />
                  </td>
                  <td className="px-1 py-0.5">
                    <input
                      className="w-full bg-transparent text-[0.66rem] focus:outline-none focus:bg-white px-1 py-0.5 rounded"
                      value={ch.pages}
                      onChange={(e) => onUpdateChapter(ch.id, "pages", e.target.value)}
                      placeholder="1-30"
                    />
                  </td>
                  <td className="px-1 py-0.5">
                    <input
                      className="w-full bg-transparent text-[0.62rem] focus:outline-none focus:bg-white px-1 py-0.5 rounded text-muted-foreground"
                      value={ch.notes || ""}
                      onChange={(e) => onUpdateChapter(ch.id, "notes", e.target.value)}
                      placeholder="비고"
                    />
                  </td>
                  <td className="px-1 py-0.5 text-center">
                    <button
                      onClick={() => {
                        if (confirm("이 챕터를 삭제하시겠습니까?")) onDeleteChapter(ch.id);
                      }}
                      className="rounded p-0.5 text-muted-foreground hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-2.5 w-2.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 비고 */}
      <div className="rounded-lg border border-border bg-card p-2">
        <div className={labelCls}>비고</div>
        <textarea
          className={`${inputCls} resize-y min-h-[60px]`}
          value={data.notes}
          onChange={(e) => onUpdate("notes", e.target.value)}
          placeholder="자유 메모 — 검토자, 검토 상태, 사용 여부, 추가 설명 등"
        />
      </div>
    </div>
  );
}