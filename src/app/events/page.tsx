import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { media } from "@/data/media";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "養生活動",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold md:text-4xl">養生活動</h1>
            <p className="mt-3 text-brand-100">社區活動、課程與公益推廣</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {media.events.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-sm border border-stone-200">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-stone-900">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-stone-900">活動影片</h2>
            <video className="w-full rounded-2xl bg-black" controls preload="metadata" poster={media.galleryAlbums[0].cover}>
              <source src={media.videos.happyValley} type="video/mp4" />
            </video>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
