import PaddleCutaway from "@/components/PaddleCutaway";
import { featured, liveApps, tools, type Project } from "@/content";
import { ArrowUpRight } from "lucide-react";

function ProjectIndex({
  id,
  heading,
  note,
  items,
}: {
  id: string;
  heading: string;
  note: string;
  items: Project[];
}) {
  return (
    <div id={id} className="mt-20 md:mt-28">
      <div className="flex flex-col gap-2 border-b border-ink pb-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-[1.375rem] font-semibold tracking-[-0.02em]">{heading}</h3>
        <p className="font-serif text-[1.0625rem] italic text-graphite">{note}</p>
      </div>
      <ul>
        {items.map(p => (
          <li key={p.title} className="border-b border-rule">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 grid gap-x-8 gap-y-2 rounded-md px-3 py-6 transition-colors duration-200 hover:bg-paper-2 md:grid-cols-12 md:items-baseline md:py-7"
            >
              <span className="text-[1.5rem] font-semibold leading-tight tracking-[-0.025em] text-ink transition-colors group-hover:text-endpoint md:col-span-4 md:text-[1.75rem]">
                {p.title}
              </span>
              <span className="font-serif text-[1.0625rem] leading-relaxed text-ink md:col-span-5">
                {p.description}
              </span>
              <span className="text-[0.875rem] text-graphite md:col-span-2">
                {p.stack.join(", ")}
              </span>
              <span className="inline-flex items-center gap-1 text-[0.875rem] font-medium text-ink md:col-span-1 md:justify-end md:whitespace-nowrap">
                <span className="md:sr-only">{p.linkLabel}</span>
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-endpoint md:h-5 md:w-5"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-pad border-t border-rule">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 className="h2 md:col-span-7">Work and projects</h2>
          <p className="prose-serif text-graphite md:col-span-5">
            CoreTek is my business. Everything after it is a personal project:
            things I build in my spare time to learn how software and AI tools
            work.
          </p>
        </div>

        <article
          id="coretek"
          className="mt-14 grid overflow-hidden rounded-xl border border-rule bg-card md:mt-20 md:grid-cols-12"
        >
          <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 md:col-span-6 md:p-12">
            <div>
              <p className="text-[0.9375rem] font-medium text-endpoint">Co-founder</p>
              <h3
                className="mt-3 font-semibold tracking-[-0.035em]"
                style={{ fontSize: "var(--text-h2)", lineHeight: 1 }}
              >
                {featured.title}
              </h3>
              <p className="prose-serif mt-6 max-w-[34rem]">{featured.description}</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[0.875rem] text-graphite">{featured.stack.join(", ")}</p>
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-fit items-center gap-2 rounded-md bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors duration-200 hover:bg-endpoint"
              >
                Visit {featured.domain}
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative flex min-h-[18rem] items-center justify-center border-t border-rule bg-paper-2 p-8 md:col-span-6 md:border-l md:border-t-0">
            <PaddleCutaway className="h-full max-h-[26rem] w-full" />
          </div>
        </article>

        <ProjectIndex
          id="apps"
          heading="Web apps"
          note="Small AI experiments, free to try."
          items={liveApps}
        />
        <ProjectIndex
          id="tools"
          heading="Coding projects"
          note="Hobby tools, with the source on GitHub."
          items={tools}
        />
      </div>
    </section>
  );
}
