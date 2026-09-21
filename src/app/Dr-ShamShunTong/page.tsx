import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { yidao } from "@/data/yidao";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: yidao.title,
  description: yidao.bio,
};

const MEDIA_HERO = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-media.jpg";

export default function DrShamShunTongPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title={yidao.title} subtitle={yidao.name} image={MEDIA_HERO} overlay="soft" />
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:gap-10">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
              <Image src={yidao.portrait} alt={yidao.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-widest text-brand-700">{yidao.heading}</p>
              <h2 className="mt-1 text-3xl font-bold text-stone-900">{yidao.name}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{yidao.bio}</p>
              <p className="mt-3 text-sm text-stone-500">{yidao.source}</p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-2xl font-bold text-stone-900">健康生活專欄</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yidao.articles.map((item) => (
              <a key={`${item.title}-${item.date}`} href={item.url} target="_blank" rel="noopener noreferrer" className="overflow-hidden bg-white shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[16/9] bg-stone-100">
                  <Image src={"image" in item ? item.image : yidao.cover} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-500">健康生活 · {item.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-stone-900">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
