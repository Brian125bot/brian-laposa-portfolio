// Monogram mark: a single spectral trace on an ink tile. Mirrors favicon.svg.
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="var(--ink)" />
      <path
        d="M5 23h4.2l1.6-3.2 1.5 3.2h2.2l2-15 2.1 15h2.3l1.4-6 1.5 6H27"
        fill="none"
        stroke="var(--endpoint-light)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
