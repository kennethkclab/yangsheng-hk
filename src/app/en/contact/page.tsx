import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteContent";
import { t } from "@/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function EnglishContactPage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">{copy.contactTitle}</h1>
            <p className="text-lg text-brand-100">{copy.address}</p>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="mb-2 text-stone-600">{copy.phone}: {siteData.contact.phoneDisplay}</p>
          <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-brand-700 px-8 py-3 text-white">{copy.whatsappNow}</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
