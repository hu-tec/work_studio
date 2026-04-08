import svgPaths from "./svg-5xy9ljbb1b";

function DensityMedium() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="density_medium">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="density_medium">
          <g id="Vector">
            <path d="M21 3H3V5H21V3Z" fill="var(--fill-0, #444444)" />
            <path d="M21 19H3V21H21V19Z" fill="var(--fill-0, #444444)" />
            <path d="M21 11H3V13H21V11Z" fill="var(--fill-0, #444444)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[894px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="home">
        <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
            <path d={svgPaths.p11aa2f00} fill="var(--fill-0, #4D4D4D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="person">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.pb10640} fill="var(--fill-0, #4D4D4D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="school">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p5a0ba00} fill="var(--fill-0, #4D4D4D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="local_library">
        <div className="absolute inset-[5.1%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.55">
            <path d={svgPaths.p9a1c180} fill="var(--fill-0, #4D4D4D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="settings">
        <div className="absolute inset-[8.33%_9.47%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4542 20">
            <path d={svgPaths.p306d88f0} fill="var(--fill-0, #4D4D4D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="monitor">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p3b980080} fill="var(--fill-0, #4D4D4D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[988px] items-center relative shrink-0">
      <DensityMedium />
      <Frame3 />
    </div>
  );
}

function DashboardSidebar() {
  return (
    <div className="absolute bg-white bottom-[-27px] content-stretch flex flex-col items-center left-0 pb-[16px] pt-[20px] px-[16px] top-0 w-[60px]" data-name="Dashboard Sidebar">
      <div aria-hidden="true" className="absolute border-[#e3e5ed] border-r border-solid inset-0 pointer-events-none" />
      <Frame345 />
    </div>
  );
}

function IcOutlineSearch() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="ic:outline-search">
      <div className="-translate-x-1/2 absolute aspect-[17.49000358581543/17.49000358581543] bottom-[12.5%] left-1/2 top-[12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p37a48200} fill="var(--fill-0, #808080)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#222] text-[14px] tracking-[-0.28px]">관리자</p>
      <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0" data-name="btn">
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#808080] text-[14px] tracking-[-0.28px]">로그아웃</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="bg-white content-stretch flex gap-[6px] h-[32px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 w-[200px]" data-name="Text field">
        <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="relative shrink-0 size-[20px]" data-name="Component 2">
          <IcOutlineSearch />
        </div>
        <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[#999] text-[14px] tracking-[-0.28px] whitespace-pre-wrap">검색</p>
      </div>
      <Frame />
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-center left-[60px] p-[20px] top-0 w-[1860px]" data-name="Dashboard Header">
      <div aria-hidden="true" className="absolute border-[#e3e5ed] border-b border-solid inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}

function History() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="history">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#808080] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[18px]">홈</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Component 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="ic:outline-chevron-left">
            <path d={svgPaths.pa4b0200} fill="var(--fill-0, #808080)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[12px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[18px]">회원관리</p>
      </div>
    </div>
  );
}

function Frame1026() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#08f] content-stretch flex h-[24px] items-center justify-center overflow-clip px-[10px] py-px relative rounded-[6px] shrink-0" data-name="btn">
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-white tracking-[-0.24px]">저장</p>
      </div>
    </div>
  );
}

function Frame655() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#222] text-[20px] tracking-[-0.4px]">회원관리</p>
      <Frame1026 />
    </div>
  );
}

function Frame346() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <History />
      <Frame655 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-[200px]" data-name="btn">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#08f] text-[12px] tracking-[-0.24px]">전체</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-[#e3e5ed] content-stretch flex h-[32px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[200px]" data-name="btn">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#808080] text-[12px] tracking-[-0.24px]">회원관리</p>
    </div>
  );
}

function Btn2() {
  return (
    <div className="bg-[#e3e5ed] content-stretch flex h-[32px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[200px]" data-name="btn">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#808080] text-[12px] tracking-[-0.24px]">활동관리</p>
    </div>
  );
}

function Btn3() {
  return (
    <div className="bg-[#e3e5ed] content-stretch flex h-[32px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[200px]" data-name="btn">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#808080] text-[12px] tracking-[-0.24px]">결제관리</p>
    </div>
  );
}

function Btn4() {
  return (
    <div className="bg-[#e3e5ed] content-stretch flex h-[32px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[200px]" data-name="btn">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#808080] text-[12px] tracking-[-0.24px]">1:1 문의 관리</p>
    </div>
  );
}

function Btn5() {
  return (
    <div className="bg-[#e3e5ed] content-stretch flex h-[32px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[200px]" data-name="btn">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#808080] text-[12px] tracking-[-0.24px]">통계</p>
    </div>
  );
}

function Frame359() {
  return (
    <div className="bg-[#e3e5ed] content-stretch flex items-start relative shrink-0 w-full">
      <Btn />
      <Btn1 />
      <Btn2 />
      <Btn3 />
      <Btn4 />
      <Btn5 />
    </div>
  );
}

function IonIconChevronDown() {
  return (
    <div className="relative size-[16px]" data-name="IONIcon/chevron/down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="IONIcon/chevron/down">
          <path d={svgPaths.p139df200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <IonIconChevronDown />
        </div>
      </div>
    </div>
  );
}

function SelectBase() {
  return (
    <div className="relative rounded-[4px] w-full" data-name="_Select/Base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[5px] relative w-full">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
            <div className="-scale-y-100 flex-none w-full">
              <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative text-[10px] text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">선택된 검색조건 3</p>
              </div>
            </div>
          </div>
          <Frame347 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#eceef2] h-[20px] relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-end overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
          <div className="-scale-y-100 flex-none w-full">
            <SelectBase />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#999] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group />
      </div>
    </div>
  );
}

function CheckBox() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant1() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group1 />
      </div>
    </div>
  );
}

function CheckBox1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant1 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">정식회원</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant2() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group2 />
      </div>
    </div>
  );
}

function CheckBox2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant2 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">일반회원</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant3() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group3 />
      </div>
    </div>
  );
}

function CheckBox3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant3 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전문가(? 되는 구조인지 확인)</p>
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <CheckBox />
      <CheckBox1 />
      <CheckBox2 />
      <CheckBox3 />
    </div>
  );
}

function Frame1023() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0">
      <Frame336 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant4() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group4 />
      </div>
    </div>
  );
}

function CheckBox4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant4 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant5() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group5 />
      </div>
    </div>
  );
}

function CheckBox5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant5 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">AI</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant6() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group6 />
      </div>
    </div>
  );
}

function CheckBox6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant6 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">문서에디터</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant7() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group7 />
      </div>
    </div>
  );
}

function CheckBox7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant7 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">영상편집에디터</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant8() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group8 />
      </div>
    </div>
  );
}

function CheckBox8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant8 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">음악편집에디터</p>
    </div>
  );
}

function Frame1039() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0">
      <CheckBox4 />
      <CheckBox5 />
      <CheckBox6 />
      <CheckBox7 />
      <CheckBox8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant9() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group9 />
      </div>
    </div>
  );
}

function CheckBox9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant9 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant10() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group10 />
      </div>
    </div>
  );
}

function CheckBox10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant10 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">AI선택1</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant11() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group11 />
      </div>
    </div>
  );
}

function CheckBox11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant11 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">AI선택2</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant12() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group12 />
      </div>
    </div>
  );
}

function CheckBox12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant12 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">AI선택3</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant13() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group13 />
      </div>
    </div>
  );
}

function CheckBox13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant13 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">AI선택4</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant14() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group14 />
      </div>
    </div>
  );
}

function CheckBox14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant14 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">AI선택5</p>
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0">
      <CheckBox9 />
      <CheckBox10 />
      <CheckBox11 />
      <CheckBox12 />
      <CheckBox13 />
      <CheckBox14 />
    </div>
  );
}

function Frame1030() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame1023 />
      <Frame1039 />
      <Frame340 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant15() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group15 />
      </div>
    </div>
  );
}

function CheckBox15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant15 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant16() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group16 />
      </div>
    </div>
  );
}

function CheckBox16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant16 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">남</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant17() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group17 />
      </div>
    </div>
  );
}

function CheckBox17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant17 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">여</p>
    </div>
  );
}

function Frame1036() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <CheckBox15 />
      <CheckBox16 />
      <CheckBox17 />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-between px-[8px] py-[10px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#808080] text-[10px] tracking-[-0.2px]">카테고리대</p>
      <div className="relative shrink-0 size-[16px]" data-name="Component 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ic:outline-chevron-left">
            <path d={svgPaths.p1734da00} fill="var(--fill-0, #222222)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-between px-[8px] py-[10px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#808080] text-[10px] tracking-[-0.2px]">카테고리중</p>
      <div className="relative shrink-0 size-[16px]" data-name="Component 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ic:outline-chevron-left">
            <path d={svgPaths.p1734da00} fill="var(--fill-0, #222222)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-between px-[8px] py-[10px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#808080] text-[10px] tracking-[-0.2px]">카테고리소</p>
      <div className="relative shrink-0 size-[16px]" data-name="Component 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ic:outline-chevron-left">
            <path d={svgPaths.p1734da00} fill="var(--fill-0, #222222)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1035() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <TextField />
      <TextField1 />
      <TextField2 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant18() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group18 />
      </div>
    </div>
  );
}

function CheckBox18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant18 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant19() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group19 />
      </div>
    </div>
  );
}

function CheckBox19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant19 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">편집 에디터(휴텍씨)</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant20() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group20 />
      </div>
    </div>
  );
}

function CheckBox20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant20 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">영상에디터</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant21() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group21 />
      </div>
    </div>
  );
}

function CheckBox21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant21 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">문서생성 에디터</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant22() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group22 />
      </div>
    </div>
  );
}

function CheckBox22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant22 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">기타에디터</p>
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0">
      <CheckBox18 />
      <CheckBox19 />
      <CheckBox20 />
      <CheckBox21 />
      <CheckBox22 />
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative self-stretch shrink-0">
      <Frame1036 />
      <Frame1035 />
      <Frame341 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant23() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group23 />
      </div>
    </div>
  );
}

function CheckBox23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant23 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant24() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group24 />
      </div>
    </div>
  );
}

function CheckBox24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant24 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">프리미엄</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant25() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group25 />
      </div>
    </div>
  );
}

function CheckBox25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant25 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">스탠다드</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant26() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group26 />
      </div>
    </div>
  );
}

function CheckBox26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant26 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">베이직</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant27() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group27 />
      </div>
    </div>
  );
}

function CheckBox27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant27 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">없음</p>
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <CheckBox23 />
      <CheckBox24 />
      <CheckBox25 />
      <CheckBox26 />
      <CheckBox27 />
    </div>
  );
}

function Frame1024() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0">
      <Frame337 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant28() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group28 />
      </div>
    </div>
  );
}

function CheckBox28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant28 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant29() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group29 />
      </div>
    </div>
  );
}

function CheckBox29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant29 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">판매</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant30() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group30 />
      </div>
    </div>
  );
}

function CheckBox30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant30 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">자체사용</p>
    </div>
  );
}

function Frame1037() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0">
      <CheckBox28 />
      <CheckBox29 />
      <CheckBox30 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-between px-[8px] py-[10px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px]">이름</p>
      <div className="relative shrink-0 size-[16px]" data-name="Component 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ic:outline-chevron-left">
            <path d={svgPaths.p1734da00} fill="var(--fill-0, #222222)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center px-[8px] py-[10px] relative rounded-[4px] shrink-0 w-[120px]" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#808080] text-[10px] tracking-[-0.2px]">입력</p>
    </div>
  );
}

function Frame1038() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <TextField3 />
      <TextField4 />
    </div>
  );
}

function Frame1031() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame1024 />
      <Frame1037 />
      <Frame1038 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant31() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group31 />
      </div>
    </div>
  );
}

function CheckBox31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant31 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant32() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group32 />
      </div>
    </div>
  );
}

function CheckBox32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant32 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">문자</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant33() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group33 />
      </div>
    </div>
  );
}

function CheckBox33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant33 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">이메일</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant34() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group34 />
      </div>
    </div>
  );
}

function CheckBox34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant34 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">카카오톡</p>
    </div>
  );
}

function Frame1040() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <CheckBox31 />
      <CheckBox32 />
      <CheckBox33 />
      <CheckBox34 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant35() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group35 />
      </div>
    </div>
  );
}

function CheckBox35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant35 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">긴급</p>
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0">
      <CheckBox35 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-between px-[8px] py-[10px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px]">이름</p>
      <div className="relative shrink-0 size-[16px]" data-name="Component 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ic:outline-chevron-left">
            <path d={svgPaths.p1734da00} fill="var(--fill-0, #222222)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TextField7() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[10px] relative rounded-[4px] shrink-0" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="-translate-x-1/2 absolute aspect-[18/20] bottom-[12.5%] left-1/2 top-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 12">
            <path clipRule="evenodd" d={svgPaths.p1cbe6000} fill="var(--fill-0, #999999)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#999] text-[10px] tracking-[-0.2px]">YYYY.MM.DD.DOW</p>
    </div>
  );
}

function Frame343() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0">
      <TextField7 />
    </div>
  );
}

function TextField8() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[10px] relative rounded-[4px] shrink-0" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#e3e5ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Component 2">
        <div className="-translate-x-1/2 absolute aspect-[18/20] bottom-[12.5%] left-1/2 top-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 12">
            <path clipRule="evenodd" d={svgPaths.p1cbe6000} fill="var(--fill-0, #999999)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#999] text-[10px] tracking-[-0.2px]">YYYY.MM.DD.DOW</p>
    </div>
  );
}

function Frame344() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0">
      <TextField8 />
    </div>
  );
}

function TextField6() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[24px] items-center py-[10px] relative rounded-[4px] shrink-0" data-name="Text field">
      <Frame343 />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px]">-</p>
      <Frame344 />
    </div>
  );
}

function Frame1041() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
      <TextField5 />
      <TextField6 />
    </div>
  );
}

function Frame1033() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame1040 />
      <Frame342 />
      <Frame1041 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant36() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group36 />
      </div>
    </div>
  );
}

function CheckBox36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant36 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant37() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group37 />
      </div>
    </div>
  );
}

function CheckBox37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant37 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">문자</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant38() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group38 />
      </div>
    </div>
  );
}

function CheckBox38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant38 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">이메일</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant39() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group39 />
      </div>
    </div>
  );
}

function CheckBox39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant39 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">카카오톡</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant40() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group40 />
      </div>
    </div>
  );
}

function CheckBox40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant40 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">없음</p>
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <CheckBox36 />
      <CheckBox37 />
      <CheckBox38 />
      <CheckBox39 />
      <CheckBox40 />
    </div>
  );
}

function Frame1025() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0">
      <Frame338 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant41() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group41 />
      </div>
    </div>
  );
}

function CheckBox41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant41 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">전체</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant42() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group42 />
      </div>
    </div>
  );
}

function CheckBox42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant42 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">검증요청</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant43() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#aaa] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group43 />
      </div>
    </div>
  );
}

function CheckBox43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant43 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">수정요청</p>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant44() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group44 />
      </div>
    </div>
  );
}

function CheckBox44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant44 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">게시완료</p>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8 9.8">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p28ce8700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CheckBoxVariant45() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="CheckBox/Variant14">
      <div className="absolute bg-[#08f] inset-0 rounded-[4px]" />
      <div className="absolute inset-[15%]" data-name="Interface, Essential/Done, Check">
        <Group45 />
      </div>
    </div>
  );
}

function CheckBox45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="CheckBox">
      <CheckBoxVariant45 />
      <p className="capitalize font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#2c2c2e] text-[10px] tracking-[-0.2px]">취소</p>
    </div>
  );
}

function Frame1042() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0">
      <CheckBox41 />
      <CheckBox42 />
      <CheckBox43 />
      <CheckBox44 />
      <CheckBox45 />
    </div>
  );
}

function Frame1034() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame1025 />
      <Frame1042 />
    </div>
  );
}

function Frame1032() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Frame1030 />
      <Frame339 />
      <Frame1031 />
      <Frame1033 />
      <Frame1034 />
    </div>
  );
}

function Frame1022() {
  return (
    <div className="content-stretch flex items-end justify-between pt-[10px] relative shrink-0 w-[1788px]">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-solid border-t inset-0 pointer-events-none" />
      <Frame1032 />
      <div className="bg-white h-[24px] relative rounded-[6px] shrink-0" data-name="btn">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#4d4d4d] text-[12px] tracking-[-0.24px]">검색</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame1017() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[10px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame2 />
      <Frame1022 />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[normal]">전체 정보</p>
      </div>
    </div>
  );
}

function Frame547() {
  return <div className="h-[22px] shrink-0 w-[170px]" />;
}

function VscodeIconsFileTypeExcel() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="vscode-icons:file-type-excel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="vscode-icons:file-type-excel">
          <path d={svgPaths.p23950a72} fill="var(--fill-0, #185C37)" id="Vector" />
          <path d={svgPaths.p1c0ae500} fill="var(--fill-0, #21A366)" id="Vector_2" />
          <path d={svgPaths.p1199d400} fill="var(--fill-0, #107C41)" id="Vector_3" />
          <path d={svgPaths.p33510300} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p1e31ab00} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p65bc200} fill="var(--fill-0, black)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p25779880} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p91c3100} fill="url(#paint0_linear_1_10500)" id="Vector_8" />
          <path d={svgPaths.p266cb580} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p19912600} fill="var(--fill-0, #33C481)" id="Vector_10" />
          <path d={svgPaths.p20128d00} fill="var(--fill-0, #107C41)" id="Vector_11" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_10500" x1="1.68525" x2="5.187" y1="2.96775" y2="9.03225">
            <stop stopColor="#18884F" />
            <stop offset="0.5" stopColor="#117E43" />
            <stop offset="1" stopColor="#0B6631" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ButtonNormal() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button_normal">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <VscodeIconsFileTypeExcel />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#222] text-[10px]">엑셀파일생성(간편)</p>
    </div>
  );
}

function VscodeIconsFileTypeExcel1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="vscode-icons:file-type-excel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="vscode-icons:file-type-excel">
          <path d={svgPaths.p23950a72} fill="var(--fill-0, #185C37)" id="Vector" />
          <path d={svgPaths.p1c0ae500} fill="var(--fill-0, #21A366)" id="Vector_2" />
          <path d={svgPaths.p1199d400} fill="var(--fill-0, #107C41)" id="Vector_3" />
          <path d={svgPaths.p33510300} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p1e31ab00} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p65bc200} fill="var(--fill-0, black)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p25779880} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p91c3100} fill="url(#paint0_linear_1_10500)" id="Vector_8" />
          <path d={svgPaths.p266cb580} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p19912600} fill="var(--fill-0, #33C481)" id="Vector_10" />
          <path d={svgPaths.p20128d00} fill="var(--fill-0, #107C41)" id="Vector_11" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_10500" x1="1.68525" x2="5.187" y1="2.96775" y2="9.03225">
            <stop stopColor="#18884F" />
            <stop offset="0.5" stopColor="#117E43" />
            <stop offset="1" stopColor="#0B6631" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ButtonNormal1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button_normal">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <VscodeIconsFileTypeExcel1 />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#222] text-[10px]">엑셀파일생성(상담이력)</p>
    </div>
  );
}

function Frame1028() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <ButtonNormal />
      <ButtonNormal1 />
      <div className="bg-white h-[24px] relative rounded-[6px] shrink-0" data-name="btn">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#4d4d4d] text-[12px] tracking-[-0.24px]">파일올리기</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame349() {
  return (
    <div className="content-stretch flex h-[23px] items-end justify-between relative shrink-0 w-full">
      <Frame348 />
      <Frame547 />
      <Frame1028 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[30px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">번호</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[80px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[1.5]">▼ 회원 관리 번호</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[40px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="mb-0">사이트</p>
            <p>구분</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[80px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="mb-0">회원 유형</p>
            <p>회원 구독 상태</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="mb-0">이름</p>
            <p>나이 ∙ 성별</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-full items-center justify-center px-[39px] py-[9px] relative shrink-0 w-[90px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">이메일</p>
        <p>휴대폰</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[9px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">주소</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-full items-center justify-center px-[32px] py-[9px] relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">그룹여부</p>
        <p>그룹명</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-full items-center justify-center px-[25px] py-[10px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 가입일</p>
        <p>가입 채널</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="mb-0">최초</p>
            <p>접근기기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 최근 로그인</p>
        <p>체류시간</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#eceef2] h-full relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[45px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">사진</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">알림 설정</p>
        <p>마케팅동의</p>
      </div>
    </div>
  );
}

function Frame472() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
      <Component13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame398() {
  return (
    <div className="bg-[#08f] content-stretch flex h-[14px] items-center justify-center overflow-clip p-[4px] relative rounded-[2px] shrink-0">
      <div className="capitalize flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[8px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">premium</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">정식 회원</p>
      </div>
      <Frame398 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame378() {
  return <div className="bg-white h-full shrink-0 w-[70px]" />;
}

function Frame399() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame399 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame350() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group46 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">image01</p>
          </div>
          <IcoSearch />
        </div>
      </div>
    </div>
  );
}

function Frame351() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame473() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame14 />
      <Frame77 />
      <Frame4 />
      <Frame24 />
      <Frame34 />
      <Frame45 />
      <Frame78 />
      <Frame378 />
      <Frame65 />
      <Frame76 />
      <Frame350 />
      <Frame107 />
      <Frame351 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame379() {
  return <div className="bg-[#f5f5f5] h-full shrink-0 w-[70px]" />;
}

function Frame400() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame400 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame352() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame353() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame474() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame79 />
      <Frame5 />
      <Frame25 />
      <Frame35 />
      <Frame46 />
      <Frame80 />
      <Frame379 />
      <Frame66 />
      <Frame81 />
      <Frame352 />
      <Frame108 />
      <Frame353 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">회원 탈퇴</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame380() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] shrink-0 w-[70px]" />;
}

function Frame401() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame401 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame354() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame355() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame475() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame16 />
      <Frame82 />
      <Frame6 />
      <Frame26 />
      <Frame36 />
      <Frame47 />
      <Frame83 />
      <Frame380 />
      <Frame67 />
      <Frame84 />
      <Frame354 />
      <Frame109 />
      <Frame355 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame37() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] shrink-0 w-[60px]" />;
}

function Frame48() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame86() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] shrink-0 w-[50px]" />;
}

function Frame381() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">그룹</p>
        <p>삼성</p>
      </div>
    </div>
  );
}

function Frame402() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame402 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame356() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group47 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">image01</p>
          </div>
          <IcoSearch1 />
        </div>
      </div>
    </div>
  );
}

function Frame357() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame476() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame17 />
      <Frame85 />
      <Frame7 />
      <Frame27 />
      <Frame37 />
      <Frame48 />
      <Frame86 />
      <Frame381 />
      <Frame68 />
      <Frame87 />
      <Frame356 />
      <Frame110 />
      <Frame357 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame403() {
  return (
    <div className="bg-[#08f] content-stretch flex h-[14px] items-center justify-center overflow-clip p-[4px] relative rounded-[2px] shrink-0">
      <div className="capitalize flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[8px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">premium</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">정식 회원</p>
      </div>
      <Frame403 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame382() {
  return <div className="bg-white h-full shrink-0 w-[70px]" />;
}

function Frame404() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame404 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame358() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group48 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">image01</p>
          </div>
          <IcoSearch2 />
        </div>
      </div>
    </div>
  );
}

function Frame360() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame478() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame18 />
      <Frame88 />
      <Frame8 />
      <Frame28 />
      <Frame38 />
      <Frame49 />
      <Frame89 />
      <Frame382 />
      <Frame69 />
      <Frame90 />
      <Frame358 />
      <Frame111 />
      <Frame360 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame383() {
  return <div className="bg-[#f5f5f5] h-full shrink-0 w-[70px]" />;
}

function Frame405() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #FFC31F)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">카카오</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame405 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame361() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame362() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame479() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame19 />
      <Frame91 />
      <Frame9 />
      <Frame29 />
      <Frame39 />
      <Frame50 />
      <Frame92 />
      <Frame383 />
      <Frame70 />
      <Frame93 />
      <Frame361 />
      <Frame112 />
      <Frame362 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">회원 탈퇴</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame384() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] shrink-0 w-[70px]" />;
}

function Frame406() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #DC3D3D)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">구글</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame406 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame363() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame364() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame480() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame20 />
      <Frame94 />
      <Frame10 />
      <Frame30 />
      <Frame40 />
      <Frame51 />
      <Frame95 />
      <Frame384 />
      <Frame71 />
      <Frame96 />
      <Frame363 />
      <Frame113 />
      <Frame364 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame41() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] shrink-0 w-[60px]" />;
}

function Frame52() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame98() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] shrink-0 w-[50px]" />;
}

function Frame385() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">그룹</p>
        <p>삼성</p>
      </div>
    </div>
  );
}

function Frame407() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame407 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame365() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch3() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group49 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">image01</p>
          </div>
          <IcoSearch3 />
        </div>
      </div>
    </div>
  );
}

function Frame366() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame481() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame21 />
      <Frame97 />
      <Frame11 />
      <Frame31 />
      <Frame41 />
      <Frame52 />
      <Frame98 />
      <Frame385 />
      <Frame72 />
      <Frame99 />
      <Frame365 />
      <Frame114 />
      <Frame366 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame408() {
  return (
    <div className="bg-[#08f] content-stretch flex h-[14px] items-center justify-center overflow-clip p-[4px] relative rounded-[2px] shrink-0">
      <div className="capitalize flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[8px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">premium</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">정식 회원</p>
      </div>
      <Frame408 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame386() {
  return <div className="bg-white h-full shrink-0 w-[70px]" />;
}

function Frame409() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame409 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame367() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch4() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group50 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">image01</p>
          </div>
          <IcoSearch4 />
        </div>
      </div>
    </div>
  );
}

function Frame368() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame482() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame100 />
      <Frame12 />
      <Frame32 />
      <Frame42 />
      <Frame53 />
      <Frame101 />
      <Frame386 />
      <Frame73 />
      <Frame102 />
      <Frame367 />
      <Frame115 />
      <Frame368 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame387() {
  return <div className="bg-[#f5f5f5] h-full shrink-0 w-[70px]" />;
}

function Frame410() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame410 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame369() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame370() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame483() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame103 />
      <Frame13 />
      <Frame33 />
      <Frame43 />
      <Frame54 />
      <Frame104 />
      <Frame387 />
      <Frame74 />
      <Frame105 />
      <Frame369 />
      <Frame116 />
      <Frame370 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">11</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">회원 탈퇴</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame388() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] shrink-0 w-[70px]" />;
}

function Frame411() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame411 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame372() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame484() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame44 />
      <Frame106 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
      <Frame117 />
      <Frame388 />
      <Frame75 />
      <Frame118 />
      <Frame371 />
      <Frame119 />
      <Frame372 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame62() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] shrink-0 w-[60px]" />;
}

function Frame63() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame121() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] shrink-0 w-[50px]" />;
}

function Frame389() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">그룹</p>
        <p>삼성</p>
      </div>
    </div>
  );
}

function Frame412() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame412 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame374() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame485() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame59 />
      <Frame120 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame121 />
      <Frame389 />
      <Frame122 />
      <Frame123 />
      <Frame373 />
      <Frame124 />
      <Frame374 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame413() {
  return (
    <div className="bg-[#08f] content-stretch flex h-[14px] items-center justify-center overflow-clip p-[4px] relative rounded-[2px] shrink-0">
      <div className="capitalize flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[8px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">premium</p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">정식 회원</p>
      </div>
      <Frame413 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame390() {
  return <div className="bg-white h-full shrink-0 w-[70px]" />;
}

function Frame414() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame414 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame375() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame376() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame486() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame64 />
      <Frame125 />
      <Frame126 />
      <Frame127 />
      <Frame128 />
      <Frame129 />
      <Frame130 />
      <Frame390 />
      <Frame131 />
      <Frame132 />
      <Frame375 />
      <Frame133 />
      <Frame376 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame391() {
  return <div className="bg-[#f5f5f5] h-full shrink-0 w-[70px]" />;
}

function Frame415() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #FFC31F)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">카카오</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame415 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame377() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame392() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame487() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame134 />
      <Frame135 />
      <Frame136 />
      <Frame137 />
      <Frame138 />
      <Frame139 />
      <Frame140 />
      <Frame391 />
      <Frame141 />
      <Frame142 />
      <Frame377 />
      <Frame143 />
      <Frame392 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">회원 탈퇴</p>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame393() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] shrink-0 w-[70px]" />;
}

function Frame416() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #DC3D3D)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">구글</p>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame416 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame394() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame395() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame488() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame144 />
      <Frame145 />
      <Frame146 />
      <Frame147 />
      <Frame148 />
      <Frame149 />
      <Frame150 />
      <Frame393 />
      <Frame151 />
      <Frame152 />
      <Frame394 />
      <Frame153 />
      <Frame395 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame158() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] shrink-0 w-[60px]" />;
}

function Frame159() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame160() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] shrink-0 w-[50px]" />;
}

function Frame396() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">그룹</p>
        <p>삼성</p>
      </div>
    </div>
  );
}

function Frame417() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame417 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame397() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame163() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame418() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame489() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame154 />
      <Frame155 />
      <Frame156 />
      <Frame157 />
      <Frame158 />
      <Frame159 />
      <Frame160 />
      <Frame396 />
      <Frame161 />
      <Frame162 />
      <Frame397 />
      <Frame163 />
      <Frame418 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">17</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame166() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame419() {
  return (
    <div className="bg-[#08f] content-stretch flex h-[14px] items-center justify-center overflow-clip p-[4px] relative rounded-[2px] shrink-0">
      <div className="capitalize flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[8px] text-center text-white tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">premium</p>
      </div>
    </div>
  );
}

function Frame167() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">정식 회원</p>
      </div>
      <Frame419 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame170() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame420() {
  return <div className="bg-white h-full shrink-0 w-[70px]" />;
}

function Frame421() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #43EB29)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">네이버</p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame421 />
    </div>
  );
}

function Frame172() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame422() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame173() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame423() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame490() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame164 />
      <Frame165 />
      <Frame166 />
      <Frame167 />
      <Frame168 />
      <Frame169 />
      <Frame170 />
      <Frame420 />
      <Frame171 />
      <Frame172 />
      <Frame422 />
      <Frame173 />
      <Frame423 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame176() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">일반 회원</p>
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[1.5]">abce@gmail.com</p>
      </div>
    </div>
  );
}

function Frame180() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame424() {
  return <div className="bg-[#f5f5f5] h-full shrink-0 w-[70px]" />;
}

function Frame425() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #FFC31F)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">카카오</p>
      </div>
    </div>
  );
}

function Frame181() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame425 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame426() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame183() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame427() {
  return <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame491() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame174 />
      <Frame175 />
      <Frame176 />
      <Frame177 />
      <Frame178 />
      <Frame179 />
      <Frame180 />
      <Frame424 />
      <Frame181 />
      <Frame182 />
      <Frame426 />
      <Frame183 />
      <Frame427 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">UI240110002</p>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] relative shrink-0 w-[40px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">통독</p>
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[38px] py-[18px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">회원 탈퇴</p>
      </div>
    </div>
  );
}

function Frame188() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[29px] py-[4px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">홍길동(남)</p>
        <p>34세</p>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[30px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">abce@gmail.com</p>
        <p>+82 1012345678</p>
      </div>
    </div>
  );
}

function Frame190() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">서울</p>
        <p>강남구</p>
      </div>
    </div>
  );
}

function Frame428() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[19px] py-[11px] shrink-0 w-[70px]" />;
}

function Frame429() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #DC3D3D)" id="Ellipse 1185" r="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">구글</p>
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.30</p>
      </div>
      <Frame429 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame430() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>15m 30s</p>
      </div>
    </div>
  );
}

function Frame193() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[70px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame431() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">문자...</p>
        <p>이메일...</p>
      </div>
    </div>
  );
}

function Frame492() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full">
      <Frame184 />
      <Frame185 />
      <Frame186 />
      <Frame187 />
      <Frame188 />
      <Frame189 />
      <Frame190 />
      <Frame428 />
      <Frame191 />
      <Frame192 />
      <Frame430 />
      <Frame193 />
      <Frame431 />
    </div>
  );
}

function Frame477() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[810px]">
      <div aria-hidden="true" className="absolute border-[#999] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
      <Frame472 />
      <Frame473 />
      <Frame474 />
      <Frame475 />
      <Frame476 />
      <Frame478 />
      <Frame479 />
      <Frame480 />
      <Frame481 />
      <Frame482 />
      <Frame483 />
      <Frame484 />
      <Frame485 />
      <Frame486 />
      <Frame487 />
      <Frame488 />
      <Frame489 />
      <Frame490 />
      <Frame491 />
      <Frame492 />
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 활동 관리</p>
        <p>번호</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">{`서비스 `}</p>
        <p>유형</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">지역</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 시험일</p>
        <p>시험시간</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">접수 구분</p>
        <p>차수</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">시험 종목</p>
        <p>시험 등급</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[120px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">검정과목</p>
        <p>분야/영역</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[80px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">시험명</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">출발어</p>
        <p>도착어</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="bg-[#fff9e8] h-full relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[45px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[100px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 접수기간</p>
        <p>접수 상태</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">시험 상태</p>
        <p>응시 상태</p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[80px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 성적 발표일</p>
        <p>발표 시간</p>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">시험 결과</p>
        <p>▼ 채점 점수</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="bg-[#fff9e8] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[80px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">피드백 상태</p>
        <p>피드백 완료일</p>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-[#fff9e8] h-full relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[56px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">자격증</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame494() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
      <Component20 />
      <Component21 />
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
      <Component26 />
      <Component27 />
      <Component28 />
      <Component29 />
    </div>
  );
}

function Frame432() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame433() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame434() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame435() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame436() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame437() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame438() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame439() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame440() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch5() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group51 />
    </div>
  );
}

function Frame441() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch5 />
        </div>
      </div>
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame442() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame194 />
    </div>
  );
}

function Frame443() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame444() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame445() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame446() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame447() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame495() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame432 />
      <Frame433 />
      <Frame434 />
      <Frame435 />
      <Frame436 />
      <Frame437 />
      <Frame438 />
      <Frame439 />
      <Frame440 />
      <Frame441 />
      <Frame442 />
      <Frame443 />
      <Frame444 />
      <Frame445 />
      <Frame446 />
      <Frame447 />
    </div>
  );
}

function Frame448() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame449() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame450() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame451() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame452() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame453() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame454() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame455() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame456() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch6() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group52 />
    </div>
  );
}

function Frame457() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch6 />
        </div>
      </div>
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame458() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame195 />
    </div>
  );
}

function Frame459() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame460() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">합격</p>
      </div>
    </div>
  );
}

function Frame461() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame196 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">80</p>
      </div>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 신청</p>
      </div>
    </div>
  );
}

function Frame462() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame197 />
    </div>
  );
}

function Frame463() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame496() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame448 />
      <Frame449 />
      <Frame450 />
      <Frame451 />
      <Frame452 />
      <Frame453 />
      <Frame454 />
      <Frame455 />
      <Frame456 />
      <Frame457 />
      <Frame458 />
      <Frame459 />
      <Frame460 />
      <Frame461 />
      <Frame462 />
      <Frame463 />
    </div>
  );
}

function Frame464() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame465() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame466() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame467() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame468() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame469() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame470() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame471() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame498() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch7() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group53 />
    </div>
  );
}

function Frame499() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch7 />
        </div>
      </div>
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame500() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame198 />
    </div>
  );
}

function Frame501() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame502() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame503() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame505() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame506() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame497() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame464 />
      <Frame465 />
      <Frame466 />
      <Frame467 />
      <Frame468 />
      <Frame469 />
      <Frame470 />
      <Frame471 />
      <Frame498 />
      <Frame499 />
      <Frame500 />
      <Frame501 />
      <Frame502 />
      <Frame503 />
      <Frame505 />
      <Frame506 />
    </div>
  );
}

function Frame508() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame509() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame510() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame511() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame512() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame513() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame514() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame515() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame516() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch8() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group54 />
    </div>
  );
}

function Frame517() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch8 />
        </div>
      </div>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame518() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame199 />
    </div>
  );
}

function Frame519() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame520() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dc3d3d] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">불합격</p>
      </div>
    </div>
  );
}

function Frame521() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame200 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">60</p>
      </div>
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 중</p>
      </div>
    </div>
  );
}

function Frame522() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame201 />
    </div>
  );
}

function Frame523() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame507() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame508 />
      <Frame509 />
      <Frame510 />
      <Frame511 />
      <Frame512 />
      <Frame513 />
      <Frame514 />
      <Frame515 />
      <Frame516 />
      <Frame517 />
      <Frame518 />
      <Frame519 />
      <Frame520 />
      <Frame521 />
      <Frame522 />
      <Frame523 />
    </div>
  );
}

function Frame525() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame526() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame527() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame528() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame529() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame530() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame531() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame532() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame533() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch9() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group55 />
    </div>
  );
}

function Frame534() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch9 />
        </div>
      </div>
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame535() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame202 />
    </div>
  );
}

function Frame536() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame537() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame538() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame539() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame540() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame524() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame525 />
      <Frame526 />
      <Frame527 />
      <Frame528 />
      <Frame529 />
      <Frame530 />
      <Frame531 />
      <Frame532 />
      <Frame533 />
      <Frame534 />
      <Frame535 />
      <Frame536 />
      <Frame537 />
      <Frame538 />
      <Frame539 />
      <Frame540 />
    </div>
  );
}

function Frame542() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame543() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame544() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame545() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame546() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame548() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame549() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame550() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame551() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch10() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group56 />
    </div>
  );
}

function Frame552() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch10 />
        </div>
      </div>
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame553() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame203 />
    </div>
  );
}

function Frame554() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame555() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">합격</p>
      </div>
    </div>
  );
}

function Frame556() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame204 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">80</p>
      </div>
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 신청</p>
      </div>
    </div>
  );
}

function Frame557() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame205 />
    </div>
  );
}

function Frame558() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame541() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame542 />
      <Frame543 />
      <Frame544 />
      <Frame545 />
      <Frame546 />
      <Frame548 />
      <Frame549 />
      <Frame550 />
      <Frame551 />
      <Frame552 />
      <Frame553 />
      <Frame554 />
      <Frame555 />
      <Frame556 />
      <Frame557 />
      <Frame558 />
    </div>
  );
}

function Frame560() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame561() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame562() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame563() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame564() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame565() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame566() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame567() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame568() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch11() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group57 />
    </div>
  );
}

function Frame569() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch11 />
        </div>
      </div>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame570() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame206 />
    </div>
  );
}

function Frame571() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame572() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame573() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame574() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame575() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame559() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame560 />
      <Frame561 />
      <Frame562 />
      <Frame563 />
      <Frame564 />
      <Frame565 />
      <Frame566 />
      <Frame567 />
      <Frame568 />
      <Frame569 />
      <Frame570 />
      <Frame571 />
      <Frame572 />
      <Frame573 />
      <Frame574 />
      <Frame575 />
    </div>
  );
}

function Frame577() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame578() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame579() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame580() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame581() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame582() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame583() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame584() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame585() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch12() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group58 />
    </div>
  );
}

function Frame586() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch12 />
        </div>
      </div>
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame587() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame207 />
    </div>
  );
}

function Frame588() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame589() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dc3d3d] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">불합격</p>
      </div>
    </div>
  );
}

function Frame590() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame208 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">60</p>
      </div>
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 완료</p>
      </div>
    </div>
  );
}

function Frame591() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame209 />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">25.10.10</p>
      </div>
    </div>
  );
}

function Frame592() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame576() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame577 />
      <Frame578 />
      <Frame579 />
      <Frame580 />
      <Frame581 />
      <Frame582 />
      <Frame583 />
      <Frame584 />
      <Frame585 />
      <Frame586 />
      <Frame587 />
      <Frame588 />
      <Frame589 />
      <Frame590 />
      <Frame591 />
      <Frame592 />
    </div>
  );
}

function Frame594() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame595() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame596() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame597() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame598() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame599() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame600() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame601() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame602() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch13() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group59 />
    </div>
  );
}

function Frame603() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch13 />
        </div>
      </div>
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame604() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame210 />
    </div>
  );
}

function Frame605() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame606() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame607() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame608() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame609() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame593() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame594 />
      <Frame595 />
      <Frame596 />
      <Frame597 />
      <Frame598 />
      <Frame599 />
      <Frame600 />
      <Frame601 />
      <Frame602 />
      <Frame603 />
      <Frame604 />
      <Frame605 />
      <Frame606 />
      <Frame607 />
      <Frame608 />
      <Frame609 />
    </div>
  );
}

function Frame611() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame612() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame613() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame614() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame615() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame616() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame617() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame618() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame619() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch14() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group60 />
    </div>
  );
}

function Frame620() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch14 />
        </div>
      </div>
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame621() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame211 />
    </div>
  );
}

function Frame622() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame623() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">합격</p>
      </div>
    </div>
  );
}

function Frame624() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame212 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">80</p>
      </div>
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 신청</p>
      </div>
    </div>
  );
}

function Frame625() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame213 />
    </div>
  );
}

function Frame626() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame610() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame611 />
      <Frame612 />
      <Frame613 />
      <Frame614 />
      <Frame615 />
      <Frame616 />
      <Frame617 />
      <Frame618 />
      <Frame619 />
      <Frame620 />
      <Frame621 />
      <Frame622 />
      <Frame623 />
      <Frame624 />
      <Frame625 />
      <Frame626 />
    </div>
  );
}

function Frame628() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame629() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame630() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame631() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame632() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame633() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame634() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame635() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame636() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch15() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group61 />
    </div>
  );
}

function Frame637() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch15 />
        </div>
      </div>
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame638() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame214 />
    </div>
  );
}

function Frame639() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame640() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame641() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame642() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame643() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame627() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame628 />
      <Frame629 />
      <Frame630 />
      <Frame631 />
      <Frame632 />
      <Frame633 />
      <Frame634 />
      <Frame635 />
      <Frame636 />
      <Frame637 />
      <Frame638 />
      <Frame639 />
      <Frame640 />
      <Frame641 />
      <Frame642 />
      <Frame643 />
    </div>
  );
}

function Frame645() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame646() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame647() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame648() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame649() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame650() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame651() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame652() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame653() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch16() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group62 />
    </div>
  );
}

function Frame654() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch16 />
        </div>
      </div>
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame656() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame215 />
    </div>
  );
}

function Frame657() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame658() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dc3d3d] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">불합격</p>
      </div>
    </div>
  );
}

function Frame659() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame216 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">60</p>
      </div>
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 중</p>
      </div>
    </div>
  );
}

function Frame660() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame217 />
    </div>
  );
}

function Frame661() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame644() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame645 />
      <Frame646 />
      <Frame647 />
      <Frame648 />
      <Frame649 />
      <Frame650 />
      <Frame651 />
      <Frame652 />
      <Frame653 />
      <Frame654 />
      <Frame656 />
      <Frame657 />
      <Frame658 />
      <Frame659 />
      <Frame660 />
      <Frame661 />
    </div>
  );
}

function Frame663() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame664() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame665() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame666() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame667() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame668() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame669() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame670() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame671() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch17() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group63 />
    </div>
  );
}

function Frame672() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch17 />
        </div>
      </div>
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame673() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame218 />
    </div>
  );
}

function Frame674() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame675() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame676() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame677() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame678() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame662() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame663 />
      <Frame664 />
      <Frame665 />
      <Frame666 />
      <Frame667 />
      <Frame668 />
      <Frame669 />
      <Frame670 />
      <Frame671 />
      <Frame672 />
      <Frame673 />
      <Frame674 />
      <Frame675 />
      <Frame676 />
      <Frame677 />
      <Frame678 />
    </div>
  );
}

function Frame680() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame681() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame682() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame683() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame684() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame685() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame686() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame687() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame688() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch18() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group64 />
    </div>
  );
}

function Frame689() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch18 />
        </div>
      </div>
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame690() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame219 />
    </div>
  );
}

function Frame691() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame693() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">합격</p>
      </div>
    </div>
  );
}

function Frame694() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame220 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">80</p>
      </div>
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 신청</p>
      </div>
    </div>
  );
}

function Frame695() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame221 />
    </div>
  );
}

function Frame696() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame679() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame680 />
      <Frame681 />
      <Frame682 />
      <Frame683 />
      <Frame684 />
      <Frame685 />
      <Frame686 />
      <Frame687 />
      <Frame688 />
      <Frame689 />
      <Frame690 />
      <Frame691 />
      <Frame693 />
      <Frame694 />
      <Frame695 />
      <Frame696 />
    </div>
  );
}

function Frame698() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame699() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame700() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame701() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame702() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame703() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame704() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame705() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame706() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch19() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group65 />
    </div>
  );
}

function Frame707() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch19 />
        </div>
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame708() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame222 />
    </div>
  );
}

function Frame709() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame710() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame711() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame712() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame713() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame697() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame698 />
      <Frame699 />
      <Frame700 />
      <Frame701 />
      <Frame702 />
      <Frame703 />
      <Frame704 />
      <Frame705 />
      <Frame706 />
      <Frame707 />
      <Frame708 />
      <Frame709 />
      <Frame710 />
      <Frame711 />
      <Frame712 />
      <Frame713 />
    </div>
  );
}

function Frame715() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame716() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame717() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame718() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame719() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame720() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame721() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame722() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame723() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch20() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group66 />
    </div>
  );
}

function Frame724() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch20 />
        </div>
      </div>
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame725() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame223 />
    </div>
  );
}

function Frame726() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame727() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dc3d3d] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">불합격</p>
      </div>
    </div>
  );
}

function Frame728() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame224 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">60</p>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 중</p>
      </div>
    </div>
  );
}

function Frame729() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame225 />
    </div>
  );
}

function Frame730() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame714() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame715 />
      <Frame716 />
      <Frame717 />
      <Frame718 />
      <Frame719 />
      <Frame720 />
      <Frame721 />
      <Frame722 />
      <Frame723 />
      <Frame724 />
      <Frame725 />
      <Frame726 />
      <Frame727 />
      <Frame728 />
      <Frame729 />
      <Frame730 />
    </div>
  );
}

function Frame732() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame733() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame734() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame735() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame736() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame737() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame738() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame739() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame740() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch21() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group67 />
    </div>
  );
}

function Frame741() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch21 />
        </div>
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame742() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame226 />
    </div>
  );
}

function Frame743() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame744() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame745() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame746() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame747() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame731() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame732 />
      <Frame733 />
      <Frame734 />
      <Frame735 />
      <Frame736 />
      <Frame737 />
      <Frame738 />
      <Frame739 />
      <Frame740 />
      <Frame741 />
      <Frame742 />
      <Frame743 />
      <Frame744 />
      <Frame745 />
      <Frame746 />
      <Frame747 />
    </div>
  );
}

function Frame749() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame750() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame751() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame752() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame753() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame754() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame755() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame756() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame757() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch22() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group68 />
    </div>
  );
}

function Frame758() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch22 />
        </div>
      </div>
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수완료</p>
      </div>
    </div>
  );
}

function Frame759() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame227 />
    </div>
  );
}

function Frame760() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame761() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">합격</p>
      </div>
    </div>
  );
}

function Frame762() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[2px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame228 />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">80</p>
      </div>
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">피드백 신청</p>
      </div>
    </div>
  );
}

function Frame763() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <Frame229 />
    </div>
  );
}

function Frame764() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame748() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame749 />
      <Frame750 />
      <Frame751 />
      <Frame752 />
      <Frame753 />
      <Frame754 />
      <Frame755 />
      <Frame756 />
      <Frame757 />
      <Frame758 />
      <Frame759 />
      <Frame760 />
      <Frame761 />
      <Frame762 />
      <Frame763 />
      <Frame764 />
    </div>
  );
}

function Frame766() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">XXXXX</p>
        <p>XXXXX</p>
      </div>
    </div>
  );
}

function Frame767() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">시험</p>
      </div>
    </div>
  );
}

function Frame768() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">대한민국</p>
        <p>서울</p>
      </div>
    </div>
  );
}

function Frame769() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">
          24.01.10
          <br aria-hidden="true" />
          10:00-16:00
        </p>
      </div>
    </div>
  );
}

function Frame770() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">정시</p>
        <p>25년 1차</p>
      </div>
    </div>
  );
}

function Frame771() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{` 번역 전문가`}</p>
        <p className="text-[#08f]">전문1급</p>
      </div>
    </div>
  );
}

function Frame772() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[120px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">카테고리(대) / 카테고리(중)</p>
        <p>카테고리(소)</p>
      </div>
    </div>
  );
}

function Frame773() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">시험명 표시 영역</p>
        <p>(세부명)</p>
      </div>
    </div>
  );
}

function Frame774() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[0px] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">한국어</p>
        <p className="text-[#08f]">English(US)</p>
      </div>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[10.53%_10.5%_10.52%_10.53%]">
      <div className="absolute inset-[-12.18%_-12.17%_-12.18%_-12.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7659 12.763">
          <g id="Group 1985">
            <path d={svgPaths.p282f9c00} id="í¨ì¤ 1006" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d={svgPaths.p3b5bc680} id="í¨ì¤ 1007" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoSearch23() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="ico_search">
      <Group69 />
    </div>
  );
}

function Frame775() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[50px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
            <p className="leading-[normal]">시험 유형</p>
          </div>
          <IcoSearch23 />
        </div>
      </div>
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#808080] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">접수전</p>
      </div>
    </div>
  );
}

function Frame776() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.01.10 - 24.01.30</p>
      </div>
      <Frame230 />
    </div>
  );
}

function Frame777() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#dc3d3d] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#222]">시험 시작</p>
        <p>미응시</p>
      </div>
    </div>
  );
}

function Frame778() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">24.10.10 월</p>
        <p>10:00</p>
      </div>
    </div>
  );
}

function Frame779() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame780() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[80px]" />;
}

function Frame781() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[50px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame765() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame766 />
      <Frame767 />
      <Frame768 />
      <Frame769 />
      <Frame770 />
      <Frame771 />
      <Frame772 />
      <Frame773 />
      <Frame774 />
      <Frame775 />
      <Frame776 />
      <Frame777 />
      <Frame778 />
      <Frame779 />
      <Frame780 />
      <Frame781 />
    </div>
  );
}

function Frame493() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#999] border-l border-r border-solid inset-[0_-0.5px] pointer-events-none" />
      <Frame494 />
      <Frame495 />
      <Frame496 />
      <Frame497 />
      <Frame507 />
      <Frame524 />
      <Frame541 />
      <Frame559 />
      <Frame576 />
      <Frame593 />
      <Frame610 />
      <Frame627 />
      <Frame644 />
      <Frame662 />
      <Frame679 />
      <Frame697 />
      <Frame714 />
      <Frame731 />
      <Frame748 />
      <Frame765 />
    </div>
  );
}

function Component30() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">▼ 결제일</p>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">결제 내용</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[100px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">이용 금액</p>
        <p>헤택</p>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">결제 금액</p>
        <p>결제 방법</p>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">보유 포인트</p>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">환불 상태</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="bg-[#ffecec] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[90px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">환불정보</p>
      </div>
    </div>
  );
}

function Frame783() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
      <Component30 />
      <Component31 />
      <Component32 />
      <Component33 />
      <Component34 />
      <Component35 />
      <Component36 />
    </div>
  );
}

function Frame785() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame786() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame787() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame788() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame789() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame231() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame790() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[90px]" />;
}

function Frame784() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame785 />
      <Frame786 />
      <Frame787 />
      <Frame788 />
      <Frame789 />
      <Frame231 />
      <Frame790 />
    </div>
  );
}

function Frame792() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame793() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame794() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame795() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame796() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불요청</p>
      </div>
    </div>
  );
}

function Frame232() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame233 />
    </div>
  );
}

function Frame797() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame791() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame792 />
      <Frame793 />
      <Frame794 />
      <Frame795 />
      <Frame796 />
      <Frame232 />
      <Frame797 />
    </div>
  );
}

function Frame799() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame800() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame801() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame802() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame803() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불완료</p>
      </div>
    </div>
  );
}

function Frame234() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame235 />
    </div>
  );
}

function Frame804() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame798() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame799 />
      <Frame800 />
      <Frame801 />
      <Frame802 />
      <Frame803 />
      <Frame234 />
      <Frame804 />
    </div>
  );
}

function Frame806() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame807() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame808() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame809() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame810() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불중</p>
      </div>
    </div>
  );
}

function Frame811() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame236 />
    </div>
  );
}

function Frame812() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame805() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame806 />
      <Frame807 />
      <Frame808 />
      <Frame809 />
      <Frame810 />
      <Frame811 />
      <Frame812 />
    </div>
  );
}

function Frame814() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame815() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame816() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame817() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame818() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame237() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame819() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[90px]" />;
}

function Frame813() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame814 />
      <Frame815 />
      <Frame816 />
      <Frame817 />
      <Frame818 />
      <Frame237 />
      <Frame819 />
    </div>
  );
}

function Frame821() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame822() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame823() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame824() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame825() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불요청</p>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame239 />
    </div>
  );
}

function Frame826() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame820() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame821 />
      <Frame822 />
      <Frame823 />
      <Frame824 />
      <Frame825 />
      <Frame238 />
      <Frame826 />
    </div>
  );
}

function Frame828() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame829() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame830() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame831() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame832() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불완료</p>
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame241 />
    </div>
  );
}

function Frame833() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame827() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame828 />
      <Frame829 />
      <Frame830 />
      <Frame831 />
      <Frame832 />
      <Frame240 />
      <Frame833 />
    </div>
  );
}

function Frame835() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame836() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame837() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame838() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame839() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불중</p>
      </div>
    </div>
  );
}

function Frame840() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame242 />
    </div>
  );
}

function Frame841() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame834() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame835 />
      <Frame836 />
      <Frame837 />
      <Frame838 />
      <Frame839 />
      <Frame840 />
      <Frame841 />
    </div>
  );
}

function Frame843() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame844() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame845() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame846() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame847() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame243() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame848() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[90px]" />;
}

function Frame842() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame843 />
      <Frame844 />
      <Frame845 />
      <Frame846 />
      <Frame847 />
      <Frame243 />
      <Frame848 />
    </div>
  );
}

function Frame850() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame851() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame852() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame853() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame854() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불요청</p>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame245 />
    </div>
  );
}

function Frame855() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame849() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame850 />
      <Frame851 />
      <Frame852 />
      <Frame853 />
      <Frame854 />
      <Frame244 />
      <Frame855 />
    </div>
  );
}

function Frame857() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame858() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame859() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame860() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame861() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불완료</p>
      </div>
    </div>
  );
}

function Frame246() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame247 />
    </div>
  );
}

function Frame862() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame856() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame857 />
      <Frame858 />
      <Frame859 />
      <Frame860 />
      <Frame861 />
      <Frame246 />
      <Frame862 />
    </div>
  );
}

function Frame864() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame865() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame866() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame867() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame868() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불중</p>
      </div>
    </div>
  );
}

function Frame869() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame248 />
    </div>
  );
}

function Frame870() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame863() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame864 />
      <Frame865 />
      <Frame866 />
      <Frame867 />
      <Frame868 />
      <Frame869 />
      <Frame870 />
    </div>
  );
}

function Frame872() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame873() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame874() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame875() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame876() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame249() {
  return <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[60px]" />;
}

function Frame877() {
  return <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] shrink-0 w-[90px]" />;
}

function Frame871() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame872 />
      <Frame873 />
      <Frame874 />
      <Frame875 />
      <Frame876 />
      <Frame249 />
      <Frame877 />
    </div>
  );
}

function Frame879() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame880() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame881() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame882() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame883() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불요청</p>
      </div>
    </div>
  );
}

function Frame250() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame251 />
    </div>
  );
}

function Frame884() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame878() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame879 />
      <Frame880 />
      <Frame881 />
      <Frame882 />
      <Frame883 />
      <Frame250 />
      <Frame884 />
    </div>
  );
}

function Frame886() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame887() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame888() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame889() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame890() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불완료</p>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame253 />
    </div>
  );
}

function Frame891() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame885() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame886 />
      <Frame887 />
      <Frame888 />
      <Frame889 />
      <Frame890 />
      <Frame252 />
      <Frame891 />
    </div>
  );
}

function Frame893() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame894() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame895() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame896() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame897() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불중</p>
      </div>
    </div>
  );
}

function Frame898() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame254 />
    </div>
  );
}

function Frame899() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame892() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame893 />
      <Frame894 />
      <Frame895 />
      <Frame896 />
      <Frame897 />
      <Frame898 />
      <Frame899 />
    </div>
  );
}

function Frame901() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame902() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame903() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame904() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame905() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불완료</p>
      </div>
    </div>
  );
}

function Frame255() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame256 />
    </div>
  );
}

function Frame906() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame900() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame901 />
      <Frame902 />
      <Frame903 />
      <Frame904 />
      <Frame905 />
      <Frame255 />
      <Frame906 />
    </div>
  );
}

function Frame908() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame909() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame910() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame911() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame912() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불중</p>
      </div>
    </div>
  );
}

function Frame913() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame257 />
    </div>
  );
}

function Frame914() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame907() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame908 />
      <Frame909 />
      <Frame910 />
      <Frame911 />
      <Frame912 />
      <Frame913 />
      <Frame914 />
    </div>
  );
}

function Frame916() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">24.10.10</p>
      </div>
    </div>
  );
}

function Frame917() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">포인트 충전</p>
      </div>
    </div>
  );
}

function Frame918() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[100px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>(추가 적립) +1,000</p>
      </div>
    </div>
  );
}

function Frame919() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">10,000</p>
        <p>휴대폰 결제</p>
      </div>
    </div>
  );
}

function Frame920() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-end px-[10px] py-[11px] relative shrink-0 w-[60px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] text-right tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">11,000</p>
      </div>
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">환불완료</p>
      </div>
    </div>
  );
}

function Frame258() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[60px]">
      <Frame259 />
    </div>
  );
}

function Frame921() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[90px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">00은행</p>
        <p className="mb-0">XXXX-XXXXXX-XXXX</p>
        <p>홍길동</p>
      </div>
    </div>
  );
}

function Frame915() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame916 />
      <Frame917 />
      <Frame918 />
      <Frame919 />
      <Frame920 />
      <Frame258 />
      <Frame921 />
    </div>
  );
}

function Frame782() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#999] border-l border-r border-solid inset-[0_-0.5px] pointer-events-none" />
      <Frame783 />
      <Frame784 />
      <Frame791 />
      <Frame798 />
      <Frame805 />
      <Frame813 />
      <Frame820 />
      <Frame827 />
      <Frame834 />
      <Frame842 />
      <Frame849 />
      <Frame856 />
      <Frame863 />
      <Frame871 />
      <Frame878 />
      <Frame885 />
      <Frame892 />
      <Frame900 />
      <Frame907 />
      <Frame915 />
    </div>
  );
}

function Component37() {
  return (
    <div className="bg-[#e9f0ff] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[70px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="mb-0">▼ 상담일</p>
        <p>▼ 상담 완료일</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="bg-[#e9f0ff] content-stretch flex h-full items-center justify-center px-[25px] py-[9px] relative shrink-0 w-[50px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[normal]">상담 상태</p>
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="bg-[#e9f0ff] h-full relative shrink-0 w-[80px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[56px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="mb-0">문의 분류</p>
            <p>답변분류(답변자)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="bg-[#e9f0ff] h-full relative shrink-0 w-[160px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[56px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">문의 제목</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-[#e9f0ff] h-full relative shrink-0 w-[160px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[56px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">문의 내용</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="bg-[#e9f0ff] h-full relative shrink-0 w-[60px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[45px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">첨부 파일</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[#e9f0ff] h-full relative shrink-0 w-[75px]" data-name="구분값">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.7px] border-solid border-t-[0.7px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[9px] text-center tracking-[-0.18px] whitespace-nowrap">
            <p className="leading-[normal]">관리자 메모</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame923() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
      <Component37 />
      <Component38 />
      <Component39 />
      <Component40 />
      <Component41 />
      <Component42 />
      <Component43 />
    </div>
  );
}

function Frame925() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame260() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame261 />
    </div>
  );
}

function Frame926() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame927() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame928() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame263() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame924() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame925 />
      <Frame260 />
      <Frame926 />
      <Frame927 />
      <Frame928 />
      <Frame262 />
      <Frame263 />
    </div>
  );
}

function Frame930() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변중</p>
      </div>
    </div>
  );
}

function Frame264() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame265 />
    </div>
  );
}

function Frame931() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame932() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame933() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame266() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame267() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame929() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame930 />
      <Frame264 />
      <Frame931 />
      <Frame932 />
      <Frame933 />
      <Frame266 />
      <Frame267 />
    </div>
  );
}

function Frame935() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변완료</p>
      </div>
    </div>
  );
}

function Frame268() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame269 />
    </div>
  );
}

function Frame936() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#08f]">환불</p>
        <p>관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame937() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame938() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame270() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame934() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame935 />
      <Frame268 />
      <Frame936 />
      <Frame937 />
      <Frame938 />
      <Frame270 />
      <Frame271 />
    </div>
  );
}

function Frame940() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame272() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame273 />
    </div>
  );
}

function Frame941() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">환불</p>
        <p className="text-[#222]">관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame942() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame943() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame275() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame939() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame940 />
      <Frame272 />
      <Frame941 />
      <Frame942 />
      <Frame943 />
      <Frame274 />
      <Frame275 />
    </div>
  );
}

function Frame945() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame276() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame277 />
    </div>
  );
}

function Frame946() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame947() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame948() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame278() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame279() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame944() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame945 />
      <Frame276 />
      <Frame946 />
      <Frame947 />
      <Frame948 />
      <Frame278 />
      <Frame279 />
    </div>
  );
}

function Frame950() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변중</p>
      </div>
    </div>
  );
}

function Frame280() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame281 />
    </div>
  );
}

function Frame951() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame952() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame953() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame282() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame283() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame949() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame950 />
      <Frame280 />
      <Frame951 />
      <Frame952 />
      <Frame953 />
      <Frame282 />
      <Frame283 />
    </div>
  );
}

function Frame955() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변완료</p>
      </div>
    </div>
  );
}

function Frame284() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame285 />
    </div>
  );
}

function Frame956() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#08f]">환불</p>
        <p>관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame957() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame958() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame286() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame287() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame954() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame955 />
      <Frame284 />
      <Frame956 />
      <Frame957 />
      <Frame958 />
      <Frame286 />
      <Frame287 />
    </div>
  );
}

function Frame960() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame288() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame289 />
    </div>
  );
}

function Frame961() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">환불</p>
        <p className="text-[#222]">관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame962() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame963() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame290() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame291() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame959() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame960 />
      <Frame288 />
      <Frame961 />
      <Frame962 />
      <Frame963 />
      <Frame290 />
      <Frame291 />
    </div>
  );
}

function Frame965() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame293() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame292() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame293 />
    </div>
  );
}

function Frame966() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame967() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame968() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame294() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame295() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame964() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame965 />
      <Frame292 />
      <Frame966 />
      <Frame967 />
      <Frame968 />
      <Frame294 />
      <Frame295 />
    </div>
  );
}

function Frame970() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame297() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변중</p>
      </div>
    </div>
  );
}

function Frame296() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame297 />
    </div>
  );
}

function Frame971() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame972() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame973() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame298() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame299() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame969() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame970 />
      <Frame296 />
      <Frame971 />
      <Frame972 />
      <Frame973 />
      <Frame298 />
      <Frame299 />
    </div>
  );
}

function Frame975() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변완료</p>
      </div>
    </div>
  );
}

function Frame300() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame301 />
    </div>
  );
}

function Frame976() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#08f]">환불</p>
        <p>관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame977() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame978() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame302() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame303() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame974() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame975 />
      <Frame300 />
      <Frame976 />
      <Frame977 />
      <Frame978 />
      <Frame302 />
      <Frame303 />
    </div>
  );
}

function Frame980() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame304() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame305 />
    </div>
  );
}

function Frame981() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">환불</p>
        <p className="text-[#222]">관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame982() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame983() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame306() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame307() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame979() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame980 />
      <Frame304 />
      <Frame981 />
      <Frame982 />
      <Frame983 />
      <Frame306 />
      <Frame307 />
    </div>
  );
}

function Frame985() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame308() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame309 />
    </div>
  );
}

function Frame986() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame987() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame988() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame310() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame311() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame984() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame985 />
      <Frame308 />
      <Frame986 />
      <Frame987 />
      <Frame988 />
      <Frame310 />
      <Frame311 />
    </div>
  );
}

function Frame990() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame313() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변중</p>
      </div>
    </div>
  );
}

function Frame312() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame313 />
    </div>
  );
}

function Frame991() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame992() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame993() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame314() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame315() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame989() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame990 />
      <Frame312 />
      <Frame991 />
      <Frame992 />
      <Frame993 />
      <Frame314 />
      <Frame315 />
    </div>
  );
}

function Frame995() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변완료</p>
      </div>
    </div>
  );
}

function Frame316() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame317 />
    </div>
  );
}

function Frame996() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#08f]">환불</p>
        <p>관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame997() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame998() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame318() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame319() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame994() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame995 />
      <Frame316 />
      <Frame996 />
      <Frame997 />
      <Frame998 />
      <Frame318 />
      <Frame319 />
    </div>
  );
}

function Frame1000() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame320() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame321 />
    </div>
  );
}

function Frame1001() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#08f] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">환불</p>
        <p className="text-[#222]">관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame1002() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame1003() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame322() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame323() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame999() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame1000 />
      <Frame320 />
      <Frame1001 />
      <Frame1002 />
      <Frame1003 />
      <Frame322 />
      <Frame323 />
    </div>
  );
}

function Frame1005() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">문의요청</p>
      </div>
    </div>
  );
}

function Frame324() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame325 />
    </div>
  );
}

function Frame1006() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame1007() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame1008() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame326() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame327() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame1004() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame1005 />
      <Frame324 />
      <Frame1006 />
      <Frame1007 />
      <Frame1008 />
      <Frame326 />
      <Frame327 />
    </div>
  );
}

function Frame1010() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame329() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#222] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변중</p>
      </div>
    </div>
  );
}

function Frame328() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame329 />
    </div>
  );
}

function Frame1011() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#ff8000]">오류</p>
        <p>관리자(김관리)</p>
      </div>
    </div>
  );
}

function Frame1012() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame1013() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame330() {
  return (
    <div className="bg-[#f5f5f5] h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame331() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame1009() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame1010 />
      <Frame328 />
      <Frame1011 />
      <Frame1012 />
      <Frame1013 />
      <Frame330 />
      <Frame331 />
    </div>
  );
}

function Frame1015() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[70px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">{`24.01.10 `}</p>
        <p>24.01.30</p>
      </div>
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center px-[6px] py-[3px] relative rounded-[15px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#08f] text-[8px] text-center tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">답변완료</p>
      </div>
    </div>
  );
}

function Frame332() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3px] h-full items-center justify-center px-[23px] py-[11px] relative shrink-0 w-[50px]">
      <Frame333 />
    </div>
  );
}

function Frame1016() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[11px] py-[18px] relative shrink-0 w-[80px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Light',sans-serif] font-['Noto_Sans_KR:Regular',sans-serif] font-light font-normal justify-end leading-[normal] relative shrink-0 text-[#222] text-[10px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0 text-[#08f]">환불</p>
        <p>관리자( 김관리)</p>
      </div>
    </div>
  );
}

function Frame1018() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#222] text-[10px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[normal]">관련해서 문의드립니다.</p>
      </div>
    </div>
  );
}

function Frame1019() {
  return (
    <div className="bg-white content-stretch flex h-full items-center px-[10px] py-[18px] relative shrink-0 w-[160px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[9px] tracking-[-0.18px]">
        <p className="leading-[1.5] whitespace-pre-wrap">결제를 하려고 하는데 자꾸 에러가 나서 튕기는데 어떻게 하면 좋을까요?</p>
      </div>
    </div>
  );
}

function Frame334() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[3px] items-center justify-center px-[37px] py-[18px] size-full" />
      </div>
    </div>
  );
}

function Frame335() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center px-[10px] py-[18px] relative shrink-0 w-[75px]">
      <div aria-hidden="true" className="absolute border-0 border-[#ddd] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#222] text-[10px] text-center tracking-[-0.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">PG 연동 오류</p>
      </div>
    </div>
  );
}

function Frame1014() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <Frame1015 />
      <Frame332 />
      <Frame1016 />
      <Frame1018 />
      <Frame1019 />
      <Frame334 />
      <Frame335 />
    </div>
  );
}

function Frame922() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#999] border-l border-solid inset-[0_0_0_-0.5px] pointer-events-none" />
      <Frame923 />
      <Frame924 />
      <Frame929 />
      <Frame934 />
      <Frame939 />
      <Frame944 />
      <Frame949 />
      <Frame954 />
      <Frame959 />
      <Frame964 />
      <Frame969 />
      <Frame974 />
      <Frame979 />
      <Frame984 />
      <Frame989 />
      <Frame994 />
      <Frame999 />
      <Frame1004 />
      <Frame1009 />
      <Frame1014 />
    </div>
  );
}

function Frame504() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center left-0 top-0">
      <Frame477 />
      <Frame493 />
      <Frame782 />
      <Frame922 />
    </div>
  );
}

function VscodeIconsFileTypeExcel2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="vscode-icons:file-type-excel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="vscode-icons:file-type-excel">
          <path d={svgPaths.p23950a72} fill="var(--fill-0, #185C37)" id="Vector" />
          <path d={svgPaths.p1c0ae500} fill="var(--fill-0, #21A366)" id="Vector_2" />
          <path d={svgPaths.p1199d400} fill="var(--fill-0, #107C41)" id="Vector_3" />
          <path d={svgPaths.p33510300} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p1e31ab00} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p65bc200} fill="var(--fill-0, black)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p25779880} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p91c3100} fill="url(#paint0_linear_1_10500)" id="Vector_8" />
          <path d={svgPaths.p266cb580} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p19912600} fill="var(--fill-0, #33C481)" id="Vector_10" />
          <path d={svgPaths.p20128d00} fill="var(--fill-0, #107C41)" id="Vector_11" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_10500" x1="1.68525" x2="5.187" y1="2.96775" y2="9.03225">
            <stop stopColor="#18884F" />
            <stop offset="0.5" stopColor="#117E43" />
            <stop offset="1" stopColor="#0B6631" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ButtonNormal2() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[10px] py-[6px] right-[10px] rounded-[4px] top-[calc(50%-0.5px)]" data-name="Button_normal">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <VscodeIconsFileTypeExcel2 />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#222] text-[10px]">파일다운로드</p>
    </div>
  );
}

function ButtonNormal3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button_normal">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#222] text-[10px]">선택항목삭제</p>
    </div>
  );
}

function ButtonNormal4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button_normal">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#222] text-[10px]">메일보내기</p>
    </div>
  );
}

function ButtonNormal5() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button_normal">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#222] text-[10px]">SMS전송</p>
    </div>
  );
}

function Frame1021() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[5px] items-center left-[10px] top-[calc(50%-0.5px)]">
      <ButtonNormal3 />
      <ButtonNormal4 />
      <ButtonNormal5 />
    </div>
  );
}

function Frame1020() {
  return (
    <div className="absolute bg-white border-[#ddd] border-solid border-t bottom-0 h-[36px] left-0 overflow-clip w-[1820px]">
      <ButtonNormal2 />
      <Frame1021 />
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute bottom-[36px] contents left-0">
      <div className="absolute bg-[#eee] bottom-[36px] h-[5px] left-0 w-[3351px]" />
      <div className="absolute bg-[#666] h-[5px] left-[450px] rounded-[100px] top-[556px] w-[160px]" />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute bottom-0 contents left-0">
      <Frame1020 />
      <Group70 />
    </div>
  );
}

function Frame1027() {
  return (
    <div className="bg-white h-[597px] overflow-clip relative shrink-0 w-[1820px]">
      <Frame504 />
      <Group71 />
      <div className="absolute flex h-[528px] items-center justify-center right-0 top-[32px] w-[5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#eee] h-[5px] w-[528px]" />
        </div>
      </div>
    </div>
  );
}

function Frame1029() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame349 />
      <Frame1027 />
    </div>
  );
}

function Frame692() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[80px] w-[1820px]">
      <Frame346 />
      <Frame359 />
      <Frame1017 />
      <Frame1029 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f8f9fc] relative size-full" data-name="기본화면_파일업로드">
      <DashboardSidebar />
      <DashboardHeader />
      <Frame692 />
      <div className="-translate-y-1/2 absolute flex h-[100px] items-center justify-center right-[20px] top-[calc(50%+100px)] w-[5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#666] h-[5px] rounded-[100px] w-[100px]" />
        </div>
      </div>
    </div>
  );
}