"use client";

import { useEffect, useState } from "react";

function thumbCandidates(id: string, aspect: "video" | "short") {
  if (aspect === "short") {
    return [
      `https://i.ytimg.com/vi/${id}/oar2.jpg`,
      `https://i.ytimg.com/vi/${id}/oardefault.jpg`,
      `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    ];
  }
  return [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hq720.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
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
  const size = 44;

  useEffect(() => {
    setPlay(false);
    setReady(false);
    setThumbIndex(0);
  }, [id, aspect]);

  return (
    <div className={`relative ${ratio} overflow-hidden bg-stone-900`}>
      {!ready ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={title}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setThumbIndex((i) => Math.min(i + 1, thumbs.length - 1))}
          />
          <button type="button" onClick={() => setPlay(true)} className="absolute inset-0 z-10" aria-label={`Play ${title}`}>
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 block rounded-full bg-[#FF0000] shadow-md"
              style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" className="absolute left-1/2 top-1/2 -translate-x-[42%] -translate-y-1/2" aria-hidden>
                <path fill="#fff" d="M8 5.5v13l11-6.5L8 5.5z" />
              </svg>
            </span>
          </button>
        </>
      ) : null}

      {play ? (
        <iframe
          className="absolute inset-0 z-20 h-full w-full"
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
