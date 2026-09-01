import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border"
          : "bg-background/40 backdrop-blur-sm border-b border-transparent",
      ].join(" ")}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          onClick={e => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="group inline-flex items-baseline gap-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          aria-label="Brian Laposa — Home"
        >
          <span className="font-display text-xl tracking-tight">Brian</span>
          <span className="font-display text-xl tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
            Laposa
          </span>
          <span
            aria-hidden
            className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-primary translate-y-[-2px]"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="group relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              {link.label}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground/70 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-foreground hover:bg-accent"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-background/95 backdrop-blur-md border-l border-border p-0"
          >
            <div className="flex flex-col h-full">
              <div className="px-6 pt-8 pb-6 border-b border-border">
                <span className="font-display text-lg tracking-tight">
                  Brian Laposa
                </span>
                <p className="mt-1 text-xs text-muted-foreground">Navigation</p>
              </div>
              <nav className="flex-1 px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map(link => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left px-2 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
