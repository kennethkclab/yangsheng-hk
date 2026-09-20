"use client";

import { useEffect, useState } from "react";

type Props = {
  desktop: string;
  mobile: string;
  alt: string;
  priority?: boolean;
};

export default function ResponsivePhoto({ desktop, mobile, alt, priority = false }: Props) {
  const [src, setSrc] = useState(desktop);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setSrc(mq.matches ? mobile : desktop);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [desktop, mobile]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="h-auto w-full object-contain" {...(priority ? { fetchPriority: "high" as const } : {})} />
  );
}
