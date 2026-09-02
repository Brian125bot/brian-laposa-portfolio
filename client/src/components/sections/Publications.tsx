import Section, { SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, ExternalLink, FileSpreadsheet, Sparkles } from "lucide-react";

const publications = [
  {
    title:
      "Mass Spectrometry Cleavable Strategy for Identification and Differentiation of Prenylated Peptides",
    journal: "Analytical Chemistry",
    year: "2015",
    doi: "10.1021/ac503794s",
    publisher: "American Chemical Society (ACS)",
    authors: [
      "Ruchika P. Bhawal",
      "Sandhya C. Sadananda",
      "Alejandro Bugarin",
      "Brian Laposa",
      "Saiful M. Chowdhury",
    ],
    abstract:
      "Developed a novel method for detection and distinction of large-scale prenylated peptides using mass spectrometry-cleavable approaches. The method utilizes simple chemistry on the prenyl group and cleavable properties of a sulfoxide group to produce a signature mass spectrum.",
    link: "https://pubs.acs.org/doi/abs/10.1021/ac503794s",
    tags: ["Mass Spectrometry", "Peptides", "Sulfoxide Cleavage", "Analytical Chemistry"],
  },
];

export default function Publications() {
  return (
    <Section id="publications" className="relative">
      <SectionHeader
        title="Scientific Research & Publications"
        subtitle="Peer-reviewed research published in leading analytical chemistry journals."
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel border-white/10 hover:border-secondary/50 transition-all duration-300 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/20 transition-all duration-500" />

              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-secondary/20 text-secondary border-secondary/40 font-mono text-xs">
                        <FileSpreadsheet className="w-3 h-3 mr-1" /> Peer-Reviewed
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground">
                        DOI: {pub.doi}
                      </span>
                    </div>

                    <CardTitle className="text-xl sm:text-2xl font-heading font-bold leading-snug group-hover:text-secondary transition-colors">
                      {pub.title}
                    </CardTitle>

                    <CardDescription className="text-primary font-medium text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-secondary" />
                      <span>{pub.journal} ({pub.year})</span>
                      <span className="text-muted-foreground">• {pub.publisher}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    Authors
                  </h4>
                  <p className="text-sm text-foreground/90 font-medium">
                    {pub.authors.map((author, i) => (
                      <span
                        key={i}
                        className={author.includes("Laposa") ? "text-primary font-bold underline" : ""}
                      >
                        {author}
                        {i < pub.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    Abstract Summary
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                    {pub.abstract}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pub.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl text-xs px-5 shadow-[0_0_15px_rgba(52,211,153,0.25)]"
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    Read ACS Publication <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
