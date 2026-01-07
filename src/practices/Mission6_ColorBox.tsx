import { useState } from 'react';

export default function Mission6_ColorBox() {
  // 1. 색상 이름을 저장할 상태 (기본값: 'gold')
  const [color, setColor] = useState<string>('gold');

  return (
      <div style={{padding: '20px'}}>
        <h2>Missiont 6: 실시간 컬러 박스</h2>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="색상(red, blue, #000등)을 입력하세요"
        />
        {/* 2. 입역받은 color 상태를 style 속성에 직접 주입 */}
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: color, // 이 부분이 핵심입니다!
          margin: '20px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          transition: 'all 0.5s' // 부드럽게 변하는 효과
        }}>
          {color}
        </div>
      </div>
  );
};
