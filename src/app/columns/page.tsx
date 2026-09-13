import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { yidao } from "@/data/yidao";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "健康專欄" };

export default function ColumnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="健康專欄" subtitle="岑信棠醫生與養生會的健康資訊與報道" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yidao.articles.map((item) => (
              <a key={`${item.title}-${item.date}`} href={yidao.sourcePage} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] bg-stone-100">
                  <Image src={yidao.cover} alt={item.title} fill className="object-contain p-2" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-500">{item.date}</p>
                  <h2 className="mt-1 text-lg font-semibold text-stone-900">{item.title}</h2>
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
