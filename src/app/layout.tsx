import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/siteContent";
import FloatingSocial from "@/components/layout/FloatingSocial";

const FAVICON = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/favicon.png";
const FAVICON_32 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/favicon-32.png";
const APPLE = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/apple-touch.png";

export const metadata: Metadata = {
  title: {
    default: `${siteData.brand.name} | ${siteData.brand.englishName}`,
    template: `%s | ${siteData.brand.name}`,
  },
  description:
    "國際健康養生會 — 貫徹「預防勝於治療」理念，結合科研功法與現代科研，推廣身心靈全人健康。",
  keywords: [
    "國際健康養生會",
    "養生",
    "科研功法",
    "預防勝於治療",
    "袁麗萍",
    "香港養生",
  ],
  icons: {
    icon: [
      { url: FAVICON_32, sizes: "32x32", type: "image/png" },
      { url: FAVICON, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: APPLE, sizes: "180x180" }],
    shortcut: FAVICON_32,
  },
  openGraph: {
    title: siteData.brand.name,
    description:
      "貫徹「預防勝於治療」理念，結合科研功法與現代科研，推廣身心靈全人健康。",
    locale: "zh_HK",
    type: "website",
    images: [{ url: FAVICON }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <head>
        <link rel="icon" href={FAVICON_32} type="image/png" sizes="32x32" />
        <link rel="icon" href={FAVICON} type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href={APPLE} />
        <link rel="preconnect" href="https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}
