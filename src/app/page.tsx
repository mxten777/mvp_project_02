"use client";
import React from "react";
import SectionFadeIn from "@/components/ui/SectionFadeIn";
import ParallaxHero from "@/components/ui/ParallaxHero";
import Image from "next/image";

export default function Page() {
  // 언어 상태 설정
  const lang: "ko" | "en" = "ko";

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

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* Parallax Hero (PC) */}
      <ParallaxHero
    title={<>산업의 내일을 설계하다<br />만송시스템</>}
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
      <SectionFadeIn>
        <section className="mt-8 sm:mt-12 md:mt-20 lg:mt-24 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-14 text-center whitespace-nowrap">만송시스템 팀 구성</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch">
            {/* 고도화된 팀원 카드 */}
            {[
              {
                name: "임영무",
                role: "대표이사 / Founder",
                desc: "스마트팩토리, 관제 시스템 전문가. 만송시스템 설립자.",
              },
              {
                name: "임동근",
                role: "CTO / 개발총괄",
                desc: "IoT, B2B 소프트웨어 아키텍트. 시스템 설계 및 개발 리드.",
              },
              {
                name: "박수진",
                role: "팀장 / 프로젝트 매니저",
                desc: "프로젝트 관리 및 고객 커뮤니케이션 담당.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="w-full max-w-xs bg-white rounded-3xl shadow-xl px-10 py-12 flex flex-col items-center border border-blue-100 transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 group"
              >
                <span className="relative flex items-center justify-center mb-6">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-300 opacity-60 blur-xl scale-110 group-hover:opacity-80 group-hover:scale-125 transition-all duration-300"></span>
                  <span className="rounded-full w-[104px] h-[104px] flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 border-4 border-blue-200 shadow-lg group-hover:border-blue-400 transition-all duration-300">
                    <svg width="60" height="60" fill="none" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="24" fill="#DBEAFE" />
                      <path d="M24 25c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm0 2c-4.418 0-12 2.239-12 6.667V38h24v-4.333C36 29.239 28.418 27 24 27z" fill="#60A5FA" />
                    </svg>
                  </span>
                </span>
                <div className="font-extrabold text-blue-900 text-2xl mb-1 tracking-tight group-hover:text-blue-700 transition-colors">{member.name}</div>
                <div className="text-base text-blue-500 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-700 text-center text-[15px] leading-relaxed font-normal">{member.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 월별 주문 추이 섹션 */}
      <SectionFadeIn>
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-white py-24 px-2 sm:px-6 md:px-12 border-t overflow-hidden pb-32 grid grid-cols-1 lg:grid-cols-12 items-center justify-items-center">
          <div className="max-w-5xl mx-auto w-full lg:col-span-12 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-10 sm:mb-14 md:mb-20 text-center mx-auto tracking-tight block whitespace-nowrap max-w-full lg:col-span-12 justify-self-center place-self-center">월별 주문 추이</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex items-end gap-5 sm:gap-8 md:gap-12 h-48 md:h-64 min-w-[400px] xs:min-w-[480px] md:min-w-0 justify-center px-2 md:px-8">
                {[3, 5, 7, 4, 6, 8].map((count, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 min-w-[56px] xs:min-w-[64px] group">
                    <div className="relative flex flex-col items-center">
                      <div
                        style={{ height: `${count * 18}px`, minWidth: '36px' }}
                        className="w-10 md:w-16 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-2xl border border-blue-200 shadow-xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                      ></div>
                      <span className="absolute -top-8 text-sm md:text-xl font-bold text-blue-700 bg-white/80 rounded px-2 py-1 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">{count}건</span>
                    </div>
                    <span className="mt-2 md:mt-5 text-xs md:text-base text-gray-600 font-semibold whitespace-nowrap">2025-0{4 + i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold rounded px-6 py-3 shadow">* 실제 데이터 연동 가능</span>
            </div>
          </div>
        </section>
      </SectionFadeIn>
      {/* ...이하 신뢰, 서비스, 포트폴리오, 문의, 푸터 등도 동일하게 SectionFadeIn 구조로 추가... */}
      {/* 신뢰/파트너 섹션 */}
      <SectionFadeIn>
        <section className="w-full max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-6 text-center md:text-left whitespace-nowrap">{t[lang].trust}</h2>
            <ul className="space-y-3 w-full">
              <li className="flex items-center gap-3 text-blue-700 font-semibold text-lg"><span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>{t[lang].trust1}</li>
              <li className="flex items-center gap-3 text-blue-700 font-semibold text-lg"><span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>{t[lang].trust2}</li>
              <li className="flex items-center gap-3 text-blue-700 font-semibold text-lg"><span className="w-3 h-3 bg-blue-400 rounded-full inline-block"></span>{t[lang].trust3}</li>
            </ul>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center items-center">
            {customerFixed.map((img, i) => (
              <div key={img} className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-2xl shadow flex items-center justify-center overflow-hidden border border-blue-100">
                <Image src={img} alt={`파트너${i + 1}`} width={120} height={120} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 서비스/솔루션 섹션 */}
      <SectionFadeIn>
        <section className="w-full max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-6 text-center md:text-left whitespace-nowrap">{t[lang].serviceTitle}</h2>
            <ul className="space-y-3 w-full">
              <li className="mb-2">
                <span className="text-blue-700 font-bold text-lg">{t[lang].service1}</span>
                <div className="text-gray-600 text-sm md:text-base mt-1">{t[lang].service1desc}</div>
              </li>
              <li className="mb-2">
                <span className="text-blue-700 font-bold text-lg">{t[lang].service2}</span>
                <div className="text-gray-600 text-sm md:text-base mt-1">{t[lang].service2desc}</div>
              </li>
              <li>
                <span className="text-blue-700 font-bold text-lg">{t[lang].service3}</span>
                <div className="text-gray-600 text-sm md:text-base mt-1">{t[lang].service3desc}</div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-4 justify-items-center items-center">
            {awardFixed.map((img, i) => (
              <div key={img} className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow flex items-center justify-center overflow-hidden border border-blue-100">
                <Image src={img} alt={`어워드${i + 1}`} width={96} height={96} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 포트폴리오 섹션 */}
      <SectionFadeIn>
        <section className="w-full max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center whitespace-nowrap">주요 포트폴리오</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioList.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100">
                <Image src={item.logo} alt={item.name} width={80} height={80} className="rounded-full mb-4 object-cover" />
                <div className="text-blue-700 font-bold text-lg mb-1">{item.label}</div>
                <div className="text-gray-900 font-semibold text-xl mb-2 text-center">{item.name}</div>
                <div className="text-gray-600 text-base mb-3 text-center whitespace-pre-line">{item.desc}</div>
                <details className="w-full mt-2">
                  <summary className="cursor-pointer text-blue-500 underline text-sm text-center">상세보기</summary>
                  <div className="text-gray-500 text-sm mt-2 whitespace-pre-line">{item.detail}</div>
                </details>
              </div>
            ))}
          </div>
        </section>
      </SectionFadeIn>

      {/* 문의 섹션 */}
      <SectionFadeIn>
        <section id="contact" className="w-full max-w-3xl mx-auto py-20 px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center whitespace-nowrap">문의하기</h2>
          <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-blue-100">
            <input type="text" placeholder="이름" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            <input type="email" placeholder="이메일" className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            <textarea placeholder="문의 내용" className="border rounded px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-300" required />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow mt-4 transition">문의 보내기</button>
          </form>
        </section>
      </SectionFadeIn>

      {/* 푸터: 레거시 배경 완전 제거, 카드형 푸터만 남김 */}
    </main>
  );
}