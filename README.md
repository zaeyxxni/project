## 🏫 2025 Hanyang Univ. ERICA Club Festival Website

> **"당신의 대학 생활을 빛내줄 최고의 동아리를 찾아보세요!"** > 한양대학교 ERICA 캠퍼스의 다양한 중앙 동아리를 소개하고, 가입 신청까지 한 번에 할 수 있는 웹 플랫폼입니다.

---

## 프로젝트 개요
* **과목명:** 2025-2 오픈소스 개발과 활용
* **개발 기간:** 2025.12.03 ~ 2025.12.05
* **배포 URL:** [여기에_GitHub_Pages_주소_입력]

---

## 팀원 및 역할 분담

### 강재윤 (Leader)
* **Role:** Project Manager, Skeleton Developer
* **Contributions:**
    * GitHub Repository 개설 및 형상 관리 주도.
    * 웹 페이지 기획 및 전체 구조 설계 (HTML5 Semantic Tag 활용).
    * 동아리 분과(예술, 체육, 학술, 봉사, 종교) 카테고리 구성.
    * 최종 코드 병합(Merge) 및 README 문서 작성.

### 강서진 (Content Manager)
* **Role:** HTML Developer, Researcher
* **Contributions:**
    * 교내 주요 동아리(뭉게구름, 타이푼, 하이바 등) 정보 조사 및 텍스트 데이터화.
    * 동아리별 대표 이미지 수집 및 리소스 최적화.
    * HTML `Section` 및 `Article` 태그를 활용한 동아리 카드 목록 상세 구현.
    * 이미지 경로(Relative Path) 설정 및 `alt` 속성 적용.

### 강현석 (Frontend Developer)
* **Role:** CSS/JS Developer, UI/UX Designer
* **Contributions:**
    * **Design System:** Apple Style의 미니멀리즘 디자인 적용 (Inter 폰트, Bento Grid 레이아웃).
    * **CSS Styling:** Flexbox & Grid를 활용한 반응형 레이아웃 구현.
    * **Interaction:** `Hover` 효과 및 `Backdrop-filter`를 활용한 Glassmorphism(유리 질감) UI 구현.
    * **JavaScript:** 동아리 가입 신청 **모달(Modal) 팝업** 기능 개발.
    * **Validation:** 폼 입력 누락 시 붉은색 경고창 및 애니메이션(Shake) 효과 구현.

---

## 사용 기술 (Tech Stack)
* **HTML5:** 시맨틱 태그 구조 (`<header>`, `<main>`, `<section>`, `<footer>`) 준수.
* **CSS3:** CSS Variables, Flexbox, Grid, Animation (`@keyframes`), Media Query.
* **JavaScript (ES6+):** DOM 조작, Event Listener, Form Validation.

---

## 주요 기능 (Key Features)

1.  **반응형 벤토 그리드 (Responsive Bento Grid)**
    * 다양한 기기 환경에 맞춰 동아리 카드가 자동으로 재배치되는 모던한 레이아웃을 적용했습니다.
2.  **애플 스타일 UI (Apple-like UI)**
    * 직관적인 타이포그래피와 부드러운 트랜지션 효과로 사용자 경험(UX)을 극대화했습니다.
3.  **가입 신청 모달 & 유효성 검사**
    * 페이지 이동 없이 즉시 가입 신청이 가능하며, JavaScript를 통해 입력 값을 실시간으로 검증하여 오류를 시각적으로(Red Alert) 알려줍니다.
4.  **이미지 최적화**
    * GitHub Pages 환경에 맞춰 상대 경로를 사용하여 이미지가 깨지지 않도록 처리했습니다.

—

## 📂 폴더 구조 (Directory Structure)

```
project/
│
├── index.html          # 메인 페이지
├── style.css           # 사이트 전체 스타일
├── README.md           # 프로젝트 설명 문서
│
└── images/             # 동아리 이미지 폴더
    ├── 그림얼.jpg
    ├── 파랑소래.jpg
    ├── ...
    └── 기타 동아리 이미지들
```
