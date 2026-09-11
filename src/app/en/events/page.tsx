import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { media } from "@/data/media";
import { t } from "@/i18n/dict";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Activities" };

export default function EnglishEventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold">Activities</h1>
            <p className="mt-3 text-brand-100">{t.en.eventsLead}</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
          {media.events.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <Image src={item.image} alt={item.title} width={1200} height={900} className="h-auto w-full object-contain" />
              <div className="p-5"><h2 className="text-lg font-semibold">{item.title}</h2></div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
