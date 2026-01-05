// src/practices/Mission3_List.tsx
import { useState } from 'react';

// 1. DTO 정의: Java의 MemberDTO와 같습니다.
interface Member {
    id: number;
    name: string;
    role: string;
}

export default function Mission3_List() {
    // 2. 가상의 리스트 데이터 (List<Member> members = new ArrayList<>();)
    const [members] = useState<Member[]>([
        { id: 1, name: '이용화', role: '백엔드 (Spring)' },
        {id: 2, name: '김철수', role: '프론트엔드 (React)'},
        {id: 3, name: '박영희', role: '풀스택 (Java/TS)' }
    ]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Mission 3: 팀원 목록 (Map 연습)</h2>
            <p>현재 등록된 팀원: {members.length}명</p>

            <ul>
                {/*3. 자바 스크립트 성역 (중괄호) 안에서 .map을 돌립니다. 
                    Java의 members.stream().map(m -> ...)과 로직이 같다.    
                */}
                {members.map((m) => (
                    // key는 DB의 PK입니다. 리액으의 성능을 위해 필수!
                    <li key={m.id} style={{ marginBottom: '10px' }}>
                        <strong>{m.name}</strong> - <span>{m.role}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}