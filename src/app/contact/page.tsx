import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "聯絡國際健康養生會，查詢課程與活動資訊。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="聯絡我們" subtitle="歡迎查詢課程、活動或養生相關問題" align="center" />
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="mb-8 text-xl font-bold text-stone-900">聯絡資料</h2>
              <ul className="space-y-6 text-stone-800">
                <li>
                  <p className="text-sm text-stone-500">電話</p>
                  <a href={`tel:${siteData.contact.phone}`} className="text-lg font-medium text-brand-800">{siteData.contact.phoneDisplay}</a>
                </li>
                <li>
                  <p className="text-sm text-stone-500">WhatsApp</p>
                  <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-brand-800">點擊開啟對話</a>
                </li>
                <li>
                  <p className="text-sm text-stone-500">地址</p>
                  <p className="text-lg">{siteData.contact.address}</p>
                  <p className="text-sm text-stone-500">{siteData.contact.addressEn}</p>
                </li>
                <li>
                  <p className="text-sm text-stone-500">電郵</p>
                  <a href={`mailto:${siteData.contact.email}`} className="text-lg font-medium text-brand-800">{siteData.contact.email}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-brand-800 p-8 text-white md:p-10">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">最快聯絡方式</h2>
              <p className="mb-8 leading-relaxed text-brand-100">如需查詢課程班次、報名詳情或養生問題，建議直接透過 WhatsApp 與我們聯繫，我們會盡快回覆。</p>
              <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-brand-800 hover:bg-brand-50">立即開啟 WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
