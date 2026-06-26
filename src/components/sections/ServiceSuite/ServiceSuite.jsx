import { services, servicesHeading, booking } from '../../../data/content'
import './ServiceSuite.css'

function ServiceSuite() {
  return (
    <section id="services" className="suite-section">
      <div className="suite-heading">
        <p className="section-kicker">{servicesHeading.kicker}</p>
        <h2>
          {servicesHeading.title[0]}
          <br />
          <em>{servicesHeading.title[1]}</em>
        </h2>
        <p>{servicesHeading.intro}</p>
      </div>

      <div className="service-stack">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-image">
              <img src={service.image} alt="" />
            </div>
            <div className="service-content">
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <span>{service.copy}</span>
              <a href={booking.href}>{booking.label}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServiceSuite


