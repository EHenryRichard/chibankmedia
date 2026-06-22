import { impact } from '../../../data/content'
import './Impact.css'

function Impact() {
  return (
    <section className="impact-section">
      <div className="impact-hero">
        <div className="impact-copy">
          <h2>
            {impact.title}
            <br />
            <em>division</em>
          </h2>
          <p>{impact.subtitle}</p>
          <p>{impact.body}</p>
          <a className="button button-light" href="#contact">
            Let&apos;s Start The Conversation
          </a>
          <p className="impact-note">{impact.note}</p>
        </div>
      </div>

      <div className="impact-support">
        <div className="impact-support-title">
          <h3>
            Make an impact
            <br />
            <em>with us</em>
          </h3>
        </div>
        <div className="impact-support-copy">
          <p>{impact.support}</p>
          <a className="button button-dark" href="#contact">
            Support A Cause
          </a>
        </div>
      </div>
    </section>
  )
}

export default Impact
