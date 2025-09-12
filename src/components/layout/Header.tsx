"use client";
import React, { useState } from "react";
import LangToggle from "@/components/ui/LangToggle";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Header() {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-sm border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group py-2.5 px-1">
          <img src="/file.svg" alt="만송시스템 로고" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight group-hover:text-blue-700 transition">만송시스템</span>
        </a>
        <nav className="hidden md:flex gap-6 text-base font-medium">
          <a href="/" className="hover:text-blue-600 transition py-2.5 px-2">홈</a>
          <a href="/order" className="hover:text-blue-600 transition py-2.5 px-2">주문</a>
          <a href="/admin" className="hover:text-blue-600 transition py-2.5 px-2">관리자</a>
          <a href="#contact" className="hover:text-blue-600 transition py-2.5 px-2">문의</a>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <DarkModeToggle />
          <a href="#contact" className="ml-2 px-4 py-2.5 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition hidden sm:inline-block min-w-[90px] text-center">
            상담 문의
          </a>
          {/* 모바일 메뉴 버튼 - 터치 영역 확대 */}
          <button className="md:hidden p-2.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}