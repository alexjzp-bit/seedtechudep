import Reveal from './Reveal.jsx'

const TONES = {
  white: 'bg-white',
  light: 'bg-seed-50/60',
  navy: 'bg-navy-950 text-slate-300',
}

/** Contenedor estándar de sección con ancho máximo y padding vertical consistentes. */
export function Section({ id, tone = 'white', className = '', children, ...props }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${TONES[tone]} ${className}`}
      {...props}
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

/** Etiqueta + título + bajada, con la misma jerarquía en todas las secciones. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <Reveal className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.14em] uppercase ${
            dark ? 'bg-white/10 text-seed-300 ring-1 ring-white/15' : 'bg-seed-100 text-seed-700'
          }`}
        >
          <span className={`size-1.5 rounded-full ${dark ? 'bg-seed-400' : 'bg-seed-500'}`} />
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default Section
