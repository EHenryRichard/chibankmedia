import { whyUs, booking } from '../../../data/content'
import './Audit.css'

function Audit() {
  return (
    <section className="audit-section">
      <div className="audit-inner">
        <h2>{whyUs.title}</h2>
        <p className="audit-subtitle">{whyUs.subtitle}</p>
        <p>{whyUs.intro}</p>
        <p>{whyUs.detail}</p>
        <div className="audit-includes">
          <span>What sets us apart:</span>
          <ul>
            {whyUs.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <a className="button button-dark" href={booking.href}>
        {booking.label}
      </a>
    </section>
  )
}

export default Audit
