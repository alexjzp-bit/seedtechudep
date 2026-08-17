import { Section, SectionHeading } from './ui/Section.jsx'
import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { TRAINING } from '../data/content.js'

export default function TrainingProcessSection() {
  return (
    <Section id="metodologia" tone="white">
      <SectionHeading
        eyebrow="Proceso de entrenamiento"
        title="Un proceso formativo para validar, prototipar y presentar tu solución"
        description="El equipo HUB UDEP, junto con asesores y mentores UDEP, acompaña esta etapa a través de cuatro espacios de trabajo."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRAINING.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-seed-300 hover:shadow-xl hover:shadow-seed-900/8">
              {/* número decorativo */}
              <span
                className="pointer-events-none absolute top-5 right-6 font-display text-6xl leading-none font-extrabold text-seed-50 transition-colors duration-300 group-hover:text-seed-100"
                aria-hidden="true"
              >
                {item.count}
              </span>

              <div className="relative">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-seed-500 to-navy-800 text-white shadow-md shadow-seed-500/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="size-6" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  <span className="text-seed-600">{item.count}</span> {item.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-8 text-center text-sm text-slate-500">
          Seguimiento estratégico con un mentor asignado por equipo durante todo el concurso.
        </p>
      </Reveal>
    </Section>
  )
}
