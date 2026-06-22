import { pressLogos } from '../../../data/content'
import './FeaturedStrip.css'

function FeaturedStrip() {
  const repeatedLogos = [...pressLogos, ...pressLogos]

  return (
    <section className="featured-strip" aria-labelledby="featured-heading">
      <div className="featured-heading">
        <p id="featured-heading">Our clients have been featured</p>
      </div>

      <div className="press-marquee" aria-label="Press publications">
        <div className="press-track">
          {repeatedLogos.map((logo, index) => (
            <div
              className="press-logo"
              key={`${logo.label}-${index}`}
              style={{
                '--logo-width': logo.width,
                '--logo-position': logo.position || 'center',
              }}
              aria-hidden={index >= pressLogos.length}
            >
              <img src={logo.src} alt={index < pressLogos.length ? logo.label : ''} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedStrip
