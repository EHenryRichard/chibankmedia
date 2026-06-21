import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Growth Partnership™",
  description:
    "A strategic 1:1 social media partnership for brands and founders ready to grow with clarity and confidence.",
};

const includes = [
  "Full social media strategy built around your brand goals",
  "Ongoing content creation — graphics, reels, and copy",
  "Daily account management across Instagram & LinkedIn",
  "Community building & DM management",
  "Monthly strategy review and direction call",
  "Priority access to James & Chidinma",
  "Quarterly brand positioning review",
  "Direct collaboration on campaigns, launches, and growth moments",
];

const experience = [
  {
    title: "Fully Tailored",
    desc: "No templates, no cookie-cutter packages. Every strategy is built from your specific brand, your audience, and your goals.",
  },
  {
    title: "High Touch",
    desc: "You work directly with James and Chidinma — not a junior team member. Real expertise, real attention, real results.",
  },
  {
    title: "Long-Term Thinking",
    desc: "We’re not here to chase monthly vanity metrics. We build the kind of presence that compounds over time.",
  },
];

const steps = [
  {
    n: "01",
    title: "Initial Inquiry",
    desc: "Fill out our contact form and tell us about your brand and goals. We review every application personally.",
  },
  {
    n: "02",
    title: "Discovery Call",
    desc: "A focused 45-minute call where we learn about your brand, your audience, and what you want to build together.",
  },
  {
    n: "03",
    title: "Strategy Proposal",
    desc: "We put together a custom strategy and partnership proposal tailored to your brand’s specific needs and goals.",
  },
  {
    n: "04",
    title: "Partnership Begins",
    desc: "Once aligned, we get to work. Onboarding, strategy, content creation — everything starts moving immediately.",
  },
];

export default function Partnership() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label r">Premium Service</span>
          <h1 className="r">
            The Growth<br />Partnership™
          </h1>
          <p className="body-lg r delay-1" style={{ marginTop: "1.2rem" }}>
            A strategic 1:1 social media partnership for brands and founders
            ready to move with clarity and confidence.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">A Strategic 1:1 Partnership</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                For brands ready to grow — and ready to <em>commit.</em>
              </h2>
            </div>
            <div className="r delay-1">
              <p className="body-lg" style={{ marginBottom: "1.4rem" }}>
                The Growth Partnership™ is our premium ongoing engagement for
                brands that want the full experience — deep strategy, consistent
                content, and a real partner who understands your business as well
                as you do.
              </p>
              <p style={{ color: "var(--cream-dim)", lineHeight: 1.75 }}>
                This is for the brand owner who is done with inconsistency, done
                with the guesswork, and ready to invest in a social media
                presence that actually moves the business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EXPERIENCE ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(2.5rem,5vw,4rem)", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <span className="label r">The Experience</span>
            <h2 className="r" style={{ marginTop: "1.2rem", fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              Focused, high-touch, and fully tailored.
            </h2>
          </div>
          <div className="values-grid">
            {experience.map((e, i) => (
              <div className={`value-item r delay-${i + 1}`} key={e.title}>
                <div className="vt">{e.title}</div>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="feature-band section">
        <div className="wrap">
          <div className="feature-inner">
            <div>
              <span className="label r">What&apos;s Included</span>
              <h2 className="r" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBlock: "1.4rem" }}>
                Everything you need.<br />Nothing you don&apos;t.
              </h2>
              <p className="body-lg r delay-1" style={{ marginBottom: "2.5rem" }}>
                The Growth Partnership™ is a comprehensive, ongoing engagement.
                Strategy, content, management, and direct collaboration — built
                around your brand and refined every month as you grow.
              </p>
              <Link href="/contact" className="btn btn-sand r delay-2">
                Apply Now
              </Link>
            </div>
            <div className="feature-card r delay-1">
              <div className="feature-card-label">Partnership includes</div>
              <ul className="feature-card-list">
                {includes.map((item) => (
                  <li className="feature-card-item" key={item}>{item}</li>
                ))}
              </ul>
              <div className="feature-card-footer">
                <span className="label no-line" style={{ color: "var(--sand)", fontSize: "0.62rem" }}>
                  Limited Availability &nbsp;·&nbsp; Application Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ── */}
      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <span className="label r">How to Apply</span>
            <h2 className="r" style={{ marginTop: "1.2rem", fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              A simple, four-step process.
            </h2>
          </div>
          <div className="process-list">
            {steps.map((step, i) => (
              <div className={`proc-row r delay-${i % 3}`} key={step.n}>
                <div className="step-n">{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }} className="r">
            <Link href="/contact" className="btn btn-sand">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
