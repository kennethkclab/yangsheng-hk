"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteContent";
import { localizedPath, nav, t } from "@/i18n/dict";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const locale = isEn ? "en" : "zh";
  const items = nav[locale];
  const copy = t[locale];
  const homeHref = isEn ? "/en" : "/";
  const zhHref = localizedPath(pathname, "zh");
  const enHref = localizedPath(pathname, "en");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const switcher = (
    <div className="inline-flex overflow-hidden rounded-full border border-stone-300 bg-white text-xs font-semibold">
      <Link
        href={zhHref}
        className={`px-2.5 py-1.5 ${!isEn ? "bg-brand-700 text-white" : "text-stone-600 hover:bg-stone-100"}`}
        aria-current={!isEn ? "page" : undefined}
      >
        中文
      </Link>
      <Link
        href={enHref}
        className={`px-2.5 py-1.5 ${isEn ? "bg-brand-700 text-white" : "text-stone-600 hover:bg-stone-100"}`}
        aria-current={isEn ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
          <Link href={homeHref} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src={siteData.images.logo}
              alt={siteData.brand.name}
              width={280}
              height={72}
              className="h-11 w-auto md:h-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-3 text-[13px] text-stone-700 xl:flex">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-brand-700 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {switcher}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 xl:hidden"
              onClick={() => setOpen(true)}
              aria-label={copy.openMenu}
              aria-expanded={open}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/55 transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex h-dvh w-[60vw] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-stone-100 bg-white px-4 py-4">
          <p className="text-sm font-semibold text-brand-800">{copy.menu}</p>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-stone-600 hover:bg-stone-100"
            onClick={() => setOpen(false)}
            aria-label={copy.closeMenu}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="border-b border-stone-100 bg-white px-4 py-3">{switcher}</div>
        <nav className="flex-1 overflow-y-auto bg-white px-3 py-4 space-y-1">
          {items.map((item) => (
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
