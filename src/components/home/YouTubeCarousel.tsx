"use client";

import { useState } from "react";
import { featuredVideos, youtubeChannel } from "@/data/youtube";

export default function YouTubeCarousel({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const [index, setIndex] = useState(0);
  const video = featuredVideos[index];
  const title = locale === "en" ? video.titleEn : video.title;

  const prev = () => setIndex((i) => (i === 0 ? featuredVideos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === featuredVideos.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
            {locale === "en" ? "YouTube channel" : "YouTube 頻道"}
          </h2>
          <a
            href={youtubeChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-brand-700 hover:underline"
          >
            {locale === "en" ? "Visit channel →" : "前往頻道 →"}
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          <div className="relative aspect-video bg-stone-900">
            <iframe
              key={video.id}
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="px-5 py-4">
            <p className="text-base font-semibold text-stone-900">{title}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 hover:bg-brand-50 hover:text-brand-800"
            aria-label="Previous"
          >
            ←
          </button>
          <div className="flex gap-2">
            {featuredVideos.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-brand-700" : "bg-stone-300"}`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 hover:bg-brand-50 hover:text-brand-800"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
