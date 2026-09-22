"use client";

import { useState } from "react";
import { activityHighlights, youtubeChannel } from "@/data/youtube";
import LiteYouTube from "@/components/media/LiteYouTube";

export default function ActivityHighlights({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const [index, setIndex] = useState(0);
  if (activityHighlights.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? activityHighlights.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === activityHighlights.length - 1 ? 0 : i + 1));
  const current = activityHighlights[index];

  return (
    <section className="bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
            {locale === "en" ? "Event highlights" : "活動花絮"}
          </h2>
          <a href={youtubeChannel.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-medium text-brand-700 hover:underline">
            {locale === "en" ? "More on YouTube →" : "到 YouTube 看更多 →"}
          </a>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {activityHighlights.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm">
              <LiteYouTube id={item.id} title={locale === "en" ? item.titleEn : item.title} />
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-stone-900">{locale === "en" ? item.titleEn : item.title}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="lg:hidden">
          <article className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm">
            <LiteYouTube id={current.id} title={locale === "en" ? current.titleEn : current.title} />
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-stone-900">{locale === "en" ? current.titleEn : current.title}</p>
            </div>
          </article>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button type="button" onClick={prev} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white text-stone-700" aria-label="Previous">
              ←
            </button>
            <div className="flex gap-2">
              {activityHighlights.map((item, i) => (
                <button key={item.id} type="button" onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-brand-700" : "bg-stone-300"}`} aria-label={`Highlight ${i + 1}`} />
              ))}
            </div>
            <button type="button" onClick={next} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white text-stone-700" aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
