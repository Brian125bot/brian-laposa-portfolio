import Section, { SectionHeader } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        title="Awards"
        subtitle="Recognition for research and contributions."
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel border-white/5 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 leading-snug">
                      {award.title}
                    </CardTitle>
                    <p className="text-primary font-medium">
                      {award.organization}
                    </p>
                  </div>
                  <Award className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
