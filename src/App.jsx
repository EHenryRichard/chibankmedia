import { useState } from 'react'
import './App.css'

const cdn = 'https://images.squarespace-cdn.com/content/v1/623364b318b00b6031d1cf18'

const images = {
  logo: `${cdn}/58b04c92-21f2-401d-810e-cbb2a4d58f15/image+40.png?format=500w`,
  hero: `${cdn}/45f6a5c3-ccb8-42c6-bc6b-9d8b15190f62/TBS%2BLaptop+1.jpg?format=1000w`,
  heroAlt: `${cdn}/bea76795-9a73-4002-89df-bcda818547c0/Custom+Website+and+Design.png?format=1000w`,
  blueprint: `${cdn}/4e1b1812-d169-49e7-9de9-dc230fa20a28/The%2BIconic%2BBrand%2BBlueprint.png?format=1000w`,
  blueprintCover: `${cdn}/854cba77-a5d2-4942-8b26-aec4ea11f4e1/The%2BIconic%2BBrand%2BBlueprint.webp?format=750w`,
  iconicBrand: `${cdn}/e58ca6f4-209a-41ec-8b29-7cfdcbbfb23f/The+Iconic+Brand.jpg?format=1000w`,
  personalBrand: `${cdn}/0f731df7-5661-44c8-8c6b-f1dbc3aafa68/The+Iconic+Personal+Brand.png?format=1000w`,
  strategyLine: `${cdn}/4725c73f-afc2-4d4d-bfb5-74580ca758ad/The+Strategy+Line.jpg?format=1000w`,
  impact: `${cdn}/50649937-0210-4f03-b054-0eb576921f81/17.jpg?format=1000w`,
  portfolioOne: `${cdn}/f4953755-2752-4530-84fc-ef31328977ab/rt.jpg?format=750w`,
  portfolioTwo: `${cdn}/d09ab87d-4315-4b32-ac80-99db9d28cc10/Rectangle+40+%283%29.jpg?format=750w`,
  portfolioThree: `${cdn}/f9d14597-20c8-491b-b972-82c52ee1b0d3/Rectangle+41+%281%29.jpg?format=750w`,
  portfolioFour: `${cdn}/89472764-c0da-46ea-b9cd-40c105d4867a/Rectangle+43.jpg?format=750w`,
  founder: `${cdn}/312588b5-3294-4afc-a271-248cdbd8231e/CynthiaMaselli?format=1000w`,
  closing: `${cdn}/1777254325427-PB0YKBYK904BG83NS44Z/image-asset.jpeg?format=1000w`,
}

const navItems = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['The Blueprint', '#blueprint'],
  ['The Strategy Line', '#strategy'],
  ['Contact', '#contact'],
]

const seenIn = [
  'E! News',
  'The Zoe Report',
  'Conde Nast Traveler',
  'Byrdie',
  'ABC',
  'CBN',
  'Goop',
  'Vanity Fair',
  'Cosmopolitan',
]

const services = [
  {
    title: 'The Iconic Brand',
    eyebrow: 'Identity service',
    image: images.iconicBrand,
    copy:
      'A refined brand identity process for founders who need strategy, visuals, and standards that hold together everywhere the business appears.',
    cta: 'Request Initial Consult',
  },
  {
    title: 'The Iconic Personal Brand',
    eyebrow: 'Presence, story, direction',
    image: images.personalBrand,
    copy:
      'A full-service experience for leaders ready to align their voice, image, website, and social presence around a clear strategic point of view.',
    cta: 'Request Initial Consult',
  },
  {
    title: 'Website Design & Development',
    eyebrow: 'Digital presence',
    image: images.heroAlt,
    copy:
      'Custom web direction, copy structure, and design built to feel elevated on the surface and purposeful underneath.',
    cta: 'Request A Proposal',
  },
  {
    title: 'The Strategy Line',
    eyebrow: '1:1 advisory',
    image: images.strategyLine,
    copy:
      'A focused partnership for brand and business decisions, created for entrepreneurs who want a strategist close to the work.',
    cta: 'Learn More + Apply',
  },
]

const portfolioItems = [
  ['Iconic Logo Designs', images.portfolioOne],
  ['Before & Afters', images.portfolioTwo],
  ['Podcast Branding', images.portfolioThree],
  ['Brand Style Guides', images.portfolioFour],
  ['Website Designs', images.heroAlt],
  ['Personal Branding', images.personalBrand],
]

const testimonials = [
  {
    quote:
      'The process felt clear, high touch, and beautifully strategic from the first call through the final delivery.',
    name: 'Ashlee Frazier-Williams',
    brand: 'Anea Hill',
  },
  {
    quote:
      'Our site finally feels like us: polished, intentional, and aligned with the clients we want to reach.',
    name: 'Brianna',
    brand: 'Milk + Honey Travels',
  },
  {
    quote:
      'Every detail had purpose. The result was refined, useful, and much stronger than anything we could have pieced together alone.',
    name: 'Ashley',
    brand: 'The Social Well Creative',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#home" aria-label="The Brand Strategist home">
          <img src={images.logo} alt="" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a className="portal-link" href="#contact">
            Client Portal
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-panel ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu}>
          Client Portal
        </a>
      </div>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="section-kicker">The Brand Strategist</p>
            <h1>
              Designing
              <br />
              iconic brands
              <br />
              that lead
              <br />
              with <em>strategy</em>
            </h1>
            <p className="hero-intro">
              Founder-led brand strategy, identity direction, and web design for ambitious
              businesses ready to look as precise as they are.
            </p>
            <a className="button button-light" href="#contact">
              Start With Strategy
            </a>
          </div>

          <div className="hero-media" aria-label="Editorial brand desk collage">
            <img className="hero-photo hero-photo-main" src={images.hero} alt="" />
            <img className="hero-photo hero-photo-overlap" src={images.heroAlt} alt="" />
            <div className="hero-card">
              <span>Signature framework</span>
              <strong>Vision to visual presence</strong>
            </div>
          </div>
        </section>

        <section className="featured-strip" aria-labelledby="featured-heading">
          <p id="featured-heading">Our clients have been featured</p>
          <div className="publication-grid">
            {seenIn.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </section>

        <section id="blueprint" className="blueprint-section">
          <div className="blueprint-image">
            <img src={images.blueprint} alt="The Iconic Brand Blueprint workbook mockup" />
          </div>
          <div className="blueprint-copy">
            <p className="section-kicker">New signature resource</p>
            <h2>
              The Iconic
              <br />
              Brand Blueprint
            </h2>
            <p>
              A hardcover workbook concept for turning brand development, business clarity, and
              marketing decisions into one disciplined system.
            </p>
            <div className="button-row">
              <a className="button button-dark" href="#contact">
                Order Now
              </a>
              <a className="text-link" href="#services">
                Explore what's inside
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="suite-section">
          <div className="suite-heading">
            <p className="section-kicker">The offer suite</p>
            <h2>
              The Iconic Brand
              <br />
              <em>suite</em>
            </h2>
            <p>
              Strategy-first services for founders who need clarity, confidence, and a brand
              presence with staying power.
            </p>
          </div>

          <div className="service-stack">
            {services.map((service, index) => (
              <article className="service-card" key={service.title} id={index === 3 ? 'strategy' : undefined}>
                <div className="service-image">
                  <img src={service.image} alt="" />
                </div>
                <div className="service-content">
                  <p>{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <span>{service.copy}</span>
                  <a href="#contact">{service.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="audit-section">
          <div>
            <p className="section-kicker">Focused review</p>
            <h2>The Iconic Brand Audit</h2>
          </div>
          <p>
            A strategic review of the brand you already have, designed to identify what is working,
            what is drifting, and what needs to be tightened before your next visible move.
          </p>
          <a className="button button-dark" href="#contact">
            Request An Audit
          </a>
        </section>

        <section className="impact-section">
          <div className="impact-copy">
            <p className="section-kicker">Social Impact</p>
            <h2>
              The Social Impact
              <br />
              <em>division</em>
            </h2>
            <p>
              A dedicated studio lane for nonprofits, ministries, and purpose-driven organizations
              that need their mission communicated with clarity and excellence.
            </p>
            <a className="button button-light" href="#contact">
              Let's Start The Conversation
            </a>
          </div>
          <img src={images.impact} alt="" />
        </section>

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

        <section className="love-section">
          <div className="love-heading">
            <h2>
              Client <em>love</em>
            </h2>
          </div>
          <div className="testimonial-row">
            {testimonials.map((item) => (
              <figure key={item.name}>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.brand}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="founder-section">
          <div className="founder-title">
            <p className="section-kicker">The Brand Strategist</p>
            <h2>Meet Cynthia</h2>
          </div>
          <div className="founder-grid">
            <img src={images.founder} alt="Cynthia Maselli" />
            <div>
              <p className="strengths">
                Individualization / Developer / Strategic / Achiever / Learner
              </p>
              <p>
                A brand identity, marketing, and business strategy expert with a refined creative
                lens and a practical understanding of how strong brands are built.
              </p>
              <p>
                Her work blends clear thinking with elevated design direction so founders can make
                better decisions and show up with more authority.
              </p>
              <div className="button-row">
                <a className="button button-light" href="#contact">
                  Work 1:1 With Me
                </a>
                <a className="text-link text-link-light" href="#contact">
                  Speaking Inquiries
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="closing-section">
          <div className="closing-image">
            <img src={images.closing} alt="" />
          </div>
          <div className="closing-copy">
            <h2>
              Let's build something
              <br />
              <em>iconic</em>
            </h2>
            <a className="button button-dark" href="mailto:hello@thebrandstrategist.co">
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={images.logo} alt="" />
          <p>
            Founder-led strategy, refined design, and digital direction for brands built to lead.
          </p>
        </div>
        <div className="footer-links">
          <a href="#blueprint">Brand Blueprint</a>
          <a href="#services">Brand Audit</a>
          <a href="#strategy">Strategy Line</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">A MLuxe Media, LLC company. Inspired recreation for local preview.</p>
      </footer>
    </div>
  )
}

export default App
