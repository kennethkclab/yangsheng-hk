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
const STRUCTURE_HERO = `${R2}/images/hero-structure.jpg`;
const portrait = `${R2}/images/people/yuen-lai-ping-v2.jpg`;

const titles = [
  { org: "國際健康養生會", role: "創會主席" },
  { org: "中華傳統醫學研究所", role: "所長" },
  { org: "國際中醫中藥總會", role: "永遠會長" },
  { org: "香港腫瘤中心", role: "榮譽臨床顧問" },
  { org: "世界華人協會十大精英之一", role: "醫療界代表" },
  { org: "聯合國特殊醫療貢獻獎", role: "第一位獲頒的中國人" },
];

const shamQualifications = [
  "香港大學內外全科醫學士 1980",
  "英國放射治療學文憑 1985",
  "英國皇家放射科學醫學院院士 1985",
  "香港放射科醫學院院士 1991",
  "香港大學醫學博士 1993",
  "香港醫學專科學院院士（放射科） 1993",
];

const ceciliaTitles = [
  "香港大學社會工作及社會行政學系榮休教授",
  "太平紳士",
  "腫瘤社會工作協會院士",
  "香港社會工作專科學院創院院士",
  "香港輔導專業人員協會會院士",
  "世界死亡及哀傷專家組成員",
];

const chetwynTitles = [
  "香港復康會執行委員會主席",
  "香港教育大學教授",
];

const tatiaTitles = [
  "香港心理學會註冊臨床心理學家",
  "加拿大不列顛哥倫比亞省註冊心理學家",
  "加拿大亞伯達省特許心理學家",
  "澳洲註冊心理學家",
  "美國認證臨床腦神經心理學家",
  "香港大學心理科學與臨床心理學講座教授",
];

const board = [
  {
    name: "岑信棠醫生",
    role: "創會主席",
    text: "香港大學醫學院臨床腫瘤學系榮譽教授",
    href: "/Dr-ShamShunTong",
    link: "閱讀醫道文章 →",
    photo: `${R2}/images/people/sham-shun-tong.jpg`,
    listTitle: "專業資格",
    qualifications: shamQualifications,
  },
  {
    name: "陳麗雲教授",
    role: "創會秘書長",
    text: "",
    photo: `${R2}/images/people/chan-lai-wan-v2.jpg`,
    listTitle: "頭銜",
    qualifications: ceciliaTitles,
  },
  {
    name: "陳智軒教授",
    role: "董事",
    text: "",
    photo: `${R2}/images/people/chan-chi-hin.jpg`,
    listTitle: "頭銜",
    qualifications: chetwynTitles,
  },
  {
    name: "李湄珍教授",
    role: "董事",
    text: "",
    photo: `${R2}/images/people/lee-mei-chun.jpg`,
    listTitle: "頭銜",
    qualifications: tatiaTitles,
  },
];

function Portrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm bg-stone-100">
      <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 384px" />
    </div>
  );
}

export default function StructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="行政架構" subtitle="非牟利社團·成立於 2009 年 12 月" image={STRUCTURE_HERO} overlay="soft" imagePosition="center 32%" />
        <section className="mx-auto max-w-3xl px-4 py-14">
          <article className="mb-8 overflow-hidden border border-stone-200 bg-white shadow-sm">
            <Portrait src={portrait} alt="袁麗萍教授" />
            <div className="border-t border-stone-100 px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6">
              <p className="text-sm font-medium text-brand-700">創會主席</p>
              <h2 className="mt-1 text-3xl font-bold text-stone-900">袁麗萍教授</h2>
              <p className="mt-4 mb-5 leading-relaxed text-stone-600">主持科研功法與科研健腦御智功課程，並推動與香港大學的養生科研合作。</p>
              <h3 className="mb-3 text-lg font-semibold text-stone-900">袁麗萍教授頭銜</h3>
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
            <article key={person.name} className="mb-5 overflow-hidden border border-stone-200 bg-white shadow-sm">
              {person.photo ? <Portrait src={person.photo} alt={person.name} /> : null}
              <div className="border-t border-stone-100 px-6 pb-6 pt-5">
                <p className="text-sm font-medium text-brand-700">{person.role}</p>
                <h2 className="mt-1 text-2xl font-bold text-stone-900">{person.name}</h2>
                {person.text ? <p className="mt-3 leading-relaxed text-stone-600">{person.text}</p> : null}
                {person.qualifications ? (
                  <>
                    <h3 className="mt-5 mb-2 text-lg font-semibold text-stone-900">{person.listTitle}</h3>
                    <ul className="space-y-2">
                      {person.qualifications.map((item) => (
                        <li key={item} className="border-b border-stone-100 py-2 text-stone-700 last:border-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
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
