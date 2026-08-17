const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-60'

const VARIANTS = {
  /* Azul brillante, texto blanco, hover más oscuro */
  primary:
    'bg-seed-500 text-white shadow-lg shadow-seed-500/25 hover:bg-seed-600 ' +
    'hover:shadow-xl hover:shadow-seed-600/30 hover:-translate-y-0.5 active:translate-y-0 ' +
    'focus-visible:outline-seed-500',
  /* Borde azul, texto azul, fondo blanco */
  secondary:
    'border-2 border-seed-500 bg-white text-seed-700 hover:bg-seed-50 ' +
    'hover:border-seed-600 hover:text-seed-800 hover:-translate-y-0.5 active:translate-y-0 ' +
    'focus-visible:outline-seed-500',
  /* Para fondos oscuros */
  ghostLight:
    'border-2 border-white/35 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 ' +
    'hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-white',
  white:
    'bg-white text-navy-950 shadow-lg shadow-navy-950/20 hover:bg-seed-50 hover:text-navy-900 ' +
    'hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-white',
}

const SIZES = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-[0.95rem]',
  lg: 'px-7 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Cmp = as
  const external = Cmp === 'a' && typeof props.href === 'string' && props.href.startsWith('http')

  return (
    <Cmp
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...props}
    >
      {children}
    </Cmp>
  )
}
