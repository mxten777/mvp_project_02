"use client";
import SectionFadeIn from "@/components/ui/SectionFadeIn";
import CountUp from "@/components/ui/CountUp";
import PortfolioModal from "@/components/ui/PortfolioModal";
import ContactForm from "@/components/forms/ContactForm";
import NoticeAdminForm from "@/components/forms/NoticeAdminForm";
import NoticeList from "@/components/forms/NoticeList";
import LangToggle from "@/components/ui/LangToggle";
import React, { useState } from "react";

export default function Page() {
  // 언어 상태 설정
  const [lang, setLang] = useState<"ko" | "en">("ko");
  
  // 다국어 텍스트 설정
  const t = {
    ko: {
      trust: "신뢰와 함께하는 파트너",
      trust1: "ISO 품질인증",
      trust2: "산업통상자원부 인증",
      trust3: "우수기업 선정",
      counter1: "고객사",
      counter2: "프로젝트",
      counter3: "데이터 포인트",
      serviceTitle: "서비스 & 솔루션",
      service1: "공장 모니터링",
      service1desc: "실시간 공정 모니터링 및 데이터 시각화 솔루션",
      service2: "관제 시스템",
      service2desc: "통합 모니터링 및 제어 시스템 구축",
      service3: "B2B 기술지원",
      service3desc: "맞춤형 소프트웨어 개발 및 기술 컨설팅",
    },
    en: {
      trust: "Trusted Partners",
      trust1: "ISO Certification",
      trust2: "Ministry Approved",
      trust3: "Excellence Award",
      counter1: "Clients",
      counter2: "Projects",
      counter3: "Data Points",
      serviceTitle: "Services & Solutions",
      service1: "Factory Monitoring",
      service1desc: "Real-time process monitoring and data visualization solutions",
      service2: "Control Systems",
      service2desc: "Integrated monitoring and control system implementation",
      service3: "B2B Tech Support",
      service3desc: "Custom software development and technical consulting",
    }
  };

  // 이미지 배열
  const customerImages = [
    "/images/crystal-blue.jpg",
    "/images/KakaoTalk_20250707_221323903.jpg",
    "/images/pattern-01.jpg",
    "/images/sphere-01.jpg",
    "/images/fractal-01.jpg",
    "/images/clock-01.jpg",
    "/images/chart-01.jpg",
    "/images/pinterest.jpg",
    "/images/pattern-02.jpg",
    "/images/pattern-03.jpg",
    "/images/sphere-02.jpg",
    "/images/sphere-03.jpg",
    "/images/fractal-02.jpg",
    "/images/ring-green.jpg",
    "/images/clock-02.jpg",
    "/images/KakaoTalk_20250708_082652734_01.jpg",
    "/images/KakaoTalk_20250708_082652734_02.jpg",
    "/images/KakaoTalk_20250708_082652734_03.jpg",
    "/images/KakaoTalk_20250708_082652734.jpg",
  ];
  
  // 고정 이미지 배열 (hydration 오류 방지)
  const customerFixed = customerImages.slice(0, 4);
  const awardFixed = customerImages.slice(4, 7);
  // 타입 안정성을 위한 키 정의
  const trustKeys = ['trust1', 'trust2', 'trust3'] as const;
  type TrustKey = typeof trustKeys[number];
  
  // 포트폴리오 데이터
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
  
  // 모달 상태 관리
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* 헤더 영역 */}
      <header className="bg-gray-900 text-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col md:flex-row md:justify-between gap-4 sm:gap-6 md:gap-8">
          <div className="mb-4 md:mb-0 md:max-w-sm lg:max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <img src="/file.svg" alt="만송시스템 로고" className="w-10 h-10" />
              <span className="text-xl md:text-2xl font-bold tracking-tight">만송시스템</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-xs sm:text-sm text-blue-100 gap-x-4 gap-y-1">
              <p className="mb-1">대표자: 임영무</p>
              <p className="mb-1">사업자등록번호: 479-88-01974</p>
              <p className="mb-1 col-span-1 sm:col-span-2">업종: 컴퓨터 및 주변장치, 소프트웨어 도매업</p>
              <p className="col-span-1 sm:col-span-2">경기도 성남시 분당구 판교로 123</p>
            </div>
          </div>
          <div className="mb-4 md:mb-0 md:flex-1 md:ml-6 lg:ml-8">
            <h4 className="font-semibold mb-2 text-blue-200 text-base md:text-lg">Contact</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:info@mansong.co.kr" className="text-sm md:text-base text-blue-100 hover:text-white flex items-center transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@mansong.co.kr
              </a>
              <a href="tel:031-123-4567" className="text-sm md:text-base text-blue-100 hover:text-white flex items-center transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                031-123-4567
              </a>
            </div>
          </div>
          <div className="md:max-w-xs">
            <h4 className="font-semibold mb-2 text-blue-200 text-base md:text-lg">바로가기</h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2">
              <a href="#" className="text-sm md:text-base text-blue-100 hover:text-white flex items-center group transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                회사소개
              </a>
              <a href="#" className="text-sm md:text-base text-blue-100 hover:text-white flex items-center group transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                서비스
              </a>
              <a href="#" className="text-sm md:text-base text-blue-100 hover:text-white flex items-center group transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                포트폴리오
              </a>
              <a href="#" className="text-sm md:text-base text-blue-100 hover:text-white flex items-center group transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                문의하기
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 대표/팀/조직도/채용 안내 */}
      <section className="mt-8 sm:mt-12 md:mt-20 lg:mt-24 max-w-6xl mx-auto px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 md:mb-8 lg:mb-12 text-center">만송시스템 팀 & 채용</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <img src="/window.svg" alt="대표자" className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full border-4 border-blue-200 mb-3 lg:mb-5" />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 lg:mb-2">임영무 대표</h4>
            <span className="text-xs md:text-sm lg:text-base text-blue-600 mb-2 lg:mb-4">CEO / Founder</span>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">공장 자동화 및 관제 시스템 분야 20년 경력, 혁신과 신뢰의 리더십</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <img src="/file.svg" alt="팀원" className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full border-4 border-blue-200 mb-3 lg:mb-5" />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 lg:mb-2">개발팀</h4>
            <span className="text-xs md:text-sm lg:text-base text-blue-600 mb-2 lg:mb-4">ENGINEERING</span>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">스마트팩토리, IoT, 클라우드, B2B 솔루션 전문 개발자 그룹</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <img src="/file.svg" alt="팀원" className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full border-4 border-blue-200 mb-3 lg:mb-5" />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 lg:mb-2">프로젝트/운영팀</h4>
            <span className="text-xs md:text-sm lg:text-base text-blue-600 mb-2 lg:mb-4">PM / SUPPORT</span>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">프로젝트 관리, 고객 지원, 현장 운영 및 품질관리 전문가</p>
          </div>
        </div>
        
        {/* 조직도(샘플) */}
        <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-3 md:mb-4 lg:mb-6">조직도</h4>
          <div className="w-full overflow-x-auto pb-2">
            <img src="/orgchart.svg" alt="조직도" className="w-full min-w-[500px] max-w-2xl border rounded-lg shadow mx-auto" />
          </div>
        </div>
        
        {/* 채용 안내 */}
        <div className="bg-blue-50 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 text-center">
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-2 lg:mb-4">함께 성장할 인재를 찾습니다</h4>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 lg:mb-6">
            스마트팩토리, IoT, B2B 소프트웨어 분야에 열정 있는 인재를 상시 채용합니다.<br className="hidden sm:block"/>
            이력서 및 포트폴리오를 <a href="mailto:recruit@mansong.co.kr" className="text-blue-700 underline hover:text-blue-900 transition-colors">recruit@mansong.co.kr</a>로 보내주세요.
          </p>
          <a href="mailto:recruit@mansong.co.kr" className="inline-block px-6 sm:px-8 py-2 sm:py-3 lg:py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition text-sm sm:text-base lg:text-lg min-h-[44px] lg:min-h-[52px] min-w-[120px] lg:min-w-[180px] flex items-center justify-center">
            채용 문의하기
          </a>
        </div>
      </section>

      {/* 회사 정보/연혁/비전 섹션 */}
      <section className="max-w-5xl mx-auto py-8 sm:py-12 md:py-20 px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 md:mb-10 text-center tracking-tight">회사 정보 & 연혁</h2>
        
        {/* 대표 인사말 */}
        <div className="bg-blue-50 rounded-xl p-3 sm:p-4 md:p-8 mb-4 sm:mb-6 md:mb-10 shadow flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8">
          <div className="flex-shrink-0 mb-2 md:mb-0">
            <img src="/window.svg" alt="대표자" className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-blue-200" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2 text-center md:text-left">임영무 대표 인사말</h3>
            <p className="text-gray-700 text-sm md:text-base">만송시스템은 공장 자동화와 관제 시스템 분야에서 최고의 기술력과 신뢰를 바탕으로 고객의 성공을 함께 만들어갑니다. 앞으로도 혁신과 도전으로 더 나은 가치를 제공하겠습니다.</p>
          </div>
        </div>
        
        {/* 배경 타원 패턴 */}
        <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100">
          <ellipse cx="200" cy="50" rx="180" ry="40" />
        </svg>
        
        {/* 연혁 타임라인 */}
        <div className="mb-8 md:mb-12">
          <h4 className="text-base md:text-lg font-semibold text-blue-700 mb-4">주요 연혁</h4>
          <ol className="relative border-l-4 border-blue-200 pl-4 sm:pl-5 md:pl-8 space-y-3 sm:space-y-4 md:space-y-8">
            <li>
              <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2021.03</span>
                <span className="text-sm md:text-base text-blue-900 font-bold">만송시스템 설립</span>
              </div>
            </li>
            <li>
              <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2022.07</span>
                <span className="text-sm md:text-base text-blue-900 font-bold">스마트팩토리 관제 시스템 1차 구축</span>
              </div>
            </li>
            <li>
              <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2023.05</span>
                <span className="text-sm md:text-base text-blue-900 font-bold">B2B 맞춤 소프트웨어 개발 사업 확대</span>
              </div>
            </li>
            <li>
              <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2024.11</span>
                <span className="text-sm md:text-base text-blue-900 font-bold">주문 관리 시스템 고도화</span>
              </div>
            </li>
          </ol>
        </div>
        
        {/* 비전/미션 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white rounded-xl shadow p-5 md:p-8 border-t-4 border-blue-500">
            <h4 className="text-base md:text-lg font-bold text-blue-800 mb-2">비전</h4>
            <p className="text-gray-700 text-sm md:text-base">스마트 공장 자동화와 관제 시스템 분야의 선도 기업으로 성장하여, 고객의 혁신과 미래를 함께하는 파트너가 되겠습니다.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 md:p-8 border-t-4 border-blue-700">
            <h4 className="text-base md:text-lg font-bold text-blue-800 mb-2">미션</h4>
            <p className="text-gray-700 text-sm md:text-base">최고의 기술력과 신뢰를 바탕으로, 현장 중심의 맞춤형 솔루션을 제공하여 고객의 경쟁력 강화에 기여합니다.</p>
          </div>
        </div>
      </section>
      
      {/* 신뢰 요소: 고객사 로고, 인증서, 수상 이력 */}
      <SectionFadeIn>
        <section className="max-w-5xl mx-auto py-12 md:py-20 px-4 pb-24 md:pb-32">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-10 text-center">{t[lang].trust}</h3>
          
          {/* 고객사 로고 섹션 */}
          <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-3 text-center">주요 고객사</h4>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-10 mb-8 md:mb-10">
            {customerFixed.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`고객사${i+1}`}
                className="w-[100px] h-[100px] sm:w-20 sm:h-20 md:w-32 md:h-32 object-cover rounded-xl grayscale hover:grayscale-0 transition shadow-lg border-2 border-blue-200 bg-white mx-auto"
                style={{ aspectRatio: '1/1' }}
              />
            ))}
          </div>
          
          {/* 인증/수상 섹션 */}
          <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-3 text-center mt-10">인증 및 수상</h4>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-10">
            {awardFixed.map((src, i) => (
              <div key={src} className="flex flex-col items-center mb-2 md:mb-4">
                <img
                  src={src}
                  alt={`인증/수상${i+1}`}
                  className="w-[75px] h-[75px] sm:w-20 sm:h-20 md:w-32 md:h-32 object-cover rounded-xl mb-2 md:mb-3 shadow-lg border-2 border-blue-200 bg-white"
                  style={{ aspectRatio: '1/1' }}
                />
                {trustKeys[i] && (
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-700 bg-white border border-blue-200 rounded px-1 sm:px-2 py-0.5 sm:py-1 md:px-3 shadow mt-1 truncate max-w-[80px] sm:max-w-none text-center">
                    {t[lang][trustKeys[i] as TrustKey]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 서비스/솔루션 섹션 */}
      <SectionFadeIn>
        <section className="relative max-w-6xl mx-auto py-12 md:py-20 lg:py-24 px-4 overflow-hidden pb-24 md:pb-32">
          {/* 배경 패턴 */}
          <svg className="absolute -top-16 -left-16 w-72 h-72 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-blue-900 mb-6 md:mb-14 lg:mb-16 tracking-tight">{t[lang].serviceTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
            {/* 카드 1 */}
            <div className="group bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="bg-blue-100 rounded-full p-3 md:p-4 lg:p-6 mb-3 md:mb-5 lg:mb-6 group-hover:bg-blue-200 transition">
                <img src="/globe.svg" alt="공장 모니터링" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
              </div>
              <span className="inline-block text-[10px] sm:text-xs lg:text-sm font-bold text-blue-600 bg-blue-50 rounded px-2 py-1 mb-2 tracking-widest">SMART FACTORY</span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-4 text-blue-800">{t[lang].service1}</h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-sm md:text-base lg:text-lg">{t[lang].service1desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm lg:text-base font-medium">
                  자세히 보기
                  <svg className="ml-1 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 카드 2 */}
            <div className="group bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="bg-blue-100 rounded-full p-3 md:p-4 lg:p-6 mb-3 md:mb-5 lg:mb-6 group-hover:bg-blue-200 transition">
                <img src="/window.svg" alt="관제 시스템" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
              </div>
              <span className="inline-block text-[10px] sm:text-xs lg:text-sm font-bold text-blue-600 bg-blue-50 rounded px-2 py-1 mb-2 tracking-widest">CONTROL SYSTEM</span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-4 text-blue-800">{t[lang].service2}</h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-sm md:text-base lg:text-lg">{t[lang].service2desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm lg:text-base font-medium">
                  자세히 보기
                  <svg className="ml-1 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 카드 3 */}
            <div className="group bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="bg-blue-100 rounded-full p-3 md:p-4 lg:p-6 mb-3 md:mb-5 lg:mb-6 group-hover:bg-blue-200 transition">
                <img src="/vercel.svg" alt="B2B 기술지원" className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
              </div>
              <span className="inline-block text-[10px] sm:text-xs lg:text-sm font-bold text-blue-600 bg-blue-50 rounded px-2 py-1 mb-2 tracking-widest">B2B SUPPORT</span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-4 text-blue-800">{t[lang].service3}</h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-sm md:text-base lg:text-lg">{t[lang].service3desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm lg:text-base font-medium">
                  자세히 보기
                  <svg className="ml-1 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 실시간/월별 주문 통계 (샘플) */}
      <SectionFadeIn>
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 border-t overflow-hidden pb-32">
          {/* 배경 그래프 패턴 */}
          <svg className="absolute -bottom-10 right-0 w-96 h-32 opacity-10 text-blue-300 pointer-events-none" fill="none" viewBox="0 0 400 100">
            <polyline points="0,80 50,60 100,90 150,40 200,70 250,30 300,80 350,50 400,90" stroke="currentColor" strokeWidth="8" fill="none" />
          </svg>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 sm:mb-8 md:mb-12 text-center tracking-tight">월별 주문 추이</h2>
            <div className="flex items-end gap-2 md:gap-8 h-40 md:h-56 w-full justify-center overflow-x-auto px-2">
              {[3, 5, 7, 4, 6, 8].map((count, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group min-w-16">
                  <div className="relative flex flex-col items-center">
                    <div style={{height: `${count * 14}px`, minWidth: '28px'}} className="w-8 md:w-12 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-xl shadow-lg group-hover:scale-105 transition-transform duration-300"></div>
                    <span className="absolute -top-8 text-base md:text-lg font-bold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{count}건</span>
                  </div>
                  <span className="mt-2 md:mt-4 text-xs text-gray-500 font-semibold whitespace-nowrap">2025-0{4+i}</span>
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
        <section className="relative max-w-6xl mx-auto py-16 md:py-20 lg:py-24 px-4 overflow-hidden pb-32">
          {/* 배경 사각형 패턴 */}
          <svg className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100">
            <rect x="0" y="20" width="80" height="60" rx="16" />
            <rect x="100" y="10" width="80" height="80" rx="16" />
            <rect x="200" y="30" width="80" height="60" rx="16" />
            <rect x="300" y="0" width="80" height="100" rx="16" />
          </svg>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 sm:mb-8 md:mb-14 lg:mb-16 text-center tracking-tight">주요 고객사 & 포트폴리오</h2>
          
          {/* 포트폴리오 모달 */}
          <PortfolioModal open={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {portfolioList.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => { setModalData(item); setModalOpen(true); }}
              >
                <div className="bg-blue-50 rounded-full p-4 md:p-5 lg:p-6 mb-4 md:mb-5 lg:mb-6 group-hover:bg-blue-100 transition">
                  <img src={item.logo} alt={item.name} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                </div>
                <span className="inline-block text-xs md:text-sm lg:text-base font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-2 md:mb-3 lg:mb-4 tracking-widest">{item.label}</span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-3 text-blue-800">{item.name}</h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-2 md:mb-4">{item.desc}</p>
                <div className="mt-2 md:mt-3 lg:mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm md:text-base lg:text-lg font-medium">
                    더 알아보기
                    <svg className="ml-1 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>
      
      {/* 설치 과정 아카이브 */}
      <SectionFadeIn>
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 lg:mb-14 text-blue-900">
              설치 과정 아카이브
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:translate-y-[-5px] transition duration-300">
                  <div className="h-48 lg:h-60 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 lg:h-16 lg:w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 lg:p-6">
                    <div className="flex justify-between items-center mb-2 lg:mb-3">
                      <span className="text-sm md:text-base text-gray-500">2024.0{i+1}.15</span>
                      <span className="px-2 py-1 md:px-3 md:py-1.5 bg-blue-100 text-blue-800 text-xs md:text-sm rounded-full">완료</span>
                    </div>
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mb-3 text-gray-800">구미 스마트팩토리 {i+1}차 설치</h3>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg line-clamp-2">
                      스마트팩토리 관제 시스템 {i+1}차 설치 완료. 현장 엔지니어의 세심한 작업으로 성공적인 구축.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-10 lg:mt-14">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-50 transition duration-300 min-h-[44px] md:min-h-[52px] min-w-[140px] md:min-w-[180px] flex items-center justify-center text-sm md:text-base lg:text-lg">
                더 많은 사례 보기
              </button>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 문의/상담 섹션 */}
      <SectionFadeIn>
        <section className="relative bg-blue-50 py-10 sm:py-16 md:py-20 lg:py-24 px-4 border-t overflow-hidden pb-20 sm:pb-24 md:pb-32">
          {/* 배경 점 패턴 */}
          <svg className="absolute -top-10 right-0 w-40 h-40 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="6" />
            <circle cx="60" cy="40" r="6" />
            <circle cx="80" cy="80" r="6" />
            <circle cx="40" cy="70" r="6" />
          </svg>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6 lg:mb-8">문의 및 상담</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-5 md:mb-6 lg:mb-8">프로젝트 문의, 견적 요청, 기술 상담 등 언제든 연락주세요.</p>
            <a href="mailto:info@mansong.co.kr" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition text-sm sm:text-base md:text-lg lg:text-xl min-h-[44px] md:min-h-[52px] lg:min-h-[60px] min-w-[140px] md:min-w-[180px] lg:min-w-[220px] flex items-center justify-center">이메일 문의하기</a>
            <div className="mt-6 md:mt-8 lg:mt-10 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
              <div className="mb-1 md:mb-2">대표전화: <a href="tel:02-1234-5678" className="text-blue-700 hover:underline">02-1234-5678</a></div>
              <div>주소: 서울특별시 금천구 가산디지털1로 168 우림라이온스밸리</div>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* 문의/상담/견적 요청 폼 섹션 */}
      <section className="max-w-2xl mx-auto py-12 sm:py-20 md:py-24 lg:py-28 px-4 pb-20 sm:pb-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 md:mb-8 lg:mb-10 text-center tracking-tight">문의/상담/견적 요청</h2>
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 lg:p-12 border border-blue-100 max-w-4xl mx-auto">
          <div className="mb-5 md:mb-6 lg:mb-8 text-center">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6">궁금하신 점이나 견적 요청은 아래 폼 또는 연락처로 문의해 주세요.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-10 text-xs sm:text-sm md:text-base lg:text-lg text-blue-700 font-semibold justify-center">
              <a href="mailto:info@mansong.co.kr" className="flex items-center justify-center hover:text-blue-800 transition-colors">
                <svg className="inline w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1.5 md:mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" />
                </svg> 
                이메일: info@mansong.co.kr
              </a>
              <a href="tel:031-123-4567" className="flex items-center justify-center hover:text-blue-800 transition-colors">
                <svg className="inline w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1.5 md:mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg> 
                전화: 031-123-4567
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8 md:py-10 lg:py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="text-lg md:text-xl lg:text-2xl font-bold">만송시스템</div>
          <div className="text-sm md:text-base lg:text-lg">© 2021-2025 Mansong System. All rights reserved.</div>
          <div className="text-sm md:text-base lg:text-lg">사업자등록번호: 479-88-01974</div>
        </div>
      </footer>

      {/* 플로팅 버튼은 layout.tsx에서 FloatingCTA 컴포넌트로 처리됨 */}
    </main>
  );
}