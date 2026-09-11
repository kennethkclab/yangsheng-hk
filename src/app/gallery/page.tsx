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
            <p className="mt-3 text-brand-100">原站相簿與活動紀錄，完整顯示原圖</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {media.galleryPhotos.slice(0, 40).map((src) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block min-h-[260px] overflow-hidden rounded-2xl bg-stone-200"
              >
                <Image
                  src={src}
                  alt="活動相片"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-contain"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
