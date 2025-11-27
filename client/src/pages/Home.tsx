import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Atom, Beaker, BookOpen, Brain, Code, ExternalLink, FileText, Github, Linkedin, Mail, Microscope, Waves } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Coretekpb.store",
      description: "Revolutionary pickleball paddle company featuring Alpha and Omega paddles with advanced composite materials and AI-powered analysis.",
      tags: ["E-commerce", "Materials Science", "AI Analytics"],
      link: "https://coretekpb.store"
    },
    {
      title: "Red Star Realism",
      description: "Revolutionary poster generator that transforms portraits into Socialist Realist art style using advanced generative AI technology.",
      tags: ["Generative AI", "Image Processing", "React"],
      link: "https://red-star-realism.vercel.app/"
    },
    {
      title: "Red Brush",
      description: "Socialist Realist poster generator allowing users to upload portraits and create timeless propaganda art inspiring collective action.",
      tags: ["Digital Art", "Web App", "Netlify"],
      link: "https://nork.netlify.app/"
    },
    {
      title: "Ai Imam",
      description: "AI-powered Islamic jurisprudence tool providing scholarly fatwas in English and Arabic based on user questions.",
      tags: ["AI/ML", "NLP", "Cloud Run"],
      link: "https://ai-imam-fatwas-by-imam-ai-kitab-365757207239.us-west1.run.app/"
    }
  ];

  const publications = [
    {
      title: "Mass Spectrometry Cleavable Strategy for Identification and Differentiation of Prenylated Peptides",
      journal: "Analytical Chemistry",
      year: "2015",
      authors: "Ruchika P. Bhawal, Sandhya C. Sadananda, Alejandro Bugarin, Brian Laposa, Saiful M. Chowdhury",
      abstract: "Developed a novel method for detection and distinction of large-scale prenylated peptides using mass spectrometry-cleavable approaches. The method utilizes simple chemistry on the prenyl group and cleavable properties of a sulfoxide group to produce a signature mass spectrum.",
      link: "https://pubs.acs.org/doi/abs/10.1021/ac503794s"
    }
  ];

  const skills = [
    { name: "Chemistry", icon: Beaker },
    { name: "Materials Science", icon: Atom },
    { name: "AI/ML", icon: Brain },
    { name: "Web Development", icon: Code },
    { name: "Signal Processing", icon: Waves },
    { name: "Patent Development", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Brian Laposa
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#publications" className="hover:text-primary transition-colors">Publications</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="outline" className="glass-button border-primary/20 text-primary hover:text-primary-foreground hover:bg-primary/20">
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        </div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Chemistry</span><br />
              and <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Innovative solutions at the intersection of science and digital innovation. Transforming ideas into breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Projects
              </Button>
              <Button size="lg" variant="outline" className="glass-button rounded-full px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/about-bg.jpg" 
                  alt="Abstract Science" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="text-center p-8">
                    <Microscope className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">The Innovator</h3>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Brian Laposa</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a chemist with a passion for technology, I bridge the gap between scientific principles and innovative digital solutions. My unique background allows me to approach problems from both analytical and creative perspectives.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My work spans from revolutionary materials engineering in sports equipment to cutting-edge AI applications and acoustic analysis tools. Each project represents a fusion of scientific rigor and technological innovation.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black/20">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of work demonstrating the fusion of material science, AI, and web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-panel h-full border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full group-hover:bg-primary/10 group-hover:text-primary justify-between cursor-pointer">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 relative">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic research and contributions to the scientific community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
                        <CardTitle className="text-xl mb-2 leading-snug">{pub.title}</CardTitle>
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
                    <Button asChild variant="outline" className="glass-button border-secondary/20 text-secondary hover:text-secondary-foreground hover:bg-secondary/20">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        Read Publication <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                Interested in collaboration or have questions about my projects? I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-black/20 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-black/20 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we collaborate?" className="min-h-[150px] bg-black/20 border-white/10 focus:border-primary/50" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </div>

              <div className="flex flex-col justify-center space-y-8 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:redstarapp@proton.me" className="text-lg font-medium hover:text-primary transition-colors">
                      redstarapp@proton.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <a href="#" className="text-lg font-medium hover:text-primary transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <a href="#" className="text-lg font-medium hover:text-primary transition-colors">
                      View Repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground">
        <div className="container">
          © 2025 Brian Laposa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
