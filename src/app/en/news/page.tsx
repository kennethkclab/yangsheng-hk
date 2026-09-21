import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import FacebookPost from "@/components/media/FacebookPost";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "News" };

const NEWS_HERO = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-news.jpg";

export default function EnglishNewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="News" image={NEWS_HERO} />
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
