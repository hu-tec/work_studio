import { useState, useMemo, useEffect } from "react";
import {
  COMMON_REGULATION,
  SUBJECT_REGULATIONS,
  MISSING_SUBJECTS,
  STRUCTURE_NOTES,
  TIER_LABEL,
  type Tier,
  type RegulationBlock,
  type RegulationItem,
} from "./regulation-data";
import {
  ShieldCheck,
  AlertTriangle,
  Pin,
  SlidersHorizontal,
  Plus,
  FileWarning,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Search,
  Eye,
  EyeOff,
  X,
} from "lucide-react";
import { MODE_LABEL, type ContentMode } from "./mode";

/* ── 등급 스타일 — 배경 tint 제거, dot+border만 ── */
const tierStyle: Record<Tier, { bg: string; bd: string; tx: string; dot: string }> = {
  fixed:    { bg: "bg-transparent", bd: "border-rose-200",  tx: "text-rose-700",  dot: "bg-rose-500" },
  semi:     { bg: "bg-transparent", bd: "border-amber-200", tx: "text-amber-700", dot: "bg-amber-500" },
  optional: { bg: "bg-transparent", bd: "border-sky-200",   tx: "text-sky-700",   dot: "bg-sky-500" },
};
const tierIcon: Record<Tier, React.ReactNode> = {
  fixed: <Pin className="h-2.5 w-2.5" />,
  semi: <SlidersHorizontal className="h-2.5 w-2.5" />,
  optional: <Plus className="h-2.5 w-2.5" />,
};

type BlockId = "common" | "unlabeled-A" | "translation" | "ethics";

const BLOCK_LABELS: Record<BlockId, string> = {
  common: "공통",
  "unlabeled-A": "A.라벨X",
  translation: "B.번역",
  ethics: "C.윤리",
};

function itemMatches(it: RegulationItem, search: string): boolean {
  if (!search) return true;
  return it.text.toLowerCase().includes(search.toLowerCase());
}

function filterBlock(block: RegulationBlock, tiers: Set<Tier>, search: string): RegulationBlock {
  return {
    fixed: tiers.has("fixed") ? block.fixed.filter((it) => itemMatches(it, search)) : [],
    semi: tiers.has("semi") ? block.semi.filter((it) => itemMatches(it, search)) : [],
    optional: tiers.has("optional") ? block.optional.filter((it) => itemMatches(it, search)) : [],
  };
}

/* ── 한 칸 아이템 (편집·삭제 가능, 배경색 없음) ── */
function ItemRow({
  it, tier, onEdit, onDelete, onTierChange,
}: {
  it: RegulationItem & { tier?: Tier };
  tier: Tier;
  onEdit: (newText: string) => void;
  onDelete: () => void;
  onTierChange: (newTier: Tier) => void;
}) {
  const s = tierStyle[tier];
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(it.text);
  const commit = () => { onEdit(draft); setEditing(false); };
  return (
    <div className={`group flex gap-1 rounded border ${s.bd} px-1.5 py-0.5 items-start`}>
      <span className={`shrink-0 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full ${s.dot} text-[9px] font-bold text-white px-1`}>
        {it.no}
      </span>
      {editing ? (
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") { setDraft(it.text); setEditing(false); }
          }}
          className="flex-1 text-[11px] leading-tight bg-transparent border-b border-primary focus:outline-none"
        />
      ) : (
        <span
          className="flex-1 text-[11px] leading-tight text-foreground/90 cursor-text"
          onClick={() => setEditing(true)}
          title="클릭하여 편집"
        >
          {it.text}
        </span>
      )}
      <div className="flex gap-0.5 opacity-30 group-hover:opacity-100 transition-opacity shrink-0">
        {(["fixed", "semi", "optional"] as Tier[]).map((t) => (
          t !== tier ? (
            <button
              key={t}
              onClick={onTierChange.bind(null, t)}
              className={`h-3 w-3 rounded-full ${tierStyle[t].dot} border border-white hover:scale-125 transition-transform`}
              title={`${TIER_LABEL[t]}로 이동`}
            />
          ) : null
        ))}
        <button
          onClick={onDelete}
          className="h-3 w-3 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white flex items-center justify-center"
          title="삭제"
        >
          <X className="h-2 w-2" />
        </button>
      </div>
    </div>
  );
}

/* ── 규정 4단 그리드 (tier 혼합 평탄, 편집/추가/삭제 가능) ── */
function BlockGrid({
  block, tiers, onMutate,
}: {
  block: RegulationBlock;
  tiers: Set<Tier>;
  onMutate: (updater: (b: RegulationBlock) => RegulationBlock) => void;
}) {
  // tier별 필터 후 평탄화 — 각 item에 tier를 태그
  const flat: { it: RegulationItem; tier: Tier; idx: number }[] = [];
  (["fixed", "semi", "optional"] as Tier[]).forEach((t) => {
    if (!tiers.has(t)) return;
    block[t].forEach((it, idx) => flat.push({ it, tier: t, idx }));
  });

  const editItem = (tier: Tier, idx: number, newText: string) =>
    onMutate((b) => ({ ...b, [tier]: b[tier].map((x, i) => (i === idx ? { ...x, text: newText } : x)) }));

  const deleteItem = (tier: Tier, idx: number) =>
    onMutate((b) => ({ ...b, [tier]: b[tier].filter((_, i) => i !== idx) }));

  const moveTier = (tier: Tier, idx: number, newTier: Tier) =>
    onMutate((b) => {
      const it = b[tier][idx];
      return {
        ...b,
        [tier]: b[tier].filter((_, i) => i !== idx),
        [newTier]: [...b[newTier], it],
      } as RegulationBlock;
    });

  const addItem = (tier: Tier) =>
    onMutate((b) => {
      const nextNo = b[tier].length + 1;
      return {
        ...b,
        [tier]: [...b[tier], { no: String(nextNo), text: "새 항목" }],
      };
    });

  return (
    <div className="space-y-1">
      <div className="grid grid-cols-4 gap-1">
        {flat.map(({ it, tier, idx }) => (
          <ItemRow
            key={`${tier}-${idx}`}
            it={it}
            tier={tier}
            onEdit={(t) => editItem(tier, idx, t)}
            onDelete={() => deleteItem(tier, idx)}
            onTierChange={(nt) => moveTier(tier, idx, nt)}
          />
        ))}
      </div>
      <div className="flex gap-1 flex-wrap">
        {(["fixed", "semi", "optional"] as Tier[])
          .filter((t) => tiers.has(t))
          .map((t) => {
            const s = tierStyle[t];
            return (
              <button
                key={t}
                onClick={() => addItem(t)}
                className={`inline-flex items-center gap-1 rounded border border-dashed ${s.bd} ${s.tx} px-1.5 py-0.5 text-[10px] hover:bg-muted/30`}
              >
                <Plus className="h-2.5 w-2.5" />
                {TIER_LABEL[t]} 추가
              </button>
            );
          })}
      </div>
    </div>
  );
}

/* ── 경고 패널 (인라인) ── */
function WarnLine({ text, tone }: { text: string; tone: "warn" | "error" | "info" }) {
  const cls =
    tone === "error"
      ? "border-red-300 bg-red-50 text-red-800"
      : tone === "warn"
      ? "border-amber-300 bg-amber-50 text-amber-800"
      : "border-blue-300 bg-blue-50 text-blue-800";
  return (
    <div className={`rounded border ${cls} px-1.5 py-0.5 text-[10px] leading-tight flex gap-1`}>
      <AlertTriangle className="h-2.5 w-2.5 shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

/* ── 섹션 (접기/펼치기) ── */
function Section({
  id,
  title,
  badge,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: React.ReactNode;
  badge?: React.ReactNode;
  open: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded border border-border bg-card overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center gap-1 px-1.5 py-0.5 hover:bg-muted/40 transition-colors"
      >
        {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <span className="text-[11px] font-semibold">{title}</span>
        {badge}
      </button>
      {open && <div className="border-t border-border p-1 space-y-1">{children}</div>}
    </div>
  );
}

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

/* ── 빈 상태 (non-curriculum 모드) ── */
function RegulationEmpty({ mode }: { mode: ContentMode }) {
  return (
    <div className="space-y-1">
      <div className="rounded border border-border bg-card px-1.5 py-1 flex items-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        <span className="text-[12px] font-semibold">{MODE_LABEL[mode]} 규정</span>
        <span className="text-[9px] text-muted-foreground italic ml-auto">
          원본 규정 문서 미제공
        </span>
      </div>
      <div className="rounded border border-dashed border-amber-300 bg-amber-50 p-3 flex items-start gap-2">
        <FileWarning className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="flex-1 space-y-1">
          <div className="text-[11px] font-semibold text-amber-900">
            {MODE_LABEL[mode]} 규정 — 원본 문서 미제공
          </div>
          <div className="text-[10px] text-amber-800 leading-snug">
            커리큘럼의 규정 뷰와 동일한 구조(공통 + 과목별 뼈대 + 빈칸/모순/누락 추적) · 필터(등급/블록) ·
            검색 · 전체 펼치기 · 컴팩트 UI 셸이 준비되어 있습니다. 실제 {MODE_LABEL[mode]} 규정 원본
            (고정/준고정/선택 등급별 항목)이 제공되면 literal하게 동일 구조로 표시됩니다.
          </div>
          <div className="text-[10px] text-amber-700 pt-1 border-t border-amber-200">
            ⚠ 임의 생성 금지 원칙에 따라 규정 내용을 추측으로 채우지 않습니다.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 메인 ── */
export function RegulationView({ mode = "curriculum" }: { mode?: ContentMode }) {
  if (mode !== "curriculum") return <RegulationEmpty mode={mode} />;
  return <RegulationViewInternal />;
}

// localStorage 키
const LS_KEY = "regulation-edits-v1";
function loadEdits(): { common: RegulationBlock; subjects: Record<string, RegulationBlock> } | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}
function saveEdits(edits: { common: RegulationBlock; subjects: Record<string, RegulationBlock> }) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(edits)); } catch {}
}

function RegulationViewInternal() {
  const [search, setSearch] = useState("");
  const [tiers, setTiers] = useState<Set<Tier>>(new Set(["fixed", "semi", "optional"]));
  const [blocks, setBlocks] = useState<Set<BlockId>>(
    new Set(["common", "unlabeled-A", "translation", "ethics"])
  );
  const [gapsOnly, setGapsOnly] = useState(false);
  const [open, setOpen] = useState<Set<string>>(
    new Set(["common", "unlabeled-A", "translation", "ethics", "notes", "missing"])
  );

  // 편집 상태 — 초기값은 data constants, 이후 localStorage 로드
  const [commonBlock, setCommonBlock] = useState<RegulationBlock>(() => {
    const edits = loadEdits();
    return edits?.common || COMMON_REGULATION.block;
  });
  const [subjectBlocks, setSubjectBlocks] = useState<Record<string, RegulationBlock>>(() => {
    const edits = loadEdits();
    if (edits?.subjects) return edits.subjects;
    const init: Record<string, RegulationBlock> = {};
    SUBJECT_REGULATIONS.forEach((s) => { init[s.id] = s.block; });
    return init;
  });

  // 변경 시 localStorage에 저장
  useEffect(() => {
    saveEdits({ common: commonBlock, subjects: subjectBlocks });
  }, [commonBlock, subjectBlocks]);

  const toggleSet = <T,>(set: Set<T>, v: T, setter: (s: Set<T>) => void) => {
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    setter(n);
  };

  const toggleSection = (id: string) => toggleSet(open, id, setOpen);
  const expandAll = () => setOpen(new Set(["common", "unlabeled-A", "translation", "ethics", "notes", "missing"]));
  const collapseAll = () => setOpen(new Set());

  // 필터 결과 (편집 가능한 state 기준)
  const filtered = useMemo(() => {
    const common = blocks.has("common") ? filterBlock(commonBlock, tiers, search) : null;
    const subjects = SUBJECT_REGULATIONS.filter((s) => blocks.has(s.id as BlockId)).map((s) => ({
      ...s,
      block: filterBlock(subjectBlocks[s.id] || s.block, tiers, search),
    }));
    return { common, subjects };
  }, [blocks, tiers, search, commonBlock, subjectBlocks]);

  // 카운트
  const count = (b: RegulationBlock) => b.fixed.length + b.semi.length + b.optional.length;
  const totalShown =
    (filtered.common ? count(filtered.common) : 0) +
    filtered.subjects.reduce((s, x) => s + count(x.block), 0);

  const totalRaw =
    count(commonBlock) +
    Object.values(subjectBlocks).reduce((s, b) => s + count(b), 0);

  const totalGaps = SUBJECT_REGULATIONS.reduce((s, r) => s + r.gaps.length, 0);
  const totalAnomalies = COMMON_REGULATION.anomalies.length;

  const hasAny = (b: RegulationBlock) => b.fixed.length + b.semi.length + b.optional.length > 0;

  return (
    <div className="space-y-1">
      {/* ── 헤더 1줄: 타이틀 + 검색 + 필터 + 전체펼치기 + 카운트 ── */}
      <div className="rounded border border-border bg-card px-1.5 py-1 flex flex-wrap items-center gap-1">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        <span className="text-[12px] font-semibold">커리 규정</span>

        {/* 검색 */}
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

        {/* 등급 필터 (멀티 → pill) */}
        <div className="flex items-center gap-0.5">
          <span className="text-[9px] text-muted-foreground">등급</span>
          {(["fixed", "semi", "optional"] as Tier[]).map((t) => (
            <Chip
              key={t}
              active={tiers.has(t)}
              onClick={() => toggleSet(tiers, t, setTiers)}
              shape="pill"
              color={
                tiers.has(t)
                  ? `${tierStyle[t].bd} ${tierStyle[t].bg} ${tierStyle[t].tx}`
                  : undefined
              }
            >
              {TIER_LABEL[t]}
            </Chip>
          ))}
        </div>

        {/* 블록 필터 (멀티 → pill) */}
        <div className="flex items-center gap-0.5">
          <span className="text-[9px] text-muted-foreground">블록</span>
          {(Object.keys(BLOCK_LABELS) as BlockId[]).map((id) => (
            <Chip
              key={id}
              active={blocks.has(id)}
              onClick={() => toggleSet(blocks, id, setBlocks)}
              shape="pill"
            >
              {BLOCK_LABELS[id]}
            </Chip>
          ))}
        </div>

        {/* 빈칸만 토글 (싱글성 → square) */}
        <Chip active={gapsOnly} onClick={() => setGapsOnly(!gapsOnly)} shape="square">
          {gapsOnly ? <Eye className="h-2.5 w-2.5 inline" /> : <EyeOff className="h-2.5 w-2.5 inline" />} 빈칸만
        </Chip>

        {/* 전체 펼치기/접기 */}
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

        {/* 요약 카운트 */}
        <div className="flex items-center gap-0.5 text-[10px] w-full">
          <span className="text-muted-foreground">
            표시 {totalShown}/{totalRaw}
          </span>
          <span className="inline-flex items-center gap-0.5 rounded border border-rose-200 bg-rose-50 px-1 text-rose-700">
            <Pin className="h-2.5 w-2.5" />
            {count({ ...COMMON_REGULATION.block, semi: [], optional: [] }) +
              SUBJECT_REGULATIONS.reduce((s, r) => s + r.block.fixed.length, 0)}
          </span>
          <span className="inline-flex items-center gap-0.5 rounded border border-amber-200 bg-amber-50 px-1 text-amber-700">
            <SlidersHorizontal className="h-2.5 w-2.5" />
            {COMMON_REGULATION.block.semi.length +
              SUBJECT_REGULATIONS.reduce((s, r) => s + r.block.semi.length, 0)}
          </span>
          <span className="inline-flex items-center gap-0.5 rounded border border-sky-200 bg-sky-50 px-1 text-sky-700">
            <Plus className="h-2.5 w-2.5" />
            {COMMON_REGULATION.block.optional.length +
              SUBJECT_REGULATIONS.reduce((s, r) => s + r.block.optional.length, 0)}
          </span>
          {totalGaps + totalAnomalies > 0 && (
            <span className="inline-flex items-center gap-0.5 rounded border border-red-300 bg-red-50 px-1 text-red-700">
              <FileWarning className="h-2.5 w-2.5" />
              빈칸 {totalGaps} · 이상 {totalAnomalies}
            </span>
          )}
          <span className="ml-auto text-[9px] text-muted-foreground italic">
            원본 literal만 · 빈칸 임의 생성 없음
          </span>
        </div>
      </div>

      {/* ── 3-1 공통 규정 ── */}
      {filtered.common && !gapsOnly && hasAny(filtered.common) && (
        <Section
          id="common"
          title={<>3-1 공통 규정</>}
          badge={
            <span className="text-[9px] text-muted-foreground ml-1">
              고정 {filtered.common.fixed.length} · 준고정 {filtered.common.semi.length} · 선택 {filtered.common.optional.length}
              {COMMON_REGULATION.extras.length > 0 && ` · 부가 ${COMMON_REGULATION.extras.length}`}
              {COMMON_REGULATION.anomalies.length > 0 && (
                <span className="text-amber-700 ml-1">⚠{COMMON_REGULATION.anomalies.length}</span>
              )}
            </span>
          }
          open={open.has("common")}
          onToggle={toggleSection}
        >
          <BlockGrid block={commonBlock} tiers={tiers} onMutate={(u) => setCommonBlock(u(commonBlock))} />
          {COMMON_REGULATION.extras.map((t, i) => (
            <WarnLine key={`e${i}`} text={`[부가] ${t}`} tone="info" />
          ))}
          {COMMON_REGULATION.anomalies.map((t, i) => (
            <WarnLine key={`a${i}`} text={`[이상] ${t}`} tone="warn" />
          ))}
        </Section>
      )}

      {/* ── 3-3 과목별 뼈대 (각 과목 개별 섹션) ── */}
      {!gapsOnly &&
        filtered.subjects.map(
          (sub) =>
            hasAny(sub.block) && (
              <Section
                key={sub.id}
                id={sub.id}
                title={<>3-3 {sub.label}</>}
                badge={
                  <span className="text-[9px] text-muted-foreground ml-1">
                    고정 {sub.block.fixed.length} · 준고정 {sub.block.semi.length} · 선택 {sub.block.optional.length}
                    {sub.gaps.length > 0 && (
                      <span className="text-red-700 ml-1">⚠빈칸 {sub.gaps.length}</span>
                    )}
                  </span>
                }
                open={open.has(sub.id)}
                onToggle={toggleSection}
              >
                <BlockGrid
                  block={subjectBlocks[sub.id] || sub.block}
                  tiers={tiers}
                  onMutate={(u) =>
                    setSubjectBlocks({
                      ...subjectBlocks,
                      [sub.id]: u(subjectBlocks[sub.id] || sub.block),
                    })
                  }
                />
                {sub.gaps.map((t, i) => (
                  <WarnLine key={i} text={`[빈칸] ${t}`} tone="error" />
                ))}
              </Section>
            )
        )}

      {/* ── 빈칸만 보기 모드 — 모든 gaps + anomalies + missing ── */}
      {gapsOnly && (
        <Section
          id="missing"
          title={<>원본 빈칸·이상·누락 전체</>}
          badge={
            <span className="text-[9px] text-muted-foreground ml-1">
              빈칸 {totalGaps} · 이상 {totalAnomalies} · 과목누락 {MISSING_SUBJECTS.length}
            </span>
          }
          open={open.has("missing")}
          onToggle={toggleSection}
        >
          {COMMON_REGULATION.anomalies.map((t, i) => (
            <WarnLine key={`ca${i}`} text={`[공통 이상] ${t}`} tone="warn" />
          ))}
          {SUBJECT_REGULATIONS.flatMap((s) =>
            s.gaps.map((g, i) => (
              <WarnLine key={`${s.id}-${i}`} text={`[${s.label}] ${g}`} tone="error" />
            ))
          )}
          {MISSING_SUBJECTS.map((t, i) => (
            <WarnLine key={`m${i}`} text={t} tone="error" />
          ))}
        </Section>
      )}

      {/* ── D 테솔 누락 (항상 표시, 접기 가능) ── */}
      {!gapsOnly && MISSING_SUBJECTS.length > 0 && (
        <Section
          id="missing"
          title={<span className="text-red-700">원본 과목 누락</span>}
          badge={<span className="text-[9px] text-red-700 ml-1">{MISSING_SUBJECTS.length}건</span>}
          open={open.has("missing")}
          onToggle={toggleSection}
        >
          {MISSING_SUBJECTS.map((t, i) => (
            <WarnLine key={i} text={t} tone="error" />
          ))}
        </Section>
      )}

      {/* ── 축·구조 미확정 ── */}
      {!gapsOnly && (
        <Section
          id="notes"
          title={<>축·구조 미확정</>}
          badge={
            <span className="text-[9px] text-muted-foreground ml-1">
              {STRUCTURE_NOTES.filter((n) => n.status === "unresolved").length}건
            </span>
          }
          open={open.has("notes")}
          onToggle={toggleSection}
        >
          {STRUCTURE_NOTES.map((n, i) => (
            <WarnLine key={i} text={n.text} tone="warn" />
          ))}
        </Section>
      )}

      {/* ── 결과 없음 ── */}
      {totalShown === 0 && !gapsOnly && (
        <div className="rounded border border-border bg-muted/30 px-2 py-3 text-center text-[11px] text-muted-foreground">
          필터 조건에 맞는 규정이 없습니다. 검색어를 지우거나 필터를 조정하세요.
        </div>
      )}
    </div>
  );
}
