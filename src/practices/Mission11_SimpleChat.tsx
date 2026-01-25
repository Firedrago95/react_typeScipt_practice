import {useState} from 'react';

type Message = {
  id: number;
  text: string;
};

function Mission11_SimpleChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now(),
      text: newMessage
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
      <div>
        <h2> 실시간 채팅</h2>

        {/* 메시지 목록을 표시할 영역 */}
        <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll'}}>
          {messages.map((msg) => (
              <div key={msg.id}>{msg.text}</div>
          ))}
        </div>

        <div style={{ marginTop: '10px'}}>
          <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !(e as any).isComposing) {
                  handleSendMessage();
                }
              }}
              placeholder="메시지를 입력하세요..."
              style={{ width: '80%', padding: '5px'}}
          />
          <button onClick={handleSendMessage} style={{width: '10%', padding: '5px'}}>
            전송
          </button>
        </div>
      </div>
  );
}

export default Mission11_SimpleChat;
