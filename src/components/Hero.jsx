import {
  ArrowRight,
  CalendarDays,
  FileText,
  Presentation as PresentationIcon,
  Sparkles,
  UserPlus,
} from 'lucide-react'
import Button from './ui/Button.jsx'
import TechBackdrop from './ui/TechBackdrop.jsx'
import { SITE } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-linear-to-b from-navy-975 via-navy-950 to-navy-900 pt-16 pb-40 sm:pt-20 sm:pb-44 lg:pt-24 lg:pb-52"
    >
      <TechBackdrop />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        {/* Badge superior */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold tracking-wide text-seed-200 backdrop-blur-sm sm:text-sm">
            <Sparkles className="size-4 text-hub-yellow" aria-hidden="true" />
            Concurso universitario
            <span className="h-3.5 w-px bg-white/25" aria-hidden="true" />
            {SITE.edition}
          </span>
        </div>

        {/* Titular */}
        <h1 className="mx-auto mt-8 max-w-4xl text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
          Convierte tu idea en una{' '}
          <span className="text-gradient-seed">solución tecnológica real</span>
        </h1>

        {/* Claim del logo */}
        <div className="mt-7 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px w-10 bg-linear-to-r from-transparent to-seed-500/60 sm:w-20" />
          <span className="text-[0.7rem] font-semibold tracking-[0.28em] text-seed-300 uppercase sm:text-sm sm:tracking-[0.34em]">
            {SITE.claim}
          </span>
          <span className="h-px w-10 bg-linear-to-l from-transparent to-seed-500/60 sm:w-20" />
        </div>

        {/* Bajada */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          SeedTech UDEP 2026 es el concurso universitario que impulsa propuestas innovadoras
          lideradas por estudiantes de pregrado de los campus{' '}
          <strong className="font-semibold text-white">Piura</strong> y{' '}
          <strong className="font-semibold text-white">Lima</strong>.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
          <Button href={SITE.applyTeamUrl} size="lg" className="w-full sm:w-auto">
            Postula como equipo
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            href={SITE.applyIndividualUrl}
            variant="ghostLight"
            size="lg"
            className="w-full sm:w-auto"
          >
            <UserPlus className="size-5" />
            Postulación individual
          </Button>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-300">
          ¿No tienes equipo completo? También puedes postular individualmente y te contactaremos
          para continuar el proceso.
        </p>

        {/* Documentos oficiales */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <a
            href={SITE.basesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-slate-300 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-seed-400"
          >
            <FileText className="size-4 text-seed-300" aria-hidden="true" />
            Bases del concurso
          </a>
          <a
            href={SITE.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-slate-300 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-seed-400"
          >
            <PresentationIcon className="size-4 text-seed-300" aria-hidden="true" />
            Brochure del programa
          </a>
        </div>

        {/* Apertura de la convocatoria */}
        <div className="mt-9 flex justify-center text-sm">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/8 px-5 py-2.5 font-medium text-slate-100 ring-1 ring-white/15">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-seed-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-seed-400" />
            </span>
            <CalendarDays className="size-4 text-seed-300" aria-hidden="true" />
            {SITE.openingLabel}
          </span>
        </div>
      </div>

      {/* Curva de transición hacia la sección siguiente */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/10 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
