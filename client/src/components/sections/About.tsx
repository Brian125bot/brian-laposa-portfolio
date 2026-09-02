import Section, { SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Atom,
  Beaker,
  Binary,
  Brain,
  Cloud,
  Code,
  Cpu,
  FileText,
  Layers,
  Sparkles,
  TestTube2,
  Waves,
} from "lucide-react";

const skills = [
  // Science & Chemistry
  { name: "Analytical Chemistry", icon: Beaker, category: "science", level: "Expert" },
  { name: "Materials Science & Composites", icon: Atom, category: "science", level: "Advanced" },
  { name: "Mass Spectrometry", icon: TestTube2, category: "science", level: "Published Author" },
  { name: "Signal Processing & Acoustics", icon: Waves, category: "science", level: "Specialist" },

  // AI & Technology
  { name: "Agentic AI Development", icon: Brain, category: "tech", level: "Production" },
  { name: "Generative AI & LLM Systems", icon: Cpu, category: "tech", level: "Advanced" },
  { name: "Cloud Infrastructure & Serverless", icon: Cloud, category: "tech", level: "Scale" },
  { name: "Full-Stack System Architecture", icon: Binary, category: "tech", level: "Production" },

  // Development & Tools
  { name: "TypeScript & JavaScript", icon: Code, category: "tools", level: "Primary" },
  { name: "Next.js & React", icon: Code, category: "tools", level: "Primary" },
  { name: "Astro & Modern SSG", icon: Code, category: "tools", level: "Advanced" },
  { name: "Tailwind CSS & Design Systems", icon: Code, category: "tools", level: "Advanced" },

  // IP & Strategy
  { name: "Patent & IP Development", icon: FileText, category: "ip", level: "Strategic" },
  { name: "Product Engineering", icon: Layers, category: "ip", level: "Commercial" },
];

const domainMatrix = [
  {
    title: "1. Scientific Foundation",
    icon: Beaker,
    accent: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    text: "Applying mass spectrometry, spectral signal processing, and high-performance composite chemistry to physical product innovation.",
  },
  {
    title: "2. Autonomous AI Systems",
    icon: Brain,
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    text: "Building agentic workflows, custom LLM tool extensions, and real-time generative models to streamline research and automated tools.",
  },
  {
    title: "3. Full-Stack Execution",
    icon: Cpu,
    accent: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30",
    text: "Architecting cloud-native serverless web applications, Chrome extensions, and e-commerce platforms engineered for performance.",
  },
];

export default function About() {
  return (
    <Section id="about" className="relative">
      <SectionHeader
        title="Domain Fusion & Background"
        subtitle="Combining chemical analytical rigor with modern software engineering and agentic AI."
      />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Bio Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {domainMatrix.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className={`h-full p-6 rounded-2xl bg-card/60 backdrop-blur-xl border ${item.border} hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden shadow-xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Interdisciplinary Pioneer
            </Badge>
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Engineering solutions at the atomic & digital frontier
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              As a chemist with a published background in mass spectrometry and spectral analysis, I approach software engineering with hypothesis-driven discipline. Whether developing pickleball paddle composite formulations for Coretek or building serverless AI agents for developer teams, I bridge physical science and cloud computing.
            </p>
          </div>
        </motion.div>

        {/* Interactive Filterable Skill Matrix */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold mb-2">Technical Capabilities</h3>
            <p className="text-sm text-muted-foreground">Filter skills across scientific, software, and engineering disciplines.</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md flex-wrap h-auto">
                <TabsTrigger value="all" className="rounded-full text-xs px-4 py-1.5">
                  All Capabilities
                </TabsTrigger>
                <TabsTrigger value="science" className="rounded-full text-xs px-4 py-1.5">
                  Science & Chemistry
                </TabsTrigger>
                <TabsTrigger value="tech" className="rounded-full text-xs px-4 py-1.5">
                  AI & Architecture
                </TabsTrigger>
                <TabsTrigger value="tools" className="rounded-full text-xs px-4 py-1.5">
                  Web & Tools
                </TabsTrigger>
                <TabsTrigger value="ip" className="rounded-full text-xs px-4 py-1.5">
                  IP & Product
                </TabsTrigger>
              </TabsList>
            </div>

            {["all", "science", "tech", "tools", "ip"].map((tabKey) => (
              <TabsContent key={tabKey} value={tabKey} className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {skills
                    .filter((s) => tabKey === "all" || s.category === tabKey)
                    .map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="p-4 rounded-xl bg-card/80 border border-white/10 hover:border-primary/40 transition-all group flex items-start justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                            <skill.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-[11px] font-mono text-muted-foreground">
                              {skill.level}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Section>
  );
}
