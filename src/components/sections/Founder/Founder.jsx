import { about, booking, images } from '../../../data/content'
import './Founder.css'

function Founder() {
  return (
    <section id="about" className="founder-section">
      <div className="founder-intro">
        <p className="founder-script">{about.script}</p>
        <h2>
          {about.title[0]}
          <br />
          {about.title[1]}
        </h2>
        <p className="founder-note">{about.intro}</p>
        <div className="founder-actions">
          <a className="button button-light" href={booking.href}>
            {booking.label}
          </a>
        </div>
      </div>

      <div className="founder-visual">
        <div className="founder-portrait">
          <img src={images.founder} alt={about.name} />
        </div>

        <div className="founder-strengths">
          <strong>{about.name}</strong>
          <span>{about.highlight}</span>
        </div>
      </div>

      <div className="founder-bio">
        {about.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default Founder
