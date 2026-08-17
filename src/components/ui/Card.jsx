import Icon from './Icon.jsx'

/**
 * Tarjeta base reutilizable.
 * `tone="light"` para fondos claros, `tone="dark"` para secciones navy.
 */
export function Card({ tone = 'light', className = '', children, ...props }) {
  const styles =
    tone === 'dark'
      ? 'border-white/10 bg-white/[0.04] hover:border-seed-400/50 hover:bg-white/[0.07]'
      : 'border-slate-200/80 bg-white hover:border-seed-300 hover:shadow-xl hover:shadow-seed-900/8'

  return (
    <div
      className={`group relative rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${styles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

/** Contenedor cuadrado del ícono, con el degradado de marca. */
export function CardIcon({ name, tone = 'light', className = '' }) {
  const styles =
    tone === 'dark'
      ? 'bg-seed-500/15 text-seed-300 ring-1 ring-seed-400/25 group-hover:bg-seed-500/25'
      : 'bg-linear-to-br from-seed-500 to-navy-800 text-white shadow-md shadow-seed-500/25'

  return (
    <span
      className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${styles} ${className}`}
    >
      <Icon name={name} className="size-6" />
    </span>
  )
}

/** Tarjeta de contenido más frecuente: ícono + título + texto. */
export function FeatureCard({ icon, title, text, tone = 'light', eyebrow, className = '' }) {
  return (
    <Card tone={tone} className={`flex h-full flex-col ${className}`}>
      <CardIcon name={icon} tone={tone} />
      {eyebrow && (
        <span
          className={`mt-5 text-xs font-bold tracking-[0.14em] uppercase ${
            tone === 'dark' ? 'text-seed-300' : 'text-seed-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h3
        className={`mt-4 text-lg font-bold ${eyebrow ? 'mt-2' : ''} ${
          tone === 'dark' ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2.5 text-[0.95rem] leading-relaxed ${
          tone === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {text}
      </p>
    </Card>
  )
}

export default Card
