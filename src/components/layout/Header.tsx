"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteData } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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

          <nav className="hidden items-center gap-5 text-sm text-stone-700 md:flex">
            {siteData.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-700 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="開啟選單"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/55 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex h-dvh w-[60vw] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-stone-100 bg-white px-4 py-4">
          <p className="text-sm font-semibold text-brand-800">選單</p>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-stone-600 hover:bg-stone-100"
            onClick={() => setOpen(false)}
            aria-label="關閉選單"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto bg-white px-3 py-4 space-y-1">
          {siteData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base text-stone-700 hover:bg-brand-50 hover:text-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
