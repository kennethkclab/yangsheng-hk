import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { media } from "@/data/media";
import { t } from "@/i18n/dict";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "News" };

export default function EnglishNewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold">News</h1>
            <p className="mt-3 text-brand-100">{t.en.newsLead}</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-14 space-y-8">
          {media.news.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <Image src={item.image} alt={item.title} width={1200} height={900} className="h-auto w-full object-contain" />
              <div className="p-6">
                <p className="mb-2 text-xs text-stone-500">{item.date}</p>
                <h2 className="text-xl font-semibold text-stone-900">{item.title}</h2>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
