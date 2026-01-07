import { useState} from 'react';

export default function Mission7_Memo() {
  const [input, setInput] = useState<string>('');
  // 1. 문자열 배열 상태 정의 (초기값: 빈 배열)
  const [memos, setMemos] = useState<string[]>([]);

  const addMemo = () => {
    if (input.trim() === '') return ; // 빈 값 방어

    // 2. 중요: 리액트에서 배열을 업데이트할 때는 '불변성'을 지켜야 합니다.
    // 기존 배열을 펼치고(...), 새 항목을 추가한 새 배열을 만듭니다.
    setMemos([...memos, input]);
    setInput(''); // 입력창 초기화
  };

  return(
      <div style={{padding: '20px'}}>
        <h2>Mission 7: 심플 메모장</h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // 엔터키 지원
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return;

            if (e.key === 'Enter') {
              addMemo();
            }
          }}
        />
        <button onClick={addMemo}>추가</button>

        <ul>
          {/* 3. map을 사용하여 리스트 출력 */}
          {memos.map((memo, index) => (
              <li key={index}>{memo}</li>
          ))}
        </ul>
      </div>
  );
}
