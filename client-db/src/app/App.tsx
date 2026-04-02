import { useState, useMemo, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Sidebar } from './components/sidebar';
import { AdminHeader } from './components/admin-header';
import { TabNavigation } from './components/tab-navigation';
import { SiteFilterChips } from './components/site-filter-chips';
import { FilterSection } from './components/filter-section';
import { MemberTable } from './components/member-table';
import { StatisticsView } from './components/statistics-view';
import { seedIfEmpty, SiteType, TabType, MemberData } from './components/db-page-data';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('전체');
  const [selectedSite, setSelectedSite] = useState<SiteType | '전체'>('전체');
  const [keyword, setKeyword] = useState('');
  const [_filters, setFilters] = useState<Record<string, string[]>>({});
  const [members, setMembers] = useState<MemberData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    seedIfEmpty()
      .then(setMembers)
      .catch(err => {
        console.error('Failed to load members:', err);
        // Fallback: use mock data directly
        import('./components/db-page-data').then(mod => setMembers(mod.mockMembers));
      })
      .finally(() => setLoading(false));
  }, []);

  const siteCounts = useMemo(() => {
    const counts: Record<string, number> = { '전체': members.length };
    (['AI 번역', '통독문서', '교육센터', '전시/행사', '시험사이트'] as SiteType[]).forEach(s => {
      counts[s] = members.filter(m => m.site === s).length;
    });
    return counts;
  }, [members]);

  const filteredData = useMemo(() => {
    let result: MemberData[] = [...members];

    if (selectedSite !== '전체') {
      result = result.filter(m => m.site === selectedSite);
    }

    if (keyword) {
      const kw = keyword.toLowerCase();
      result = result.filter(m =>
        m.name.toLowerCase().includes(kw) ||
        m.email.toLowerCase().includes(kw) ||
        m.managementNumber.toLowerCase().includes(kw)
      );
    }

    return result;
  }, [members, selectedSite, keyword, _filters]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f2f3f7] font-['Noto_Sans_KR',sans-serif] flex items-center justify-center">
        <span className="text-[16px] text-[#808080]">데이터 로딩중...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2f3f7] font-['Noto_Sans_KR',sans-serif]">
      <Sidebar />
      <AdminHeader />

      {/* Main content */}
      <div className="ml-[60px] mt-[56px] p-[20px] flex flex-col gap-[16px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[4px]">
          <a href="/" className="text-[14px] text-[#808080] tracking-[-0.28px] hover:text-[#222] no-underline">홈</a>
          <ChevronRight size={16} className="text-[#808080]" />
          <span className="text-[14px] text-[#222] tracking-[-0.28px]">회원관리</span>
        </div>

        {/* Title + Save */}
        <div className="flex items-end justify-between">
          <h1 className="text-[22px] font-bold text-[#222] tracking-[-0.44px] leading-[32px]">회원관리</h1>
          <button className="h-[32px] px-[16px] bg-[#0088ff] text-white text-[14px] rounded-[6px] hover:bg-[#006fcc] cursor-pointer">
            저장
          </button>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onChange={setActiveTab} />

        {/* Site filter chips */}
        <div className="flex items-center gap-[10px]">
          <span className="text-[13px] text-[#808080] tracking-[-0.26px] shrink-0">홈페이지</span>
          <div className="w-[1px] h-[16px] bg-[#ddd]" />
          <SiteFilterChips selected={selectedSite} onChange={setSelectedSite} counts={siteCounts} />
        </div>

        {/* Filter section */}
        <FilterSection
          onFilterChange={setFilters}
          onKeywordChange={setKeyword}
          keyword={keyword}
        />

        {/* Content based on tab */}
        {activeTab === '통계' ? (
          <StatisticsView data={filteredData} />
        ) : (
          <MemberTable data={filteredData} activeTab={activeTab} />
        )}
      </div>
    </div>
  );
}
