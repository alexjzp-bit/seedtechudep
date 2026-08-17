import { FileText, Mail, Presentation, UserPlus, Users } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-navy-975 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.9fr)_minmax(0,1fr)]">
          {/* Marca */}
          <div>
            <img
              src="/logos/logo-seedtech.png"
              alt="SeedTech — Concurso universitario"
              className="h-20 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              SeedTech UDEP 2026 — Concurso Universitario. Una iniciativa del Vicerrectorado de
              Investigación de la Universidad de Piura, a través del Centro de Innovación y
              Emprendimiento HUB UDEP.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie de página">
            <h2 className="text-xs font-bold tracking-[0.16em] text-white uppercase">Secciones</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-seed-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Recursos */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-white uppercase">Recursos</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={SITE.basesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-seed-300"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  Bases del concurso
                </a>
              </li>
              <li>
                <a
                  href={SITE.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-seed-300"
                >
                  <Presentation className="size-4" aria-hidden="true" />
                  Brochure del programa
                </a>
              </li>
              <li>
                <a
                  href={SITE.applyTeamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-seed-300"
                >
                  <Users className="size-4" aria-hidden="true" />
                  Postulación por equipo
                </a>
              </li>
              <li>
                <a
                  href={SITE.applyIndividualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-seed-300"
                >
                  <UserPlus className="size-4" aria-hidden="true" />
                  Postulación individual
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-white uppercase">Contacto</h2>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-5 inline-flex items-center gap-2.5 text-sm font-medium text-seed-300 transition-colors hover:text-seed-200"
            >
              <Mail className="size-4" aria-hidden="true" />
              {SITE.contactEmail}
            </a>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              Los participantes aceptan lo dispuesto en el Reglamento de Propiedad Intelectual de la
              Universidad de Piura, aplicable a la autoría, los derechos y el uso de las soluciones
              presentadas.
            </p>
          </div>
        </div>

        {/* Franja institucional */}
        <div className="mt-12 flex flex-col items-center gap-8 border-t border-white/8 pt-10 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-9">
            <img
              src="/logos/logo-udep-white.png"
              alt="Universidad de Piura"
              className="h-12 w-auto"
              loading="lazy"
            />
            <span className="hidden h-10 w-px bg-white/20 sm:block" aria-hidden="true" />
            <img
              src="/logos/logo-hub-udep-white.png"
              alt="HUB UDEP — Centro de Innovación y Emprendimiento"
              className="h-10 w-auto"
              loading="lazy"
            />
          </div>

          <p className="text-center text-xs text-slate-400 sm:text-right">
            © {year} Universidad de Piura · HUB UDEP
            <span className="mt-1 block">{SITE.claim}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
