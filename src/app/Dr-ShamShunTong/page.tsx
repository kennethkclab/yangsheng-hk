import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { yidao } from "@/data/yidao";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: yidao.title,
  description: yidao.bio,
};

export default function DrShamShunTongPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-white border-b border-stone-200">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:gap-10">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
              <Image src={yidao.portrait} alt={yidao.name} fill className="object-cover object-top" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-widest text-brand-700">{yidao.heading}</p>
              <h1 className="mt-1 text-3xl font-bold text-stone-900 md:text-4xl">{yidao.name}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{yidao.bio}</p>
              <p className="mt-3 text-sm text-stone-500">{yidao.source}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-2xl font-bold text-stone-900">健康生活專欄</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yidao.articles.map((item) => (
              <a
                key={`${item.title}-${item.date}`}
                href={yidao.sourcePage}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/10] bg-stone-100">
                  <Image src={yidao.cover} alt={item.title} fill className="object-contain p-2" />
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
