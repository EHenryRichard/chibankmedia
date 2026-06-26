import { teamRoles } from '../../../data/content'
import './TeamRoles.css'

function TeamRoles() {
  return (
    <section className="team-roles-section" aria-labelledby="team-roles-title">
      <header className="team-roles-header">
        <div>
          <p className="section-kicker">{teamRoles.kicker}</p>
          <h2 id="team-roles-title">
            {teamRoles.title[0]}
            <br />
            <em>{teamRoles.title[1]}</em>
          </h2>
        </div>

        <p className="team-roles-intro">{teamRoles.intro}</p>
      </header>

      <div className="team-roles-grid">
        {teamRoles.members.map((member) => (
          <article className="team-role" key={member.name}>
            <div className="team-role-image">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="team-role-content">
              <span className="team-role-number" aria-hidden="true">
                {member.number}
              </span>
              <p className="team-role-label">{member.role}</p>
              <h3>{member.name}</h3>
              <p className="team-role-copy">{member.copy}</p>

              <ul className="team-role-services" aria-label={`${member.name}'s areas of focus`}>
                {member.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="team-roles-together">
        <span>Together</span>
        <p>{teamRoles.together}</p>
      </div>
    </section>
  )
}

export default TeamRoles
