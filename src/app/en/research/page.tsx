import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import LiteYouTube from "@/components/media/LiteYouTube";
import Image from "next/image";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Research outcomes" };

const RESEARCH_HERO = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-research-v2.jpg";

const paragraphs = [
  "Professor Yuen Lai Ping grew up in the mountains and is deeply versed in research-based wellness practice. She has worked with the University of Hong Kong on studies of research-based practice for chronic fatigue syndrome and cancer. As Chairperson of the International Association for Health and Yangsheng, clinical adviser to the HKU Centre on Behavioral Health, a registered Chinese medicine practitioner and Director of the Chinese Traditional Medicine Research Institute, she is widely respected in healthcare and has received the United Nations Special Medical Contribution Award and other international honours.",
  "In clinical practice she observed that chronic illness, especially cancer, is becoming more common among younger city dwellers. As social pressure in Hong Kong has grown, many people’s health has suffered. She notes that research-based practice can support metabolism, circulation and oxygen supply, help balance the internal organs, and ease side effects of cancer chemotherapy.",
  "To examine these effects more closely, Professor Yuen and HKU ran a clinical study on insomnia and emotional distress. About 380 people with chronic illness joined her research-based wellness classes and learned the Five-Element Balance practice. Two large randomised controlled trials showed that the practice significantly reduced fatigue and improved quality of life. After the findings were published they drew wide public attention, and the work was selected as an outstanding paper by the International Society of Behavioral Medicine yearbook.",
  "Following that success, Professor Yuen and HKU invited the Hong Kong Anti-Cancer Society to offer research-based practice to newly diagnosed cancer patients and their families, exploring its effect on quality of life. She stresses: “Chronic illness and cancer are not hopeless. Better quality of life eases the burden on families. Investing in health is urgent for city life. Prevention is better than cure.”",
  "Professor Yuen formally established the International Association for Health and Yangsheng in December 2009 as a charitable platform for regular practice, mutual support and public health education. In recent years she has lectured internationally on traditional Chinese medicine, including at Smith College and NYU School of Medicine in the United States.",
  "The Five-Element Balance practice is a ten-form method that can improve oxygen uptake and support organ balance. Combined with healthy daily habits and diet, it may help a range of conditions and is suitable across ages and health status. Many people notice change within about three weeks.",
];

export default function EnglishResearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="Research outcomes" subtitle="Clinical studies by Professor Yuen Lai Ping with the University of Hong Kong" image={RESEARCH_HERO} overlay="soft" imagePosition="center bottom" />
        <section className="mx-auto max-w-3xl px-4 pb-14 pt-6 md:pt-8">
          <div className="mb-8 overflow-hidden rounded-md border border-stone-200 bg-stone-900 shadow-sm">
            <LiteYouTube id="G2qwd1fulZA" title="Research-based wellness class" />
          </div>
          <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-md">
            <Image src={`${media.r2}/images/photo01.jpg`} alt="Research and classes" fill className="object-cover" />
          </div>
          <article className="space-y-6 text-[16px] leading-8 text-stone-700 md:text-[18px]">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
