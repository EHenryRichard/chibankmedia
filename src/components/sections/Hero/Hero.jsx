import { images } from '../../../data/content'
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
          Grow Your
          <br />
          Brand Online
          <br />
          Content That
          <br />
          <span className="hero-with">
            truly <span className="strategy-script">connects</span>
          </span>
        </h1>
        <p className="hero-intro">
          <strong>I&apos;M CYNTHIA MASELLI — THE BRAND STRATEGIST™.</strong>
          <br />I HELP BRANDS TURN VISION INTO VISUAL PRESENCE WITH INTENTIONAL
          BRAND IDENTITY, EXPERT STRATEGY, AND HIGH-IMPACT DESIGN.
        </p>
        <a className="button hero-button" href="#contact">
          Request A Meeting
        </a>
      </div>
    </section>
  );
}

export default Hero


