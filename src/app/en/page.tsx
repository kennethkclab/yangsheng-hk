import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YouTubeCarousel from "@/components/home/YouTubeCarousel";
import YouTubeShorts from "@/components/home/YouTubeShorts";
import LiteYouTube from "@/components/media/LiteYouTube";
import { siteData } from "@/data/siteContent";
import { media } from "@/data/media";
import { coursesEn, t } from "@/i18n/dict";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Association for Health and Yangsheng",
  description: t.en.heroLead,
};

export default function EnglishHomePage() {
  const copy = t.en;
  const previewPhotos = [
    media.r2 + "/images/gallery/8_4.jpg",
    media.r2 + "/images/gallery/6_7.jpg",
    media.r2 + "/images/gallery/7_1.jpg",
    media.r2 + "/images/gallery/6_5.jpg",
    media.r2 + "/images/gallery/4.jpg",
    media.r2 + "/images/news/24.jpg",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src={siteData.images.hero1} alt="Association activities" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/70 to-brand-900/40" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="mb-4 inline-block rounded-md bg-white/15 px-4 py-1.5 text-sm font-medium tracking-wide text-brand-50 backdrop-blur">{copy.nature}</p>
              <h1 className="mb-5 text-4xl font-bold leading-none text-white md:text-5xl lg:text-6xl">
                <span className="block pb-3 md:pb-5">Health for the world</span>
                <span className="block">Ease through the years</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-brand-50/90">{copy.heroLead}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/about" className="rounded-md bg-white px-7 py-3 text-sm font-semibold text-brand-800 shadow-lg hover:bg-brand-50">{copy.learnMore}</Link>
                <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">{copy.whatsapp}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4">
            <div className="overflow-hidden rounded-md border border-stone-200 bg-stone-900 shadow-sm">
              <LiteYouTube id="mfk2BhJGTSU" title="Association video" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">{copy.originTitle}</h2>
            <Link href="/en/about" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">Learn more →</Link>
          </div>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-stone-600">{copy.originText}</p>
          <ul className="grid gap-5 sm:grid-cols-3">
            {copy.missions.map((item, i) => (
              <li key={item} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-brand-100 text-sm font-bold text-brand-800">{i + 1}</div>
                <p className="leading-relaxed text-stone-700">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">{copy.coursesTitle}</h2>
              <Link href="/en/about" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">{copy.allCourses}</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {coursesEn.map((course, i) => (
                <article key={course.id} className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm">
                  <div className="bg-stone-100">
                    <Image src={siteData.courses[i].imageUrl} alt={course.title} width={1200} height={800} className="h-auto w-full object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-stone-900">{course.title}</h3>
                    <p className="mb-3 text-sm text-brand-700">{copy.instructor}: {course.instructor}</p>
                    <p className="leading-relaxed text-stone-600">{course.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <YouTubeCarousel locale="en" />
        <YouTubeShorts locale="en" />

        <section className="bg-stone-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-bold text-stone-900">{copy.photosTitle}</h2>
              <Link href="/en/gallery" className="text-sm font-medium text-brand-700">{copy.galleryLink}</Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {previewPhotos.map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-200">
                  <Image src={src} alt="Activity photo" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" quality={90} unoptimized />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-800 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">{copy.contactTitle}</h2>
            <p className="mb-1 text-brand-100">{copy.phone}: {siteData.contact.phoneDisplay}</p>
            <p className="mb-8 text-brand-100">{siteData.contact.addressEn}</p>
            <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-white px-8 py-3.5 font-semibold text-brand-800 hover:bg-brand-50">{copy.whatsappNow}</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
