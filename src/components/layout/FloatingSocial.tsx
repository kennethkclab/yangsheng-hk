"use client";

import { siteData } from "@/data/siteContent";

const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";

const stack = [
  {
    id: "facebook",
    label: "Facebook",
    href: siteData.socials.find((s) => s.id === "facebook")?.href ?? "https://www.facebook.com",
    src: `${R2}/images/icons/facebook.jpg`,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: siteData.socials.find((s) => s.id === "youtube")?.href ?? "https://youtube.com/@yangshenghk",
    src: "",
  },
  {
    id: "douyin",
    label: "抖音",
    href: siteData.socials.find((s) => s.id === "douyin")?.href ?? "https://www.douyin.com",
    src: "",
  },
  {
    id: "xiaohongshu",
    label: "小紅書",
    href: siteData.socials.find((s) => s.id === "xiaohongshu")?.href ?? "https://www.xiaohongshu.com",
    src: `${R2}/images/icons/xiaohongshu.jpg?v=3`,
  },
];

export default function FloatingSocial() {
  return (
    <>
      <div className="fixed right-2 top-1/2 z-[80] flex -translate-y-1/2 flex-col gap-2 md:right-3">
        {stack.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full shadow-md"
          >
            {item.id === "youtube" ? (
              <span className="flex h-full w-full items-center justify-center bg-[#FF0000] text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5V8.5L16.2 12 9.8 15.5z" />
                </svg>
              </span>
            ) : item.id === "douyin" ? (
              <span className="flex h-full w-full items-center justify-center bg-black">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path fill="#25F4EE" d="M14.2 3.1c.5 2.6 2.2 4.4 4.8 4.8v3.1c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.1-6.1 6.1S2.4 19.7 2.4 16.3 5.1 10.2 8.5 10.2c.4 0 .8 0 1.1.1v3.2c-.3-.1-.7-.2-1.1-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V3.1h2.8z" />
                  <path fill="#fff" d="M13.8 2.6c.5 2.6 2.2 4.4 4.8 4.8v2.4c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.1-6.1 6.1S2 18.5 2 15.1 4.7 9 8.1 9c.4 0 .8 0 1.1.1v2.4c-.3-.1-.7-.2-1.1-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V2.6h2.8z" />
                </svg>
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
            )}
          </a>
        ))}
      </div>

      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-3 z-[80] h-12 w-12 overflow-hidden rounded-full shadow-lg md:bottom-8 md:right-5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${R2}/images/icons/whatsapp.jpg`} alt="WhatsApp" className="h-full w-full object-cover" />
      </a>
    </>
  );
}
