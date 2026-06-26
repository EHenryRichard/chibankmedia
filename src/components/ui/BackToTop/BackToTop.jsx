import { useEffect, useState } from 'react'
import './BackToTop.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 480)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
      type="button"
      aria-label="Back to top"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
      </svg>
    </button>
  )
}

export default BackToTop
