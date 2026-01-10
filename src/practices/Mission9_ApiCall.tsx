import {useEffect, useState} from "react";

// 1. DTO 정의 (API 응답 규격)
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function Mission9_ApiCall() {
  // 2. 상태 정의
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. 비동기 함수 정의 (async: 나 비동기 작업 할 거야!)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      // 4. 네트워크 요청 (await: 응답 헤더 올 때까지 스레드 딴짓 허용)
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }

      // 5. JSON 파싱 (await: 데이터 다 다운받을 때까지(I/O) 대기, 파싱작업은 메인스레드가 함)
      const data = await response.json();
      setUsers(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false) // 로딩 종료
    }
  };

  // 6. useEffect: 컴포넌트가 '처음 렌더링 될때' 딱 한번 실행
  // 의존성 배열([])이 비어있으면 Java의 @PostConstruct와 유사하게 동작한다.
  useEffect(() => {
    fetchUsers();
  }, []);

  // 7. 조건부 렌더링 (로딩 중이거나 에러 시)
  if (loading) return <div style ={{padding: "20px"}}> 로딩 중 ...</div>
  if (error) return <div style={{padding: "20px", color: "red"}}>에러: {error}</div>

  return (
      <div style={{ padding: "20px" }}>
        <h2>Mission 9: API 연동 연습</h2>
        <button onClick={fetchUsers} style={{ marginBottom: "20px" }}>
          새로고침
        </button>

        <div style={{ display: "grid", gap: "10px" }}>
          {users.map((user) => (
              <div
                  key={user.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    color: "black"
                  }}
              >
                <strong>{user.name}</strong> <br />
                <span style={{ color: "gray", fontSize: "0.9em" }}>
              📧 {user.email} | 📞 {user.phone}
            </span>
              </div>
          ))}
        </div>
      </div>
  );
}
