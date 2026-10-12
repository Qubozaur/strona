import { useEffect, useRef, useState } from 'react'

// Wraps a page section and fades it in the first time it scrolls into view.
// The observer disconnects after firing, so the animation never replays.
export default function Section({ id, num, title, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className="section">
      <div
        ref={ref}
        className={`shell reveal${visible ? ' is-visible' : ''}`}
      >
        <div className="section__head">
          <span className="section__num">{num}</span>
          <h2 className="section__title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
