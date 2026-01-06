import {useState} from 'react';

export default function Mission5_Toggle() {
  // 1. 불리언 상태정의
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // 2. 상태를 반대로 뒤집는 함수
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
      <div style={{padding: '20px', border: '1px solid #ccc', margin: '10px'}}>
        <h2>Mission 5: 보이기/숨기기 토글</h2>

        <button onClick={toggleVisibility}>
          {isVisible ? '숨기기' : '보이기'}
        </button>

        {/* 3. 조건부 렌더링: isVisible이 true일때만 <div>가 나타남 */}
        {isVisible && (
            <div style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px'
            }}>
              <p>🎉 축하합니다! 미션을 수행 중이시군요.</p>
            </div>
        )}
      </div>
  )
};
