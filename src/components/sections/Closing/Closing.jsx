import { images } from '../../../data/content'
import './Closing.css'

function Closing() {
  return (
    <section id="contact" className="closing-section">
      <h2>
        Let&apos;s build something
        <em>iconic</em>
      </h2>
      <div className="closing-card">
        <img src={images.closing} alt="" />
        <div className="closing-panel">
          <a className="button button-light" href="mailto:hello@thebrandstrategist.co">
            Get The Monthly Exclusives Here
          </a>
        </div>
      </div>
      <div className="closing-mobile-cta">
        <a className="button button-dark" href="mailto:hello@thebrandstrategist.co">
          Get In Touch
        </a>
      </div>
    </section>
  )
}

export default Closing
