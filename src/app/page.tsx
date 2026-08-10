import { siteData } from "@/data/siteContent";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Temporary skeleton – full components coming next */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Image
              src={siteData.images.logo}
              alt={siteData.brand.name}
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-brand-800">
                {siteData.brand.name}
              </p>
              <p className="text-xs text-stone-500">
                {siteData.brand.englishName}
              </p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-700 md:flex">
            {siteData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-brand-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-stone-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 text-sm font-medium tracking-widest text-brand-700">
              {siteData.brand.nature}
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-stone-900 md:text-5xl">
              {siteData.brand.slogan}
            </h1>
            <p className="mb-8 max-w-lg text-lg text-stone-600">
              結合道家內功智慧與現代科研實證，為追求健康長壽的人士提供專業協助。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/about"
                className="rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-800"
              >
                了解養生會
              </a>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-700 px-6 py-3 text-sm font-medium text-brand-800 transition hover:bg-brand-50"
              >
                WhatsApp 查詢
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={siteData.images.hero1}
              alt="養生會活動"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold text-stone-900">
          {siteData.about.title}
        </h2>
        <p className="mb-8 max-w-3xl leading-relaxed text-stone-600">
          {siteData.about.originText}
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {siteData.about.missionList.map((item, i) => (
            <li
              key={i}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <span className="mb-2 block text-sm font-semibold text-brand-700">
                宗旨 {i + 1}
              </span>
              <p className="text-stone-700">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Courses */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-stone-900">主要課程</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {siteData.courses.map((course) => (
              <article
                key={course.id}
                className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold text-stone-900">
                    {course.title}
                  </h3>
                  <p className="mb-3 text-sm text-brand-700">
                    導師：{course.instructor}
                  </p>
                  <p className="text-stone-600">{course.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">聯絡我們</h2>
          <p className="mb-2 text-brand-100">
            電話：{siteData.contact.phoneDisplay}
          </p>
          <p className="mb-6 text-brand-100">{siteData.contact.address}</p>
          <a
            href={siteData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-3 font-medium text-brand-800 transition hover:bg-brand-50"
          >
            立即 WhatsApp 查詢
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-100 py-8 text-center text-sm text-stone-500">
        <p>
          © {new Date().getFullYear()} {siteData.brand.name}. All rights
          reserved.
        </p>
        <p className="mt-1">{siteData.brand.englishName}</p>
      </footer>
    </main>
  );
}
