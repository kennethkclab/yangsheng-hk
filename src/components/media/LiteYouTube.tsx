"use client";

import { useState } from "react";

export default function LiteYouTube({
  id,
  title,
  aspect = "video",
}: {
  id: string;
  title: string;
  aspect?: "video" | "short";
}) {
  const [play, setPlay] = useState(false);
  const ratio = aspect === "short" ? "aspect-[9/16]" : "aspect-video";
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (play) {
    return (
      <div className={`relative ${ratio} overflow-hidden bg-stone-900`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      className={`relative block w-full ${ratio} overflow-hidden bg-stone-900`}
      aria-label={`Play ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[14px] bg-[#FF0000] shadow-md">
        <svg viewBox="0 0 24 24" width="22" height="22" className="ml-0.5" aria-hidden>
          <path fill="#fff" d="M8 5.5v13l11-6.5L8 5.5z" />
        </svg>
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white">
        Watch on
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8z" />
          <path fill="#fff" d="M9.8 15.5V8.5L16 12z" />
        </svg>
        YouTube
      </span>
    </button>
  );
}
