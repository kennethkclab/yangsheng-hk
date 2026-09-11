import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { t } from "@/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Research" };

export default function EnglishResearchPage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold">Research</h1>
            <p className="mt-3 text-brand-100">{copy.researchLead}</p>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-4 py-14">
          <p className="text-lg leading-relaxed text-stone-600">{copy.researchText}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
