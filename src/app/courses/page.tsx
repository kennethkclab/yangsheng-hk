import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "課程介紹",
  description: "國際健康養生會主要課程：道家內功養生班、慧心健腦御智功等。",
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-gradient-to-br from-brand-700 to-brand-800 py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">課程介紹</h1>
            <p className="text-lg text-brand-100">
              結合科研實證的養生功法，適合不同年齡與健康狀況人士
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="space-y-8">
            {siteData.courses.map((course, index) => (
              <article
                key={course.id}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center p-10 min-h-[180px]">
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-brand-700/50">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm font-semibold text-brand-800">{course.title}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <h2 className="mb-2 text-2xl font-bold text-stone-900">{course.title}</h2>
                    <p className="mb-4 text-sm font-medium text-brand-700">
                      導師：{course.instructor}
                    </p>
                    <p className="mb-6 leading-relaxed text-stone-600">{course.description}</p>
                    <div>
                      <a
                        href={siteData.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-brand-700 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-800"
                      >
                        查詢報名
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-brand-800 p-8 md:p-10 text-center text-white">
            <h3 className="mb-3 text-xl font-bold md:text-2xl">想了解更多課程詳情？</h3>
            <p className="mb-8 text-brand-100 max-w-xl mx-auto">
              歡迎透過 WhatsApp 與我們聯絡，我們會為你提供最新班次與報名資訊。
            </p>
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              立即 WhatsApp 查詢
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
