import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Organisation" };

const roles = [
  {
    title: "Chairman",
    name: "Dr Sham Shun Tong",
    note: "Honorary Professor in Clinical Oncology at HKU and specialist in oncology. Leads association affairs and research direction.",
    href: "/en/Dr-ShamShunTong",
  },
  {
    title: "Founder / Course director",
    name: "Professor Yuen Lai Ping",
    note: "Founded the Association and teaches Daoist Neigong and research-based Jiannao Yuzhi Gong, with long-term research collaboration with HKU.",
    href: "/en/gallery",
  },
  {
    title: "Volunteer officers",
    name: "Members and volunteers",
    note: "Support classes, events and administration, helping promote prevention before treatment in the community.",
    href: "/en/contact",
  },
];

export default function EnglishStructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Organisation" subtitle="Non-profit association · Founded December 2009" />
        <section className="mx-auto max-w-4xl px-4 py-14">
          <p className="mb-10 leading-relaxed text-stone-600">
            The International Association for Health and Yangsheng is a non-profit body for health and wellness. The structure below reflects current public roles.
          </p>
          <div className="space-y-5">
            {roles.map((role) => (
              <article key={role.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-brand-700">{role.title}</p>
                <h2 className="mt-1 text-2xl font-bold text-stone-900">{role.name}</h2>
                <p className="mt-3 leading-relaxed text-stone-600">{role.note}</p>
                <Link href={role.href} className="mt-4 inline-block text-brand-700 hover:underline">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
