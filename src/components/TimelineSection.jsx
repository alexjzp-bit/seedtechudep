import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, FileCheck2 } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section.jsx'
import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { HOURS_BREAKDOWN, MACRO_PHASES, TIMELINE } from '../data/content.js'

const CARD_WIDTH = 312 // px — ancho de tarjeta + gap usado por las flechas

function PhaseBadge({ phase }) {
  return (
    <span className="rounded-md bg-seed-50 px-2 py-1 text-[0.65rem] font-bold tracking-widest text-seed-700 uppercase ring-1 ring-seed-100">
      {phase}
    </span>
  )
}

function Deliverable({ label }) {
  return (
    <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-hub-yellow/12 px-3 py-2 text-[0.78rem] font-bold text-navy-900 ring-1 ring-hub-yellow/35">
      <FileCheck2 className="size-4 text-navy-800" aria-hidden="true" />
      {label}
    </p>
  )
}

function PhaseBody({ item }) {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <PhaseBadge phase={item.phase} />
        <span className="text-[0.78rem] font-semibold text-slate-500">{item.mode}</span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-navy-950">{item.title}</h3>
      <p className="mt-1 text-sm font-bold text-seed-600">{item.date}</p>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600">{item.activity}</p>
      {item.hours && (
        <p className="mt-3 flex w-fit max-w-full items-start gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 text-[0.72rem] font-medium text-slate-500 ring-1 ring-slate-200/70">
          <Clock className="size-3.5" aria-hidden="true" />
          {item.hours}
        </p>
      )}
      {item.deliverable && <Deliverable label={item.deliverable} />}
    </>
  )
}

export default function TimelineSection() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * CARD_WIDTH, behavior: 'smooth' })
  }

  return (
    <Section id="cronograma" tone="light">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Cronograma 2026"
          title="Cronograma SeedTech UDEP 2026"
          description="Ocho fases, desde la convocatoria hasta el Demo Day, con tres entregables durante el proceso."
          className="max-w-2xl"
        />

        {/* Flechas del carrusel — sólo desktop */}
        <div className="hidden shrink-0 gap-3 lg:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Ver fases anteriores"
            className="inline-flex size-12 items-center justify-center rounded-full border-2 border-seed-200 bg-white text-seed-700 transition-all hover:border-seed-500 hover:bg-seed-50 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-seed-200 disabled:hover:bg-white"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Ver fases siguientes"
            className="inline-flex size-12 items-center justify-center rounded-full border-2 border-seed-200 bg-white text-seed-700 transition-all hover:border-seed-500 hover:bg-seed-50 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-seed-200 disabled:hover:bg-white"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Vista macro: las cuatro grandes fases */}
      <Reveal delay={60} className="mt-12">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MACRO_PHASES.map((phase, i) => (
            <li
              key={phase.label}
              className="flex items-start gap-3.5 rounded-2xl border border-seed-100 bg-white px-4 py-3.5"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-seed-50 text-seed-600">
                <Icon name={phase.icon} className="size-4.5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.7rem] font-bold tracking-[0.12em] text-slate-500 uppercase">
                  Fase {i + 1}
                </p>
                <p className="text-[0.9rem] leading-snug font-bold text-navy-950">{phase.label}</p>
                <p className="mt-1 text-[0.8rem] font-semibold text-seed-600">{phase.date}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* ---------- Timeline horizontal (desktop) ---------- */}
      <div className="relative mt-10 hidden lg:block">
        <div
          ref={trackRef}
          className="no-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4"
        >
          <ol className="flex gap-6">
            {TIMELINE.map((item, i) => {
              const first = i === 0
              const last = i === TIMELINE.length - 1
              return (
                <li key={`${item.phase}-${item.title}`} className="w-72 shrink-0 snap-start">
                  {/* rail + nodo */}
                  <div className="relative h-12" aria-hidden="true">
                    <span
                      className="absolute top-5 h-0.5 bg-seed-200"
                      style={{
                        left: first ? '1.5rem' : '-0.75rem',
                        right: last ? 'calc(100% - 1.75rem)' : '-0.75rem',
                      }}
                    />
                    <span className="absolute top-5 left-4 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white ring-2 ring-seed-200">
                      <span className="flex size-6 items-center justify-center rounded-full bg-linear-to-br from-seed-500 to-navy-800 text-white">
                        <Icon name={item.icon} className="size-3.5" strokeWidth={2.2} />
                      </span>
                    </span>
                  </div>

                  <div className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-seed-300 hover:shadow-xl hover:shadow-seed-900/8">
                    <PhaseBody item={item} />
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* difuminado que sugiere contenido desplazable */}
        {!atEnd && (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-seed-50/95 to-transparent"
            aria-hidden="true"
          />
        )}
      </div>

      {/* ---------- Timeline vertical (mobile / tablet) ---------- */}
      <ol className="mt-10 lg:hidden">
        {TIMELINE.map((item, i) => (
          <li key={`${item.phase}-${item.title}`} className="relative flex gap-5 pb-6 last:pb-0">
            {/* rail */}
            <div className="relative flex flex-col items-center" aria-hidden="true">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-seed-200">
                <span className="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-seed-500 to-navy-800 text-white">
                  <Icon name={item.icon} className="size-4" strokeWidth={2.2} />
                </span>
              </span>
              {i < TIMELINE.length - 1 && <span className="mt-1 w-0.5 grow bg-seed-200" />}
            </div>

            <Reveal className="min-w-0 flex-1">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-5 transition-colors hover:border-seed-300 sm:p-6">
                <PhaseBody item={item} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Desglose de las 34 horas lectivas */}
      <Reveal delay={80} className="mt-12">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-seed-100 bg-white px-6 py-7 lg:flex-row lg:justify-between lg:px-9">
          <div className="text-center lg:text-left">
            <p className="font-display text-xl font-extrabold text-navy-950">
              34 horas lectivas en total
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Equivalentes a 1 CLC para CC.EE.EE. e Ingeniería y Arquitectura.
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {HOURS_BREAKDOWN.map((h, i) => (
              <li key={h.label} className="flex items-center gap-2.5">
                <span className="rounded-xl bg-seed-50 px-3.5 py-2 text-sm ring-1 ring-seed-100">
                  <strong className="font-bold text-seed-700">{h.value}</strong>{' '}
                  <span className="text-slate-500">{h.label}</span>
                </span>
                {i < HOURS_BREAKDOWN.length - 1 && (
                  <span className="text-slate-300" aria-hidden="true">
                    +
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-sm text-slate-500">
        El comité organizador se reserva el derecho de modificar el cronograma, las fechas y los
        horarios según convenga para el desarrollo del concurso.
      </p>
    </Section>
  )
}
