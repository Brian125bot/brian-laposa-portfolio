import Section, { SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Linkedin, Mail } from "lucide-react";

const profiles = [
  { name: "dev.to", url: "https://dev.to/brianbot", icon: Github },
  { name: "GitHub", url: "https://github.com/brian125bot", icon: Github },
  { name: "Google Dev", url: "https://g.dev/brianlaposa", icon: Globe },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Let's work together"
        subtitle="Interested in collaboration or have questions about my projects? I'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-10">
          <div className="space-y-6">
            <a
              href="mailto:redstarapp@proton.me"
              className="group flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            >
              <span
                aria-hidden
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card text-primary transition-colors group-hover:border-primary/40"
              >
                <Mail className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </span>
                <span className="block text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  redstarapp@proton.me
                </span>
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            >
              <span
                aria-hidden
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card text-primary transition-colors group-hover:border-primary/40"
              >
                <Linkedin className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  LinkedIn
                </span>
                <span className="block text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  Connect on LinkedIn
                </span>
              </span>
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground mb-5">
              Find me online
            </h4>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {profiles.map((profile, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-primary transition-colors group-hover:border-primary/40"
                      >
                        <profile.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {profile.name}
                      </span>
                    </span>
                    <ExternalLink
                      aria-hidden
                      className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={e => e.preventDefault()}
          className="space-y-5 md:border-l md:border-border md:pl-12"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we collaborate?"
              className="min-h-[160px] resize-y"
            />
          </div>
          <div className="space-y-3 pt-2">
            <Button type="submit" size="lg" className="w-full rounded-full">
              Send Message
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Or email me directly at{" "}
              <a href="mailto:redstarapp@proton.me" className="font-medium">
                redstarapp@proton.me
              </a>
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
