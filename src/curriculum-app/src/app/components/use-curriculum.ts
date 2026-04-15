import { useState, useEffect, useCallback } from "react";
import type { SavedCurriculum, CurriculumKeywords, UnitExtra, CustomUnit, TextbookData, TextbookChapter } from "./types";
import { EMPTY_TEXTBOOK } from "./types";
import { STORAGE_KEY, DUMMY_DATA, getTargets } from "./data";
import { detectMode, getStorageKey, type ContentMode } from "./mode";

function generateId(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function validateData(data: unknown): data is SavedCurriculum[] {
  if (!Array.isArray(data)) return false;
  return data.every(
    (item) =>
      item &&
      typeof item === "object" &&
      item.category?.large &&
      item.instructor_grade?.field &&
      (item.keywords || item.textbookData)
  );
}

function loadFromStorage(mode: ContentMode): SavedCurriculum[] {
  const key = getStorageKey(mode);
  // 커리큘럼 모드만 DUMMY 시드 허용 — 문제/교재는 빈 배열로 시작 (원본 미제공)
  const fallback: SavedCurriculum[] = mode === "curriculum" ? DUMMY_DATA : [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (validateData(parsed)) return parsed;
    localStorage.removeItem(key);
    return fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}
// STORAGE_KEY 레거시 참조 유지 (기존 import 깨지지 않도록)
void STORAGE_KEY;

const emptyKeywords: CurriculumKeywords = { common: [], prompt: [], specialty: [], ethics: [] };
const emptyExtra: UnitExtra = { remark: "", attachment: "", qna: "", qnaAttachment: "" };

// 모드 → DB 테이블 매핑 (가연 시드 포함 서버 rows fetch 용)
const MODE_TO_API: Record<ContentMode, string | null> = {
  curriculum: null,  // 커리큘럼은 DUMMY_DATA 가 있어 기존 동작 유지
  textbooks: "/api/textbooks",
  questions: null,  // questions 테이블은 CBT 전용 스키마 — SavedCurriculum 과 호환 안 됨
};

async function loadFromAPI(mode: ContentMode): Promise<SavedCurriculum[]> {
  const endpoint = MODE_TO_API[mode];
  if (!endpoint) return [];
  try {
    const res = await fetch(endpoint);
    if (!res.ok) return [];
    const rows: Array<{ id: number; data: string | Record<string, unknown> }> = await res.json();
    const parsed: SavedCurriculum[] = [];
    for (const r of rows) {
      const d = typeof r.data === "string" ? JSON.parse(r.data) : r.data;
      if (d && d.category?.large && d.instructor_grade?.field && (d.keywords || d.textbookData)) {
        parsed.push(d as SavedCurriculum);
      }
    }
    return parsed;
  } catch {
    return [];
  }
}

export function useCurriculum() {
  const [mode] = useState<ContentMode>(() => detectMode());
  const [savedList, setSavedList] = useState<SavedCurriculum[]>(() => loadFromStorage(mode));
  const [editingId, setEditingId] = useState<string | null>(null);

  // 비커리 모드: 마운트 시 DB 에서 fetch 해서 localStorage 와 merge (id 중복 시 localStorage 우선)
  useEffect(() => {
    let alive = true;
    if (MODE_TO_API[mode]) {
      loadFromAPI(mode).then((apiRows) => {
        if (!alive || apiRows.length === 0) return;
        setSavedList((current) => {
          const existingIds = new Set(current.map((r) => r.id));
          const merged = [...current];
          for (const r of apiRows) {
            if (!existingIds.has(r.id)) merged.push(r);
          }
          return merged;
        });
      });
    }
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Step 1
  const [catLarge, setCatLarge] = useState("");
  const [catMedium, setCatMedium] = useState("");
  const [catSmall, setCatSmall] = useState("");

  // Step 2
  const [selectedField, setSelectedField] = useState("");
  const [selectedMid, setSelectedMid] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);

  // Step 3 - Keywords
  const [keywords, setKeywords] = useState<CurriculumKeywords>({ ...emptyKeywords });

  // Step 3 - Curriculum Units
  const [basicClass, setBasicClass] = useState("");
  const [practiceClass, setPracticeClass] = useState("");
  const [basicUnits, setBasicUnits] = useState<string[]>([]);
  const [practiceUnits, setPracticeUnits] = useState<string[]>([]);

  // Step 3 - Unit extras (editable columns per unit)
  const [basicUnitExtras, setBasicUnitExtras] = useState<Record<string, UnitExtra>>({});
  const [practiceUnitExtras, setPracticeUnitExtras] = useState<Record<string, UnitExtra>>({});

  // Step 3 - Custom units (user-added rows)
  const [basicCustomUnits, setBasicCustomUnits] = useState<CustomUnit[]>([]);
  const [practiceCustomUnits, setPracticeCustomUnits] = useState<CustomUnit[]>([]);

  // Step 3 - 교재 모드 전용 데이터
  const [textbookData, setTextbookData] = useState<TextbookData>({ ...EMPTY_TEXTBOOK });

  // Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" | "error" } | null>(null);

  const showToast = useCallback((message: string, type: "success" | "info" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }, []);

  // Persist (모드별 분리)
  useEffect(() => {
    localStorage.setItem(getStorageKey(mode), JSON.stringify(savedList));
  }, [savedList, mode]);

  // Cascade resets
  const handleCatLargeChange = (val: string) => {
    setCatLarge(val);
    setCatMedium("");
    setCatSmall("");
  };
  const handleCatMediumChange = (val: string) => {
    setCatMedium(val);
    setCatSmall("");
  };

  const handleFieldChange = (val: string) => {
    setSelectedField(val);
    setSelectedMid("");
    setSelectedLevel("");
    setSelectedTargets([]);
    setKeywords((prev) => ({ ...prev, prompt: [], specialty: [], ethics: [] }));
    setBasicUnits([]);
    setPracticeUnits([]);
    setBasicUnitExtras({});
    setPracticeUnitExtras({});
    setBasicCustomUnits([]);
    setPracticeCustomUnits([]);
  };
  const handleMidChange = (val: string) => {
    setSelectedMid(val);
    setSelectedLevel("");
    setSelectedTargets([]);
    setBasicUnits([]);
    setPracticeUnits([]);
    setBasicUnitExtras({});
    setPracticeUnitExtras({});
    setBasicCustomUnits([]);
    setPracticeCustomUnits([]);
  };
  const handleLevelChange = (val: string) => {
    setSelectedLevel(val);
    setSelectedTargets([]);
    setBasicUnits([]);
    setPracticeUnits([]);
    setBasicUnitExtras({});
    setPracticeUnitExtras({});
    setBasicCustomUnits([]);
    setPracticeCustomUnits([]);
  };

  const toggleTarget = (target: string) => {
    setSelectedTargets((prev) =>
      prev.includes(target) ? prev.filter((t) => t !== target) : [...prev, target]
    );
  };

  const toggleKeyword = (category: keyof CurriculumKeywords, kw: string) => {
    setKeywords((prev) => ({
      ...prev,
      [category]: prev[category].includes(kw)
        ? prev[category].filter((k) => k !== kw)
        : [...prev[category], kw],
    }));
  };

  const setAllKeywords = (category: keyof CurriculumKeywords, all: string[], select: boolean) => {
    setKeywords((prev) => ({
      ...prev,
      [category]: select ? [...all] : [],
    }));
  };

  // Curriculum unit toggles
  const toggleBasicUnit = (id: string) => {
    setBasicUnits((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };
  const togglePracticeUnit = (id: string) => {
    setPracticeUnits((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };
  const toggleAllBasicUnits = (ids: string[], select: boolean) => {
    setBasicUnits((prev) => {
      if (select) {
        const newSet = new Set([...prev, ...ids]);
        return Array.from(newSet);
      }
      return prev.filter((u) => !ids.includes(u));
    });
  };
  const toggleAllPracticeUnits = (ids: string[], select: boolean) => {
    setPracticeUnits((prev) => {
      if (select) {
        const newSet = new Set([...prev, ...ids]);
        return Array.from(newSet);
      }
      return prev.filter((u) => !ids.includes(u));
    });
  };

  // Unit extras handlers
  const updateBasicUnitExtra = (unitId: string, field: keyof UnitExtra, value: string) => {
    setBasicUnitExtras((prev) => ({
      ...prev,
      [unitId]: { ...(prev[unitId] || emptyExtra), [field]: value },
    }));
  };
  const updatePracticeUnitExtra = (unitId: string, field: keyof UnitExtra, value: string) => {
    setPracticeUnitExtras((prev) => ({
      ...prev,
      [unitId]: { ...(prev[unitId] || emptyExtra), [field]: value },
    }));
  };

  // Custom units handlers
  const addBasicCustomUnit = (groupKey: string) => {
    const newUnit: CustomUnit = {
      id: `custom-b-${generateId()}`,
      groupKey,
      week: "",
      title: "",
      hours: "",
      content: "",
      remark: "",
      attachment: "",
      qna: "",
      qnaAttachment: "",
    };
    setBasicCustomUnits((prev) => [...prev, newUnit]);
    // auto-select the new unit
    setBasicUnits((prev) => [...prev, newUnit.id]);
  };
  const addPracticeCustomUnit = (groupKey: string) => {
    const newUnit: CustomUnit = {
      id: `custom-p-${generateId()}`,
      groupKey,
      week: "",
      title: "",
      hours: "",
      content: "",
      remark: "",
      attachment: "",
      qna: "",
      qnaAttachment: "",
    };
    setPracticeCustomUnits((prev) => [...prev, newUnit]);
    setPracticeUnits((prev) => [...prev, newUnit.id]);
  };

  const updateBasicCustomUnit = (unitId: string, field: keyof CustomUnit, value: string) => {
    setBasicCustomUnits((prev) =>
      prev.map((u) => (u.id === unitId ? { ...u, [field]: value } : u))
    );
  };
  const updatePracticeCustomUnit = (unitId: string, field: keyof CustomUnit, value: string) => {
    setPracticeCustomUnits((prev) =>
      prev.map((u) => (u.id === unitId ? { ...u, [field]: value } : u))
    );
  };

  const deleteBasicCustomUnit = (unitId: string) => {
    setBasicCustomUnits((prev) => prev.filter((u) => u.id !== unitId));
    setBasicUnits((prev) => prev.filter((id) => id !== unitId));
    setBasicUnitExtras((prev) => {
      const copy = { ...prev };
      delete copy[unitId];
      return copy;
    });
  };
  const deletePracticeCustomUnit = (unitId: string) => {
    setPracticeCustomUnits((prev) => prev.filter((u) => u.id !== unitId));
    setPracticeUnits((prev) => prev.filter((id) => id !== unitId));
    setPracticeUnitExtras((prev) => {
      const copy = { ...prev };
      delete copy[unitId];
      return copy;
    });
  };

  const totalKeywordCount =
    keywords.common.length + keywords.prompt.length + keywords.specialty.length + keywords.ethics.length;

  const totalUnitCount = basicUnits.length + practiceUnits.length;

  // 모드별 캔세이브 — 커리는 키워드 필수, 교재는 제목 필수, 문제는 (현재) 저장 막음
  const baseSelectionsValid =
    catLarge !== "" &&
    catMedium !== "" &&
    selectedField !== "" &&
    selectedMid !== "" &&
    selectedLevel !== "";

  const canSaveCurriculum = baseSelectionsValid && totalKeywordCount > 0;
  const canSaveTextbook = baseSelectionsValid && textbookData.title.trim() !== "";

  const canSave =
    mode === "textbooks" ? canSaveTextbook
    : mode === "curriculum" ? canSaveCurriculum
    : false;

  const canSaveSpecial =
    mode === "curriculum" &&
    catLarge !== "" &&
    (catLarge === "프롬프트추가" || catMedium !== "") &&
    selectedField !== "" &&
    selectedMid !== "" &&
    selectedLevel !== "" &&
    totalKeywordCount > 0;

  // 교재 챕터 CRUD
  const addChapter = () => {
    const newCh: TextbookChapter = { id: `ch-${generateId()}`, title: "", pages: "" };
    setTextbookData((prev) => ({ ...prev, chapters: [...prev.chapters, newCh] }));
  };
  const updateChapter = (id: string, field: keyof TextbookChapter, value: string) => {
    setTextbookData((prev) => ({
      ...prev,
      chapters: prev.chapters.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    }));
  };
  const deleteChapter = (id: string) => {
    setTextbookData((prev) => ({ ...prev, chapters: prev.chapters.filter((c) => c.id !== id) }));
  };
  const updateTextbookField = (field: keyof TextbookData, value: string) => {
    setTextbookData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setCatLarge("");
    setCatMedium("");
    setCatSmall("");
    setSelectedField("");
    setSelectedMid("");
    setSelectedLevel("");
    setSelectedTargets([]);
    setKeywords({ ...emptyKeywords });
    setBasicClass("");
    setPracticeClass("");
    setBasicUnits([]);
    setPracticeUnits([]);
    setBasicUnitExtras({});
    setPracticeUnitExtras({});
    setBasicCustomUnits([]);
    setPracticeCustomUnits([]);
    setTextbookData({ ...EMPTY_TEXTBOOK });
    setEditingId(null);
  };

  const handleSave = () => {
    if (!canSave && !canSaveSpecial) return;

    const curriculum: SavedCurriculum = {
      id: editingId || generateId(),
      created_at: todayStr(),
      category: { large: catLarge, medium: catMedium, small: catSmall },
      instructor_grade: { field: selectedField, mid: selectedMid, level: selectedLevel },
      targets: selectedTargets,
      keywords: { ...keywords },
      titles: {
        basicClass,
        practiceClass,
        basicUnits: [...basicUnits],
        practiceUnits: [...practiceUnits],
        basicUnitExtras: { ...basicUnitExtras },
        practiceUnitExtras: { ...practiceUnitExtras },
        basicCustomUnits: [...basicCustomUnits],
        practiceCustomUnits: [...practiceCustomUnits],
      },
    };

    if (mode === "textbooks") {
      curriculum.textbookData = {
        ...textbookData,
        chapters: textbookData.chapters.map((c) => ({ ...c })),
      };
    }

    if (editingId) {
      setSavedList((prev) => prev.map((item) => (item.id === editingId ? curriculum : item)));
      showToast("수정 완료", "success");
    } else {
      setSavedList((prev) => [curriculum, ...prev]);
      showToast("저장 완료", "success");
    }
    resetForm();
  };

  const handleEdit = (item: SavedCurriculum) => {
    setEditingId(item.id);
    setCatLarge(item.category.large);
    setCatMedium(item.category.medium);
    setCatSmall(item.category.small);
    setSelectedField(item.instructor_grade.field);
    setSelectedMid(item.instructor_grade.mid);
    setSelectedLevel(item.instructor_grade.level);
    setSelectedTargets([...item.targets]);
    setKeywords({ ...item.keywords });
    setBasicClass(item.titles.basicClass);
    setPracticeClass(item.titles.practiceClass);
    setBasicUnits(item.titles.basicUnits || []);
    setPracticeUnits(item.titles.practiceUnits || []);
    setBasicUnitExtras(item.titles.basicUnitExtras || {});
    setPracticeUnitExtras(item.titles.practiceUnitExtras || {});
    setBasicCustomUnits(item.titles.basicCustomUnits || []);
    setPracticeCustomUnits(item.titles.practiceCustomUnits || []);
    setTextbookData(item.textbookData ? { ...EMPTY_TEXTBOOK, ...item.textbookData, chapters: [...(item.textbookData.chapters || [])] } : { ...EMPTY_TEXTBOOK });
    showToast("수정 모드", "info");
  };

  const handleCancelEdit = () => {
    resetForm();
    showToast("취소됨", "info");
  };

  const handleDelete = (id: string) => {
    setSavedList((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
    showToast("삭제 완료", "success");
  };

  const availableTargets = selectedMid && selectedLevel ? getTargets(selectedMid, selectedLevel) : [];

  return {
    mode,
    catLarge, catMedium, catSmall,
    handleCatLargeChange, handleCatMediumChange, setCatSmall,
    selectedField, selectedMid, selectedLevel, selectedTargets,
    handleFieldChange, handleMidChange, handleLevelChange, toggleTarget,
    availableTargets,
    keywords, toggleKeyword, setAllKeywords,
    basicClass, setBasicClass, practiceClass, setPracticeClass,
    basicUnits, practiceUnits,
    toggleBasicUnit, togglePracticeUnit,
    toggleAllBasicUnits, toggleAllPracticeUnits,
    basicUnitExtras, practiceUnitExtras,
    updateBasicUnitExtra, updatePracticeUnitExtra,
    basicCustomUnits, practiceCustomUnits,
    addBasicCustomUnit, addPracticeCustomUnit,
    updateBasicCustomUnit, updatePracticeCustomUnit,
    deleteBasicCustomUnit, deletePracticeCustomUnit,
    textbookData, updateTextbookField, addChapter, updateChapter, deleteChapter,
    totalKeywordCount, totalUnitCount,
    canSave: canSave || canSaveSpecial,
    editingId, handleSave, handleEdit, handleCancelEdit, handleDelete, resetForm,
    savedList,
    toast,
  };
}
