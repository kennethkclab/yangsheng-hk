import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organisation",
  description: "Leadership and board of the International Association for Health and Yangsheng.",
};

const R2 = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev";
const portrait = `${R2}/images/people/yuen-lai-ping-v2.jpg`;

const titles = [
  { org: "International Association for Health and Yangsheng", role: "Founding Chairperson" },
  { org: "Chinese Traditional Medicine Research Institute", role: "Director" },
  { org: "International General Chinese Herbalists and Medicine Professionals Association", role: "Lifelong President" },
  { org: "Hong Kong Cancer Centre", role: "Honorary Clinical Adviser" },
  { org: "World Chinese Association Top 10 Elites", role: "Medical representative" },
  { org: "UN Special Medical Contribution Award", role: "First Chinese recipient" },
];

const shamQualifications = [
  "MBBS, University of Hong Kong, 1980",
  "Diploma in Radiotherapy, United Kingdom, 1985",
  "Fellow of the Royal College of Radiologists, 1985",
  "Fellow of the Hong Kong College of Radiologists, 1991",
  "MD, University of Hong Kong, 1993",
  "Fellow of the Hong Kong Academy of Medicine (Radiology), 1993",
];

const ceciliaTitles = [
  "Emeritus Professor, Department of Social Work and Social Administration, The University of Hong Kong",
  "Justice of the Peace",
  "Fellow, Association of Oncology Social Work",
  "Founding Fellow, Hong Kong Academy of Social Work",
  "Fellow, Hong Kong Professional Counselling Association",
  "Member, International Work Group on Death, Dying and Bereavement",
];

const chetwynTitles = [
  "Chairman, Executive Committee, The Hong Kong Society for Rehabilitation",
  "Professor, The Education University of Hong Kong",
];

const tatiaTitles = [
  "Registered Clinical Psychologist, Hong Kong Psychological Society",
  "Registered Psychologist, British Columbia, Canada",
  "Chartered Psychologist, Alberta, Canada",
  "Registered Psychologist, Australia",
  "Board Certified Clinical Neuropsychologist, United States",
  "Chair Professor of Psychological Science and Clinical Psychology, The University of Hong Kong",
];

const board = [
  {
    name: "Dr Sham Shun Tong",
    role: "Founding Chairperson",
    text: "Honorary Professor in Clinical Oncology, Faculty of Medicine, The University of Hong Kong",
    href: "/en/Dr-ShamShunTong",
    link: "Read medical essays →",
    photo: `${R2}/images/people/sham-shun-tong.jpg`,
    listTitle: "Professional qualifications",
    qualifications: shamQualifications,
  },
  {
    name: "Professor Cecilia Chan Lai Wan",
    role: "Founding Secretary-General",
    text: "",
    photo: `${R2}/images/people/chan-lai-wan-v2.jpg`,
    listTitle: "Titles",
    qualifications: ceciliaTitles,
  },
  {
    name: "Professor Chetwyn Chan Chi Hin",
    role: "Director",
    text: "",
    photo: `${R2}/images/people/chan-chi-hin.jpg`,
    listTitle: "Titles",
    qualifications: chetwynTitles,
  },
  {
    name: "Professor Tatia Lee Mei Chun",
    role: "Director",
    text: "",
    photo: `${R2}/images/people/lee-mei-chun.jpg`,
    listTitle: "Titles",
    qualifications: tatiaTitles,
  },
];

function Portrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm bg-stone-100">
      <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 384px" />
    </div>
  );
}

export default function EnglishStructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Organisation" subtitle="Non-profit association · Founded December 2009" />
        <section className="mx-auto max-w-3xl px-4 py-14">
          <article className="mb-8 overflow-hidden border border-stone-200 bg-white shadow-sm">
            <Portrait src={portrait} alt="Professor Yuen Lai Ping" />
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-brand-700">Founding Chairperson</p>
              <h2 className="mt-1 text-3xl font-bold text-stone-900">Professor Yuen Lai Ping</h2>
              <p className="mt-4 mb-5 leading-relaxed text-stone-600">She teaches research-based practice and Jiannao Yuzhi Gong, and leads wellness research with the University of Hong Kong.</p>
              <h3 className="mb-3 text-lg font-semibold text-stone-900">Titles</h3>
              <ul className="space-y-2">
                {titles.map((item) => (
                  <li key={item.org} className="flex flex-col gap-0.5 border-b border-stone-100 py-2 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-stone-800">{item.org}</span>
                    <span className="text-brand-700 sm:pl-4 sm:text-right">{item.role}</span>
                  </li>
                ))}
              </ul>
              <Link href="/en/gallery" className="mt-5 inline-block text-brand-700 hover:underline">View gallery →</Link>
            </div>
          </article>

          {board.map((person) => (
            <article key={person.name} className="mb-5 overflow-hidden border border-stone-200 bg-white shadow-sm">
              {person.photo ? <Portrait src={person.photo} alt={person.name} /> : null}
              <div className="p-6">
                <p className="text-sm font-medium text-brand-700">{person.role}</p>
                <h2 className="mt-1 text-2xl font-bold text-stone-900">{person.name}</h2>
                {person.text ? <p className="mt-3 leading-relaxed text-stone-600">{person.text}</p> : null}
                {person.qualifications ? (
                  <>
                    <h3 className="mt-5 mb-2 text-lg font-semibold text-stone-900">{person.listTitle}</h3>
                    <ul className="space-y-2">
                      {person.qualifications.map((item) => (
                        <li key={item} className="border-b border-stone-100 py-2 text-stone-700 last:border-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {person.href ? (
                  <Link href={person.href} className="mt-4 inline-block text-brand-700 hover:underline">
                    {person.link}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
