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
  FileText,
  Search,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  FileWarning,
  CheckCircle2,
  CircleDashed,
  XCircle,
  Clock,
  BookOpen,
} from "lucide-react";

/* ── 등급 스타일 ── */
const gradeStyle: Record<QualityGrade, { bg: string; bd: string; tx: string; icon: React.ReactNode; label: string }> = {
  A: { bg: "bg-emerald-50", bd: "border-emerald-300", tx: "text-emerald-700", icon: <CheckCircle2 className="h-2.5 w-2.5" />, label: "A" },
  B: { bg: "bg-amber-50", bd: "border-amber-300", tx: "text-amber-700", icon: <CircleDashed className="h-2.5 w-2.5" />, label: "B" },
  C: { bg: "bg-red-50", bd: "border-red-300", tx: "text-red-700", icon: <XCircle className="h-2.5 w-2.5" />, label: "C" },
  D: { bg: "bg-sky-50", bd: "border-sky-300", tx: "text-sky-700", icon: <Clock className="h-2.5 w-2.5" />, label: "D" },
};

const diffColor: Record<Difficulty, string> = {
  "대": "border-rose-300 bg-rose-50 text-rose-700",
  "중": "border-amber-300 bg-amber-50 text-amber-700",
  "소": "border-sky-300 bg-sky-50 text-sky-700",
  "미표기": "border-border bg-muted/40 text-muted-foreground",
};

/* ── 칩 ── */
function Chip({
  active,
  onClick,
  children,
  shape = "pill",
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  shape?: "pill" | "square";
  color?: string;
}) {
  const base = active
    ? color || "border-primary/50 bg-primary/10 text-primary"
    : "border-border text-muted-foreground hover:bg-muted/60";
  const rounded = shape === "pill" ? "rounded-full" : "rounded";
  return (
    <button
      onClick={onClick}
      className={`${rounded} border px-1.5 py-0 text-[10px] font-medium transition-all ${base}`}
    >
      {children}
    </button>
  );
}

/* ── 개별 답안 카드 ── */
function AnswerCard({ answer, isOpen, onToggle }: { answer: AnswerBlock; isOpen: boolean; onToggle: () => void }) {
  const g = gradeStyle[answer.grade];
  return (
    <div className={`rounded border ${g.bd} overflow-hidden`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-1.5 px-1.5 py-1 ${g.bg} hover:brightness-95 transition-all text-left`}
      >
        {isOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <span className={`inline-flex items-center gap-0.5 rounded border ${g.bd} ${g.tx} bg-white px-1 text-[9px] font-bold`}>
          {g.icon}
          {g.label}
        </span>
        <span className="text-[9px] text-muted-foreground">#{answer.seq}</span>
        <span className="text-[11px] font-semibold truncate flex-1">{answer.labelRaw}</span>
        {answer.subcategory && (
          <span className="text-[9px] text-muted-foreground truncate max-w-[140px]">{answer.subcategory}</span>
        )}
        <span className={`shrink-0 rounded-full border px-1.5 py-0 text-[9px] ${diffColor[answer.difficulty]}`}>
          {answer.difficulty}
        </span>
        {answer.issues.length > 0 && (
          <span className="shrink-0 inline-flex items-center gap-0.5 rounded border border-red-300 bg-red-50 px-1 text-[9px] text-red-700">
            <FileWarning className="h-2.5 w-2.5" />
            {answer.issues.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="border-t border-border/50 p-1.5 bg-white space-y-1.5">
          {answer.matchedQuestionHint && (
            <div className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-800">
              <span className="font-semibold">매칭: </span>
              {answer.matchedQuestionHint}
            </div>
          )}
          {answer.issues.length > 0 && (
            <div className="rounded border border-red-300 bg-red-50 px-1.5 py-0.5 text-[10px] text-red-800 space-y-0.5">
              <div className="font-semibold flex items-center gap-1">
                <FileWarning className="h-2.5 w-2.5" />이슈
              </div>
              {answer.issues.map((iss, i) => (
                <div key={i} className="pl-3">· {iss}</div>
              ))}
            </div>
          )}
          <div className="rounded border border-border/40 bg-muted/20 p-1.5">
            <div className="text-[9px] text-muted-foreground mb-0.5 font-semibold">본문 (원본 literal)</div>
            <pre className="text-[10px] leading-snug whitespace-pre-wrap font-sans text-foreground/90">{answer.body}</pre>
          </div>
        </div>
      )}
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
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [guideOpen, setGuideOpen] = useState(true);

  const toggleSet = <T,>(set: Set<T>, v: T, setter: (s: Set<T>) => void) => {
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    setter(n);
  };
  const toggleOpen = (id: string) => toggleSet(open, id, setOpen);

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

  const expandAll = () => setOpen(new Set(filtered.map((a) => a.id)));
  const collapseAll = () => setOpen(new Set());

  return (
    <div className="space-y-1">
      {/* ── 헤더 ── */}
      <div className="rounded border border-border bg-card px-1.5 py-1 flex flex-wrap items-center gap-1">
        <BookOpen className="h-3.5 w-3.5 text-primary" />
        <span className="text-[12px] font-semibold">문제은행</span>

        <div className="relative flex-1 min-w-[120px] max-w-[200px]">
          <Search className="absolute left-1 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색..."
            className="w-full rounded border border-border bg-background pl-5 pr-1 py-0 text-[11px] h-5 focus:outline-none focus:border-primary"
          />
        </div>

        {/* 등급 필터 */}
        <div className="flex items-center gap-0.5">
          <span className="text-[9px] text-muted-foreground">등급</span>
          {(["A", "B", "C", "D"] as QualityGrade[]).map((g) => (
            <Chip key={g} active={grades.has(g)} onClick={() => toggleSet(grades, g, setGrades)} shape="pill"
              color={grades.has(g) ? `${gradeStyle[g].bd} ${gradeStyle[g].bg} ${gradeStyle[g].tx}` : undefined}>
              {g}
            </Chip>
          ))}
        </div>

        {/* 난이도 필터 */}
        <div className="flex items-center gap-0.5">
          <span className="text-[9px] text-muted-foreground">난이도</span>
          {(["대", "중", "소", "미표기"] as Difficulty[]).map((d) => (
            <Chip key={d} active={diffs.has(d)} onClick={() => toggleSet(diffs, d, setDiffs)} shape="pill"
              color={diffs.has(d) ? diffColor[d] : undefined}>
              {d}
            </Chip>
          ))}
        </div>

        {/* 카테고리 필터 */}
        <div className="flex items-center gap-0.5">
          <span className="text-[9px] text-muted-foreground">분야</span>
          {categories.map((c) => (
            <Chip key={c} active={cats.has(c)} onClick={() => toggleSet(cats, c, setCats)} shape="pill">
              {c}
            </Chip>
          ))}
        </div>

        <Chip active={issuesOnly} onClick={() => setIssuesOnly(!issuesOnly)} shape="square">
          이슈만
        </Chip>

        <div className="flex items-center gap-0.5 ml-auto">
          <button
            onClick={expandAll}
            className="rounded border border-border px-1.5 py-0 text-[10px] hover:bg-muted/60"
          >
            ▼ 전체펼침
          </button>
          <button
            onClick={collapseAll}
            className="rounded border border-border px-1.5 py-0 text-[10px] hover:bg-muted/60"
          >
            ▲ 전체접음
          </button>
        </div>

        {/* 카운트 */}
        <div className="flex items-center gap-0.5 text-[10px] w-full">
          <span className="text-muted-foreground">
            표시 {filtered.length}/{ANSWER_BANK_SUMMARY.total}
          </span>
          <span className={`inline-flex items-center gap-0.5 rounded border ${gradeStyle.A.bd} ${gradeStyle.A.bg} px-1 ${gradeStyle.A.tx}`}>
            A {ANSWER_BANK_SUMMARY.byGrade.A}
          </span>
          <span className={`inline-flex items-center gap-0.5 rounded border ${gradeStyle.B.bd} ${gradeStyle.B.bg} px-1 ${gradeStyle.B.tx}`}>
            B {ANSWER_BANK_SUMMARY.byGrade.B}
          </span>
          <span className={`inline-flex items-center gap-0.5 rounded border ${gradeStyle.C.bd} ${gradeStyle.C.bg} px-1 ${gradeStyle.C.tx}`}>
            C {ANSWER_BANK_SUMMARY.byGrade.C}
          </span>
          <span className={`inline-flex items-center gap-0.5 rounded border ${gradeStyle.D.bd} ${gradeStyle.D.bg} px-1 ${gradeStyle.D.tx}`}>
            D {ANSWER_BANK_SUMMARY.byGrade.D}
          </span>
          <span className="ml-auto text-[9px] text-muted-foreground italic">
            원본 literal만 · 빈칸 임의 생성 없음
          </span>
        </div>
      </div>

      {/* ── 문제 출제시 지침 (규정) ── */}
      <div className="rounded border border-border bg-card overflow-hidden">
        <button
          onClick={() => setGuideOpen(!guideOpen)}
          className="w-full flex items-center gap-1 px-1.5 py-0.5 hover:bg-muted/40"
        >
          {guideOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          <ShieldCheck className="h-3 w-3 text-primary" />
          <span className="text-[11px] font-semibold">문제 출제시 지침</span>
          <span className="text-[9px] text-muted-foreground ml-1">{QUESTION_GUIDELINES.source}</span>
        </button>
        {guideOpen && (
          <div className="border-t border-border p-1.5 space-y-1">
            {QUESTION_GUIDELINES.principles.map((p, i) => (
              <div key={i} className="rounded border border-border/50 bg-muted/20 px-1.5 py-0.5 text-[10px] leading-snug">
                {p}
              </div>
            ))}
            <div className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-900">
              <span className="font-semibold">소 규정 예시 ({QUESTION_GUIDELINES.smallDomainRule.example}): </span>
              {QUESTION_GUIDELINES.smallDomainRule.text}
            </div>
          </div>
        )}
      </div>

      {/* ── 이상치 요약 ── */}
      {ANSWER_BANK_SUMMARY.knownAnomalies.length > 0 && (
        <div className="rounded border border-amber-300 bg-amber-50 p-1.5 space-y-0.5">
          <div className="flex items-center gap-1 text-[10px] font-semibold text-amber-900">
            <AlertTriangle className="h-2.5 w-2.5" />
            확인 필요 이상치 ({ANSWER_BANK_SUMMARY.knownAnomalies.length}건 — 추측 없이 원본 상태 그대로 보존)
          </div>
          {ANSWER_BANK_SUMMARY.knownAnomalies.map((a, i) => (
            <div key={i} className="text-[10px] text-amber-800 pl-4">· {a}</div>
          ))}
        </div>
      )}

      {/* ── 답안 목록 ── */}
      <div className="space-y-1">
        {filtered.length === 0 ? (
          <div className="rounded border border-border bg-muted/30 px-2 py-3 text-center text-[11px] text-muted-foreground">
            필터 조건에 맞는 답안이 없습니다.
          </div>
        ) : (
          filtered.map((a) => (
            <AnswerCard key={a.id} answer={a} isOpen={open.has(a.id)} onToggle={() => toggleOpen(a.id)} />
          ))
        )}
      </div>
    </div>
  );
}
