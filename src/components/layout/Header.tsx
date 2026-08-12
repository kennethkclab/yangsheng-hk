"use client";

import Link from "next/link";
import { useState } from "react";
import { siteData } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-800 font-bold">
            健
          </div>
          <div className="hidden sm:block">
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

        <div className="flex items-center gap-3">
          <a
            href={siteData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-700 px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-800 sm:inline-block md:text-sm"
          >
            WhatsApp 查詢
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-stone-700 hover:bg-stone-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="開啟選單"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-stone-100 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {siteData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-stone-700 hover:bg-brand-50 hover:text-brand-800"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-700 px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              WhatsApp 查詢
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
