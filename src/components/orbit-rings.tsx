export function OrbitRings() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 620 620"
      className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-[52%] opacity-35"
    >
      <defs>
        <linearGradient id="orbit-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="310" cy="310" r="304" fill="none" stroke="url(#orbit-ring)" strokeWidth="1" />
      <circle
        cx="310"
        cy="310"
        r="238"
        fill="none"
        stroke="url(#orbit-ring)"
        strokeWidth="1"
        strokeDasharray="6 10"
      />
      <circle
        cx="310"
        cy="310"
        r="172"
        fill="none"
        stroke="url(#orbit-ring)"
        strokeWidth="1"
        strokeDasharray="2 12"
      />
    </svg>
  );
}
