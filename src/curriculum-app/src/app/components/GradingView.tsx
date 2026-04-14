import { useState } from "react";
import {
  GRADING_CATEGORIES,
  OVERALL_SCORE_TABLE,
  DETAILED_SCORE_FORM,
  GRADING_COLORS,
  GRADING_TOTAL_WEIGHT,
  type GradingCategory,
  type GradingKey,
} from "./grading-data";
import {
  Scale,
  ClipboardCheck,
  Award,
  ChevronDown,
  ChevronRight,
  Search,
  Layers,
} from "lucide-react";

const DEFAULT_COLOR = { bg: "bg-muted/30", bd: "border-border", tx: "text-foreground", dot: "bg-muted-foreground" };

function getColor(key: GradingKey) {
  return GRADING_COLORS[key] || DEFAULT_COLOR;
}

/* ── 상단 5대분류 카드 ── */
function TopCategoryCard({ cat, isOpen, onToggle }: { cat: GradingCategory; isOpen: boolean; onToggle: () => void }) {
  const c = getColor(cat.key);
  return (
    <div className={`rounded-lg border ${c.bd} overflow-hidden`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-1.5 px-2 py-1.5 ${c.bg} hover:bg-black/[0.03] transition-colors text-left`}
      >
        {isOpen ? (
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
        )}
        <span className={`inline-block h-2 w-2 rounded-full ${c.dot}`} />
        <span className={`text-[0.75rem] font-semibold ${c.tx}`}>{cat.name}</span>
        <span className={`rounded px-1.5 py-0 text-[0.6rem] font-bold ${c.tx} bg-white/60`}>
          {cat.weight}%
        </span>
        <span className="ml-auto text-[0.6rem] text-muted-foreground">
          세부 {cat.sub.length}항목
        </span>
      </button>
      {isOpen && (
        <div className="p-2 bg-card/60 border-t border-border/40 space-y-1.5">
          {cat.definition && (
            <div className="text-[0.64rem]">
              <span className="text-[0.58rem] text-muted-foreground">정의 · </span>
              {cat.definition}
            </div>
          )}
          {cat.detailed && (
            <div className="text-[0.64rem] text-muted-foreground leading-snug">
              {cat.detailed}
            </div>
          )}
          <div className="grid grid-cols-3 gap-1">
            {cat.bonus && (
              <div className="rounded bg-emerald-50 border border-emerald-200 px-1.5 py-1">
                <div className="text-[0.58rem] font-semibold text-emerald-700 mb-0.5">가점 요인</div>
                <div className="text-[0.6rem] text-foreground/80 leading-snug">{cat.bonus}</div>
              </div>
            )}
            {cat.penalty && (
              <div className="rounded bg-rose-50 border border-rose-200 px-1.5 py-1">
                <div className="text-[0.58rem] font-semibold text-rose-700 mb-0.5">감점 요인</div>
                <div className="text-[0.6rem] text-foreground/80 leading-snug">{cat.penalty}</div>
              </div>
            )}
            {cat.guideline && (
              <div className="rounded bg-sky-50 border border-sky-200 px-1.5 py-1">
                <div className="text-[0.58rem] font-semibold text-sky-700 mb-0.5">해결 가이드</div>
                <div className="text-[0.6rem] text-foreground/80 leading-snug">{cat.guideline}</div>
              </div>
            )}
          </div>
          {cat.sub.length > 0 && (
            <div>
              <div className="text-[0.6rem] font-semibold text-muted-foreground mb-0.5">
                세부 루브릭
              </div>
              <div className="grid grid-cols-2 gap-1">
                {cat.sub.map((s, i) => (
                  <div key={i} className="rounded border border-border/60 bg-white px-1.5 py-1">
                    <div className="text-[0.64rem] font-semibold text-foreground/90">{s.name}</div>
                    <div className="space-y-0.5 mt-0.5">
                      {Object.entries(s.fields).map(([k, v]) => {
                        if (!v) return null;
                        return (
                          <div key={k} className="text-[0.58rem] leading-snug">
                            <span className="text-muted-foreground/70">{k} · </span>
                            <span className="text-foreground/80">{v}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── 총괄 점수표 (5 × 5단계) ── */
function OverallTable() {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="px-2 py-1 bg-muted/40 border-b border-border/50 flex items-center gap-1">
        <Scale className="h-3 w-3 text-muted-foreground" />
        <span className="text-[0.72rem] font-semibold">총괄 채점표 · 5단계 스케일</span>
        <span className="text-[0.6rem] text-muted-foreground">
          (0=매우미흡, 5=매우우수)
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[0.62rem]">
          <thead>
            <tr className="bg-muted/20 border-b border-border/40">
              <th className="text-left px-2 py-1 font-semibold">대분류</th>
              {[0, 1, "2~3점", 4, 5].map((p, i) => (
                <th key={i} className="text-center px-1 py-1 font-semibold">
                  {p}점
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {OVERALL_SCORE_TABLE.map((row, i) => {
              const c = getColor(row.key);
              return (
                <tr key={i} className="border-b border-border/30 hover:bg-muted/20">
                  <td className="px-2 py-1">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${c.dot} mr-1`} />
                    <span className={`font-semibold ${c.tx}`}>{row.name}</span>
                  </td>
                  {row.scales.map((s, j) => (
                    <td key={j} className="text-center px-1 py-1 text-foreground/80">
                      {s}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── 세부 채점표 양식 ── */
function DetailedForm() {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="px-2 py-1 bg-muted/40 border-b border-border/50 flex items-center gap-1">
        <ClipboardCheck className="h-3 w-3 text-muted-foreground" />
        <span className="text-[0.72rem] font-semibold">세부 채점표 · 평가 항목별 배점 양식</span>
      </div>
      <div className="p-1.5 grid grid-cols-2 gap-1.5">
        {DETAILED_SCORE_FORM.map((sec, i) => {
          const c = getColor(sec.key);
          return (
            <div key={i} className={`rounded border ${c.bd} overflow-hidden`}>
              <div className={`px-2 py-1 ${c.bg} flex items-center gap-1`}>
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${c.dot}`} />
                <span className={`text-[0.68rem] font-semibold ${c.tx}`}>{sec.category}</span>
                <span className="ml-auto text-[0.58rem] text-muted-foreground">
                  {sec.items.length}항목
                </span>
              </div>
              <div className="divide-y divide-border/30">
                {sec.items.map((it, j) => (
                  <div key={j} className="flex items-center gap-2 px-2 py-0.5">
                    <span className="text-[0.64rem] flex-1">{it.name}</span>
                    <span className="text-[0.58rem] text-muted-foreground font-mono">
                      {it.weight}점
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function GradingView() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");

  const allOpen = GRADING_CATEGORIES.every((c) => openMap[c.name]);

  const toggleAll = () => {
    if (allOpen) {
      setOpenMap({});
    } else {
      const m: Record<string, boolean> = {};
      GRADING_CATEGORIES.forEach((c) => (m[c.name] = true));
      setOpenMap(m);
    }
  };

  const filter = (c: GradingCategory) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.definition.toLowerCase().includes(q) ||
      c.detailed.toLowerCase().includes(q) ||
      c.sub.some((s) => s.name.toLowerCase().includes(q))
    );
  };

  const cats = GRADING_CATEGORIES.filter(filter);

  return (
    <div className="space-y-2 p-1">
      {/* 상단 바 */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 flex-1 min-w-40">
          <Search className="h-3 w-3 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="대분류·정의·세부 항목 검색"
            className="flex-1 bg-transparent text-[0.7rem] outline-none"
          />
        </div>
        <button
          onClick={toggleAll}
          className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[0.68rem] text-muted-foreground hover:bg-muted/40"
        >
          <Layers className="h-3 w-3" />
          {allOpen ? "전체 접기" : "전체 펼치기"}
        </button>
        <span className="text-[0.68rem] text-muted-foreground">
          <Award className="inline h-3 w-3 mr-0.5" />
          {cats.length}대분류 · 총 {GRADING_TOTAL_WEIGHT}%
        </span>
      </div>

      {/* 5대분류 카드 — 2단 그리드 */}
      <div className="grid grid-cols-2 gap-1.5">
        {cats.map((cat, i) => (
          <TopCategoryCard
            key={i}
            cat={cat}
            isOpen={!!openMap[cat.name]}
            onToggle={() =>
              setOpenMap((m) => ({ ...m, [cat.name]: !m[cat.name] }))
            }
          />
        ))}
      </div>

      {/* 총괄 점수표 */}
      <OverallTable />

      {/* 세부 양식 */}
      <DetailedForm />
    </div>
  );
}
