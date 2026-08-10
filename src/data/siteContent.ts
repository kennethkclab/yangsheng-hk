export const siteData = {
  brand: {
    name: "國際健康養生會",
    englishName: "International Association for Health and Yangsheng",
    logoUrl: "/images/logo.gif",
    establishedYear: "2009 年 12 月",
    nature: "康健及養生非牟利社團",
    slogan: "預防勝於治療",
  },
  contact: {
    // 暫時使用你提供的資料，正式上線前請再確認
    address: "香港跑馬地雲地利道 20 號",
    addressEn: "20 Ventris Road, Happy Valley, Hong Kong",
    phone: "+852 2893 1938",
    phoneDisplay: "2893 1938",
    whatsapp: "91316233",
    whatsappUrl:
      "https://wa.me/85291316233?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E5%9C%8B%E9%9A%9B%E5%81%A5%E5%BA%B7%E9%A4%8A%E7%94%9F%E6%9C%83%E7%9A%84%E8%AA%B2%E7%A8%8B%E8%88%87%E6%B4%BB%E5%8B%95",
    email: "info@yangsheng.hk",
  },
  images: {
    logo: "/images/logo.gif",
    hero1: "/images/photo01.jpg",
    hero2: "/images/photo02.jpg",
    pho: "/images/pho.jpg",
    adv1: "/images/adv1.jpg",
    adv2: "/images/adv2.jpg",
    adv3: "/images/adv3.jpg",
    image: "/images/image.jpg",
  },
  about: {
    title: "緣起與宗旨",
    originText:
      "2009 年中，「中華傳統醫學治療中心」與「香港大學行為健康教研中心」合作舉辦免費「道家內功學習課程」，研究內功對治療「慢性疲勞綜合症」的功效。數小時內吸引數千市民報名，150 個名額瞬即爆滿。學員練習後身體狀況有顯著改善，在學員及袁麗萍老師推動下，於 2009 年 12 月正式成立「國際健康養生會」。",
    missionList: [
      "貫徹「預防勝於治療」理念。",
      "為追求健康長壽的人士提供協助，提升生活素質。",
      "培養市民養生習慣，提高大眾對健康及養生的意識，減輕社會醫療負擔。",
    ],
  },
  courses: [
    {
      id: "neigong",
      title: "道家內功養生班",
      instructor: "袁麗萍教授",
      description:
        "配合香港大學科研數據驗證，著重氣血調理、強身健體，有效舒緩慢性疲勞綜合症。",
      imageUrl: "/images/adv1.jpg",
    },
    {
      id: "brain",
      title: "慧心健腦御智功",
      instructor: "袁麗萍教授",
      description:
        "結合氣功的身心運動，旨在提升大腦功能、增強記憶力、集中力及心神平靜。",
      imageUrl: "/images/adv2.jpg",
    },
  ],
  navigation: [
    { label: "主頁", href: "/" },
    { label: "養生會簡介", href: "/about" },
    { label: "最新資訊", href: "/news" },
    { label: "養生活動", href: "/events" },
    { label: "養生常識", href: "/knowledge" },
    { label: "科研結果", href: "/research" },
    { label: "聯絡我們", href: "/contact" },
  ],
} as const;

export type SiteData = typeof siteData;
