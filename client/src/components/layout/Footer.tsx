import { Button } from "@/components/ui/button";
import { ArrowUp, Code, Github, Globe, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/brian125bot", icon: Github, label: "GitHub" },
  { href: "https://dev.to/brianbot", icon: Code, label: "dev.to" },
  { href: "https://g.dev/brianlaposa", icon: Globe, label: "Google Dev" },
  { href: "mailto:redstarapp@proton.me", icon: Mail, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background/90 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Decorative Grid Line Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-xs">
                BL
              </span>
              <h3 className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-200 to-secondary">
                Brian Laposa
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Bridging analytical chemistry and modern AI software development to engineer high-impact solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Brian Laposa. Crafted with scientific precision and modern AI.
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-xs text-muted-foreground hover:text-primary hover:bg-white/5 rounded-full px-4 border border-white/5"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
