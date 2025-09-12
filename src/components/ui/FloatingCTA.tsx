"use client";
import React from "react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-end">
      <a
        href="#contact"
        className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 transition text-base animate-bounce"
        style={{ boxShadow: "0 4px 24px 0 rgba(30,64,175,0.15)" }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5l-9 7.5-9-7.5" /></svg>
        문의/견적 요청
      </a>
      <a
        href="/order"
        className="flex items-center gap-2 px-5 py-2 bg-white text-blue-700 font-bold rounded-full shadow hover:bg-blue-100 border border-blue-200 dark:bg-slate-900 dark:text-blue-200 dark:border-blue-700 dark:hover:bg-slate-800 transition text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
        온라인 주문
      </a>
    </div>
  );
}
