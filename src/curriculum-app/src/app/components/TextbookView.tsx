import { useState, useMemo } from "react";
import {
  TEXTBOOKS_PROMPT,
  TEXTBOOKS_ETHICS,
  TEXTBOOKS_TRANSLATION,
  ETHICS_LEVEL_SUMMARIES,
  ETHICS_COMMON_TOC,
  ETHICS_GRADE_DIFF,
  PROMPT_TEXTBOOK_META,
  PROMPT_COMMON_TOC,
  ETHICS_SAMPLES,
  ETHICS_AUTHORING_GUIDELINES,
  SAMPLE_CHAPTER_ETHICS,
  SAMPLE_CHAPTER_PROMPT,
  TEXTBOOK_TARGETS,
  type Textbook,
  type TextbookUnit,
  type TextbookSubject,
} from "./textbook-data";
import {
  BookOpen,
  Search,
  ChevronDown,
  ChevronRight,
  Layers,
  Filter,
  Target,
  Wrench,
  Info,
} from "lucide-react";

const SUBJECT_BG: Record<TextbookSubject, string> = {
  prompt: "bg-blue-50 border-blue-200",
  ethics: "bg-rose-50 border-rose-200",
  translation: "bg-emerald-50 border-emerald-200",
};
const SUBJECT_BADGE: Record<TextbookSubject, string> = {
  prompt: "bg-blue-500",
  ethics: "bg-rose-500",
  translation: "bg-emerald-500",
};
const SUBJECT_LABEL: Record<TextbookSubject, string> = {
  prompt: "프롬프트",
  ethics: "AI 윤리",
  translation: "번역",
};

/* ── 필터 칩 ── */
function Chip({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  const base = active
    ? color || "border-primary/40 bg-primary/10 text-primary"
    : "border-border text-muted-foreground hover:bg-muted/40";
  return (
    <button
      onClick={onClick}
      className={`rounded-md border px-2 py-0.5 text-[0.68rem] font-medium transition-all ${base}`}
    >
      {children}
    </button>
  );
}

/* ── 단원 아이템 (펼침) ── */
function UnitItem({ unit }: { unit: TextbookUnit }) {
  return (
    <div className="rounded border border-border/60 bg-card/60 px-2 py-1 text-[0.66rem] space-y-0.5">
      <div className="flex items-start gap-1.5">
        <span className="shrink-0 rounded bg-muted px-1 py-0 text-[0.6rem] font-mono text-muted-foreground">
          {unit.no || "-"}
        </span>
        <span className="font-semibold text-foreground/90 leading-snug">{unit.title}</span>
      </div>
      {unit.objective && (
        <div className="flex items-start gap-1 pl-5 text-muted-foreground">
          <Target className="h-2.5 w-2.5 mt-0.5 shrink-0" />
          <span className="leading-snug">{unit.objective}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-1 pl-5 text-[0.6rem]">
        {unit.theoryPractice && (
          <span className="rounded bg-indigo-100 px-1 py-0 text-indigo-700">
            {unit.theoryPractice}
          </span>
        )}
        {unit.pageRange && unit.pageRange !== "해당없음" && (
          <span className="rounded bg-muted/60 px-1 py-0 text-muted-foreground">
            p. {unit.pageRange}
          </span>
        )}
        {unit.emphasis && (
          <span className="rounded bg-amber-100 px-1 py-0 text-amber-700">{unit.emphasis}</span>
        )}
      </div>
      {unit.example && (
        <div className="pl-5 text-muted-foreground leading-snug">
          <span className="text-[0.58rem] opacity-60">예시 · </span>
          {unit.example}
        </div>
      )}
      {unit.content && (
        <div className="pl-5 text-muted-foreground leading-snug">
          <span className="text-[0.58rem] opacity-60">교육내용 · </span>
          {unit.content}
        </div>
      )}
      {unit.tools && (
        <div className="flex items-start gap-1 pl-5 text-muted-foreground">
          <Wrench className="h-2.5 w-2.5 mt-0.5 shrink-0" />
          <span className="leading-snug">{unit.tools}</span>
        </div>
      )}
    </div>
  );
}

/* ── 교재 카드 ── */
function TextbookCard({
  book,
  isOpen,
  onToggle,
  search,
}: {
  book: Textbook;
  isOpen: boolean;
  onToggle: () => void;
  search: string;
}) {
  const bg = SUBJECT_BG[book.subject] || "bg-muted/30 border-border";
  const badge = SUBJECT_BADGE[book.subject] || "bg-gray-400";
  const subjLabel = SUBJECT_LABEL[book.subject] || book.subject;

  const filteredUnits = useMemo(() => {
    if (!search) return book.units;
    const q = search.toLowerCase();
    return book.units.filter((u) =>
      (u.title + u.objective + u.content + u.example).toLowerCase().includes(q)
    );
  }, [book.units, search]);

  return (
    <div className={`rounded-lg border overflow-hidden ${bg}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-black/[0.03] transition-colors text-left"
      >
        {isOpen ? (
          <ChevronDown className="h-3 w-3 text-muted-foreground shrink-0" />
        ) : (
          <ChevronRight className="h-3 w-3 text-muted-foreground shrink-0" />
        )}
        <span
          className={`shrink-0 rounded px-1.5 py-0 text-[0.6rem] font-semibold text-white ${badge}`}
        >
          {subjLabel}
        </span>
        <span className="text-[0.72rem] font-semibold truncate">{book.name}</span>
        <span className="ml-auto shrink-0 text-[0.6rem] text-muted-foreground">
          {filteredUnits.length}/{book.units.length}단
        </span>
      </button>
      {isOpen && filteredUnits.length > 0 && (
        <div className="p-1.5 grid grid-cols-2 gap-1 border-t border-border/40">
          {filteredUnits.map((u, i) => (
            <UnitItem key={`${book.name}-${u.no}-${i}`} unit={u} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── 메타 패널 (급수 매핑/공통 목차/급수 차이) ── */
function EthicsMetaPanel() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg border border-rose-200 bg-rose-50/40 p-2">
        <div className="flex items-center gap-1 mb-1">
          <Info className="h-3 w-3 text-rose-600" />
          <span className="text-[0.7rem] font-semibold text-rose-700">윤리 급수 통합 정리</span>
        </div>
        <div className="space-y-0.5">
          {ETHICS_LEVEL_SUMMARIES.map((l, i) => (
            <div key={i} className="rounded border border-rose-200/60 bg-white px-1.5 py-0.5 text-[0.62rem]">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-rose-700">{l.name}</span>
                <span className="text-muted-foreground">· {l.audience}</span>
              </div>
              {l.content && (
                <div className="text-[0.6rem] text-muted-foreground leading-tight">
                  {l.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-rose-200 bg-rose-50/40 p-2">
        <div className="flex items-center gap-1 mb-1">
          <Layers className="h-3 w-3 text-rose-600" />
          <span className="text-[0.7rem] font-semibold text-rose-700">윤리 교재 공통 목차</span>
        </div>
        <div className="space-y-0.5">
          {ETHICS_COMMON_TOC.map((t, i) => (
            <div
              key={i}
              className="rounded border border-rose-200/60 bg-white px-1.5 py-0.5 text-[0.62rem] leading-snug"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="mt-1.5">
          <div className="text-[0.6rem] font-semibold text-rose-600 mb-0.5">급수별 시험 차이</div>
          <div className="space-y-0.5">
            {ETHICS_GRADE_DIFF.map((d, i) => (
              <div
                key={i}
                className="rounded border border-rose-200/60 bg-white px-1.5 py-0.5 text-[0.6rem] leading-snug"
              >
                <div className="font-semibold text-rose-700">{d.grade}</div>
                <div className="text-muted-foreground">{d.objective}</div>
                <div>
                  <span className="text-muted-foreground">번역 시험:</span> {d.translationExam}
                </div>
                <div>
                  <span className="text-muted-foreground">프롬 시험:</span> {d.promptExam}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptMetaPanel() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg border border-blue-200 bg-blue-50/40 p-2">
        <div className="flex items-center gap-1 mb-1">
          <Info className="h-3 w-3 text-blue-600" />
          <span className="text-[0.7rem] font-semibold text-blue-700">프롬프트 교재 급수별 대상·목표·도구</span>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {PROMPT_TEXTBOOK_META.map((m, i) => (
            <div key={i} className="rounded border border-blue-200/60 bg-white px-1.5 py-0.5 text-[0.62rem] leading-snug">
              <div className="font-semibold text-blue-700">{m.name}</div>
              <div className="text-muted-foreground">
                <span className="opacity-60">대상 · </span>
                {m.target}
              </div>
              <div className="text-muted-foreground">
                <span className="opacity-60">목표 · </span>
                {m.goal}
              </div>
              <div className="text-muted-foreground">
                <span className="opacity-60">도구 · </span>
                {m.tools}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-blue-200 bg-blue-50/40 p-2">
        <div className="flex items-center gap-1 mb-1">
          <Layers className="h-3 w-3 text-blue-600" />
          <span className="text-[0.7rem] font-semibold text-blue-700">프롬프트 활용 교재 공통 목차 (8장)</span>
        </div>
        <div className="space-y-0.5">
          {PROMPT_COMMON_TOC.map((t, i) => (
            <div
              key={i}
              className="rounded border border-blue-200/60 bg-white px-1.5 py-0.5 text-[0.62rem] leading-snug"
            >
              {t}
            </div>
          ))}
        </div>
        {SAMPLE_CHAPTER_PROMPT.length > 0 && (
          <div className="mt-1.5">
            <div className="text-[0.6rem] font-semibold text-blue-600 mb-0.5">
              📘 1장 샘플 원고
            </div>
            <div className="rounded border border-blue-200/60 bg-white p-1 text-[0.6rem] leading-snug space-y-0.5">
              {SAMPLE_CHAPTER_PROMPT.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EthicsSamplePanel() {
  if (ETHICS_SAMPLES.length === 0) return null;
  return (
    <div className="rounded-lg border border-rose-200 bg-rose-50/40 p-2">
      <div className="flex items-center gap-1 mb-1">
        <Info className="h-3 w-3 text-rose-600" />
        <span className="text-[0.7rem] font-semibold text-rose-700">윤리 교재 샘플 콘텐츠 + 제작 유의사항</span>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="space-y-0.5">
          {ETHICS_SAMPLES.map((s, i) => (
            <div key={i} className="rounded border border-rose-200/60 bg-white px-1.5 py-0.5 text-[0.6rem] leading-snug">
              <div className="font-semibold text-rose-700">{s.title}</div>
              {s.lines.map((l, j) => (
                <div key={j} className="text-muted-foreground">· {l}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="space-y-0.5">
          {SAMPLE_CHAPTER_ETHICS.length > 0 && (
            <div className="rounded border border-rose-200/60 bg-white px-1.5 py-0.5 text-[0.6rem] leading-snug">
              <div className="font-semibold text-rose-700 mb-0.5">📘 1장 샘플 원고</div>
              {SAMPLE_CHAPTER_ETHICS.map((line, i) => (
                <div key={i} className="text-muted-foreground">{line}</div>
              ))}
            </div>
          )}
          {ETHICS_AUTHORING_GUIDELINES.length > 0 && (
            <div className="rounded border border-rose-200/60 bg-white px-1.5 py-0.5 text-[0.6rem] leading-snug">
              <div className="font-semibold text-rose-700 mb-0.5">📋 교재 제작 유의사항</div>
              {ETHICS_AUTHORING_GUIDELINES.map((line, i) => (
                <div key={i} className="text-muted-foreground">· {line}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TargetPanel() {
  const rows = [
    { label: "프롬프트", items: TEXTBOOK_TARGETS.prompt.map((t) => `${t.track} ${t.level} · ${t.target}`) },
    { label: "AI 윤리", items: TEXTBOOK_TARGETS.ethics.map((t) => `${t.track} ${t.level} · ${t.age}`) },
    { label: "번역", items: TEXTBOOK_TARGETS.translation.map((t) => `${t.track} ${t.level} · ${t.target}`) },
  ];
  return (
    <div className="rounded-lg border border-border bg-card/80 p-2">
      <div className="flex items-center gap-1 mb-1">
        <Target className="h-3 w-3 text-muted-foreground" />
        <span className="text-[0.7rem] font-semibold">교육별 대상 매핑 (원본 시트: 교육별 대상)</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {rows.map((r) => (
          <div key={r.label} className="rounded border border-border/60 bg-white p-1.5">
            <div className="text-[0.64rem] font-semibold mb-0.5">{r.label}</div>
            <div className="space-y-0.5">
              {r.items.map((it, i) => (
                <div key={i} className="text-[0.6rem] text-muted-foreground leading-snug">
                  · {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 메인 ── */
export function TextbookView() {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState<Set<string>>(
    new Set(["prompt", "ethics", "translation"])
  );
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const all = useMemo(() => {
    const arr: Textbook[] = [];
    if (subjectFilter.has("prompt")) arr.push(...TEXTBOOKS_PROMPT);
    if (subjectFilter.has("ethics")) arr.push(...TEXTBOOKS_ETHICS);
    if (subjectFilter.has("translation")) arr.push(...TEXTBOOKS_TRANSLATION);
    if (!search) return arr;
    const q = search.toLowerCase();
    return arr.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.units.some((u) =>
          (u.title + u.objective + u.content + u.example).toLowerCase().includes(q)
        )
    );
  }, [subjectFilter, search]);

  const toggleSubject = (s: string) => {
    const next = new Set(subjectFilter);
    if (next.has(s)) next.delete(s);
    else next.add(s);
    setSubjectFilter(next);
  };

  const allExpanded = all.length > 0 && all.every((b) => openMap[b.name]);

  const toggleAll = () => {
    if (allExpanded) {
      setOpenMap({});
    } else {
      const next: Record<string, boolean> = {};
      all.forEach((b) => {
        next[b.name] = true;
      });
      setOpenMap(next);
    }
  };

  const totalUnits = all.reduce((s, b) => s + b.units.length, 0);

  return (
    <div className="space-y-2 p-1">
      {/* 안내 배너 — 시드 vs 저장 목록 구분 */}
      <div className="rounded border border-cyan-200 bg-cyan-50/60 px-2 py-1 flex items-start gap-1.5">
        <Info className="h-3 w-3 text-cyan-700 shrink-0 mt-0.5" />
        <div className="text-[0.62rem] text-cyan-900 leading-snug">
          <b>이 탭은 가연 엑셀 원본 교재 데이터입니다</b> — 사용자가 추가한 교재(저장 목록)와는 별개의 시드입니다.
          새 교재 등록은 <b>[교재 편집]</b> 탭에서 제목·저자·챕터 입력 후 [저장] → [저장 목록]에서 확인.
        </div>
      </div>
      {/* 상단: 검색 + 필터 */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 flex-1 min-w-40">
          <Search className="h-3 w-3 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="교재·단원·목표·예시 검색"
            className="flex-1 bg-transparent text-[0.7rem] outline-none"
          />
        </div>
        <div className="flex items-center gap-1">
          <Filter className="h-3 w-3 text-muted-foreground" />
          <Chip
            active={subjectFilter.has("prompt")}
            onClick={() => toggleSubject("prompt")}
            color="border-blue-400 bg-blue-50 text-blue-700"
          >
            프롬프트 {TEXTBOOKS_PROMPT.length}
          </Chip>
          <Chip
            active={subjectFilter.has("ethics")}
            onClick={() => toggleSubject("ethics")}
            color="border-rose-400 bg-rose-50 text-rose-700"
          >
            AI 윤리 {TEXTBOOKS_ETHICS.length}
          </Chip>
          <Chip
            active={subjectFilter.has("translation")}
            onClick={() => toggleSubject("translation")}
            color="border-emerald-400 bg-emerald-50 text-emerald-700"
          >
            번역 {TEXTBOOKS_TRANSLATION.length}
          </Chip>
        </div>
        <button
          onClick={toggleAll}
          className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[0.68rem] text-muted-foreground hover:bg-muted/40"
        >
          <Layers className="h-3 w-3" />
          {allExpanded ? "전체 접기" : "전체 펼치기"}
        </button>
        <span className="text-[0.68rem] text-muted-foreground">
          <BookOpen className="inline h-3 w-3 mr-0.5" />
          {all.length}권 · {totalUnits}단
        </span>
      </div>

      {/* 메타 패널 */}
      <TargetPanel />
      {subjectFilter.has("prompt") && <PromptMetaPanel />}
      {subjectFilter.has("ethics") && <EthicsMetaPanel />}
      {subjectFilter.has("ethics") && <EthicsSamplePanel />}

      {/* 교재 카드 그리드 (2단) */}
      <div className="grid grid-cols-2 gap-2">
        {all.map((b, i) => (
          <TextbookCard
            key={`${b.name}-${i}`}
            book={b}
            isOpen={!!openMap[b.name]}
            onToggle={() =>
              setOpenMap((m) => ({ ...m, [b.name]: !m[b.name] }))
            }
            search={search}
          />
        ))}
      </div>
      {all.length === 0 && (
        <div className="text-center text-[0.7rem] text-muted-foreground py-6">
          조건에 맞는 교재가 없습니다.
        </div>
      )}
    </div>
  );
}
