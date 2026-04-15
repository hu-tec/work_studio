import { FIELD_OPTIONS, MID_OPTIONS, LEVEL_BY_MID } from "./data";
import { Award, ChevronRight, Users } from "lucide-react";

interface Props {
  selectedField: string;
  selectedMid: string;
  selectedLevel: string;
  selectedTargets: string[];
  availableTargets: string[];
  onFieldChange: (v: string) => void;
  onMidChange: (v: string) => void;
  onLevelChange: (v: string) => void;
  onToggleTarget: (t: string) => void;
}

export function StepGrade({
  selectedField, selectedMid, selectedLevel, selectedTargets, availableTargets,
  onFieldChange, onMidChange, onLevelChange, onToggleTarget,
}: Props) {
  const levelOptions = selectedMid ? LEVEL_BY_MID[selectedMid] || [] : [];

  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-100 text-purple-600">
          <Award className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[0.88rem] font-semibold tracking-tight">Step 2 — 급수</h3>
        {selectedField && (
          <div className="ml-auto flex items-center gap-0.5 text-[0.68rem] font-medium text-purple-600">
            <span>{selectedField}</span>
            {selectedMid && <><ChevronRight className="h-2.5 w-2.5" /><span>{selectedMid}</span></>}
            {selectedLevel && <><ChevronRight className="h-2.5 w-2.5" /><span>{selectedLevel}</span></>}
          </div>
        )}
      </div>

      <div className="flex rounded-lg border border-border overflow-hidden" style={{ height: selectedLevel ? 130 : 180 }}>
        {/* 분야 */}
        <div className="flex-1 min-w-0 border-r border-border flex flex-col">
          <div className="px-2 py-1 bg-muted/40 border-b border-border text-[0.66rem] font-semibold text-muted-foreground shrink-0">분야</div>
          <div className="flex-1 overflow-y-auto">
            {FIELD_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => onFieldChange(opt)}
                className={`flex w-full items-center justify-between px-2.5 py-1.5 text-[0.76rem] text-left transition-colors ${
                  selectedField === opt
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted/50"
                }`}
              >
                <span className="truncate">{opt}</span>
                <ChevronRight className={`h-3 w-3 shrink-0 ${selectedField === opt ? "text-primary-foreground/70" : "text-muted-foreground/50"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* 중 */}
        <div className="flex-1 min-w-0 border-r border-border flex flex-col">
          <div className="px-2 py-1 bg-muted/40 border-b border-border text-[0.66rem] font-semibold text-muted-foreground shrink-0">중</div>
          <div className="flex-1 overflow-y-auto">
            {!selectedField ? (
              <div className="flex items-center justify-center h-full text-[0.7rem] text-muted-foreground/50">분야 선택</div>
            ) : (
              MID_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onMidChange(opt)}
                  className={`flex w-full items-center justify-between px-2.5 py-1.5 text-[0.76rem] text-left transition-colors ${
                    selectedMid === opt
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  <ChevronRight className={`h-3 w-3 shrink-0 ${selectedMid === opt ? "text-primary-foreground/70" : "text-muted-foreground/50"}`} />
                </button>
              ))
            )}
          </div>
        </div>

        {/* 급수 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="px-2 py-1 bg-muted/40 border-b border-border text-[0.66rem] font-semibold text-muted-foreground shrink-0">급수</div>
          <div className="flex-1 overflow-y-auto">
            {levelOptions.length === 0 ? (
              <div className="flex items-center justify-center h-full text-[0.7rem] text-muted-foreground/50">
                {selectedMid ? "없음" : "중 선택"}
              </div>
            ) : (
              levelOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onLevelChange(opt)}
                  className={`flex w-full items-center px-2.5 py-1.5 text-[0.76rem] text-left transition-colors ${
                    selectedLevel === opt
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span className="truncate">{opt}</span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 대상 (급수 선택 후 표시) */}
      {selectedLevel && (
        <div className="mt-2.5 rounded-lg border border-border bg-muted/30 p-2.5">
          <div className="mb-1.5 flex items-center gap-1.5 text-[0.74rem] font-semibold text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>대상</span>
          </div>
          {availableTargets.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {availableTargets.map((target) => (
                <label
                  key={target}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[0.74rem] transition-colors ${
                    selectedTargets.includes(target)
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  <div
                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border transition-colors ${
                      selectedTargets.includes(target) ? "border-primary bg-primary text-white" : "border-border"
                    }`}
                  >
                    {selectedTargets.includes(target) && (
                      <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  {target}
                </label>
              ))}
            </div>
          ) : (
            <p className="text-[0.74rem] text-muted-foreground">지정 대상 없음</p>
          )}
        </div>
      )}
    </div>
  );
}
