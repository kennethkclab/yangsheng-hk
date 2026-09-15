import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "行政架構",
  description: "國際健康養生會行政架構與主要職務。",
};

const portrait = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/people/yuen-lai-ping.jpg";

const titles = [
  { org: "國際健康養生會", role: "主席" },
  { org: "中華傳統醫學研究所", role: "所長" },
  { org: "國際中醫中藥總會", role: "永遠會長" },
  { org: "香港腫瘤中心", role: "榮譽臨床顧問" },
  { org: "世界華人協會十大精英之一", role: "醫療界代表" },
  { org: "聯合國特殊醫療貢獻獎", role: "第一位獲頒的中國人" },
];

export default function StructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="行政架構" subtitle="非牟利社團·成立於 2009 年 12 月" />
        <section className="mx-auto max-w-5xl px-4 py-14">
          <article className="mb-8 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm md:grid md:grid-cols-[280px_1fr]">
            <div className="relative min-h-[320px] bg-stone-100">
              <Image src={portrait} alt="袁麗萍教授" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 280px" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-brand-700">創辦人及主席</p>
              <h2 className="mt-1 text-3xl font-bold text-stone-900">袁麗萍教授</h2>
              <p className="mt-4 mb-5 leading-relaxed text-stone-600">國際健康養生會創辦人及主席，主持道家內功與科研健腦御智功課程，並推動與香港大學的養生科研合作。</p>
              <h3 className="mb-3 text-lg font-semibold text-stone-900">袁麗萍教授職衔</h3>
              <ul className="space-y-2">
                {titles.map((item) => (
                  <li key={item.org} className="flex flex-col gap-0.5 border-b border-stone-100 py-2 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-stone-800">{item.org}</span>
                    <span className="text-brand-700">{item.role}</span>
                  </li>
                ))}
              </ul>
              <Link href="/gallery" className="mt-5 inline-block text-brand-700 hover:underline">查看圖片集 →</Link>
            </div>
          </article>

          <article className="mb-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-brand-700">資深臨床腫瘤科醫生 / 科研發展</p>
            <h2 className="mt-1 text-2xl font-bold text-stone-900">岑信棠醫生</h2>
            <p className="mt-3 leading-relaxed text-stone-600">香港大學醫學院臨床腫瘤學系榮譽教授，協助推動養生會科研與「生活方式醫學」。</p>
            <Link href="/Dr-ShamShunTong" className="mt-4 inline-block text-brand-700 hover:underline">了解更多 →</Link>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-brand-700">義務幹事</p>
            <h2 className="mt-1 text-2xl font-bold text-stone-900">學員與志願者</h2>
            <p className="mt-3 leading-relaxed text-stone-600">協助處理課程招生、活動安排與會務。</p>
            <Link href="/contact" className="mt-4 inline-block text-brand-700 hover:underline">聯絡我們 →</Link>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
