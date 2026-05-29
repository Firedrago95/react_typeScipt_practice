import { useState, useEffect } from "react";

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
        viewers: 2032,
        isLive: true
    },
    {
        streamId: 2,
        streamerName: "따효니",
        categoryName: "리그 오브 레전드",
        viewers: 4322,
        isLive: true
    }
];

export async function fetchMockStreamers(): Promise<StreamerInfo[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockStreamers);
        }, 1000)
    })
}

export default function Step3_FetchDashboard() {
    const [streamers, setStreamers] = useState<StreamerInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await fetchMockStreamers();
                setStreamers(data);
            } catch (e) {
                setError("데이터를 불러오는 중 오류가 발생했습니다.")
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, [])

    if (isLoading) {
        return <div>로딩 중...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h1>API 연동 대시보드</h1>
            {streamers.map(s => (
                <div key={s.streamId}>
                    <p>{s.streamerName}</p>
                    <p>{s.categoryName}</p>
                    <p>{s.viewers}</p>
                    <p>{s.isLive ? 'ON' : 'OFF'}</p>
                </div>
            ))}
        </div>
    );
}
