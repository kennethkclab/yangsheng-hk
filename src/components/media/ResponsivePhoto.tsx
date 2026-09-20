"use client";

import Image from "next/image";
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
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1200}
      quality={70}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="h-auto w-full object-contain"
    />
  );
}
