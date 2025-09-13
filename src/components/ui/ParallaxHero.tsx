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
const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  height = "600px",
  children,
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const elementTop = rect.top + scrollTop;
      const windowHeight = window.innerHeight;
      // Parallax 범위 제한 (Hero 영역 내에서만)
      if (scrollTop + windowHeight > elementTop && scrollTop < elementTop + ref.current.offsetHeight) {
        setOffset((scrollTop - elementTop) * 0.4); // Parallax 강도 조절
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height }}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset}px) scale(1.08)`,
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold drop-shadow-lg mb-4">{title}</h1>
        {subtitle && <p className="text-lg lg:text-2xl font-medium mb-6 drop-shadow">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
