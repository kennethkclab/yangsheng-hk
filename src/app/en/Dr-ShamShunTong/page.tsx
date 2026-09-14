import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { yidao } from "@/data/yidao";
import { t } from "@/i18n/dict";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dr Sham Shun Tong" };

export default function EnglishDoctorPage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title={copy.yidaoHeading} subtitle={copy.yidaoName} />
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
              <Image src={yidao.portrait} alt={copy.yidaoName} fill className="object-cover object-top" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900">{copy.yidaoName}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{copy.yidaoBio}</p>
              <p className="mt-3 text-sm text-stone-500">{copy.yidaoSource}</p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-2xl font-bold text-stone-900">{copy.yidaoColumns}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yidao.articles.map((item) => (
              <a key={`${item.title}-${item.date}`} href={item.url} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] bg-stone-100">
                  <Image src={yidao.cover} alt={item.title} fill className="object-contain p-2" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-500">{item.date}</p>
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
