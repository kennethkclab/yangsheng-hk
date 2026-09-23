import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { siteData } from "@/data/siteContent";
import FloatingSocial from "@/components/layout/FloatingSocial";
import { OG_IMAGE, SITE, organizationJsonLd, pageSeo } from "@/lib/seo";

const FAVICON = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/favicon.png";
const FAVICON_32 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/favicon-32.png";
const APPLE = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/apple-touch.png";

const homeSeo = pageSeo(
  "/",
  `${siteData.brand.name} | ${siteData.brand.englishName}`,
  "國際健康養生會—貫徹「預防勝於治療」理念，結合科研功法與現代科研，推廣身心靈全人健康。",
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: `${siteData.brand.name} | ${siteData.brand.englishName}`,
    template: `%s | ${siteData.brand.name}`,
  },
  description: homeSeo.description,
  keywords: [
    "國際健康養生會",
    "養生",
    "科研功法",
    "預防勝於治療",
    "袁麗萍",
    "香港養生",
    "五行平衡功",
  ],
  icons: {
    icon: [
      { url: FAVICON_32, sizes: "32x32", type: "image/png" },
      { url: FAVICON, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: APPLE, sizes: "180x180" }],
    shortcut: FAVICON_32,
  },
  alternates: homeSeo.alternates,
  openGraph: {
    ...homeSeo.openGraph,
    images: [{ url: OG_IMAGE, width: 1600, height: 900, alt: siteData.brand.name }],
  },
  twitter: homeSeo.twitter,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <html lang={isEn ? "en" : "zh-HK"}>
      <head>
        <link rel="icon" href={FAVICON_32} type="image/png" sizes="32x32" />
        <link rel="icon" href={FAVICON} type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href={APPLE} />
        <link rel="preconnect" href="https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}
