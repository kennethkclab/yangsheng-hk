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
        <section className="bg-gradient-to-br from-brand-700 to-brand-800 py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">聯絡我們</h1>
            <p className="text-lg text-brand-100">
              歡迎查詢課程、活動或養生相關問題
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact info card */}
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="mb-8 text-xl font-bold text-stone-900">聯絡資料</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-0.5">電話</p>
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-lg font-medium text-brand-800 hover:underline"
                    >
                      {siteData.contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-0.5">WhatsApp</p>
                    <a
                      href={siteData.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-brand-800 hover:underline"
                    >
                      點擊開啟對話
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-0.5">地址</p>
                    <p className="text-lg text-stone-800">{siteData.contact.address}</p>
                    <p className="text-sm text-stone-500 mt-0.5">{siteData.contact.addressEn}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 mb-0.5">電郵</p>
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="text-lg font-medium text-brand-800 hover:underline"
                    >
                      {siteData.contact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA card */}
            <div className="rounded-2xl bg-brand-800 p-8 md:p-10 text-white flex flex-col justify-center">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">最快聯絡方式</h2>
              <p className="mb-8 text-brand-100 leading-relaxed">
                如需查詢課程班次、報名詳情或養生問題，建議直接透過 WhatsApp
                與我們聯繫，我們會盡快回覆。
              </p>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
              >
                立即開啟 WhatsApp
              </a>
              <p className="mt-6 text-sm text-brand-200">
                電話亦可直接致電：{siteData.contact.phoneDisplay}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
