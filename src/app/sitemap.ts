import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yangsheng-hk-site.vercel.app";

const pages = [
  "",
  "/about",
  "/structure",
  "/gallery",
  "/Dr-ShamShunTong",
  "/news",
  "/events",
  "/research",
  "/courses",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.flatMap((path) => {
    const zh = `${SITE}${path || "/"}`;
    const en = path ? `${SITE}/en${path}` : `${SITE}/en`;
    return [
      {
        url: zh,
        lastModified: now,
        changeFrequency: path === "" || path === "/news" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/about" ? 0.8 : 0.7,
        alternates: { languages: { "zh-HK": zh, en, "x-default": zh } },
      },
      {
        url: en,
        lastModified: now,
        changeFrequency: path === "" || path === "/news" ? "weekly" : "monthly",
        priority: path === "" ? 0.9 : 0.6,
        alternates: { languages: { "zh-HK": zh, en, "x-default": zh } },
      },
    ];
  });
}
