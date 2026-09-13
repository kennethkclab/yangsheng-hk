import Image from "next/image";

const HERO_BG = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-bg.jpg";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function PageHero({ title, subtitle, align = "left" }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={HERO_BG} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />
      </div>
      <div className={`relative mx-auto max-w-6xl px-4 py-16 md:py-20 ${align === "center" ? "text-center" : ""}`}>
        <h1 className="text-3xl font-bold tracking-wide text-white drop-shadow-md md:text-4xl">{title}</h1>
        {subtitle ? (
          <p className={`mt-3 max-w-2xl text-base text-white/90 drop-shadow md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
