import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { media } from "@/data/media";
import { t } from "@/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "News" };

export default function EnglishNewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="News" subtitle={t.en.newsLead} />
        <section className="mx-auto max-w-4xl space-y-6 px-4 py-14">
          {media.news.map((item) => (
            <article key={item.id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-semibold text-stone-900">{item.titleEn}</h2>
              <p className="mb-5 leading-relaxed text-stone-600">{item.summaryEn}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-brand-700 px-5 py-2.5 text-white hover:bg-brand-800"
              >
                Open Facebook post →
              </a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
