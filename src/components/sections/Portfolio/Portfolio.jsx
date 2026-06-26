import { caseStudies, caseStudiesHeading } from '../../../data/content'
import './Portfolio.css'

function Portfolio() {
  return (
    <section id="work" className="portfolio-section">
      <div className="center-heading">
        <p className="section-kicker">{caseStudiesHeading.kicker}</p>
        <h2>
          {caseStudiesHeading.title[0]}
          <br />
          {caseStudiesHeading.title[1]}
        </h2>
      </div>

      <div className="case-stack">
        {caseStudies.map((item, index) => (
          <article
            key={item.client}
            className={`case-card ${index % 2 === 1 ? 'is-reversed' : ''}`}
          >
            <div className="case-image">
              <img src={item.image} alt={`${item.client} social media work`} />
              <div className="case-metric">
                <strong>{item.metric.value}</strong>
                <span>{item.metric.label}</span>
              </div>
            </div>

            <div className="case-content">
              <h3>{item.client}</h3>
              <p className="case-industry">{item.industry}</p>

              <dl className="case-detail">
                <dt>Challenge</dt>
                <dd>{item.challenge}</dd>
                <dt>What we did</dt>
                <dd>{item.action}</dd>
                <dt>Result</dt>
                <dd className="case-result">{item.result}</dd>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
