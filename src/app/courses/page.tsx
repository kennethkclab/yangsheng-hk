import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import LiteYouTube from "@/components/media/LiteYouTube";
import { siteData } from "@/data/siteContent";
import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageSeo(
  "/courses",
  "課程介紹",
  "國際健康養生會主要課程：科研健腦御智功、五行平衡功，由袁麗萍教授主持。",
);

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="課程介紹" subtitle="結合科研實證的養生功法，適合不同年齡與健康狀況人士" align="center" />
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="space-y-8">
            {siteData.courses.map((course) => (
              <article key={course.id} className="overflow-hidden border border-stone-200 bg-white shadow-sm md:flex md:items-center">
                <div className="bg-stone-50 md:w-[46%] md:shrink-0">
                  <LiteYouTube id={course.videoId} title={course.title} />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <h2 className="mb-2 text-2xl font-bold text-stone-900">{course.title}</h2>
                  <p className="mb-4 text-sm font-medium text-brand-700">導師：{course.instructor}</p>
                  <p className="mb-6 leading-relaxed text-stone-600">{course.description}</p>
                  <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block self-start rounded-md bg-brand-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-800">查詢報名</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
