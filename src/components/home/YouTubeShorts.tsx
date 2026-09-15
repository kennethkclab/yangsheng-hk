"use client";

import { useState } from "react";
import { featuredShorts, youtubeChannel } from "@/data/youtube";
import LiteYouTube from "@/components/media/LiteYouTube";

export default function YouTubeShorts({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? featuredShorts.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === featuredShorts.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
            {locale === "en" ? "Watch more Shorts" : "短片精選"}
          </h2>
          <a href={youtubeChannel.shortsUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">
            {locale === "en" ? "More Shorts on YouTube →" : "到 YouTube 看更多短片 →"}
          </a>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {featuredShorts.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 shadow-sm">
              <LiteYouTube id={item.id} title={locale === "en" ? item.titleEn : item.title} aspect="short" />
            </article>
          ))}
        </div>

        <div className="lg:hidden">
          <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 shadow-sm">
            <LiteYouTube id={featuredShorts[index].id} title={locale === "en" ? featuredShorts[index].titleEn : featuredShorts[index].title} aspect="short" />
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button type="button" onClick={prev} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700" aria-label="Previous">
              ←
            </button>
            <div className="flex gap-2">
              {featuredShorts.map((item, i) => (
                <button key={item.id} type="button" onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-brand-700" : "bg-stone-300"}`} aria-label={`Short ${i + 1}`} />
              ))}
            </div>
            <button type="button" onClick={next} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700" aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
