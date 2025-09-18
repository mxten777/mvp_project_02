"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangToggle from "@/components/ui/LangToggle";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import PcMegaMenu from "@/components/layout/PcMegaMenu";

export default function Header() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // 스크롤 감지 효과
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 w-full backdrop-blur transition-all duration-300 
        ${scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-md' 
          : 'bg-white/80 dark:bg-slate-900/80 shadow-sm'} 
        border-b border-slate-200/80 dark:border-slate-800/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center group py-2.5 px-1 relative">
          <div className="relative">
            <img 
              src="/baikal_logo.png" 
              alt="만송시스템 로고" 
              className={`w-12 h-12 rounded-full object-cover shadow-md transition-all duration-300
                ${scrolled ? 'border-2 border-blue-300' : 'border-3 border-blue-200'}`} 
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse-slow"></div>
          </div>
        </Link>
        
        {/* 중간 사이즈 네비게이션 */}
        <nav className="hidden md:flex lg:hidden gap-6 text-base font-medium">
          <Link 
            href="/" 
            className={`relative py-2.5 px-2 transition-colors
              hover:text-blue-600 ${pathname === '/' ? 'text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
          >
            홈
            {pathname === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"></span>}
          </Link>
          <Link 
            href="/order" 
            className={`relative py-2.5 px-2 transition-colors
              hover:text-blue-600 ${pathname === '/order' ? 'text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
          >
            주문
            {pathname === '/order' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"></span>}
          </Link>
          <Link 
            href="/admin" 
            className={`relative py-2.5 px-2 transition-colors
              hover:text-blue-600 ${pathname === '/admin' ? 'text-blue-600' : 'text-slate-700 dark:text-slate-300'}`}
          >
            관리자
            {pathname === '/admin' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded"></span>}
          </Link>
          <Link 
            href="#contact" 
            className="relative py-2.5 px-2 transition-colors hover:text-blue-600"
          >
            문의
          </Link>
        </nav>
        
        {/* PC 메가메뉴: lg~ */}
        <PcMegaMenu />
        
        {/* 우측 액션 버튼 영역 */}
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <DarkModeToggle />
          <Link 
            href="#contact" 
            className="ml-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold 
              shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-600 
              active:shadow-inner transition-all hidden sm:inline-block min-w-[90px] text-center"
          >
            상담 문의
          </Link>
          
          {/* 모바일 메뉴 버튼 */}
          <button 
            className="md:hidden p-2.5 rounded-lg bg-slate-100/80 hover:bg-slate-200 dark:bg-slate-800/80 
              dark:hover:bg-slate-700 min-w-[44px] min-h-[44px] flex items-center justify-center
              transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* 모바일 메뉴 (접었다 펼칠 수 있음) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 dark:bg-slate-900/95 
          border-t border-slate-200 dark:border-slate-800 
          ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          <Link 
            href="/" 
            className={`py-2.5 px-3 rounded-lg ${pathname === '/' 
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' 
              : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            홈
          </Link>
          <Link 
            href="/order" 
            className={`py-2.5 px-3 rounded-lg ${pathname === '/order' 
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' 
              : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            주문
          </Link>
          <Link 
            href="/admin" 
            className={`py-2.5 px-3 rounded-lg ${pathname === '/admin' 
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' 
              : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            관리자
          </Link>
          <Link 
            href="#contact" 
            className="py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            문의하기
          </Link>
        </div>
      </div>
    </header>
  );
}