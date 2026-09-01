import Section, { SectionHeader } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "coretekpaddles.com",
    description:
      "Revolutionary pickleball paddle company featuring Alpha and Omega paddles with advanced composite materials and AI-powered analysis.",
    tags: ["E-commerce", "Materials Science", "AI Analytics"],
    link: "https://coretekpaddles.com",
    image: "/projects/paddle.svg",
  },
  {
    title: "Red Star Realism",
    description:
      "Revolutionary poster generator that transforms portraits into Socialist Realist art style using advanced generative AI technology.",
    tags: ["Generative AI", "Image Processing", "React"],
    link: "https://red-star-realism.vercel.app/",
    image: "/projects/star.svg",
  },
  {
    title: "Our Lord of Lethality",
    description:
      "Satirical web application that creates militarized dominionist prayers.",
    tags: ["Satire", "Web App", "Generative AI"],
    link: "https://ourlordoflethality.vercel.app",
    image: "/projects/cross.svg",
  },
  {
    title: "Vercel EZSlack",
    description:
      "Serverless Slack AI agent with Gemini, Express & Vercel — tool orchestration, approval flows, and real-time dashboard.",
    tags: ["Slack", "Gemini", "Serverless"],
    link: "https://github.com/Brian125bot/vercel_ezslack.git",
    image: "/projects/slack-agent.svg",
  },
  {
    title: "AI Smart Form Fill",
    description:
      "AI powered Gemini extension that uses custom context to batch fill online forms.",
    tags: ["Gemini", "Chrome Extension", "AI/ML"],
    link: "https://github.com/Brian125bot/ai_smart_fill/tree/main",
    image: "/projects/smart-fill.svg",
  },
  {
    title: "RepoLM",
    description: "Multimedia notebook for public and private GitHub repos.",
    tags: ["AI Notebook", "GitHub", "Multimedia"],
    link: "https://github.com/Brian125bot",
    image: "/projects/repolm.svg",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected work"
        title="Featured Projects"
        subtitle="A collection of work demonstrating the fusion of material science, AI, and web technologies."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
            className="group glass-panel rounded-lg overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="font-display font-semibold text-xl leading-snug mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] uppercase tracking-wider font-medium px-2 py-1 rounded border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                View project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
