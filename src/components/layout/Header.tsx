import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import LangToggle from "@/components/ui/LangToggle";


const navItemsKo = [
  { label: "홈", href: "#" },
  { label: "서비스", href: "#services" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "공지사항", href: "#news" },
  { label: "문의", href: "#contact" },
];
const navItemsEn = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'ko' | 'en'>("ko");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/file.svg" alt="만송시스템" className="w-8 h-8" />
          <span className="text-xl font-bold text-blue-900 tracking-tight">만송시스템</span>
        </div>
        <ul className="hidden md:flex gap-8 text-blue-900 font-semibold">
          {(lang === "ko" ? navItemsKo : navItemsEn).map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <LangToggle lang={lang} setLang={setLang} />
          <DarkModeToggle />
          <div className="md:hidden">
            {/* 모바일 메뉴(추후 구현) */}
          </div>
        </div>
      </nav>
    </header>
  );
}
