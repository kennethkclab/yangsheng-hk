const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";

export const media = {
  r2: R2,
  videos: {
    happyValley: "https://yangsheng.hk/HappyValley.mp4",
    intro2025: "https://yangsheng.hk/video/video_20250502.mp4",
  },
  news: [
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
      id: "event-class",
      title: "養生練功團",
      titleEn: "Practice gathering",
      image: `${R2}/images/gallery/7_1.jpg`,
    },
    {
      id: "event-outdoor",
      title: "戶外功法練習",
      titleEn: "Outdoor practice",
      image: `${R2}/images/gallery/6_2.jpg`,
    },
    {
      id: "event-community",
      title: "社區聚會",
      titleEn: "Community gathering",
      image: `${R2}/images/gallery/8_1.jpg`,
    },
  ],
  galleryAlbums: [
    { id: "8", title: "活動相簿 8", cover: `${R2}/images/gallery/8.jpg`, count: 7 },
    { id: "10", title: "活動相簿 10", cover: `${R2}/images/gallery/10.jpg`, count: 1 },
    { id: "7", title: "活動相簿 7", cover: `${R2}/images/gallery/7.jpg`, count: 29 },
    { id: "4", title: "活動相簿 4", cover: `${R2}/images/gallery/4.jpg`, count: 4 },
  ],
  galleryPhotos: [
    `${R2}/images/gallery/8.jpg`,
    `${R2}/images/gallery/10.jpg`,
    `${R2}/images/gallery/7.jpg`,
    `${R2}/images/gallery/4.jpg`,
    `${R2}/images/gallery/8_1.jpg`,
    `${R2}/images/gallery/8_2.jpg`,
    `${R2}/images/gallery/6_1.jpg`,
    `${R2}/images/gallery/6_2.jpg`,
    `${R2}/images/gallery/6_3.jpg`,
    `${R2}/images/gallery/6_6.jpg`,
    `${R2}/images/gallery/6_7.jpg`,
    `${R2}/images/gallery/6_11.jpg`,
    `${R2}/images/gallery/6_12.jpg`,
    `${R2}/images/gallery/7_1.jpg`,
    `${R2}/images/gallery/7_3.jpg`,
  ],
} as const;
