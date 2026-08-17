import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SITE } from '../data/content.js'

/**
 * Barra fija de postulación en móvil. Aparece tras dejar atrás el hero
 * y se oculta al llegar al CTA final para no duplicar el mensaje.
 */
export default function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const finalCta = document.getElementById('postula')
      const nearFinal = finalCta
        ? finalCta.getBoundingClientRect().top < window.innerHeight
        : false
      setVisible(window.scrollY > 700 && !nearFinal)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_28px_rgba(0,27,63,0.10)] backdrop-blur-lg transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-2.5">
        <a
          href={SITE.applyTeamUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-seed-500 px-5 py-3 text-[0.95rem] font-semibold text-white shadow-lg shadow-seed-500/25 transition-colors hover:bg-seed-600"
        >
          Postula como equipo
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href={SITE.applyIndividualUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-seed-500 px-4 py-3 text-[0.95rem] font-semibold text-seed-700 transition-colors hover:bg-seed-50"
        >
          Individual
        </a>
      </div>
    </div>
  )
}
