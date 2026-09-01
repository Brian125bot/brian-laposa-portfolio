import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </motion.div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.22em] text-muted-foreground mb-6"
          >
            Chemist &nbsp;&middot;&nbsp; Engineer &nbsp;&middot;&nbsp; Builder
          </motion.p>

          <div
            className="mx-auto mb-8 h-px w-12 bg-border"
            aria-hidden="true"
          />

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-[1.05] tracking-tight">
            Bridging <span className="italic text-primary">Chemistry</span>
            <br />
            and <span className="italic text-primary">Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Innovative solutions at the intersection of science and digital
            innovation. Transforming ideas into breakthrough technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-sm font-medium tracking-wide focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-sm font-medium tracking-wide glass-button focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 flex items-center justify-center gap-2 text-muted-foreground"
            aria-hidden="true"
          >
            <span className="h-px w-8 bg-border" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <span className="h-px w-8 bg-border" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
