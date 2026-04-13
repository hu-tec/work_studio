import { useCurriculum } from "./components/use-curriculum";
import { StepCategory } from "./components/StepCategory";
import { StepGrade } from "./components/StepGrade";
import { StepCurriculum } from "./components/StepCurriculum";
import { SavedList } from "./components/SavedList";
import { DashboardOverview } from "./components/DashboardOverview";
import { CurriculumExpandView } from "./components/CurriculumExpandView";
import { RegulationView } from "./components/RegulationView";
import { MODE_LABEL } from "./components/mode";
import { useState, useEffect } from "react";
import { RotateCcw, Save, X, GraduationCap, Tag, Award, Hash, BookText, ClipboardList, FolderOpen, BarChart3, Layers, ShieldCheck } from "lucide-react";

export default function App() {
  const c = useCurriculum();
  const [activeTab, setActiveTab] = useState<"editor" | "expand" | "regulation" | "saved" | "dashboard">("editor");

  useEffect(() => {
    document.title = `${MODE_LABEL[c.mode]} 관리`;
  }, [c.mode]);
  const [savedFilter, setSavedFilter] = useState<{ catLarge?: string[]; field?: string[]; mid?: string[] }>({});

  const categoryPath = [c.catLarge, c.catMedium, c.catSmall].filter(Boolean).join(" › ");
  const hasSelection = c.catLarge || c.selectedField;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Header */}
      <div className="shrink-0 border-b border-border bg-card/95 backdrop-blur-sm z-20">
        <div className="flex items-center justify-between px-5 py-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-4 w-4" />
            </div>
            <h1 className="text-[0.95rem] font-semibold leading-tight tracking-tight">강사 급수 & {MODE_LABEL[c.mode]} 관리</h1>
            {c.mode !== "curriculum" && (
              <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[0.68rem] font-semibold text-indigo-700">
                {MODE_LABEL[c.mode]} 모드
              </span>
            )}
            {c.editingId && (
              <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[0.72rem] font-medium text-amber-700">수정 중</span>
            )}
          </div>

          {/* 탭 + 상태 뱃지 + 버튼을 한 줄에 */}
          <div className="flex items-center gap-2">
            {/* 탭 스위처 */}
            <div className="flex rounded-lg border border-border bg-muted/40 p-0.5">
              <button
                onClick={() => setActiveTab("editor")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.76rem] font-medium transition-all ${
                  activeTab === "editor"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ClipboardList className="h-3.5 w-3.5" />
                커리큘럼 편집
              </button>
              <button
                onClick={() => setActiveTab("expand")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.76rem] font-medium transition-all ${
                  activeTab === "expand"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                전체 펼치기
              </button>
              <button
                onClick={() => setActiveTab("regulation")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.76rem] font-medium transition-all ${
                  activeTab === "regulation"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                규정
              </button>
              <button
                onClick={() => setActiveTab("saved")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.76rem] font-medium transition-all ${
                  activeTab === "saved"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FolderOpen className="h-3.5 w-3.5" />
                저장 목록
                {c.savedList.length > 0 && (
                  <span className="rounded-full bg-primary/10 text-primary px-1.5 py-0 text-[0.62rem] font-semibold">
                    {c.savedList.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[0.76rem] font-medium transition-all ${
                  activeTab === "dashboard"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <BarChart3 className="h-3.5 w-3.5" />
                데이터 현황
              </button>
            </div>

            {/* 상태 뱃지 (편집 탭일 때만) */}
            {activeTab === "editor" && hasSelection && (
              <div className="hidden xl:flex items-center gap-1.5 text-[0.72rem] font-medium">
                {categoryPath && (
                  <span className="flex items-center gap-1 rounded-md bg-blue-50 px-1.5 py-0.5 text-blue-700">
                    <Tag className="h-3 w-3" />{categoryPath}
                  </span>
                )}
                {c.selectedField && (
                  <span className="flex items-center gap-1 rounded-md bg-purple-50 px-1.5 py-0.5 text-purple-700">
                    <Award className="h-3 w-3" />
                    {[c.selectedField, c.selectedMid, c.selectedLevel].filter(Boolean).join(" · ")}
                  </span>
                )}
                {c.totalKeywordCount > 0 && (
                  <span className="flex items-center gap-1 rounded-md bg-green-50 px-1.5 py-0.5 text-green-700">
                    <Hash className="h-3 w-3" />{c.totalKeywordCount}
                  </span>
                )}
                {c.totalUnitCount > 0 && (
                  <span className="flex items-center gap-1 rounded-md bg-indigo-50 px-1.5 py-0.5 text-indigo-700">
                    <BookText className="h-3 w-3" />{c.totalUnitCount}단
                  </span>
                )}
              </div>
            )}

            {/* 액션 버튼 */}
            {activeTab === "editor" && (
              <>
                {c.editingId && (
                  <button
                    onClick={c.handleCancelEdit}
                    className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-[0.78rem] text-muted-foreground transition-colors hover:bg-muted"
                  >
                    <X className="h-3 w-3" />취소
                  </button>
                )}
                <button
                  onClick={c.resetForm}
                  className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-[0.78rem] font-medium text-muted-foreground transition-colors hover:bg-muted"
                >
                  <RotateCcw className="h-3 w-3" />초기화
                </button>
                <button
                  onClick={c.handleSave}
                  disabled={!c.canSave}
                  className="flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-[0.78rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Save className="h-3 w-3" />{c.editingId ? "수정 저장" : "저장"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Body — 탭에 따라 전환 */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {activeTab === "expand" ? (
            <div className="p-4">
              <CurriculumExpandView mode={c.mode} />
            </div>
        ) : activeTab === "regulation" ? (
            <div className="p-1">
              <RegulationView mode={c.mode} />
            </div>
        ) : activeTab === "editor" ? (
          <div className="p-4 space-y-4">
            {/* Row 1: Step 1 + Step 2 */}
            <div className="grid grid-cols-2 gap-4">
              <StepCategory
                catLarge={c.catLarge}
                catMedium={c.catMedium}
                catSmall={c.catSmall}
                onLargeChange={c.handleCatLargeChange}
                onMediumChange={c.handleCatMediumChange}
                onSmallChange={c.setCatSmall}
              />
              <StepGrade
                selectedField={c.selectedField}
                selectedMid={c.selectedMid}
                selectedLevel={c.selectedLevel}
                selectedTargets={c.selectedTargets}
                availableTargets={c.availableTargets}
                onFieldChange={c.handleFieldChange}
                onMidChange={c.handleMidChange}
                onLevelChange={c.handleLevelChange}
                onToggleTarget={c.toggleTarget}
              />
            </div>

            {/* Row 2: Step 3 */}
            <StepCurriculum
              mode={c.mode}
              selectedField={c.selectedField}
              selectedMid={c.selectedMid}
              selectedLevel={c.selectedLevel}
              catLarge={c.catLarge}
              keywords={c.keywords}
              onToggleKeyword={c.toggleKeyword}
              onSetAll={c.setAllKeywords}
              basicClass={c.basicClass}
              practiceClass={c.practiceClass}
              onBasicClassChange={c.setBasicClass}
              onPracticeClassChange={c.setPracticeClass}
              basicUnits={c.basicUnits}
              practiceUnits={c.practiceUnits}
              onToggleBasicUnit={c.toggleBasicUnit}
              onTogglePracticeUnit={c.togglePracticeUnit}
              onToggleAllBasicUnits={c.toggleAllBasicUnits}
              onToggleAllPracticeUnits={c.toggleAllPracticeUnits}
              basicUnitExtras={c.basicUnitExtras}
              practiceUnitExtras={c.practiceUnitExtras}
              onUpdateBasicExtra={c.updateBasicUnitExtra}
              onUpdatePracticeExtra={c.updatePracticeUnitExtra}
              basicCustomUnits={c.basicCustomUnits}
              practiceCustomUnits={c.practiceCustomUnits}
              onAddBasicCustomUnit={c.addBasicCustomUnit}
              onAddPracticeCustomUnit={c.addPracticeCustomUnit}
              onUpdateBasicCustomUnit={c.updateBasicCustomUnit}
              onUpdatePracticeCustomUnit={c.updatePracticeCustomUnit}
              onDeleteBasicCustomUnit={c.deleteBasicCustomUnit}
              onDeletePracticeCustomUnit={c.deletePracticeCustomUnit}
            />
          </div>
        ) : activeTab === "saved" ? (
          <div className="p-4">
            <SavedList
              savedList={c.savedList}
              editingId={c.editingId}
              onEdit={(item) => { c.handleEdit(item); setActiveTab("editor"); }}
              onDelete={c.handleDelete}
              externalFilter={savedFilter}
            />
          </div>
        ) : (
          <div className="p-4">
            <DashboardOverview savedList={c.savedList} onNavigate={(filter) => {
              setSavedFilter(filter);
              setActiveTab("saved");
            }} />
          </div>
        )}
      </div>

      {/* Toast */}
      {c.toast && (
        <div
          className={`fixed left-1/2 top-14 z-50 -translate-x-1/2 rounded-lg px-4 py-2.5 shadow-lg text-[0.82rem] transition-all ${
            c.toast.type === "success"
              ? "bg-green-600 text-white"
              : c.toast.type === "info"
              ? "bg-blue-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {c.toast.type === "success" && "✅ "}
          {c.toast.type === "info" && "✏️ "}
          {c.toast.type === "error" && "❌ "}
          {c.toast.message}
        </div>
      )}
    </div>
  );
}