"use client";
import React from "react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-row items-center sm:bottom-8 sm:right-8">
      <a
        href="#contact"
        className="flex items-center gap-1 px-3 py-1.5 bg-blue-700 text-white font-bold rounded-full shadow-md hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 transition text-xs sm:text-sm min-w-[80px] min-h-[36px]"
        style={{ boxShadow: "0 2px 8px 0 rgba(30,64,175,0.10)" }}
        aria-label="문의/견적 요청"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5l-9 7.5-9-7.5" /></svg>
        문의/견적
      </a>
    </div>
  );
}
