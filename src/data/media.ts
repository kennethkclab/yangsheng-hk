const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";

export const media = {
  r2: R2,
  videos: {
    happyValley: "https://yangsheng.hk/HappyValley.mp4",
    intro2025: "https://yangsheng.hk/video/video_20250502.mp4",
  },
  news: [
    {
      id: "xian-2025",
      title: "華夏龍脈之嶺·重啟身心能量之旅（西安 6 天 5 夜）",
      date: "2025-08-14",
      image: `${R2}/images/news/20.jpg`,
      summary: "西安深度能量養生團，包括朱雀森林公園戶外練功、兵馬俑、大雁塔與大唐不夜城等行程。",
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
