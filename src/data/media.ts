const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";

export const media = {
  r2: R2,
  videos: {
    happyValley: "https://yangsheng.hk/HappyValley.mp4",
    intro2025: "https://yangsheng.hk/video/video_20250502.mp4",
  },
  news: [
    {
      id: "brain-2026",
      title: "慧心健腦御智功課程（2026 年 4 月至 6 月）",
      date: "2026-03-17",
      image: `${R2}/images/news/20.jpg`,
      summary:
        "由袁麗萍教授親自指導，結合氣功的身心運動，旨在提升大腦功能、增強記憶力及集中力。",
    },
    {
      id: "award-2025",
      title: "《資本平台》頒發 CEO x Entrepreneur of the Year 2025",
      date: "2025-01-01",
      image: `${R2}/images/news/24.jpg`,
      summary: "國際健康養生會主席獲頒發獎項，肯定團體在健康養生與社區服務上的持續推動。",
    },
    {
      id: "class-photo",
      title: "課程與活動紀錄",
      date: "2024-10-30",
      image: `${R2}/images/news/23.jpg`,
      summary: "學員一起練習道家內功與健腦功，實踐預防勝於治療的理念。",
    },
  ],
  events: [
    {
      id: "event-1",
      title: "養生會活動",
      image: `${R2}/images/events/1_s.jpg`,
    },
    {
      id: "event-2",
      title: "社區推廣",
      image: `${R2}/images/events/2_s.jpg`,
    },
    {
      id: "event-4",
      title: "公益與聚會",
      image: `${R2}/images/events/4_s.jpg`,
    },
  ],
  galleryAlbums: [
    { id: "1", title: "活動相簿 1", cover: `${R2}/images/gallery/1.jpg`, count: 3 },
    { id: "2", title: "活動相簿 2", cover: `${R2}/images/gallery/2.jpg`, count: 3 },
    { id: "4", title: "活動相簿 4", cover: `${R2}/images/gallery/4.jpg`, count: 4 },
    { id: "6", title: "活動相簿 6", cover: `${R2}/images/gallery/6.jpg`, count: 14 },
    { id: "7", title: "活動相簿 7", cover: `${R2}/images/gallery/7.jpg`, count: 29 },
    { id: "8", title: "活動相簿 8", cover: `${R2}/images/gallery/8.jpg`, count: 7 },
    { id: "10", title: "活動相簿 10", cover: `${R2}/images/gallery/10.jpg`, count: 1 },
  ],
  galleryPhotos: [
    `${R2}/images/gallery/4.jpg`,
    `${R2}/images/gallery/6.jpg`,
    `${R2}/images/gallery/7.jpg`,
    `${R2}/images/gallery/8.jpg`,
    `${R2}/images/gallery/10.jpg`,
    `${R2}/images/gallery/1.jpg`,
    `${R2}/images/gallery/2.jpg`,
    ...Array.from({ length: 14 }, (_, i) => `${R2}/images/gallery/6_${i + 1}.jpg`),
    ...Array.from({ length: 29 }, (_, i) => `${R2}/images/gallery/7_${i + 1}.jpg`),
    ...Array.from({ length: 7 }, (_, i) => `${R2}/images/gallery/8_${i + 1}.jpg`),
  ],
} as const;
