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
  const trustKeys = ['trust1', 'trust2', 'trust3'] as const;
  
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
      </header>

      {/* 대표/팀/조직도/채용 안내 */}
      <section className="mt-20 max-w-6xl mx-auto px-4">
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
      </section>

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
        <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100">
          <ellipse cx="200" cy="50" rx="180" ry="40" />
        </svg>
        
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
      
      {/* 신뢰 요소: 고객사 로고, 인증서, 수상 이력 */}
      <SectionFadeIn>
        <section className="max-w-5xl mx-auto py-20 px-4 pb-32">
          <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">{t[lang].trust}</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
            {customerFixed.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`고객사${i+1}`}
                className="w-32 h-32 object-cover rounded-xl grayscale hover:grayscale-0 transition shadow-lg border-2 border-blue-200 bg-white"
                style={{ aspectRatio: '1/1' }}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {awardFixed.map((src, i) => (
              <div key={src} className="flex flex-col items-center">
                <img
                  src={src}
                  alt={`인증/수상${i+1}`}
                  className="w-32 h-32 object-cover rounded-xl mb-3 shadow-lg border-2 border-blue-200 bg-white"
                  style={{ aspectRatio: '1/1' }}
                />
                {trustKeys[i] && t[lang][trustKeys[i]] && (
                  <span className="text-sm font-bold text-gray-700 bg-white border border-blue-200 rounded px-3 py-1 shadow mt-1">
                    {t[lang][trustKeys[i]]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 서비스/솔루션 섹션 */}
      <SectionFadeIn>
        <section className="relative max-w-6xl mx-auto py-20 px-4 overflow-hidden pb-32">
          {/* 배경 패턴 */}
          <svg className="absolute -top-16 -left-16 w-72 h-72 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
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
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 border-t overflow-hidden pb-32">
          {/* 배경 그래프 패턴 */}
          <svg className="absolute -bottom-10 right-0 w-96 h-32 opacity-10 text-blue-300 pointer-events-none" fill="none" viewBox="0 0 400 100">
            <polyline points="0,80 50,60 100,90 150,40 200,70 250,30 300,80 350,50 400,90" stroke="currentColor" strokeWidth="8" fill="none" />
          </svg>
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
        <section className="relative max-w-6xl mx-auto py-20 px-4 overflow-hidden pb-32">
          {/* 배경 사각형 패턴 */}
          <svg className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10 text-blue-100 pointer-events-none" fill="currentColor" viewBox="0 0 400 100">
            <rect x="0" y="20" width="80" height="60" rx="16" />
            <rect x="100" y="10" width="80" height="80" rx="16" />
            <rect x="200" y="30" width="80" height="60" rx="16" />
            <rect x="300" y="0" width="80" height="100" rx="16" />
          </svg>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-14 text-center tracking-tight">주요 고객사 & 포트폴리오</h2>
          
          {/* 포트폴리오 모달 */}
          <PortfolioModal open={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
          
          <div className="grid md:grid-cols-3 gap-10">
            {portfolioList.map((item) => (
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
        </section>
      </SectionFadeIn>

      {/* 문의/상담 섹션 */}
      <SectionFadeIn>
        <section className="relative bg-blue-50 py-16 px-4 border-t overflow-hidden pb-32">
          {/* 배경 점 패턴 */}
          <svg className="absolute -top-10 right-0 w-40 h-40 opacity-10 text-blue-200 pointer-events-none" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="6" />
            <circle cx="60" cy="40" r="6" />
            <circle cx="80" cy="80" r="6" />
            <circle cx="40" cy="70" r="6" />
          </svg>
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

      {/* 문의/상담/견적 요청 폼 섹션 */}
      <section className="max-w-2xl mx-auto py-20 px-4 pb-32">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">문의/상담/견적 요청</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="mb-6 text-center">
            <p className="text-gray-700 text-base mb-2">궁금하신 점이나 견적 요청은 아래 폼 또는 연락처로 문의해 주세요.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-sm text-blue-700 font-semibold">
              <span>
                <svg className="inline w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0v4a4 4 0 01-8 0v-4" />
                </svg> 
                이메일: <a href="mailto:info@mansong.co.kr" className="underline">info@mansong.co.kr</a>
              </span>
              <span>
                <svg className="inline w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg> 
                전화: <a href="tel:031-123-4567" className="underline">031-123-4567</a>
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold">만송시스템</div>
          <div className="text-sm">© 2021-2025 Mansong System. All rights reserved.</div>
          <div className="text-sm">사업자등록번호: 479-88-01974</div>
        </div>
      </footer>

      {/* 플로팅 문의/견적 버튼 - 모든 섹션 뒤, main 마지막에 위치 */}
      <a
        href="mailto:info@mansong.co.kr"
        className="fixed z-50 right-4 bottom-32 md:bottom-8 px-6 py-3 rounded-full bg-blue-600 text-white shadow-lg flex items-center gap-2 text-base font-bold hover:bg-blue-700 transition md:right-8"
        style={{ minWidth: '180px' }}
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" />
        </svg>
        문의/견적 요청
      </a>
    </main>
  );
}