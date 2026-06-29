import { images, hero, booking } from '../../../data/content'
import './Hero.css'

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        '--hero-image': `url(${images.heroPortrait})`,
        '--hero-mobile-image': `url(${images.heroPortraitMobile})`,
      }}
    >
      <div className="hero-copy">
        <h1>
          {hero.headlineLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
          <span className="hero-with">
            <span className="strategy-script">{hero.headlineScript}</span>
          </span>
        </h1>
        <div className="hero-intro">
          {hero.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a className="button hero-button" href={booking.href}>
          {booking.label}
        </a>
      </div>
    </section>
  );
}

export default Hero

