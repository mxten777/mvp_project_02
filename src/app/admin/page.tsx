"use client";
import React, { useState } from "react";
import CountUp from "@/components/ui/CountUp";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Page() {
  // 언어 상태 및 다국어 텍스트
  const [lang] = useState<"ko" | "en">("ko");
  type LangKey =
    | "trust"
    | "trust1"
    | "trust2"
    | "trust3";
  const t: Record<"ko" | "en", Record<LangKey, string>> = {
    ko: {
      trust: "신뢰와 함께하는 파트너",
      trust1: "ISO 품질인증",
      trust2: "산업통상자원부 인증",
      trust3: "우수기업 선정",
    },
    en: {
      trust: "Trusted Partners",
      trust1: "ISO Certification",
      trust2: "Ministry Approved",
      trust3: "Excellence Award",
    }
  };

  // 신뢰/고객사/수상 이미지
  const customerImages = [
    "/images/crystal-blue.jpg",
    "/images/KakaoTalk_20250707_221323903.jpg",
    "/images/pattern-01.jpg",
    "/images/sphere-01.jpg",
    "/images/fractal-01.jpg",
    "/images/clock-01.jpg",
    "/images/chart-01.jpg",
    "/images/pinterest.jpg",
    "/images/pattern-02.jpg",
    "/images/pattern-03.jpg",
    "/images/sphere-02.jpg",
    "/images/sphere-03.jpg",
    "/images/fractal-02.jpg",
    "/images/ring-green.jpg",
    "/images/clock-02.jpg",
    "/images/KakaoTalk_20250708_082652734_01.jpg",
    "/images/KakaoTalk_20250708_082652734_02.jpg",
    "/images/KakaoTalk_20250708_082652734_03.jpg",
    "/images/KakaoTalk_20250708_082652734.jpg",
  ];
  const customerFixed = customerImages.slice(0, 4);
  const awardFixed = customerImages.slice(4, 7);
  const trustKeys = ['trust1', 'trust2', 'trust3'] as const;

  // 주문 샘플 데이터 및 상태 관리
  const [orders, setOrders] = useState([
    {
      id: "20250913-001",
      name: "홍길동",
      email: "hong@sample.com",
      status: "신규",
      date: "2025-09-13",
    },
    {
      id: "20250913-002",
      name: "김관리자",
      email: "admin@sample.com",
      status: "처리중",
      date: "2025-09-12",
    },
  ]);
  const [filter, setFilter] = useState({ keyword: "", status: "" });

  // 주문 상태 변경 핸들러
  const handleStatusChange = (id: string, newStatus: string) => {
    setOrders(prev => prev.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  // 고급 검색/필터 핸들러
  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    // 별도 동작 필요시 구현
  };

  // 필터링된 주문 목록
  const filteredOrders = orders.filter(order =>
    (!filter.status || order.status === filter.status) &&
    (!filter.keyword || order.name.includes(filter.keyword) || order.email.includes(filter.keyword) || order.id.includes(filter.keyword))
  );

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* 관리자 대시보드 헤더 */}
      <header className="w-full bg-blue-900 text-white py-6 px-4 shadow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">만송시스템 관리자 대시보드</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base font-medium opacity-80">관리자 전용 | Admin Only</span>
            <DarkModeToggle />
          </div>
        </div>
      </header>

      {/* 12컬럼 그리드 기반 컨테이너 */}
      <section className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 사이드바(예시) */}
        <aside className="hidden lg:block lg:col-span-2">
          <nav className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 sticky top-24">
            <a href="#orders" className="font-semibold text-blue-700 hover:underline">주문 관리</a>
            <a href="#users" className="font-semibold text-blue-700 hover:underline">회원 관리</a>
            <a href="#stats" className="font-semibold text-blue-700 hover:underline">통계</a>
            <a href="#settings" className="font-semibold text-blue-700 hover:underline">설정</a>
          </nav>
        </aside>

        {/* 메인 대시보드 영역 */}
        <div className="col-span-1 lg:col-span-10 flex flex-col gap-10">
          {/* 통계/그래프 영역 */}
          <section id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-2">
            <div className="bg-white dark:bg-blue-950 rounded-xl shadow p-6 flex flex-col items-center border border-blue-100 dark:border-blue-800">
              <span className="text-xs text-blue-700 dark:text-blue-200 font-semibold mb-1">전체 주문</span>
              <CountUp end={orders.length} className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-yellow-300" />
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-xl shadow p-6 flex flex-col items-center border border-blue-100 dark:border-blue-800">
              <span className="text-xs text-blue-700 dark:text-blue-200 font-semibold mb-1">신규</span>
              <CountUp end={orders.filter(o=>o.status==="신규").length} className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-yellow-300" />
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-xl shadow p-6 flex flex-col items-center border border-blue-100 dark:border-blue-800">
              <span className="text-xs text-blue-700 dark:text-blue-200 font-semibold mb-1">처리중</span>
              <CountUp end={orders.filter(o=>o.status==="처리중").length} className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-yellow-300" />
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-xl shadow p-6 flex flex-col items-center border border-blue-100 dark:border-blue-800">
              <span className="text-xs text-blue-700 dark:text-blue-200 font-semibold mb-1">완료/취소</span>
              <CountUp end={orders.filter(o=>o.status==="완료"||o.status==="취소").length} className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-yellow-300" />
            </div>
          </section>
          {/* 고급 검색/필터 영역 */}
          <form className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-xl shadow p-6 border border-blue-100" onSubmit={handleFilter}>
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white"
              placeholder="주문자명, 이메일, 주문번호 등 검색"
              value={filter.keyword}
              onChange={e => setFilter(f => ({ ...f, keyword: e.target.value }))}
            />
            <select
              className="w-40 px-3 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white"
              value={filter.status}
              onChange={e => setFilter(f => ({ ...f, status: e.target.value }))}
            >
              <option value="">전체 상태</option>
              <option value="신규">신규</option>
              <option value="처리중">처리중</option>
              <option value="완료">완료</option>
              <option value="취소">취소</option>
            </select>
            <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition text-base min-w-[100px]">검색</button>
          </form>

          {/* 주문 테이블 (고급 상태변경 포함) */}
          <div className="overflow-x-auto bg-white rounded-xl shadow p-0 border border-blue-100">
            <table className="min-w-full text-sm md:text-base">
              <thead className="bg-blue-50 border-b">
                <tr>
                  <th className="px-4 py-3 font-bold text-blue-900">주문번호</th>
                  <th className="px-4 py-3 font-bold text-blue-900">고객명</th>
                  <th className="px-4 py-3 font-bold text-blue-900">이메일</th>
                  <th className="px-4 py-3 font-bold text-blue-900">상태</th>
                  <th className="px-4 py-3 font-bold text-blue-900">주문일</th>
                  <th className="px-4 py-3 font-bold text-blue-900">액션</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-gray-400 py-8">검색 결과가 없습니다.</td>
                  </tr>
                )}
                {filteredOrders.map(order => (
                  <tr key={order.id} className="border-b hover:bg-blue-50">
                    <td className="px-4 py-3">{order.id}</td>
                    <td className="px-4 py-3">{order.name}</td>
                    <td className="px-4 py-3">{order.email}</td>
                    <td className="px-4 py-3">
                      <select
                        className="px-2 py-1 rounded border border-blue-200 bg-white text-sm"
                        value={order.status}
                        onChange={e => handleStatusChange(order.id, e.target.value)}
                      >
                        <option value="신규">신규</option>
                        <option value="처리중">처리중</option>
                        <option value="완료">완료</option>
                        <option value="취소">취소</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">{order.date}</td>
                    <td className="px-4 py-3">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-bold">상세</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 추가 대시보드/통계/그래프/설정 등 섹션은 여기에... */}
        </div>
      </section>

      {/* 플로팅 문의/견적 버튼 */}
      <a
        href="mailto:info@mansong.co.kr"
        className="fixed z-50 right-4 bottom-32 md:bottom-8 px-6 py-3 rounded-full bg-blue-600 text-white shadow-lg flex items-center gap-2 text-base font-bold hover:bg-blue-700 transition md:right-8"
        style={{ minWidth: '180px' }}
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" /></svg>
        문의/견적 요청
      </a>
    </main>
  );
}