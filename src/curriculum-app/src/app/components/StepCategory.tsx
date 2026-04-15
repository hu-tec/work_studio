import { CATEGORY_TREE } from "./data";
import { FolderOpen, ChevronRight } from "lucide-react";

interface Props {
  catLarge: string;
  catMedium: string;
  catSmall: string;
  onLargeChange: (v: string) => void;
  onMediumChange: (v: string) => void;
  onSmallChange: (v: string) => void;
}

export function StepCategory({ catLarge, catMedium, catSmall, onLargeChange, onMediumChange, onSmallChange }: Props) {
  const largeOptions = Object.keys(CATEGORY_TREE);
  const mediumOptions = catLarge ? Object.keys(CATEGORY_TREE[catLarge] || {}) : [];
  const smallOptions = catLarge && catMedium ? CATEGORY_TREE[catLarge]?.[catMedium] || [] : [];

  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-blue-600">
          <FolderOpen className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[0.88rem] font-semibold tracking-tight">Step 1 — 분류체계</h3>
        {catLarge && (
          <div className="ml-auto flex items-center gap-0.5 text-[0.68rem] font-medium text-blue-600">
            <span>{catLarge}</span>
            {catMedium && <><ChevronRight className="h-2.5 w-2.5" /><span>{catMedium}</span></>}
            {catSmall && <><ChevronRight className="h-2.5 w-2.5" /><span>{catSmall}</span></>}
          </div>
        )}
      </div>

      <div className="flex rounded-lg border border-border overflow-hidden" style={{ height: 180 }}>
        {/* 대분류 */}
        <div className="flex-1 min-w-0 border-r border-border flex flex-col">
          <div className="px-2 py-1 bg-muted/40 border-b border-border text-[0.66rem] font-semibold text-muted-foreground shrink-0">대분류</div>
          <div className="flex-1 overflow-y-auto">
            {largeOptions.map((opt) => {
              const hasSub = Object.keys(CATEGORY_TREE[opt] || {}).length > 0;
              return (
                <button
                  key={opt}
                  onClick={() => onLargeChange(opt)}
                  className={`flex w-full items-center justify-between px-2.5 py-1.5 text-[0.76rem] text-left transition-colors ${
                    catLarge === opt
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {hasSub && <ChevronRight className={`h-3 w-3 shrink-0 ${catLarge === opt ? "text-primary-foreground/70" : "text-muted-foreground/50"}`} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 중분류 */}
        <div className="flex-1 min-w-0 border-r border-border flex flex-col">
          <div className="px-2 py-1 bg-muted/40 border-b border-border text-[0.66rem] font-semibold text-muted-foreground shrink-0">중분류</div>
          <div className="flex-1 overflow-y-auto">
            {mediumOptions.length === 0 ? (
              <div className="flex items-center justify-center h-full text-[0.7rem] text-muted-foreground/50">
                {catLarge ? "없음" : "대분류 선택"}
              </div>
            ) : (
              mediumOptions.map((opt) => {
                const hasSub = (CATEGORY_TREE[catLarge]?.[opt] || []).length > 0;
                return (
                  <button
                    key={opt}
                    onClick={() => onMediumChange(opt)}
                    className={`flex w-full items-center justify-between px-2.5 py-1.5 text-[0.76rem] text-left transition-colors ${
                      catMedium === opt
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <span className="truncate">{opt}</span>
                    {hasSub && <ChevronRight className={`h-3 w-3 shrink-0 ${catMedium === opt ? "text-primary-foreground/70" : "text-muted-foreground/50"}`} />}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* 소분류 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="px-2 py-1 bg-muted/40 border-b border-border text-[0.66rem] font-semibold text-muted-foreground shrink-0">소분류</div>
          <div className="flex-1 overflow-y-auto">
            {smallOptions.length === 0 ? (
              <div className="flex items-center justify-center h-full text-[0.7rem] text-muted-foreground/50">
                {catMedium ? "없음" : "중분류 선택"}
              </div>
            ) : (
              smallOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onSmallChange(opt)}
                  className={`flex w-full items-center px-2.5 py-1.5 text-[0.76rem] text-left transition-colors ${
                    catSmall === opt
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
    </div>
  );
}
