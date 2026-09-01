import { ArrowUp, Github, Mail } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/brian125bot", icon: Github, label: "GitHub" },
  { href: "https://dev.to/brianbot", icon: Github, label: "dev.to" },
  { href: "mailto:redstarapp@proton.me", icon: Mail, label: "Email" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={e => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="font-display text-2xl tracking-tight text-foreground"
            >
              Brian Laposa
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Software engineer building thoughtful, well-crafted digital
              products at the intersection of AI and the web.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Navigation
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Connect
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <link.icon className="h-4 w-4 transition-colors group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brian Laposa. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
