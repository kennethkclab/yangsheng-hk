import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
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
        <PageHero title="News" subtitle={t.en.newsLead} />
        <section className="mx-auto max-w-4xl space-y-8 px-4 py-14">
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
