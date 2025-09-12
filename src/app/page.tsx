"use client";
import SectionFadeIn from "@/components/ui/SectionFadeIn";
import CountUp from "@/components/ui/CountUp";
import PortfolioModal from "@/components/ui/PortfolioModal";
import ContactForm from "@/components/forms/ContactForm";
import NoticeAdminForm from "@/components/forms/NoticeAdminForm";
import NoticeList from "@/components/forms/NoticeList";
import LangToggle from "@/components/ui/LangToggle";
import React, { useState } from "react";
      {/* 푸터 */}
      <footer className="w-full bg-blue-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/file.svg" alt="만송시스템 로고" className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight">만송시스템</span>
            </div>
            <p className="text-sm text-blue-100 mb-1">대표자: 임영무</p>
            <p className="text-sm text-blue-100 mb-1">사업자등록번호: 479-88-01974</p>
            <p className="text-sm text-blue-100 mb-1">업종: 컴퓨터 및 주변장치, 소프트웨어 도매업</p>
            <p className="text-sm text-blue-100">경기도 성남시 분당구 판교로 123</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-blue-200">Contact</h4>
            <p className="text-sm text-blue-100 mb-1">이메일: <a href="mailto:info@mansong.co.kr" className="underline">info@mansong.co.kr</a></p>
            <p className="text-sm text-blue-100">전화: <a href="tel:031-123-4567" className="underline">031-123-4567</a></p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-blue-200">바로가기</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline text-blue-100">회사소개</a></li>
              <li><a href="#" className="hover:underline text-blue-100">서비스</a></li>
              <li><a href="#" className="hover:underline text-blue-100">포트폴리오</a></li>
              <li><a href="#" className="hover:underline text-blue-100">문의하기</a></li>
            </ul>
          </div>
        </div>
        {/* 대표/팀/조직도/채용 안내 */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">만송시스템 팀 & 채용</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/window.svg" alt="대표자" className="w-20 h-20 rounded-full border-4 border-blue-200 mb-3" />
              <h4 className="text-lg font-bold text-blue-800 mb-1">임영무 대표</h4>
              <span className="text-xs text-blue-600 mb-2">CEO / Founder</span>
              <p className="text-gray-600 text-sm text-center">공장 자동화 및 관제 시스템 분야 20년 경력, 혁신과 신뢰의 리더십</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/file.svg" alt="팀원" className="w-20 h-20 rounded-full border-4 border-blue-200 mb-3" />
              <h4 className="text-lg font-bold text-blue-800 mb-1">개발팀</h4>
              <span className="text-xs text-blue-600 mb-2">ENGINEERING</span>
              <p className="text-gray-600 text-sm text-center">스마트팩토리, IoT, 클라우드, B2B 솔루션 전문 개발자 그룹</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/file.svg" alt="팀원" className="w-20 h-20 rounded-full border-4 border-blue-200 mb-3" />
              <h4 className="text-lg font-bold text-blue-800 mb-1">프로젝트/운영팀</h4>
              <span className="text-xs text-blue-600 mb-2">PM / SUPPORT</span>
              <p className="text-gray-600 text-sm text-center">프로젝트 관리, 고객 지원, 현장 운영 및 품질관리 전문가</p>
            </div>
          </div>
          {/* 조직도(샘플) */}
          <div className="flex flex-col items-center mb-12">
            <h4 className="text-lg font-bold text-blue-800 mb-4">조직도</h4>
            <img src="/orgchart.svg" alt="조직도" className="w-full max-w-xl border rounded-lg shadow" />
          </div>
          {/* 채용 안내 */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h4 className="text-lg font-bold text-blue-800 mb-2">함께 성장할 인재를 찾습니다</h4>
            <p className="text-gray-700 mb-4">스마트팩토리, IoT, B2B 소프트웨어 분야에 열정 있는 인재를 상시 채용합니다.<br/>이력서 및 포트폴리오를 <a href="mailto:recruit@mansong.co.kr" className="text-blue-700 underline">recruit@mansong.co.kr</a>로 보내주세요.</p>
            <a href="mailto:recruit@mansong.co.kr" className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition">채용 문의하기</a>
          </div>
        </div>
        <div className="bg-blue-950 text-center text-xs text-blue-200 py-4">© 2021-2025 Mansong System. All rights reserved.</div>
      </footer>
      {/* 회사 정보/연혁/비전 섹션 */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-10 text-center tracking-tight">회사 정보 & 연혁</h2>
        {/* 대표 인사말 */}
        <div className="bg-blue-50 rounded-xl p-8 mb-10 shadow flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img src="/window.svg" alt="대표자" className="w-24 h-24 rounded-full border-4 border-blue-200" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">임영무 대표 인사말</h3>
            <p className="text-gray-700 text-base">만송시스템은 공장 자동화와 관제 시스템 분야에서 최고의 기술력과 신뢰를 바탕으로 고객의 성공을 함께 만들어갑니다. 앞으로도 혁신과 도전으로 더 나은 가치를 제공하겠습니다.</p>
          </div>
        </div>
          {/* 배경 타원 패턴 */}
          <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100"><ellipse cx="200" cy="50" rx="180" ry="40" /></svg>
        {/* 연혁 타임라인 */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold text-blue-700 mb-4">주요 연혁</h4>
          <ol className="relative border-l-4 border-blue-200 pl-8 space-y-8">
            <li>
              <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-400">2021.03</span>
              <span className="ml-3 text-base text-blue-900 font-bold">만송시스템 설립</span>
            </li>
            <li>
              <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-400">2022.07</span>
              <span className="ml-3 text-base text-blue-900 font-bold">스마트팩토리 관제 시스템 1차 구축</span>
            </li>
            <li>
              <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-400">2023.05</span>
              <span className="ml-3 text-base text-blue-900 font-bold">B2B 맞춤 소프트웨어 개발 사업 확대</span>
            </li>
            <li>
              <div className="absolute -left-5 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-400">2024.11</span>
              <span className="ml-3 text-base text-blue-900 font-bold">주문 관리 시스템 고도화</span>
            </li>
          </ol>
        </div>
        {/* 비전/미션 카드 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8 border-t-4 border-blue-500">
            <h4 className="text-lg font-bold text-blue-800 mb-2">비전</h4>
            <p className="text-gray-700">스마트 공장 자동화와 관제 시스템 분야의 선도 기업으로 성장하여, 고객의 혁신과 미래를 함께하는 파트너가 되겠습니다.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 border-t-4 border-blue-700">
            <h4 className="text-lg font-bold text-blue-800 mb-2">미션</h4>
            <p className="text-gray-700">최고의 기술력과 신뢰를 바탕으로, 현장 중심의 맞춤형 솔루션을 제공하여 고객의 경쟁력 강화에 기여합니다.</p>
          </div>
        </div>
      </section>
      {/* 문의/상담/견적 요청 폼 섹션 */}
      <section className="max-w-2xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">문의/상담/견적 요청</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="mb-6 text-center">
            <p className="text-gray-700 text-base mb-2">궁금하신 점이나 견적 요청은 아래 폼 또는 연락처로 문의해 주세요.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-sm text-blue-700 font-semibold">
              <span><svg className="inline w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" /></svg> 이메일: <a href="mailto:info@mansong.co.kr" className="underline">info@mansong.co.kr</a></span>
              <span><svg className="inline w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> 전화: <a href="tel:031-123-4567" className="underline">031-123-4567</a></span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      {/* 공지사항/뉴스/업데이트 섹션 */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-10 text-center tracking-tight">공지사항 & 뉴스</h2>
        {/* 관리자 등록 폼 (실제 연동 시 관리자 인증 필요) */}
        <NoticeAdminForm />
        {/* 실시간 목록 조회/관리 */}
        <NoticeList admin />
      </section>

export default function Home() {
  const [lang, setLang] = useState<'ko' | 'en'>("ko");

  // 다국어 텍스트 객체
  const t = {
    ko: {
      heroTitle: "만송시스템",
      heroDesc: "공장 자동화와 관제 시스템의 미래를 만듭니다",
      orderBtn: "온라인 주문 접수",
      adminBtn: "관리자 대시보드",
      counter1: "고객사",
      counter2: "프로젝트",
      counter3: "누적 주문",
      trust: "신뢰받는 파트너",
      trust1: "ISO 9001 인증",
      trust2: "스마트팩토리 대상",
      trust3: "기술혁신상",
      serviceTitle: "주요 서비스",
      service1: "공장 자동화 모니터링",
      service1desc: "실시간 데이터 수집 및 시각화, 현장 상태 원격 모니터링",
      service2: "관제 시스템 구축",
      service2desc: "스마트 팩토리, 맞춤형 관제 솔루션, 유지보수 지원",
      service3: "B2B 기술지원",
      service3desc: "기업 맞춤 소프트웨어 개발 및 기술 컨설팅",
      orderStats: "월별 주문 추이",
      orderStatsNote: "* 실제 데이터 연동 가능",
      portfolioTitle: "주요 고객사 & 포트폴리오",
      portfolio1: "스마트 공장 관제 시스템 구축",
      portfolio2: "공장 자동화 모니터링 솔루션",
      portfolio3: "B2B 맞춤 소프트웨어 개발",
      contactTitle: "문의/상담/견적 요청",
      contactDesc: "궁금하신 점이나 견적 요청은 아래 폼 또는 연락처로 문의해 주세요.",
      contactEmail: "이메일",
      contactPhone: "전화",
      noticeTitle: "공지사항 & 뉴스",
      teamTitle: "만송시스템 팀 & 채용",
      ceo: "임영무 대표",
      ceoRole: "CEO / Founder",
      ceoDesc: "공장 자동화 및 관제 시스템 분야 20년 경력, 혁신과 신뢰의 리더십",
      devTeam: "개발팀",
      devRole: "ENGINEERING",
      devDesc: "스마트팩토리, IoT, 클라우드, B2B 솔루션 전문 개발자 그룹",
      pmTeam: "프로젝트/운영팀",
      pmRole: "PM / SUPPORT",
      pmDesc: "프로젝트 관리, 고객 지원, 현장 운영 및 품질관리 전문가",
      orgChart: "조직도",
      recruitTitle: "함께 성장할 인재를 찾습니다",
      recruitDesc: "스마트팩토리, IoT, B2B 소프트웨어 분야에 열정 있는 인재를 상시 채용합니다.\n이력서 및 포트폴리오를 ",
      recruitBtn: "채용 문의하기",
      companyInfo: "회사 정보 & 연혁",
      ceoMsg: "임영무 대표 인사말",
      ceoMsgDesc: "만송시스템은 공장 자동화와 관제 시스템 분야에서 최고의 기술력과 신뢰를 바탕으로 고객의 성공을 함께 만들어갑니다. 앞으로도 혁신과 도전으로 더 나은 가치를 제공하겠습니다.",
      history: "주요 연혁",
      vision: "비전",
      visionDesc: "스마트 공장 자동화와 관제 시스템 분야의 선도 기업으로 성장하여, 고객의 혁신과 미래를 함께하는 파트너가 되겠습니다.",
      mission: "미션",
      missionDesc: "최고의 기술력과 신뢰를 바탕으로, 현장 중심의 맞춤형 솔루션을 제공하여 고객의 경쟁력 강화에 기여합니다.",
      contactSectionTitle: "문의 및 상담",
      contactSectionDesc: "프로젝트 문의, 견적 요청, 기술 상담 등 언제든 연락주세요.",
      contactSectionBtn: "이메일 문의하기",
      contactSectionPhone: "대표전화: 02-1234-5678",
      contactSectionAddr: "주소: 서울특별시 금천구 가산디지털1로 168 우림라이온스밸리",
      footerCompany: "만송시스템",
      footerCopyright: "© 2021-2025 Mansong System. All rights reserved.",
      footerBiz: "사업자등록번호: 479-88-01974",
    },
    en: {
      heroTitle: "Mansong System",
      heroDesc: "Shaping the Future of Factory Automation & Control Systems",
      orderBtn: "Order Online",
      adminBtn: "Admin Dashboard",
      counter1: "Clients",
      counter2: "Projects",
      counter3: "Orders",
      trust: "Trusted Partners",
      trust1: "ISO 9001 Certified",
      trust2: "Smart Factory Award",
      trust3: "Tech Innovation Prize",
      serviceTitle: "Our Services",
      service1: "Factory Automation Monitoring",
      service1desc: "Real-time data collection & visualization, remote site monitoring",
      service2: "Control System Integration",
      service2desc: "Smart factory, custom control solutions, maintenance support",
      service3: "B2B Tech Support",
      service3desc: "Custom software development & consulting for enterprises",
      orderStats: "Monthly Order Trends",
      orderStatsNote: "* Actual data integration available",
      portfolioTitle: "Key Clients & Portfolio",
      portfolio1: "Smart Factory Control System",
      portfolio2: "Factory Automation Monitoring Solution",
      portfolio3: "Custom B2B Software Development",
      contactTitle: "Contact / Quote Request",
      contactDesc: "For inquiries or quotes, please use the form below or contact us directly.",
      contactEmail: "Email",
      contactPhone: "Phone",
      noticeTitle: "Notices & News",
      teamTitle: "Mansong Team & Careers",
      ceo: "Youngmoo Lim, CEO",
      ceoRole: "CEO / Founder",
      ceoDesc: "20+ years in automation & control, leadership in innovation & trust",
      devTeam: "Engineering Team",
      devRole: "ENGINEERING",
      devDesc: "Experts in smart factory, IoT, cloud, B2B solutions",
      pmTeam: "Project/Operations Team",
      pmRole: "PM / SUPPORT",
      pmDesc: "Project management, customer support, field ops & quality",
      orgChart: "Organization Chart",
      recruitTitle: "We're Hiring! Grow With Us",
      recruitDesc: "We're always looking for passionate talent in smart factory, IoT, and B2B software.\nSend your resume/portfolio to ",
      recruitBtn: "Contact for Careers",
      companyInfo: "Company Info & History",
      ceoMsg: "CEO Message",
      ceoMsgDesc: "Mansong System leads your success with top technology and trust in factory automation and control. We will continue to deliver greater value through innovation.",
      history: "Key Milestones",
      vision: "Vision",
      visionDesc: "To become a leader in smart factory automation & control, partnering for customer innovation & future.",
      mission: "Mission",
      missionDesc: "With top technology and trust, we deliver field-centric, tailored solutions to boost customer competitiveness.",
      contactSectionTitle: "Contact & Consultation",
      contactSectionDesc: "For project inquiries, quotes, or technical advice, contact us anytime.",
      contactSectionBtn: "Email Inquiry",
      contactSectionPhone: "Main: +82-2-1234-5678",
      contactSectionAddr: "Address: 168 Gasan Digital 1-ro, Geumcheon-gu, Seoul, Korea",
      footerCompany: "Mansong System",
      footerCopyright: "© 2021-2025 Mansong System. All rights reserved.",
      footerBiz: "Biz Reg: 479-88-01974",
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 언어 토글 버튼을 상단에 고정 배치 */}
      <div className="fixed top-6 right-6 z-50">
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* Hero Section */}
      <SectionFadeIn>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white py-28 px-4 flex flex-col items-center justify-center min-h-[480px]">
          {/* 배경 그래픽 */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute left-1/2 top-0 -translate-x-1/2 opacity-30" width="1200" height="480" fill="none" viewBox="0 0 1200 480">
              <ellipse cx="600" cy="240" rx="600" ry="240" fill="url(#g1)" />
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1200" y2="480" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl tracking-tight animate-fade-in">{t[lang].heroTitle}</h1>
            <p className="text-2xl md:text-3xl mb-8 font-semibold drop-shadow-lg animate-fade-in delay-100">{t[lang].heroDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in delay-200">
              <a href="/order" className="px-10 py-4 bg-white text-blue-700 rounded-xl font-bold shadow-lg hover:bg-blue-100 transition text-lg">{t[lang].orderBtn}</a>
              <a href="/admin" className="px-10 py-4 bg-blue-900 text-white rounded-xl font-bold shadow-lg hover:bg-blue-800 transition text-lg">{t[lang].adminBtn}</a>
            </div>
          </div>
          {/* 실시간 카운터 애니메이션 */}
          <div className="relative z-10 max-w-3xl w-full mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white drop-shadow-lg"><CountUp end={37} duration={1200} /></span>
              <span className="mt-2 text-lg font-semibold text-blue-100">{t[lang].counter1}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white drop-shadow-lg"><CountUp end={62} duration={1200} /></span>
              <span className="mt-2 text-lg font-semibold text-blue-100">{t[lang].counter2}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white drop-shadow-lg"><CountUp end={1248} duration={1200} /></span>
              <span className="mt-2 text-lg font-semibold text-blue-100">{t[lang].counter3}</span>
            </div>
          </div>
          {/* 아래로 스크롤 유도 애니메이션 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {/* 신뢰 요소: 고객사 로고, 인증서, 수상 이력 */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">{t[lang].trust}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <img src="/logo1.svg" alt="고객사1" className="h-10 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logo2.svg" alt="고객사2" className="h-10 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logo3.svg" alt="고객사3" className="h-10 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logo4.svg" alt="고객사4" className="h-10 w-auto grayscale hover:grayscale-0 transition" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <img src="/award1.svg" alt="인증서1" className="h-12 w-auto mb-2" />
                <span className="text-xs text-gray-500">{t[lang].trust1}</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/award2.svg" alt="수상1" className="h-12 w-auto mb-2" />
                <span className="text-xs text-gray-500">{t[lang].trust2}</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/award3.svg" alt="수상2" className="h-12 w-auto mb-2" />
                <span className="text-xs text-gray-500">{t[lang].trust3}</span>
              </div>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 서비스/솔루션 섹션 */}
      <SectionFadeIn>
        <section className="relative max-w-6xl mx-auto py-20 px-4 overflow-hidden">
          {/* 배경 패턴 */}
          <svg className="absolute -top-16 -left-16 w-72 h-72 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" /></svg>
          <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14 tracking-tight">{t[lang].serviceTitle}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* 카드 1 */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="bg-blue-100 rounded-full p-4 mb-5 group-hover:bg-blue-200 transition">
                <img src="/globe.svg" alt="공장 모니터링" className="w-12 h-12" />
              </div>
              <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-2 tracking-widest">SMART FACTORY</span>
              <h3 className="text-2xl font-bold mb-2 text-blue-800">{t[lang].service1}</h3>
              <p className="text-gray-600 mb-2">{t[lang].service1desc}</p>
            </div>
            {/* 카드 2 */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="bg-blue-100 rounded-full p-4 mb-5 group-hover:bg-blue-200 transition">
                <img src="/window.svg" alt="관제 시스템" className="w-12 h-12" />
              </div>
              <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-2 tracking-widest">CONTROL SYSTEM</span>
              <h3 className="text-2xl font-bold mb-2 text-blue-800">{t[lang].service2}</h3>
              <p className="text-gray-600 mb-2">{t[lang].service2desc}</p>
            </div>
            {/* 카드 3 */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="bg-blue-100 rounded-full p-4 mb-5 group-hover:bg-blue-200 transition">
                <img src="/vercel.svg" alt="B2B 기술지원" className="w-12 h-12" />
              </div>
              <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-2 tracking-widest">B2B SUPPORT</span>
              <h3 className="text-2xl font-bold mb-2 text-blue-800">{t[lang].service3}</h3>
              <p className="text-gray-600 mb-2">{t[lang].service3desc}</p>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 실시간/월별 주문 통계 (샘플) */}
        <SectionFadeIn>
          <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 border-t overflow-hidden">
            {/* 배경 그래프 패턴 */}
            <svg className="absolute -bottom-10 right-0 w-96 h-32 opacity-10 text-blue-300 pointer-events-none" fill="none" viewBox="0 0 400 100"><polyline points="0,80 50,60 100,90 150,40 200,70 250,30 300,80 350,50 400,90" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center tracking-tight">월별 주문 추이</h2>
          <div className="flex items-end gap-8 h-56 w-full justify-center">
            {[3, 5, 7, 4, 6, 8].map((count, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group">
                <div className="relative flex flex-col items-center">
                  <div style={{height: `${count * 20}px`}} className="w-12 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-xl shadow-lg group-hover:scale-105 transition-transform duration-300"></div>
                  <span className="absolute -top-8 text-lg font-bold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{count}건</span>
                </div>
                <span className="mt-4 text-xs text-gray-500 font-semibold">2025-0{4+i}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold rounded px-4 py-2">* 실제 데이터 연동 가능</span>
          </div>
        </div>
      </section>
      </SectionFadeIn>

      {/* 포트폴리오/고객사 섹션 (샘플) */}
        <SectionFadeIn>
          <section className="relative max-w-6xl mx-auto py-20 px-4 overflow-hidden">
            {/* 배경 사각형 패턴 */}
            <svg className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100"><rect x="0" y="20" width="80" height="60" rx="16" /><rect x="100" y="10" width="80" height="80" rx="16" /><rect x="200" y="30" width="80" height="60" rx="16" /><rect x="300" y="0" width="80" height="100" rx="16" /></svg>
        <h2 className="text-4xl font-extrabold text-blue-900 mb-14 text-center tracking-tight">주요 고객사 & 포트폴리오</h2>
        {/* 포트폴리오 상세 모달 상태 및 데이터 */}
        {(() => {
          const portfolioList = [
            {
              logo: "/file.svg",
              name: "(주)스마트팩토리",
              label: "SMART FACTORY",
              desc: "스마트 공장 관제 시스템 구축",
              detail: "스마트팩토리 전사 관제 시스템 구축\n- 실시간 설비 모니터링\n- 데이터 시각화 및 알람\n- 현장 맞춤 대시보드 제공",
            },
            {
              logo: "/file.svg",
              name: "(주)오토메이션",
              label: "AUTOMATION",
              desc: "공장 자동화 모니터링 솔루션",
              detail: "공장 자동화 모니터링 솔루션 구축\n- IoT 센서 연동\n- 생산/품질 데이터 통합\n- 관리자 알림 시스템",
            },
            {
              logo: "/file.svg",
              name: "(주)테크윈",
              label: "B2B SOFTWARE",
              desc: "B2B 맞춤 소프트웨어 개발",
              detail: "B2B 기업 맞춤 소프트웨어 개발\n- ERP/SCM 연동\n- 클라우드 기반 서비스\n- 기술 컨설팅 지원",
            },
          ];
          const [modalOpen, setModalOpen] = useState(false);
          const [modalData, setModalData] = useState<any>(null);
          return (
            <>
              <PortfolioModal open={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
              <div className="grid md:grid-cols-3 gap-10">
                {portfolioList.map((item, idx) => (
                  <div
                    key={item.name}
                    className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => { setModalData(item); setModalOpen(true); }}
                  >
                    <div className="bg-blue-50 rounded-full p-4 mb-5 group-hover:bg-blue-100 transition">
                      <img src={item.logo} alt={item.name} className="w-12 h-12" />
                    </div>
                    <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-2 tracking-widest">{item.label}</span>
                    <h3 className="text-xl font-bold mb-1 text-blue-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </section>
      </SectionFadeIn>

      {/* 문의/상담 섹션 */}
        <SectionFadeIn>
          <section className="relative bg-blue-50 py-16 px-4 border-t overflow-hidden">
            {/* 배경 점 패턴 */}
            <svg className="absolute -top-10 right-0 w-40 h-40 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 100 100"><circle cx="20" cy="20" r="6" /><circle cx="60" cy="40" r="6" /><circle cx="80" cy="80" r="6" /><circle cx="40" cy="70" r="6" /></svg>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">문의 및 상담</h2>
          <p className="text-gray-700 mb-6">프로젝트 문의, 견적 요청, 기술 상담 등 언제든 연락주세요.</p>
          <a href="mailto:info@mansong.co.kr" className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition">이메일 문의하기</a>
          <div className="mt-8 text-gray-600 text-sm">
            <div>대표전화: 02-1234-5678</div>
            <div>주소: 서울특별시 금천구 가산디지털1로 168 우림라이온스밸리</div>
          </div>
        </div>
      </section>
      </SectionFadeIn>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold">만송시스템</div>
          <div className="text-sm">© 2021-2025 Mansong System. All rights reserved.</div>
          <div className="text-sm">사업자등록번호: 479-88-01974</div>
        </div>
      </footer>
    </main>
  );
}