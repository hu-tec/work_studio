import { Search } from 'lucide-react';

export function AdminHeader() {
  return (
    <div className="fixed top-0 left-[56px] right-0 h-[56px] bg-white border-b border-[#e3e5ed] flex items-center justify-between px-[24px] z-10">
      <div className="flex items-center gap-[8px] bg-white border border-[#e3e5ed] rounded-[6px] h-[36px] w-[240px] px-[10px]">
        <Search size={18} className="text-[#808080] shrink-0" />
        <input
          type="text"
          placeholder="검색"
          className="flex-1 text-[14px] font-['Noto_Sans_KR',sans-serif] text-[#222] placeholder-[#999] bg-transparent border-none outline-none"
        />
      </div>
      <div className="flex items-center gap-[20px]">
        <span className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#222] tracking-[-0.28px]">관리자</span>
        <button className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#808080] tracking-[-0.28px] hover:text-[#222] cursor-pointer">
          로그아웃
        </button>
      </div>
    </div>
  );
}
