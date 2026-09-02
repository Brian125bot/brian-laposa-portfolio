import Section, { SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Medal, Sparkles, Trophy } from "lucide-react";

const awards = [
  {
    title: "Undergraduate Research Award",
    organization: "American Chemical Society (ACS) - DFW Section",
    year: "Academic Honors",
    description: "Awarded for exceptional undergraduate chemical research achievements and contributions to mass spectrometry methodologies.",
    category: "Scientific Excellence",
  },
];

export default function Awards() {
  return (
    <Section id="awards" className="relative bg-cyber-grid py-20">
      <SectionHeader
        title="Honors & Recognition"
        subtitle="Acknowledging scientific research rigor and contributions to the chemical sciences."
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-primary/15 border border-primary/30 text-primary group-hover:scale-110 transition-transform">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] font-mono mb-1">
                        <Sparkles className="w-3 h-3 mr-1" /> {award.category}
                      </Badge>
                      <CardTitle className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                        {award.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-foreground/80">
                        {award.organization}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground whitespace-nowrap">
                    {award.year}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground leading-relaxed pl-14">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
