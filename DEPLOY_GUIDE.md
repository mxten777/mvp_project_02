# 만송시스템 B2B 웹앱 배포 및 관리 가이드

## 1. GitHub 저장소 연결 및 커밋

1. Git 저장소 초기화
   ```bash
   git init
   ```

2. 원격 저장소 연결
   ```bash
   git remote add origin git@github.com:mxten777/mvp_project_02.git
   ```

3. 커밋 및 푸시
   ```bash
   git add .
   git commit -m "feat: 전체화면 B2B 전문업체 스타일 레이아웃 및 랜딩페이지 개선"
   git branch -M main
   git push -u origin main
   ```

---

## 2. Vercel 배포

### 2-1. Vercel CLI 설치 확인
```bash
vercel --version
```
- 설치되어 있으면 버전이 출력됨

### 2-2. 프로덕션 배포
```bash
vercel --prod
```
- 최초 실행 시 로그인 및 프로젝트 연결 안내에 따라 진행

### 2-3. 배포 결과 확인
- 명령 실행 후 출력되는 Production URL에서 사이트 확인

---

## 3. 참고 사항

- GitHub와 Vercel이 연동되어 있으면 `git push`만 해도 자동 배포됨
- 추가 설정, 오류 발생 시 메시지 확인 후 대응

---
