import Section, { SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github, Globe, Linkedin, Mail } from "lucide-react";

const profiles = [
  { name: "dev.to", url: "https://dev.to/brianbot", icon: Code },
  { name: "GitHub", url: "https://github.com/brian125bot", icon: Github },
  { name: "Google Dev", url: "https://g.dev/brianlaposa", icon: Globe },
];

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Interested in collaboration or have questions about my projects? I'd love to hear from you."
        />

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-black/20 border-white/10 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-black/20 border-white/10 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we collaborate?"
                  className="min-h-[150px] bg-black/20 border-white/10 focus:border-primary/50"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Or email me directly at{" "}
                <a
                  href="mailto:redstarapp@proton.me"
                  className="text-primary hover:underline"
                >
                  redstarapp@proton.me
                </a>
              </p>
            </div>

            {/* Contact Info & Profiles */}
            <div className="flex flex-col justify-center space-y-8 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:redstarapp@proton.me"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
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
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Find me online
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {profiles.map((profile, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="glass-panel border-white/5 hover:border-primary/50 transition-all duration-300 group">
                        <CardHeader className="items-center py-4">
                          <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                            <profile.icon className="w-6 h-6" />
                          </div>
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
                            {profile.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pb-4">
                          <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                          >
                            Visit Profile{" "}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
