import { useState } from 'react';

export default function Mission4_Input() {
  // 1. 문자열 상태 정의 (초기값은 빈 문자열)
  const [text, setText] = useState<string>('');

  // 2. 입력 이벤트 핸들러
  // TypeScript에서는 이벤트 타입을 지정해주는 것이 중요합니다.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 3. 초기화 함수
  const handleReset = () => setText('');

  return (
      <div>
        <h2>Mission 4: 입력 연습</h2>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="아무거나 입력해보세요"
        />
        <button onClick={handleReset}>초기화</button>
        <p style = {{color: 'blue'}}>
          <strong>입력한 내용:</strong> {text || '내용이 없습니다.'}
        </p>
      </div>
  );
};
