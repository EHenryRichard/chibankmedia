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
    title: "Strategy & Growth",
    desc: "A clear roadmap for who you’re talking to, what you’re saying, and how it turns followers into customers.",
    tags: ["Audience Research", "Positioning", "Growth Playbook"],
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
        {/* Portrait: absolute, bleeds to right viewport edge */}
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

        {/* Text content: inside wrap, stacked top–to–bottom */}
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
                <strong>We&apos;re James &amp; Chidinma — Chibankz Media.</strong><br />
                We help small businesses and personal brands build a social media
                presence that earns trust and attracts the right audience.
              </p>
              <div className="hero-btns r delay-2">
                <Link href="/contact" className="btn btn-sand">
                  Work With Us
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
          </div>

          <div style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 3rem)", flexWrap: "wrap", paddingTop: "1rem" }}>
            {["Coaches", "E-commerce", "Real Estate", "Wellness", "Creators", "Local Business"].map((ind) => (
              <span key={ind} className="tag r">{ind}</span>
            ))}
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
