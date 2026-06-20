import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand">
              Chibankz<span className="dot" style={{ color: "var(--orange)" }}>.</span>
            </div>
            <p className="footer-blurb">
              We help small businesses and personal brands grow online with
              clarity, consistency, and content that connects.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
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
              <li><a href="mailto:hello@chibankzmedia.com">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Chibankz Media. All rights reserved.</span>
          <span>Nigeria · Serving brands worldwide · EN</span>
        </div>
      </div>
    </footer>
  );
}
