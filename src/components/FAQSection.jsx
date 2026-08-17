import { useState } from 'react'
import { Plus, Mail } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { FAQS, SITE } from '../data/content.js'

function AccordionItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
        open ? 'border-seed-300 shadow-lg shadow-seed-900/6' : 'border-slate-200/80'
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-seed-50/60 sm:px-6"
        >
          <span
            className={`text-[0.98rem] font-semibold sm:text-base ${
              open ? 'text-seed-700' : 'text-navy-950'
            }`}
          >
            {item.q}
          </span>
          <span
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? 'rotate-45 bg-seed-500 text-white' : 'bg-seed-50 text-seed-600'
            }`}
            aria-hidden="true"
          >
            <Plus className="size-4" strokeWidth={2.5} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-slate-600 sm:px-6">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" tone="white">
      <SectionHeading
        eyebrow="Dudas frecuentes"
        title="Preguntas frecuentes"
        description="Las respuestas oficiales a las consultas más comunes sobre la postulación y el desarrollo del concurso."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
            <AccordionItem
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-seed-50 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-seed-600 ring-1 ring-seed-100">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <p className="text-[0.95rem] text-slate-600">
              ¿Tu pregunta no está aquí? Escríbenos y te respondemos.
            </p>
          </div>
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="font-semibold text-seed-700 underline decoration-seed-300 underline-offset-4 transition-colors hover:text-seed-800 hover:decoration-seed-500"
          >
            {SITE.contactEmail}
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
