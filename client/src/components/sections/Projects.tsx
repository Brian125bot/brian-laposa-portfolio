import Section, { SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
    title: "Ai Imam",
    description:
      "AI-powered Islamic jurisprudence tool providing scholarly fatwas in English and Arabic based on user questions.",
    tags: ["AI/ML", "NLP", "Cloud Run"],
    link: "https://ai-imam.vercel.app",
    image: "/projects/crescent.svg",
  },
  {
    title: "Our Lord of Lethality",
    description:
      "Satirical web application that creates militarized dominionist prayers.",
    tags: ["Satire", "Web App", "Generative AI"],
    link: "https://ourlordoflethality.vercel.app",
    image: "/projects/cross.svg",
  },
];

export default function Projects() {
  return (
    <Section id="projects" withBackground>
      <SectionHeader
        title="Featured Projects"
        subtitle="A collection of work demonstrating the fusion of material science, AI, and web technologies."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-panel h-full border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary justify-between cursor-pointer"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
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
