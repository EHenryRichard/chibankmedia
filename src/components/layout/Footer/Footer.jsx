import { brand, booking, images, footerLinks, footerBio, footerFeed, social } from '../../../data/content'
import BrandMark from '../BrandMark/BrandMark'
import './Footer.css'

const footerTargets = {
  'The Chibankz Media Growth Blueprint': '#blueprint',
  'Social Media Management': '#services',
  'Content Creation': '#services',
  'Instagram Growth': '#services',
  'Paid Advertising': '#services',
  'Case Studies': '#work',
  About: '#about',
  Contact: '#contact',
}

function Footer() {
  const feedImages = [...footerFeed, ...footerFeed]

  return (
    <footer id="footer" className="site-footer">
      <section className="footer-grid" aria-labelledby="footer-hero-title">
        <h2 id="footer-hero-title" className="footer-hero-title">
          <span>Let's build something</span>
        </h2>
        <p className="footer-script">remarkable</p>

        <div className="footer-feature">
          <img src={images.heroPortrait} alt="" />
          <a className="footer-newsletter" href={booking.href}>
            Work With Us
          </a>
          <a className="footer-newsletter" href="#services">
            Explore Our Services
          </a>
        </div>

        <nav className="footer-links footer-links-primary" aria-label="Footer primary navigation">
          {footerLinks.slice(0, 4).map((item) => (
            <a key={item} href={footerTargets[item] || '#contact'}>
              {item}
            </a>
          ))}
        </nav>

        <nav className="footer-links footer-links-secondary" aria-label="Footer secondary navigation">
          {footerLinks.slice(4).map((item) => (
            <a key={item} href={footerTargets[item] || '#contact'}>
              {item}
            </a>
          ))}
        </nav>

        <a className="footer-logo" href="#home" aria-label={`${brand.name} home`}>
          <BrandMark />
        </a>

        <p className="footer-bio">{footerBio}</p>

        <div className="footer-legal">
          <a href="#contact">Privacy</a>
          <a href="#contact">Terms And Conditions</a>
        </div>

        <div className="footer-feed" aria-label={`${brand.name} Instagram feed`}>
          {feedImages.map((src, index) => (
            <a
              key={`${src}-${index}`}
              className="footer-feed-item"
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${brand.name} on Instagram, post ${index + 1}`}
            >
              <img src={src} alt="" />
            </a>
          ))}
        </div>

        <p className="copyright">
          A {brand.name} company &copy; 2026 | All rights reserved | Privacy | Terms &amp;
          Conditions
        </p>
      </section>
    </footer>
  )
}

export default Footer
