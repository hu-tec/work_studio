import { SiteType } from './db-page-data';

const sites: { label: string; value: SiteType | '전체' }[] = [
  { label: '전체', value: '전체' },
  { label: 'AI 번역', value: 'AI 번역' },
  { label: '통독문서', value: '통독문서' },
  { label: '교육센터', value: '교육센터' },
  { label: '전시/행사', value: '전시/행사' },
  { label: '시험사이트', value: '시험사이트' },
];

interface SiteFilterChipsProps {
  selected: SiteType | '전체';
  onChange: (site: SiteType | '전체') => void;
  counts: Record<string, number>;
}

export function SiteFilterChips({ selected, onChange, counts }: SiteFilterChipsProps) {
  return (
    <div className="flex items-center gap-[6px] flex-wrap">
      {sites.map((site) => {
        const isActive = selected === site.value;
        return (
          <button
            key={site.value}
            onClick={() => onChange(site.value)}
            className={`
              flex items-center gap-[4px] px-[14px] py-[6px] rounded-full
              font-['Noto_Sans_KR',sans-serif] text-[13px] tracking-[-0.26px]
              transition-all cursor-pointer border
              ${isActive
                ? 'bg-[#222] text-white border-[#222]'
                : 'bg-white text-[#555] border-[#ddd] hover:bg-[#f5f5f5]'
              }
            `}
          >
            <span>{site.label}</span>
            <span className={`text-[12px] ${isActive ? 'text-white/70' : 'text-[#aaa]'}`}>
              {counts[site.value] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
