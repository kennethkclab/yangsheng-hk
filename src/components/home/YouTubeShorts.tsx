import { featuredShorts, youtubeChannel } from "@/data/youtube";

export default function YouTubeShorts({ locale = "zh" }: { locale?: "zh" | "en" }) {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-stone-900 md:text-3xl">
            {locale === "en" ? "Watch more Shorts" : "短片精選"}
          </h2>
          <a
            href={youtubeChannel.shortsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-brand-700 hover:underline"
          >
            {locale === "en" ? "More Shorts on YouTube →" : "到 YouTube 看更多短片 →"}
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featuredShorts.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-900 shadow-sm">
              <div className="relative aspect-[9/16]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${item.id}`}
                  title={locale === "en" ? item.titleEn : item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
