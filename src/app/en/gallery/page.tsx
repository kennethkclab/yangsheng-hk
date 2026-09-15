import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { yuenGallery } from "@/data/yuenGallery";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: yuenGallery.titleEn };

export default function EnglishGalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title={yuenGallery.titleEn} subtitle="Teaching, community service and portraits" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {yuenGallery.items.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <div className="bg-stone-100 md:hidden">
                  <Image src={item.mobile} alt={item.captionEn} width={1200} height={1400} className="h-auto w-full object-contain" />
                </div>
                <div className="hidden bg-stone-100 md:block">
                  <Image src={item.desktop} alt={item.captionEn} width={1700} height={1300} className="h-auto w-full object-contain" />
                </div>
                <figcaption className="px-4 py-3 text-sm leading-relaxed text-stone-600">{item.captionEn}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
