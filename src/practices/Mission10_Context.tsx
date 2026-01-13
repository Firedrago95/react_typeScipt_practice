import { createContext, useState, useContext, type ReactNode } from 'react';

// 1. Context 데이터 타입 정의
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// 2. Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider 컴포넌트
function ThemeProvider({ children }: { children: ReactNode }) {
  // isDarkMode 상태 (기본값: false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 테마 토글 함수
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
  );
}

// 4. 실제 UI를 보여줄 하위 컴포넌트
function ThemeConsumer() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeConsumer must be used within a ThemeProvider');
  }

  const { isDarkMode, toggleTheme } = context;

  return (
      <div
          style={{
            padding: '20px',
            margin: '20px',
            borderRadius: '8px',
            transition: '0.3s',
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            border: '1px solid #ccc',
          }}
      >
        <h3>Mission 10: Context API 테마</h3>
        <p>현재 테마: {isDarkMode ? '다크 모드 🌙' : '라이트 모드 ☀️'}</p>

        <button onClick={toggleTheme}>
          테마 변경하기
        </button>
      </div>
  );
}

// 메인 컴포넌트
export default function Mission10_Context() {
  return (
      <div style={{ padding: '20px' }}>
        <h2>Global State Management</h2>
        <ThemeProvider>
          <ThemeConsumer />
        </ThemeProvider>
      </div>
  );
}
