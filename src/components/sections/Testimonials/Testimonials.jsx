import { testimonials } from '../../../data/content'
import './Testimonials.css'

function Testimonials() {
  return (
    <section className="love-section">
      <div className="love-heading">
        <h2>
          Client
          <br />
          <em>love</em>
        </h2>
      </div>
      <div className="testimonial-row">
        {testimonials.map((item) => (
          <figure key={item.name}>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <span>{item.name}</span>
              <strong>{item.brand}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="testimonial-arrows" aria-hidden="true">
        <span>←</span>
        <span>→</span>
      </div>
    </section>
  )
}

export default Testimonials
