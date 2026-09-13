import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { media } from "@/data/media";
import { t } from "@/i18n/dict";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery" };

export default function EnglishGalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Gallery" subtitle={t.en.galleryLead} />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {media.galleryPhotos.slice(0, 24).map((src) => (
              <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-2xl bg-stone-200">
                <Image src={src} alt="Activity photo" width={1200} height={900} className="h-auto w-full object-contain" />
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
