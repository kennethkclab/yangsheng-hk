import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ResponsivePhoto from "@/components/media/ResponsivePhoto";
import { yuenGallery } from "@/data/yuenGallery";
import type { Metadata } from "next";

export const metadata: Metadata = { title: yuenGallery.titleEn };

const MEDIA_HERO = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-media.jpg";

export default function EnglishGalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title={yuenGallery.titleEn} subtitle="Teaching, community service and portraits" image={MEDIA_HERO} overlay="soft" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {yuenGallery.items.map((item, index) => (
              <figure key={item.id} className="overflow-hidden border border-stone-200 bg-white shadow-sm [content-visibility:auto]">
                <div className="bg-stone-100">
                  <ResponsivePhoto desktop={item.desktop} mobile={item.mobile} alt={item.captionEn} priority={index === 0} />
                </div>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
