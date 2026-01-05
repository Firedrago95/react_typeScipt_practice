// src/practices/Mission2_Counter.tsx
import { useState } from "react";

export default function Mission2_Counter() {
  // 1. 상태 정의: 초기값은 0, 타입은 숫자(number)
  // Java의 private int count = 0; 과 유사한 역할입니다.
  const [count, setCount] = useState<number>(0);

  // 2. 증가 로직 함수
  const increment = () => setCount(count + 1);

  // 3. 감소로직 함수 (0 미만 방어 코드)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // 초기화 로직
  const reset = () => setCount(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React State Practice</h1>
      <p>Current Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
