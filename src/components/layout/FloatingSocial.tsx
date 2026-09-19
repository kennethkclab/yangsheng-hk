"use client";

import { useEffect, useState, type ReactNode } from "react";
import { siteData } from "@/data/siteContent";

const xhsLogo = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/icons/xiaohongshu.jpg";

function TikTokMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#25F4EE" d="M14.2 3.1c.5 2.6 2.2 4.4 4.8 4.8v3.1c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.1-6.1 6.1S2.4 19.7 2.4 16.3 5.1 10.2 8.5 10.2c.4 0 .8 0 1.1.1v3.2c-.3-.1-.7-.2-1.1-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V3.1h2.8z" />
      <path fill="#FE2C55" d="M13.5 2.2c.5 2.6 2.2 4.4 4.8 4.8v3.1c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.1-6.1 6.1S1.7 18.8 1.7 15.4 4.4 9.3 7.8 9.3c.4 0 .8 0 1.1.1v3.2c-.3-.1-.7-.2-1.1-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V2.2h2.8z" opacity=".9" />
      <path fill="#fff" d="M13.8 2.6c.5 2.6 2.2 4.4 4.8 4.8v2.4c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.1-6.1 6.1S2 18.5 2 15.1 4.7 9 8.1 9c.4 0 .8 0 1.1.1v2.4c-.3-.1-.7-.2-1.1-.2-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V2.6h2.8z" />
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.74.46 3.44 1.33 4.94L2 22l5.37-1.4a10.1 10.1 0 0 0 4.67 1.13h.01c5.46 0 9.89-4.4 9.89-9.85C21.94 6.4 17.5 2 12.04 2zm5.76 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.83-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.2 1.04-2.5.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.24.6.82 2.06.89 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.13 1.01 2.09 1.33 2.38 1.48.3.15.46.13.63-.08.17-.2.73-.85.93-1.14.2-.3.4-.24.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.07.13.07.74-.17 1.42z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5V8.5L16.2 12 9.8 15.5z" />
    </svg>
  ),
  xiaohongshu: (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={xhsLogo} alt="" className="h-full w-full scale-150 object-cover" />
  ),
  douyin: <TikTokMark />,
};

const tones: Record<string, string> = {
  whatsapp: "bg-[#25D366] text-white",
  facebook: "bg-[#1877F2] text-white",
  youtube: "bg-[#FF0000] text-white",
  xiaohongshu: "overflow-hidden bg-[#FF2442] text-white",
  douyin: "bg-black text-white",
};

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-4 z-[80] md:bottom-8 md:right-8">
      <div className="flex flex-col items-end gap-3">
        {open && (
          <div className="mb-1 w-48 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
            {siteData.socials.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3.5 py-3 text-sm text-stone-700 hover:bg-stone-50"
                onClick={() => setOpen(false)}
              >
                <span className={`inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ${tones[item.id] ?? "bg-brand-700 text-white"}`}>
                  {icons[item.id]}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition hover:bg-brand-800"
          aria-label={open ? "關閉聯絡方式" : "打開社交平台"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              <circle cx="18" cy="5" r="2.4" />
              <circle cx="6" cy="12" r="2.4" />
              <circle cx="18" cy="19" r="2.4" />
              <path d="M8.2 10.8 15.8 6.2M8.2 13.2l7.6 4.6" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
