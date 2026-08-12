"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteData } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-800 font-bold text-lg">
            健
          </div>
          <div className="hidden min-[400px]:block">
            <p className="text-base font-semibold text-brand-800 leading-tight">
              {siteData.brand.name}
            </p>
            <p className="text-[11px] text-stone-500 leading-tight">
              {siteData.brand.englishName}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 text-sm text-stone-700 md:flex">
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop WhatsApp */}
          <a
            href={siteData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-800 md:inline-block"
          >
            WhatsApp 查詢
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-stone-100 bg-white px-4 py-4 space-y-1">
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base text-stone-700 hover:bg-brand-50 hover:text-brand-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand-700 px-4 py-3 text-center text-base font-medium text-white hover:bg-brand-800 transition-colors"
            >
              WhatsApp 查詢
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
