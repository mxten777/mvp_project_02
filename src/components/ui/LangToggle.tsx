"use client";
import React from "react";

export default function LangToggle({ lang, setLang }: { lang: 'ko' | 'en'; setLang: (l: 'ko' | 'en') => void }) {
  return (
    <div className="flex gap-1">
      <button
        className={`px-2 py-1.5 rounded text-xs font-bold transition min-w-[40px] min-h-[36px] ${lang === "ko" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-200"}`}
        onClick={() => setLang("ko")}
        type="button"
        aria-pressed={lang === "ko"}
      >
        KOR
      </button>
      <button
        className={`px-2 py-1.5 rounded text-xs font-bold transition min-w-[40px] min-h-[36px] ${lang === "en" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-200"}`}
        onClick={() => setLang("en")}
        type="button"
        aria-pressed={lang === "en"}
      >
        ENG
      </button>
    </div>
  );
}
