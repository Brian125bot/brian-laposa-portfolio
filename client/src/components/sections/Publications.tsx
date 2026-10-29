import { award, publication } from "@/content";

export default function Research() {
  return (
    <section id="research" className="section-pad border-t border-rule bg-paper-2">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="h2">Research</h2>
          <p className="prose-serif mt-6 max-w-[22rem] text-graphite">
            Undergraduate work in analytical chemistry, published in a
            peer-reviewed ACS journal.
          </p>
        </div>

        <div className="md:col-span-8">
          <article>
            <p className="text-[0.9375rem] text-graphite">
              <cite className="not-italic font-medium text-ink">{publication.journal}</cite>,{" "}
              {publication.year}
            </p>
            <h3
              className="mt-4 font-serif font-medium tracking-[-0.01em]"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: 1.18,
                fontVariationSettings: '"opsz" 48',
              }}
            >
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-endpoint"
              >
                {publication.title}
              </a>
            </h3>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-graphite">
              {publication.authors.map((a, i) => (
                <span key={a}>
                  {a === "Brian Laposa" ? (
                    <strong className="font-semibold text-ink">{a}</strong>
                  ) : (
                    a
                  )}
                  {i < publication.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p className="prose-serif mt-6 max-w-[40rem]">{publication.summary}</p>
            <p className="mt-6 text-[0.9375rem]">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link font-medium"
              >
                Read the paper at ACS Publications
              </a>
              <span className="ml-3 text-graphite">doi:{publication.doi}</span>
            </p>
          </article>

          <div className="mt-14 border-t border-rule pt-8">
            <h3 className="text-[1.125rem] font-semibold tracking-[-0.015em]">Recognition</h3>
            <p className="mt-3 font-serif text-[1.125rem] text-ink">
              {award.title}
              <span className="text-graphite">, {award.organization}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
