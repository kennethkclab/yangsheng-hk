import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "科研結果" };

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="科研結果" subtitle="與香港大學行為健康教研中心合作的內功研究" />
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-2xl">
            <Image src={`${media.r2}/images/photo01.jpg`} alt="科研與課程" fill className="object-cover" />
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">2009 年，「中華傳統醫學治療中心」與「香港大學行為健康教研中心」合作舉辦道家內功學習課程，研究內功對慢性疲勞綜合症的效果。學員練習後身體狀況有顯著改善，亦推動養生會正式成立。</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
