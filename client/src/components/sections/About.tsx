import Section from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Atom, Beaker, Brain, Cloud, Code, FileText, Waves } from "lucide-react";

const skills = [
  { name: "Chemistry", icon: Beaker, category: "science" },
  { name: "Materials Science", icon: Atom, category: "science" },
  { name: "Signal Processing", icon: Waves, category: "science" },
  { name: "AI/ML", icon: Brain, category: "tech" },
  { name: "Agentic Development", icon: Brain, category: "tech" },
  { name: "Cloud Infrastructure", icon: Cloud, category: "tech" },
  { name: "TypeScript", icon: Code, category: "tools" },
  { name: "Next.js", icon: Code, category: "tools" },
  { name: "Astro", icon: Code, category: "tools" },
  { name: "CSS", icon: Code, category: "tools" },
  { name: "HTML", icon: Code, category: "tools" },
  { name: "Patent Development", icon: FileText, category: "other" },
];

const categories = [
  { key: "science", label: "Science" },
  { key: "tech", label: "Technology" },
  { key: "tools", label: "Development" },
  { key: "other", label: "Other" },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/about-bg.webp"
              alt="Brian Laposa"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Brian Laposa
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            As a chemist with a passion for technology, I bridge the gap
            between scientific principles and innovative digital solutions. My
            unique background allows me to approach problems from both
            analytical and creative perspectives.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My work spans from revolutionary materials engineering in sports
            equipment to cutting-edge AI applications and acoustic analysis
            tools. Each project represents a fusion of scientific rigor and
            technological innovation.
          </p>

          <div className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.key}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {cat.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat.key)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                      >
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
