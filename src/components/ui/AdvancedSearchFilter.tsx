import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface AdvancedSearchFilterProps {
  categories: Option[];
  onFilter: (filters: { keyword: string; category: string }) => void;
}

/**
 * PC 환경 전용 고급 검색/필터 UI 컴포넌트
 * - 키워드 검색 + 카테고리 필터
 * - 반응형 Tailwind 스타일 적용
 */
const AdvancedSearchFilter: React.FC<AdvancedSearchFilterProps> = ({ categories, onFilter }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ keyword, category });
  };

  return (
    <form
      className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-4 bg-white/80 rounded-xl shadow px-4 py-3 md:py-4 mb-6 border border-blue-100"
      onSubmit={handleSubmit}
      role="search"
      aria-label="서비스/포트폴리오 검색 및 필터"
    >
      <input
        type="text"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base md:text-lg bg-white"
        placeholder="키워드로 검색 (예: 스마트팩토리, IoT, B2B)"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        aria-label="키워드 검색"
      />
      <select
        className="w-40 md:w-48 px-3 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base md:text-lg bg-white"
        value={category}
        onChange={e => setCategory(e.target.value)}
        aria-label="카테고리 선택"
      >
        <option value="">전체 카테고리</option>
        {categories.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition text-base md:text-lg min-w-[100px]"
        aria-label="검색"
      >
        검색
      </button>
    </form>
  );
};

export default AdvancedSearchFilter;
