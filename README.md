## 🏫 2026 Hanyang Univ. ERICA Club Festival Website

> **"당신의 대학 생활을 빛내줄 최고의 동아리를 찾아보세요!"** > 한양대학교 ERICA 캠퍼스의 다양한 중앙 동아리를 소개하고, 가입 신청까지 한 번에 할 수 있는 웹 플랫폼입니다.

---

## 프로젝트 개요
* **과목명:** 2025-2 오픈소스 개발과 활용
* **개발 기간:** 2025.12.03 ~ 2025.12.10
* **배포 URL:** https://zaeyxxni.github.io/project/

---

## 팀원 및 역할 분담

### 강재윤 (Leader)
* **Role:** Project Manager, HTML Structure Developer
* **Contributions:**
    * GitHub Repository 구성 및 Branch 관리 총괄
    * HTML 구조 설계 (header, main, section, footer)
    * 동아리 분과(예술, 체육, 학술, 봉사, 종교) 카테고리 구조화
    * 최종 코드 병합(Merge) 및 README 문서 작성

### 강서진 (Content Manager)
* **Role:** HTML Developer, Researcher
* **Contributions:**
    * 교내 주요 동아리 정보(텍스트, 이미지) 수집 및 정제
    * 동아리별 대표 이미지 수집 및 리소스 최적화
    * HTML `Section` 및 `Article` 태그를 활용한 동아리 카드 목록 상세 구현
    * 이미지 경로(Relative Path) 설정 및 `alt` 속성 적용

### 강현석 (Frontend Developer)
* **Role:** CSS/JS Developer, UI/UX Designer
* **Contributions:**
    * Apple-Style UI 기반 Design System 구축
    * CSS로 반응형 레이아웃, 네비게이션 바, 모달 스타일 구현
    * JavaScript로 모달 열기/닫기, 폼 유효성 검사 기능 개발
    * 입력 오류 실시간 처리 기능 및 사용자 경험(UX) 개선
    * IntersectionObserver 기반 스크롤 애니메이션 구현

---

## 기술 스택 (Tech Stack)
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **UI 디자인:** Flexbox, Grid, CSS Variables, Animation
* **애니메이션:** IntersectionObserver API, Keyframes Animation
* **배포:** GitHub Pages

---

## 주요 기능 (Key Features)

1) **분과별 동아리 목록 및 반응형 레이아웃**
	•	예술·체육·학술/교양·봉사·종교 분과별 분류
	•	Grid 기반 카드 리스트 자동 재배치

2) **Apple-like UI / Glassmorphism 디자인**
	•	투명·반투명 효과의 모달 창
	•	Inter 폰트 기반 타이포그래피
	•	고정 내비게이션 바 & Hero 섹션 디자인

3) **가입 신청 모달 + 실시간 유효성 검사**
	•	페이지 이동 없이 즉시 신청 가능
	•	JavaScript로 입력 오류를 실시간 감지 및 시각적 표시
	•	사용자 입력값 검증 후 모달 알림 제공

4) **이미지 경로 최적화**
	•	GitHub Pages 환경을 고려한 상대 경로 사용
	•	이미지 누락 시 대체 이미지 자동 표시

5) **Scroll Reveal 인터랙션**
	•	IntersectionObserver 기반 카드 등장 애니메이션
	•	섹션 타이틀 및 카드 요소 자연스러운 fade-up 효과
—

## 📂 폴더 구조 (Directory Structure)

```
project/
│
├── index.html          # 메인 페이지(전체 구조 & 동아리 카드 목록)
├── style.css           # 사이트 전체 스타일 (Apple UI, 모달, 반응형, 애니메이션 포함)
├── script.js           # 모달 기능, 폼 유효성 검사, 스크롤 인터랙션
├── README.md           # 프로젝트 설명 문서
│
└── images/             # 동아리 이미지 폴더
    ├── 뭉게구름.png
    ├── 파랑소래.png
    ├── ...
    └── 기타 동아리 이미지들
```

## 사용한 AI 도구 출처

- Google Gemini (모델: Gemini 2.0 / Advanced)
- 사용 목적: 코드 설명, 구현 방향 제안, 리팩터링 아이디어 참고
- 참고한 대화 내용: 개인 학습 기록 기반

