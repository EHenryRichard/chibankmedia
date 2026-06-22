import { portfolioItems } from '../../../data/content'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="center-heading">
        <p className="section-kicker">Selected work</p>
        <h2>
          Featured
          <br />
          Design Portfolio
        </h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map(([title, image]) => (
          <article key={title} className="portfolio-card">
            <img src={image} alt="" />
            <span>{title}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio


