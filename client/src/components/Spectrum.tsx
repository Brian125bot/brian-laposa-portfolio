import { useMemo } from "react";

/*
 * A career rendered as a mass spectrum. Each annotated peak is a body of
 * work and links to the section that covers it. The trace is computed
 * once (deterministic noise) and drawn in a 1000×100 viewBox that is
 * stretched to the plot; strokes use non-scaling-stroke so they stay crisp.
 */

type Peak = {
  x: number; // 0..1 across the plot
  h: number; // 0..1 of plot height
  label: string;
  meta: string;
  href: string;
};

const PEAKS: Peak[] = [
  {
    x: 0.13,
    h: 0.66,
    label: "Mass spectrometry",
    meta: "Analytical Chemistry, 2015",
    href: "#research",
  },
  {
    x: 0.4,
    h: 0.86,
    label: "Composite materials",
    meta: "CoreTek, co-founder",
    href: "#coretek",
  },
  {
    x: 0.64,
    h: 0.42,
    label: "Web apps",
    meta: "AI experiments",
    href: "#apps",
  },
  {
    x: 0.87,
    h: 0.54,
    label: "Coding projects",
    meta: "A hobby, ongoing",
    href: "#tools",
  },
];

const BASE_Y = 92;
const AMP = 80;
const W = 1000;

function buildTrace() {
  // Small seeded generator so the "noise" is identical on every render.
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  type G = { c: number; a: number; s: number };
  const gaussians: G[] = [];
  for (const p of PEAKS) {
    const c = p.x * W;
    gaussians.push({ c, a: p.h, s: 3.2 });
    // isotope satellites, as a real spectrum would show
    gaussians.push({ c: c + 11, a: p.h * 0.28, s: 2.6 });
    gaussians.push({ c: c + 22, a: p.h * 0.07, s: 2.4 });
  }
  // minor background ions
  for (let i = 0; i < 26; i++) {
    gaussians.push({ c: 20 + rand() * 960, a: 0.015 + rand() * 0.07, s: 2 + rand() * 1.5 });
  }

  const pts: [number, number][] = [];
  for (let x = 0; x <= W; x += 1) {
    let y = 0;
    for (const g of gaussians) {
      const d = (x - g.c) / g.s;
      if (Math.abs(d) < 6) y += g.a * Math.exp(-0.5 * d * d);
    }
    y += (rand() - 0.5) * 0.006;
    pts.push([x, BASE_Y - Math.max(0, y) * AMP]);
  }
  const line = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y.toFixed(2)}`)
    .join("");
  return { line, area: `${line}L${W} ${BASE_Y}L0 ${BASE_Y}Z` };
}

export default function Spectrum({ animate = true }: { animate?: boolean }) {
  const { line, area } = useMemo(buildTrace, []);

  return (
    <figure className="spectrum" data-animate={animate}>
      <figcaption className="sr-only">
        A mass spectrum used as a timeline of Brian's work, from 2015 to now.
        Peaks mark mass spectrometry research, composite materials at CoreTek,
        and hobby software projects.
      </figcaption>

      <div className="spectrum-plot">
        <svg viewBox={`0 0 ${W} 100`} preserveAspectRatio="none" aria-hidden="true">
          {[12, 32, 52, 72].map(y => (
            <line
              key={y}
              x1="0"
              x2={W}
              y1={y}
              y2={y}
              stroke="var(--rule)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <g className="spectrum-ink">
            <path d={area} fill="var(--endpoint)" fillOpacity="0.07" />
            <path
              d={line}
              fill="none"
              stroke="var(--endpoint)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
          <line
            x1="0"
            x2={W}
            y1={BASE_Y}
            y2={BASE_Y}
            stroke="var(--ink)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          {Array.from({ length: 21 }, (_, i) => (
            <line
              key={i}
              x1={i * 50}
              x2={i * 50}
              y1={BASE_Y}
              y2={BASE_Y + (i % 5 === 0 ? 3.5 : 2)}
              stroke="var(--ink)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {PEAKS.map(p => (
          <a
            key={p.label}
            href={p.href}
            className="peak-label"
            style={{ ["--x" as string]: p.x, ["--h" as string]: p.h }}
          >
            {p.label}
            <span className="peak-meta">{p.meta}</span>
          </a>
        ))}
      </div>

      <div className="mt-3 flex justify-between text-[0.8125rem] text-graphite" aria-hidden="true">
        <span>2015</span>
        <span>Now</span>
      </div>
    </figure>
  );
}
