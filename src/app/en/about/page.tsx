import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { siteData } from "@/data/siteContent";
import { t } from "@/i18n/dict";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About the Association" };

const awardPhotos = [
  {
    src: "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/about/award-yuen-v2.jpg",
    alt: "Capital CEO x Entrepreneur of the Year 2025",
  },
  {
    src: "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/about/award-sham.jpg",
    alt: "Capital CEO x Entrepreneur of the Year 2025",
  },
];

export default function EnglishAboutPage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title={copy.aboutTitle} subtitle={copy.slogan} align="center" />
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">{copy.originTitle}</h2>
          <p className="mb-10 text-lg leading-relaxed text-stone-600">{copy.originText}</p>
          <h3 className="mb-6 text-xl font-semibold text-stone-900">Capital CEO x Entrepreneur of the Year 2025</h3>
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {awardPhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-md border border-stone-200 bg-stone-100">
                <Image src={photo.src} alt={photo.alt} width={1600} height={1067} className="h-auto w-full object-contain" />
              </div>
            ))}
          </div>
          <h3 className="mb-6 text-xl font-semibold text-stone-900">{copy.ourMission}</h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {copy.missions.map((item, i) => (
              <div key={item} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand-100 font-bold text-brand-800">{i + 1}</div>
                <p className="leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-stone-900">{copy.coreIdea}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-600">{copy.coreText}</p>
            <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-brand-700 px-8 py-3 text-sm font-medium text-white hover:bg-brand-800">{copy.contactMore}</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
