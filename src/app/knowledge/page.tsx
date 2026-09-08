import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "養生常識" };

export default function KnowledgePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold">養生常識</h1>
            <p className="mt-3 text-brand-100">預防勝於治療，從日常習慣開始</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl">
            <Image src={media.r2 + "/images/photo02.jpg"} alt="養生常識" fill className="object-cover" />
          </div>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>道家內功著重氣血調理、呼吸與意念。持續練習有助緩解慢性疲勞、改善睡眠與集中力。</p>
            <p>慧心健腦御智功結合身心運動，適合希望提升記憶力與心神平靜的人士。</p>
            <p>建議先由專業導師指導入門，並依個人身體狀況調整強度。</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
