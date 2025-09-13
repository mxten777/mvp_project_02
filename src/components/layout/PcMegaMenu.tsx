"use client";
import React, { useState } from "react";
import Link from "next/link";

// PC용 메가메뉴/드롭다운 구조 (예시)
const menu = [
  {
    label: "회사소개",
    href: "/#about",
    children: [
      { label: "연혁", href: "/#history" },
      { label: "비전", href: "/#vision" },
      { label: "팀/채용", href: "/#team" },
    ],
  },
  {
    label: "서비스",
    href: "/#services",
    children: [
      { label: "공장 모니터링", href: "/#service1" },
      { label: "관제 시스템", href: "/#service2" },
      { label: "B2B 기술지원", href: "/#service3" },
    ],
  },
  {
    label: "포트폴리오",
    href: "/#portfolio",
    children: [],
  },
  {
    label: "문의하기",
    href: "#contact",
    children: [],
  },
];

export default function PcMegaMenu() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <nav className="hidden lg:flex gap-2 xl:gap-4 text-base font-semibold relative z-50">
      {menu.map((item, idx) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => setOpenIdx(idx)}
          onMouseLeave={() => setOpenIdx(null)}
        >
          <Link
            href={item.href}
            className="px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
          >
            {item.label}
          </Link>
          {item.children.length > 0 && openIdx === idx && (
            <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border border-blue-100 rounded-lg shadow-lg py-2 flex flex-col animate-fadeIn">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-100 whitespace-nowrap"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
