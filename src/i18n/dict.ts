export type Locale = "zh" | "en";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: readonly NavChild[] };

export const nav: Record<Locale, readonly NavItem[]> = {
  zh: [
    { label: "主頁", href: "/" },
    { label: "國際健康養生會簡介", href: "/about" },
    { label: "行政架構", href: "/structure" },
    {
      label: "媒體及報道",
      href: "/gallery",
      children: [
        { label: "醫道-岑信棠醫生", href: "/Dr-ShamShunTong" },
        { label: "袁麗萍教授圖片集", href: "/gallery" },
      ],
    },
    { label: "最新資訊", href: "/news" },
    { label: "養生活動", href: "/events" },
    { label: "科研成果", href: "/research" },
    { label: "聯絡我們", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "About the Association", href: "/en/about" },
    { label: "Organisation", href: "/en/structure" },
    {
      label: "Media & Reports",
      href: "/en/gallery",
      children: [
        { label: "Dr Sham Shun Tong", href: "/en/Dr-ShamShunTong" },
        { label: "Professor Yuen Gallery", href: "/en/gallery" },
      ],
    },
    { label: "News", href: "/en/news" },
    { label: "Activities", href: "/en/events" },
    { label: "Research", href: "/en/research" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const t = {
  zh: {
    nature: "康健及養生非牟利社團",
    slogan: "預防勝於治療",
    heroLead: "結合香港大學科研功法與現代科研實證，為追求健康長壽人士提供專業協助。",
    learnMore: "了解養生會",
    whatsapp: "WhatsApp 查詢",
    originTitle: "緣起與宗旨",
    originText:
      "2009 年中，「中華傳統醫學治療中心」與「香港大學行為健康教研中心」合作舉辦免費「科研功法學習課程」，研究科研功法對治療「慢性疲勞綜合症」的功效。數小時內吸引數千市民報名，300 多個名額瞬即爆滿。學員練習後身體狀況有顯著改善，在學員及袁麗萍教授推動下，於 2009 年 12 月正式成立「國際健康養生會」。",
    missions: [
      "貫徹「預防勝於治療」理念。",
      "為追求健康長壽的人士提供協助，提升生活素質。",
      "培養市民養生習慣，提高大眾對健康及養生的意識，減輕社會醫療負擔。",
    ],
    coursesTitle: "主要課程",
    allCourses: "查看全部課程 →",
    details: "了解詳情 →",
    instructor: "導師",
    photosTitle: "活動相片",
    galleryLink: "查看相簿 →",
    contactTitle: "聯絡我們",
    phone: "電話",
    address: "香港跑馬地雲地利道 20 號",
    whatsappNow: "立即 WhatsApp 查詢",
    aboutTitle: "國際健康養生會簡介",
    ourMission: "我們的宗旨",
    coreIdea: "核心理念",
    coreText:
      "我們相信健康不是等到生病後才去治療，而是日常生活中需要持續經營的「身心資本」。透過結合科研功法與現代科研實證，協助大眾建立正確的養生習慣。",
    contactMore: "聯絡我們了解更多",
    quickLinks: "快速連結",
    founded: "成立於 2009 年 12 月",
    menu: "選單",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    yidaoHeading: "醫道",
    yidaoName: "岑信棠醫生",
    yidaoBio:
      "香港大學醫學院臨床腫瘤學系榮譽教授，腫瘤專科醫生，國際健康養生會主席，行醫40多年，親眼見證科技進步，癌症由不治之症，至大部分都有得醫。",
    yidaoSource: "資料來源：東周刊",
    yidaoColumns: "健康生活專欄",
    columnsTitle: "健康專欄",
    columnsLead: "岑信棠醫生與養生會的健康資訊與報道",
    knowledgeLead: "預防勝於治療，從日常習慣開始",
    knowledgeP1: "科研功法著重氣血調理、呼吸與意念。持續練習有助緩解慢性疲勞、改善睡眠與集中力。",
    knowledgeP2: "科研健腦御智功結合身心運動，適合希望提升記憶力與心神平靜的人士。",
    knowledgeP3: "建議先由專業導師指導入門，並依個人身體狀況調整強度。",
    researchLead: "與香港大學行為健康教研中心合作的科研功法研究",
    researchText:
      "2009 年，「中華傳統醫學治療中心」與「香港大學行為健康教研中心」合作舉辦科研功法學習課程，研究科研功法對慢性疲勞綜合症的效果。學員練習後身體狀況有顯著改善，亦推動養生會正式成立。",
    eventsLead: "社區活動、課程與養生常識",
    newsLead: "課程招生、活動紀錄與會務公告",
    galleryLead: "袁麗萍教授講學、公益活動與合照紀錄",
    videoTitle: "活動影片",
  },
  en: {
    nature: "A non-profit association for health and yangsheng",
    slogan: "Prevention is better than cure",
    heroLead:
      "We combine University of Hong Kong research-based practice with modern evidence to support people seeking long-term health and vitality.",
    learnMore: "About us",
    whatsapp: "WhatsApp",
    originTitle: "Origin and purpose",
    originText:
      "In mid-2009, the Chinese Traditional Medicine Treatment Centre and the Centre on Behavioral Health at the University of Hong Kong jointly offered a free research-based practice course to study its effect on chronic fatigue syndrome. Thousands applied within hours and more than 300 places filled immediately. After students reported clear improvements, the International Association for Health and Yangsheng was founded in December 2009, with the support of students and Professor Yuen Lai Ping.",
    missions: [
      "Put prevention before treatment.",
      "Help people who seek health and longevity improve quality of life.",
      "Build everyday yangsheng habits and raise public awareness, easing the burden on healthcare.",
    ],
    coursesTitle: "Featured courses",
    allCourses: "View all courses →",
    details: "Learn more →",
    instructor: "Instructor",
    photosTitle: "Activity photos",
    galleryLink: "View gallery →",
    contactTitle: "Contact us",
    phone: "Tel",
    address: "20 Ventris Road, Happy Valley, Hong Kong",
    whatsappNow: "Message us on WhatsApp",
    aboutTitle: "About the Association",
    ourMission: "Our purpose",
    coreIdea: "Our belief",
    coreText:
      "Health is not something to treat only after illness. It is daily capital for body and mind. We combine research-based practice with modern evidence to help people form sound wellness habits.",
    contactMore: "Contact us to learn more",
    quickLinks: "Quick links",
    founded: "Founded December 2009",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    yidaoHeading: "The Way of Medicine",
    yidaoName: "Dr Sham Shun Tong",
    yidaoBio:
      "Honorary Professor in Clinical Oncology at the University of Hong Kong Faculty of Medicine, specialist in oncology, and Chairman of the International Association for Health and Yangsheng. After more than 40 years in practice, he has seen cancer move from an often untreatable disease to one that can be treated in most cases.",
    yidaoSource: "Source: East Week",
    yidaoColumns: "Health columns",
    columnsTitle: "Health Columns",
    columnsLead: "Health articles and reports from Dr Sham and the Association",
    knowledgeLead: "Prevention begins with daily habits",
    knowledgeP1:
      "Research-based practice focuses on circulation, breathing and intention. Regular practice may ease chronic fatigue and support sleep and concentration.",
    knowledgeP2:
      "Research-based Jiannao Yuzhi Gong combines mind-body movement for memory, focus and calm.",
    knowledgeP3:
      "Begin with a qualified instructor and adjust intensity to your own condition.",
    researchLead: "Research-based practice studies with HKU Centre on Behavioral Health",
    researchText:
      "In 2009 the Chinese Traditional Medicine Treatment Centre and the HKU Centre on Behavioral Health ran a research-based practice course to study its effect on chronic fatigue syndrome. Students reported clear improvement, which also led to the founding of the Association.",
    eventsLead: "Community programmes, classes and wellness knowledge",
    newsLead: "Classes, events and association updates",
    galleryLead: "Teaching, community service and portraits of Professor Yuen",
    videoTitle: "Video",
  },
} as const;

export const coursesEn = [
  {
    id: "neigong",
    title: "Research-based Practice Wellness Class",
    instructor: "Professor Yuen Lai Ping",
    description:
      "Supported by University of Hong Kong research data, this practice focuses on circulation, strengthening the body, and easing chronic fatigue syndrome.",
  },
  {
    id: "brain",
    title: "Research-based Jiannao Yuzhi Gong",
    instructor: "Professor Yuen Lai Ping",
    description:
      "A research-based mind-body practice designed to support brain function, memory, concentration and inner calm.",
  },
] as const;

export function localizedPath(pathname: string, next: Locale) {
  const raw = pathname || "/";
  const withoutEn = raw === "/en" ? "/" : raw.replace(/^\/en/, "") || "/";
  if (next === "en") return withoutEn === "/" ? "/en" : `/en${withoutEn}`;
  return withoutEn;
}
