import React, {useState, useCallback} from 'react';

// useInput 커스텀 훅 정의
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {value, onChange, reset};
};

// Mission12_CustomHook 컴포넌트
const Mission12_CustomHook: React.FC = () => {
  const nameInput = useInput('');
  const nicknameInput = useInput('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`이름: ${nameInput.value}, 닉네임: ${nicknameInput.value}`);
    nameInput.reset();
    nicknameInput.reset();
  };

  return (
      <div style={{padding: '20px', border: '1px solid #ccc', borderRadius: '8px'}}>
        <h2>미션 12: Custom Hook (useInput)</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">이름: </label>
            <input
                id="name"
                type="text"
                value={nameInput.value}
                onChange={nameInput.onChange}
                style={{
                  marginBottom: '10px',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
            />
          </div>
          <div>
            <label htmlFor="nickname">닉네임: </label>
            <input
                id="nickname"
                type="text"
                value={nicknameInput.value}
                onChange={nicknameInput.onChange}
                style={{
                  marginBottom: '20px',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
            />
          </div>
          <button
              type="submit"
              style={{
                padding: '10px 15px',
                marginRight: '10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
          >
            제출
          </button>
          <button
              type="button"
              onClick={() => {
                nameInput.reset();
                nicknameInput.reset();
              }}
              style={{
                padding: '10px 15px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
          >
            초기화
          </button>
        </form>
        <div style={{marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px'}}>
          <p>현재 이름: {nameInput.value}</p>
          <p>현재 닉네임: {nicknameInput.value}</p>
        </div>
      </div>
  );
};

export default Mission12_CustomHook;
