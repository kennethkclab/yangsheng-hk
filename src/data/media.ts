const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";

export const media = {
  r2: R2,
  videos: {
    happyValley: "https://yangsheng.hk/HappyValley.mp4",
    intro2025: "https://yangsheng.hk/video/video_20250502.mp4",
  },
  news: [
    {
      id: "fb-1",
      title: "最新活動與課程資訊",
      titleEn: "Latest activity and class update",
      date: "",
      href: "https://www.facebook.com/share/p/19aA5DVRKx/",
      summary: "請到 Facebook 架架閱讀完整帖文。",
      summaryEn: "Open the full post on Facebook.",
    },
    {
      id: "fb-2",
      title: "養生會最新分享",
      titleEn: "Latest Association update",
      date: "",
      href: "https://www.facebook.com/story.php?story_fbid=pfbid0MwP1Xg2ArSVBTsSjhYM9bFswcwYAxcxyBPwxdrbHGTzMVdh6LbdSTnKKHqY1y25Xl&id=61556795294732",
      summary: "請到 Facebook 架架閱讀完整帖文。",
      summaryEn: "Open the full post on Facebook.",
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
