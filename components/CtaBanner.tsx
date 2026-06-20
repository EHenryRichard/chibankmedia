import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="section panel-dark">
      <div className="container">
        <div className="cta-banner reveal">
          <span className="eyebrow center">Let&apos;s Build Something</span>
          <h2>
            Ready to make sense of <span className="accent">your business?</span>
          </h2>
          <p className="lead" style={{ marginInline: "auto", color: "rgba(247,242,236,0.78)" }}>
            Tell us where you are and where you want to go. We&apos;ll map the
            social media strategy that gets you there.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/services" className="btn btn-ghost on-dark">
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
