'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <div className="w-full min-h-screen flex flex-col bg-transparent">
      {/* Header */}
  <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl fixed top-0 left-0 w-full z-30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">만송시스템</h1>
              <span className="ml-3 text-sm text-blue-200">공장자동화 전문기업</span>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="#about" className="hover:text-blue-200 transition-colors">회사소개</Link>
              <Link href="#services" className="hover:text-blue-200 transition-colors">서비스</Link>
              <Link href="#contact" className="hover:text-blue-200 transition-colors">연락처</Link>
              <Link href="/order" className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">주문접수</Link>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-blue-200 transition-colors"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="#about" 
                className="block text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                회사소개
              </Link>
              <Link 
                href="#services" 
                className="block text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                서비스
              </Link>
              <Link 
                href="#contact" 
                className="block text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                연락처
              </Link>
              <Link 
                href="/order" 
                className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                주문접수
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
  <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-32 md:py-40 relative overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-indigo-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-slate-200 rounded-full blur-xl"></div>
        </div>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-700 to-slate-800 bg-clip-text text-transparent mb-8 tracking-tight drop-shadow-lg">
              공장자동화의 새로운 표준
            </h1>
            <p className="text-2xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              ABB코리아와의 전략적 파트너십을 바탕으로 현장 모니터링, 관제시스템 설치, 교육, 유지보수까지<br className="hidden md:inline" />
              만송시스템이 책임집니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/order" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                주문 접수하기
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                상담 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
  <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">회사 개요</h2>
            <p className="text-xl text-slate-600 font-medium">신뢰할 수 있는 공장자동화 파트너</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">만송시스템</h3>
              <div className="space-y-4">
                <div className="flex">
                  <span className="font-medium text-slate-700 w-32">대표자</span>
                  <span className="text-slate-600">임영무</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-slate-700 w-32">설립일</span>
                  <span className="text-slate-600">2021년 3월 2일</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-slate-700 w-32">사업자번호</span>
                  <span className="text-slate-600">479-88-01974</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-slate-700 w-32">업종</span>
                  <span className="text-slate-600">컴퓨터 및 주변장치, 소프트웨어 도매업</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-slate-700 w-32">소재지</span>
                  <span className="text-slate-600">충남 아산시 배방읍 광장로</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg border border-blue-100">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">핵심 역량</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  센서/액추에이터 연동 및 PLC/DCS 통신 설정
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  SCADA/HMI 시스템 구축 및 안전시스템 연동
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  데이터 통합 플랫폼 구축 (ABB System 800xA)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  제어 로직 구현 및 시스템 테스트/검증
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  ABB코리아와의 전략적 파트너십
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
  <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">제공 서비스</h2>
            <p className="text-xl text-slate-600 font-medium">공장자동화를 위한 종합 솔루션</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">시스템 통합 및 설치</h3>
              <p className="text-slate-600 mb-4">
                센서/액추에이터 연동부터 PLC/DCS 통신까지 완전한 시스템 통합 서비스를 제공합니다.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 센서 및 액추에이터 연동</li>
                <li>• PLC/DCS 통신 설정</li>
                <li>• SCADA/HMI 시스템 구축</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">제어 시스템 구현</h3>
              <p className="text-slate-600 mb-4">
                ABB System 800xA 플랫폼을 활용한 데이터 통합 및 제어 로직 구현을 담당합니다.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 제어 로직 프로그래밍</li>
                <li>• 데이터 통합 플랫폼 구축</li>
                <li>• 안전 시스템 연동</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">테스트 및 유지보수</h3>
              <p className="text-slate-600 mb-4">
                시스템 검증부터 지속적인 유지보수까지 전 과정을 책임지고 관리합니다.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• 시스템 테스트 및 검증</li>
                <li>• 시뮬레이션 환경 구축</li>
                <li>• 정기 점검 및 업그레이드</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
  <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">연락처</h2>
            <p className="text-xl text-slate-600 font-medium">언제든지 문의해 주세요</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">전화 문의</h3>
              <p className="text-slate-600">041-XXX-XXXX</p>
            </div>
            
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                <EnvelopeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">이메일</h3>
              <p className="text-slate-600">info@mansong.co.kr</p>
            </div>
            
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center mb-4">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">주소</h3>
              <p className="text-slate-600">충남 아산시 배방읍 광장로</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8 mt-auto w-full border-t border-slate-800 fixed bottom-0 left-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold mb-2 tracking-tight">만송시스템</h3>
            <p className="text-slate-300 mb-1 text-lg">공장자동화 전문 기업</p>
            <p className="text-slate-400 text-sm">
              © 2024 만송시스템. All rights reserved. | 사업자등록번호: 479-88-01974
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
