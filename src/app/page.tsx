
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">만송시스템</h1>
        <p className="text-lg text-gray-700 mb-8">공장 자동화 현장 모니터링 및 관제 시스템 전문 기업</p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">서비스 안내</h2>
          <ul className="text-gray-600 space-y-1">
            <li>ㆍ 공장 자동화 현장 모니터링 시스템 개발</li>
            <li>ㆍ 관제 시스템 구축 및 유지보수</li>
            <li>ㆍ 맞춤형 소프트웨어 솔루션 제공</li>
            <li>ㆍ B2B 전문 기술 지원</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">회사 정보</h2>
          <ul className="text-gray-600 space-y-1">
            <li>ㆍ 대표자: 임영무</li>
            <li>ㆍ 설립일: 2021.03.02</li>
            <li>ㆍ 사업자등록번호: 479-88-01974</li>
            <li>ㆍ 업종: 컴퓨터 및 주변장치, 소프트웨어 도매업</li>
            <li>ㆍ 특화분야: 공장 자동화, 관제 시스템</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">연락처</h2>
          <ul className="text-gray-600 space-y-1">
            <li>ㆍ 이메일: <a href="mailto:info@mansong.co.kr" className="text-blue-600 underline">info@mansong.co.kr</a></li>
            <li>ㆍ 전화: 02-1234-5678</li>
            <li>ㆍ 주소: 서울특별시 금천구 가산디지털1로 168 우림라이온스밸리</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="/order" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">온라인 주문 접수</a>
          <a href="/admin" className="px-6 py-3 bg-gray-200 text-blue-900 rounded-lg font-semibold hover:bg-gray-300 transition">관리자 대시보드</a>
        </div>
      </div>
    </main>
  );
}