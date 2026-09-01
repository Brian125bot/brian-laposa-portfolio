import Section, { SectionHeader } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const awards = [
  {
    title: "Undergraduate Research Award",
    organization: "DFW American Chemical Society Section",
    year: "",
  },
];

export default function Awards() {
  return (
    <Section id="awards" withBackground>
      <SectionHeader
        eyebrow="Recognition"
        title="Awards"
        subtitle="Recognition for research and contributions."
      />

      <div className="max-w-4xl mx-auto">
        <ul className="divide-y divide-border border-y border-border">
          {awards.map((award, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col gap-3 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8 md:py-7"
            >
              <div className="flex items-start gap-4 md:flex-1">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-primary transition-colors group-hover:border-primary/40"
                >
                  <Award className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg md:text-xl leading-snug tracking-tight">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {award.organization}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-medium text-muted-foreground md:text-right">
                {award.year}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
