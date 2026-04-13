import { useState } from "react";
import {
  COMMON_KEYWORDS, PROMPT_KEYWORDS, SPECIALTY_KEYWORDS, ETHICS_KEYWORDS,
  FIELD_OPTIONS, MID_OPTIONS, LEVEL_BY_MID, getTargets, getFieldKeywords,
} from "./data";
import {
  getGradeBasicCurriculum, getFieldBasicCurriculum,
  getPracticeCurriculum, getTranslationBasicCurriculum, getTranslationPracticeCurriculum,
} from "./curriculum-data";
import type { CurriculumGroup } from "./curriculum-data";
import {
  Hash, BookText, Wrench, Award, Users, ChevronRight, Layers, Filter, FileWarning,
} from "lucide-react";
import { MODE_LABEL, type ContentMode } from "./mode";

/* ── 색상 맵 ── */
const fieldBg: Record<string, string> = {
  "프롬프트": "bg-blue-50 border-blue-200",
  "번역": "bg-emerald-50 border-emerald-200",
  "AI 윤리": "bg-rose-50 border-rose-200",
};
const fieldBadge: Record<string, string> = {
  "프롬프트": "bg-blue-500",
  "번역": "bg-emerald-500",
  "AI 윤리": "bg-rose-500",
};
const kwGroupCfg: Record<string, { label: string; dot: string }> = {
  common:    { label: "공통",     dot: "bg-amber-400" },
  prompt:    { label: "프롬프트", dot: "bg-blue-400" },
  specialty: { label: "전문",     dot: "bg-emerald-400" },
  ethics:    { label: "윤리",     dot: "bg-rose-400" },
};

/* ── 필터 토글 버튼 ── */
function Chip({ active, onClick, children, color }: {
  active: boolean; onClick: () => void; children: React.ReactNode; color?: string;
}) {
  const base = active
    ? color || "border-primary/40 bg-primary/10 text-primary"
    : "border-border text-muted-foreground hover:bg-muted/60";
  return (
    <button onClick={onClick} className={`rounded-md border px-2 py-0.5 text-[0.68rem] font-medium transition-all ${base}`}>
      {children}
    </button>
  );
}

/* ── 그룹 태그 분류 ── */
type GroupTag = "공통" | "분야별" | "급수별" | "평가" | "분야특화";
const GROUP_TAGS: { tag: GroupTag; color: string }[] = [
  { tag: "공통", color: "border-amber-300 bg-amber-50 text-amber-700" },
  { tag: "분야별", color: "border-violet-300 bg-violet-50 text-violet-700" },
  { tag: "급수별", color: "border-sky-300 bg-sky-50 text-sky-700" },
  { tag: "평가", color: "border-pink-300 bg-pink-50 text-pink-700" },
  { tag: "분야특화", color: "border-cyan-300 bg-cyan-50 text-cyan-700" },
];

function tagGroup(name: string): GroupTag {
  if (/Ⅰ|공통/.test(name)) return "공통";
  if (/Ⅱ|분야별/.test(name)) return "분야별";
  if (/평가|인증/.test(name)) return "평가";
  if (/^\d단계|^교육/.test(name)) return "급수별";
  return "분야특화";
}

/* ── 단원 그룹 렌더 ── */
function UnitGroupBlock({ groups, color, icon, label }: {
  groups: CurriculumGroup[];
  color: string;
  icon: React.ReactNode;
  label: string;
}) {
  if (groups.length === 0) return null;
  const totalUnits = groups.reduce((s, g) => s + g.units.length, 0);
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className={`px-3 py-1.5 ${color} border-b border-border/50 flex items-center gap-1.5`}>
        {icon}
        <span className="text-[0.72rem] font-semibold">{label}</span>
        <span className="text-[0.62rem] text-muted-foreground">{totalUnits}단</span>
      </div>
      <div className="divide-y divide-border/30">
        {groups.map((g) => (
          <div key={g.name} className="px-3 py-1.5">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[0.7rem] font-medium">{g.name}</span>
              {g.subtitle && <span className="text-[0.62rem] text-muted-foreground">{g.subtitle}</span>}
            </div>
            <div className="space-y-0.5 pl-2">
              {g.units.map((u) => (
                <div key={u.id} className="flex items-start gap-1.5 text-[0.66rem]">
                  <span className="shrink-0 text-muted-foreground/60">·</span>
                  <div className="min-w-0">
                    <span className="font-medium">{u.title}</span>
                    {u.hours && <span className="text-muted-foreground ml-1">({u.hours})</span>}
                    <span className="text-muted-foreground ml-1">— {u.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 키워드 블록 ── */
function KeywordBlock({ categoryKey, keywords }: { categoryKey: string; keywords: string[] }) {
  const cfg = kwGroupCfg[categoryKey];
  if (!cfg || keywords.length === 0) return null;
  return (
    <div className="flex items-start gap-1.5">
      <span className="shrink-0 flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 text-[0.62rem] font-medium text-muted-foreground">
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
        {cfg.label} {keywords.length}
      </span>
      <div className="flex flex-wrap gap-1">
        {keywords.map((kw, i) => (
          <span key={`${kw}-${i}`} className="rounded bg-muted/60 px-1.5 py-0.5 text-[0.64rem] text-foreground/75">{kw}</span>
        ))}
      </div>
    </div>
  );
}

/* ── 하나의 분야+급수 조합 카드 ── */
function CombinationCard({ field, mid, level, showCommon, showFieldKw, showBasic, showPractice, groupFilter }: {
  field: string; mid: string; level: string;
  showCommon: boolean; showFieldKw: boolean; showBasic: boolean; showPractice: boolean;
  groupFilter: Set<GroupTag>;
}) {
  const targets = getTargets(mid, level);
  const fieldInfo = getFieldKeywords(field);

  const filterGroups = (groups: CurriculumGroup[]) => groups.filter(g => groupFilter.has(tagGroup(g.name)));
  let basicGroups: CurriculumGroup[] = filterGroups([...getGradeBasicCurriculum(mid, level), ...getFieldBasicCurriculum(field)]);
  let practiceGroups: CurriculumGroup[] = filterGroups(getPracticeCurriculum(field));

  const hasKeywords = (showCommon && COMMON_KEYWORDS.length > 0) || (showFieldKw && fieldInfo.keywords.length > 0);
  const hasBasic = showBasic && basicGroups.length > 0;
  const hasPractice = showPractice && practiceGroups.length > 0;
  if (!hasKeywords && !hasBasic && !hasPractice) return null;

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="px-3 py-1.5 bg-muted/30 border-b border-border/60 flex items-center gap-2">
        <span className={`rounded px-1.5 py-0.5 text-[0.62rem] font-medium text-white ${fieldBadge[field] || "bg-gray-400"}`}>{field}</span>
        <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[0.62rem] font-medium text-indigo-700">{mid}</span>
        <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[0.62rem] font-medium text-blue-700">{level}</span>
        {targets.length > 0 && (
          <>
            <ChevronRight className="h-2.5 w-2.5 text-muted-foreground/40" />
            <span className="flex items-center gap-1 text-[0.62rem] text-muted-foreground">
              <Users className="h-2.5 w-2.5" />
              {targets.join(", ")}
            </span>
          </>
        )}
      </div>

      <div className="p-2.5 space-y-2">
        {hasKeywords && (
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Hash className="h-3 w-3 text-green-500" />
              <span className="text-[0.7rem] font-semibold">키워드</span>
            </div>
            <div className="space-y-1">
              {showCommon && <KeywordBlock categoryKey="common" keywords={COMMON_KEYWORDS} />}
              {showFieldKw && <KeywordBlock categoryKey={fieldInfo.key} keywords={fieldInfo.keywords} />}
            </div>
          </div>
        )}

        {(hasBasic || hasPractice) && (
          <div className="grid grid-cols-2 gap-2">
            {hasBasic && (
              <UnitGroupBlock
                groups={basicGroups}
                color="bg-indigo-50/50"
                icon={<BookText className="h-3 w-3 text-indigo-500" />}
                label="기본 수업"
              />
            )}
            {hasPractice && (
              <UnitGroupBlock
                groups={practiceGroups}
                color="bg-teal-50/50"
                icon={<Wrench className="h-3 w-3 text-teal-500" />}
                label="실습"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── 빈 상태 (non-curriculum 모드) ── */
function ExpandEmpty({ mode }: { mode: ContentMode }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5">
        <Layers className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-semibold">전체 {MODE_LABEL[mode]} 펼치기</span>
      </div>
      <div className="rounded border border-dashed border-amber-300 bg-amber-50 p-3 flex items-start gap-2">
        <FileWarning className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="flex-1 space-y-1">
          <div className="text-[11px] font-semibold text-amber-900">
            {MODE_LABEL[mode]} 전체 펼치기 — 원본 데이터 미제공
          </div>
          <div className="text-[10px] text-amber-800 leading-snug">
            커리큘럼의 "전체 펼치기" 뷰와 동일한 필터(분야/급수/그룹) · 레이아웃 셸이 준비되어 있습니다.
            실제 {MODE_LABEL[mode]} 원본이 제공되면 literal하게 동일 구조로 표시됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 메인 ── */
export function CurriculumExpandView({ mode = "curriculum" }: { mode?: ContentMode }) {
  if (mode !== "curriculum") return <ExpandEmpty mode={mode} />;
  return <CurriculumExpandViewInternal />;
}

function CurriculumExpandViewInternal() {
  const [selectedFields, setSelectedFields] = useState<Set<string>>(new Set(FIELD_OPTIONS));
  const [selectedMids, setSelectedMids] = useState<Set<string>>(new Set(MID_OPTIONS));
  const [showCommon, setShowCommon] = useState(true);
  const [showFieldKw, setShowFieldKw] = useState(true);
  const [showBasic, setShowBasic] = useState(true);
  const [showPractice, setShowPractice] = useState(true);
  const [groupFilter, setGroupFilter] = useState<Set<GroupTag>>(new Set(GROUP_TAGS.map(g => g.tag)));

  const toggleSet = <T,>(setter: React.Dispatch<React.SetStateAction<Set<T>>>, val: T) => {
    setter(prev => { const n = new Set(prev); if (n.has(val)) n.delete(val); else n.add(val); return n; });
  };

  const activeFields = FIELD_OPTIONS.filter(f => selectedFields.has(f));
  const activeMids = MID_OPTIONS.filter(m => selectedMids.has(m));

  return (
    <div className="space-y-4">
      {/* 헤더 */}
      <div className="flex items-center gap-2">
        <Layers className="h-4 w-4 text-primary" />
        <span className="text-[0.85rem] font-semibold">전체 커리큘럼 펼치기</span>
        <span className="text-[0.7rem] text-muted-foreground">— 모든 분야 × 급수 조합별 키워드·단원 일람</span>
      </div>

      {/* 필터 바 — 한 줄 */}
      {(() => {
        const allGroupOn = groupFilter.size === GROUP_TAGS.length;
        const allOn = showCommon && showFieldKw && showBasic && showPractice && selectedFields.size === FIELD_OPTIONS.length && selectedMids.size === MID_OPTIONS.length && allGroupOn;
        const toggleAll = () => {
          if (allOn) { setShowCommon(false); setShowFieldKw(false); setShowBasic(false); setShowPractice(false); setSelectedFields(new Set()); setSelectedMids(new Set()); setGroupFilter(new Set()); }
          else { setShowCommon(true); setShowFieldKw(true); setShowBasic(true); setShowPractice(true); setSelectedFields(new Set(FIELD_OPTIONS)); setSelectedMids(new Set(MID_OPTIONS)); setGroupFilter(new Set(GROUP_TAGS.map(g => g.tag))); }
        };
        return (
          <div className="rounded-lg border border-border bg-card px-3 py-2 flex items-center gap-1.5 flex-wrap">
            <Filter className="h-3 w-3 text-muted-foreground shrink-0" />
            <Chip active={allOn} onClick={toggleAll} color="border-gray-400 bg-gray-100 text-gray-700">전체</Chip>
            <span className="text-muted-foreground/30">|</span>
            <Chip active={showCommon} onClick={() => setShowCommon(!showCommon)} color="border-amber-300 bg-amber-50 text-amber-700">공통KW</Chip>
            <Chip active={showFieldKw} onClick={() => setShowFieldKw(!showFieldKw)} color="border-green-300 bg-green-50 text-green-700">분야KW</Chip>
            <Chip active={showBasic} onClick={() => setShowBasic(!showBasic)} color="border-indigo-300 bg-indigo-50 text-indigo-700">기본단</Chip>
            <Chip active={showPractice} onClick={() => setShowPractice(!showPractice)} color="border-teal-300 bg-teal-50 text-teal-700">실습단</Chip>
            <span className="text-muted-foreground/30">|</span>
            {FIELD_OPTIONS.map(f => (
              <Chip key={f} active={selectedFields.has(f)} onClick={() => toggleSet(setSelectedFields, f)}
                color={selectedFields.has(f) ? (f === "프롬프트" ? "border-blue-300 bg-blue-50 text-blue-700" : f === "번역" ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-rose-300 bg-rose-50 text-rose-700") : undefined}>
                {f}
              </Chip>
            ))}
            <span className="text-muted-foreground/30">|</span>
            {MID_OPTIONS.map(m => (
              <Chip key={m} active={selectedMids.has(m)} onClick={() => toggleSet(setSelectedMids, m)}
                color={selectedMids.has(m) ? "border-purple-300 bg-purple-50 text-purple-700" : undefined}>
                {m}
              </Chip>
            ))}
            <span className="text-muted-foreground/30">|</span>
            {GROUP_TAGS.map(({ tag, color }) => (
              <Chip key={tag} active={groupFilter.has(tag)} onClick={() => toggleSet(setGroupFilter, tag)}
                color={groupFilter.has(tag) ? color : undefined}>
                {tag}
              </Chip>
            ))}
          </div>
        );
      })()}

      {/* 분야별 그룹 — 2단 */}
      <div className="grid grid-cols-2 gap-3">
      {activeFields.map((field) => (
        <div key={field} className={`rounded-xl border overflow-hidden ${fieldBg[field] || "bg-muted/20 border-border"}`}>
          <div className="px-3 py-1.5 border-b border-border/40 flex items-center gap-2">
            <Award className="h-3.5 w-3.5" />
            <span className={`rounded px-1.5 py-0.5 text-[0.68rem] font-semibold text-white ${fieldBadge[field] || "bg-gray-400"}`}>{field}</span>
          </div>

          <div className="p-2 space-y-2">
            {activeMids.map((mid) => {
              const levels = LEVEL_BY_MID[mid] || [];
              if (levels.length === 0) return null;
              return (
                <div key={mid}>
                  <div className="flex items-center gap-1.5 mb-1.5 pl-0.5">
                    <ChevronRight className="h-2.5 w-2.5 text-muted-foreground/50" />
                    <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[0.64rem] font-medium text-indigo-700">{mid}</span>
                    <span className="text-[0.58rem] text-muted-foreground">{levels.length}급수</span>
                  </div>
                  <div className="space-y-1.5 pl-1.5">
                    {levels.map((level) => (
                      <CombinationCard
                        key={`${field}-${mid}-${level}`}
                        field={field} mid={mid} level={level}
                        showCommon={showCommon} showFieldKw={showFieldKw}
                        showBasic={showBasic} showPractice={showPractice}
                        groupFilter={groupFilter}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      </div>

      {activeFields.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Filter className="h-8 w-8 mx-auto mb-2 opacity-30" />
          <p className="text-[0.82rem]">선택된 분야가 없습니다</p>
        </div>
      )}
    </div>
  );
}
