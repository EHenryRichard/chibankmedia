import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Chat with Chibankz Media. Tell us about your brand and let's build a social presence that connects.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label r">Get In Touch</span>
          <h1 className="r">
            Let&apos;s build your brand <em>together.</em>
          </h1>
          <p className="body-lg r delay-1" style={{ marginTop: "1rem" }}>
            Tell us about your business and where you want to go. We usually
            reply within one working day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="r">
            <ContactForm />
          </div>

          <aside className="contact-info-list r delay-1">
            <div className="ci-item">
              <div className="ci-k">Email</div>
              <div className="ci-v">
                <a href="mailto:hello@chibankzmedia.com">
                  hello@chibankzmedia.com
                </a>
              </div>
            </div>

            <div className="ci-item">
              <div className="ci-k">Based In</div>
              <div className="ci-v">Nigeria · Serving brands worldwide</div>
            </div>

            <div className="ci-item">
              <div className="ci-k">Language</div>
              <div className="ci-v">English</div>
            </div>

            <div className="ci-item">
              <div className="ci-k">Follow Us</div>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="ci-item" style={{ borderTop: "1px solid var(--line)", paddingTop: "2rem", marginTop: "0.5rem" }}>
              <div className="ci-k">A Note From James</div>
              <p style={{ color: "var(--cream-dim)", marginTop: "0.7rem", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: 1.6 }}>
                &ldquo;I&apos;m happy to offer my services to you. I engage and
                commit to delivering nothing but the best result possible.
                Chat me up.&rdquo;
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
