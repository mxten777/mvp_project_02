# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## 프로젝트 개요
이 프로젝트는 **만송시스템**을 위한 웹 애플리케이션입니다.

### 회사 정보
- **회사명**: 만송시스템
- **대표자**: 임영무
- **설립일**: 2021.03.02
- **사업자등록번호**: 479-88-01974
- **업종**: 컴퓨터 및 주변장치, 소프트웨어 도매업
- **특화분야**: 공장 자동화 현장 모니터링, 관제 시스템

### 기술 스택
- **프레임워크**: Next.js 14 with App Router
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **데이터베이스**: Firebase Firestore
- **인증**: Firebase Auth (관리자용)
- **배포**: Vercel

### 주요 기능
1. **랜딩페이지**: 회사 소개, 서비스 안내, 연락처
2. **주문 접수 시스템**: 온라인 폼을 통한 주문 데이터 수집
3. **관리자 대시보드**: 주문 관리, 상태 변경, 검색/필터

### 코딩 가이드라인
- React 컴포넌트는 함수형으로 작성
- TypeScript 타입을 명확히 정의
- Tailwind CSS 클래스를 활용한 반응형 디자인
- Firebase와의 비동기 처리 시 적절한 에러 핸들링
- 한국어 UI 텍스트 사용
- 깔끔하고 전문적인 B2B 디자인

### 폴더 구조
```
src/
├── app/
│   ├── page.tsx (랜딩페이지)
│   ├── order/
│   │   └── page.tsx (주문 접수)
│   └── admin/
│       └── page.tsx (관리자 대시보드)
├── components/
│   ├── ui/ (재사용 가능한 UI 컴포넌트)
│   ├── forms/ (폼 관련 컴포넌트)
│   └── layout/ (레이아웃 컴포넌트)
├── lib/
│   ├── firebase.ts (Firebase 설정)
│   └── types.ts (TypeScript 타입 정의)
└── utils/ (유틸리티 함수들)
```
