import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新資訊",
  description: "國際健康養生會最新活動與課程資訊。",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="最新資訊" subtitle="請到 Facebook 架架閱讀完整帖文" />
        <section className="mx-auto max-w-4xl px-4 py-14">
          <div className="space-y-6">
            {media.news.map((item) => (
              <article key={item.id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="mb-2 text-xl font-semibold text-stone-900">{item.title}</h2>
                <p className="mb-5 leading-relaxed text-stone-600">{item.summary}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-brand-700 px-5 py-2.5 text-white hover:bg-brand-800"
                >
                  打開 Facebook 帖文 →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
