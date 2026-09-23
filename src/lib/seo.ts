import type { Metadata } from "next";

export const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yangsheng-hk-site.vercel.app";
export const OG_IMAGE = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-lake.jpg";
export const LOGO = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/logo.png";

export function pageSeo(
  path: string,
  title: string,
  description: string,
  locale: "zh" | "en" = "zh",
): Metadata {
  const zh = path === "/" ? SITE : `${SITE}${path}`;
  const en = path === "/" ? `${SITE}/en` : `${SITE}/en${path}`;
  const canonical = locale === "en" ? en : zh;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "zh-HK": zh,
        en,
        "x-default": zh,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "國際健康養生會",
      locale: locale === "en" ? "en_HK" : "zh_HK",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1600, height: 900, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "國際健康養生會",
    alternateName: "International Association for Health and Yangsheng",
    url: SITE,
    logo: LOGO,
    image: OG_IMAGE,
    foundingDate: "2009-12",
    description:
      "康健及養生非牟利社團，貫徹預防勝於治療，結合香港大學科研功法與現代科研。",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 Ventris Road, Happy Valley",
      addressLocality: "Hong Kong",
      addressCountry: "HK",
    },
    telephone: "+852-2893-1938",
    email: "info@yangsheng.hk",
    sameAs: [
      "https://youtube.com/@yangshenghk",
      "https://www.facebook.com/share/1K9sVQyx7H/",
    ],
  };
}
