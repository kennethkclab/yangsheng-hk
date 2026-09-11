import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { t } from "@/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Wellness Knowledge" };

export default function EnglishKnowledgePage() {
  const copy = t.en;
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <section className="bg-brand-800 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold">Wellness Knowledge</h1>
            <p className="mt-3 text-brand-100">{copy.knowledgeLead}</p>
          </div>
        </section>
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
