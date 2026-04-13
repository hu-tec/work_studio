import { useState, useMemo } from "react";
import {
  ANSWER_BANK,
  ANSWER_BANK_SUMMARY,
  QUESTION_GUIDELINES,
  type AnswerBlock,
  type QualityGrade,
  type Difficulty,
} from "./question-data";
import {
  ShieldCheck,
  Search,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  FileWarning,
  BookOpen,
  Info,
  X,
  Award,
  Layers,
  Filter,
} from "lucide-react";

/* ── 품질 등급 라벨 (내가 매긴 품질 감사 결과 — 원본 데이터에 없음) ── */
const GRADE_META: Record<QualityGrade, { bg: string; bd: string; tx: string; dot: string; label: string; desc: string }> = {
  A: { bg: "bg-emerald-50", bd: "border-emerald-300", tx: "text-emerald-700", dot: "bg-emerald-500", label: "완비", desc: "형식·내용 완비 (즉시 사용 가능)" },
  B: { bg: "bg-amber-50", bd: "border-amber-300", tx: "text-amber-700", dot: "bg-amber-500", label: "보완", desc: "사소한 누락 (1~2줄 보완 가능)" },
  C: { bg: "bg-red-50", bd: "border-red-300", tx: "text-red-700", dot: "bg-red-500", label: "결함", desc: "심각 결함 (복붙/부분/공란, 원본 재제공 필요)" },
  D: { bg: "bg-sky-50", bd: "border-sky-300", tx: "text-sky-700", dot: "bg-sky-500", label: "런타임", desc: "답안 아님 (입력 대기 문구)" },
};

const DIFF_META: Record<Difficulty, { bg: string; bd: string; tx: string }> = {
  "대": { bg: "bg-rose-50",  bd: "border-rose-300",  tx: "text-rose-700" },
  "중": { bg: "bg-amber-50", bd: "border-amber-300", tx: "text-amber-700" },
  "소": { bg: "bg-sky-50",   bd: "border-sky-300",   tx: "text-sky-700" },
  "미표기": { bg: "bg-muted/40", bd: "border-border", tx: "text-muted-foreground" },
};

/* ── 분야별 색상 (CurriculumExpandView 패턴 재사용) ── */
const CAT_BG: Record<string, string> = {
  "문서": "bg-blue-50 border-blue-200",
  "개발": "bg-slate-50 border-slate-200",
  "통역": "bg-violet-50 border-violet-200",
  "창의적 활동": "bg-rose-50 border-rose-200",
  "영상": "bg-emerald-50 border-emerald-200",
};
const CAT_BADGE: Record<string, string> = {
  "문서": "bg-blue-500",
  "개발": "bg-slate-500",
  "통역": "bg-violet-500",
  "창의적 활동": "bg-rose-500",
  "영상": "bg-emerald-500",
};

/* ── 칩 ── */
function Chip({
  active, onClick, children, color,
}: {
  active: boolean; onClick: () => void; children: React.ReactNode; color?: string;
}) {
  const base = active
    ? color || "border-primary/40 bg-primary/10 text-primary"
    : "border-border text-muted-foreground hover:bg-muted/40";
  return (
    <button onClick={onClick} className={`rounded-md border px-2 py-0.5 text-[0.68rem] font-medium transition-all ${base}`}>
      {children}
    </button>
  );
}

/* ── 개별 답안 항목 (분야 카드 내부) ── */
function AnswerItem({ answer, isOpen, onToggle }: { answer: AnswerBlock; isOpen: boolean; onToggle: () => void }) {
  const g = GRADE_META[answer.grade];
  const d = DIFF_META[answer.difficulty];
  return (
    <div className="rounded-md border border-border/60 bg-white overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-1.5 px-2 py-1 hover:bg-muted/30 transition-colors text-left`}
      >
        {isOpen ? <ChevronDown className="h-3 w-3 shrink-0" /> : <ChevronRight className="h-3 w-3 shrink-0" />}
        <span className="text-[0.62rem] text-muted-foreground font-bold shrink-0">#{answer.seq}</span>
        <span
          className={`shrink-0 inline-flex items-center gap-0.5 rounded px-1 py-0 text-[0.62rem] font-bold border ${g.bg} ${g.bd} ${g.tx}`}
          title={g.desc}
        >
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${g.dot}`} />
          {answer.grade}·{g.label}
        </span>
        <span className={`shrink-0 rounded border px-1 py-0 text-[0.6rem] ${d.bd} ${d.bg} ${d.tx}`}>{answer.difficulty}</span>
        <span className="text-[0.72rem] font-medium truncate flex-1">{answer.labelRaw}</span>
        {answer.subcategory && (
          <span className="text-[0.6rem] text-muted-foreground truncate max-w-[120px]">{answer.subcategory}</span>
        )}
        {answer.issues.length > 0 && (
          <span className="shrink-0 inline-flex items-center gap-0.5 rounded border border-red-300 bg-red-50 px-1 text-[0.6rem] text-red-700">
            <FileWarning className="h-2 w-2" />
            {answer.issues.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="border-t border-border/40 p-1.5 space-y-1 bg-muted/10">
          {answer.matchedQuestionHint && (
            <div className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[0.64rem] text-blue-900">
              <span className="font-semibold">매칭: </span>{answer.matchedQuestionHint}
            </div>
          )}
          {answer.issues.length > 0 && (
            <div className="rounded border border-red-300 bg-red-50 px-1.5 py-0.5 text-[0.64rem] text-red-800 space-y-0.5">
              <div className="font-semibold flex items-center gap-1">
                <FileWarning className="h-2 w-2" /> 이슈 {answer.issues.length}건
              </div>
              {answer.issues.map((iss, i) => (
                <div key={i} className="pl-2">· {iss}</div>
              ))}
            </div>
          )}
          <div className="rounded border border-border/50 bg-white p-1.5">
            <div className="text-[0.58rem] text-muted-foreground font-semibold mb-0.5">본문 (원본 literal)</div>
            <pre className="text-[0.64rem] leading-snug whitespace-pre-wrap font-sans text-foreground/90 max-h-96 overflow-y-auto">{answer.body}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── 분야 카드 (CurriculumExpandView의 분야 카드 패턴과 동일) ── */
function CategoryCard({
  category, answers, openSet, onToggle,
}: {
  category: string; answers: AnswerBlock[];
  openSet: Set<string>; onToggle: (id: string) => void;
}) {
  const bg = CAT_BG[category] || "bg-muted/20 border-border";
  const badge = CAT_BADGE[category] || "bg-gray-400";
  return (
    <div className={`rounded-xl border overflow-hidden ${bg}`}>
      <div className="px-3 py-1.5 border-b border-border/40 flex items-center gap-2">
        <Award className="h-3.5 w-3.5" />
        <span className={`rounded px-1.5 py-0.5 text-[0.68rem] font-semibold text-white ${badge}`}>{category}</span>
        <span className="text-[0.62rem] text-muted-foreground ml-auto">{answers.length}건</span>
      </div>
      <div className="p-2 space-y-1">
        {answers.length === 0 ? (
          <div className="text-center py-2 text-[0.64rem] text-muted-foreground italic">필터 결과 없음</div>
        ) : (
          answers.map((a) => (
            <AnswerItem key={a.id} answer={a} isOpen={openSet.has(a.id)} onToggle={() => onToggle(a.id)} />
          ))
        )}
      </div>
    </div>
  );
}

/* ── 메인 ── */
export function QuestionsView() {
  const [search, setSearch] = useState("");
  const [grades, setGrades] = useState<Set<QualityGrade>>(new Set(["A", "B", "C", "D"]));
  const categories = useMemo(() => Array.from(new Set(ANSWER_BANK.map((a) => a.category))), []);
  const [cats, setCats] = useState<Set<string>>(() => new Set(categories));
  const [diffs, setDiffs] = useState<Set<Difficulty>>(new Set(["대", "중", "소", "미표기"]));
  const [issuesOnly, setIssuesOnly] = useState(false);
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());
  const [guideOpen, setGuideOpen] = useState(false);
  const [anomaliesOpen, setAnomaliesOpen] = useState(true);
  const [gradeNoteOpen, setGradeNoteOpen] = useState(true);

  const toggleSet = <T,>(set: Set<T>, v: T, setter: (s: Set<T>) => void) => {
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    setter(n);
  };
  const toggleOpen = (id: string) => toggleSet(openSet, id, setOpenSet);
  const expandAll = () => setOpenSet(new Set(ANSWER_BANK.map((a) => a.id)));
  const collapseAll = () => setOpenSet(new Set());

  // 필터
  const filtered = useMemo(() => {
    return ANSWER_BANK.filter((a) => {
      if (!grades.has(a.grade)) return false;
      if (!cats.has(a.category)) return false;
      if (!diffs.has(a.difficulty)) return false;
      if (issuesOnly && a.issues.length === 0) return false;
      if (search) {
        const q = search.toLowerCase();
        const blob = `${a.labelRaw} ${a.category} ${a.subcategory ?? ""} ${a.body}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [grades, cats, diffs, issuesOnly, search]);

  // 분야별 그룹
  const grouped = useMemo(() => {
    const map: Record<string, AnswerBlock[]> = {};
    for (const c of categories) map[c] = [];
    for (const a of filtered) {
      (map[a.category] ||= []).push(a);
    }
    return map;
  }, [filtered, categories]);

  const activeCategoriesList = categories.filter((c) => cats.has(c));

  return (
    <div className="space-y-4">
      {/* ── 헤더 ── */}
      <div className="flex items-center gap-2">
        <Layers className="h-4 w-4 text-primary" />
        <span className="text-[0.85rem] font-semibold">전체 문제 펼치기</span>
        <span className="text-[0.7rem] text-muted-foreground">— 분야별 × 품질 등급별 답안 일람</span>
      </div>

      {/* ── 필터 바 (CurriculumExpandView 패턴) ── */}
      <div className="rounded-lg border border-border bg-card px-3 py-2 flex items-center gap-1.5 flex-wrap">
        <Filter className="h-3 w-3 text-muted-foreground shrink-0" />

        {/* 검색 */}
        <div className="relative w-[180px]">
          <Search className="absolute left-1.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색..."
            className="w-full rounded-md border border-border bg-background pl-6 pr-1.5 py-0.5 text-[0.68rem] h-6 focus:outline-none focus:border-primary"
          />
        </div>

        <span className="text-muted-foreground/30">|</span>

        {/* 품질 등급 */}
        {(Object.keys(GRADE_META) as QualityGrade[]).map((g) => (
          <Chip
            key={g}
            active={grades.has(g)}
            onClick={() => toggleSet(grades, g, setGrades)}
            color={grades.has(g) ? `${GRADE_META[g].bd} ${GRADE_META[g].bg} ${GRADE_META[g].tx}` : undefined}
          >
            {g}·{GRADE_META[g].label} {ANSWER_BANK_SUMMARY.byGrade[g]}
          </Chip>
        ))}

        <span className="text-muted-foreground/30">|</span>

        {/* 난이도 */}
        {(["대", "중", "소", "미표기"] as Difficulty[]).map((d) => (
          <Chip
            key={d}
            active={diffs.has(d)}
            onClick={() => toggleSet(diffs, d, setDiffs)}
            color={diffs.has(d) ? `${DIFF_META[d].bd} ${DIFF_META[d].bg} ${DIFF_META[d].tx}` : undefined}
          >
            {d}
          </Chip>
        ))}

        <span className="text-muted-foreground/30">|</span>

        {/* 분야 */}
        {categories.map((c) => (
          <Chip
            key={c}
            active={cats.has(c)}
            onClick={() => toggleSet(cats, c, setCats)}
            color={cats.has(c) ? `${(CAT_BG[c] || "").replace("bg-", "bg-").replace("border-", "border-")} ${cats.has(c) ? "" : ""}` : undefined}
          >
            {c}
          </Chip>
        ))}

        <span className="text-muted-foreground/30">|</span>

        <Chip active={issuesOnly} onClick={() => setIssuesOnly(!issuesOnly)}>
          이슈만
        </Chip>

        <div className="flex items-center gap-0.5 ml-auto">
          <button onClick={expandAll} className="rounded border border-border px-2 py-0.5 text-[0.66rem] hover:bg-muted/40">
            ▼ 전체펼침
          </button>
          <button onClick={collapseAll} className="rounded border border-border px-2 py-0.5 text-[0.66rem] hover:bg-muted/40">
            ▲ 전체접음
          </button>
        </div>
      </div>

      {/* ── 품질 등급 고지 (내가 매긴 감사 라벨) ── */}
      {gradeNoteOpen && (
        <div className="rounded border-2 border-amber-400 bg-amber-50 px-2 py-1.5 flex items-start gap-1.5">
          <Info className="h-3.5 w-3.5 text-amber-700 shrink-0 mt-0.5" />
          <div className="flex-1 text-[0.68rem] text-amber-900 leading-snug">
            <span className="font-bold">⚠ 품질 등급(A/B/C/D)은 원본 데이터에 없는 감사 라벨입니다.</span>{" "}
            앞 턴에서 사용자가 "제대로 작성됐는지 구분해봐"라고 요청해 내가 부여한 것이며, 원본에는 존재하지 않습니다. 정의:{" "}
            <b className="text-emerald-700">A·완비</b>={GRADE_META.A.desc} ·{" "}
            <b className="text-amber-700">B·보완</b>={GRADE_META.B.desc} ·{" "}
            <b className="text-red-700">C·결함</b>={GRADE_META.C.desc} ·{" "}
            <b className="text-sky-700">D·런타임</b>={GRADE_META.D.desc}. 불필요하면 삭제 가능.
          </div>
          <button onClick={() => setGradeNoteOpen(false)} className="rounded hover:bg-white/60 p-0.5 shrink-0">
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* ── 지침 + 이상치 (2단) ── */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <button
            onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center gap-1.5 px-2 py-1 hover:bg-muted/30"
          >
            {guideOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            <ShieldCheck className="h-3 w-3 text-primary" />
            <span className="text-[0.72rem] font-semibold">문제 출제시 지침</span>
            <span className="text-[0.6rem] text-muted-foreground truncate">{QUESTION_GUIDELINES.source}</span>
          </button>
          {guideOpen && (
            <div className="border-t border-border p-1.5 space-y-1">
              {QUESTION_GUIDELINES.principles.map((p, i) => (
                <div key={i} className="rounded border border-border/50 bg-muted/20 px-1.5 py-0.5 text-[0.66rem] leading-snug">
                  {p}
                </div>
              ))}
              <div className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[0.66rem] text-blue-900">
                <b>소 규정 ({QUESTION_GUIDELINES.smallDomainRule.example}): </b>
                {QUESTION_GUIDELINES.smallDomainRule.text}
              </div>
            </div>
          )}
        </div>

        <div className="rounded-lg border border-amber-300 bg-amber-50 overflow-hidden">
          <button
            onClick={() => setAnomaliesOpen(!anomaliesOpen)}
            className="w-full flex items-center gap-1.5 px-2 py-1 hover:bg-amber-100/60"
          >
            {anomaliesOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            <AlertTriangle className="h-3 w-3 text-amber-700" />
            <span className="text-[0.72rem] font-semibold text-amber-900">확인 필요 이상치</span>
            <span className="text-[0.6rem] text-amber-700 ml-auto">{ANSWER_BANK_SUMMARY.knownAnomalies.length}건</span>
          </button>
          {anomaliesOpen && (
            <div className="border-t border-amber-200 p-1.5 space-y-0.5">
              {ANSWER_BANK_SUMMARY.knownAnomalies.map((a, i) => (
                <div key={i} className="text-[0.66rem] text-amber-800 leading-snug">· {a}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── 분야별 그룹 — 2단 (CurriculumExpandView와 동일) ── */}
      <div className="grid grid-cols-2 gap-3">
        {activeCategoriesList.map((c) => (
          <CategoryCard
            key={c}
            category={c}
            answers={grouped[c] || []}
            openSet={openSet}
            onToggle={toggleOpen}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Filter className="h-8 w-8 mx-auto mb-2 opacity-30" />
          <p className="text-[0.82rem]">필터 결과 없음</p>
        </div>
      )}
    </div>
  );
}
