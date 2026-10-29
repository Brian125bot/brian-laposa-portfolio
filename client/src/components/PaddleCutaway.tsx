// Cutaway illustration of a composite paddle: the face skin peels back
// along a diagonal to show the honeycomb core.
const R = 8;
const TW = Math.sqrt(3) * R;
const TH = 3 * R;
const hexPath = `M0 ${R / 2}L${TW / 2} 0L${TW} ${R / 2}L${TW} ${1.5 * R}L${TW / 2} ${2 * R}L0 ${1.5 * R}ZM${TW / 2} ${2 * R}V${TH}`;

export default function PaddleCutaway({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="Cutaway of a composite pickleball paddle showing its honeycomb core">
      <defs>
        <pattern id="honeycomb" width={TW} height={TH} patternUnits="userSpaceOnUse">
          <path d={hexPath} fill="none" stroke="var(--ink)" strokeWidth="0.9" />
        </pattern>
        <clipPath id="paddle-shape">
          <rect x="128" y="14" width="144" height="196" rx="46" />
          <rect x="180" y="200" width="40" height="96" rx="9" />
        </clipPath>
        <clipPath id="skin-cut">
          <polygon points="0,0 400,0 400,40 0,232" />
        </clipPath>
      </defs>

      <g transform="rotate(-16 200 160)">
        {/* core */}
        <g clipPath="url(#paddle-shape)">
          <rect x="0" y="0" width="400" height="320" fill="var(--paper)" />
          <rect x="0" y="0" width="400" height="320" fill="url(#honeycomb)" opacity="0.55" />
        </g>
        {/* face skin, cut on the diagonal */}
        <g clipPath="url(#paddle-shape)">
          <g clipPath="url(#skin-cut)">
            <rect x="0" y="0" width="400" height="320" fill="var(--ink)" />
            {Array.from({ length: 30 }, (_, i) => (
              <line
                key={i}
                x1={i * 14 - 120}
                y1="0"
                x2={i * 14 + 40}
                y2="320"
                stroke="var(--ink-2)"
                strokeWidth="6"
              />
            ))}
          </g>
        </g>
        {/* cut line */}
        <g clipPath="url(#paddle-shape)">
          <line x1="0" y1="232" x2="400" y2="40" stroke="var(--endpoint)" strokeWidth="2.5" />
        </g>
        {/* edge guard + grip */}
        <rect x="128" y="14" width="144" height="196" rx="46" fill="none" stroke="var(--ink)" strokeWidth="3" />
        <rect x="180" y="208" width="40" height="88" rx="9" fill="var(--ink)" />
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={i}
            x1="180"
            x2="220"
            y1={222 + i * 12}
            y2={216 + i * 12}
            stroke="var(--ink-2)"
            strokeWidth="3"
          />
        ))}
      </g>
    </svg>
  );
}
