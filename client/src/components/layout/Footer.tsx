import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/brian125bot", icon: Github, label: "GitHub" },
  { href: "https://dev.to/brianbot", icon: Github, label: "dev.to" },
  { href: "mailto:redstarapp@proton.me", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brian Laposa. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary"
          >
            Back to top <ArrowUp className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
