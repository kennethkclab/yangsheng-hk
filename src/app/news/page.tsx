import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import FacebookPost from "@/components/media/FacebookPost";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新資訊",
  description: "國際健康養生會最新活動與課程資訊。",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="最新資訊" />
        <section className="mx-auto max-w-2xl space-y-8 px-4 py-14">
          {media.news.map((item) => (
            <FacebookPost key={item.id} href={item.href} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
