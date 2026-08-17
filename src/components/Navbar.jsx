import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Button from './ui/Button.jsx'
import { NAV_LINKS, SITE } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Bloquea el scroll del body mientras el menú móvil está abierto */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Franja institucional — se pliega al hacer scroll */}
      <div
        className={`overflow-hidden bg-navy-950 transition-all duration-300 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <p className="hidden text-xs font-medium tracking-wide text-slate-300 sm:block">
            Vicerrectorado de Investigación · Centro de Innovación y Emprendimiento
          </p>
          {/* Alturas ópticamente equilibradas: el logo UDEP es más compacto y el
              del HUB más alargado, por eso no comparten la misma altura literal. */}
          <div className="flex shrink-0 items-center gap-5">
            <img
              src="/logos/logo-udep-white.png"
              alt="Universidad de Piura"
              className="h-8 w-auto"
              loading="eager"
            />
            <span className="h-7 w-px bg-white/25" aria-hidden="true" />
            <img
              src="/logos/logo-hub-udep-white.png"
              alt="HUB UDEP — Centro de Innovación y Emprendimiento"
              className="h-6 w-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Barra principal */}
      <nav
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg'
            : 'border-slate-200/70 bg-white'
        }`}
        aria-label="Navegación principal"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="#inicio" className="shrink-0" aria-label="SeedTech UDEP 2026 — Inicio">
            <img
              src="/logos/logo-seedtech-wordmark.png"
              alt="SeedTech"
              className="h-7 w-auto sm:h-8"
              loading="eager"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[0.93rem] font-medium text-slate-600 transition-colors hover:bg-seed-50 hover:text-seed-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* El wrapper controla la visibilidad: `hidden` sobre el propio botón
                competiría con el `inline-flex` de su clase base. */}
            <span className="hidden sm:block">
              <Button href={SITE.applyTeamUrl} size="sm">
                Postula ahora
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center rounded-xl text-navy-900 transition-colors hover:bg-seed-50 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          id="menu-movil"
          className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
            open ? 'max-h-[32rem] opacity-100' : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <ul className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-seed-50 hover:text-seed-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2.5 border-t border-slate-100 pt-4 pb-2">
              <Button href={SITE.applyTeamUrl} onClick={() => setOpen(false)}>
                Postula como equipo
              </Button>
              <Button
                href={SITE.applyIndividualUrl}
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Postulación individual
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
