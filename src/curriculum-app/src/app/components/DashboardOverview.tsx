import { useState } from "react";
import React from "react";
import {
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Award,
  Hash,
  BookText,
  Wrench,
  Archive,
  Layers,
  FileText,
  BarChart3,
  TrendingUp,
  Package,
  EyeOff,
  Eye,
} from "lucide-react";
import {
  CATEGORY_TREE,
  FIELD_OPTIONS,
  MID_OPTIONS,
  LEVEL_BY_MID,
  getTargets,
  COMMON_KEYWORDS,
  PROMPT_KEYWORDS,
  SPECIALTY_KEYWORDS,
  ETHICS_KEYWORDS,
} from "./data";
import {
  getGradeBasicCurriculum,
  getFieldBasicCurriculum,
  getPracticeCurriculum,
  getTranslationBasicCurriculum,
  getTranslationPracticeCurriculum,
} from "./curriculum-data";
import type { CurriculumGroup } from "./curriculum-data";
import type { SavedCurriculum } from "./types";

/* ═══ KPI 카드 ═══ */
function KpiCard({
  label,
  value,
  sub,
  icon,
  color,
  onClick,
  tooltip,
}: {
  label: string;
  value: number | string;
  sub?: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
  tooltip?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all ${onClick ? "cursor-pointer hover:shadow-md hover:border-primary/30" : ""}`}
      onClick={onClick}
      title={tooltip}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${color}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[0.68rem] text-muted-foreground truncate">{label}</div>
        <div className="text-[1.3rem] font-semibold tabular-nums leading-tight">{value}</div>
        {sub && <div className="text-[0.62rem] text-muted-foreground mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

/* ═══ 미니 막대 그래프 ═══ */
function MiniBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-1.5 w-full">
      <div className="flex-1 h-[6px] rounded-full bg-muted/60 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[0.6rem] tabular-nums text-muted-foreground w-7 text-right">{pct}%</span>
    </div>
  );
}

/* ═══ 토글 섹션 ═══ */
function Section({
  title,
  icon,
  iconBg,
  badge,
  defaultOpen = false,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  badge?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-2.5 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconBg}`}>{icon}</div>
          <span className="text-[0.82rem] font-semibold tracking-tight">{title}</span>
          {badge && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[0.68rem] font-medium text-muted-foreground">
              {badge}
            </span>
          )}
        </div>
        {open ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      {open && <div className="border-t border-border">{children}</div>}
    </div>
  );
}

/* ═══ 테이블 셀 스타일 ═══ */
const thCls =
  "px-2.5 py-1.5 text-[0.68rem] font-semibold text-muted-foreground bg-muted/40 border-b border-r border-border text-left whitespace-nowrap";
const tdCls = "px-2.5 py-1 text-[0.72rem] border-b border-r border-border";
const tdNum =
  "px-2.5 py-1 text-[0.72rem] border-b border-r border-border text-center tabular-nums";
const subtotalRow = "bg-blue-50/60 font-semibold";
const grandTotalRow = "bg-indigo-50/80 font-semibold text-[0.74rem]";

/* ═══════════════════════════════════════════ */
export function DashboardOverview({ savedList, onNavigate }: {
  savedList: SavedCurriculum[];
  onNavigate?: (filter: { catLarge?: string[]; field?: string[]; mid?: string[] }) => void;
}) {
  const [hideZero, setHideZero] = useState(false);
  // ── 마스터 데이터 통계 ──
  const largeCats = Object.keys(CATEGORY_TREE);
  const totalMedium = largeCats.reduce((s, l) => s + Object.keys(CATEGORY_TREE[l]).length, 0);
  const totalSmall = largeCats.reduce(
    (s, l) => s + Object.values(CATEGORY_TREE[l]).reduce((ss, arr) => ss + arr.length, 0),
    0
  );
  const totalLevels = Object.values(LEVEL_BY_MID).reduce((s, arr) => s + arr.length, 0);
  const kwGroups = [
    { label: "공통항목", kws: COMMON_KEYWORDS },
    { label: "프롬프트 전용", kws: PROMPT_KEYWORDS },
    { label: "번역", kws: SPECIALTY_KEYWORDS },
    { label: "AI 윤리 전용", kws: ETHICS_KEYWORDS },
  ];
  const totalKeywords = kwGroups.reduce((s, g) => s + g.kws.length, 0);

  // 커리큘럼 단 통계
  const gradeRows: { label: string; groups: CurriculumGroup[]; unitCount: number }[] = [];
  MID_OPTIONS.forEach((mid) =>
    (LEVEL_BY_MID[mid] || []).forEach((level) => {
      const groups = getGradeBasicCurriculum(mid, level);
      if (groups.length > 0) {
        const cnt = groups.reduce((s, g) => s + g.units.length, 0);
        gradeRows.push({ label: `${mid} ${level}`, groups, unitCount: cnt });
      }
    })
  );
  const fieldBasicRows = [
    { label: "프롬프트", groups: getFieldBasicCurriculum("프롬프트") },
    { label: "AI 윤리", groups: getFieldBasicCurriculum("AI 윤리") },
    { label: "번역추가", groups: getTranslationBasicCurriculum() },
  ].map((r) => ({ ...r, unitCount: r.groups.reduce((s, g) => s + g.units.length, 0) }));
  const practiceRows = [
    { label: "프롬프트", groups: getPracticeCurriculum("프롬프트") },
    { label: "AI 윤리", groups: getPracticeCurriculum("AI 윤리") },
    { label: "번역추가 실습", groups: getTranslationPracticeCurriculum() },
  ].map((r) => ({ ...r, unitCount: r.groups.reduce((s, g) => s + g.units.length, 0) }));

  // ── 저장 데이터 통계 ──
  const savedByField: Record<string, number> = {};
  const savedByCatLarge: Record<string, number> = {};
  const savedByCatMedium: Record<string, number> = {};
  const savedByCatSmall: Record<string, number> = {};
  const savedByMid: Record<string, number> = {};
  const savedByLevel: Record<string, number> = {};
  let savedTotalKw = 0,
    savedTotalBasic = 0,
    savedTotalPractice = 0;

  // 교차 통계: 분야 × 분류, 분야 × 급수
  const crossFieldCat: Record<string, Record<string, Record<string, Record<string, number>>>> = {};
  const crossFieldLevel: Record<string, Record<string, Record<string, number>>> = {};

  savedList.forEach((item) => {
    const field = item.instructor_grade.field;
    const mid = item.instructor_grade.mid;
    const level = item.instructor_grade.level;
    const { large, medium, small } = item.category;

    savedByField[field] = (savedByField[field] || 0) + 1;
    savedByCatLarge[large] = (savedByCatLarge[large] || 0) + 1;
    const medKey = `${large} › ${medium}`;
    savedByCatMedium[medKey] = (savedByCatMedium[medKey] || 0) + 1;
    if (small) {
      const smallKey = `${large} › ${medium} › ${small}`;
      savedByCatSmall[smallKey] = (savedByCatSmall[smallKey] || 0) + 1;
    }
    savedByMid[mid] = (savedByMid[mid] || 0) + 1;
    savedByLevel[level] = (savedByLevel[level] || 0) + 1;

    // 교차: 분야 × 대→중→소
    if (!crossFieldCat[field]) crossFieldCat[field] = {};
    if (!crossFieldCat[field][large]) crossFieldCat[field][large] = {};
    if (!crossFieldCat[field][large][medium]) crossFieldCat[field][large][medium] = {};
    const sKey = small || "__none__";
    crossFieldCat[field][large][medium][sKey] = (crossFieldCat[field][large][medium][sKey] || 0) + 1;

    // 교차: 분야 × 중구분 × 급수
    if (!crossFieldLevel[field]) crossFieldLevel[field] = {};
    if (!crossFieldLevel[field][mid]) crossFieldLevel[field][mid] = {};
    crossFieldLevel[field][mid][level] = (crossFieldLevel[field][mid][level] || 0) + 1;

    savedTotalKw +=
      item.keywords.common.length +
      item.keywords.prompt.length +
      item.keywords.specialty.length +
      item.keywords.ethics.length;
    savedTotalBasic += item.titles.basicUnits?.length || 0;
    savedTotalPractice += item.titles.practiceUnits?.length || 0;
  });

  // 전체 중분류·소분류 목록 (마스터 기준)
  const allMediumCats: { key: string; label: string }[] = [];
  const allSmallCats: { key: string; label: string }[] = [];
  largeCats.forEach((large) => {
    const mediums = Object.keys(CATEGORY_TREE[large]);
    mediums.forEach((med) => {
      allMediumCats.push({ key: `${large} › ${med}`, label: `${large} › ${med}` });
      const smalls = CATEGORY_TREE[large][med];
      smalls.forEach((small) => {
        allSmallCats.push({
          key: `${large} › ${med} › ${small}`,
          label: `${large} › ${med} › ${small}`,
        });
      });
    });
  });

  const fieldColors: Record<string, string> = {
    "프롬프트": "bg-orange-500",
    "번역": "bg-emerald-500",
    "AI 윤리": "bg-rose-500",
  };

  return (
    <div className="w-full space-y-3">
      {/* ════════════════════════════════════════
          ZONE A · 저장 데이터 현황 (최상단)
         ════════════════════════════════════════ */}

      {/* A-1: KPI 카드 */}
      <div className="grid grid-cols-5 gap-2.5">
        <KpiCard
          label="저장 세트"
          value={savedList.length}
          sub="총 커리큘럼 수"
          icon={<Archive className="h-5 w-5 text-amber-600" />}
          color="bg-amber-100"
          onClick={() => onNavigate?.({})}
          tooltip="클릭하여 저장 목록으로 이동"
        />
        <KpiCard
          label="키워드 사용"
          value={savedTotalKw}
          sub={`세트당 평균 ${savedList.length > 0 ? Math.round(savedTotalKw / savedList.length) : 0}개`}
          icon={<Hash className="h-5 w-5 text-green-600" />}
          color="bg-green-100"
          onClick={() => onNavigate?.({})}
          tooltip={`공통 ${savedList.reduce((s,i)=>s+i.keywords.common.length,0)} · 프롬프트 ${savedList.reduce((s,i)=>s+i.keywords.prompt.length,0)} · 번역 ${savedList.reduce((s,i)=>s+i.keywords.specialty.length,0)} · 윤리 ${savedList.reduce((s,i)=>s+i.keywords.ethics.length,0)}`}
        />
        <KpiCard
          label="기본 단(Unit)"
          value={savedTotalBasic}
          sub="선택된 기본 수업 단"
          icon={<BookText className="h-5 w-5 text-blue-600" />}
          color="bg-blue-100"
          onClick={() => onNavigate?.({})}
          tooltip={`저장된 ${savedList.length}개 세트에서 선택된 기본 수업 단원 합계`}
        />
        <KpiCard
          label="실습 단(Unit)"
          value={savedTotalPractice}
          sub="선택된 실습 단"
          icon={<Wrench className="h-5 w-5 text-teal-600" />}
          color="bg-teal-100"
          onClick={() => onNavigate?.({})}
          tooltip={`저장된 ${savedList.length}개 세트에서 선택된 실습 단원 합계`}
        />
        <KpiCard
          label="대분류 커버"
          value={`${Object.keys(savedByCatLarge).length} / ${largeCats.length}`}
          sub={`${Math.round((Object.keys(savedByCatLarge).length / largeCats.length) * 100)}% 활용`}
          icon={<TrendingUp className="h-5 w-5 text-indigo-600" />}
          color="bg-indigo-100"
          onClick={() => onNavigate?.({})}
          tooltip={`활용 중: ${Object.keys(savedByCatLarge).join(", ") || "없음"} / 미활용: ${largeCats.filter(c => !savedByCatLarge[c]).join(", ") || "없음"}`}
        />
      </div>

      {/* A-1b + A-1c: 분야 교차 현황 2단 */}
      <div className="grid grid-cols-2 gap-2.5">
      {/* A-1b: 분야 × 분류 교차 */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-4 py-2 bg-muted/40 border-b border-border flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-orange-600" />
          <span className="text-[0.82rem] font-semibold">분야 × 분류 교차</span>
          <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[0.68rem] font-medium text-orange-700">
            {savedList.length}건
          </span>
          <button
            onClick={() => setHideZero(!hideZero)}
            className={`ml-auto flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.64rem] font-medium transition-all ${
              hideZero
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {hideZero ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
            {hideZero ? "0건 표시" : "0건 숨기기"}
          </button>
        </div>
        {savedList.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground text-[0.78rem]">저장 데이터가 없습니다</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className={`${thCls} w-[70px]`}>분야</th>
                <th className={`${thCls} w-[80px]`}>대분류</th>
                <th className={`${thCls} w-[100px]`}>중분류</th>
                <th className={thCls}>소분류</th>
                <th className={`${thCls} w-[50px] text-center`}>건수</th>
              </tr>
            </thead>
            <tbody>
              {FIELD_OPTIONS.map((field) => {
                const fieldData = crossFieldCat[field];
                // 마스터 기준 전체 행 (없는 항목도 0)
                const allRows: { large: string; medium: string; small: string; cnt: number }[] = [];
                largeCats.forEach((large) => {
                  const mediums = Object.keys(CATEGORY_TREE[large]);
                  mediums.forEach((medium) => {
                    const smalls = CATEGORY_TREE[large][medium];
                    if (smalls.length === 0) {
                      const cnt = fieldData?.[large]?.[medium]?.["__none__"] || 0;
                      allRows.push({ large, medium, small: "", cnt });
                    } else {
                      smalls.forEach((small) => {
                        const cnt = fieldData?.[large]?.[medium]?.[small] || 0;
                        allRows.push({ large, medium, small, cnt });
                      });
                    }
                  });
                });
                const fieldTotal = allRows.reduce((s, r) => s + r.cnt, 0);
                const rows = hideZero ? allRows.filter((r) => r.cnt > 0) : allRows;
                if (rows.length === 0) {
                  return (
                    <React.Fragment key={field}>
                      <tr className="opacity-40">
                        <td className={`${tdCls} font-medium`}>
                          <span className={`inline-block rounded px-1.5 py-0 text-[0.64rem] text-white ${fieldColors[field] || "bg-gray-400"}`}>{field}</span>
                        </td>
                        <td className={`${tdCls} text-muted-foreground`} colSpan={3}>해당 없음</td>
                        <td className={tdNum}>0</td>
                      </tr>
                      <tr className={subtotalRow}>
                        <td className={`${tdCls} text-right`} colSpan={4}>{field} 소계</td>
                        <td className={tdNum}>{fieldTotal}</td>
                      </tr>
                    </React.Fragment>
                  );
                }
                const largeGroups: Record<string, typeof rows> = {};
                rows.forEach((r) => {
                  if (!largeGroups[r.large]) largeGroups[r.large] = [];
                  largeGroups[r.large].push(r);
                });
                let fieldRowIdx = 0;
                return (
                  <React.Fragment key={field}>
                    {Object.entries(largeGroups).map(([large, lRows]) =>
                      lRows.map((r, ri) => {
                        const isFieldFirst = fieldRowIdx === 0;
                        const isLargeFirst = ri === 0;
                        fieldRowIdx++;
                        return (
                          <tr key={`${field}-${r.large}-${r.medium}-${r.small}`} className={`hover:bg-muted/20 ${r.cnt === 0 ? "opacity-50" : ""}`}>
                            {isFieldFirst && (
                              <td className={`${tdCls} font-medium align-top`} rowSpan={rows.length}>
                                <span className={`inline-block rounded px-1.5 py-0 text-[0.64rem] text-white ${fieldColors[field] || "bg-gray-400"}`}>{field}</span>
                              </td>
                            )}
                            {isLargeFirst && (
                              <td className={`${tdCls} align-top font-medium`} rowSpan={lRows.length}>{large}</td>
                            )}
                            <td className={tdCls}>{r.medium}</td>
                            <td className={`${tdCls} text-muted-foreground`}>{r.small || "—"}</td>
                            <td className={`${tdNum} ${r.cnt === 0 ? "text-muted-foreground/50" : "cursor-pointer hover:bg-blue-50"}`}
                              onClick={() => r.cnt > 0 && onNavigate?.({ field: [field], catLarge: [r.large] })}
                              title={r.cnt > 0 ? `${field} × ${r.large} › ${r.medium}${r.small ? ` › ${r.small}` : ""}: ${r.cnt}건 → 클릭하여 이동` : ""}>{r.cnt}</td>
                          </tr>
                        );
                      })
                    )}
                    <tr className={subtotalRow}>
                      <td className={`${tdCls} text-right`} colSpan={4}>{field} 소계</td>
                      <td className={tdNum}>{fieldTotal}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
              <tr className={grandTotalRow}>
                <td className={`${tdCls} text-right`} colSpan={4}>총합계</td>
                <td className={tdNum}>{savedList.length}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* A-1c: 분야 × 급수 교차 매트릭스 */}
      {(() => {
        const allLevels: string[] = [];
        MID_OPTIONS.forEach((mid) => {
          (LEVEL_BY_MID[mid] || []).forEach((lv) => {
            if (!allLevels.includes(lv)) allLevels.push(lv);
          });
        });
        return (
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2 bg-muted/40 border-b border-border flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-600" />
              <span className="text-[0.82rem] font-semibold">분야 × 급수 교차</span>
            </div>
            {savedList.length === 0 ? (
              <div className="text-center py-6 text-muted-foreground text-[0.78rem]">저장 데이터가 없습니다</div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className={`${thCls} w-[70px]`}>분야</th>
                    <th className={`${thCls} w-[70px]`}>중 구분</th>
                    {allLevels.map((lv) => (
                      <th key={lv} className={`${thCls} w-[42px] text-center`}>{lv}</th>
                    ))}
                    <th className={`${thCls} w-[50px] text-center`}>소계</th>
                  </tr>
                </thead>
                <tbody>
                  {FIELD_OPTIONS.map((field) => {
                    const fieldMids = crossFieldLevel[field] || {};
                    const fieldTotal = savedByField[field] || 0;
                    const visibleMids = hideZero
                      ? MID_OPTIONS.filter((mid) => {
                          const midLevels = fieldMids[mid] || {};
                          return Object.values(midLevels).reduce((s: number, n) => s + (n as number), 0) > 0;
                        })
                      : MID_OPTIONS;

                    if (visibleMids.length === 0) {
                      return (
                        <React.Fragment key={field}>
                          <tr className="opacity-40">
                            <td className={`${tdCls} font-medium`} rowSpan={2}>
                              <span className={`inline-block rounded px-1.5 py-0 text-[0.64rem] text-white ${fieldColors[field] || "bg-gray-400"}`}>{field}</span>
                            </td>
                            <td className={`${tdCls} text-muted-foreground`}>—</td>
                            {allLevels.map((lv) => (
                              <td key={lv} className={`${tdNum} text-muted-foreground/50`}>0</td>
                            ))}
                            <td className={`${tdNum} text-muted-foreground/50`}>0</td>
                          </tr>
                          <tr className={subtotalRow}>
                            <td className={`${tdCls} text-right`}>{field} 합계</td>
                            {allLevels.map((lv) => <td key={lv} className={tdNum}>0</td>)}
                            <td className={tdNum}>0</td>
                          </tr>
                        </React.Fragment>
                      );
                    }

                    const midRows = visibleMids.map((mid, mi) => {
                      const midLevels = fieldMids[mid] || {};
                      const midTotal = Object.values(midLevels).reduce((s: number, n) => s + (n as number), 0);
                      return (
                        <tr key={`${field}-${mid}`} className={`hover:bg-muted/20 ${midTotal === 0 ? "opacity-50" : ""}`}>
                          {mi === 0 && (
                            <td className={`${tdCls} font-medium align-top`} rowSpan={visibleMids.length + 1}>
                              <span className={`inline-block rounded px-1.5 py-0 text-[0.64rem] text-white ${fieldColors[field] || "bg-gray-400"}`}>{field}</span>
                            </td>
                          )}
                          <td className={tdCls}>{mid}</td>
                          {allLevels.map((lv) => {
                            const cnt = midLevels[lv] || 0;
                            return (
                              <td key={lv} className={`${tdNum} ${cnt === 0 ? "text-muted-foreground/50" : "cursor-pointer hover:bg-purple-50"}`}
                                onClick={() => cnt > 0 && onNavigate?.({ field: [field], mid: [mid] })}
                                title={cnt > 0 ? `${field} × ${mid} × ${lv}: ${cnt}건` : ""}>
                                {cnt}
                              </td>
                            );
                          })}
                          <td className={`${tdNum} ${midTotal === 0 ? "text-muted-foreground/50" : ""}`}>{midTotal}</td>
                        </tr>
                      );
                    });
                    const subRow = (
                      <tr key={`${field}-sub`} className={subtotalRow}>
                        <td className={`${tdCls} text-right`}>{field} 합계</td>
                        {allLevels.map((lv) => {
                          const cnt = MID_OPTIONS.reduce((s, mid) => s + ((fieldMids[mid] || {})[lv] || 0), 0);
                          return <td key={lv} className={tdNum}>{cnt}</td>;
                        })}
                        <td className={tdNum}>{fieldTotal}</td>
                      </tr>
                    );
                    return <React.Fragment key={field}>{midRows}{subRow}</React.Fragment>;
                  })}
                  <tr className={grandTotalRow}>
                    <td className={`${tdCls} text-right`} colSpan={2}>총합계</td>
                    {allLevels.map((lv) => (
                      <td key={lv} className={tdNum}>{savedByLevel[lv] || 0}</td>
                    ))}
                    <td className={tdNum}>{savedList.length}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        );
      })()}
      </div>{/* /grid-cols-2 교차 현황 */}

      {/* A-2: 분포 분석 — 분류체계 3단 */}
      <div className="grid grid-cols-3 gap-2.5">
        {/* 대분류별 */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-3 py-2 bg-muted/40 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FolderOpen className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-[0.74rem] font-semibold">대분류별 분포</span>
            </div>
            <span className="text-[0.62rem] text-muted-foreground">{largeCats.length}개</span>
          </div>
          <div className="p-2.5 space-y-1.5">
            {largeCats.map((cat) => {
              const cnt = savedByCatLarge[cat] || 0;
              return (
                <div key={cat} className={`flex items-center gap-2 ${cnt > 0 ? "cursor-pointer hover:bg-muted/40 rounded px-1 -mx-1" : ""}`}
                  onClick={() => cnt > 0 && onNavigate?.({ catLarge: [cat] })}
                  title={cnt > 0 ? `${cat} ${cnt}건 → 클릭하여 저장 목록 필터` : `${cat}: 데이터 없음`}>
                  <span className="text-[0.68rem] w-16 truncate shrink-0">{cat}</span>
                  <MiniBar value={cnt} max={savedList.length} color="bg-blue-500" />
                  <span className="text-[0.68rem] tabular-nums font-medium w-4 text-right shrink-0">
                    {cnt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 중분류별 (전체 마스터 기준) */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-3 py-2 bg-muted/40 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-violet-600" />
              <span className="text-[0.74rem] font-semibold">중분류별 분포</span>
            </div>
            <span className="text-[0.62rem] text-muted-foreground">{allMediumCats.length}개</span>
          </div>
          <div className="p-2.5 space-y-1.5 max-h-[240px] overflow-y-auto">
            {allMediumCats.map(({ key, label }) => {
              const cnt = savedByCatMedium[key] || 0;
              return (
                <div key={key} className={`flex items-center gap-2 ${cnt === 0 ? "opacity-40" : ""}`}>
                  <span className="text-[0.68rem] w-28 truncate shrink-0" title={label}>{label}</span>
                  <MiniBar value={cnt} max={savedList.length} color="bg-violet-500" />
                  <span className="text-[0.68rem] tabular-nums font-medium w-4 text-right shrink-0">
                    {cnt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 소분류별 (전체 마스터 기준) */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-3 py-2 bg-muted/40 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="h-3.5 w-3.5 text-cyan-600" />
              <span className="text-[0.74rem] font-semibold">소분류별 분포</span>
            </div>
            <span className="text-[0.62rem] text-muted-foreground">{allSmallCats.length}개</span>
          </div>
          <div className="p-2.5 space-y-1.5 max-h-[240px] overflow-y-auto">
            {allSmallCats.length === 0 ? (
              <div className="text-[0.68rem] text-muted-foreground text-center py-4">소분류 없음</div>
            ) : (
              allSmallCats.map(({ key, label }) => {
                const cnt = savedByCatSmall[key] || 0;
                return (
                  <div key={key} className={`flex items-center gap-2 ${cnt === 0 ? "opacity-40" : ""}`}>
                    <span className="text-[0.68rem] w-36 truncate shrink-0" title={label}>{label}</span>
                    <MiniBar value={cnt} max={savedList.length} color="bg-cyan-500" />
                    <span className="text-[0.68rem] tabular-nums font-medium w-4 text-right shrink-0">
                      {cnt}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* A-2b: 분포 분석 — 분야/급수 2단 */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* 분야별 */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-3 py-2 bg-muted/40 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-3.5 w-3.5 text-orange-600" />
              <span className="text-[0.74rem] font-semibold">분야별 분포</span>
            </div>
            <span className="text-[0.62rem] text-muted-foreground">{FIELD_OPTIONS.length}분야 · {MID_OPTIONS.length}중</span>
          </div>
          <div className="p-2.5">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              <div className="space-y-1.5">
                <div className="text-[0.62rem] font-medium text-muted-foreground mb-1">분야</div>
                {FIELD_OPTIONS.map((f) => {
                  const cnt = savedByField[f] || 0;
                  return (
                    <div key={f} className={`flex items-center gap-2 ${cnt > 0 ? "cursor-pointer hover:bg-muted/40 rounded px-1 -mx-1" : ""}`}
                      onClick={() => cnt > 0 && onNavigate?.({ field: [f] })}
                      title={cnt > 0 ? `${f} ${cnt}건 → 저장 목록 필터` : `${f}: 데이터 없음`}>
                      <span className="text-[0.68rem] w-14 truncate shrink-0">{f}</span>
                      <MiniBar value={cnt} max={savedList.length} color={fieldColors[f] || "bg-gray-400"} />
                      <span className="text-[0.68rem] tabular-nums font-medium w-4 text-right shrink-0">
                        {cnt}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-1.5">
                <div className="text-[0.62rem] font-medium text-muted-foreground mb-1">중 구분</div>
                {MID_OPTIONS.map((mid) => {
                  const cnt = savedByMid[mid] || 0;
                  return (
                    <div key={mid} className={`flex items-center gap-2 ${cnt > 0 ? "cursor-pointer hover:bg-muted/40 rounded px-1 -mx-1" : ""}`}
                      onClick={() => cnt > 0 && onNavigate?.({ mid: [mid] })}
                      title={cnt > 0 ? `${mid} ${cnt}건 → 저장 목록 필터` : `${mid}: 데이터 없음`}>
                      <span className="text-[0.68rem] w-14 truncate shrink-0">{mid}</span>
                      <MiniBar value={cnt} max={savedList.length} color="bg-purple-400" />
                      <span className="text-[0.68rem] tabular-nums font-medium w-4 text-right shrink-0">
                        {cnt}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 급수별 */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-3 py-2 bg-muted/40 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-[0.74rem] font-semibold">급수별 분포</span>
            </div>
            <span className="text-[0.62rem] text-muted-foreground">{totalLevels}개 급수</span>
          </div>
          <div className="p-2.5">
            <div className="grid grid-cols-3 gap-x-4 gap-y-1.5">
              {MID_OPTIONS.map((mid) => {
                const levels = LEVEL_BY_MID[mid] || [];
                return (
                  <div key={mid} className="space-y-1.5">
                    <div className="text-[0.62rem] font-medium text-muted-foreground mb-1">{mid}</div>
                    {levels.map((level) => {
                      const cnt = savedByLevel[level] || 0;
                      return (
                        <div key={`${mid}-${level}`} className={`flex items-center gap-2 ${cnt === 0 ? "opacity-40" : ""}`}>
                          <span className="text-[0.68rem] w-10 shrink-0">{level}</span>
                          <MiniBar value={cnt} max={savedList.length} color="bg-amber-500" />
                          <span className="text-[0.68rem] tabular-nums font-medium w-4 text-right shrink-0">
                            {cnt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* A-3: 저장 목록으로 이동됨 → 저장 목록 탭 참조 */}

      {/* ════════════════════════════════════════
          ZONE B · 마스터 데이터 총괄 (2단 컬럼)
         ════════════════════════════════════════ */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* 좌: 총괄 요약 */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-4 py-2 bg-muted/40 border-b border-border flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-600" />
            <span className="text-[0.82rem] font-semibold">마스터 데이터 총괄</span>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className={thCls}>항목</th>
                <th className={thCls}>세부</th>
                <th className={`${thCls} text-center`}>수량</th>
                <th className={`${thCls} text-center`}>소계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdCls} rowSpan={3}>분류체계</td>
                <td className={tdCls}>대분류</td>
                <td className={tdNum}>{largeCats.length}</td>
                <td className={tdNum} rowSpan={3}>
                  {largeCats.length + totalMedium + totalSmall}
                </td>
              </tr>
              <tr>
                <td className={tdCls}>중분류</td>
                <td className={tdNum}>{totalMedium}</td>
              </tr>
              <tr>
                <td className={tdCls}>소분류</td>
                <td className={tdNum}>{totalSmall}</td>
              </tr>
              <tr>
                <td className={tdCls} rowSpan={3}>급수 체계</td>
                <td className={tdCls}>분야</td>
                <td className={tdNum}>{FIELD_OPTIONS.length}</td>
                <td className={tdNum} rowSpan={3}>
                  {FIELD_OPTIONS.length + MID_OPTIONS.length + totalLevels}
                </td>
              </tr>
              <tr>
                <td className={tdCls}>중 구분</td>
                <td className={tdNum}>{MID_OPTIONS.length}</td>
              </tr>
              <tr>
                <td className={tdCls}>급수</td>
                <td className={tdNum}>{totalLevels}</td>
              </tr>
              <tr>
                <td className={tdCls} rowSpan={kwGroups.length}>키워드 풀</td>
                <td className={tdCls}>{kwGroups[0].label}</td>
                <td className={tdNum}>{kwGroups[0].kws.length}</td>
                <td className={tdNum} rowSpan={kwGroups.length}>{totalKeywords}</td>
              </tr>
              {kwGroups.slice(1).map((g) => (
                <tr key={g.label}>
                  <td className={tdCls}>{g.label}</td>
                  <td className={tdNum}>{g.kws.length}</td>
                </tr>
              ))}
              <tr>
                <td className={tdCls} rowSpan={3}>커리큘럼 단</td>
                <td className={tdCls}>급수별 기본</td>
                <td className={tdNum}>{gradeRows.reduce((s, r) => s + r.unitCount, 0)}</td>
                <td className={tdNum} rowSpan={3}>
                  {gradeRows.reduce((s, r) => s + r.unitCount, 0) +
                    fieldBasicRows.reduce((s, r) => s + r.unitCount, 0) +
                    practiceRows.reduce((s, r) => s + r.unitCount, 0)}
                </td>
              </tr>
              <tr>
                <td className={tdCls}>분야별 기본</td>
                <td className={tdNum}>
                  {fieldBasicRows.reduce((s, r) => s + r.unitCount, 0)}
                </td>
              </tr>
              <tr>
                <td className={tdCls}>실습</td>
                <td className={tdNum}>
                  {practiceRows.reduce((s, r) => s + r.unitCount, 0)}
                </td>
              </tr>
              <tr className={grandTotalRow}>
                <td className={`${tdCls} text-right`} colSpan={2}>전체 합계</td>
                <td className={tdNum} colSpan={2}>
                  {largeCats.length +
                    totalMedium +
                    totalSmall +
                    FIELD_OPTIONS.length +
                    MID_OPTIONS.length +
                    totalLevels +
                    totalKeywords +
                    gradeRows.reduce((s, r) => s + r.unitCount, 0) +
                    fieldBasicRows.reduce((s, r) => s + r.unitCount, 0) +
                    practiceRows.reduce((s, r) => s + r.unitCount, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 우: 분류체계 상세 */}
        <Section
          title="분류체계 상세"
          icon={<FolderOpen className="h-4 w-4 text-blue-600" />}
          iconBg="bg-blue-100"
          badge={`대${largeCats.length} · 중${totalMedium} · 소${totalSmall}`}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className={`${thCls} w-[100px]`}>대분류</th>
                <th className={`${thCls} w-[120px]`}>중분류</th>
                <th className={thCls}>소분류</th>
                <th className={`${thCls} w-[50px] text-center`}>소 수</th>
              </tr>
            </thead>
            <tbody>
              {largeCats.map((large) => {
                const mediums = Object.keys(CATEGORY_TREE[large]);
                if (mediums.length === 0) {
                  return (
                    <tr key={large}>
                      <td className={`${tdCls} font-medium`}>{large}</td>
                      <td className={`${tdCls} text-muted-foreground`}>—</td>
                      <td className={`${tdCls} text-muted-foreground`}>—</td>
                      <td className={tdNum}>0</td>
                    </tr>
                  );
                }
                return mediums.map((med, mi) => {
                  const smalls = CATEGORY_TREE[large][med];
                  return (
                    <tr key={`${large}-${med}`}>
                      {mi === 0 && (
                        <td
                          className={`${tdCls} font-medium align-top`}
                          rowSpan={mediums.length}
                        >
                          {large}
                        </td>
                      )}
                      <td className={tdCls}>{med}</td>
                      <td className={tdCls}>
                        {smalls.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {smalls.map((s) => (
                              <span
                                key={s}
                                className="rounded bg-blue-50 px-1.5 py-0 text-[0.64rem] text-blue-700"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className={tdNum}>{smalls.length}</td>
                    </tr>
                  );
                });
              })}
              <tr className={subtotalRow}>
                <td className={`${tdCls} text-right`} colSpan={3}>합계</td>
                <td className={tdNum}>{totalSmall}</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </div>

      {/* ════════════════════════════════════════
          ZONE C · 상세 어코디언 (2단)
         ════════════════════════════════════════ */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* 급수 체계 */}
        <Section
          title="급수 체계 상세"
          icon={<Award className="h-4 w-4 text-purple-600" />}
          iconBg="bg-purple-100"
          badge={`${FIELD_OPTIONS.length}분야 · ${MID_OPTIONS.length}중 · ${totalLevels}급수`}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className={`${thCls} w-[80px]`}>중 구분</th>
                <th className={`${thCls} w-[50px] text-center`}>급수</th>
                <th className={thCls}>대상</th>
                <th className={`${thCls} w-[60px] text-center`}>대상 수</th>
              </tr>
            </thead>
            <tbody>
              {MID_OPTIONS.map((mid) => {
                const levels = LEVEL_BY_MID[mid] || [];
                const totalTargets = levels.reduce(
                  (s, lv) => s + getTargets(mid, lv).length,
                  0
                );
                return (
                  <React.Fragment key={mid}>
                    {levels.map((level, li) => {
                      const targets = getTargets(mid, level);
                      return (
                        <tr key={`${mid}-${level}`}>
                          {li === 0 && (
                            <td
                              className={`${tdCls} font-medium align-top`}
                              rowSpan={levels.length}
                            >
                              {mid}
                            </td>
                          )}
                          <td className={tdNum}>{level}</td>
                          <td className={tdCls}>
                            {targets.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {targets.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded bg-gray-100 px-1.5 py-0 text-[0.64rem] text-gray-600"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-muted-foreground/50">—</span>
                            )}
                          </td>
                          <td className={tdNum}>{targets.length}</td>
                        </tr>
                      );
                    })}
                    <tr className={subtotalRow}>
                      <td className={`${tdCls} text-right`} colSpan={3}>
                        {mid} 소계
                      </td>
                      <td className={tdNum}>{totalTargets}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          <div className="px-4 py-2 bg-muted/20 border-t border-border">
            <div className="text-[0.7rem] font-medium text-muted-foreground mb-1">분야 목록</div>
            <div className="flex gap-1.5">
              {FIELD_OPTIONS.map((f) => (
                <span
                  key={f}
                  className={`rounded-md px-2 py-0.5 text-[0.72rem] font-medium ${
                    f === "프롬프트"
                      ? "bg-orange-100 text-orange-700"
                      : f === "번역"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* 키워드 풀 */}
        <Section
          title="키워드 풀 상세"
          icon={<Hash className="h-4 w-4 text-green-600" />}
          iconBg="bg-green-100"
          badge={`총 ${totalKeywords}개`}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className={`${thCls} w-[120px]`}>분류</th>
                <th className={`${thCls} w-[30px] text-center`}>No.</th>
                <th className={thCls}>키워드 명</th>
              </tr>
            </thead>
            <tbody>
              {kwGroups.map((group) =>
                group.kws.map((kw, i) => (
                  <tr key={`${group.label}-${i}`}>
                    {i === 0 && (
                      <td
                        className={`${tdCls} font-medium align-top`}
                        rowSpan={group.kws.length}
                      >
                        {group.label}
                        <div className="text-[0.62rem] font-normal text-muted-foreground mt-0.5">
                          {group.kws.length}개
                        </div>
                      </td>
                    )}
                    <td className={tdNum}>{i + 1}</td>
                    <td className={tdCls}>{kw}</td>
                  </tr>
                ))
              )}
              <tr className={grandTotalRow}>
                <td className={`${tdCls} text-right`} colSpan={2}>합계</td>
                <td className={tdCls}>{totalKeywords}개</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </div>

      {/* 커리큘럼 단(Unit) — 전체 너비 */}
      <Section
        title="커리큘럼 단(Unit) 상세"
        icon={<Layers className="h-4 w-4 text-indigo-600" />}
        iconBg="bg-indigo-100"
        badge={`급수 ${gradeRows.reduce((s, r) => s + r.unitCount, 0)} · 분야 ${fieldBasicRows.reduce((s, r) => s + r.unitCount, 0)} · 실습 ${practiceRows.reduce((s, r) => s + r.unitCount, 0)}`}
      >
        {/* 급수별 기본 */}
        <div className="px-3 py-1.5 bg-indigo-50/50 border-b border-border flex items-center gap-1.5 text-[0.74rem] font-semibold">
          <BookText className="h-3.5 w-3.5 text-indigo-500" /> 급수별 기본 수업
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className={`${thCls} w-[90px]`}>급수</th>
              <th className={`${thCls} w-[140px]`}>그룹</th>
              <th className={`${thCls} w-[60px]`}>ID</th>
              <th className={`${thCls} w-[160px]`}>제목</th>
              <th className={thCls}>교육 내용</th>
              <th className={`${thCls} w-[50px] text-center`}>시간</th>
            </tr>
          </thead>
          <tbody>
            {gradeRows.map((row) => {
              let rowIdx = 0;
              const totalUnitsInRow = row.unitCount;
              return row.groups.map((g) =>
                g.units.map((u, ui) => {
                  const isFirst = rowIdx === 0;
                  const isGroupFirst = ui === 0;
                  rowIdx++;
                  return (
                    <tr key={u.id}>
                      {isFirst && (
                        <td
                          className={`${tdCls} font-medium align-top`}
                          rowSpan={totalUnitsInRow}
                        >
                          {row.label}
                        </td>
                      )}
                      {isGroupFirst && (
                        <td className={`${tdCls} text-[0.68rem] align-top`} rowSpan={g.units.length}>
                          {g.name}
                          {g.subtitle && (
                            <div className="text-[0.6rem] text-muted-foreground">{g.subtitle}</div>
                          )}
                        </td>
                      )}
                      <td className={`${tdCls} text-[0.62rem] text-muted-foreground/60`}>{u.id}</td>
                      <td className={`${tdCls} font-medium text-[0.7rem]`}>{u.title}</td>
                      <td className={`${tdCls} text-[0.68rem] text-muted-foreground`}>{u.content}</td>
                      <td className={`${tdNum} text-[0.64rem]`}>{u.hours || "—"}</td>
                    </tr>
                  );
                })
              );
            })}
            <tr className={subtotalRow}>
              <td className={`${tdCls} text-right`} colSpan={5}>급수별 기본 소계</td>
              <td className={tdNum}>{gradeRows.reduce((s, r) => s + r.unitCount, 0)}단</td>
            </tr>
          </tbody>
        </table>

        {/* 분야별 기본 */}
        <div className="px-3 py-1.5 bg-blue-50/50 border-b border-t border-border flex items-center gap-1.5 text-[0.74rem] font-semibold">
          <BookText className="h-3.5 w-3.5 text-blue-500" /> 분야별 기본 수업
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className={`${thCls} w-[90px]`}>분야</th>
              <th className={`${thCls} w-[140px]`}>그룹</th>
              <th className={`${thCls} w-[60px]`}>ID</th>
              <th className={`${thCls} w-[160px]`}>제목</th>
              <th className={thCls}>교육 내용</th>
              <th className={`${thCls} w-[50px] text-center`}>시간</th>
            </tr>
          </thead>
          <tbody>
            {fieldBasicRows.map((row) => {
              let rowIdx = 0;
              return row.groups.map((g) =>
                g.units.map((u, ui) => {
                  const isFirst = rowIdx === 0;
                  const isGroupFirst = ui === 0;
                  rowIdx++;
                  return (
                    <tr key={u.id}>
                      {isFirst && (
                        <td className={`${tdCls} font-medium align-top`} rowSpan={row.unitCount}>
                          {row.label}
                        </td>
                      )}
                      {isGroupFirst && (
                        <td className={`${tdCls} text-[0.68rem] align-top`} rowSpan={g.units.length}>
                          {g.name}
                          {g.subtitle && (
                            <div className="text-[0.6rem] text-muted-foreground">{g.subtitle}</div>
                          )}
                        </td>
                      )}
                      <td className={`${tdCls} text-[0.62rem] text-muted-foreground/60`}>{u.id}</td>
                      <td className={`${tdCls} font-medium text-[0.7rem]`}>{u.title}</td>
                      <td className={`${tdCls} text-[0.68rem] text-muted-foreground`}>{u.content}</td>
                      <td className={`${tdNum} text-[0.64rem]`}>{u.hours || "—"}</td>
                    </tr>
                  );
                })
              );
            })}
            <tr className={subtotalRow}>
              <td className={`${tdCls} text-right`} colSpan={5}>분야별 기본 소계</td>
              <td className={tdNum}>{fieldBasicRows.reduce((s, r) => s + r.unitCount, 0)}단</td>
            </tr>
          </tbody>
        </table>

        {/* 실습 */}
        <div className="px-3 py-1.5 bg-teal-50/50 border-b border-t border-border flex items-center gap-1.5 text-[0.74rem] font-semibold">
          <Wrench className="h-3.5 w-3.5 text-teal-500" /> 실습 커리큘럼
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className={`${thCls} w-[90px]`}>분야</th>
              <th className={`${thCls} w-[140px]`}>그룹</th>
              <th className={`${thCls} w-[60px]`}>ID</th>
              <th className={`${thCls} w-[160px]`}>제목</th>
              <th className={thCls}>교육 내용</th>
              <th className={`${thCls} w-[50px] text-center`}>시간</th>
            </tr>
          </thead>
          <tbody>
            {practiceRows.map((row) => {
              let rowIdx = 0;
              return row.groups.map((g) =>
                g.units.map((u, ui) => {
                  const isFirst = rowIdx === 0;
                  const isGroupFirst = ui === 0;
                  rowIdx++;
                  return (
                    <tr key={u.id}>
                      {isFirst && (
                        <td className={`${tdCls} font-medium align-top`} rowSpan={row.unitCount}>
                          {row.label}
                        </td>
                      )}
                      {isGroupFirst && (
                        <td className={`${tdCls} text-[0.68rem] align-top`} rowSpan={g.units.length}>
                          {g.name}
                          {g.subtitle && (
                            <div className="text-[0.6rem] text-muted-foreground">{g.subtitle}</div>
                          )}
                        </td>
                      )}
                      <td className={`${tdCls} text-[0.62rem] text-muted-foreground/60`}>{u.id}</td>
                      <td className={`${tdCls} font-medium text-[0.7rem]`}>{u.title}</td>
                      <td className={`${tdCls} text-[0.68rem] text-muted-foreground`}>{u.content}</td>
                      <td className={`${tdNum} text-[0.64rem]`}>{u.hours || "—"}</td>
                    </tr>
                  );
                })
              );
            })}
            <tr className={subtotalRow}>
              <td className={`${tdCls} text-right`} colSpan={5}>실습 소계</td>
              <td className={tdNum}>{practiceRows.reduce((s, r) => s + r.unitCount, 0)}단</td>
            </tr>
            <tr className={grandTotalRow}>
              <td className={`${tdCls} text-right`} colSpan={5}>커리큘럼 총합계</td>
              <td className={tdNum}>
                {gradeRows.reduce((s, r) => s + r.unitCount, 0) +
                  fieldBasicRows.reduce((s, r) => s + r.unitCount, 0) +
                  practiceRows.reduce((s, r) => s + r.unitCount, 0)}
                단
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
    </div>
  );
}