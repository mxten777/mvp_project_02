# 만송시스템 웹 애플리케이션

만송시스템을 위한 공장자동화 전문 웹 애플리케이션입니다.

## 🏢 회사 정보

- **회사명**: 만송시스템
- **대표자**: 임영무
- **설립일**: 2021년 3월 2일
- **사업자등록번호**: 479-88-01974
- **업종**: 컴퓨터 및 주변장치, 소프트웨어 도매업
- **특화분야**: 공장자동화 현장모니터링, 관제시스템 설치/교육/유지보수

## 🚀 주요 기능

### 1. 랜딩페이지
- 회사 소개 및 핵심 역량 안내
- ABB코리아 파트너십 정보
- 제공 서비스 상세 소개
- 연락처 및 문의 정보

### 2. 온라인 주문 접수 시스템
- 회사 정보 및 연락처 입력
- 장비명, 수량, 설치 희망일 선택
- 상세 요구사항 작성
- Firebase Firestore 실시간 데이터 저장

### 3. 관리자 대시보드
- 주문 목록 실시간 조회
- 주문 상태 관리 (대기중/처리중/완료/취소)
- 검색 및 필터링 기능
- 주문 통계 및 요약 정보

## 🛠 기술 스택

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Icons**: Heroicons
- **Date Handling**: date-fns
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 랜딩페이지
│   ├── order/
│   │   └── page.tsx          # 주문 접수 페이지
│   └── admin/
│       └── page.tsx          # 관리자 대시보드
├── lib/
│   ├── firebase.ts           # Firebase 설정
│   └── types.ts              # TypeScript 타입 정의
└── components/               # 재사용 가능한 컴포넌트들
```

## 🔧 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env.local` 파일을 생성하고 Firebase 설정을 추가하세요:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

## 📋 Firebase 설정 단계

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Firestore Database 활성화
3. 웹 앱 등록 및 설정 정보 복사
4. `.env.local` 파일에 설정 정보 입력

### Firestore 컬렉션 구조

```
orders/
├── {orderId}/
│   ├── companyName: string
│   ├── contactPerson: string
│   ├── email: string
│   ├── phone: string
│   ├── equipmentName: string
│   ├── quantity: number
│   ├── installationDate: string
│   ├── description: string
│   ├── status: 'pending' | 'processing' | 'completed' | 'cancelled'
│   ├── createdAt: timestamp
│   └── updatedAt: timestamp
```

## 🌐 배포

### Vercel 배포
```bash
npm run build
```

Vercel에 배포하기 전에 환경 변수를 Vercel 대시보드에서 설정해야 합니다.

## 📱 반응형 디자인

- 모바일 우선 반응형 디자인
- Tailwind CSS를 활용한 현대적 UI
- 다양한 화면 크기 지원

## 🔐 보안 고려사항

- Firebase Security Rules 설정 필요
- 관리자 인증 시스템 구현 권장
- 환경 변수를 통한 민감 정보 보호

## 📞 지원 및 문의

프로젝트 관련 문의사항이 있으시면 연락해 주세요.

- **이메일**: info@mansong.co.kr
- **전화**: 041-XXX-XXXX

---

© 2024 만송시스템. All rights reserved.
