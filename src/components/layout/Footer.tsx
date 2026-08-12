import Link from "next/link";
import { siteData } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-lg font-semibold text-brand-800">
              {siteData.brand.name}
            </p>
            <p className="text-sm text-stone-600">
              {siteData.brand.englishName}
            </p>
            <p className="mt-3 text-sm text-stone-500">
              {siteData.brand.nature} · 成立於 {siteData.brand.establishedYear}
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-stone-800">快速連結</p>
            <ul className="space-y-2 text-sm text-stone-600">
              {siteData.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-stone-800">聯絡我們</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>電話：{siteData.contact.phoneDisplay}</li>
              <li>{siteData.contact.address}</li>
              <li>
                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 hover:underline"
                >
                  WhatsApp 查詢
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} {siteData.brand.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
