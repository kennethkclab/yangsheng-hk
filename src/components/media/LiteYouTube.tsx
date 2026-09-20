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
  const thumb = aspect === "short"
    ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className={`relative ${ratio} overflow-hidden bg-stone-900`}>
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="absolute inset-0 h-full w-full" aria-label={`Play ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 block rounded-full bg-[#FF0000] shadow-lg"
            style={{ width: 68, height: 68, marginLeft: -34, marginTop: -34 }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" className="absolute left-1/2 top-1/2 -translate-x-[46%] -translate-y-1/2" aria-hidden>
              <path fill="#fff" d="M8 5.5v13l11-6.5L8 5.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
