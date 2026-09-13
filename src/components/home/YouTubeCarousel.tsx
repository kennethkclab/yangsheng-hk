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
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
              {locale === "en" ? "YouTube channel" : "YouTube 頻道"}
            </h2>
            <p className="mt-1 text-stone-600">
              {locale === "en"
                ? "Watch featured talks and visit our channel for more."
                : "精選影片，歡迎訂閱我們的 YouTube 頻道。"}
            </p>
          </div>
          <a
            href={youtubeChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            {locale === "en" ? "Visit @yangshenghk" : "前往 @yangshenghk"}
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
          <div className="relative aspect-video">
            <iframe
              key={video.id}
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <p className="mt-4 text-center text-sm font-medium text-stone-800">{title}</p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button type="button" onClick={prev} className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 hover:bg-stone-100" aria-label="Previous">
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
          <button type="button" onClick={next} className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 hover:bg-stone-100" aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
