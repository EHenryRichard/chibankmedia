import { clientLogos, trustHeading } from '../../../data/content'
import './FeaturedStrip.css'

function FeaturedStrip() {
  const repeatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="featured-strip" aria-labelledby="featured-heading">
      <div className="featured-heading">
        <p id="featured-heading">{trustHeading}</p>
      </div>

      <div className="press-marquee" aria-label="Client brands">
        <div className="press-track">
          {repeatedLogos.map((logo, index) => (
            <div
              className="press-logo"
              key={`${logo.label}-${index}`}
              style={{
                '--logo-width': logo.width,
                '--logo-position': logo.position || 'center',
              }}
              aria-hidden={index >= clientLogos.length}
            >
              <img src={logo.src} alt={index < clientLogos.length ? logo.label : ''} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedStrip
