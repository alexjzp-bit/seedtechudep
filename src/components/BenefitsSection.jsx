import { Section, SectionHeading } from './ui/Section.jsx'
import { FeatureCard } from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'
import { BENEFITS } from '../data/content.js'

export default function BenefitsSection() {
  return (
    <Section id="beneficios" tone="white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-dots-tech opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent)]"
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="Beneficios"
        title="¿Qué recibirán los equipos seleccionados?"
        description="Un acompañamiento completo para llevar tu propuesta desde la idea hasta un prototipo listo para presentar."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, i) => (
          <Reveal key={benefit.title} delay={(i % 3) * 90}>
            <FeatureCard icon={benefit.icon} title={benefit.title} text={benefit.text} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
