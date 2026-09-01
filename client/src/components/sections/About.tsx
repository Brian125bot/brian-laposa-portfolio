import Section from "@/components/layout/Section";
import { motion } from "framer-motion";
import {
  Atom,
  Beaker,
  Brain,
  Cloud,
  Code,
  FileText,
  Waves,
} from "lucide-react";

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

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground mb-5">
            About
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:gap-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight md:flex-1">
              About Brian Laposa
            </h2>
            <div
              className="hidden md:block h-px w-16 bg-border mb-3"
              aria-hidden="true"
            />
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
              As a chemist with a passion for technology, I bridge the gap
              between scientific principles and innovative digital solutions. My
              unique background allows me to approach problems from both
              analytical and creative perspectives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
              My work spans from revolutionary materials engineering in sports
              equipment to cutting-edge AI applications and acoustic analysis
              tools. Each project represents a fusion of scientific rigor and
              technological innovation.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            className="md:col-span-2"
          >
            <div className="space-y-8">
              {categories.map(cat => (
                <div key={cat.key}>
                  <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-3">
                    {cat.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(s => s.category === cat.key)
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/40 hover:border-primary/40 transition-colors"
                        >
                          <skill.icon className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </Section>
  );
}
