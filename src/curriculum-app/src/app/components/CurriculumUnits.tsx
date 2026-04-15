import { CheckSquare, Square, Plus, Trash2 } from "lucide-react";
import type { CurriculumGroup } from "./curriculum-data";
import type { UnitExtra, CustomUnit } from "./types";

interface Props {
  label: string;
  icon: React.ReactNode;
  color: string;
  groups: CurriculumGroup[];
  selectedUnits: string[];
  onToggleUnit: (id: string) => void;
  onToggleAllGroup: (ids: string[], select: boolean) => void;
  titleValue: string;
  onTitleChange: (v: string) => void;
  unitExtras: Record<string, UnitExtra>;
  onUpdateExtra: (unitId: string, field: keyof UnitExtra, value: string) => void;
  customUnits: CustomUnit[];
  onAddCustomUnit: (groupKey: string) => void;
  onUpdateCustomUnit: (unitId: string, field: keyof CustomUnit, value: string) => void;
  onDeleteCustomUnit: (unitId: string) => void;
  showExtra: boolean;
}

const emptyExtra: UnitExtra = { remark: "", attachment: "", qna: "", qnaAttachment: "" };

/** "1주차 · 생성형 AI 개론" → { week: "1주차", subject: "생성형 AI 개론" } */
function parseTitle(raw: string): { week: string; subject: string } {
  const m = raw.match(/^(\d+주차)\s*·\s*(.+)$/);
  if (m) return { week: m[1], subject: m[2] };
  const n = raw.match(/^(\d+)\.\s*(.+)$/);
  if (n) return { week: "", subject: n[2] };
  return { week: "", subject: raw };
}

/** 셀 인풋 */
function CellInput({
  value,
  onChange,
  placeholder,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      placeholder={placeholder || "—"}
      className={`w-full bg-transparent border-b border-transparent px-0.5 py-0.5 text-[0.7rem] placeholder:text-muted-foreground/30 focus:border-primary/40 focus:outline-none transition-colors ${className}`}
    />
  );
}

/* ────────── 테이블 그룹 ────────── */
function TableGroupPanel({
  group,
  groupIndex,
  selectedUnits,
  onToggleUnit,
  onToggleAllGroup,
  showExtra,
  unitExtras,
  onUpdateExtra,
  customUnits,
  onAddCustomUnit,
  onUpdateCustomUnit,
  onDeleteCustomUnit,
}: {
  group: CurriculumGroup;
  groupIndex: number;
  selectedUnits: string[];
  onToggleUnit: (id: string) => void;
  onToggleAllGroup: (ids: string[], select: boolean) => void;
  showExtra: boolean;
  unitExtras: Record<string, UnitExtra>;
  onUpdateExtra: (unitId: string, field: keyof UnitExtra, value: string) => void;
  customUnits: CustomUnit[];
  onAddCustomUnit: (groupKey: string) => void;
  onUpdateCustomUnit: (unitId: string, field: keyof CustomUnit, value: string) => void;
  onDeleteCustomUnit: (unitId: string) => void;
}) {
  const groupKey = `${group.name}-${groupIndex}`;
  const groupCustom = customUnits.filter((u) => u.groupKey === groupKey);
  const allTemplateIds = group.units.map((u) => u.id);
  const allCustomIds = groupCustom.map((u) => u.id);
  const allIds = [...allTemplateIds, ...allCustomIds];
  const selectedCount = allIds.filter((id) => selectedUnits.includes(id)).length;
  const allSelected = allIds.length > 0 && selectedCount === allIds.length;

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      {/* Group header */}
      <div className="flex items-center justify-between bg-muted/40 px-2.5 py-1.5">
        <div className="flex items-center gap-1.5 text-[0.76rem] font-semibold">
          <span>{group.name}</span>
          {group.subtitle && (
            <span className="text-[0.66rem] text-muted-foreground">({group.subtitle})</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-muted px-1.5 py-0.5 text-[0.62rem] font-medium text-muted-foreground">
            {selectedCount}/{allIds.length}
          </span>
          <button
            onClick={() => onToggleAllGroup(allIds, !allSelected)}
            className={`rounded px-1.5 py-0.5 text-[0.62rem] font-medium transition-colors ${
              allSelected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {allSelected ? "해제" : "전체"}
          </button>
          <button
            onClick={() => onAddCustomUnit(groupKey)}
            className="flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[0.62rem] font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <Plus className="h-2.5 w-2.5" />추가
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[0.7rem]">
          <thead>
            <tr className="bg-muted/20 border-b border-border">
              <th className="w-7 px-1 py-1 text-center shrink-0"></th>
              <th className="w-[52px] px-1 py-1 text-left font-semibold text-muted-foreground">주차</th>
              <th className="min-w-[90px] px-1 py-1 text-left font-semibold text-muted-foreground">제목</th>
              <th className="min-w-[130px] px-1 py-1 text-left font-semibold text-muted-foreground">교육 내용</th>
              {showExtra && (
                <>
                  <th className="min-w-[80px] px-1 py-1 text-left font-semibold text-muted-foreground">비고</th>
                  <th className="min-w-[70px] px-1 py-1 text-left font-semibold text-muted-foreground">첨부</th>
                  <th className="min-w-[100px] px-1 py-1 text-left font-semibold text-muted-foreground">질문과 건의 해결안</th>
                  <th className="min-w-[70px] px-1 py-1 text-left font-semibold text-muted-foreground">첨부</th>
                </>
              )}
              <th className="w-6 px-1 py-1"></th>
            </tr>
          </thead>
          <tbody>
            {/* Template units */}
            {group.units.map((unit) => {
              const isSelected = selectedUnits.includes(unit.id);
              const { week, subject } = parseTitle(unit.title);
              const extra = unitExtras[unit.id] || emptyExtra;
              return (
                <tr
                  key={unit.id}
                  className={`border-b border-border/30 transition-colors ${
                    isSelected ? "bg-primary/5" : "hover:bg-muted/20"
                  }`}
                >
                  <td className="px-1 py-0.5 text-center">
                    <button onClick={() => onToggleUnit(unit.id)} className="inline-flex">
                      {isSelected ? (
                        <CheckSquare className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Square className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </button>
                  </td>
                  <td className="px-1 py-0.5 text-muted-foreground whitespace-nowrap text-[0.68rem]">
                    {week || "—"}
                    {unit.hours && (
                      <div className="rounded bg-blue-50 px-0.5 text-[0.56rem] text-blue-600 mt-0.5 text-center">
                        {unit.hours}
                      </div>
                    )}
                  </td>
                  <td className={`px-1 py-0.5 ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                    {subject}
                  </td>
                  <td className="px-1 py-0.5 text-muted-foreground leading-snug text-[0.68rem]">
                    {unit.content}
                  </td>
                  {showExtra && (
                    <>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={extra.remark}
                          onChange={(v) => onUpdateExtra(unit.id, "remark", v)}
                          placeholder="비고 입력"
                        />
                      </td>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={extra.attachment}
                          onChange={(v) => onUpdateExtra(unit.id, "attachment", v)}
                          placeholder="파일명"
                        />
                      </td>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={extra.qna}
                          onChange={(v) => onUpdateExtra(unit.id, "qna", v)}
                          placeholder="해결안 입력"
                        />
                      </td>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={extra.qnaAttachment}
                          onChange={(v) => onUpdateExtra(unit.id, "qnaAttachment", v)}
                          placeholder="파일명"
                        />
                      </td>
                    </>
                  )}
                  <td className="px-1 py-0.5"></td>
                </tr>
              );
            })}

            {/* Custom (user-added) units */}
            {groupCustom.map((cu) => {
              const isSelected = selectedUnits.includes(cu.id);
              return (
                <tr
                  key={cu.id}
                  className={`border-b border-border/30 transition-colors ${
                    isSelected ? "bg-green-50/60" : "bg-amber-50/30 hover:bg-amber-50/50"
                  }`}
                >
                  <td className="px-1 py-0.5 text-center">
                    <button onClick={() => onToggleUnit(cu.id)} className="inline-flex">
                      {isSelected ? (
                        <CheckSquare className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Square className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </button>
                  </td>
                  <td className="px-1 py-0.5">
                    <CellInput
                      value={cu.week}
                      onChange={(v) => onUpdateCustomUnit(cu.id, "week", v)}
                      placeholder="주차"
                      className="text-[0.68rem]"
                    />
                  </td>
                  <td className="px-1 py-0.5">
                    <CellInput
                      value={cu.title}
                      onChange={(v) => onUpdateCustomUnit(cu.id, "title", v)}
                      placeholder="제목 입력"
                    />
                  </td>
                  <td className="px-1 py-0.5">
                    <CellInput
                      value={cu.content}
                      onChange={(v) => onUpdateCustomUnit(cu.id, "content", v)}
                      placeholder="교육 내용 입력"
                    />
                  </td>
                  {showExtra && (
                    <>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={cu.remark}
                          onChange={(v) => onUpdateCustomUnit(cu.id, "remark", v)}
                          placeholder="비고 입력"
                        />
                      </td>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={cu.attachment}
                          onChange={(v) => onUpdateCustomUnit(cu.id, "attachment", v)}
                          placeholder="파일명"
                        />
                      </td>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={cu.qna}
                          onChange={(v) => onUpdateCustomUnit(cu.id, "qna", v)}
                          placeholder="해결안 입력"
                        />
                      </td>
                      <td className="px-1 py-0.5">
                        <CellInput
                          value={cu.qnaAttachment}
                          onChange={(v) => onUpdateCustomUnit(cu.id, "qnaAttachment", v)}
                          placeholder="파일명"
                        />
                      </td>
                    </>
                  )}
                  <td className="px-1 py-0.5 text-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); if (window.confirm("이 행을 삭제하시겠습니까?")) onDeleteCustomUnit(cu.id); }}
                      className="rounded p-0.5 text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                      title="행 삭제"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ────────── 메인 컴포넌트 ────────── */
export function CurriculumUnits({
  label,
  icon,
  color,
  groups,
  selectedUnits,
  onToggleUnit,
  onToggleAllGroup,
  titleValue,
  onTitleChange,
  unitExtras,
  onUpdateExtra,
  customUnits,
  onAddCustomUnit,
  onUpdateCustomUnit,
  onDeleteCustomUnit,
  showExtra,
}: Props) {
  const allTemplateIds = groups.flatMap((g) => g.units.map((u) => u.id));
  const allCustomIds = customUnits.map((u) => u.id);
  const allIds = [...allTemplateIds, ...allCustomIds];
  const totalSelected = allIds.filter((id) => selectedUnits.includes(id)).length;

  if (groups.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-3">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <span className="text-[0.8rem] font-medium">{label}</span>
        </div>
        <p className="text-[0.72rem] text-muted-foreground">급수와 분야를 선택하면 커리큘럼이 표시됩니다</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Section header */}
      <div className={`flex items-center rounded-t-xl px-3 py-2 ${color}`}>
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[0.82rem] font-semibold">{label}</span>
          <span className="rounded-full bg-white/80 px-1.5 py-0.5 text-[0.64rem] font-medium text-gray-700">
            {totalSelected}/{allIds.length} 단 선택
          </span>
        </div>
      </div>

      <div className="p-2.5 space-y-2">
        {/* Title input */}
        <div className="flex items-center gap-2">
          <label className="text-[0.68rem] font-semibold text-muted-foreground shrink-0">제목</label>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="커리큘럼 제목 입력 (선택)"
            className="flex-1 rounded-md border border-border bg-background px-2 py-1 text-[0.76rem] transition-colors focus:border-primary focus:outline-none"
          />
        </div>

        {/* Table groups */}
        {groups.map((group, i) => (
          <TableGroupPanel
            key={`${group.name}-${i}`}
            group={group}
            groupIndex={i}
            selectedUnits={selectedUnits}
            onToggleUnit={onToggleUnit}
            onToggleAllGroup={onToggleAllGroup}
            showExtra={showExtra}
            unitExtras={unitExtras}
            onUpdateExtra={onUpdateExtra}
            customUnits={customUnits}
            onAddCustomUnit={onAddCustomUnit}
            onUpdateCustomUnit={onUpdateCustomUnit}
            onDeleteCustomUnit={onDeleteCustomUnit}
          />
        ))}
      </div>
    </div>
  );
}