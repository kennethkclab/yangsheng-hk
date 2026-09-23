"use client";

import { useEffect, useState } from "react";

function thumbCandidates(id: string, aspect: "video" | "short") {
  if (aspect === "short") {
    return [
      `https://i.ytimg.com/vi/${id}/oar2.jpg`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/0.jpg`,
    ];
  }
  return [
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/0.jpg`,
  ];
}

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
  const [ready, setReady] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const thumbs = thumbCandidates(id, aspect);
  const thumb = thumbs[Math.min(thumbIndex, thumbs.length - 1)];
  const ratio = aspect === "short" ? "aspect-[9/16]" : "aspect-video";

  useEffect(() => {
    setPlay(false);
    setReady(false);
    setThumbIndex(0);
  }, [id, aspect]);

  const nextThumb = () => setThumbIndex((i) => Math.min(i + 1, thumbs.length - 1));

  return (
    <div className={`relative ${ratio} overflow-hidden bg-stone-900`}>
      {!ready ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={title}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
            onError={nextThumb}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth <= 120 || img.naturalHeight <= 90) nextThumb();
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/75 via-black/25 to-transparent px-3 pb-10 pt-3">
            <p className="line-clamp-2 text-[15px] font-semibold leading-snug text-white drop-shadow">{title}</p>
          </div>
          <button type="button" onClick={() => setPlay(true)} className="absolute inset-0 z-20" aria-label={`Play ${title}`}>
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
        </>
      ) : null}

      {play ? (
        <iframe
          className="absolute inset-0 z-30 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setReady(true)}
        />
      ) : null}
    </div>
  );
}
