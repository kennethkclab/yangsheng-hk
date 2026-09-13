import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { t } from "@/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Wellness Knowledge" };

export default function EnglishKnowledgePage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Wellness Knowledge" subtitle={copy.knowledgeLead} />
        <section className="mx-auto max-w-3xl space-y-4 px-4 py-14 text-lg leading-relaxed text-stone-600">
          <p>{copy.knowledgeP1}</p>
          <p>{copy.knowledgeP2}</p>
          <p>{copy.knowledgeP3}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
