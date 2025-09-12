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
  // 언어 상태 및 다국어 텍스트
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = {
    ko: {
      // ...한국어 텍스트 전체...
    },
    en: {
      // ...영문 텍스트 전체...
    }
  };

  // 신뢰/고객사/수상 이미지
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
  const customerFixed = customerImages.slice(0, 4);
  const awardFixed = customerImages.slice(4, 7);
  const trustKeys = ['trust1', 'trust2', 'trust3'] as const;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* ...기존 Hero/서비스/통계/포트폴리오/문의/공지/SectionFadeIn/section/footer 등 전체 JSX... */}

      {/* 신뢰/고객사/수상 이미지 섹션 예시 */}
      <div className="mt-16">
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
          {awardFixed.map((src: string, i: number) => (
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
      </div>

      {/* ...나머지 섹션/푸터 등... */}

      {/* 플로팅 문의/견적 버튼 */}
      <a
        href="mailto:info@mansong.co.kr"
        className="fixed z-50 right-4 bottom-32 md:bottom-8 px-6 py-3 rounded-full bg-blue-600 text-white shadow-lg flex items-center gap-2 text-base font-bold hover:bg-blue-700 transition md:right-8"
        style={{ minWidth: '180px' }}
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" /></svg>
        문의/견적 요청
      </a>
    </main>
  );
}