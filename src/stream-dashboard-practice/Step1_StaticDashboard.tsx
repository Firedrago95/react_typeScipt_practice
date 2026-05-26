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
    }
];