import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="wordmark">
              Chibankz<span style={{ color: "var(--orange)" }}>.</span>
            </div>
            <p className="footer-tagline">
              Helping small businesses and personal brands grow online with
              clarity, consistency, and content that connects.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:hello@chibankzmedia.com">hello@chibankzmedia.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Chibankz Media. All rights reserved.</span>
          <span>Nigeria &nbsp;·&nbsp; Serving brands worldwide</span>
        </div>
      </div>
    </footer>
  );
}
