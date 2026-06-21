import Link from "next/link";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";

const stats = [
  { num: "5+", desc: "Years of experience" },
  { num: "100+", desc: "Brands worldwide" },
  { num: "Meta", desc: "Certified marketer" },
  { num: "IG · LI", desc: "Platforms we master" },
];

const services = [
  {
    n: "01",
    title: "Social Media Management",
    desc: "We run your accounts end to end — strategy, content, scheduling, and daily engagement — so your presence stays alive without eating your time.",
    tags: ["Content Calendar", "Daily Publishing", "Community Management"],
  },
  {
    n: "02",
    title: "Content Creation",
    desc: "Scroll-stopping content built around your voice. Branded graphics, reels, and captions designed to build trust, not just likes.",
    tags: ["Branded Graphics", "Reels & Video", "Copywriting"],
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
    desc: "For founders and creators who want to be known. We shape a presence that reflects who you really are.",
    tags: ["Profile Optimisation", "Thought Leadership", "LinkedIn & Instagram"],
  },
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

      {/* ── WHY CHIBANKZ ── */}
      <section className="section">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">Why Chibankz</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                Most brands aren&apos;t invisible because they&apos;re bad.
                They&apos;re invisible because they&apos;re <em>unclear.</em>
              </h2>
            </div>
            <div className="r delay-1">
              <p className="body-lg">
                We fix that. We give your social media a clear voice, a
                consistent rhythm, and content with a reason to exist — so the
                right people find you, trust you, and stay.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/about" className="btn btn-ghost">
                  About Us
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

      {/* ── SERVICES ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(2.5rem,5vw,4rem)", marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="label r">What We Do</span>
          </div>
          <div className="services-list">
            {services.map((s) => (
              <div className="svc-row r" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.desc}</p>
                  <div className="svc-tags">
                    {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }} className="r">
            <Link href="/services" className="btn btn-ghost">
              All Services →
            </Link>
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

      <CtaBanner />
    </>
  );
}
