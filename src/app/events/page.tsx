import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { media } from "@/data/media";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "養生活動" };

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="養生活動" subtitle="社區活動、課程與公益推廣" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {media.events.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <a href={item.image} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] bg-stone-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                </a>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-stone-900">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-stone-900">活動影片</h2>
            <div className="overflow-hidden rounded-2xl bg-black">
              <video className="aspect-video w-full" controls preload="metadata">
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
