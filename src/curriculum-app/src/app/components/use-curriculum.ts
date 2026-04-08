import { useState, useEffect, useCallback } from "react";
import type { SavedCurriculum, CurriculumKeywords, UnitExtra, CustomUnit } from "./types";
import { STORAGE_KEY, DUMMY_DATA, getTargets } from "./data";

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
      item.keywords
  );
}

function loadFromStorage(): SavedCurriculum[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DUMMY_DATA;
    const parsed = JSON.parse(raw);
    if (validateData(parsed)) return parsed;
    localStorage.removeItem(STORAGE_KEY);
    return DUMMY_DATA;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return DUMMY_DATA;
  }
}

const emptyKeywords: CurriculumKeywords = { common: [], prompt: [], specialty: [], ethics: [] };
const emptyExtra: UnitExtra = { remark: "", attachment: "", qna: "", qnaAttachment: "" };

export function useCurriculum() {
  const [savedList, setSavedList] = useState<SavedCurriculum[]>(() => loadFromStorage());
  const [editingId, setEditingId] = useState<string | null>(null);

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

  // Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" | "error" } | null>(null);

  const showToast = useCallback((message: string, type: "success" | "info" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }, []);

  // Persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedList));
  }, [savedList]);

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

  const canSave =
    catLarge !== "" &&
    catMedium !== "" &&
    selectedField !== "" &&
    selectedMid !== "" &&
    selectedLevel !== "" &&
    totalKeywordCount > 0;

  const canSaveSpecial =
    catLarge !== "" &&
    (catLarge === "프롬프트추가" || catMedium !== "") &&
    selectedField !== "" &&
    selectedMid !== "" &&
    selectedLevel !== "" &&
    totalKeywordCount > 0;

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
    totalKeywordCount, totalUnitCount,
    canSave: canSave || canSaveSpecial,
    editingId, handleSave, handleEdit, handleCancelEdit, handleDelete, resetForm,
    savedList,
    toast,
  };
}
