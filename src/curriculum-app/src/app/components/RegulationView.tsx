import { useState, useMemo, useEffect } from "react";
import {
  COMMON_REGULATION,
  SUBJECT_REGULATIONS,
  MISSING_SUBJECTS,
  STRUCTURE_NOTES,
  TIER_LABEL,
  CURRICULUM_REGULATIONS_EXT,
  TEXTBOOK_REGULATIONS_EXT,
  GRADE_REGULATIONS_EXT,
  DOMAIN_SPECS,
  type Tier,
  type RegulationBlock,
  type RegulationItem,
  type RegulationSection,
  type DomainSpec,
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

  const deleteItem = (tier: Tier, idx: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    onMutate((b) => ({ ...b, [tier]: b[tier].filter((_, i) => i !== idx) }));
  };

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

/* ── 모드별 확장 규정 컨테이너 (questions/textbooks 모드에서도 규정 노출) ── */
function ModeRegulationPanel({ mode }: { mode: ContentMode }) {
  const sections = mode === "textbooks" ? TEXTBOOK_REGULATIONS_EXT : mode === "questions" ? GRADE_REGULATIONS_EXT : CURRICULUM_REGULATIONS_EXT;
  const title = mode === "textbooks" ? "교재 규정 (2-1 ~ 2-4)" : mode === "questions" ? "급수 규정 (3-1 ~ 3-4 · 4-1 ~ 4-3)" : "커리큘럼 규정";
  const [open, setOpen] = useState<Set<string>>(new Set(sections.map((_, i) => `mode-${i}`)));
  const [search, setSearch] = useState("");
  const [tiers, setTiers] = useState<Set<Tier>>(new Set(["fixed", "semi", "optional"]));
  const toggle = (id: string) => {
    const n = new Set(open);
    if (n.has(id)) n.delete(id);
    else n.add(id);
    setOpen(n);
  };

  return (
    <div className="space-y-1">
      <div className="rounded border border-border bg-card px-1.5 py-1 flex flex-wrap items-center gap-1">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        <span className="text-[12px] font-semibold">{MODE_LABEL[mode]} 규정</span>
        <span className="text-[9px] text-indigo-700 italic ml-1">
          가연 엑셀 literal · 읽기전용
        </span>
        <div className="relative flex-1 min-w-[120px] max-w-[200px] ml-auto">
          <Search className="absolute left-1 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색..."
            className="w-full rounded border border-border bg-background pl-5 pr-1 py-0 text-[11px] h-5 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-0.5">
          {(["fixed", "semi", "optional"] as Tier[]).map((t) => (
            <button
              key={t}
              onClick={() => {
                const n = new Set(tiers);
                if (n.has(t)) n.delete(t);
                else n.add(t);
                setTiers(n);
              }}
              className={`rounded-full border px-1.5 py-0 text-[10px] font-medium ${
                tiers.has(t)
                  ? `${tierStyle[t].bd} ${tierStyle[t].bg} ${tierStyle[t].tx}`
                  : "border-border text-muted-foreground"
              }`}
            >
              {TIER_LABEL[t]}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded border border-indigo-200 bg-indigo-50/60 px-2 py-1 flex items-center gap-1">
        <Pin className="h-3 w-3 text-indigo-600" />
        <span className="text-[11px] font-semibold text-indigo-800">{title}</span>
      </div>
      {sections.map((sec, i) => {
        const secKey = `mode-${i}`;
        const secOpen = open.has(secKey);
        return (
          <div key={i} className="rounded border border-border bg-card overflow-hidden">
            <button
              onClick={() => toggle(secKey)}
              className="w-full flex items-center gap-1 px-1.5 py-0.5 hover:bg-muted/40"
            >
              {secOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
              <span className="text-[11px] font-semibold">{sec.title}</span>
              <span className="text-[9px] text-muted-foreground ml-1">
                고정 {sec.block.fixed.length} · 준고정 {sec.block.semi.length} · 선택 {sec.block.optional.length}
              </span>
            </button>
            {secOpen && (
              <div className="border-t border-border p-1">
                <ReadOnlyBlockGrid block={sec.block} tiers={tiers} search={search} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── 메인 ── */
export function RegulationView({ mode = "curriculum" }: { mode?: ContentMode }) {
  if (mode !== "curriculum") return <ModeRegulationPanel mode={mode} />;
  return <RegulationViewInternal />;
}

// ═══ DB 저장 (localStorage 폐지) ═══
interface RegRow {
  _id: number;
  _block: BlockId;
  _tier: Tier;
  no: number;
  text: string;
  _order?: number;
}
type ApiRow = { id: number; data: string | Record<string, unknown> };

const API_BASE = "/api/regulations";

// DB rows → 블록 (tier별 그룹핑)
function groupRowsToBlock(rows: RegRow[], blockId: BlockId): RegulationBlock {
  const pick = (tier: Tier) =>
    rows
      .filter((r) => r._block === blockId && r._tier === tier)
      .sort((a, b) => (a._order ?? a._id) - (b._order ?? b._id))
      .map((r) => ({ no: r.no, text: r.text, _id: r._id } as RegulationItem & { _id?: number }));
  return { fixed: pick("fixed"), semi: pick("semi"), optional: pick("optional") };
}

// 1회 시드 — data constants → DB
function buildSeedItems(): Omit<RegRow, "_id">[] {
  const out: Omit<RegRow, "_id">[] = [];
  let ord = 0;
  const push = (block: RegulationBlock, blockId: BlockId) => {
    (["fixed", "semi", "optional"] as Tier[]).forEach((tier) => {
      (block[tier] || []).forEach((it) => {
        out.push({ _block: blockId, _tier: tier, no: it.no, text: it.text, _order: ord++ });
      });
    });
  };
  push(COMMON_REGULATION.block, "common");
  SUBJECT_REGULATIONS.forEach((s) => push(s.block, s.id as BlockId));
  return out;
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

  // ─── DB rows ───
  const [rows, setRows] = useState<RegRow[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        let res = await fetch(API_BASE);
        if (!res.ok) throw new Error("GET " + API_BASE + " → " + res.status);
        let apiRows: ApiRow[] = await res.json();
        if (apiRows.length === 0) {
          const seed = buildSeedItems();
          for (const s of seed) {
            await fetch(API_BASE, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(s),
            });
          }
          res = await fetch(API_BASE);
          apiRows = await res.json();
        }
        const parsed: RegRow[] = apiRows.map((r) => {
          const d = typeof r.data === "string" ? JSON.parse(r.data) : (r.data as Record<string, unknown>);
          return { _id: r.id, ...d } as unknown as RegRow;
        });
        if (alive) {
          setRows(parsed);
          setLoaded(true);
        }
      } catch (e) {
        if (alive) {
          setLoadError((e as Error).message || String(e));
          setLoaded(true);
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // 파생 상태
  const commonBlock = useMemo(() => groupRowsToBlock(rows, "common"), [rows]);
  const subjectBlocks = useMemo(() => {
    const out: Record<string, RegulationBlock> = {};
    (["unlabeled-A", "translation", "ethics"] as BlockId[]).forEach((id) => {
      out[id] = groupRowsToBlock(rows, id);
    });
    return out;
  }, [rows]);

  // ─── API 뮤테이션 ───
  async function apiCreate(payload: Omit<RegRow, "_id">): Promise<RegRow | null> {
    try {
      const r = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) return null;
      const j = await r.json();
      return { _id: j.id, ...payload };
    } catch {
      return null;
    }
  }
  async function apiUpdate(id: number, payload: Omit<RegRow, "_id">): Promise<boolean> {
    try {
      const r = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return r.ok;
    } catch {
      return false;
    }
  }
  async function apiDelete(id: number): Promise<boolean> {
    try {
      const r = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      return r.ok;
    } catch {
      return false;
    }
  }

  // 블록 단위 diff 뮤테이션 — _order 보존, no 자동 재번호, tier 이동 정확 처리
  const mutateBlock = (blockId: BlockId) => async (updater: (b: RegulationBlock) => RegulationBlock) => {
    const before = blockId === "common" ? commonBlock : subjectBlocks[blockId];
    const after = updater(before);
    const newRows: RegRow[] = [...rows];
    const tasks: Promise<unknown>[] = [];

    // 모든 tier의 모든 before 아이템 — id별 lookup
    const beforeById = new Map<number, { tier: Tier; item: RegulationItem & { _id?: number } }>();
    (["fixed", "semi", "optional"] as Tier[]).forEach((tier) => {
      (before[tier] as (RegulationItem & { _id?: number })[]).forEach((it) => {
        if (it._id != null) beforeById.set(it._id, { tier, item: it });
      });
    });

    // 새 상태에서 살아있는 id
    const survivingIds = new Set<number>();
    (["fixed", "semi", "optional"] as Tier[]).forEach((tier) => {
      (after[tier] as (RegulationItem & { _id?: number })[]).forEach((it) => {
        if (it._id != null) survivingIds.add(it._id);
      });
    });

    // 1. 삭제
    for (const [id] of beforeById) {
      if (!survivingIds.has(id)) {
        tasks.push(apiDelete(id));
        const i = newRows.findIndex((r) => r._id === id);
        if (i >= 0) newRows.splice(i, 1);
      }
    }

    // 2. tier 별 처리: 수정/이동/추가 + 자동 재번호 + _order 부여
    for (const tier of ["fixed", "semi", "optional"] as Tier[]) {
      const newItems = after[tier] as (RegulationItem & { _id?: number })[];
      // 기존 _order의 max를 이 블록 안에서 찾기
      const blockRows = newRows.filter((r) => r._block === blockId);
      let maxOrder = blockRows.reduce((m, r) => Math.max(m, r._order ?? r._id ?? 0), 0);

      newItems.forEach((it, idx) => {
        const desiredNo = idx + 1; // 1-based 자동 재번호
        if (it._id == null) {
          // 추가
          maxOrder += 1;
          const p: Omit<RegRow, "_id"> = {
            _block: blockId,
            _tier: tier,
            no: desiredNo,
            text: it.text,
            _order: maxOrder,
          };
          tasks.push(
            apiCreate(p).then((created) => {
              if (created) newRows.push(created);
            })
          );
        } else {
          const found = beforeById.get(it._id);
          const existingRow = newRows.find((r) => r._id === it._id);
          const order = existingRow?._order ?? it._id;
          // 변경 사항: text 변화, no 자동 재번호 변화, tier 변화
          const tierChanged = !found || found.tier !== tier;
          const textChanged = found && found.item.text !== it.text;
          const noChanged = (existingRow?.no ?? -1) !== desiredNo;
          if (tierChanged || textChanged || noChanged) {
            const p: Omit<RegRow, "_id"> = {
              _block: blockId,
              _tier: tier,
              no: desiredNo,
              text: it.text,
              _order: order,
            };
            tasks.push(apiUpdate(it._id, p));
            const i = newRows.findIndex((r) => r._id === it._id);
            if (i >= 0) newRows[i] = { _id: it._id, ...p };
          }
        }
      });
    }

    await Promise.all(tasks);
    setRows([...newRows]);
  };

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
      {/* ── 로딩/에러 배너 ── */}
      {!loaded && (
        <div className="rounded border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] text-blue-700 flex items-center gap-1">
          <span className="h-3 w-3 border-2 border-blue-300 border-t-blue-700 rounded-full animate-spin inline-block" />
          DB에서 규정 불러오는 중...
        </div>
      )}
      {loadError && (
        <div className="rounded border border-red-300 bg-red-50 px-2 py-1 text-[11px] text-red-700 flex items-center gap-1">
          <AlertTriangle className="h-3 w-3" />
          API 오류: {loadError} — 네트워크/서버 확인 필요
        </div>
      )}
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
          <BlockGrid block={commonBlock} tiers={tiers} onMutate={mutateBlock("common")} />
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
                  onMutate={mutateBlock(sub.id as BlockId)}
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
        <div className="rounded border border-border bg-muted/30 px-2 py-1.5 text-center text-[11px] text-muted-foreground">
          필터 조건에 맞는 규정이 없습니다. 검색어를 지우거나 필터를 조정하세요.
        </div>
      )}

      {/* ── 가연 확장 규정: 커리/교재/급수 (read-only) ── */}
      {!gapsOnly && (
        <ExtendedRegulationSection open={open} onToggle={toggleSection} search={search} tiers={tiers} />
      )}

      {/* ── 가연 대분류별 규정 spec (규정 sheet) ── */}
      {!gapsOnly && DOMAIN_SPECS.length > 0 && (
        <DomainSpecPanel open={open} onToggle={toggleSection} search={search} />
      )}
    </div>
  );
}

function DomainSpecPanel({ open, onToggle, search }: { open: Set<string>; onToggle: (id: string) => void; search: string }) {
  const sectionId = "domain-spec";
  const isOpen = open.has(sectionId);
  const matches = (s: DomainSpec) => {
    if (!search) return true;
    const blob = `${s.large} ${s.mid} ${s.small} ${s.aFixed} ${s.bSemi} ${s.b1Fixed} ${s.b2Semi} ${s.b3Optional} ${s.cOptional} ${s.c1Fixed} ${s.c2Semi} ${s.c3Optional}`.toLowerCase();
    return blob.includes(search.toLowerCase());
  };
  const visible = DOMAIN_SPECS.filter(matches);
  return (
    <div className="rounded border border-emerald-200 bg-emerald-50/40 overflow-hidden">
      <button
        onClick={() => onToggle(sectionId)}
        className="w-full flex items-center gap-1 px-1.5 py-0.5 hover:bg-emerald-100/40"
      >
        {isOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <ShieldCheck className="h-3 w-3 text-emerald-700" />
        <span className="text-[11px] font-semibold text-emerald-800">대분류별 규정 spec (A 고정 / B 준고정 + B1·B2·B3 / C 선택 + C1·C2·C3)</span>
        <span className="text-[9px] text-emerald-700 ml-1">{visible.length}개 대분류</span>
      </button>
      {isOpen && (
        <div className="border-t border-emerald-200 p-1 grid grid-cols-2 gap-1">
          {visible.map((d) => (
            <DomainSpecCard key={d.large} spec={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function DomainSpecCard({ spec }: { spec: DomainSpec }) {
  const [open, setOpen] = useState(false);
  if (spec.placeholder) {
    return (
      <div className="rounded border border-dashed border-amber-300 bg-amber-50/60 px-1.5 py-1 text-[10px] text-amber-800">
        <span className="font-semibold">{spec.large}</span>{" "}
        <span className="opacity-70">— 원본 시트 미작성</span>
      </div>
    );
  }
  const fields: { label: string; value: string; tier: Tier }[] = [
    { label: "A 고정", value: spec.aFixed, tier: "fixed" },
    { label: "B 준고정 (대표)", value: spec.bSemi, tier: "semi" },
    { label: "B1 고정 (조절 범위)", value: spec.b1Fixed, tier: "fixed" },
    { label: "B2 준고정", value: spec.b2Semi, tier: "semi" },
    { label: "B3 선택", value: spec.b3Optional, tier: "optional" },
    { label: "C 선택 (대표)", value: spec.cOptional, tier: "optional" },
    { label: "C1 고정 (선택 ON 시)", value: spec.c1Fixed, tier: "fixed" },
    { label: "C2 준고정", value: spec.c2Semi, tier: "semi" },
    { label: "C3 선택", value: spec.c3Optional, tier: "optional" },
  ].filter((f) => f.value);
  return (
    <div className="rounded border border-emerald-200 bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-1 px-1.5 py-0.5 hover:bg-emerald-100/30"
      >
        {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <span className="text-[11px] font-semibold text-emerald-800">{spec.large}</span>
        <span className="text-[9px] text-muted-foreground ml-1">{fields.length}개 항목</span>
      </button>
      {open && (
        <div className="border-t border-emerald-200/60 p-1 space-y-0.5">
          {fields.map((f, i) => {
            const s = tierStyle[f.tier];
            return (
              <div key={i} className={`rounded border ${s.bd} px-1 py-0.5`}>
                <div className={`text-[9px] font-semibold ${s.tx}`}>{f.label}</div>
                <pre className="text-[10px] leading-snug whitespace-pre-wrap text-foreground/85 font-sans">
                  {f.value}
                </pre>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════
   가연 확장 규정 (read-only) — 커리 1-1~1-4 / 교재 2-1~2-4 / 급수 3-1~3-4 + 4-x
   ════════════════════════════════════════════════ */

function ReadOnlyBlockGrid({ block, tiers, search }: { block: RegulationBlock; tiers: Set<Tier>; search: string }) {
  const flat: { it: RegulationItem; tier: Tier }[] = [];
  (["fixed", "semi", "optional"] as Tier[]).forEach((t) => {
    if (!tiers.has(t)) return;
    block[t].forEach((it) => {
      if (!search || it.text.toLowerCase().includes(search.toLowerCase())) {
        flat.push({ it, tier: t });
      }
    });
  });
  return (
    <div className="grid grid-cols-4 gap-1">
      {flat.map(({ it, tier }, i) => {
        const s = tierStyle[tier];
        return (
          <div
            key={`${tier}-${i}`}
            className={`group flex gap-1 rounded border ${s.bd} px-1.5 py-0.5 items-start`}
          >
            <span className={`shrink-0 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full ${s.dot} text-[9px] font-bold text-white px-1`}>
              {it.no}
            </span>
            <span className="flex-1 text-[11px] leading-tight text-foreground/90">{it.text}</span>
          </div>
        );
      })}
      {flat.length === 0 && (
        <div className="col-span-4 text-center text-[10px] text-muted-foreground py-1">
          조건에 맞는 항목 없음
        </div>
      )}
    </div>
  );
}

function ExtendedDomainPanel({
  id,
  title,
  sections,
  open,
  onToggle,
  search,
  tiers,
  color,
}: {
  id: string;
  title: string;
  sections: RegulationSection[];
  open: Set<string>;
  onToggle: (id: string) => void;
  search: string;
  tiers: Set<Tier>;
  color: string;
}) {
  const domainOpen = open.has(id);
  return (
    <div className="rounded border border-border bg-card overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className={`w-full flex items-center gap-1 px-1.5 py-0.5 ${color} hover:brightness-95 transition-all`}
      >
        {domainOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <ShieldCheck className="h-3 w-3" />
        <span className="text-[11px] font-semibold">{title}</span>
        <span className="text-[9px] text-muted-foreground ml-1">{sections.length} 블록 · 읽기전용</span>
      </button>
      {domainOpen && (
        <div className="border-t border-border p-1 space-y-1">
          {sections.map((sec, i) => {
            const secKey = `${id}-${i}`;
            const secOpen = open.has(secKey);
            return (
              <div key={i} className="rounded border border-border/60 bg-card/60 overflow-hidden">
                <button
                  onClick={() => onToggle(secKey)}
                  className="w-full flex items-center gap-1 px-1.5 py-0.5 hover:bg-muted/30"
                >
                  {secOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                  <span className="text-[11px] font-semibold">{sec.title}</span>
                  <span className="text-[9px] text-muted-foreground ml-1">
                    고정 {sec.block.fixed.length} · 준고정 {sec.block.semi.length} · 선택 {sec.block.optional.length}
                  </span>
                </button>
                {secOpen && (
                  <div className="border-t border-border/40 p-1">
                    <ReadOnlyBlockGrid block={sec.block} tiers={tiers} search={search} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ExtendedRegulationSection({
  open,
  onToggle,
  search,
  tiers,
}: {
  open: Set<string>;
  onToggle: (id: string) => void;
  search: string;
  tiers: Set<Tier>;
}) {
  return (
    <div className="space-y-1">
      <div className="rounded border border-indigo-200 bg-indigo-50/60 px-2 py-1 flex items-center gap-1">
        <Pin className="h-3 w-3 text-indigo-600" />
        <span className="text-[11px] font-semibold text-indigo-800">
          가연 엑셀 확장 규정
        </span>
        <span className="text-[9px] text-indigo-700 italic ml-1">
          원본 literal · 읽기전용 (수정은 위쪽 공통/과목 블록에서)
        </span>
      </div>
      <ExtendedDomainPanel
        id="ext-curr"
        title="커리 규정 (1-1 ~ 1-4)"
        sections={CURRICULUM_REGULATIONS_EXT}
        open={open}
        onToggle={onToggle}
        search={search}
        tiers={tiers}
        color="bg-blue-50"
      />
      <ExtendedDomainPanel
        id="ext-text"
        title="교재 규정 (2-1 ~ 2-4)"
        sections={TEXTBOOK_REGULATIONS_EXT}
        open={open}
        onToggle={onToggle}
        search={search}
        tiers={tiers}
        color="bg-emerald-50"
      />
      <ExtendedDomainPanel
        id="ext-grade"
        title="급수 규정 (3-1 ~ 3-4 · 4-1 ~ 4-3)"
        sections={GRADE_REGULATIONS_EXT}
        open={open}
        onToggle={onToggle}
        search={search}
        tiers={tiers}
        color="bg-amber-50"
      />
    </div>
  );
}
