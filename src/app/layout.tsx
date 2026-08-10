import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/siteContent";

export const metadata: Metadata = {
  title: {
    default: `${siteData.brand.name} | ${siteData.brand.englishName}`,
    template: `%s | ${siteData.brand.name}`,
  },
  description:
    "國際健康養生會 — 貫徹「預防勝於治療」理念，結合道家內功與現代科研，推廣身心靈全人健康。",
  keywords: [
    "國際健康養生會",
    "養生",
    "氣功",
    "道家內功",
    "預防勝於治療",
    "袁麗萍",
    "香港養生",
  ],
  openGraph: {
    title: siteData.brand.name,
    description:
      "貫徹「預防勝於治療」理念，結合道家內功與現代科研，推廣身心靈全人健康。",
    locale: "zh_HK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
