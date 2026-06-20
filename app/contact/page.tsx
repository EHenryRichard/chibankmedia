import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Chat with Chibankz Media. Tell us about your brand and let's build a social media presence that connects.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow reveal">Get In Touch</span>
          <h1 className="reveal">
            Let&apos;s start building your <span className="accent">iconic brand</span> together.
          </h1>
          <p className="lead reveal" style={{ marginTop: "1.4rem" }}>
            Tell us a little about your business and where you want to go. We
            usually reply within one working day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="reveal">
            <ContactForm />
          </div>

          <aside className="contact-info reveal">
            <div className="info-item">
              <div className="k">Email</div>
              <div className="v">
                <a href="mailto:hello@chibankzmedia.com">hello@chibankzmedia.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="k">Based In</div>
              <div className="v">Nigeria · Serving brands worldwide</div>
            </div>
            <div className="info-item">
              <div className="k">Language</div>
              <div className="v">English</div>
            </div>
            <div className="info-item">
              <div className="k">Find Us</div>
              <div className="socials">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="info-item" style={{ marginTop: "0.6rem" }}>
              <div className="k">A Note From James</div>
              <p style={{ color: "var(--ink-soft)", marginTop: "0.4rem" }}>
                &ldquo;I&apos;m happy to offer my services to you here. Chat me up —
                I engage and commit to delivering nothing but the best result
                possible.&rdquo;
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
