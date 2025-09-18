import React from "react";

interface ParallaxHeroProps {
  backgroundImage: string;
  title: string | React.ReactNode;
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
      {/* Content Only: 배경 제거 */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 drop-shadow-[0_4px_24px_rgba(0,0,0,0.08)] mb-6 leading-snug tracking-tight whitespace-pre-line break-keep">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-blue-800 drop-shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 mt-0">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
