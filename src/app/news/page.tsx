import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { media } from "@/data/media";
import Image from "next/image";
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
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold md:text-4xl">最新資訊</h1>
            <p className="mt-3 text-brand-100">課程招生、活動紀錄與會務公告</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-14">
          <div className="space-y-10">
            {media.news.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="block bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-contain"
                  />
                </a>
                <div className="p-6">
                  <p className="mb-2 text-xs text-stone-500">{item.date}</p>
                  <h2 className="mb-2 text-xl font-semibold text-stone-900">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-stone-600">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
