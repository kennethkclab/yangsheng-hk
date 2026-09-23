import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { siteData } from "@/data/siteContent";
import { pageSeo } from "@/lib/seo";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo(
  "/about",
  "國際健康養生會簡介",
  "了解國際健康養生會的緣起、宗旨與理念。 年與香港大學合作推動科研功法，貫徹預防勝於治療。",
);

const ABOUT_HERO = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-about.jpg";

const awardPhotos = [
  {
    src: "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/about/award-yuen-v3.jpg",
    alt: "國際健康養生會獲頒《資本平台》CEO x Entrepreneur of the Year 2025",
  },
  {
    src: "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/about/award-sham.jpg",
    alt: "岑信棠醫生獲頒《資本平台》CEO x Entrepreneur of the Year 2025",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="國際健康養生會簡介" subtitle={"健康立天下\n逍遙渡時光"} image={ABOUT_HERO} overlay="soft" />
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">{siteData.about.title}</h2>
          <p className="mb-10 text-lg leading-relaxed text-stone-600">{siteData.about.originText}</p>

          <h3 className="mb-6 text-xl font-semibold text-stone-900">《資本平台》CEO x Entrepreneur of the Year 2025</h3>
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {awardPhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-md border border-stone-200 bg-stone-100">
                <Image src={photo.src} alt={photo.alt} width={1600} height={1067} className="h-auto w-full object-contain" />
              </div>
            ))}
          </div>

          <h3 className="mb-6 text-xl font-semibold text-stone-900">我們的宗旨</h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {siteData.about.missionList.map((item, i) => (
              <div key={i} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100 font-bold text-brand-800">{i + 1}</div>
                <p className="whitespace-pre-line leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-stone-900">核心理念</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-600">我們相信健康不是等到生病後才去治療，而是日常生活中需要持續經營的「身心資本」。透過結合科研功法與現代科研實證，協助大眾建立正確的養生習慣。</p>
            <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-brand-700 px-8 py-3 text-sm font-medium text-white hover:bg-brand-800">聯絡我們了解更多</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
