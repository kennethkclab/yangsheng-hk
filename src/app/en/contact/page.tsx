import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
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
        <PageHero title={copy.contactTitle} subtitle={copy.address} align="center" />
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="mb-2 text-stone-600">{copy.phone}: {siteData.contact.phoneDisplay}</p>
          <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-brand-700 px-8 py-3 text-white">{copy.whatsappNow}</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
