import Icon from './ui/Icon.jsx'
import Reveal from './ui/Reveal.jsx'
import { STATS } from '../data/content.js'

/** Métricas del concurso, en una tarjeta que se monta sobre el hero. */
export default function StatsBar() {
  return (
    <div className="relative z-10 -mt-28 sm:-mt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white shadow-2xl shadow-navy-950/12">
          <dl className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center gap-2 p-5 text-center transition-colors hover:bg-seed-50/70 sm:p-6"
              >
                <Icon
                  name={stat.icon}
                  className="size-5 text-seed-600 transition-transform duration-300 group-hover:scale-115"
                />
                <dd className="font-display text-xl leading-none font-extrabold text-navy-950 sm:text-2xl">
                  {stat.value}
                </dd>
                <dt className="text-[0.78rem] leading-snug text-slate-600 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
          El capital semilla total resulta de los premios por categoría: S/ 5,000 y S/ 2,500 en
          Emprendimientos Tecnológicos, y S/ 5,000 y S/ 2,500 en la Línea de Economía Circular.
        </p>
      </div>
    </div>
  )
}
