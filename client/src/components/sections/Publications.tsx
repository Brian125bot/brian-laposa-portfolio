import Section, { SectionHeader } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useState } from "react";

const publications = [
  {
    title:
      "Mass Spectrometry Cleavable Strategy for Identification and Differentiation of Prenylated Peptides",
    journal: "Analytical Chemistry",
    year: "2015",
    authors:
      "Ruchika P. Bhawal, Sandhya C. Sadananda, Alejandro Bugarin, Brian Laposa, Saiful M. Chowdhury",
    abstract:
      "Developed a novel method for detection and distinction of large-scale prenylated peptides using mass spectrometry-cleavable approaches. The method utilizes simple chemistry on the prenyl group and cleavable properties of a sulfoxide group to produce a signature mass spectrum.",
    link: "https://pubs.acs.org/doi/abs/10.1021/ac503794s",
  },
];

export default function Publications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="publications" withBackground>
      <SectionHeader
        eyebrow="Research"
        title="Publications"
        subtitle="Academic research and contributions to the scientific community."
      />

      <div className="max-w-4xl mx-auto border-t border-border">
        {publications.map((pub, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="border-b border-border"
            >
              <div className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8 md:py-10">
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-md border border-border items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-xl md:text-2xl leading-snug tracking-tight mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {pub.journal}
                    </span>
                    <span className="mx-2 text-border">·</span>
                    <span>{pub.year}</span>
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? 16 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">
                      Authors
                    </p>
                    <p className="text-sm italic text-muted-foreground mb-4 leading-relaxed">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                  </motion.div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-3 shrink-0">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    Read
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {isExpanded ? "Hide abstract" : "View abstract"}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
