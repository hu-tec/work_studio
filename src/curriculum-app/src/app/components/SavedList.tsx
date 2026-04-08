import { useState } from "react";
import type { SavedCurriculum } from "./types";
import { CATEGORY_TREE, FIELD_OPTIONS, MID_OPTIONS, LEVEL_BY_MID } from "./data";
import { Pencil, Trash2, Archive, Tag, Calendar, BookText, Wrench, Filter, ChevronDown, ChevronRight, Table2, LayoutGrid } from "lucide-react";

/* ── 필터 칩 ── */
function Chip({ active, onClick, children, color }: {
  active: boolean; onClick: () => void; children: React.ReactNode; color?: string;
}) {
  const base = active
    ? color || "border-primary/40 bg-primary/10 text-primary"
    : "border-border text-muted-foreground/60 hover:bg-muted/40";
  return (
    <button onClick={onClick} className={`rounded-md border px-1.5 py-0.5 text-[0.64rem] font-medium transition-all ${base}`}>
      {children}
    </button>
  );
}

/* ── 카드 ── */
function CurriculumCard({
  item, isEditing, onEdit, onDelete,
}: {
  item: SavedCurriculum; isEditing: boolean; onEdit: () => void; onDelete: () => void;
}) {
  const categoryPath = [item.category.large, item.category.medium, item.category.small]
    .filter(Boolean).join(" › ");

  const allKeywords = [
    ...item.keywords.common, ...item.keywords.prompt,
    ...item.keywords.specialty, ...item.keywords.ethics,
  ];
  const totalCount = allKeywords.length;
  const previewKws = allKeywords.slice(0, 3);
  const overflow = totalCount - 3;

  const basicUnitCount = item.titles.basicUnits?.length || 0;
  const practiceUnitCount = item.titles.practiceUnits?.length || 0;

  const kwCounts: string[] = [];
  if (item.keywords.common.length) kwCounts.push(`공통${item.keywords.common.length}`);
  if (item.keywords.prompt.length) kwCounts.push(`프롬${item.keywords.prompt.length}`);
  if (item.keywords.specialty.length) kwCounts.push(`전문${item.keywords.specialty.length}`);
  if (item.keywords.ethics.length) kwCounts.push(`윤리${item.keywords.ethics.length}`);

  return (
    <div
      className={`group relative rounded-lg border bg-card p-3 transition-all hover:shadow-sm ${
        isEditing ? "border-primary ring-2 ring-primary/20" : "border-border"
      }`}
    >
      <div className="absolute right-2 top-2 flex gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
        <button onClick={(e) => { e.stopPropagation(); onEdit(); }}
          className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-blue-50 hover:text-blue-600">
          <Pencil className="h-3 w-3" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600">
          <Trash2 className="h-3 w-3" />
        </button>
      </div>

      <div className="mb-1.5 flex items-center gap-1 text-[0.78rem] font-semibold">
        <Tag className="h-3 w-3 text-blue-500 shrink-0" />
        <span className="truncate">{categoryPath}</span>
      </div>

      <div className="mb-1.5 flex flex-wrap gap-1">
        <span className="rounded bg-purple-100 px-1.5 py-0.5 text-[0.68rem] font-medium text-purple-700">{item.instructor_grade.field}</span>
        <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[0.68rem] font-medium text-indigo-700">{item.instructor_grade.mid}</span>
        <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[0.68rem] font-medium text-blue-700">{item.instructor_grade.level}</span>
        {item.targets.slice(0, 2).map((t) => (
          <span key={t} className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.68rem] font-medium text-gray-600 truncate max-w-[100px]">{t}</span>
        ))}
        {item.targets.length > 2 && (
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.68rem] font-medium text-gray-600">+{item.targets.length - 2}</span>
        )}
      </div>

      <div className="mb-1.5 flex items-center justify-between text-[0.7rem] text-muted-foreground">
        <div className="flex flex-col gap-0.5">
          <span>키워드 {totalCount} ({kwCounts.join("·")})</span>
          {(basicUnitCount > 0 || practiceUnitCount > 0) && (
            <span className="flex items-center gap-2">
              {basicUnitCount > 0 && (
                <span className="flex items-center gap-0.5">
                  <BookText className="h-2.5 w-2.5 text-indigo-500" />기본 {basicUnitCount}단
                </span>
              )}
              {practiceUnitCount > 0 && (
                <span className="flex items-center gap-0.5">
                  <Wrench className="h-2.5 w-2.5 text-teal-500" />실습 {practiceUnitCount}단
                </span>
              )}
            </span>
          )}
        </div>
        <span className="flex items-center gap-0.5 shrink-0">
          <Calendar className="h-2.5 w-2.5" />{item.created_at}
        </span>
      </div>

      <div className="flex flex-wrap gap-1">
        {previewKws.map((kw) => (
          <span key={kw} className="max-w-[140px] truncate rounded bg-muted px-1.5 py-0.5 text-[0.66rem] text-muted-foreground">{kw}</span>
        ))}
        {overflow > 0 && (
          <span className="rounded bg-muted px-1.5 py-0.5 text-[0.66rem] text-muted-foreground">+{overflow}</span>
        )}
      </div>
    </div>
  );
}

/* ── 테이블 셀 ── */
const thCls = "px-2.5 py-1.5 text-[0.68rem] font-semibold text-muted-foreground bg-muted/40 border-b border-r border-border text-left whitespace-nowrap";
const tdCls = "px-2.5 py-1 text-[0.72rem] border-b border-r border-border";
const tdNum = "px-2.5 py-1 text-[0.72rem] border-b border-r border-border text-center tabular-nums";
const fieldColors: Record<string, string> = {
  "프롬프트": "bg-orange-500", "번역": "bg-emerald-500", "AI 윤리": "bg-rose-500",
};

/* ── 분류 필터 패널 ── */
function ClassificationFilter({
  selCatLarge, selFields, selMids,
  onToggleCat, onToggleField, onToggleMid,
  onClearAll,
}: {
  selCatLarge: Set<string>; selFields: Set<string>; selMids: Set<string>;
  onToggleCat: (v: string) => void; onToggleField: (v: string) => void; onToggleMid: (v: string) => void;
  onClearAll: () => void;
}) {
  const [open, setOpen] = useState(true);
  const largeCats = Object.keys(CATEGORY_TREE);
  const hasFilter = selCatLarge.size < largeCats.length || selFields.size < FIELD_OPTIONS.length || selMids.size < MID_OPTIONS.length;

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-2 hover:bg-muted/30 transition-colors">
        <div className="flex items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-blue-500" />
          <span className="text-[0.78rem] font-semibold">분류 모듈</span>
          {hasFilter && <span className="rounded-full bg-blue-100 px-1.5 py-0 text-[0.6rem] font-medium text-blue-700">필터 적용중</span>}
        </div>
        <div className="flex items-center gap-2">
          {hasFilter && (
            <button onClick={(e) => { e.stopPropagation(); onClearAll(); }}
              className="text-[0.64rem] text-muted-foreground hover:text-foreground underline">초기화</button>
          )}
          {open ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
        </div>
      </button>
      {open && (
        <div className="border-t border-border p-3 space-y-2">
          <div className="flex items-start gap-2 flex-wrap">
            <span className="text-[0.68rem] font-semibold text-muted-foreground shrink-0 pt-0.5 w-12">대분류</span>
            <div className="flex flex-wrap gap-1">
              {largeCats.map(cat => (
                <Chip key={cat} active={selCatLarge.has(cat)} onClick={() => onToggleCat(cat)}
                  color={selCatLarge.has(cat) ? "border-blue-300 bg-blue-50 text-blue-700" : undefined}>
                  {cat}
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2 flex-wrap">
            <span className="text-[0.68rem] font-semibold text-muted-foreground shrink-0 pt-0.5 w-12">분야</span>
            <div className="flex flex-wrap gap-1">
              {FIELD_OPTIONS.map(f => (
                <Chip key={f} active={selFields.has(f)} onClick={() => onToggleField(f)}
                  color={selFields.has(f) ? (
                    f === "프롬프트" ? "border-blue-300 bg-blue-50 text-blue-700"
                    : f === "번역" ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                    : "border-rose-300 bg-rose-50 text-rose-700"
                  ) : undefined}>
                  {f}
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2 flex-wrap">
            <span className="text-[0.68rem] font-semibold text-muted-foreground shrink-0 pt-0.5 w-12">중구분</span>
            <div className="flex flex-wrap gap-1">
              {MID_OPTIONS.map(m => (
                <Chip key={m} active={selMids.has(m)} onClick={() => onToggleMid(m)}
                  color={selMids.has(m) ? "border-purple-300 bg-purple-50 text-purple-700" : undefined}>
                  {m}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════ */
interface Props {
  savedList: SavedCurriculum[];
  editingId: string | null;
  onEdit: (item: SavedCurriculum) => void;
  onDelete: (id: string) => void;
  externalFilter?: { catLarge?: string[]; field?: string[]; mid?: string[] };
}

export function SavedList({ savedList, editingId, onEdit, onDelete, externalFilter }: Props) {
  const largeCats = Object.keys(CATEGORY_TREE);
  const [selCatLarge, setSelCatLarge] = useState<Set<string>>(() => new Set(externalFilter?.catLarge || largeCats));
  const [selFields, setSelFields] = useState<Set<string>>(() => new Set(externalFilter?.field || FIELD_OPTIONS));
  const [selMids, setSelMids] = useState<Set<string>>(() => new Set(externalFilter?.mid || MID_OPTIONS));
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, val: string) => {
    setter(prev => { const n = new Set(prev); if (n.has(val)) n.delete(val); else n.add(val); return n; });
  };

  const clearAll = () => {
    setSelCatLarge(new Set(largeCats));
    setSelFields(new Set(FIELD_OPTIONS));
    setSelMids(new Set(MID_OPTIONS));
  };

  const filtered = savedList.filter(item =>
    selCatLarge.has(item.category.large) &&
    selFields.has(item.instructor_grade.field) &&
    selMids.has(item.instructor_grade.mid)
  );

  return (
    <div className="flex h-full flex-col space-y-3">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-600">
            <Archive className="h-3.5 w-3.5" />
          </div>
          <h3 className="text-[0.88rem] font-semibold tracking-tight">저장 목록</h3>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.72rem] font-medium text-muted-foreground">
            {filtered.length}/{savedList.length}건
          </span>
        </div>
        <div className="flex rounded-md border border-border overflow-hidden">
          <button onClick={() => setViewMode("grid")}
            className={`px-2 py-1 text-[0.66rem] ${viewMode === "grid" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
            <LayoutGrid className="h-3 w-3" />
          </button>
          <button onClick={() => setViewMode("table")}
            className={`px-2 py-1 text-[0.66rem] border-l border-border ${viewMode === "table" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
            <Table2 className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* 분류 필터 */}
      <ClassificationFilter
        selCatLarge={selCatLarge} selFields={selFields} selMids={selMids}
        onToggleCat={(v) => toggleSet(setSelCatLarge, v)}
        onToggleField={(v) => toggleSet(setSelFields, v)}
        onToggleMid={(v) => toggleSet(setSelMids, v)}
        onClearAll={clearAll}
      />

      {/* 콘텐츠 */}
      {filtered.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center py-12 text-muted-foreground">
          <Archive className="mb-2 h-8 w-8 opacity-30" />
          <p className="text-[0.82rem] font-medium">
            {savedList.length === 0 ? "저장된 항목 없음" : "필터 결과 없음"}
          </p>
          <p className="text-[0.72rem]">
            {savedList.length === 0 ? "커리큘럼을 구성하고 저장하세요" : "분류 필터를 조정해 보세요"}
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          {filtered.map((item) => (
            <CurriculumCard
              key={item.id} item={item}
              isEditing={editingId === item.id}
              onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className={`${thCls} w-[30px] text-center`}>No.</th>
                <th className={`${thCls} w-[72px]`}>날짜</th>
                <th className={thCls}>대분류</th>
                <th className={thCls}>중분류</th>
                <th className={thCls}>소분류</th>
                <th className={`${thCls} w-[70px]`}>분야</th>
                <th className={`${thCls} w-[42px] text-center`}>중</th>
                <th className={`${thCls} w-[36px] text-center`}>급수</th>
                <th className={`${thCls} w-[42px] text-center`}>KW</th>
                <th className={`${thCls} w-[42px] text-center`}>기본</th>
                <th className={`${thCls} w-[42px] text-center`}>실습</th>
                <th className={thCls}>대상</th>
                <th className={`${thCls} w-[50px]`}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => {
                const kwCnt = item.keywords.common.length + item.keywords.prompt.length +
                  item.keywords.specialty.length + item.keywords.ethics.length;
                const bCnt = item.titles.basicUnits?.length || 0;
                const pCnt = item.titles.practiceUnits?.length || 0;
                return (
                  <tr key={item.id} className="hover:bg-muted/20">
                    <td className={tdNum}>{idx + 1}</td>
                    <td className={`${tdCls} text-[0.68rem] text-muted-foreground`}>{item.created_at}</td>
                    <td className={tdCls}>{item.category.large}</td>
                    <td className={tdCls}>{item.category.medium}</td>
                    <td className={`${tdCls} text-muted-foreground`}>{item.category.small || "—"}</td>
                    <td className={tdCls}>
                      <span className={`inline-block rounded px-1.5 py-0 text-[0.64rem] text-white ${fieldColors[item.instructor_grade.field] || "bg-gray-400"}`}>
                        {item.instructor_grade.field}
                      </span>
                    </td>
                    <td className={tdNum}>{item.instructor_grade.mid}</td>
                    <td className={tdNum}>{item.instructor_grade.level}</td>
                    <td className={tdNum}>{kwCnt}</td>
                    <td className={tdNum}>{bCnt}</td>
                    <td className={tdNum}>{pCnt}</td>
                    <td className={`${tdCls} text-[0.66rem]`}>{item.targets.length > 0 ? item.targets.join(", ") : "—"}</td>
                    <td className={`${tdCls} text-center`}>
                      <div className="flex gap-0.5 justify-center">
                        <button onClick={() => onEdit(item)} className="rounded p-0.5 hover:bg-blue-50 hover:text-blue-600 text-muted-foreground">
                          <Pencil className="h-3 w-3" />
                        </button>
                        <button onClick={() => onDelete(item.id)} className="rounded p-0.5 hover:bg-red-50 hover:text-red-600 text-muted-foreground">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
