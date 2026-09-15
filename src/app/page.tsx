import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YouTubeCarousel from "@/components/home/YouTubeCarousel";
import { siteData } from "@/data/siteContent";
import { media } from "@/data/media";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const previewPhotos = [
    media.r2 + "/images/gallery/8.jpg",
    media.r2 + "/images/gallery/10.jpg",
    media.r2 + "/images/gallery/7.jpg",
    media.r2 + "/images/gallery/6.jpg",
    media.r2 + "/images/gallery/4.jpg",
    media.r2 + "/images/news/24.jpg",
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src={siteData.images.hero1} alt="養生會活動" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/70 to-brand-900/40" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <div className="max-w-2xl">
              <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium tracking-wide text-brand-50 backdrop-blur">{siteData.brand.nature}</p>
              <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                健康立天下
                <br />
                逍遙渡時光
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-brand-50/90">結合道家內功智慧與現代科研實證，為追求健康長壽的人士提供專業協助。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-800 shadow-lg hover:bg-brand-50">了解養生會</Link>
                <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">WhatsApp 查詢</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 shadow-sm">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/mfk2BhJGTSU"
                  title="國際健康養生會影片"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">{siteData.about.title}</h2>
            <Link href="/about" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">了解更多 →</Link>
          </div>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-stone-600">{siteData.about.originText}</p>
          <ul className="grid gap-5 sm:grid-cols-3">
            {siteData.about.missionList.map((item, i) => (
              <li key={i} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">{i + 1}</div>
                <p className="leading-relaxed text-stone-700">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">主要課程</h2>
              <Link href="/courses" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">查看全部課程 →</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {siteData.courses.map((course) => (
                <article key={course.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  <div className="bg-stone-100">
                    <Image src={course.imageUrl} alt={course.title} width={1200} height={800} className="h-auto w-full object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-stone-900">{course.title}</h3>
                    <p className="mb-3 text-sm text-brand-700">導師：{course.instructor}</p>
                    <p className="mb-5 leading-relaxed text-stone-600">{course.description}</p>
                    <Link href="/courses" className="text-sm font-medium text-brand-700 hover:underline">了解詳情 →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <YouTubeCarousel locale="zh" />

        <section className="bg-stone-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">活動相片</h2>
              <Link href="/gallery" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">查看相簿 →</Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {previewPhotos.map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200">
                  <Image src={src} alt="活動相片" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-800 py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">聯絡我們</h2>
            <p className="mb-1 text-brand-100">電話：{siteData.contact.phoneDisplay}</p>
            <p className="mb-8 text-brand-100">{siteData.contact.address}</p>
            <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-brand-800 hover:bg-brand-50">立即 WhatsApp 查詢</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
