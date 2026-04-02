// ─── 타입 정의 ───

export type SiteType = 'AI 번역' | '통독문서' | '교육센터' | '전시/행사' | '시험사이트';
export type MemberType = '일반회원' | '정식회원' | '기업회원' | '전문가' | '회원탈퇴';
export type SubscriptionPlan = '프리미엄' | '스탠다드' | '베이직' | 'free' | null;
export type ChannelType = '네이버' | '카카오' | '구글' | '애플' | '이메일';
export type DeviceType = 'PC' | 'Mobile' | 'Tablet';
export type TabType = '전체' | '회원관리' | '활동관리' | '결제관리' | '1:1 문의 관리' | '통계';
export type GenderType = 'M' | 'F';
export type ExpertLevel = 'A' | 'B' | 'C' | 'D' | 'E';
export type ServiceMode = '대면' | '화상' | '채팅' | '비대면';
export type ConversionType = 'STT' | 'TTS' | 'TTT' | 'STS';
export type ServiceType = 'AI번역' | '매칭' | '설문' | '프롬프트' | '문서편집' | '영상편집' | '음악편집';
export type MatchingStatus = '매칭대기' | '매칭완료' | '진행중' | '완료' | '취소';
export type ExamSubject = 'AI번역' | '프롬프트' | '윤리시험' | '자격시험';
export type ExamGrade = '전문1급' | '전문2급' | '교육1급' | '교육2급' | '교육3급';
export type PassStatus = '합격' | '불합격' | '채점중' | '미응시';
export type PaymentCategory = '1회결제' | '구독' | '포인트충전' | '시험응시료';
export type RefundStatus = '환불없음' | '환불요청' | '환불완료' | '환불거절';
export type InquiryCategory = '결제문의' | '오류신고' | '환불요청' | '서비스문의' | '시험문의' | '기타';
export type InquiryStatus = '답변완료' | '대기중' | '처리중' | '';
export type ApprovalStatus = '승인' | '대기' | '반려';

// ─── 메인 인터페이스 ───

export interface MemberData {
  id: number;

  // ── 1. 회원 기본 (Members) ──
  managementNumber: string;
  site: SiteType;
  memberType: MemberType;
  subscriptionPlan: SubscriptionPlan;
  name: string;
  age: number;
  birthDate: string;
  gender: GenderType;
  email: string;
  phone: string;
  city: string;
  district: string;
  isGroup: boolean;
  groupName: string;
  businessNumber: string;
  joinDate: string;
  joinChannel: ChannelType;
  device: DeviceType;
  lastLogin: string;
  stayTime: string;
  photo: string;
  notificationSms: boolean;
  notificationEmail: boolean;
  marketingConsent: boolean;

  // ── 2. 전문가 (Experts) ──
  isExpert: boolean;
  expertApproval: ApprovalStatus;
  expertApprovalDate: string;
  expertLevel: ExpertLevel;
  expertServices: ServiceMode[];
  expertAvailableTime: string;
  expertRating: number;
  expertBankName: string;
  expertAccountNumber: string;
  expertSpecialty: string;

  // ── 3. 활동/매칭 (Activities) ──
  totalUsage: number;
  usedCount: number;
  lastActivity: string;
  activityType: string;
  serviceType: ServiceType;
  conversionType: ConversionType;
  languagePair: string;
  matchingStatus: MatchingStatus;
  matchedExpertName: string;
  requestDate: string;
  completionDate: string;
  workUnit: string;
  finalServiceAmount: number;
  fileCount: number;
  aiUsageCount: number;
  editorUsageCount: number;
  usedAI: string;
  usedEditor: string;

  // ── 4. 시험/평가 (Exams) ──
  hasExam: boolean;
  examSubject: ExamSubject;
  examName: string;
  examGrade: ExamGrade;
  examDate: string;
  examRegion: string;
  examFee: number;
  examScore: number;
  passingScore: number;
  passStatus: PassStatus;
  feedbackRequested: boolean;
  certificateStatus: string;

  // ── 5. 결제/정산 (Payments) ──
  paymentStatus: '결제완료' | '미결제' | '환불' | '구독중' | '';
  paymentCategory: PaymentCategory;
  paymentAmount: number;
  discountRate: number;
  finalPaymentAmount: number;
  paymentDate: string;
  paymentMethod: string;
  refundStatus: RefundStatus;
  refundReason: string;
  subscriptionStart: string;
  subscriptionEnd: string;
  subscriptionBenefit: string;

  // ── 6. 정산 (전문가용) ──
  settlementAmount: number;
  settlementRate: number;
  settlementDate: string;
  settlementStatus: string;

  // ── 7. 1:1 문의 (Consultings) ──
  inquiryCount: number;
  lastInquiry: string;
  inquiryCategory: InquiryCategory;
  inquiryStatus: InquiryStatus;
  inquiryContent: string;
  adminMemo: string;
  answerDate: string;
}

// ─── 상수 ───

export const channelColors: Record<ChannelType, string> = {
  '네이버': '#43EB29',
  '카카오': '#FFC31F',
  '구글': '#DC3D3D',
  '애플': '#555555',
  '이메일': '#0088FF',
};

export const siteShortName: Record<SiteType, string> = {
  'AI 번역': '번역',
  '통독문서': '통독',
  '교육센터': '교육',
  '전시/행사': '전시',
  '시험사이트': '시험',
};

export const subscriptionBadgeColor: Record<string, string> = {
  '프리미엄': '#0088ff',
  '스탠다드': '#7c3aed',
  '베이직': '#808080',
};

export const expertLevelColor: Record<ExpertLevel, string> = {
  A: '#DC3D3D',
  B: '#FF8C00',
  C: '#FFC31F',
  D: '#43EB29',
  E: '#0088FF',
};

// ─── API 연동 ───

const API_BASE = '/api';

export async function fetchMembers(): Promise<MemberData[]> {
  const res = await fetch(`${API_BASE}/members`);
  if (!res.ok) throw new Error('Failed to fetch members');
  const rows: { id: number; data: string; created_at: string }[] = await res.json();
  return rows.map(row => ({
    id: row.id,
    ...JSON.parse(row.data),
  }));
}

export async function saveMember(member: MemberData): Promise<void> {
  const { id, ...data } = member;
  if (id) {
    await fetch(`${API_BASE}/members/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } else {
    await fetch(`${API_BASE}/members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }
}

export async function deleteMember(id: number): Promise<void> {
  await fetch(`${API_BASE}/members/${id}`, { method: 'DELETE' });
}

// ─── Seed 데이터 (빈 DB 초기 투입용) ───

export async function seedIfEmpty(): Promise<MemberData[]> {
  const existing = await fetchMembers();
  if (existing.length > 0) return existing;

  // DB가 비어있으면 mock 데이터 생성 후 투입
  const members = generateMockMembers();
  for (const m of members) {
    const { id: _, ...data } = m;
    await fetch(`${API_BASE}/members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }
  return fetchMembers();
}

// ─── 더미 데이터 생성 ───

const names = ['홍길동', '김영희', '박민수', '이수진', '최준혁', '정서연', '오승우', '한지우', '윤태호', '강민지', '서동현', '임수아', '장현우', '배수빈', '조하린'];
const cities = ['서울', '부산', '대전', '인천', '경기', '대구', '광주'];
const districts = ['강남구', '서초구', '해운대구', '남동구', '성남시', '수성구', '서구', '마포구', '용산구', '송파구'];
const sites: SiteType[] = ['AI 번역', '통독문서', '교육센터', '전시/행사', '시험사이트'];
const memberTypes: MemberType[] = ['일반회원', '정식회원', '기업회원', '전문가', '회원탈퇴'];
const channels: ChannelType[] = ['네이버', '카카오', '구글', '애플', '이메일'];
const devices: DeviceType[] = ['PC', 'Mobile', 'Tablet'];
const expertLevels: ExpertLevel[] = ['A', 'B', 'C', 'D', 'E'];
const serviceModes: ServiceMode[] = ['대면', '화상', '채팅', '비대면'];
const serviceTypes: ServiceType[] = ['AI번역', '매칭', '설문', '프롬프트', '문서편집', '영상편집', '음악편집'];
const conversionTypes: ConversionType[] = ['STT', 'TTS', 'TTT', 'STS'];
const langPairs = ['한→영', '영→한', '한→일', '한→중', '다국어'];
const matchingStatuses: MatchingStatus[] = ['매칭대기', '매칭완료', '진행중', '완료', '취소'];
const examSubjects: ExamSubject[] = ['AI번역', '프롬프트', '윤리시험', '자격시험'];
const examGrades: ExamGrade[] = ['전문1급', '전문2급', '교육1급', '교육2급', '교육3급'];
const passStatuses: PassStatus[] = ['합격', '불합격', '채점중', '미응시'];
const payCategories: PaymentCategory[] = ['1회결제', '구독', '포인트충전', '시험응시료'];
const payStatuses: ('결제완료' | '미결제' | '환불' | '구독중' | '')[] = ['결제완료', '미결제', '환불', '구독중', ''];
const refundStatuses: RefundStatus[] = ['환불없음', '환불없음', '환불없음', '환불요청', '환불완료', '환불거절'];
const refundReasons = ['', '', '', '서비스 불만', '단순 변심', '오류 발생', '중복 결제'];
const payMethods = ['신용카드', '계좌이체', '카카오페이', '네이버페이', '토스페이'];
const inquiryCategories: InquiryCategory[] = ['결제문의', '오류신고', '환불요청', '서비스문의', '시험문의', '기타'];
const inquiryStatuses: InquiryStatus[] = ['답변완료', '대기중', '처리중', ''];
const subscriptionPlans: SubscriptionPlan[] = ['프리미엄', '스탠다드', '베이직', 'free', null];
const aiPrograms = ['GPT-4o', 'Claude 3.5', 'Gemini Pro', 'Llama 3', 'DeepL'];
const editors = ['문서에디터', '영상에디터', '음악에디터'];
const banks = ['국민은행', '신한은행', '우리은행', '하나은행', '카카오뱅크', '토스뱅크'];
const specialties = ['영한 통번역 10년', 'AI 프롬프트 전문', '기술문서 번역', '영상 자막 전문', '의료/법률 번역', '교육 콘텐츠 전문'];
const examRegions = ['서울', '부산', '대전', '광주', '제주'];
const certStatuses = ['발급완료', '미발급', '배송중'];
const subBenefits = ['월 10,000자, AI 무제한', '월 5,000자, AI 50회', '월 2,000자, AI 20회'];
const settlementStatuses = ['정산완료', '정산대기', '미정산'];
const inquiryContents = ['결제가 안됩니다', '번역 품질이 낮습니다', '환불 요청드립니다', '기능 오류 발생', '시험 일정 문의', '구독 변경 요청'];
const activityTypes = ['AI번역', '문서편집', '영상편집', '음악편집', '교육수강', '시험응시', '매칭요청'];

function rand<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }
function randN(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randFloat(min: number, max: number, dec: number): number { return parseFloat((Math.random() * (max - min) + min).toFixed(dec)); }
function dateStr(yr = 24, mo?: number, da?: number): string {
  const m = mo ?? randN(1, 12);
  const d = da ?? randN(1, 28);
  return `${yr}.${String(m).padStart(2, '0')}.${String(d).padStart(2, '0')}`;
}

function generateMember(id: number): MemberData {
  const mt = id <= 5 ? memberTypes[id - 1] : rand(memberTypes);
  const gender: GenderType = Math.random() > 0.5 ? 'M' : 'F';
  const age = randN(20, 58);
  const birthYear = 2026 - age;
  const hasCity = Math.random() > 0.15;
  const isGrp = mt === '기업회원' ? true : Math.random() > 0.8;
  const channel = rand(channels);
  const isExpert = mt === '전문가';
  const hasSub = mt !== '회원탈퇴' && Math.random() > 0.3;
  const sub: SubscriptionPlan = mt === '회원탈퇴' ? null : (hasSub ? rand(['프리미엄', '스탠다드', '베이직'] as SubscriptionPlan[]) : 'free');
  const pStatus = mt === '회원탈퇴' ? '' as const : rand(payStatuses);
  const hasExam = Math.random() > 0.5;
  const examScore = randN(30, 100);
  const passingScore = rand([60, 70, 80]);
  const iCat = rand(inquiryCategories);
  const iStat = rand(inquiryStatuses);
  const hasInquiry = Math.random() > 0.4;
  const serviceT = rand(serviceTypes);
  const mStatus = rand(matchingStatuses);

  const member: MemberData = {
    id,
    managementNumber: `UI24${String(randN(10, 99))}${String(id).padStart(4, '0')}`,
    site: rand(sites),
    memberType: mt,
    subscriptionPlan: sub,
    name: rand(names),
    age,
    birthDate: `${birthYear}.${String(randN(1, 12)).padStart(2, '0')}.${String(randN(1, 28)).padStart(2, '0')}`,
    gender,
    email: `user${id}@${rand(['gmail.com', 'naver.com', 'kakao.com', 'daum.net'])}`,
    phone: Math.random() > 0.1 ? `010-${String(randN(1000, 9999))}-${String(randN(1000, 9999))}` : '',
    city: hasCity ? rand(cities) : '',
    district: hasCity ? rand(districts) : '',
    isGroup: isGrp,
    groupName: isGrp ? rand(['삼성', 'LG', '현대', 'SK', 'CJ', '롯데', '카카오', '네이버']) : '',
    businessNumber: mt === '기업회원' ? `${randN(100, 999)}-${randN(10, 99)}-${String(randN(10000, 99999))}` : '',
    joinDate: dateStr(),
    joinChannel: channel,
    device: rand(devices),
    lastLogin: `${dateStr()} ${rand(['월', '화', '수', '목', '금', '토', '일'])}`,
    stayTime: `${randN(1, 120)}m ${randN(0, 59)}s`,
    photo: Math.random() > 0.35 ? `img_${String(id).padStart(3, '0')}` : '',
    notificationSms: Math.random() > 0.4,
    notificationEmail: Math.random() > 0.4,
    marketingConsent: Math.random() > 0.45,
    isExpert,
    expertApproval: isExpert ? rand(['승인', '대기', '반려'] as ApprovalStatus[]) : '대기',
    expertApprovalDate: isExpert ? dateStr() : '',
    expertLevel: isExpert ? rand(expertLevels) : 'E',
    expertServices: isExpert ? [rand(serviceModes), rand(serviceModes)].filter((v, i, a) => a.indexOf(v) === i) : [],
    expertAvailableTime: isExpert ? `${rand(['평일', '주말', '전일'])} ${randN(9, 11)}:00~${randN(17, 22)}:00` : '',
    expertRating: isExpert ? randFloat(2.5, 5.0, 1) : 0,
    expertBankName: isExpert ? rand(banks) : '',
    expertAccountNumber: isExpert ? `${randN(100, 999)}-${randN(100000, 999999)}-${randN(10, 99)}-${randN(100, 999)}` : '',
    expertSpecialty: isExpert ? rand(specialties) : '',
    totalUsage: randN(50, 8000),
    usedCount: randN(0, 500),
    lastActivity: dateStr(),
    activityType: rand(activityTypes),
    serviceType: serviceT,
    conversionType: rand(conversionTypes),
    languagePair: rand(langPairs),
    matchingStatus: mStatus,
    matchedExpertName: mStatus === '매칭완료' || mStatus === '진행중' || mStatus === '완료' ? rand(names) : '',
    requestDate: dateStr(),
    completionDate: mStatus === '완료' ? dateStr() : '',
    workUnit: rand(['500자', '1,000자', '2,000자', '1시간', '30분', '페이지당']),
    finalServiceAmount: randN(1, 80) * 10000,
    fileCount: randN(0, 60),
    aiUsageCount: randN(0, 300),
    editorUsageCount: randN(0, 150),
    usedAI: rand(aiPrograms),
    usedEditor: rand(editors),
    hasExam,
    examSubject: hasExam ? rand(examSubjects) : 'AI번역',
    examName: hasExam ? `제${randN(1, 20)}회 ${rand(['AI번역능력', '프롬프트자격', '윤리검정', 'AI활용'])} 시험` : '',
    examGrade: hasExam ? rand(examGrades) : '교육3급',
    examDate: hasExam ? dateStr() : '',
    examRegion: hasExam ? rand(examRegions) : '',
    examFee: hasExam ? rand([30000, 50000, 70000, 100000]) : 0,
    examScore: hasExam ? examScore : 0,
    passingScore: hasExam ? passingScore : 0,
    passStatus: hasExam ? (examScore >= passingScore ? '합격' : rand(passStatuses)) : '미응시',
    feedbackRequested: hasExam && Math.random() > 0.6,
    certificateStatus: hasExam && examScore >= passingScore ? rand(certStatuses) : '미발급',
    paymentStatus: pStatus,
    paymentCategory: pStatus ? rand(payCategories) : '1회결제',
    paymentAmount: pStatus === '결제완료' || pStatus === '구독중' ? randN(1, 100) * 10000 : 0,
    discountRate: Math.random() > 0.6 ? rand([5, 10, 15, 20, 30]) : 0,
    finalPaymentAmount: 0,
    paymentDate: pStatus ? dateStr() : '',
    paymentMethod: pStatus ? rand(payMethods) : '',
    refundStatus: pStatus === '환불' ? rand(['환불요청', '환불완료'] as RefundStatus[]) : '환불없음',
    refundReason: pStatus === '환불' ? rand(refundReasons.filter(r => r)) : '',
    subscriptionStart: sub && sub !== 'free' ? dateStr(24, 1) : '',
    subscriptionEnd: sub && sub !== 'free' ? dateStr(24, 12) : '',
    subscriptionBenefit: sub && sub !== 'free' ? rand(subBenefits) : '',
    settlementAmount: isExpert ? randN(10, 300) * 10000 : 0,
    settlementRate: isExpert ? rand([60, 70, 80, 85]) : 0,
    settlementDate: isExpert && Math.random() > 0.3 ? dateStr() : '',
    settlementStatus: isExpert ? rand(settlementStatuses) : '미정산',
    inquiryCount: hasInquiry ? randN(1, 15) : 0,
    lastInquiry: hasInquiry ? dateStr() : '',
    inquiryCategory: hasInquiry ? iCat : '기타',
    inquiryStatus: hasInquiry ? iStat : '',
    inquiryContent: hasInquiry ? rand(inquiryContents) : '',
    adminMemo: hasInquiry && iStat === '답변완료' ? rand(['처리 완료', '환불 진행됨', '기능 수정 예정', '안내 완료']) : '',
    answerDate: hasInquiry && iStat === '답변완료' ? dateStr() : '',
  };

  // finalPaymentAmount 계산
  const discount = member.paymentAmount * (member.discountRate / 100);
  member.finalPaymentAmount = member.paymentAmount - discount;

  return member;
}

function generateMockMembers(): MemberData[] {
  return Array.from({ length: 45 }, (_, i) => generateMember(i + 1));
}

// 편의를 위해 mock 데이터도 export (개발/테스트용)
export const mockMembers: MemberData[] = generateMockMembers();
