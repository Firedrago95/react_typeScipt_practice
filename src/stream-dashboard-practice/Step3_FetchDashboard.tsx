export interface StreamerInfo {
    streamId: number;
    streamerName: string;
    categoryName: string;
    viewers: number;
    isLive: boolean;
}

export default function Step3_FetchDashboard() {
    return (
        <div>
            <h1>API 연동 대시보드</h1>
        </div>
    );
}
