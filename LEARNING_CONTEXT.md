# React & TypeScript 단계적 학습 맥락 (LEARNING_CONTEXT.md)

## 1. 프로젝트 목적 및 방향성
이 프로젝트는 백엔드 개발자인 사용자가 React와 TypeScript의 기초부터 시작하여 최종적으로 **`slice-stream-engine` 프로젝트의 프론트엔드/클라이언트 모듈을 스스로 완벽히 유지보수할 수 있는 역량**을 기르기 위한 학습용 실습 프로젝트입니다.
기존의 프론트엔드 코드가 AI에 의해 100% 자동 생성된 코드라 직접 유지보수하기 어려운 한계를 극복하기 위해, 기초적인 개념부터 하나씩 직접 작성하며 학습을 전개합니다.

---

## 2. slice-stream-engine 클라이언트 분석 요약
원격 프로젝트인 `/Users/iyonghwa/slice-stream-engine/client`를 분석한 결과, 최종 구현해야 할 프론트엔드의 핵심 스펙은 다음과 같습니다:
*   **Vite + TypeScript + Tailwind CSS (v4)** 기반 환경
*   **React Router DOM**: 메인 페이지 (`/`)와 스트리머 상세 분석 대시보드 (`/streams/:streamId`) 라우팅
*   **비동기 데이터 관리**: `fetch` API 기반의 주기적 폴링(setInterval), AbortController를 이용한 메모리 누수 방지, 이를 커스텀 훅(`useStreams`, `useStreamAnalysis`, `useHighlights`)으로 캡슐화
*   **Zod 스키마 검증**: 백엔드 API 응답 데이터의 런타임 타입 검증 (`types/stream.ts`)
*   **차트 시각화**: `Recharts`를 사용해 실시간/과거 화력 데이터(LineChart) 시각화 및 리방 인덱스 구분선 제공
*   **대규모 목록 최적화**: 100개 이상의 스트리머 카드가 로딩될 때 브라우저 부하를 방지하기 위한 `IntersectionObserver` 기반 클라이언트 사이드 무한 스크롤

---

## 3. 학습 및 협업 원칙 (성장 도우미 선언)
1. **정답 코드 바로 제시하지 않기**: AI가 바로 완성된 소스코드를 제공하는 대신, 필요한 개념을 질문과 예시로 유도하며 사용자가 직접 생각하고 코드를 작성하도록 돕습니다.
2. **초보자 눈높이의 기본 문법 설명 필수**: 변수 선언(const/let), 타입 지정(:), 중괄호({}), 화살표 함수(=>) 등 처음 나타나는 리액트/타입스크립트/자바스크립트의 기본 문법이 있다면 백엔드 개발자 입장에서 직관적이고 상세하게 풀어서 설명합니다.
3. **코드 내 주석 최소화**: 생성하는 코드에는 주석을 달지 않고, 깨끗하고 직관적인 코드로 작성할 수 있도록 돕습니다.
4. **한국어 로그 사용**: 설명과 로그 메시지는 모두 명확한 한국어로 제공합니다.

---

## 4. 왕초보용 단계별 학습 로드맵
실제 `slice-stream-engine` 클라이언트 수준에 도달하기 위해, 점진적으로 조각들을 완성해 가는 학습 계획을 따릅니다:

### [Step 1] 정적 대시보드 UI 구현 (`Step1_StaticDashboard.tsx`)
*   **목표**: 디자인 요소를 화면에 그리고 컴포넌트를 정의하는 법 익히기
*   **학습 내용**: React 함수형 컴포넌트, Props 구조, TypeScript Interface 선언 및 사용, 임시 더미 데이터(Mock Data) 하드코딩 후 화면 렌더링

### [Step 2] 상태 관리 및 클라이언트 상호작용 (`Step2_InteractiveDashboard.tsx`)
*   **목표**: 검색 필터링 및 토글 버튼을 추가하여 동적인 화면 제어
*   **학습 내용**: `useState` 훅, 이벤트 헨들링(`onChange`), JS 배열 헬퍼(`filter`, `map`), `useMemo` 맛보기

### [Step 3] 비동기 데이터 로딩 및 API 연동 (`Step3_FetchDashboard.tsx`)
*   **목표**: 하드코딩 데이터를 제거하고 백엔드 API에서 데이터 불러오기
*   **학습 내용**: 비동기 함수(`async/await`), `useEffect` 훅을 이용한 마운트 시점 API 호출, 로딩 및 에러 상태 처리

### [Step 4] 실시간 폴링 및 커스텀 훅 구조화 (`Step4_PollingDashboard.tsx`)
*   **목표**: 실시간성 부여 및 데이터 fetching 로직 분리
*   **학습 내용**: `setInterval` 폴링, `useCallback`, 커스텀 훅(`useStreams`)으로 상태와 로직 추상화

### [Step 5] 라우팅 및 상세 페이지 전환 (`Step5_RoutingDashboard.tsx`)
*   **목표**: 페이지 전환 및 데이터 공유
*   **학습 내용**: `react-router-dom` 설치 및 세팅, `useNavigate`와 URL 파라미터(`useParams`) 추출

### [Step 6] 차트 시각화 기초 (`Step6_ChartDashboard.tsx`)
*   **목표**: 수치 데이터를 시각적인 그래프로 표현
*   **학습 내용**: `Recharts` 라이브러리 연동 및 차트 컴포넌트(LineChart 등) 제어

### [Step 7] 무한 스크롤 최적화 및 고도화
*   **목표**: 대규모 목록에서 성능 유지
*   **학습 내용**: `useRef`, `IntersectionObserver` 활용법

---

## 5. 현재 진행 상황
*   **Step 1: 정적 대시보드 UI 구현**을 진행 중입니다.
*   `src/stream-dashboard-practice/Step1_StaticDashboard.tsx` 파일에 `StreamerInfo` 인터페이스 선언과 `mockStreamers` 더미 데이터 배열 정의를 완료했습니다.
*   **다음 작업**: 리액트 컴포넌트를 선언하고 `mockStreamers.map()`을 이용해 화면에 스트리머 이름을 그리는 뼈대 코드를 작성해야 합니다.

---

## 6. 오늘 배운 기본 문법 개념
*   **타입 어노테이션 (`변수: 타입`)**: TypeScript에서 변수 뒤에 콜론(`:`)을 붙여 해당 변수의 데이터 규격을 강제하고 정의하는 문법입니다. (예: `const list: Type[]`)
*   **중괄호 (`{}`)**: JS/TS에서 데이터를 구조화하여 담는 객체(Object)를 표현하는 기호입니다. (Java의 Map이나 클래스 인스턴스처럼 Key-Value 형태로 저장)
