import { TabType } from './db-page-data';

const tabs: TabType[] = ['전체', '회원관리', '활동관리', '결제관리', '1:1 문의 관리', '통계'];

interface TabNavigationProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export function TabNavigation({ activeTab, onChange }: TabNavigationProps) {
  return (
    <div className="flex bg-[#e3e5ed]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              flex-1 h-[40px] flex items-center justify-center
              font-['Noto_Sans_KR',sans-serif] text-[14px] tracking-[-0.28px]
              transition-all cursor-pointer border-none
              ${isActive
                ? 'bg-white text-[#0088ff] border border-[#0088ff]'
                : 'bg-[#e3e5ed] text-[#808080] hover:bg-[#d8dae2]'
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
