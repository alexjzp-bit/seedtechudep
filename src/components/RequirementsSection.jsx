import { CircleCheck, UserPlus } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section.jsx'
import Card, { CardIcon, FeatureCard } from './ui/Card.jsx'
import Button from './ui/Button.jsx'
import Reveal from './ui/Reveal.jsx'
import {
  PROJECT_REQUIREMENTS,
  PROJECT_STAGES,
  SITE,
  TEAM_REQUIREMENTS,
  THEMATIC_LINES,
} from '../data/content.js'

function CheckList({ items }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CircleCheck className="mt-0.5 size-5 shrink-0 text-seed-500" aria-hidden="true" />
          <span className="text-[0.95rem] leading-relaxed text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function RequirementsSection() {
  return (
    <Section id="requisitos" tone="light">
      <SectionHeading
        eyebrow="Quiénes pueden participar"
        title="Requisitos para participar"
        description="Tres condiciones definen una postulación válida: cómo se conforma el equipo, qué debe proponer el proyecto y en qué etapa se encuentra."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Equipo */}
        <Reveal>
          <Card className="h-full">
            <div className="flex items-center gap-4">
              <CardIcon name="Users" />
              <h3 className="text-xl font-bold text-navy-950">Equipo</h3>
            </div>
            <CheckList items={TEAM_REQUIREMENTS} />
          </Card>
        </Reveal>

        {/* Proyecto */}
        <Reveal delay={100}>
          <Card className="h-full">
            <div className="flex items-center gap-4">
              <CardIcon name="Settings" />
              <h3 className="text-xl font-bold text-navy-950">Proyecto</h3>
            </div>
            <CheckList items={PROJECT_REQUIREMENTS} />

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-xs font-bold tracking-[0.12em] text-slate-500 uppercase">
                Líneas prioritarias
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {THEMATIC_LINES.map((line) => (
                  <li
                    key={line}
                    className="rounded-full bg-seed-50 px-3 py-1.5 text-[0.8rem] font-medium text-seed-700 ring-1 ring-seed-100"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* Callout: postulación individual */}
      <Reveal delay={80} className="mt-6">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-900 to-navy-950 p-7 sm:p-9">
          <div className="absolute inset-0 bg-grid-tech opacity-70" aria-hidden="true" />
          <div
            className="absolute -top-20 -right-16 size-64 rounded-full bg-seed-500/25 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-hub-yellow/15 text-hub-yellow ring-1 ring-hub-yellow/25 sm:inline-flex">
                <UserPlus className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  ¿No tienes equipo completo?
                </h3>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-slate-300">
                  Si tienes un proyecto, o te faltan integrantes para completar tu equipo, puedes
                  postular individualmente. El equipo organizador te contactará para que puedas
                  continuar el proceso.
                </p>
              </div>
            </div>

            <Button
              href={SITE.applyIndividualUrl}
              variant="white"
              className="w-full shrink-0 lg:w-auto"
            >
              Postular individualmente
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Etapa del proyecto */}
      <div className="mt-16">
        <Reveal className="text-center">
          <h3 className="text-2xl font-bold text-navy-950 sm:text-3xl">Etapa del proyecto</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Puedes postular en cualquiera de estas dos etapas.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECT_STAGES.map((stage, i) => (
            <Reveal key={stage.title} delay={i * 110}>
              <FeatureCard
                icon={stage.icon}
                eyebrow={`Etapa ${i + 1}`}
                title={stage.title}
                text={stage.text}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
