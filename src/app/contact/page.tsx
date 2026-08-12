import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
        <section className="bg-gradient-to-br from-brand-50 to-stone-100 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-stone-900 md:text-4xl">
              聯絡我們
            </h1>
            <p className="text-lg text-stone-600">
              歡迎查詢課程、活動或養生相關問題
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-stone-900">聯絡資料</h2>
              <ul className="space-y-5 text-stone-700">
                <li>
                  <p className="text-sm text-stone-500 mb-1">電話</p>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="text-lg font-medium text-brand-800 hover:underline"
                  >
                    {siteData.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="text-sm text-stone-500 mb-1">WhatsApp</p>
                  <a
                    href={siteData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-brand-800 hover:underline"
                  >
                    點擊開啟 WhatsApp 對話
                  </a>
                </li>
                <li>
                  <p className="text-sm text-stone-500 mb-1">地址</p>
                  <p className="text-lg">{siteData.contact.address}</p>
                  <p className="text-sm text-stone-500 mt-1">
                    {siteData.contact.addressEn}
                  </p>
                </li>
                <li>
                  <p className="text-sm text-stone-500 mb-1">電郵</p>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-lg font-medium text-brand-800 hover:underline"
                  >
                    {siteData.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-800 p-8 text-white flex flex-col justify-center">
              <h2 className="mb-4 text-xl font-bold">最快聯絡方式</h2>
              <p className="mb-8 text-brand-100 leading-relaxed">
                如需查詢課程班次、報名詳情或養生問題，建議直接透過 WhatsApp
                與我們聯繫，我們會盡快回覆。
              </p>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-8 py-3 text-center text-sm font-medium text-brand-800 transition hover:bg-brand-50"
              >
                立即開啟 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
