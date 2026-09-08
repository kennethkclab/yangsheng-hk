import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { media } from "@/data/media";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "活動相簿" };

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold">活動相簿</h1>
            <p className="mt-3 text-brand-100">原站相簿與活動紀錄</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {media.galleryPhotos.slice(0, 40).map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-xl bg-stone-100">
                <Image src={src} alt="活動相片" fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
