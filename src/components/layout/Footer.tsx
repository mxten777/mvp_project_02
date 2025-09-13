import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white mt-10 sm:mt-20 border-t border-blue-950 overflow-hidden">
      {/* 배경 패턴 이미지 - 모바일에서는 더 작게 표시 */}
      <img src="/images/pattern-01.jpg" alt="footer pattern" className="absolute left-0 top-0 w-1/2 h-full object-cover opacity-5 sm:opacity-10 pointer-events-none select-none" />
      <img src="/images/pattern-02.jpg" alt="footer pattern" className="absolute right-0 bottom-0 w-1/4 sm:w-1/3 h-1/2 sm:h-2/3 object-cover opacity-5 sm:opacity-10 pointer-events-none select-none" />
      {/* 데코레이션 이미지 - 모바일에서는 숨김 또는 축소 */}
      <img src="/images/apple-green.jpg" alt="footer deco" className="hidden sm:block absolute left-10 bottom-4 w-16 sm:w-24 h-16 sm:h-24 object-contain opacity-20 sm:opacity-30 pointer-events-none select-none" />
      <img src="/images/sphere-03.jpg" alt="footer deco" className="hidden sm:block absolute right-10 top-8 w-12 sm:w-20 h-12 sm:h-20 object-contain opacity-10 sm:opacity-20 pointer-events-none select-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-10 flex flex-col gap-8">
        {/* 주요 푸터 콘텐츠 - 모바일에서는 스택 레이아웃 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* 회사 정보 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/file.svg" alt="만송시스템 로고" className="w-8 h-8" />
              <span className="text-lg font-bold tracking-tight">만송시스템</span>
            </div>
            <p className="text-sm text-blue-100 mb-1 leading-relaxed break-words">대표자: 임영무</p>
            <p className="text-sm text-blue-100 mb-1 leading-relaxed break-words">사업자등록번호: 479-88-01974</p>
            <p className="text-sm text-blue-100 mb-1 leading-relaxed break-words">업종: 컴퓨터 및 주변장치, 소프트웨어 도매업</p>
            <p className="text-sm text-blue-100 mb-1 leading-relaxed break-words">특화: 공장 자동화 현장 모니터링, 관제 시스템</p>
          </div>
          
          {/* 서비스/바로가기 */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-1 text-base">서비스</span>
            <div className="flex flex-wrap gap-2">
              <Link href="/" className="text-blue-100 text-sm active:underline px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">홈</Link>
              <Link href="/order" className="text-blue-100 text-sm active:underline px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">주문</Link>
              <Link href="/admin" className="text-blue-100 text-sm active:underline px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">관리자</Link>
              <Link href="#contact" className="text-blue-100 text-sm active:underline px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">문의</Link>
            </div>
          </div>
          
          {/* 소셜/연락처 */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-1 text-base">Contact</span>
            <a href="mailto:info@mansong.co.kr" className="flex items-center gap-3 text-blue-100 text-sm py-2 rounded-xl active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[44px]">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-8.97 6.66a2 2 0 0 1-2.06 0L2 6"/></svg>
              info@mansong.co.kr
            </a>
            <a href="tel:010-1234-5678" className="flex items-center gap-3 text-blue-100 text-sm py-2 rounded-xl active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[44px]">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L9.03 10.97a16 16 0 0 0 6 6l1.8-1.22a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
              010-1234-5678
            </a>
            <div className="flex gap-4 mt-3">
              <a href="#" className="rounded-full bg-white/10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"><img src="/images/whatsapp-01.jpg" alt="WhatsApp" className="w-7 h-7 rounded" /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"><img src="/images/whatsapp-02.jpg" alt="WhatsApp" className="w-7 h-7 rounded" /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"><img src="/images/whatsapp-03.jpg" alt="WhatsApp" className="w-7 h-7 rounded" /></a>
            </div>
          </div>
        </div>
        
        {/* 저작권 정보 - 모바일에서 중앙 정렬 */}
        <div className="border-t border-blue-800 pt-4 mt-2 text-center">
          <p className="text-xs text-blue-200 leading-relaxed">© 2021-2025 Mansong System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
