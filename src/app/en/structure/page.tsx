import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Organisation" };

const portrait = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/people/yuen-lai-ping.jpg";

const titles = [
  { org: "International Association for Health and Yangsheng", role: "Chairperson" },
  { org: "Chinese Traditional Medicine Research Institute", role: "Director" },
  { org: "International General Chinese Herbalists and Medicine Professionals Association", role: "Lifelong president" },
  { org: "Hong Kong Cancer Centre", role: "Honorary clinical adviser" },
  { org: "World Chinese Association Top 10 Elites", role: "Medical representative" },
  { org: "UN Special Medical Contribution Award", role: "First Chinese recipient" },
];

export default function EnglishStructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Organisation" subtitle="Non-profit association · Founded December 2009" />
        <section className="mx-auto max-w-5xl px-4 py-14">
          <article className="mb-8 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="bg-stone-100">
              <Image src={portrait} alt="Professor Yuen Lai Ping" width={1200} height={1200} className="mx-auto h-auto w-full max-w-xl object-contain" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-brand-700">Founder and chairperson</p>
              <h2 className="mt-1 text-3xl font-bold text-stone-900">Professor Yuen Lai Ping</h2>
              <p className="mt-4 mb-5 leading-relaxed text-stone-600">Founder and chairperson of the Association. She teaches research-based practice and Jiannao Yuzhi Gong, and leads research collaboration with the University of Hong Kong.</p>
              <h3 className="mb-3 text-lg font-semibold text-stone-900">Titles</h3>
              <ul className="space-y-2">
                {titles.map((item) => (
                  <li key={item.org} className="flex flex-col gap-0.5 border-b border-stone-100 py-2 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-stone-800">{item.org}</span>
                    <span className="text-brand-700 sm:text-right sm:pl-4">{item.role}</span>
                  </li>
                ))}
              </ul>
              <Link href="/en/gallery" className="mt-5 inline-block text-brand-700 hover:underline">View gallery →</Link>
            </div>
          </article>

          <article className="mb-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-brand-700">Chairperson</p>
            <h2 className="mt-1 text-2xl font-bold text-stone-900">Dr Sham Shun Tong</h2>
            <p className="mt-3 leading-relaxed text-stone-600">Honorary Professor in Clinical Oncology at HKU, specialist in oncology, and chairperson of the Association. He supports research and lifestyle medicine.</p>
            <Link href="/en/Dr-ShamShunTong" className="mt-4 inline-block text-brand-700 hover:underline">Learn more →</Link>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-brand-700">Volunteer officers</p>
            <h2 className="mt-1 text-2xl font-bold text-stone-900">Members and volunteers</h2>
            <p className="mt-3 leading-relaxed text-stone-600">Support classes, events and administration.</p>
            <Link href="/en/contact" className="mt-4 inline-block text-brand-700 hover:underline">Contact →</Link>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
