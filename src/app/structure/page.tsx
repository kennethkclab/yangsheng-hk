import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "行政架構",
  description: "國際健康養生會行政架構與主要職務。",
};

const roles = [
  {
    title: "主席",
    name: "岑信棠醫生",
    note: "香港大學醫學院臨床腫瘤學系榮譽教授、腫瘤專科醫生，負責會務與科研發展方向。",
    href: "/Dr-ShamShunTong",
  },
  {
    title: "創會人 / 課程總監",
    name: "袁麗萍教授",
    note: "創會並主持道家內功與科研健腦御智功課程，推動與香港大學的養生科研合作。",
    href: "/gallery",
  },
  {
    title: "義務幹事",
    name: "學員與志願者",
    note: "協助處理課程招生、活動安排與會務，實踐「預防勝於治療」的社區推廣。",
    href: "/contact",
  },
];

export default function StructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="行政架構" subtitle="非牟利社團·成立於 2009 年 12 月" />
        <section className="mx-auto max-w-4xl px-4 py-14">
          <p className="mb-10 leading-relaxed text-stone-600">
            國際健康養生會為康健及養生非牟利社團，以「預防勝於治療」為宗旨，結合現代醫學科研與傳統養生功法。以下為目前主要行政架構。
          </p>
          <div className="space-y-5">
            {roles.map((role) => (
              <article key={role.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-brand-700">{role.title}</p>
                <h2 className="mt-1 text-2xl font-bold text-stone-900">{role.name}</h2>
                <p className="mt-3 leading-relaxed text-stone-600">{role.note}</p>
                <Link href={role.href} className="mt-4 inline-block text-brand-700 hover:underline">
                  了解更多 →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
