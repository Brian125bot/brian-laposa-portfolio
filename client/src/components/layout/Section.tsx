import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  withBackground = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 relative ${withBackground ? "bg-black/20" : ""} ${className}`}
    >
      <div className="container px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "left"
      ? "text-left items-start mr-auto"
      : "text-center items-center mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignment} mb-16 max-w-2xl`}
    >
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary mb-4">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className="font-display font-bold tracking-tight mb-4 leading-tight max-w-3xl"
        style={{ fontSize: "var(--text-h2)" }}
      >
        {title}
      </h2>
      <p
        className={`text-muted-foreground leading-relaxed ${align === "left" ? "max-w-2xl" : "max-w-2xl mx-auto"}`}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
