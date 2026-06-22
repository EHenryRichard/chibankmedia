import { founder } from '../../../data/content'
import './Founder.css'

function Founder() {
  return (
    <section className="founder-section">
      <div className="founder-intro">
        <p className="founder-script">Meet Cynthia</p>
        <h2>{founder.title}</h2>
        <p className="founder-note">{founder.intro}</p>
        <div className="founder-actions">
          <a className="button button-light" href="#contact">
            Work 1:1 With Me
          </a>
          <a className="button button-light" href="#contact">
            Speaking Inquiries
          </a>
        </div>
      </div>

      <div className="founder-strengths">
        <strong>Strengths Finder Profile</strong>
        <span>{founder.strengths}</span>
      </div>

      <div className="founder-bio">
        {founder.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default Founder
