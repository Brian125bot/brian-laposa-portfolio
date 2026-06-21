import Section, { SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

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
  {
    title: "The Language of Silence: An Anatomy of Institutional Ecclesiolatry",
    journal: "Book",
    year: "2025",
    authors: "Brian Laposa",
    abstract:
      "An in-depth examination of institutional ecclesiolatry, exploring the ways in which religious institutions silence dissent and maintain power structures.",
    link: "https://v0-silence.vercel.app",
  },
];

export default function Publications() {
  return (
    <Section id="publications">
      <SectionHeader
        title="Publications"
        subtitle="Academic research and contributions to the scientific community."
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel border-white/5 hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 leading-snug">
                      {pub.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {pub.journal}, {pub.year}
                    </CardDescription>
                  </div>
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {pub.authors}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pub.abstract}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="glass-button border-secondary/20 text-secondary hover:text-secondary-foreground hover:bg-secondary/20"
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    Read Publication <ExternalLink className="w-4 h-4 ml-2" />
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
