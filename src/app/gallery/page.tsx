import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ResponsivePhoto from "@/components/media/ResponsivePhoto";
import { yuenGallery } from "@/data/yuenGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: yuenGallery.title,
  description: "袁麗萍教授活動、講學與合照紀錄。",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title={yuenGallery.title} subtitle="講學、公益活動與合照紀錄" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {yuenGallery.items.map((item, index) => (
              <figure key={item.id} className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm [content-visibility:auto]">
                <div className="bg-stone-100">
                  <ResponsivePhoto desktop={item.desktop} mobile={item.mobile} alt={item.caption} priority={index === 0} />
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
