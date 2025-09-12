"use client";
import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  return (
    <button
      aria-label="다크모드 토글"
      className="ml-2 p-2 rounded-full border border-blue-200 bg-white dark:bg-blue-900 dark:border-blue-700 shadow hover:bg-blue-50 dark:hover:bg-blue-800 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
      onClick={() => setDark((v) => !v)}
    >
      {dark ? (
        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" /></svg>
      ) : (
        <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
      )}
    </button>
  );
}
