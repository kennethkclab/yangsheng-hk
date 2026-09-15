import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "國際健康養生會簡介",
  description: "了解國際健康養生會的緣起、宗旨與理念。",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="國際健康養生會簡介" subtitle={"健康立天下\n逍遙渡時光"} />
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">{siteData.about.title}</h2>
          <p className="mb-10 text-lg leading-relaxed text-stone-600">{siteData.about.originText}</p>
          <h3 className="mb-6 text-xl font-semibold text-stone-900">我們的宗旨</h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {siteData.about.missionList.map((item, i) => (
              <div key={i} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-800">{i + 1}</div>
                <p className="leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-stone-900">核心理念</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-600">我們相信健康不是等到生病後才去治療，而是日常生活中需要持續經營的「身心資本」。透過結合傳統道家智慧與現代科研實證，協助大眾建立正確的養生習慣。</p>
            <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-brand-700 px-8 py-3 text-sm font-medium text-white hover:bg-brand-800">聯絡我們了解更多</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
