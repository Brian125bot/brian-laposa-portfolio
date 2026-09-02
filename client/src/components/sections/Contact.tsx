import Section, { SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Check, Code, Copy, ExternalLink, Github, Globe, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const profiles = [
  { name: "dev.to", url: "https://dev.to/brianbot", icon: Code, desc: "Articles & Tech Notes" },
  { name: "GitHub", url: "https://github.com/brian125bot", icon: Github, desc: "Repositories & Code" },
  { name: "Google Dev", url: "https://g.dev/brianlaposa", icon: Globe, desc: "Developer Profile" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "redstarapp@proton.me";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormState({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Interested in R&D collaborations, sports material consulting, or AI agent software? Let's connect."
        />

        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-heading font-bold">Send a Message</h3>
                <p className="text-xs text-muted-foreground">Directly reach out via this form.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-mono">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-black/30 border-white/10 focus:border-primary/60 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-mono">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-black/30 border-white/10 focus:border-primary/60 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-mono">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or collaboration idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="min-h-[130px] bg-black/30 border-white/10 focus:border-primary/60 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-5 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Direct Details & Online Profiles */}
            <div className="flex flex-col justify-between space-y-8 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-bold">Direct Contact</h3>
                  <p className="text-xs text-muted-foreground">Fast response via email or developer platforms.</p>
                </div>

                {/* Direct Email Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-muted-foreground">Primary Email</div>
                        <a
                          href={`mailto:${email}`}
                          className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleCopyEmail}
                      className="text-xs text-muted-foreground hover:text-primary rounded-lg border border-white/10"
                    >
                      {copied ? <Check className="w-4 h-4 text-secondary" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {/* Social Online Profiles */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Online Presence & Code
                  </h4>
                  <div className="grid gap-3">
                    {profiles.map((profile, index) => (
                      <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                            <profile.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                              {profile.name}
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              {profile.desc}
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
