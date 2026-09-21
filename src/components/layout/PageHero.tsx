import Image from "next/image";

const HERO_BG = "https://pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev/images/hero-bg.jpg";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  image?: string;
  overlay?: "default" | "soft";
};

export default function PageHero({ title, subtitle, image, overlay = "default" }: Props) {
  const subtitleLines = subtitle ? subtitle.split("\n") : [];
  const src = image || HERO_BG;
  const wash =
    overlay === "soft"
      ? "absolute inset-0 bg-emerald-900/15"
      : "absolute inset-0 bg-gradient-to-r from-emerald-50/70 via-teal-100/45 to-sky-100/40 backdrop-blur-[2px]";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={src} alt="" fill priority quality={70} className="object-cover object-center" sizes="100vw" />
        <div className={wash} />
      </div>
      <div className="relative mx-auto flex min-h-[220px] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center md:min-h-[268px] md:py-20">
        <h1 className="text-3xl font-bold tracking-wide text-emerald-950 drop-shadow-sm md:text-4xl">{title}</h1>
        {subtitleLines.length > 0 ? (
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-emerald-950 md:text-lg">
            {subtitleLines.map((line) => (
              <span key={line} className="block py-1 md:py-1.5">
                {line}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
