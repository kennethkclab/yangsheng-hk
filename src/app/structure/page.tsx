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

const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";
const portrait = `${R2}/images/people/yuen-lai-ping.jpg`;

const titles = [
  { org: "國際健康養生會", role: "創會主席" },
  { org: "中華傳統醫學研究所", role: "所長" },
  { org: "國際中醫中藥總會", role: "永遠會長" },
  { org: "香港腫瘤中心", role: "榮譽臨床顧問" },
  { org: "世界華人協會十大精英之一", role: "醫療界代表" },
  { org: "聯合國特殊醫療貢獻獎", role: "第一位獲頒的中國人" },
];

const board = [
  {
    name: "岑信棠教授",
    role: "創會主席",
    text: "香港大學醫學院臨床腫瘤學系榮譽教授、腫瘤專科醫生，國際健康養生會創會主席，推動科研與「生活方式醫學」。",
    href: "/Dr-ShamShunTong",
    link: "閱讀醫道文章 →",
  },
  {
    name: "陳麗雲教授",
    role: "創會秘書長",
    text: "國際健康養生會創會秘書長。",
    photo: `${R2}/images/people/chan-lai-wan.jpg`,
  },
  {
    name: "陳智軒教授",
    role: "董事",
    text: "國際健康養生會董事。",
  },
  {
    name: "李湄珍教授",
    role: "董事",
    text: "國際健康養生會董事。",
    photo: `${R2}/images/people/lee-mei-chun.jpg`,
  },
];

export default function StructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="行政架構" subtitle="非牟利社團·成立於 2009 年 12 月" />
        <section className="mx-auto max-w-5xl px-4 py-14">
          <article className="mb-8 overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm">
            <div className="bg-stone-100">
              <Image src={portrait} alt="袁麗萍教授" width={1200} height={1200} className="mx-auto h-auto w-full max-w-xl object-contain" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-brand-700">創會主席</p>
              <h2 className="mt-1 text-3xl font-bold text-stone-900">袁麗萍教授</h2>
              <p className="mt-4 mb-5 leading-relaxed text-stone-600">國際健康養生會創會主席，主持道家內功與科研健腦御智功課程，並推動與香港大學的養生科研合作。</p>
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

          {board.map((person) => (
            <article key={person.name} className="mb-5 overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm">
              {person.photo ? (
                <div className="bg-stone-100">
                  <Image src={person.photo} alt={person.name} width={900} height={900} className="mx-auto h-auto w-full max-w-sm object-cover" />
                </div>
              ) : null}
              <div className="p-6">
                <p className="text-sm font-medium text-brand-700">{person.role}</p>
                <h2 className="mt-1 text-2xl font-bold text-stone-900">{person.name}</h2>
                <p className="mt-3 leading-relaxed text-stone-600">{person.text}</p>
                {person.href ? (
                  <Link href={person.href} className="mt-4 inline-block text-brand-700 hover:underline">
                    {person.link}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
