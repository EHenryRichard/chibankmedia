import { images, closing, booking } from '../../../data/content'
import './Closing.css'

function Closing() {
  return (
    <section id="contact" className="closing-section">
      <h2>
        {closing.title[0]}
        <br />
        {closing.title[1]} <em>{closing.titleScript}</em>
      </h2>
      <div className="closing-card">
        <img src={images.closing} alt="" />
        <div className="closing-panel">
          <p className="closing-body">{closing.body}</p>
          <a className="button button-light" href={booking.href}>
            {booking.label}
          </a>
        </div>
      </div>
      <div className="closing-mobile-cta">
        <a className="button button-dark" href={booking.href}>
          {booking.label}
        </a>
      </div>
    </section>
  )
}

export default Closing
