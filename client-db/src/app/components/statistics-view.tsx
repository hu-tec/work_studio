import { MemberData } from './db-page-data';

interface StatisticsViewProps { data: MemberData[]; }

export function StatisticsView({ data }: StatisticsViewProps) {
  const total = data.length;
  const regular = data.filter(m => m.memberType === '정식회원').length;
  const normal = data.filter(m => m.memberType === '일반회원').length;
  const corp = data.filter(m => m.memberType === '기업회원').length;
  const expert = data.filter(m => m.memberType === '전문가').length;
  const withdrawn = data.filter(m => m.memberType === '회원탈퇴').length;
  const premium = data.filter(m => m.subscriptionPlan === '프리미엄').length;
  const standard = data.filter(m => m.subscriptionPlan === '스탠다드').length;
  const basic = data.filter(m => m.subscriptionPlan === '베이직').length;
  const totalPayment = data.reduce((s, m) => s + m.finalPaymentAmount, 0);
  const totalSettlement = data.reduce((s, m) => s + m.settlementAmount, 0);
  const totalInquiries = data.reduce((s, m) => s + m.inquiryCount, 0);
  const pending = data.filter(m => m.inquiryStatus === '대기중').length;
  const examTakers = data.filter(m => m.hasExam).length;
  const passed = data.filter(m => m.passStatus === '합격').length;
  const avgUsage = total > 0 ? Math.round(data.reduce((s, m) => s + m.usedCount, 0) / total) : 0;

  const cards = [
    { label: '전체 회원', value: total, unit: '명', color: '#222' },
    { label: '정식회원', value: regular, unit: '명', color: '#0088ff' },
    { label: '일반회원', value: normal, unit: '명', color: '#666' },
    { label: '기업회원', value: corp, unit: '명', color: '#7c3aed' },
    { label: '전문가', value: expert, unit: '명', color: '#FF8C00' },
    { label: '탈퇴회원', value: withdrawn, unit: '명', color: '#dc3d3d' },
    { label: '프리미엄', value: premium, unit: '명', color: '#0088ff' },
    { label: '스탠다드', value: standard, unit: '명', color: '#7c3aed' },
    { label: '베이직', value: basic, unit: '명', color: '#808080' },
    { label: '총 결제금액', value: totalPayment.toLocaleString(), unit: '원', color: '#43EB29' },
    { label: '전문가 정산', value: totalSettlement.toLocaleString(), unit: '원', color: '#FF8C00' },
    { label: '총 문의', value: totalInquiries, unit: '건', color: '#FFC31F' },
    { label: '대기중 문의', value: pending, unit: '건', color: '#dc3d3d' },
    { label: '시험 응시자', value: examTakers, unit: '명', color: '#7c3aed' },
    { label: '합격자', value: passed, unit: '명', color: '#43EB29' },
    { label: '평균 이용', value: avgUsage, unit: '회', color: '#0088ff' },
  ];

  const siteStats = ['AI 번역', '통독문서', '교육센터', '전시/행사', '시험사이트'].map(s => ({ name: s, count: data.filter(m => m.site === s).length }));
  const channelStats = ['네이버', '카카오', '구글', '애플', '이메일'].map(c => ({ name: c, count: data.filter(m => m.joinChannel === c).length }));
  const deviceStats = ['PC', 'Mobile', 'Tablet'].map(d => ({ name: d, count: data.filter(m => m.device === d).length }));
  const serviceStats = ['AI번역', '매칭', '설문', '프롬프트', '문서편집', '영상편집', '음악편집'].map(s => ({ name: s, count: data.filter(m => m.serviceType === s).length }));
  const examStats = ['AI번역', '프롬프트', '윤리시험', '자격시험'].map(e => ({ name: e, count: data.filter(m => m.examSubject === e && m.hasExam).length }));
  const matchStats = ['매칭대기', '매칭완료', '진행중', '완료', '취소'].map(s => ({ name: s, count: data.filter(m => m.matchingStatus === s).length }));

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-[10px]">
        {cards.map(c => (
          <div key={c.label} className="bg-white border border-[#e3e5ed] rounded-[8px] p-[14px] flex flex-col gap-[4px]">
            <span className="text-[12px] font-['Noto_Sans_KR',sans-serif] text-[#808080]">{c.label}</span>
            <div className="flex items-end gap-[3px]">
              <span className="text-[22px] font-['Noto_Sans_KR',sans-serif] font-medium" style={{ color: c.color }}>{c.value}</span>
              <span className="text-[13px] text-[#999] mb-[2px]">{c.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Distribution */}
      <div className="grid grid-cols-3 gap-[12px]">
        <DistTable title="사이트별 분포" items={siteStats} total={total} />
        <DistTable title="가입채널별 분포" items={channelStats} total={total} />
        <DistTable title="기기별 분포" items={deviceStats} total={total} />
        <DistTable title="서비스유형 분포" items={serviceStats} total={total} color="#7c3aed" />
        <DistTable title="시험종목 분포" items={examStats} total={total} color="#FF8C00" />
        <DistTable title="매칭상태 분포" items={matchStats} total={total} color="#43EB29" />
      </div>
    </div>
  );
}

function DistTable({ title, items, total, color = '#0088ff' }: { title: string; items: { name: string; count: number }[]; total: number; color?: string }) {
  return (
    <div className="bg-white border border-[#e3e5ed] rounded-[8px] p-[14px]">
      <h4 className="text-[14px] font-['Noto_Sans_KR',sans-serif] text-[#222] mb-[10px]">{title}</h4>
      <div className="flex flex-col gap-[7px]">
        {items.map(item => {
          const pct = total > 0 ? Math.round((item.count / total) * 100) : 0;
          return (
            <div key={item.name} className="flex items-center gap-[8px]">
              <span className="text-[12px] font-['Noto_Sans_KR',sans-serif] text-[#555] w-[72px] shrink-0 truncate">{item.name}</span>
              <div className="flex-1 h-[12px] bg-[#eceef2] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
              </div>
              <span className="text-[12px] font-['Noto_Sans_KR',sans-serif] text-[#222] w-[28px] text-right">{item.count}</span>
              <span className="text-[11px] text-[#999] w-[30px] text-right">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
