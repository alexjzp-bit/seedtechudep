import { Award, Trophy, Medal } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section.jsx'
import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { PRIZES, PRIZE_EXTRAS } from '../data/content.js'

function PrizeRow({ place, amount, highlight = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-4 ${
        highlight ? 'bg-seed-500/15 ring-1 ring-seed-400/30' : 'bg-white/5 ring-1 ring-white/10'
      }`}
    >
      <span className="flex items-center gap-2.5 text-sm font-medium text-slate-300">
        <Medal
          className={`size-4 ${highlight ? 'text-hub-yellow' : 'text-slate-400'}`}
          aria-hidden="true"
        />
        {place}
      </span>
      <span
        className={`font-display text-xl font-extrabold sm:text-2xl ${
          highlight ? 'text-white' : 'text-slate-200'
        }`}
      >
        {amount}
      </span>
    </div>
  )
}

export default function PrizeSection() {
  return (
    <Section id="premios" tone="navy" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-10 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-seed-500/12 blur-[130px]"
        aria-hidden="true"
      />

      <SectionHeading
        dark
        eyebrow="Capital semilla"
        title="Capital semilla para los mejores equipos"
        description="Dos categorías, cuatro premios y S/ 15,000 en total para impulsar las propuestas ganadoras."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {PRIZES.map((prize, i) => (
          <Reveal key={prize.category} delay={i * 110}>
            <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-seed-400/50 hover:bg-white/[0.07] sm:p-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-seed-500/15 text-seed-300 ring-1 ring-seed-400/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={prize.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{prize.category}</h3>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-slate-300/90">
                    {prize.note}
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <PrizeRow place="1.er puesto" amount={prize.first} highlight />
                <PrizeRow place="2.do puesto" amount={prize.second} />
              </div>

              <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/8 pt-5">
                {PRIZE_EXTRAS.map((extra) => (
                  <li
                    key={extra}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[0.78rem] text-slate-300 ring-1 ring-white/10"
                  >
                    <Award className="size-3.5 text-hub-yellow" aria-hidden="true" />
                    {extra}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Total */}
      <Reveal delay={120} className="mt-6">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-seed-400/30 bg-seed-500/10 px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-hub-yellow/20 text-hub-yellow ring-1 ring-hub-yellow/30">
            <Trophy className="size-6" aria-hidden="true" />
          </span>
          <p className="font-display text-xl font-extrabold text-white sm:text-2xl">
            4 ganadores en total
            <span className="mt-1 block font-sans text-sm font-medium text-slate-200 sm:text-base">
              S/ 15,000 en capital semilla distribuidos entre las dos categorías.
            </span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-400">
          Los proyectos de economía circular compiten en una línea específica. La economía circular
          promueve el uso eficiente de recursos, la reducción de residuos, la permanencia de
          productos y materiales en uso, y la regeneración de sistemas naturales.
        </p>
      </Reveal>
    </Section>
  )
}
