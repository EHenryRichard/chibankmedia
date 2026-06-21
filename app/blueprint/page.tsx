import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Blueprint™",
  description:
    "The Chibankz Content Blueprint™ — our all-in-one social media system for brands ready to grow with clarity, consistency, and content that converts.",
};

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We start with your business, your audience, and your goals. A deep-dive into who you are, what you offer, and who needs to hear it.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "We build your content pillars, platform strategy, tone of voice guide, and a 30-day content calendar rooted in your reality — not a generic template.",
  },
  {
    n: "03",
    title: "Creation",
    desc: "Content that looks like you and sounds like you. Branded graphics, short-form reels, and captions crafted around your voice and your audience’s language.",
  },
  {
    n: "04",
    title: "Publish & Engage",
    desc: "We handle daily scheduling, posting, and community engagement — responding to comments, managing DMs, and keeping your audience active.",
  },
  {
    n: "05",
    title: "Report & Refine",
    desc: "Every month you receive a clear analytics report. We review what worked, what didn’t, and what we’re doing next — keeping the strategy sharp.",
  },
];

const includes = [
  "30-day content calendar built around your brand voice",
  "Daily publishing across Instagram & LinkedIn",
  "Branded graphics, carousels, and short-form reels",
  "Caption copywriting and hashtag strategy",
  "Community management & DM responses",
  "Monthly analytics report with growth insights",
  "Feed visual identity — cohesive, consistent, on-brand",
  "Direct access to James or Chidinma throughout the engagement",
];

const whoFor = [
  {
    title: "Small Business Owners",
    desc: "You know your craft. You shouldn’t have to be a content creator too. We take social off your plate entirely.",
  },
  {
    title: "Personal Brand Builders",
    desc: "You want to be known in your space. We build the presence that makes people find you, trust you, and reach out.",
  },
  {
    title: "E-Commerce Brands",
    desc: "Your products deserve an audience. We create content that drives discovery and turns followers into buyers.",
  },
  {
    title: "Service Providers",
    desc: "Coaches, consultants, creatives — we build the social presence that fills your pipeline and positions your expertise.",
  },
];

export default function Blueprint() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label r">Our Signature System</span>
          <h1 className="r">
            The Chibankz<br />Content Blueprint™
          </h1>
          <p className="body-lg r delay-1" style={{ marginTop: "1.2rem" }}>
            The all-in-one social media system built to grow your brand with
            clarity, consistency, and content that actually converts.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">What It Is</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                Now, you can have a strategist&apos;s system — <em>working for you.</em>
              </h2>
            </div>
            <div className="r delay-1">
              <p className="body-lg" style={{ marginBottom: "1.4rem" }}>
                The Chibankz Content Blueprint™ is our complete, done-for-you
                social media management system. Built from five years and over
                100 brands, it blends brand strategy, content creation, and
                community management into one cohesive, consistent system.
              </p>
              <p style={{ color: "var(--cream-dim)", lineHeight: 1.75 }}>
                This isn&apos;t a one-size-fits-all package. Every Blueprint
                engagement starts with understanding your specific brand, your
                audience, and your goals — then we build from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SYSTEM ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(2.5rem,5vw,4rem)", marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="label r">How It Works</span>
            <h2 className="r" style={{ marginTop: "1.2rem", fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              A five-step system built on partnership.
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
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="feature-band section">
        <div className="wrap">
          <div className="feature-inner">
            <div>
              <span className="label r">Everything That&apos;s Included</span>
              <h2 className="r" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBlock: "1.4rem" }}>
                One system.<br />Everything handled.
              </h2>
              <p className="body-lg r delay-1" style={{ marginBottom: "2.5rem" }}>
                From the first strategy call to the monthly report, every part
                of your social media is covered. You show up and do what you do
                best. We handle the rest.
              </p>
              <Link href="/contact" className="btn btn-sand r delay-2">
                Get the Blueprint
              </Link>
            </div>
            <div className="feature-card r delay-1">
              <div className="feature-card-label">Blueprint includes</div>
              <ul className="feature-card-list">
                {includes.map((item) => (
                  <li className="feature-card-item" key={item}>{item}</li>
                ))}
              </ul>
              <div className="feature-card-footer">
                <span className="label no-line" style={{ color: "var(--sand)", fontSize: "0.62rem" }}>
                  Meta Certified &nbsp;·&nbsp; 5+ Years &nbsp;·&nbsp; 100+ Brands
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <span className="label r">Who It&apos;s For</span>
            <h2 className="r" style={{ marginTop: "1.2rem", fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              Built for any brand that wants to <em>grow.</em>
            </h2>
          </div>
          <div className="values-grid">
            {whoFor.map((w, i) => (
              <div className={`value-item r delay-${i + 1}`} key={w.title}>
                <div className="vt">{w.title}</div>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
