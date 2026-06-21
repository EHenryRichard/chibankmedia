import Link from "next/link";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";

const stats = [
  { num: "5+", desc: "Years of experience" },
  { num: "100+", desc: "Brands worldwide" },
  { num: "Meta", desc: "Certified marketer" },
  { num: "IG · LI", desc: "Platforms we master" },
];

const industries = [
  "Coaches",
  "E-Commerce",
  "Real Estate",
  "Wellness",
  "Personal Brands",
  "Local Business",
  "Creators",
  "Tech Startups",
  "Fashion",
  "Food & Beverage",
];

const blueprintIncludes = [
  "30-day content calendar built around your brand voice",
  "Daily publishing across Instagram & LinkedIn",
  "Community management & DM responses",
  "Branded graphics, reels, and caption copywriting",
  "Monthly analytics report with growth insights",
  "Direct access to James or Chidinma throughout",
];

const suite = [
  {
    n: "01",
    title: "Social Media Management",
    tagline: "YOUR BRAND, CONSISTENTLY ALIVE — WITHOUT LIFTING A FINGER.",
    desc: "We take full ownership of your accounts. Strategy, content creation, scheduling, daily posting, and community management — all handled so your presence stays consistent and your audience stays engaged.",
    includes: [
      "Monthly content calendar",
      "Daily posting & scheduling",
      "Community & DM management",
      "Monthly performance report",
    ],
    cta: "Request a Consult",
  },
  {
    n: "02",
    title: "Content Creation",
    tagline: "SCROLL-STOPPING CONTENT BUILT AROUND YOUR VOICE.",
    desc: "Branded graphics, short-form reels, and caption copywriting designed to earn attention and build real trust — not just rack up impressions.",
    includes: [
      "Branded graphics & carousels",
      "Short-form video & reels",
      "Caption copywriting",
      "Feed visual identity",
    ],
    cta: "Request a Consult",
  },
  {
    n: "03",
    title: "Strategy & Consulting",
    tagline: "A CLEAR ROADMAP FROM WHERE YOU ARE TO WHERE YOU WANT TO BE.",
    desc: "A focused session where we define your audience, your positioning, your content pillars, and the exact platforms that deserve your attention — then hand you a plan to execute.",
    includes: [
      "Audience & competitor research",
      "Messaging & positioning",
      "Platform strategy",
      "90-day action plan",
    ],
    cta: "Book a Session",
  },
  {
    n: "04",
    title: "Personal Branding",
    tagline: "YOUR STORY ELEVATED. YOUR PRESENCE, DESIGNED TO LEAD.",
    desc: "For founders and creators who want to be recognised as the go-to in their space. We shape a consistent, authentic personal brand that attracts the right people and opens the right doors.",
    includes: [
      "Profile & bio optimisation",
      "Thought-leadership content",
      "LinkedIn & Instagram growth",
      "Personal brand calendar",
    ],
    cta: "Request a Consult",
  },
];

const auditDeliverables = [
  "Full social media profile audit — bio, visuals, and messaging",
  "Content strategy review across your active platforms",
  "Engagement & growth pattern analysis",
  "Brand consistency check across all digital touchpoints",
  "Visual design & aesthetic recommendations",
  "60-minute video walkthrough of all findings and next steps",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-portrait" aria-hidden="true">
          <Image
            src="/placeholder-portrait.svg"
            alt=""
            fill
            priority
            className="portrait-img"
            sizes="55vw"
          />
          <div className="portrait-fade" />
        </div>
        <div className="wrap">
          <div className="hero-content">
            <h1 className="display hero-headline r">
              Growing brands<br />
              that connect<br />
              with clarity &amp;<br />
              <span className="script-word">consistency.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-subtext r delay-1">
                <strong>WE&apos;RE JAMES &amp; CHIDINMA — CHIBANKZ MEDIA™.</strong><br />
                WE HELP SMALL BUSINESSES AND PERSONAL BRANDS GROW WITH INTENTIONAL STRATEGY, CONSISTENT CONTENT, AND COMMUNITY THAT ACTUALLY CONNECTS.
              </p>
              <div className="hero-btns r delay-2">
                <Link href="/contact" className="btn btn-sand">
                  Request a Consult
                </Link>
                <Link href="/work" className="hero-link">
                  See the Work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="stats-bar-inner">
            {stats.map((s) => (
              <div className="stat-item r" key={s.desc}>
                <div className="num">{s.num}</div>
                <div className="desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INDUSTRIES STRIP ── */}
      <div className="industries-strip">
        <div className="wrap">
          <div className="industries-strip-inner">
            <span className="strip-label">Brands we serve include</span>
            {industries.map((ind) => (
              <span className="ind-badge" key={ind}>{ind}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE CHIBANKZ CONTENT BLUEPRINT™ ── */}
      <section className="feature-band section">
        <div className="wrap">
          <div className="feature-inner">
            <div>
              <span className="label r">Our Signature System</span>
              <h2 className="r" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", marginBlock: "1.4rem" }}>
                The Chibankz<br />Content Blueprint™
              </h2>
              <p className="feature-subtitle r delay-1">
                INTRODUCING OUR ALL-IN-ONE SOCIAL MEDIA SYSTEM DESIGNED TO HELP YOUR BRAND GROW WITH CLARITY, CONSISTENCY, AND CONTENT THAT ACTUALLY CONVERTS.
              </p>
              <p className="body-lg r delay-2" style={{ marginTop: "1.8rem", marginBottom: "2.5rem" }}>
                Built from 5+ years managing over 100 brands worldwide, the
                Chibankz Content Blueprint is our complete, done-for-you social
                media system. Strategy, content, community management, and
                monthly reporting — all handled, all consistent, all building
                toward real growth.
              </p>
              <div className="feature-btns r delay-2">
                <Link href="/blueprint" className="btn btn-sand">
                  Explore the Blueprint
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="feature-card r delay-1">
              <div className="feature-card-label">What&apos;s included</div>
              <ul className="feature-card-list">
                {blueprintIncludes.map((item) => (
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

      {/* ── THE CHIBANKZ MEDIA™ SUITE ── */}
      <section className="section">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">The Chibankz Media™ Suite</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                Every service built to help you show up <em>consistently.</em>
              </h2>
            </div>
            <p className="body-lg r delay-1">
              No guesswork, no scattered content, no vanity metrics. Clear
              strategy, real content, and consistent execution — building the
              right audience for the long term.
            </p>
          </div>
          <div className="suite-list">
            {suite.map((s) => (
              <div className="suite-row r" key={s.n}>
                <div className="suite-n">{s.n}</div>
                <div className="suite-body">
                  <div className="suite-tagline">{s.tagline}</div>
                  <h3 className="suite-title">{s.title}</h3>
                  <div className="suite-grid">
                    <p className="suite-desc">{s.desc}</p>
                    <div>
                      <div className="suite-includes-label">Includes</div>
                      <ul className="suite-includes">
                        {s.includes.map((inc) => (
                          <li key={inc}>{inc}</li>
                        ))}
                      </ul>
                      <div style={{ marginTop: "2rem" }}>
                        <Link href="/contact" className="btn btn-ghost">
                          {s.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="manifesto">
        <div className="wrap">
          <span className="label r">The Chibankz Promise</span>
          <p className="manifesto-q r delay-1" style={{ marginTop: "2rem" }}>
            We don&apos;t chase vanity metrics. We build the kind of presence
            that makes people <em>trust you</em> before they ever buy.
          </p>
        </div>
      </section>

      {/* ── SOCIAL MEDIA AUDIT ── */}
      <section className="audit-band">
        <div className="wrap">
          <div className="audit-inner">
            <div>
              <span className="label r">New Service</span>
              <h2 className="r" style={{ marginTop: "1.2rem", fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
                The Social Media Audit
              </h2>
              <p className="audit-subtitle r delay-1">
                A 60-MINUTE STRATEGIC REVIEW OF YOUR EXISTING PRESENCE TO HELP
                YOU REFINE, IMPROVE, AND GROW.
              </p>
              <p className="body-lg r delay-2" style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
                Think your current strategy is working? Let&apos;s make sure. We
                do a deep-dive into your profiles, content, messaging, and brand
                consistency — then walk you through exactly what to fix and why.
              </p>
              <ul className="deliverables r delay-2">
                {auditDeliverables.map((d) => (
                  <li className="deliverable-item" key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="audit-cta-panel r delay-1">
              <div className="audit-cta-inner">
                <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "1.2rem" }}>
                  Ready to see what&apos;s working — and what&apos;s not?
                </h3>
                <p style={{ color: "var(--cream-dim)", marginBottom: "2rem", lineHeight: 1.7 }}>
                  Book your Social Media Audit and leave with a clear, honest
                  action plan built around your brand.
                </p>
                <Link href="/contact" className="btn btn-sand">
                  Request an Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
