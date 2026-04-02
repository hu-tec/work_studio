import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import {
  MemberData, channelColors, siteShortName, TabType,
  subscriptionBadgeColor, expertLevelColor, ExpertLevel,
} from './db-page-data';

interface MemberTableProps {
  data: MemberData[];
  activeTab: TabType;
}

type SortKey = 'managementNumber' | 'joinDate' | 'lastLogin' | 'paymentDate' | 'lastActivity' | 'examDate' | 'requestDate';
type SortDir = 'asc' | 'desc';

interface ColumnDef {
  key: string;
  label: string;
  subLabel?: string;
  flex: number;
  minWidth: number;
  render: (m: MemberData) => React.ReactNode;
}

export function MemberTable({ data, activeTab }: MemberTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('managementNumber');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const itemsPerPage = 15;

  const sortedData = [...data].sort((a, b) => {
    const aVal = (a as Record<string, unknown>)[sortKey] || '';
    const bVal = (b as Record<string, unknown>)[sortKey] || '';
    const cmp = String(aVal).localeCompare(String(bVal));
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const totalPages = Math.max(1, Math.ceil(sortedData.length / itemsPerPage));
  const startIdx = (currentPage - 1) * itemsPerPage;
  const pagedData = sortedData.slice(startIdx, startIdx + itemsPerPage);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  const toggleRow = (id: number) => {
    setSelectedRows(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  const toggleAll = () => {
    selectedRows.size === pagedData.length ? setSelectedRows(new Set()) : setSelectedRows(new Set(pagedData.map(m => m.id)));
  };

  const sortableKeys: SortKey[] = ['managementNumber', 'joinDate', 'lastLogin', 'paymentDate', 'lastActivity', 'examDate', 'requestDate'];

  /* ── 공통 기본 컬럼 ── */
  const baseColumns: ColumnDef[] = [
    { key: 'num', label: '번호', flex: 0.6, minWidth: 42, render: () => null },
    {
      key: 'managementNumber', label: '회원', subLabel: '관리번호', flex: 2.2, minWidth: 110,
      render: m => <span className="text-[#0066cc] cursor-pointer hover:underline">{m.managementNumber}</span>
    },
    {
      key: 'site', label: '사이트', subLabel: '구분', flex: 1, minWidth: 52,
      render: m => <span>{siteShortName[m.site]}</span>
    },
    {
      key: 'memberType', label: '회원유형', subLabel: '구독', flex: 1.8, minWidth: 80,
      render: m => (
        <div className="flex flex-col items-center gap-[2px]">
          <span className={m.memberType === '회원탈퇴' ? 'text-[#dc3d3d]' : ''}>{m.memberType}</span>
          {m.subscriptionPlan && m.subscriptionPlan !== 'free' && (
            <span
              className="text-white text-[10px] px-[5px] py-[1px] rounded-[3px]"
              style={{ backgroundColor: subscriptionBadgeColor[m.subscriptionPlan] || '#888' }}
            >{m.subscriptionPlan}</span>
          )}
        </div>
      )
    },
    {
      key: 'name', label: '이름', subLabel: '나이·성별', flex: 1.6, minWidth: 72,
      render: m => (
        <div className="flex flex-col items-center leading-[1.4]">
          <span>{m.name}({m.gender})</span>
          <span className="text-[#808080]">{m.age}세</span>
        </div>
      )
    },
    {
      key: 'email', label: '이메일', subLabel: '휴대폰', flex: 3, minWidth: 140,
      render: m => (
        <div className="flex flex-col items-center leading-[1.4]">
          <span className="truncate max-w-full">{m.email}</span>
          {m.phone && <span className="text-[#808080] truncate max-w-full">{m.phone}</span>}
        </div>
      )
    },
    {
      key: 'address', label: '주소', flex: 1.2, minWidth: 56,
      render: m => m.city ? (
        <div className="flex flex-col items-center"><span>{m.city}</span><span className="text-[#808080]">{m.district}</span></div>
      ) : <span className="text-[#ccc]">-</span>
    },
  ];

  /* ── 회원관리 탭 전용 ── */
  const memberColumns: ColumnDef[] = [
    {
      key: 'group', label: '그룹여부', subLabel: '사업자번호', flex: 1.8, minWidth: 78,
      render: m => m.isGroup ? (
        <div className="flex flex-col items-center">
          <span className="text-[#0088ff]">{m.groupName}</span>
          {m.businessNumber && <span className="text-[10px] text-[#999]">{m.businessNumber}</span>}
        </div>
      ) : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'joinDate', label: '가입일', subLabel: '채널', flex: 1.8, minWidth: 80,
      render: m => (
        <div className="flex flex-col items-center gap-[2px]">
          <span>{m.joinDate}</span>
          <span className="flex items-center gap-[3px]">
            <span className="inline-block w-[6px] h-[6px] rounded-full" style={{ backgroundColor: channelColors[m.joinChannel] }} />
            <span className="text-[#808080]">{m.joinChannel}</span>
          </span>
        </div>
      )
    },
    {
      key: 'device', label: '접근', subLabel: '기기', flex: 0.9, minWidth: 48,
      render: m => <span>{m.device}</span>
    },
    {
      key: 'lastLogin', label: '최근 로그인', subLabel: '체류시간', flex: 2.2, minWidth: 100,
      render: m => (
        <div className="flex flex-col items-center leading-[1.4]">
          <span>{m.lastLogin}</span>
          <span className="text-[#808080]">{m.stayTime}</span>
        </div>
      )
    },
    {
      key: 'expert', label: '전문가', subLabel: '레벨·평점', flex: 1.6, minWidth: 70,
      render: m => m.isExpert ? (
        <div className="flex flex-col items-center gap-[1px]">
          <div className="flex items-center gap-[3px]">
            <span className="text-[10px] px-[4px] py-[1px] rounded-[3px] text-white" style={{ backgroundColor: expertLevelColor[m.expertLevel as ExpertLevel] }}>Lv.{m.expertLevel}</span>
            <span className={`text-[10px] px-[4px] py-[1px] rounded-[3px] ${m.expertApproval === '승인' ? 'bg-[#e6ffe6] text-[#2a9d2a]' : m.expertApproval === '반려' ? 'bg-[#ffe6e6] text-[#dc3d3d]' : 'bg-[#fff5e6] text-[#cc8800]'}`}>{m.expertApproval}</span>
          </div>
          <span className="flex items-center gap-[2px] text-[#FFC31F]">
            <Star size={10} fill="#FFC31F" />
            <span className="text-[11px]">{m.expertRating}</span>
          </span>
        </div>
      ) : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'notification', label: '알림', subLabel: '마케팅동의', flex: 1.5, minWidth: 68,
      render: m => (
        <div className="flex flex-col items-center leading-[1.4]">
          <span>{[m.notificationSms && '문자', m.notificationEmail && '메일'].filter(Boolean).join('/') || '-'}</span>
          <span className={m.marketingConsent ? 'text-[#0088ff]' : 'text-[#ccc]'}>{m.marketingConsent ? '동의' : '미동의'}</span>
        </div>
      )
    },
  ];

  /* ── 활동관리 탭 전용 ── */
  const activityColumns: ColumnDef[] = [
    {
      key: 'serviceType', label: '서비스', subLabel: '유형', flex: 1.2, minWidth: 58,
      render: m => <span>{m.serviceType}</span>
    },
    {
      key: 'conversionType', label: '변환', subLabel: '방식', flex: 0.9, minWidth: 44,
      render: m => <span className="text-[#7c3aed]">{m.conversionType}</span>
    },
    {
      key: 'languagePair', label: '언어쌍', flex: 1, minWidth: 50,
      render: m => <span>{m.languagePair}</span>
    },
    {
      key: 'matchingStatus', label: '매칭', subLabel: '상태', flex: 1.3, minWidth: 62,
      render: m => {
        const colors: Record<string, string> = { '매칭대기': '#FFC31F', '매칭완료': '#0088ff', '진행중': '#7c3aed', '완료': '#43EB29', '취소': '#dc3d3d' };
        return <span style={{ color: colors[m.matchingStatus] || '#222' }}>{m.matchingStatus}</span>;
      }
    },
    {
      key: 'matchedExpertName', label: '배정', subLabel: '전문가', flex: 1.2, minWidth: 56,
      render: m => m.matchedExpertName ? <span className="text-[#0088ff]">{m.matchedExpertName}</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'totalUsage', label: '이용가능', subLabel: '이용횟수', flex: 1.4, minWidth: 64,
      render: m => (
        <div className="flex flex-col items-center"><span>{m.totalUsage.toLocaleString()}</span><span className="text-[#0088ff]">{m.usedCount}</span></div>
      )
    },
    {
      key: 'lastActivity', label: '최근활동', flex: 1.5, minWidth: 70,
      render: m => <span>{m.lastActivity}</span>
    },
    {
      key: 'usedAI', label: '사용AI', subLabel: '에디터', flex: 1.5, minWidth: 68,
      render: m => (
        <div className="flex flex-col items-center"><span className="text-[#0088ff]">{m.usedAI}</span><span className="text-[#808080]">{m.usedEditor}</span></div>
      )
    },
    {
      key: 'fileCount', label: '파일', flex: 0.8, minWidth: 38,
      render: m => <span>{m.fileCount}</span>
    },
    {
      key: 'requestDate', label: '요청일', subLabel: '완료일', flex: 1.8, minWidth: 80,
      render: m => (
        <div className="flex flex-col items-center leading-[1.4]">
          <span>{m.requestDate}</span>
          <span className="text-[#808080]">{m.completionDate || '-'}</span>
        </div>
      )
    },
    {
      key: 'finalServiceAmount', label: '서비스', subLabel: '금액', flex: 1.4, minWidth: 64,
      render: m => <span>{m.finalServiceAmount.toLocaleString()}원</span>
    },
  ];

  /* ── 결제관리 탭 전용 ── */
  const paymentColumns: ColumnDef[] = [
    {
      key: 'paymentStatus', label: '결제', subLabel: '상태', flex: 1.2, minWidth: 56,
      render: m => {
        const colors: Record<string, string> = { '결제완료': '#43EB29', '미결제': '#999', '환불': '#dc3d3d', '구독중': '#0088ff' };
        return m.paymentStatus ? <span style={{ color: colors[m.paymentStatus] || '#222' }}>{m.paymentStatus}</span> : <span className="text-[#ccc]">-</span>;
      }
    },
    {
      key: 'paymentCategory', label: '결제', subLabel: '분류', flex: 1.3, minWidth: 60,
      render: m => m.paymentStatus ? <span>{m.paymentCategory}</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'paymentAmount', label: '이용금액', subLabel: '할인율', flex: 1.8, minWidth: 80,
      render: m => m.paymentAmount ? (
        <div className="flex flex-col items-center">
          <span>{m.paymentAmount.toLocaleString()}원</span>
          {m.discountRate > 0 && <span className="text-[#dc3d3d]">-{m.discountRate}%</span>}
        </div>
      ) : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'finalPaymentAmount', label: '최종', subLabel: '결제액', flex: 1.6, minWidth: 72,
      render: m => m.finalPaymentAmount ? <span className="font-medium">{m.finalPaymentAmount.toLocaleString()}원</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'paymentDate', label: '결제일', flex: 1.5, minWidth: 70,
      render: m => <span>{m.paymentDate || '-'}</span>
    },
    {
      key: 'paymentMethod', label: '결제', subLabel: '수단', flex: 1.3, minWidth: 60,
      render: m => <span>{m.paymentMethod || '-'}</span>
    },
    {
      key: 'refundStatus', label: '환불', subLabel: '상태/사유', flex: 1.8, minWidth: 80,
      render: m => {
        const colors: Record<string, string> = { '환불요청': '#FFC31F', '환불완료': '#dc3d3d', '환불거절': '#999', '환불없음': '#ccc' };
        return (
          <div className="flex flex-col items-center">
            <span style={{ color: colors[m.refundStatus] || '#ccc' }}>{m.refundStatus}</span>
            {m.refundReason && <span className="text-[10px] text-[#999] truncate max-w-full">{m.refundReason}</span>}
          </div>
        );
      }
    },
    {
      key: 'subscriptionPeriod', label: '구독기간', subLabel: '혜택', flex: 2.4, minWidth: 110,
      render: m => m.subscriptionStart ? (
        <div className="flex flex-col items-center leading-[1.4]">
          <span>{m.subscriptionStart}~{m.subscriptionEnd}</span>
          <span className="text-[10px] text-[#808080] truncate max-w-full">{m.subscriptionBenefit}</span>
        </div>
      ) : <span className="text-[#ccc]">-</span>
    },
  ];

  /* ── 1:1 문의 탭 전용 ── */
  const inquiryColumns: ColumnDef[] = [
    {
      key: 'inquiryCount', label: '문의', subLabel: '수', flex: 0.8, minWidth: 40,
      render: m => <span className={m.inquiryCount > 0 ? '' : 'text-[#ccc]'}>{m.inquiryCount}</span>
    },
    {
      key: 'inquiryCategory', label: '문의', subLabel: '분류', flex: 1.3, minWidth: 60,
      render: m => m.inquiryCount > 0 ? <span>{m.inquiryCategory}</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'inquiryContent', label: '문의내용', flex: 2.5, minWidth: 110,
      render: m => m.inquiryContent ? <span className="truncate max-w-full text-left">{m.inquiryContent}</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'inquiryStatus', label: '문의', subLabel: '상태', flex: 1.2, minWidth: 56,
      render: m => {
        const colors: Record<string, string> = { '답변완료': '#43EB29', '대기중': '#FFC31F', '처리중': '#0088ff' };
        return m.inquiryStatus ? <span style={{ color: colors[m.inquiryStatus] || '#222' }}>{m.inquiryStatus}</span> : <span className="text-[#ccc]">-</span>;
      }
    },
    {
      key: 'lastInquiry', label: '최근문의', subLabel: '답변일', flex: 1.8, minWidth: 80,
      render: m => m.lastInquiry ? (
        <div className="flex flex-col items-center leading-[1.4]">
          <span>{m.lastInquiry}</span>
          {m.answerDate && <span className="text-[#808080]">{m.answerDate}</span>}
        </div>
      ) : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'adminMemo', label: '관리자', subLabel: '메모', flex: 1.8, minWidth: 80,
      render: m => m.adminMemo ? <span className="text-[#555] truncate max-w-full">{m.adminMemo}</span> : <span className="text-[#ccc]">-</span>
    },
  ];

  /* ── 전체 탭: 시험 + 정산 추가 ── */
  const examColumns: ColumnDef[] = [
    {
      key: 'examSubject', label: '시험', subLabel: '종목', flex: 1.2, minWidth: 54,
      render: m => m.hasExam ? <span>{m.examSubject}</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'examGrade', label: '등급', flex: 1, minWidth: 50,
      render: m => m.hasExam ? <span>{m.examGrade}</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'examDate', label: '시험일', subLabel: '지역', flex: 1.6, minWidth: 70,
      render: m => m.hasExam ? (
        <div className="flex flex-col items-center"><span>{m.examDate}</span><span className="text-[#808080]">{m.examRegion}</span></div>
      ) : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'examScore', label: '점수', subLabel: '합격기준', flex: 1.3, minWidth: 58,
      render: m => m.hasExam ? (
        <div className="flex flex-col items-center">
          <span className={m.examScore >= m.passingScore ? 'text-[#0088ff]' : 'text-[#dc3d3d]'}>{m.examScore}점</span>
          <span className="text-[#999]">/{m.passingScore}점</span>
        </div>
      ) : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'passStatus', label: '합격', subLabel: '여부', flex: 1, minWidth: 48,
      render: m => {
        const colors: Record<string, string> = { '합격': '#43EB29', '불합격': '#dc3d3d', '채점중': '#FFC31F', '미응시': '#ccc' };
        return <span style={{ color: colors[m.passStatus] || '#222' }}>{m.passStatus}</span>;
      }
    },
    {
      key: 'certificateStatus', label: '자격증', flex: 1.1, minWidth: 52,
      render: m => {
        const colors: Record<string, string> = { '발급완료': '#43EB29', '배송중': '#0088ff', '미발급': '#ccc' };
        return <span style={{ color: colors[m.certificateStatus] || '#222' }}>{m.certificateStatus}</span>;
      }
    },
  ];

  const settlementColumns: ColumnDef[] = [
    {
      key: 'settlementAmount', label: '정산액', flex: 1.4, minWidth: 64,
      render: m => m.isExpert && m.settlementAmount > 0 ? <span>{m.settlementAmount.toLocaleString()}원</span> : <span className="text-[#ccc]">-</span>
    },
    {
      key: 'settlementStatus', label: '정산', subLabel: '상태', flex: 1.2, minWidth: 56,
      render: m => {
        const colors: Record<string, string> = { '정산완료': '#43EB29', '정산대기': '#FFC31F', '미정산': '#ccc' };
        return m.isExpert ? <span style={{ color: colors[m.settlementStatus] || '#222' }}>{m.settlementStatus}</span> : <span className="text-[#ccc]">-</span>;
      }
    },
  ];

  let columns: ColumnDef[] = [...baseColumns];

  if (activeTab === '전체') {
    columns = [...columns, ...memberColumns, ...activityColumns.slice(0, 4), ...examColumns.slice(0, 2), ...paymentColumns.slice(0, 3), ...inquiryColumns.slice(0, 2)];
  } else if (activeTab === '회원관리') {
    columns = [...columns, ...memberColumns];
  } else if (activeTab === '활동관리') {
    columns = [...columns, ...activityColumns];
  } else if (activeTab === '결제관리') {
    columns = [...columns, ...paymentColumns, ...settlementColumns];
  } else if (activeTab === '1:1 문의 관리') {
    columns = [...columns, ...inquiryColumns];
  }

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return null;
    return sortDir === 'asc' ? <ChevronUp size={12} className="text-[#0088ff]" /> : <ChevronDown size={12} className="text-[#0088ff]" />;
  };

  const totalMinWidth = 40 + columns.reduce((sum, c) => sum + c.minWidth, 0);

  return (
    <div className="flex flex-col">
      {/* Table info bar */}
      <div className="flex items-center justify-between px-[4px] py-[8px]">
        <div className="flex items-center gap-[8px]">
          <span className="font-['Noto_Sans_KR',sans-serif] text-[14px] text-[#222]">전체정보</span>
          <span className="font-['Noto_Sans_KR',sans-serif] text-[13px] text-[#808080]">{data.length}건</span>
          {selectedRows.size > 0 && (
            <span className="font-['Noto_Sans_KR',sans-serif] text-[13px] text-[#0088ff]">({selectedRows.size}명 선택)</span>
          )}
        </div>
        <div className="flex items-center gap-[6px]">
          <button className="h-[28px] px-[12px] text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#555] bg-white border border-[#ddd] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer">
            색상표 생성(선택/비선택)
          </button>
          <button className="h-[28px] px-[12px] text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#0088ff] bg-[#e8f4ff] border border-[#0088ff] rounded-[4px] hover:bg-[#d0ecff] cursor-pointer">
            파일올리기 ▼
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-[#ddd] rounded-[4px]">
        <div style={{ minWidth: `${totalMinWidth}px` }} className="w-full">
          {/* Header */}
          <div className="flex w-full">
            <div className="bg-[#eceef2] w-[40px] shrink-0 flex items-center justify-center h-[42px] border-b border-[#ddd]">
              <input type="checkbox" checked={selectedRows.size === pagedData.length && pagedData.length > 0} onChange={toggleAll} className="w-[15px] h-[15px] cursor-pointer accent-[#0088ff]" />
            </div>
            {columns.map((col) => (
              <div
                key={col.key}
                className="bg-[#eceef2] flex items-center justify-center text-center h-[42px] border-b border-[#ddd] px-[4px] cursor-pointer hover:bg-[#e0e3e9] transition-colors"
                style={{ flex: col.flex, minWidth: `${col.minWidth}px` }}
                onClick={() => { if (sortableKeys.includes(col.key as SortKey)) handleSort(col.key as SortKey); }}
              >
                <span className="font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#333] tracking-[-0.24px] leading-[1.35] flex items-center gap-[2px]">
                  {col.subLabel ? (
                    <span className="flex flex-col items-center"><span>{col.label}</span><span className="text-[#808080]">{col.subLabel}</span></span>
                  ) : col.label}
                  {sortableKeys.includes(col.key as SortKey) && <SortIcon columnKey={col.key as SortKey} />}
                </span>
              </div>
            ))}
          </div>

          {/* Body */}
          {pagedData.map((member, idx) => {
            const bgColor = idx % 2 === 1 ? '#f5f5f5' : '#ffffff';
            const isSelected = selectedRows.has(member.id);
            const rowBg = isSelected ? '#e8f4ff' : bgColor;

            return (
              <div key={member.id} className="flex w-full hover:!bg-[#f0f4ff] transition-colors" style={{ backgroundColor: rowBg }}>
                <div className="w-[40px] shrink-0 flex items-center justify-center h-[50px] border-b border-[#eee]">
                  <input type="checkbox" checked={isSelected} onChange={() => toggleRow(member.id)} className="w-[15px] h-[15px] cursor-pointer accent-[#0088ff]" />
                </div>
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className="flex items-center justify-center text-center h-[50px] border-b border-[#eee] px-[4px] font-['Noto_Sans_KR',sans-serif] text-[12px] text-[#222] tracking-[-0.24px] overflow-hidden"
                    style={{ flex: col.flex, minWidth: `${col.minWidth}px` }}
                  >
                    {col.key === 'num' ? <span className="text-[#999]">{startIdx + idx + 1}</span> : col.render(member)}
                  </div>
                ))}
              </div>
            );
          })}

          {pagedData.length === 0 && (
            <div className="flex items-center justify-center h-[100px] text-[14px] font-['Noto_Sans_KR',sans-serif] text-[#999]">검색 결과가 없습니다.</div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between py-[12px]">
        <div className="flex items-center gap-[6px]">
          {['선택정보내기', '이메일보내기', 'SMS전송'].map(label => (
            <button key={label} className="h-[30px] px-[14px] text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#555] bg-white border border-[#ddd] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer">
              {label}
            </button>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-[4px]">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="w-[28px] h-[28px] flex items-center justify-center text-[13px] text-[#666] border border-[#ddd] rounded-[4px] disabled:opacity-30 cursor-pointer hover:bg-[#f5f5f5]">«</button>
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="w-[28px] h-[28px] flex items-center justify-center text-[13px] text-[#666] border border-[#ddd] rounded-[4px] disabled:opacity-30 cursor-pointer hover:bg-[#f5f5f5]">‹</button>
          {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
            let page: number;
            if (totalPages <= 7) page = i + 1;
            else if (currentPage <= 4) page = i + 1;
            else if (currentPage >= totalPages - 3) page = totalPages - 6 + i;
            else page = currentPage - 3 + i;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[28px] h-[28px] flex items-center justify-center text-[13px] rounded-[4px] cursor-pointer ${page === currentPage ? 'bg-[#222] text-white' : 'text-[#666] border border-[#ddd] hover:bg-[#f5f5f5]'}`}
              >{page}</button>
            );
          })}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="w-[28px] h-[28px] flex items-center justify-center text-[13px] text-[#666] border border-[#ddd] rounded-[4px] disabled:opacity-30 cursor-pointer hover:bg-[#f5f5f5]">›</button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="w-[28px] h-[28px] flex items-center justify-center text-[13px] text-[#666] border border-[#ddd] rounded-[4px] disabled:opacity-30 cursor-pointer hover:bg-[#f5f5f5]">»</button>
        </div>

        <button className="h-[30px] px-[14px] text-[13px] font-['Noto_Sans_KR',sans-serif] text-[#555] bg-white border border-[#ddd] rounded-[4px] hover:bg-[#f5f5f5] cursor-pointer flex items-center gap-[5px]">
          <svg width="14" height="14" viewBox="0 0 11 11" fill="none"><path d="M0 9.07V1.6C0 1.18 0.17 0.77 0.47 0.47C0.77 0.17 1.18 0 1.6 0H4.27C4.56 0 4.8 0.24 4.8 0.53C4.8 0.83 4.56 1.07 4.27 1.07H1.6C1.46 1.07 1.32 1.12 1.22 1.22C1.12 1.32 1.07 1.46 1.07 1.6V9.07C1.07 9.21 1.12 9.34 1.22 9.44C1.32 9.54 1.46 9.6 1.6 9.6H9.07C9.21 9.6 9.34 9.54 9.44 9.44C9.54 9.34 9.6 9.21 9.6 9.07V6.4C9.6 6.11 9.84 5.87 10.13 5.87C10.43 5.87 10.67 6.11 10.67 6.4V9.07C10.67 9.49 10.5 9.9 10.2 10.2C9.9 10.5 9.49 10.67 9.07 10.67H1.6C1.18 10.67 0.77 10.5 0.47 10.2C0.17 9.9 0 9.49 0 9.07ZM10.67 3.2C10.67 3.49 10.43 3.73 10.13 3.73C9.84 3.73 9.6 3.49 9.6 3.2V1.82L6.51 4.91C6.3 5.12 5.96 5.12 5.76 4.91C5.55 4.7 5.55 4.36 5.76 4.16L8.85 1.07H7.47C7.17 1.07 6.93 0.83 6.93 0.53C6.93 0.24 7.17 0 7.47 0H10.13C10.43 0 10.67 0.24 10.67 0.53V3.2Z" fill="#555"/></svg>
          엑셀다운로드
        </button>
      </div>
    </div>
  );
}
