"use client";
import React from "react";

export default function LangToggle({ lang, setLang }: { lang: 'ko' | 'en'; setLang: (l: 'ko' | 'en') => void }) {
  return (
    <div className="flex gap-1 ml-2">
      <button
        className={`px-2 py-1 rounded text-xs font-bold transition ${lang === "ko" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-200"}`}
        onClick={() => setLang("ko")}
        type="button"
      >
        KOR
      </button>
      <button
        className={`px-2 py-1 rounded text-xs font-bold transition ${lang === "en" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-200"}`}
        onClick={() => setLang("en")}
        type="button"
      >
        ENG
      </button>
    </div>
  );
}
