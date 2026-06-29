import { images, blueprint, booking } from '../../../data/content'
import './Blueprint.css'

function Blueprint() {
  return (
    <section id="blueprint" className="blueprint-section">
      <div className="blueprint-head">
        <h2>
          {blueprint.title[0]}
          <br />
          {blueprint.title[1]}
        </h2>
        <p className="blueprint-byline">
          <em>{blueprint.byline}</em>
        </p>
      </div>

      <p className="blueprint-lead">{blueprint.lead}</p>

      <ol className="blueprint-stages">
        {blueprint.stages.map((stage) => (
          <li key={stage.no} className="blueprint-stage">
            <span className="stage-no">{stage.no}</span>
            <div className="stage-text">
              <h3>{stage.name}</h3>
              <p>{stage.copy}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="blueprint-image">
        <img src={images.blueprint} alt="The Chibankz Media Growth Blueprint" />
      </div>

      <p className="blueprint-intro">{blueprint.outro}</p>

      <div className="blueprint-actions">
        <a className="button button-dark" href={booking.href}>
          {booking.label}
        </a>
      </div>
    </section>
  )
}

export default Blueprint
