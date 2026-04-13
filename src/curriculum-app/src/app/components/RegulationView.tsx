import { useState } from "react";
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
  ScrollText,
  ShieldCheck,
  AlertTriangle,
  Pin,
  SlidersHorizontal,
  Plus,
  FileWarning,
  HelpCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

/* ── 등급 스타일 ── */
const tierStyle: Record<Tier, { bg: string; border: string; text: string; dot: string; icon: React.ReactNode }> = {
  fixed: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-700",
    dot: "bg-rose-500",
    icon: <Pin className="h-3 w-3" />,
  },
  semi: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    dot: "bg-amber-500",
    icon: <SlidersHorizontal className="h-3 w-3" />,
  },
  optional: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-700",
    dot: "bg-sky-500",
    icon: <Plus className="h-3 w-3" />,
  },
};

/* ── 한 등급 블록 ── */
function TierColumn({ tier, items }: { tier: Tier; items: RegulationItem[] }) {
  const s = tierStyle[tier];
  return (
    <div className={`rounded-lg border ${s.border} ${s.bg} overflow-hidden`}>
      <div className={`flex items-center gap-1.5 px-2.5 py-1 border-b ${s.border} ${s.text}`}>
        {s.icon}
        <span className="text-[0.72rem] font-semibold">{TIER_LABEL[tier]}</span>
        <span className="text-[0.62rem] opacity-70">{items.length}개</span>
      </div>
      <div className="p-1.5 space-y-1">
        {items.length === 0 ? (
          <div className="px-2 py-3 text-center text-[0.68rem] text-muted-foreground italic">
            (원본에 항목 없음)
          </div>
        ) : (
          items.map((it, idx) => (
            <div
              key={idx}
              className="flex gap-1.5 rounded-md bg-white/80 border border-border/60 px-2 py-1.5"
            >
              <span className={`shrink-0 inline-flex h-4 min-w-4 items-center justify-center rounded-full ${s.dot} text-[0.6rem] font-bold text-white px-1`}>
                {it.no}
              </span>
              <span className="text-[0.72rem] leading-snug text-foreground/90">{it.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ── 규정 블록 (3열) ── */
function BlockGrid({ block }: { block: RegulationBlock }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <TierColumn tier="fixed" items={block.fixed} />
      <TierColumn tier="semi" items={block.semi} />
      <TierColumn tier="optional" items={block.optional} />
    </div>
  );
}

/* ── 경고/노트 패널 ── */
function WarnPanel({
  title,
  items,
  tone,
  icon,
}: {
  title: string;
  items: string[];
  tone: "warn" | "error" | "info";
  icon: React.ReactNode;
}) {
  if (items.length === 0) return null;
  const toneCls =
    tone === "error"
      ? "border-red-300 bg-red-50 text-red-800"
      : tone === "warn"
      ? "border-amber-300 bg-amber-50 text-amber-800"
      : "border-blue-300 bg-blue-50 text-blue-800";
  return (
    <div className={`rounded-lg border ${toneCls} px-2.5 py-1.5`}>
      <div className="flex items-center gap-1.5 mb-1">
        {icon}
        <span className="text-[0.72rem] font-semibold">{title}</span>
        <span className="text-[0.62rem] opacity-70">{items.length}</span>
      </div>
      <ul className="space-y-0.5 pl-4 list-disc marker:text-current">
        {items.map((t, i) => (
          <li key={i} className="text-[0.7rem] leading-snug">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── 확장형 섹션 ── */
function Section({
  title,
  count,
  badge,
  icon,
  defaultOpen = true,
  children,
}: {
  title: string;
  count?: string;
  badge?: React.ReactNode;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-muted/40 transition-colors"
      >
        {open ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
        {icon}
        <span className="text-[0.82rem] font-semibold">{title}</span>
        {count && <span className="text-[0.68rem] text-muted-foreground">{count}</span>}
        {badge}
      </button>
      {open && <div className="border-t border-border p-2.5 space-y-2">{children}</div>}
    </div>
  );
}

/* ── 메인 ── */
export function RegulationView() {
  const totalFixed =
    COMMON_REGULATION.block.fixed.length +
    SUBJECT_REGULATIONS.reduce((s, r) => s + r.block.fixed.length, 0);
  const totalSemi =
    COMMON_REGULATION.block.semi.length +
    SUBJECT_REGULATIONS.reduce((s, r) => s + r.block.semi.length, 0);
  const totalOptional =
    COMMON_REGULATION.block.optional.length +
    SUBJECT_REGULATIONS.reduce((s, r) => s + r.block.optional.length, 0);
  const totalGaps = SUBJECT_REGULATIONS.reduce((s, r) => s + r.gaps.length, 0);

  return (
    <div className="space-y-3 max-w-6xl mx-auto">
      {/* 헤더 요약 */}
      <div className="rounded-lg border border-border bg-card px-3 py-2 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span className="text-[0.82rem] font-semibold">커리큘럼 규정</span>
        </div>
        <span className="text-[0.68rem] text-muted-foreground">
          원본 문서의 literal 값만 표시. 빈칸/누락은 임의로 채우지 않음.
        </span>
        <div className="ml-auto flex items-center gap-1.5 text-[0.68rem]">
          <span className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-50 px-1.5 py-0.5 text-rose-700">
            <Pin className="h-3 w-3" />
            고정 {totalFixed}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-amber-700">
            <SlidersHorizontal className="h-3 w-3" />
            준고정 {totalSemi}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-sky-200 bg-sky-50 px-1.5 py-0.5 text-sky-700">
            <Plus className="h-3 w-3" />
            선택 {totalOptional}
          </span>
          {totalGaps > 0 && (
            <span className="inline-flex items-center gap-1 rounded-md border border-red-300 bg-red-50 px-1.5 py-0.5 text-red-700">
              <FileWarning className="h-3 w-3" />
              빈칸 {totalGaps}
            </span>
          )}
        </div>
      </div>

      {/* 3-1 공통 규정 */}
      <Section
        title={COMMON_REGULATION.source}
        icon={<ScrollText className="h-3.5 w-3.5 text-primary" />}
        count={`고정 ${COMMON_REGULATION.block.fixed.length} · 준고정 ${COMMON_REGULATION.block.semi.length} · 선택 ${COMMON_REGULATION.block.optional.length}`}
      >
        <BlockGrid block={COMMON_REGULATION.block} />

        {COMMON_REGULATION.extras.length > 0 && (
          <WarnPanel
            title="부가 메모 (원본 표기)"
            items={COMMON_REGULATION.extras}
            tone="info"
            icon={<HelpCircle className="h-3 w-3" />}
          />
        )}

        {COMMON_REGULATION.anomalies.length > 0 && (
          <WarnPanel
            title="원본 이상 항목 (확정 필요)"
            items={COMMON_REGULATION.anomalies}
            tone="warn"
            icon={<AlertTriangle className="h-3 w-3" />}
          />
        )}
      </Section>

      {/* 3-3 과목별 뼈대 */}
      <Section
        title="3-3. 과목별 커리 규정 뼈대"
        icon={<ScrollText className="h-3.5 w-3.5 text-primary" />}
        count={`${SUBJECT_REGULATIONS.length}과목 수록 · ${MISSING_SUBJECTS.length}과목 누락`}
      >
        <div className="space-y-3">
          {SUBJECT_REGULATIONS.map((sub) => (
            <div key={sub.id} className="rounded-lg border border-border overflow-hidden">
              <div className="px-3 py-1.5 bg-muted/50 border-b border-border flex items-center gap-2">
                <span className="text-[0.78rem] font-semibold">{sub.label}</span>
                {sub.gaps.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-md border border-red-300 bg-red-50 px-1.5 py-0 text-[0.62rem] text-red-700">
                    <FileWarning className="h-2.5 w-2.5" />
                    빈칸 {sub.gaps.length}
                  </span>
                )}
              </div>
              <div className="p-2 space-y-2">
                <BlockGrid block={sub.block} />
                {sub.gaps.length > 0 && (
                  <WarnPanel
                    title="이 과목에서 원본이 비어 있는 칸"
                    items={sub.gaps}
                    tone="error"
                    icon={<FileWarning className="h-3 w-3" />}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {MISSING_SUBJECTS.length > 0 && (
          <WarnPanel
            title="원본에서 과목 자체가 누락"
            items={MISSING_SUBJECTS}
            tone="error"
            icon={<FileWarning className="h-3 w-3" />}
          />
        )}
      </Section>

      {/* 축/구조 미확정 */}
      <Section
        title="축·구조 미확정 사항"
        icon={<HelpCircle className="h-3.5 w-3.5 text-primary" />}
        count={`${STRUCTURE_NOTES.filter((n) => n.status === "unresolved").length}건`}
      >
        <div className="space-y-1">
          {STRUCTURE_NOTES.map((n, i) => (
            <div
              key={i}
              className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-[0.72rem] text-amber-800 flex gap-1.5"
            >
              <AlertTriangle className="h-3 w-3 shrink-0 mt-0.5" />
              <span>{n.text}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
