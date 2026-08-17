/**
 * Fondo decorativo: nodos conectados sobre retícula.
 * Puramente ornamental — no aporta información y queda fuera del árbol de accesibilidad.
 */
export default function TechBackdrop({ className = '', nodesOpacity = 'opacity-60' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* retícula */}
      <div className="absolute inset-0 bg-grid-tech [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_35%,transparent_100%)]" />

      {/* halos de color */}
      <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-seed-500/22 blur-[120px]" />
      <div className="absolute -right-24 -bottom-40 size-[30rem] rounded-full bg-seed-400/14 blur-[120px]" />

      {/* red de nodos */}
      <svg
        className={`absolute inset-0 size-full ${nodesOpacity}`}
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="tb-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0094FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7EE0FF" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="tb-node">
            <stop offset="0%" stopColor="#8AD4FF" />
            <stop offset="100%" stopColor="#0094FF" />
          </radialGradient>
        </defs>

        <g stroke="url(#tb-line)" strokeWidth="1.1">
          <path d="M90 560 L250 430 L430 470 L560 330 L760 380 L900 250 L1110 300" />
          <path d="M250 430 L300 620 L520 640" />
          <path d="M560 330 L620 150 L830 110" />
          <path d="M760 380 L820 560 L1050 590" />
          <path d="M430 470 L560 330" />
          <path d="M900 250 L830 110" />
        </g>

        <g fill="url(#tb-node)">
          {[
            [90, 560],
            [250, 430],
            [430, 470],
            [560, 330],
            [760, 380],
            [900, 250],
            [1110, 300],
            [300, 620],
            [520, 640],
            [620, 150],
            [830, 110],
            [820, 560],
            [1050, 590],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </g>
      </svg>
    </div>
  )
}
