"use client";
import SectionFadeIn from "@/components/ui/SectionFadeIn";
import ParallaxHero from "@/components/ui/ParallaxHero";
import PortfolioModal from "@/components/ui/PortfolioModal";
import ContactForm from "@/components/forms/ContactForm";
import AdvancedSearchFilter from "@/components/ui/AdvancedSearchFilter";
import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  // 언어 상태 설정
  const [lang] = useState<"ko" | "en">("ko");
  
  // 다국어 텍스트 설정
  type LangKey =
    | "trust"
    | "trust1"
    | "trust2"
    | "trust3"
    | "counter1"
    | "counter2"
    | "counter3"
    | "serviceTitle"
    | "service1"
    | "service1desc"
    | "service2"
    | "service2desc"
    | "service3"
    | "service3desc";
  const t: Record<"ko" | "en", Record<LangKey, string>> = {
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
  logo: "/images/pinterest.jpg",
      name: "(주)스마트팩토리",
      label: "SMART FACTORY",
      desc: "스마트 공장 관제 시스템 구축",
      detail: "스마트팩토리 전사 관제 시스템 구축\n- 실시간 설비 모니터링\n- 데이터 시각화 및 알람\n- 현장 맞춤 대시보드 제공",
    },
    {
  logo: "/images/pattern-01.jpg",
      name: "(주)오토메이션",
      label: "AUTOMATION",
      desc: "공장 자동화 모니터링 솔루션",
      detail: "공장 자동화 모니터링 솔루션 구축\n- IoT 센서 연동\n- 생산/품질 데이터 통합\n- 관리자 알림 시스템",
    },
    {
  logo: "/images/art-01.jpg",
      name: "(주)테크윈",
      label: "B2B SOFTWARE",
      desc: "B2B 맞춤 소프트웨어 개발",
      detail: "B2B 기업 맞춤 소프트웨어 개발\n- ERP/SCM 연동\n- 클라우드 기반 서비스\n- 기술 컨설팅 지원",
    },
  ];
  
  // 모달 상태 관리
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<typeof portfolioList[number] | null>(null);

  // 포트폴리오 필터링 상태
  const [portfolioFilter, setPortfolioFilter] = useState({
    category: "",
    keyword: "",
  });
  
  // 포트폴리오 카테고리 (샘플 데이터, 실제론 동적으로 생성)
  const portfolioCategories = [
    { label: "전체", value: "" },
    { label: "SMART FACTORY", value: "SMART FACTORY" },
    { label: "AUTOMATION", value: "AUTOMATION" },
    { label: "B2B SOFTWARE", value: "B2B SOFTWARE" },
  ];

  // 포트폴리오 필터링 함수
  const filterPortfolio = (filters: typeof portfolioFilter) => {
    setPortfolioFilter(filters);
  };

    return (
      <main className="min-h-screen bg-gray-50 flex flex-col relative">
        {/* Parallax Hero (PC) */}
        <ParallaxHero
          backgroundImage="/images/crystal-blue.jpg"
          title="공장 자동화와 관제 시스템의 미래, 만송시스템"
          subtitle="스마트팩토리, IoT, B2B 소프트웨어의 혁신 파트너"
          height="520px"
        >
          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="inline-block bg-blue-700/80 text-white text-xs md:text-sm font-semibold rounded-full px-4 py-1 mb-2 tracking-wide shadow">스마트팩토리 · 관제 · B2B</span>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-lg shadow transition text-base md:text-lg min-w-[140px] min-h-[44px]"
              tabIndex={0}
              role="button"
              aria-label="문의하기 (Hero)"
            >
              문의하기
            </a>
          </div>
        </ParallaxHero>

      {/* 대표/팀/조직도/채용 안내 */}
  <section className="mt-8 sm:mt-12 md:mt-20 lg:mt-24 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 md:mb-8 lg:mb-12 text-center">만송시스템 팀 & 채용</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-12 lg:mb-16 lg:col-span-12">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <Image src="/window.svg" alt="대표자" width={96} height={96} className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full border-4 border-blue-200 mb-3 lg:mb-5" priority={false} role="img" tabIndex={0} />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 lg:mb-2">임영무 대표</h4>
            <span className="text-xs md:text-sm lg:text-base text-blue-600 mb-2 lg:mb-4">CEO / Founder</span>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">공장 자동화 및 관제 시스템 분야 20년 경력, 혁신과 신뢰의 리더십</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/sphere-01.jpg" alt="팀원" width={96} height={96} className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full border-4 border-blue-200 mb-3 lg:mb-5" priority={false} role="img" tabIndex={0} />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 lg:mb-2">개발팀</h4>
            <span className="text-xs md:text-sm lg:text-base text-blue-600 mb-2 lg:mb-4">ENGINEERING</span>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">스마트팩토리, IoT, 클라우드, B2B 솔루션 전문 개발자 그룹</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <Image src="/images/sphere-02.jpg" alt="팀원" width={96} height={96} className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full border-4 border-blue-200 mb-3 lg:mb-5" priority={false} role="img" tabIndex={0} />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-1 lg:mb-2">프로젝트/운영팀</h4>
            <span className="text-xs md:text-sm lg:text-base text-blue-600 mb-2 lg:mb-4">PM / SUPPORT</span>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center">프로젝트 관리, 고객 지원, 현장 운영 및 품질관리 전문가</p>
          </div>
        </div>
        
        {/* 조직도(샘플) */}
  <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16 lg:col-span-12">
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-3 md:mb-4 lg:mb-6">조직도</h4>
          <div className="w-full overflow-x-auto pb-2">
            <Image src="/images/chart-01.jpg" alt="조직도" width={800} height={400} className="w-full min-w-[320px] max-w-2xl border rounded-lg shadow mx-auto" priority={false} role="img" tabIndex={0} />
          </div>
        </div>
        
        {/* 채용 안내 */}
  <div className="bg-blue-50 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 text-center lg:col-span-12">
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 mb-2 lg:mb-4">함께 성장할 인재를 찾습니다</h4>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 lg:mb-6">
            스마트팩토리, IoT, B2B 소프트웨어 분야에 열정 있는 인재를 상시 채용합니다.<br className="hidden sm:block"/>
            이력서 및 포트폴리오를 <a href="mailto:recruit@mansong.co.kr" className="text-blue-700 underline hover:text-blue-900 transition-colors">recruit@mansong.co.kr</a>로 보내주세요.
          </p>
          <a
            href="mailto:recruit@mansong.co.kr"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 lg:py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 active:bg-blue-900 focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base lg:text-lg min-h-[48px] lg:min-h-[56px] min-w-[140px] lg:min-w-[200px] flex items-center justify-center outline-none"
            tabIndex={0}
            role="button"
            aria-label="채용 문의하기 (이메일 열기)"
          >
            채용 문의하기
          </a>
        </div>
      </section>

      {/* 회사 정보/연혁/비전 섹션 (PC 고도화) */}
      <section className="relative max-w-5xl mx-auto py-8 sm:py-12 md:py-20 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* 배경 타원 패턴 */}
        <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100">
          <ellipse cx="200" cy="50" rx="180" ry="40" />
        </svg>
        {/* 좌측: 대표 인사말 + 연혁 */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="bg-blue-50 rounded-xl p-4 md:p-8 shadow flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-shrink-0 mb-2 md:mb-0">
              <img src="/window.svg" alt="대표자" className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-blue-200" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-2 text-center md:text-left">임영무 대표 인사말</h3>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">만송시스템은 공장 자동화와 관제 시스템 분야에서 최고의 기술력과 신뢰를 바탕으로 고객의 성공을 함께 만들어갑니다. 앞으로도 혁신과 도전으로 더 나은 가치를 제공하겠습니다.</p>
            </div>
          </div>
          <div className="mb-8 md:mb-12">
            <h4 className="text-lg lg:text-xl font-semibold text-blue-700 mb-4">주요 연혁</h4>
            <ol className="relative border-l-4 border-blue-200 pl-4 sm:pl-5 md:pl-8 space-y-4 md:space-y-8">
              <li>
                <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2021.03</span>
                  <span className="text-base lg:text-lg text-blue-900 font-bold">만송시스템 설립</span>
                </div>
              </li>
              <li>
                <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2022.07</span>
                  <span className="text-base lg:text-lg text-blue-900 font-bold">스마트팩토리 관제 시스템 1차 구축</span>
                </div>
              </li>
              <li>
                <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2023.05</span>
                  <span className="text-base lg:text-lg text-blue-900 font-bold">B2B 맞춤 소프트웨어 개발 사업 확대</span>
                </div>
              </li>
              <li>
                <div className="absolute -left-3 top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-xs md:text-sm text-gray-400 font-medium sm:mr-3">2024.11</span>
                  <span className="text-base lg:text-lg text-blue-900 font-bold">주문 관리 시스템 고도화</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* 우측: 비전/미션 카드 */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow p-6 md:p-8 border-t-4 border-blue-500 flex flex-col items-start">
            <h4 className="text-lg lg:text-xl font-bold text-blue-800 mb-2">비전</h4>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">스마트 공장 자동화와 관제 시스템 분야의 선도 기업으로 성장하여, 고객의 혁신과 미래를 함께하는 파트너가 되겠습니다.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 md:p-8 border-t-4 border-blue-700 flex flex-col items-start">
            <h4 className="text-lg lg:text-xl font-bold text-blue-800 mb-2">미션</h4>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">최고의 기술력과 신뢰를 바탕으로, 현장 중심의 맞춤형 솔루션을 제공하여 고객의 경쟁력 강화에 기여합니다.</p>
          </div>
        </div>
      </section>
      
      {/* 신뢰 요소: 고객사 로고, 인증서, 수상 이력 */}
      <SectionFadeIn>
  <section className="max-w-5xl mx-auto py-12 md:py-20 px-4 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-10 text-center">{t[lang].trust}</h3>
          
          {/* 고객사 로고 섹션 */}
          <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-3 text-center">주요 고객사</h4>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-4 md:gap-10 mb-8 md:mb-10 lg:col-span-12">
            {customerFixed.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`고객사${i+1}`}
                className="w-20 h-20 xs:w-24 xs:h-24 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-xl grayscale md:hover:grayscale-0 transition shadow-lg border-2 border-blue-200 bg-white mx-auto"
                style={{ aspectRatio: '1/1' }}
              />
            ))}
          </div>
          
          {/* 인증/수상 섹션 */}
          <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-3 text-center mt-10">인증 및 수상</h4>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:col-span-12">
            {awardFixed.map((src, i) => (
              <div key={src} className="flex flex-col items-center mb-2 md:mb-4">
                <img
                  src={src}
                  alt={`인증/수상${i+1}`}
                  className="w-16 h-16 xs:w-20 xs:h-20 md:w-28 md:h-28 object-cover rounded-xl mb-2 md:mb-3 shadow-lg border-2 border-blue-200 bg-white"
                  style={{ aspectRatio: '1/1' }}
                />
                {trustKeys[i] && (
                  <span className="text-[10px] xs:text-xs md:text-sm font-bold text-gray-700 bg-white border border-blue-200 rounded px-1 xs:px-2 py-0.5 xs:py-1 md:px-3 shadow mt-1 truncate max-w-[80px] xs:max-w-none text-center">
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
        <section className="relative max-w-6xl mx-auto py-12 md:py-20 lg:py-24 px-4 overflow-hidden pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12">
          {/* 배경 패턴 */}
          <svg className="absolute -top-16 -left-16 w-72 h-72 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-blue-900 mb-6 md:mb-14 lg:mb-16 tracking-tight lg:col-span-12">{t[lang].serviceTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-12 lg:col-span-12">
            {/* 카드 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 transition-all duration-300 cursor-pointer h-full min-h-[340px] lg:col-span-1 group hover:scale-[1.04] hover:shadow-2xl">
              <div className="bg-blue-100 rounded-full p-4 md:p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8 flex items-center justify-center">
                <Image src="/images/chart-02.jpg" alt="공장 모니터링" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" priority={false} />
              </div>
              <span className="inline-block text-xs md:text-sm lg:text-base font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-3 tracking-widest">SMART FACTORY</span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-blue-800 leading-relaxed break-words">{t[lang].service1}</h3>
              <p className="text-gray-600 mb-3 text-sm md:text-base lg:text-lg leading-relaxed break-words">{t[lang].service1desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-base font-medium">
                  자세히 보기
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 카드 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 transition-all duration-300 cursor-pointer h-full min-h-[340px] lg:col-span-1 group hover:scale-[1.04] hover:shadow-2xl">
              <div className="bg-blue-100 rounded-full p-4 md:p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8 flex items-center justify-center">
                <Image src="/images/clock-01.jpg" alt="관제 시스템" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" priority={false} />
              </div>
              <span className="inline-block text-xs md:text-sm lg:text-base font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-3 tracking-widest">CONTROL SYSTEM</span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-blue-800 leading-relaxed break-words">{t[lang].service2}</h3>
              <p className="text-gray-600 mb-3 text-sm md:text-base lg:text-lg leading-relaxed break-words">{t[lang].service2desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-base font-medium">
                  자세히 보기
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 카드 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-blue-100 transition-all duration-300 cursor-pointer h-full min-h-[340px] lg:col-span-1 group hover:scale-[1.04] hover:shadow-2xl">
              <div className="bg-blue-100 rounded-full p-4 md:p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8 flex items-center justify-center">
                <Image src="/images/fractal-01.jpg" alt="B2B 기술지원" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" priority={false} />
              </div>
              <span className="inline-block text-xs md:text-sm lg:text-base font-bold text-blue-600 bg-blue-50 rounded px-3 py-1 mb-3 tracking-widest">B2B SUPPORT</span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-blue-800 leading-relaxed break-words">{t[lang].service3}</h3>
              <p className="text-gray-600 mb-3 text-sm md:text-base lg:text-lg leading-relaxed break-words">{t[lang].service3desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-base font-medium">
                  자세히 보기
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 border-t overflow-hidden pb-32 grid grid-cols-1 lg:grid-cols-12">
          {/* 배경 그래프 패턴 */}
          <svg className="absolute -bottom-10 right-0 w-96 h-32 opacity-10 text-blue-300 pointer-events-none" fill="none" viewBox="0 0 400 100">
            <polyline points="0,80 50,60 100,90 150,40 200,70 250,30 300,80 350,50 400,90" stroke="currentColor" strokeWidth="8" fill="none" />
          </svg>
          <div className="max-w-5xl mx-auto lg:col-span-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 sm:mb-8 md:mb-12 text-center tracking-tight">월별 주문 추이</h2>
            <div className="flex items-end gap-3 sm:gap-4 md:gap-8 h-40 md:h-56 w-full justify-center overflow-x-auto px-1">
              {[3, 5, 7, 4, 6, 8].map((count, i) => (
                <div key={i} className="flex flex-col items-center flex-1 min-w-[48px] xs:min-w-[56px] group">
                  <div className="relative flex flex-col items-center">
                    <div style={{height: `${count * 13}px`, minWidth: '28px'}} className="w-8 md:w-12 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-xl shadow-lg md:group-hover:scale-105 transition-transform duration-300"></div>
                    <span className="absolute -top-7 text-xs md:text-lg font-bold text-blue-700 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">{count}건</span>
                  </div>
                  <span className="mt-1 md:mt-4 text-[10px] xs:text-xs text-gray-500 font-semibold whitespace-nowrap">2025-0{4+i}</span>
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
  <section className="relative max-w-6xl mx-auto py-16 md:py-20 lg:py-24 px-4 overflow-hidden pb-32 grid grid-cols-1 lg:grid-cols-12">
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

          {/* 고급 검색/필터 UI (포트폴리오) */}
          <div className="lg:col-span-12 mb-6">
            <AdvancedSearchFilter
              categories={portfolioCategories}
              onFilter={filterPortfolio}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 lg:col-span-12">
            {portfolioList
              .filter(item =>
                (!portfolioFilter.category || item.label === portfolioFilter.category) &&
                (!portfolioFilter.keyword ||
                  item.name.includes(portfolioFilter.keyword) ||
                  item.label.includes(portfolioFilter.keyword) ||
                  item.desc.includes(portfolioFilter.keyword) ||
                  item.detail.includes(portfolioFilter.keyword))
              )
              .map((item) => (
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
                  <p className="text-gray-600 mb-2 md:mb-3 lg:mb-4 text-sm md:text-base lg:text-lg">{item.desc}</p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 text-base font-medium" tabIndex={0} aria-label="포트폴리오 상세 보기">
                      상세 보기
                      <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </SectionFadeIn>
      
      {/* 설치 과정 아카이브 */}
      <SectionFadeIn>
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50 grid grid-cols-1 lg:grid-cols-12">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl lg:col-span-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 lg:mb-14 text-blue-900">
              설치 과정 아카이브
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:translate-y-[-5px] transition duration-300">
                  <div className="h-48 lg:h-60 bg-gray-200 relative">
                    <img src={`/images/pattern-0${(i%3)+1}.jpg`} alt="설치 현장" className="absolute inset-0 w-full h-full object-cover" />
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
  <section className="relative bg-blue-50 py-10 sm:py-16 md:py-20 lg:py-24 px-4 border-t overflow-hidden pb-20 sm:pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12">
          {/* 배경 점 패턴 */}
          <svg className="absolute -top-10 right-0 w-40 h-40 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="6" />
            <circle cx="60" cy="40" r="6" />
            <circle cx="80" cy="80" r="6" />
            <circle cx="40" cy="70" r="6" />
          </svg>
          <div className="max-w-2xl mx-auto text-center lg:col-span-12">
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
      <section className="relative max-w-6xl mx-auto py-12 sm:py-20 md:py-24 lg:py-28 px-4 pb-20 sm:pb-32 grid grid-cols-1 lg:grid-cols-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 md:mb-8 lg:mb-10 text-center tracking-tight lg:col-span-12">문의/상담/견적 요청</h2>
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 lg:p-14 border border-blue-100 mx-auto lg:col-span-8 lg:col-start-3 flex flex-col gap-8">
          <div className="mb-5 md:mb-6 lg:mb-8 text-center">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6">궁금하신 점이나 견적 요청은 아래 폼 또는 연락처로 문의해 주세요.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-10 text-sm md:text-base lg:text-lg text-blue-700 font-semibold justify-center">
              <a href="mailto:info@mansong.co.kr" className="flex items-center justify-center hover:text-blue-800 transition-colors">
                <svg className="inline w-5 h-5 md:w-6 md:h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" />
                </svg> 
                이메일: info@mansong.co.kr
              </a>
              <a href="tel:031-123-4567" className="flex items-center justify-center hover:text-blue-800 transition-colors">
                <svg className="inline w-5 h-5 md:w-6 md:h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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