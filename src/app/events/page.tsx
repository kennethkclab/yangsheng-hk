import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { media } from "@/data/media";
import { t } from "@/i18n/dict";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "養生活動" };

export default function EventsPage() {
  const copy = t.zh;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="養生活動" subtitle="社區活動、課程與養生常識" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {media.events.map((item) => (
              <article key={item.id} className="overflow-hidden border border-stone-200 bg-white shadow-sm [content-visibility:auto]">
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] bg-stone-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </a>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-stone-900">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-stone-900">養生常識</h2>
            <p className="mb-4 text-stone-500">{copy.knowledgeLead}</p>
            <div className="space-y-4 leading-relaxed text-stone-600">
              <p>{copy.knowledgeP1}</p>
              <p>{copy.knowledgeP2}</p>
              <p>{copy.knowledgeP3}</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-4 text-xl font-bold text-stone-900">活動影片</h2>
            <div className="overflow-hidden bg-stone-100">
              <video className="aspect-video w-full" controls preload="none" poster={media.videos.happyValleyPoster} playsInline>
                <source src={media.videos.happyValley} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
