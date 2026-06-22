import { audit } from '../../../data/content'
import './Audit.css'

function Audit() {
  return (
    <section className="audit-section">
      <div className="audit-inner">
        <h2>{audit.title}</h2>
        <p className="audit-subtitle">{audit.subtitle}</p>
        <p>{audit.intro}</p>
        <p>{audit.detail}</p>
        <div className="audit-includes">
          <span>Includes:</span>
          <ul>
            {audit.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <a className="button button-dark" href="#contact">
        Request An Audit
      </a>
    </section>
  )
}

export default Audit
