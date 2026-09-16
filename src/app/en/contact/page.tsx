import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/contact/ContactForm";
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
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="mb-8 text-xl font-bold text-stone-900">Details</h2>
              <ul className="space-y-6 text-stone-800">
                <li>
                  <p className="text-sm text-stone-500">{copy.phone}</p>
                  <a href={`tel:${siteData.contact.phone}`} className="text-lg font-medium text-brand-800">{siteData.contact.phoneDisplay}</a>
                </li>
                <li>
                  <p className="text-sm text-stone-500">Address</p>
                  <p className="text-lg">{siteData.contact.addressEn}</p>
                </li>
                <li>
                  <p className="text-sm text-stone-500">Email</p>
                  <a href={`mailto:${siteData.contact.email}`} className="text-lg font-medium text-brand-800">{siteData.contact.email}</a>
                </li>
              </ul>
            </div>
            <ContactForm locale="en" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
