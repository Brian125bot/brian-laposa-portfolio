import { useEffect, useState } from "react";
import Mark from "@/components/Mark";

const links = [
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently occupying the middle of the viewport.
  useEffect(() => {
    const sections = ["top", ...links.map(l => l.id)]
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "top" ? null : entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        scrolled
          ? "border-b border-rule bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="wrap flex h-[var(--header-h)] items-center justify-between gap-6"
      >
        <a
          href="#top"
          className="flex items-center gap-3 text-ink"
          aria-label="Brian Laposa, back to top"
        >
          <Mark className="h-7 w-7" />
          <span
            className={[
              "text-[1.0625rem] font-semibold tracking-[-0.02em] transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0 max-sm:hidden",
            ].join(" ")}
          >
            Brian Laposa
          </span>
        </a>

        <ul className="flex items-center gap-5 sm:gap-8">
          {links.map(link => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={[
                    "relative py-2 text-[0.9375rem] font-medium transition-colors duration-200",
                    isActive ? "text-ink" : "text-graphite hover:text-ink",
                  ].join(" ")}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={[
                      "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-endpoint transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
