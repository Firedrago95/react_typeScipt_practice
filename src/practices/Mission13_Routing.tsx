import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return <h2>홈 페이지</h2>;
}

function AboutPage() {
  return <h2>소개 페이지</h2>;
}

function DashboardPage() {
  return <h2>대시보드 페이지</h2>;
}

function NotFoundPage() {
    return <h2>404: 페이지를 찾을 수 없습니다.</h2>;
}

export default function Mission13_Routing() {
  return (
    <BrowserRouter>
      <div>
        <h1>Mission 13: React Router DOM</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/dashboard">대시보드</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* Route 설정을 이곳에 정의합니다. */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* 일치하는 라우트가 없을 때 표시될 컴포넌트 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
