import { footerLinks } from '../../../data/content'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-links footer-links-primary" aria-label="Footer primary navigation">
        {footerLinks.slice(0, 4).map((item) => (
          <a key={item} href="#contact">
            {item}
          </a>
        ))}
      </nav>
      <nav className="footer-links footer-links-secondary" aria-label="Footer secondary navigation">
        {footerLinks.slice(4).map((item) => (
          <a key={item} href="#contact">
            {item}
          </a>
        ))}
      </nav>
      <p className="footer-bio">
        Cynthia Maselli is The Brand Strategist™ - founder, creative director, and brand and
        business strategist recognized for her signature framework that blends strategic insight
        with refined design.
      </p>
      <div className="footer-legal">
        <a href="#contact">Privacy</a>
        <a href="#contact">Terms And Conditions</a>
      </div>
      <p className="copyright">
        A MLuxe Media, LLC company © 2018-2026 | All rights reserved | Privacy | Terms & Conditions
      </p>
    </footer>
  )
}

export default Footer
