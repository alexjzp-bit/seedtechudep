import { CircleCheck, Sparkles } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section.jsx'
import { FeatureCard } from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'
import { COMMITMENTS, CRITERIA } from '../data/content.js'

export default function SelectionCriteriaSection() {
  return (
    <Section id="criterios" tone="light">
      <SectionHeading
        eyebrow="Criterios de selección"
        title="¿Qué evaluaremos?"
        description="Estos son los cuatro criterios con los que el comité seleccionará a los equipos que pasan a la fase de entrenamiento."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CRITERIA.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <FeatureCard icon={item.icon} title={item.title} text={item.text} />
          </Reveal>
        ))}
      </div>

      {/* Destacado */}
      <Reveal delay={120} className="mt-8">
        <div className="flex flex-col items-center gap-4 rounded-3xl border-2 border-seed-200 bg-white px-6 py-7 text-center sm:flex-row sm:gap-5 sm:text-left">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-seed-500 text-white shadow-md shadow-seed-500/25">
            <Sparkles className="size-6" aria-hidden="true" />
          </span>
          <p className="text-base leading-relaxed font-semibold text-navy-950 sm:text-lg">
            Se priorizarán propuestas viables, con alto potencial de impacto y con un componente
            tecnológico claro.
          </p>
        </div>
      </Reveal>

      {/* Compromisos */}
      <Reveal delay={160} className="mt-16">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9">
          <h3 className="text-xl font-bold text-navy-950 sm:text-2xl">
            Compromisos del equipo emprendedor
          </h3>
          <p className="mt-2 text-slate-600">
            Al postular, tu equipo se compromete a:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {COMMITMENTS.map((item) => (
              <li key={item} className="flex gap-3">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-seed-500" aria-hidden="true" />
                <span className="text-[0.95rem] leading-relaxed text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
