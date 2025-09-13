import React, { useRef, useEffect, useState } from "react";

interface ParallaxHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
}

/**
 * PC 환경 전용 Parallax Hero 섹션 컴포넌트
 * - 배경 이미지 Parallax 효과
 * - 타이틀/서브타이틀/추가 콘텐츠 지원
 * - 반응형 Tailwind 스타일 적용
 */

const ParallaxHero: React.FC<Omit<ParallaxHeroProps, "backgroundImage">> = ({
  title,
  subtitle,
  height = "600px",
  children,
}) => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height }}
    >
      {/* Gradient Background + SVG Pattern */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-200" aria-hidden="true" />
      {/* 심플 SVG 패턴 (원형/도트 등) */}
      <svg className="absolute left-0 top-0 w-full h-full opacity-20" width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="200" cy="200" r="120" fill="#60A5FA" fillOpacity="0.18" />
        <circle cx="1200" cy="400" r="160" fill="#3B82F6" fillOpacity="0.12" />
        <circle cx="800" cy="100" r="80" fill="#2563EB" fillOpacity="0.10" />
        <circle cx="400" cy="500" r="60" fill="#1E40AF" fillOpacity="0.08" />
      </svg>
      {/* Overlay: 텍스트 가독성 보조 */}
      <div className="absolute inset-0 bg-white/40" aria-hidden="true" />
      {/* Content: 텍스트 쉐도우 강화 */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 drop-shadow-[0_4px_24px_rgba(0,0,0,0.08)] mb-6 leading-tight tracking-tight">
          <span className="block">공장 자동화와 관제 시스템의 미래,</span>
          <span className="block mt-1">만송시스템</span>
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-blue-800 drop-shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 mt-0">
            <span className="block">스마트팩토리, IoT, B2B 소프트웨어</span>
            <span className="block mt-1">혁신 파트너</span>
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
