import Link from "next/link";
import { siteData } from "@/data/siteContent";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
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

        <a
          href={siteData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-700 px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-800 md:text-sm"
        >
          WhatsApp 查詢
        </a>
      </div>
    </header>
  );
}
