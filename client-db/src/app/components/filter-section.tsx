import { useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';

interface FilterSectionProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
  onKeywordChange: (keyword: string) => void;
  keyword: string;
}

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

function CheckboxGroup({ label, options, selected, onChange }: CheckboxGroupProps) {
  const allSelected = selected.length === options.length || selected.includes('전체');

  const toggleAll = () => { allSelected ? onChange([]) : onChange(['전체', ...options]); };
  const toggleOption = (opt: string) => {
    if (opt === '전체') { toggleAll(); return; }
    const next = selected.includes(opt) ? selected.filter(s => s !== opt && s !== '전체') : [...selected.filter(s => s !== '전체'), opt];
    next.length === options.length ? onChange(['전체', ...options]) : onChange(next);
  };

  return (
    <div className="flex items-start gap-[10px]">
      <span className="text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#808080] tracking-[-0.26px] shrink-0 w-[74px] pt-[1px]">{label}</span>
      <div className="flex items-center gap-[10px] flex-wrap">
        {['전체', ...options].map(opt => {
          const isChecked = opt === '전체' ? allSelected : selected.includes(opt);
          return (
            <label key={opt} className="flex items-center gap-[4px] cursor-pointer">
              <div
                className={`w-[16px] h-[16px] rounded-[3px] flex items-center justify-center shrink-0 ${isChecked ? 'bg-[#0088ff]' : 'bg-[#bbb]'}`}
                onClick={e => { e.preventDefault(); toggleOption(opt); }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8.17 2.65L3.68 7.15L1.63 5.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#2c2c2e] tracking-[-0.26px] whitespace-nowrap">{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export function FilterSection({ onFilterChange, onKeywordChange, keyword }: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [memberTypes, setMemberTypes] = useState<string[]>(['전체', '일반회원', '정식회원', '기업회원', '전문가']);
  const [genders, setGenders] = useState<string[]>(['전체', 'M', 'F']);
  const [subscriptions, setSubscriptions] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [aiPrograms, setAiPrograms] = useState<string[]>([]);
  const [editors, setEditors] = useState<string[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
  const [conversionTypes, setConversionTypes] = useState<string[]>([]);
  const [matchingStatuses, setMatchingStatuses] = useState<string[]>([]);
  const [expertLevels, setExpertLevels] = useState<string[]>([]);
  const [joinChannels, setJoinChannels] = useState<string[]>([]);
  const [devices, setDevices] = useState<string[]>([]);
  const [examSubjects, setExamSubjects] = useState<string[]>([]);
  const [payStatuses, setPayStatuses] = useState<string[]>([]);

  const [categoryLarge, setCategoryLarge] = useState('');
  const [categoryMid, setCategoryMid] = useState('');
  const [categorySm, setCategorySm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const countSelected = () => {
    let c = 0;
    [memberTypes, genders, subscriptions, features, aiPrograms, editors, serviceTypes, conversionTypes, matchingStatuses, expertLevels, joinChannels, devices, examSubjects, payStatuses].forEach(arr => {
      if (arr.length > 0 && !arr.includes('전체')) c++;
    });
    if (dateFrom || dateTo) c++;
    if (keyword) c++;
    return c;
  };

  const handleApply = () => {
    onFilterChange({ memberTypes, genders, subscriptions, features, aiPrograms, editors, serviceTypes, conversionTypes, matchingStatuses, expertLevels, joinChannels, devices, examSubjects, payStatuses });
  };

  const handleReset = () => {
    setMemberTypes(['전체', '일반회원', '정식회원', '기업회원', '전문가']);
    setGenders(['전체', 'M', 'F']);
    setSubscriptions([]);
    setFeatures([]);
    setAiPrograms([]);
    setEditors([]);
    setServiceTypes([]);
    setConversionTypes([]);
    setMatchingStatuses([]);
    setExpertLevels([]);
    setJoinChannels([]);
    setDevices([]);
    setExamSubjects([]);
    setPayStatuses([]);
    setCategoryLarge(''); setCategoryMid(''); setCategorySm('');
    setDateFrom(''); setDateTo('');
    onKeywordChange('');
    onFilterChange({});
  };

  const selectClass = "h-[30px] px-[8px] text-[13px] font-['Noto_Sans_KR',sans-serif] border border-[#e3e5ed] rounded-[4px] bg-white text-[#222] focus:outline-none focus:border-[#0088ff] appearance-none cursor-pointer";

  return (
    <div className="bg-white border border-[#e3e5ed] rounded-[6px]">
      <div className="flex items-center justify-between px-[14px] h-[36px] bg-[#eceef2] border-t border-[#999] rounded-t-[6px]">
        <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-[4px] cursor-pointer text-[13px] font-['Noto_Sans_KR',sans-serif] text-black">
          선택된 검색조건 {countSelected()}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-[8px] px-[14px] py-[12px]">

          {/* Row 1: 회원유형 + 성별 */}
          <div className="flex items-start gap-[20px] flex-wrap">
            <CheckboxGroup label="회원유형" options={['일반회원', '정식회원', '기업회원', '전문가']} selected={memberTypes} onChange={setMemberTypes} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <CheckboxGroup label="성별" options={['M', 'F']} selected={genders} onChange={setGenders} />
          </div>

          {/* Row 2: 구독상태 */}
          <CheckboxGroup label="구독상태" options={['프리미엄', '스탠다드', '베이직', 'free']} selected={subscriptions} onChange={setSubscriptions} />

          {/* Row 3: 서비스유형 + 변환방식 */}
          <div className="flex items-start gap-[20px] flex-wrap">
            <CheckboxGroup label="서비스유형" options={['AI번역', '매칭', '설문', '프롬프트', '문서편집', '영상편집', '음악편집']} selected={serviceTypes} onChange={setServiceTypes} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <CheckboxGroup label="변환방식" options={['STT', 'TTS', 'TTT', 'STS']} selected={conversionTypes} onChange={setConversionTypes} />
          </div>

          {/* Row 4: AI프로그램 + 에디터 */}
          <div className="flex items-start gap-[20px] flex-wrap">
            <CheckboxGroup label="AI프로그램" options={['GPT-4o', 'Claude 3.5', 'Gemini Pro', 'Llama 3', 'DeepL']} selected={aiPrograms} onChange={setAiPrograms} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <CheckboxGroup label="편집에디터" options={['문서에디터', '영상에디터', '음악에디터']} selected={editors} onChange={setEditors} />
          </div>

          {/* Row 5: 매칭상태 + 전문가레벨 */}
          <div className="flex items-start gap-[20px] flex-wrap">
            <CheckboxGroup label="매칭상태" options={['매칭대기', '매칭완료', '진행중', '완료', '취소']} selected={matchingStatuses} onChange={setMatchingStatuses} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <CheckboxGroup label="전문가레벨" options={['A', 'B', 'C', 'D', 'E']} selected={expertLevels} onChange={setExpertLevels} />
          </div>

          {/* Row 6: 시험종목 + 결제상태 */}
          <div className="flex items-start gap-[20px] flex-wrap">
            <CheckboxGroup label="시험종목" options={['AI번역', '프롬프트', '윤리시험', '자격시험']} selected={examSubjects} onChange={setExamSubjects} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <CheckboxGroup label="결제상태" options={['결제완료', '미결제', '환불', '구독중']} selected={payStatuses} onChange={setPayStatuses} />
          </div>

          {/* Row 7: 가입채널 + 기기 + 카테고리 */}
          <div className="flex items-start gap-[16px] flex-wrap">
            <CheckboxGroup label="가입채널" options={['네이버', '카카오', '구글', '애플', '이메일']} selected={joinChannels} onChange={setJoinChannels} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <CheckboxGroup label="기기" options={['PC', 'Mobile', 'Tablet']} selected={devices} onChange={setDevices} />
            <div className="w-[1px] h-[18px] bg-[#ddd] mt-[2px]" />
            <div className="flex items-center gap-[6px]">
              <span className="text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#808080] shrink-0">카테고리</span>
              <select value={categoryLarge} onChange={e => setCategoryLarge(e.target.value)} className={selectClass}>
                <option value="">대분류</option>
                <option value="교육">교육</option>
                <option value="비즈니스">비즈니스</option>
                <option value="시험">시험</option>
              </select>
              <select value={categoryMid} onChange={e => setCategoryMid(e.target.value)} className={selectClass}>
                <option value="">중분류</option>
                <option value="온라인">온라인</option>
                <option value="오프라인">오프라인</option>
              </select>
              <select value={categorySm} onChange={e => setCategorySm(e.target.value)} className={selectClass}>
                <option value="">소분류</option>
                <option value="초급">초급</option>
                <option value="중급">중급</option>
                <option value="고급">고급</option>
              </select>
            </div>
          </div>

          {/* Row 8: 날짜 */}
          <div className="flex items-center gap-[10px] flex-wrap">
            <div className="flex items-center gap-[6px]">
              <span className="text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#808080] shrink-0 w-[74px]">기간설정</span>
              <select className={`${selectClass} w-[100px]`}>
                <option>가입일순</option>
                <option>결제일순</option>
                <option>활동일순</option>
                <option>시험일순</option>
              </select>
            </div>
            <div className="flex items-center gap-[6px]">
              <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} className={`${selectClass} w-[140px]`} />
              <span className="text-[13px] text-[#999]">~</span>
              <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} className={`${selectClass} w-[140px]`} />
            </div>
            <div className="flex items-center gap-[4px] ml-[4px]">
              {['오늘', '1주', '1개월', '3개월', '6개월', '1년'].map(label => (
                <button key={label} className="h-[28px] px-[10px] text-[12px] font-['Noto_Sans_KR',sans-serif] text-[#666] bg-white border border-[#ddd] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer">{label}</button>
              ))}
            </div>
          </div>

          {/* Row 9: 검색 + 버튼 */}
          <div className="flex items-center gap-[8px] border-t border-[#eee] pt-[10px]">
            <span className="text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#808080] shrink-0 w-[74px]">검색어</span>
            <select className={`${selectClass} w-[100px]`}>
              <option>전체</option>
              <option>이름</option>
              <option>이메일</option>
              <option>관리번호</option>
              <option>연락처</option>
              <option>그룹명</option>
            </select>
            <input
              type="text" value={keyword} onChange={e => onKeywordChange(e.target.value)}
              placeholder="검색어 입력"
              className="h-[30px] flex-1 max-w-[280px] px-[10px] text-[13px] font-['Noto_Sans_KR',sans-serif] border border-[#e3e5ed] rounded-[4px] bg-white text-[#222] placeholder-[#aaa] focus:outline-none focus:border-[#0088ff]"
            />
            <button onClick={handleApply} className="h-[30px] px-[18px] bg-[#222] text-white text-[13px] font-['Noto_Sans_KR',sans-serif] rounded-[4px] hover:bg-[#333] cursor-pointer">검색</button>
            <button onClick={handleReset} className="h-[30px] px-[12px] text-[#888] hover:text-[#222] cursor-pointer flex items-center gap-[4px]">
              <RotateCcw size={14} />
              <span className="text-[13px] font-['Noto_Sans_KR',sans-serif]">초기화</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
