import { ArrowRight, UserPlus } from 'lucide-react'
import Button from './ui/Button.jsx'
import TechBackdrop from './ui/TechBackdrop.jsx'
import Reveal from './ui/Reveal.jsx'
import { SITE } from '../data/content.js'

export default function FinalCTA() {
  return (
    <section
      id="postula"
      className="relative isolate scroll-mt-24 overflow-hidden bg-linear-to-br from-navy-900 via-navy-950 to-navy-975 py-24 sm:py-28"
    >
      <TechBackdrop nodesOpacity="opacity-35" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="text-[0.7rem] font-semibold tracking-[0.28em] text-seed-300 uppercase sm:text-xs sm:tracking-[0.34em]">
            {SITE.claim}
          </span>

          <h2 className="mt-5 text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-5xl">
            Tu idea puede ser el inicio de{' '}
            <span className="text-gradient-seed">algo grande</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Postula a SeedTech UDEP 2026 y empieza a transformar una idea en una solución
            tecnológica con impacto real.
          </p>
        </Reveal>

        <Reveal delay={100}>
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

          <p className="mt-6 text-sm text-slate-300">{SITE.openingLabel}.</p>
        </Reveal>
      </div>
    </section>
  )
}
