import {useState} from "react";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export default function Mission8_Todo() {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      isDone: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  const deleteTodo = (deleteId: number) => {
    const updated = todos.filter(t => t.id !== deleteId);
    setTodos(updated);
  }

  const toggleTodo = (id: number) => {
    const toggledTodos = todos.map(t =>
        t.id === id ? {...t, isDone: !t.isDone} : t
    );
    setTodos(toggledTodos);
  }

  return (
      <div style={{padding: '20px'}}>
        <h2>Mission 8: 할 일 목록</h2>

        {/* 1. 입력 부분 */}
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>

        {/* 2. 리스트 부분*/}
        <ul>
          {todos.map(t => (
              <li key={t.id} style={{marginBottom: '10px'}}>
                {/* 클릭시 토글실행 */}
                <span
                 onClick={() => toggleTodo(t.id)}
                 style={{
                   cursor: 'pointer',
                   textDecoration: t.isDone ? 'line-through' : 'none',
                   color: t.isDone ? '#ccc' : '#000'
                 }}
                >
                {t.text}
              </span>
          {/* 삭제 버튼 */}
            <button
            onClick={() => deleteTodo(t.id)}
          style={{marginLeft: '10px'}}
        >
          삭제
        </button>
      </li>
))}
</ul>
</div>
)
  ;
}
