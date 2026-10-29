import { EMAIL, profiles } from "@/content";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="bg-ink pb-16 pt-[clamp(5rem,10vw,9rem)] text-paper">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="h2 text-paper">Get in touch</h2>
            <p className="mt-6 max-w-[34rem] font-serif text-[1.25rem] leading-relaxed text-paper/75">
              Whether it&rsquo;s chemistry, CoreTek, or one of the projects on
              this page, email is the best way to reach me.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-5">
              <a
                href={`mailto:${EMAIL}`}
                className="break-all font-semibold tracking-[-0.035em] text-paper underline decoration-endpoint-light decoration-2 underline-offset-[0.18em] transition-colors duration-200 hover:text-endpoint-light"
                style={{ fontSize: "clamp(1.75rem, 4.6vw, 3.75rem)", lineHeight: 1.05 }}
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex h-11 items-center gap-2 rounded-md border border-paper/25 px-4 text-[0.9375rem] font-medium text-paper transition-colors duration-200 hover:border-paper/60"
              >
                {copied ? (
                  <Check aria-hidden className="h-4 w-4 text-endpoint-light" />
                ) : (
                  <Copy aria-hidden className="h-4 w-4" />
                )}
                <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 md:pt-3">
            <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] text-paper">Elsewhere</h3>
            <ul className="mt-4 border-t border-paper/15">
              {profiles.map(p => (
                <li key={p.name} className="border-b border-paper/15">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block text-[1.0625rem] font-medium text-paper transition-colors group-hover:text-endpoint-light">
                        {p.name}
                      </span>
                      <span className="block font-serif text-[0.9375rem] italic text-paper/60">
                        {p.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 text-paper/60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-endpoint-light"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
