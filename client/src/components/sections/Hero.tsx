import Spectrum from "@/components/Spectrum";
import { EMAIL } from "@/content";

export default function Hero() {
  return (
    <section id="top" className="pt-[calc(var(--header-h)+clamp(2.5rem,7vh,5rem))] pb-10">
      <div className="wrap">
        <h1
          className="-ml-[0.04em] font-semibold leading-[0.88] tracking-[-0.042em] text-ink"
          style={{ fontSize: "var(--text-hero)", fontVariationSettings: '"opsz" 96' }}
        >
          Brian Laposa
        </h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
          <p
            className="font-serif text-ink md:col-span-7"
            style={{ fontSize: "var(--text-lede)", lineHeight: 1.42 }}
          >
            Chemist by training. I&rsquo;ve published mass spectrometry
            research and co-founded CoreTek, a composite pickleball paddle
            company. In my spare time I tinker with software, mostly small
            experiments with AI.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-5 md:justify-end">
            <a
              href="#work"
              className="inline-flex h-12 items-center rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors duration-200 hover:bg-endpoint"
            >
              See work and projects
            </a>
            <a href={`mailto:${EMAIL}`} className="text-link text-[0.9375rem] font-medium">
              Email Brian
            </a>
          </div>
        </div>

        <Spectrum />
      </div>
    </section>
  );
}
