import { services } from '../../../data/content'
import './ServiceSuite.css'

function ServiceSuite() {
  return (
    <section id="services" className="suite-section">
      <div className="suite-heading">
        <p className="section-kicker">The offer suite</p>
        <h2>
          The Iconic Brand
          <br />
          <em>suite</em>
        </h2>
        <p>
          Strategy-first services for founders who need clarity, confidence, and a brand presence
          with staying power.
        </p>
      </div>

      <div className="service-stack">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.title}
            id={index === 3 ? 'strategy' : undefined}
          >
            <div className="service-image">
              <img src={service.image} alt="" />
            </div>
            <div className="service-content">
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <span>{service.copy}</span>
              <a href="#contact">{service.cta}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServiceSuite


