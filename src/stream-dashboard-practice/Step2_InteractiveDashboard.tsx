import { useState } from 'react';

export interface StreamerInfo {
    streamId: number;
    streamerName: string;
    categoryName: string;
    viewers: number;
    isLive: boolean;
}

const mockStreamers: StreamerInfo[] = [
    {
        streamId: 1,
        streamerName: "침착맨",
        categoryName: "talk",
        viewers: 2230,
        isLive: true
    },
    {
        streamId: 2,
        streamerName: "따효니",
        categoryName: "메이플스토리",
        viewers: 3911,
        isLive: true
    },
    {
        streamId: 3,
        streamerName: "풍월량",
        categoryName: "종합게임",
        viewers: 5500,
        isLive: false
    }
];

export default function Step2_InteractiveDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showLiveOnly, setShowLiveOnly] = useState(false);

    const filteredStreamers = mockStreamers
        .filter(stream => stream.streamerName.includes(searchTerm))
        .filter(stream => !showLiveOnly || stream.isLive);

    return (
        <div>
            <h1>동적 스트리머 대시보드</h1>
            <input
                type="text"
                placeholder="스트리머 이름을 검색하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
                type="checkbox"
                id="isLiveCheckbox"
                checked={showLiveOnly}
                onChange={(e) => setShowLiveOnly(e.target.checked)}
            />
            <label htmlFor="isLiveCheckbox">생방송만 보기</label>
            {filteredStreamers.map(stream => (
                <div key={stream.streamId}>
                    <h1>{stream.streamerName}</h1>
                    <p>{stream.viewers.toLocaleString()}</p>
                    <p>{stream.isLive ? 'ON' : 'OFF'}</p>
                </div>
            ))}
        </div>
    );
}
