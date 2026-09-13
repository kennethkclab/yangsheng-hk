import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { t } from "@/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Research" };

export default function EnglishResearchPage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Research" subtitle={copy.researchLead} />
        <section className="mx-auto max-w-3xl px-4 py-14">
          <p className="text-lg leading-relaxed text-stone-600">{copy.researchText}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
