import Section, { SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Info, Sparkles } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  category: "materials" | "ai" | "web";
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  image: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "coretekpaddles.com",
    category: "materials",
    description:
      "Revolutionary pickleball paddle company featuring Alpha and Omega paddles with advanced composite materials and AI-powered analysis.",
    longDescription:
      "Coretek Paddles merges material science engineering with high-performance sports technology. Utilizing custom resin matrix formulations, structural composite layups, and AI acoustic testing, Coretek delivers paddles optimized for power, control, and durability.",
    tags: ["E-commerce", "Materials Science", "AI Analytics", "Composites"],
    link: "https://coretekpaddles.com",
    image: "/projects/paddle.svg",
    highlights: [
      "Custom carbon fiber matrix and resin formulations",
      "Integrated AI acoustic signal processing for sweet-spot tuning",
      "Full digital storefront and product launch infrastructure",
    ],
  },
  {
    title: "Red Star Realism",
    category: "ai",
    description:
      "Revolutionary poster generator that transforms portraits into Socialist Realist art style using advanced generative AI technology.",
    longDescription:
      "A generative art application leveraging state-of-the-art diffusion workflows and face-matching style transfer to produce authentic propaganda-style artwork with customizable typography.",
    tags: ["Generative AI", "Image Processing", "React", "Style Transfer"],
    link: "https://red-star-realism.vercel.app/",
    image: "/projects/star.svg",
    highlights: [
      "Custom fine-tuned diffusion models and facial keypoint alignment",
      "Real-time canvas composition with vintage paper textures",
      "Instant export and high-resolution print generation",
    ],
  },
  {
    title: "Vercel EZSlack Agent",
    category: "ai",
    description:
      "Serverless Slack AI agent with Gemini, Express & Vercel — tool orchestration, approval flows, and real-time dashboard.",
    longDescription:
      "An enterprise-ready serverless Slack bot architecture integrating Google Gemini LLM API, function calling, interactive approval workflows, and web control panels.",
    tags: ["Slack", "Gemini", "Serverless", "Node.js"],
    link: "https://github.com/Brian125bot/vercel_ezslack.git",
    image: "/projects/slack-agent.svg",
    highlights: [
      "Serverless deployment architecture on Vercel with zero cold-start delay",
      "Autonomous tool-calling loop with human-in-the-loop approvals",
      "Real-time administrative telemetry dashboard",
    ],
  },
  {
    title: "AI Smart Form Fill",
    category: "ai",
    description:
      "AI powered Gemini extension that uses custom context to batch fill online forms automatically.",
    longDescription:
      "A browser extension that extracts form schemas, matches user background data via vector context, and injects structured answers automatically to eliminate repetitive data entry.",
    tags: ["Gemini", "Chrome Extension", "AI/ML", "Automation"],
    link: "https://github.com/Brian125bot/ai_smart_fill/tree/main",
    image: "/projects/smart-fill.svg",
    highlights: [
      "Privacy-first local storage for user profile context",
      "Dynamic DOM introspection and input classification",
      "Seamless Gemini 1.5 Flash API integration",
    ],
  },
  {
    title: "RepoLM",
    category: "web",
    description:
      "Multimedia interactive notebook for analyzing public and private GitHub repositories.",
    longDescription:
      "An intelligent developer workspace that ingests entire GitHub repositories, indexes code structure, and provides interactive audio, visual, and text summaries.",
    tags: ["AI Notebook", "GitHub", "Multimedia", "Code Analysis"],
    link: "https://github.com/Brian125bot",
    image: "/projects/repolm.svg",
    highlights: [
      "Repository tree parsing and AST index creation",
      "Interactive code Q&A powered by custom RAG pipelines",
      "Exportable audio and visual summaries",
    ],
  },
  {
    title: "Our Lord of Lethality",
    category: "web",
    description:
      "Satirical web application that creates militarized dominionist prayers.",
    longDescription:
      "An exploration of natural language generation and satirical digital art, generating contextualized texts through conditioned prompt templates.",
    tags: ["Satire", "Web App", "Generative AI"],
    link: "https://ourlordoflethality.vercel.app",
    image: "/projects/cross.svg",
    highlights: [
      "Custom prompt engineering and stylistic text synthesis",
      "Interactive audio playback and stylized visual theme",
    ],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = projects.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <Section id="projects" className="relative bg-cyber-grid py-24">
      <SectionHeader
        title="Featured Innovations"
        subtitle="A collection of work demonstrating the fusion of material science, generative AI, and modern web software."
      />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Category Filter Tabs */}
        <div className="flex justify-center">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
            <TabsList className="grid grid-cols-4 bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
              <TabsTrigger value="all" className="rounded-full text-xs">
                All
              </TabsTrigger>
              <TabsTrigger value="materials" className="rounded-full text-xs">
                Materials
              </TabsTrigger>
              <TabsTrigger value="ai" className="rounded-full text-xs">
                AI / Agents
              </TabsTrigger>
              <TabsTrigger value="web" className="rounded-full text-xs">
                Web Apps
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="glass-card-interactive h-full flex flex-col group">
                {/* SVG Icon Header Display */}
                <div className="relative h-44 bg-gradient-to-br from-black/60 via-slate-900/50 to-primary/10 overflow-hidden flex items-center justify-center p-6 border-b border-white/10">
                  <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="text-[10px] uppercase font-mono tracking-wider border-primary/30 text-primary bg-primary/10 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-heading font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow space-y-4 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-foreground/80 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 text-xs rounded-xl"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Project <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </Button>

                  {/* Detail Modal Trigger */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/10 bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground text-xs rounded-xl px-3"
                      >
                        <Info className="w-3.5 h-3.5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-background/95 backdrop-blur-2xl border-white/15 max-w-lg">
                      <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={project.image}
                            alt=""
                            className="w-10 h-10 object-contain p-1.5 rounded-lg bg-primary/10 border border-primary/30"
                          />
                          <div>
                            <DialogTitle className="text-xl font-bold font-heading">
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-xs text-primary font-mono">
                              Category: {project.category.toUpperCase()}
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-4 py-2 text-sm text-muted-foreground">
                        <p className="leading-relaxed text-foreground">
                          {project.longDescription}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-primary font-mono flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> Key Technical Highlights
                          </h4>
                          <ul className="space-y-1.5 pl-4 list-disc text-xs">
                            {project.highlights.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-1.5">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-[10px]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button asChild className="w-full bg-primary text-primary-foreground">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open Project <ArrowUpRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
