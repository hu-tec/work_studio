import { Home, User, GraduationCap, BookOpen, Settings, Monitor, Menu } from 'lucide-react';

const navItems = [
  { icon: Home, label: '홈', href: '/' },
  { icon: User, label: '회원관리', active: true },
  { icon: GraduationCap, label: '교육' },
  { icon: BookOpen, label: '도서관' },
  { icon: Settings, label: '설정' },
  { icon: Monitor, label: '모니터링' },
];

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-[60px] bg-white border-r border-[#e3e5ed] flex flex-col items-center pt-[18px] z-20">
      <button className="mb-[36px] p-[8px] text-[#444] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer">
        <Menu size={22} />
      </button>
      <div className="flex flex-col gap-[18px] items-center">
        {navItems.map((item) => {
          const inner = (
            <button
              key={item.label}
              className={`p-[10px] rounded-[6px] cursor-pointer transition-colors ${
                item.active
                  ? 'bg-[#e8f4ff] text-[#0088ff]'
                  : 'text-[#4d4d4d] hover:bg-[#f5f5f5]'
              }`}
              title={item.label}
            >
              <item.icon size={22} />
            </button>
          );
          if (item.href) {
            return <a key={item.label} href={item.href} className="no-underline">{inner}</a>;
          }
          return <span key={item.label}>{inner}</span>;
        })}
      </div>
    </div>
  );
}
