import { useCallback, useEffect, useRef, useState } from 'react'
import { reviewsLink, testimonials } from '../../../data/content'
import './Testimonials.css'

function Testimonials() {
  const testimonialRow = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const moveTestimonials = useCallback((direction) => {
    const row = testimonialRow.current
    const card = row?.querySelector('figure')

    if (!row || !card) return

    const distance = card.offsetWidth + 24
    const lastPosition = row.scrollWidth - row.clientWidth

    if (direction > 0 && row.scrollLeft + distance >= lastPosition - 8) {
      row.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    if (direction < 0 && row.scrollLeft <= 8) {
      row.scrollTo({ left: lastPosition, behavior: 'smooth' })
      return
    }

    row.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isPaused || prefersReducedMotion) return undefined

    const timer = window.setInterval(() => moveTestimonials(1), 4200)
    return () => window.clearInterval(timer)
  }, [isPaused, moveTestimonials])

  return (
    <section className="love-section">
      <div className="love-heading">
        <h2>
          Client
          <br />
          <em>love</em>
        </h2>
      </div>

      <div
        className="testimonial-row"
        ref={testimonialRow}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        {testimonials.map((item) => (
          <figure key={item.name}>
            <p className="testimonial-rating">5.0 / 5</p>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <span>{item.name}</span>
              <strong>{item.brand}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="testimonial-controls">
        <div className="testimonial-arrows">
          <button type="button" aria-label="Previous testimonials" onClick={() => moveTestimonials(-1)}>
            &larr;
          </button>
          <button type="button" aria-label="Next testimonials" onClick={() => moveTestimonials(1)}>
            &rarr;
          </button>
        </div>

        <a className="testimonial-more" href={reviewsLink} target="_blank" rel="noreferrer">
          View More Reviews
        </a>
      </div>
    </section>
  )
}

export default Testimonials
