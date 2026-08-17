import { Section, SectionHeading } from './ui/Section.jsx'
import { FeatureCard } from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'
import { OBJECTIVES } from '../data/content.js'

export default function AboutSection() {
  return (
    <Section id="que-es" tone="white" className="pt-24 sm:pt-28">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        {/* Columna editorial */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="El concurso"
            title="¿Qué es SeedTech UDEP?"
            className="max-w-none"
          />

          <Reveal delay={80} className="mt-6 space-y-5">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              SeedTech UDEP es un concurso impulsado por el{' '}
              <strong className="font-semibold text-navy-900">
                Vicerrectorado de Investigación de la Universidad de Piura
              </strong>
              , a través del{' '}
              <strong className="font-semibold text-navy-900">
                Centro de Innovación y Emprendimiento HUB UDEP
              </strong>
              . Está dirigido a estudiantes de pregrado de los campus Piura y Lima que buscan
              convertir una idea en una solución tecnológica real.
            </p>

            <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-slate-200/80 bg-slate-50/70 px-6 py-5 sm:gap-8">
              <img
                src="/logos/logo-udep.png"
                alt="Universidad de Piura"
                className="h-12 w-auto"
                loading="lazy"
              />
              <span className="h-10 w-px bg-slate-300" aria-hidden="true" />
              <img
                src="/logos/logo-hub-udep.png"
                alt="HUB UDEP — Centro de Innovación y Emprendimiento"
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Objetivos */}
        <div>
          <Reveal>
            <h3 className="text-sm font-bold tracking-[0.14em] text-seed-600 uppercase">
              Cuatro objetivos
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {OBJECTIVES.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <FeatureCard icon={item.icon} title={item.title} text={item.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
