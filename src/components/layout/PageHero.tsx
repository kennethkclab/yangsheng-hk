import Image from "next/image";

const HERO_BG = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-bg.jpg";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={HERO_BG} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/70 via-teal-100/45 to-sky-100/40 backdrop-blur-[2px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <h1 className="text-3xl font-bold tracking-wide text-emerald-950 drop-shadow-sm md:text-4xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium text-emerald-950 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
