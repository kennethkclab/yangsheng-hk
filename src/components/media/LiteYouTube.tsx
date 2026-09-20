"use client";

import Image from "next/image";
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
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            fill
            quality={60}
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
          />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-xl text-white shadow-lg">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
