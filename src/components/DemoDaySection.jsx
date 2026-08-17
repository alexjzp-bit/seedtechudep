import { Section, SectionHeading } from './ui/Section.jsx'
import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { DEMO_DAY_POINTS } from '../data/content.js'

export default function DemoDaySection() {
  return (
    <Section id="demo-day" tone="navy" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -bottom-24 size-[30rem] rounded-full bg-seed-500/14 blur-[130px]"
        aria-hidden="true"
      />

      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="Cierre del concurso"
            title="Demo Day: presenta tu solución ante el ecosistema"
            className="max-w-none"
          />

          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              El Demo Day será la sesión presencial de cierre del concurso, con un mínimo de{' '}
              <strong className="font-semibold text-white">5 equipos finalistas</strong>. Los
              finalistas serán seleccionados según su desempeño durante el entrenamiento y los
              criterios de evaluación establecidos.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 px-6 py-4">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-hub-yellow/15 text-hub-yellow">
                <Icon name="Calendar" className="size-6" />
              </span>
              <div>
                <p className="font-display text-xl font-extrabold text-white">26 de octubre</p>
                <p className="text-sm text-slate-400">Evento final y premiación · Presencial</p>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="space-y-4">
          {DEMO_DAY_POINTS.map((point, i) => (
            <Reveal key={point.text} delay={i * 90} as="li">
              <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-seed-400/45 hover:bg-white/[0.07] sm:p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-seed-500/15 text-seed-300 ring-1 ring-seed-400/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={point.icon} className="size-5" />
                </span>
                <p className="self-center text-[0.95rem] leading-relaxed text-slate-300">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
