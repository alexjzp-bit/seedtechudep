import { useEffect, useRef, useState } from 'react'

/**
 * Aparición suave al entrar en viewport.
 * Si el sistema pide movimiento reducido, el contenido se muestra directamente.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...props }) {
  const Cmp = as
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    /* Si al montar ya está en pantalla, se muestra sin esperar al observer:
       evita cualquier parpadeo en contenido visible desde el inicio. */
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Cmp
      ref={ref}
      className={`reveal-init ${visible ? 'reveal-shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Cmp>
  )
}
