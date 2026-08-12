import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteContent";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium tracking-wide text-brand-50 backdrop-blur">
                {siteData.brand.nature}
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {siteData.brand.slogan}
              </h1>
              <p className="mb-8 text-lg text-brand-50/90 leading-relaxed">
                結合道家內功智慧與現代科研實證，為追求健康長壽的人士提供專業協助。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50"
                >
                  了解養生會
                </Link>
                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp 查詢
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
              {siteData.about.title}
            </h2>
            <Link
              href="/about"
              className="shrink-0 text-sm font-medium text-brand-700 hover:underline"
            >
              了解更多 →
            </Link>
          </div>
          <p className="mb-10 max-w-3xl leading-relaxed text-stone-600 text-lg">
            {siteData.about.originText}
          </p>
          <ul className="grid gap-5 sm:grid-cols-3">
            {siteData.about.missionList.map((item, i) => (
              <li
                key={i}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                  {i + 1}
                </div>
                <p className="text-stone-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Courses */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">主要課程</h2>
              <Link
                href="/courses"
                className="shrink-0 text-sm font-medium text-brand-700 hover:underline"
              >
                查看全部課程 →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {siteData.courses.map((course, idx) => (
                <article
                  key={course.id}
                  className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-1 text-3xl font-bold text-brand-700/40">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm font-medium text-brand-800">{course.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-stone-900 group-hover:text-brand-800 transition-colors">
                      {course.title}
                    </h3>
                    <p className="mb-3 text-sm text-brand-700">導師：{course.instructor}</p>
                    <p className="mb-5 text-stone-600 leading-relaxed">{course.description}</p>
                    <Link
                      href="/courses"
                      className="text-sm font-medium text-brand-700 hover:underline"
                    >
                      了解詳情 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-brand-800 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">聯絡我們</h2>
            <p className="mb-1 text-brand-100">電話：{siteData.contact.phoneDisplay}</p>
            <p className="mb-8 text-brand-100">{siteData.contact.address}</p>
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50"
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
