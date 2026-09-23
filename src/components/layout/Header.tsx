"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteContent";
import { localizedPath, nav, t } from "@/i18n/dict";

function pathKey(path: string) {
  const raw = path || "/";
  if (raw === "/en") return "/";
  return raw.replace(/^\/en/, "") || "/";
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const locale = isEn ? "en" : "zh";
  const items = nav[locale];
  const copy = t[locale];
  const homeHref = isEn ? "/en" : "/";
  const zhHref = localizedPath(pathname, "zh");
  const enHref = localizedPath(pathname, "en");
  const current = pathKey(pathname);

  const isActive = (href: string, children?: readonly { href: string }[]) => {
    const target = pathKey(href);
    if (children?.length) {
      return children.some((child) => pathKey(child.href) === current) || current === target;
    }
    if (target === "/") return current === "/";
    return current === target || current.startsWith(`${target}/`);
  };

  useEffect(() => {
    document.documentElement.lang = isEn ? "en" : "zh-HK";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isEn]);

  const switcher = (
    <div className="inline-flex overflow-hidden rounded-md border border-stone-300 bg-white text-xs font-semibold" role="group" aria-label={isEn ? "Language" : "語言"}>
      <Link href={zhHref} aria-current={!isEn ? "page" : undefined} className={`px-2.5 py-1.5 ${!isEn ? "bg-brand-700 text-white" : "text-stone-600 hover:bg-stone-100"}`}>中文</Link>
      <Link href={enHref} aria-current={isEn ? "page" : undefined} className={`px-2.5 py-1.5 ${isEn ? "bg-brand-700 text-white" : "text-stone-600 hover:bg-stone-100"}`}>EN</Link>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
          <Link href={homeHref} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <Image src={siteData.images.logo} alt={siteData.brand.name} width={280} height={72} className="h-11 w-auto md:h-14" priority quality={90} />
          </Link>

          <nav className="hidden items-center gap-3 text-[18px] leading-none text-stone-700 xl:flex" aria-label={isEn ? "Main" : "主要"}>
            {items.map((item) => {
              const active = isActive(item.href, item.children);
              const tabClass = active
                ? "text-brand-800 font-semibold"
                : "text-stone-700 hover:text-brand-800";
              return item.children ? (
                <div key={item.label} className="group relative">
                  <Link href={item.href} aria-current={active ? "page" : undefined} className={`inline-flex items-center gap-1 whitespace-nowrap px-1 py-2 ${tabClass}`}>
                    {item.label}
                    <span className="text-[12px]" aria-hidden>▾</span>
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-48 rounded-xl border border-stone-200 bg-white py-2 text-[18px] opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          className={`block px-4 py-2 ${childActive ? "bg-brand-50 font-semibold text-brand-800" : "text-stone-700 hover:bg-brand-50 hover:text-brand-800"}`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`whitespace-nowrap px-1 py-2 ${tabClass}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {switcher}
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100 xl:hidden" onClick={() => setOpen(true)} aria-label={copy.openMenu} aria-expanded={open} aria-controls="mobile-nav">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] bg-black/55 transition-opacity duration-300 xl:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)} aria-hidden={!open} />

      <aside id="mobile-nav" className={`fixed inset-y-0 left-0 z-[70] flex h-dvh w-[60vw] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out xl:hidden ${open ? "translate-x-0" : "-translate-x-full"}`} aria-hidden={!open}>
        <div className="flex items-center justify-end border-b border-stone-100 bg-white px-3 py-3">
          <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-stone-600 hover:bg-stone-100" onClick={() => setOpen(false)} aria-label={copy.closeMenu}>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto bg-white px-3 py-4 space-y-1" aria-label={isEn ? "Mobile" : "手機選單"}>
          {items.map((item) => {
            const active = isActive(item.href, item.children);
            return item.children ? (
              <div key={item.label}>
                <button type="button" className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-base hover:bg-brand-50 ${active ? "font-semibold text-brand-800" : "text-stone-700"}`} onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)} aria-expanded={openGroup === item.label}>
                  <span>{item.label}</span>
                  <span className="text-xs" aria-hidden>{openGroup === item.label ? "–" : "+"}</span>
                </button>
                {openGroup === item.label ? (
                  <div className="mb-2 ml-3 space-y-1 border-l border-stone-200 pl-3">
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);
                      return (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className={`block rounded-md px-3 py-2 text-sm ${childActive ? "bg-brand-50 font-semibold text-brand-800" : "text-stone-600 hover:bg-brand-50 hover:text-brand-800"}`}>
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`block rounded-md px-4 py-3 text-base ${active ? "bg-brand-50 font-semibold text-brand-800" : "text-stone-700 hover:bg-brand-50 hover:text-brand-800"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-stone-100 bg-white p-4">
          <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.74.46 3.44 1.33 4.94L2 22l5.37-1.4a10.1 10.1 0 0 0 4.67 1.13h.01c5.46 0 9.89-4.4 9.89-9.85C21.94 6.4 17.5 2 12.04 2zm5.76 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.83-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.2 1.04-2.5.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.24.6.82 2.06.89 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.13 1.01 2.09 1.33 2.38 1.48.3.15.46.13.63-.08.17-.2.73-.85.93-1.14.2-.3.4-.24.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.07.13.07.74-.17 1.42z" />
            </svg>
            {isEn ? "WhatsApp" : "WhatsApp 查詢"}
          </a>
        </div>
      </aside>
    </>
  );
}
