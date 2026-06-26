import { stats, booking, images } from '../../../data/content'
import './Impact.css'

function Impact() {
  return (
    <section className="impact-section">
      <div className="impact-hero">
        <div className="impact-visual">
          <img src={images.impact} alt="Chidinma, co-founder of Chibankz" />
        </div>

        <div className="impact-copy">
          <h2>
            {stats.heading[0]}
            <br />
            <em>{stats.heading[1]}</em>
          </h2>
          <p>{stats.intro}</p>

          <div className="impact-stats">
            {stats.items.map((item) => (
              <div className="impact-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <a className="button button-light" href={booking.href}>
            {booking.label}
          </a>
          <p className="impact-note">{stats.cta}</p>
        </div>
      </div>
    </section>
  )
}

export default Impact
