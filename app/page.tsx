import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const stats = [
  { num: "5+", label: "Years of experience" },
  { num: "100+", label: "Brands worldwide" },
  { num: "Meta", label: "Certified marketer" },
  { num: "2", label: "Partners, one vision" },
];

const services = [
  {
    idx: "01",
    title: "Social Media Management",
    desc: "We run your accounts end to end — planning, posting, and engaging so your presence stays consistent and alive.",
    points: ["Content calendars", "Daily publishing", "Community & DM management"],
  },
  {
    idx: "02",
    title: "Content That Connects",
    desc: "Scroll-stopping content built around your voice and your audience — designed to build trust, not just likes.",
    points: ["Branded graphics & reels", "Captions & copywriting", "Content direction"],
  },
  {
    idx: "03",
    title: "Strategy & Growth",
    desc: "A clear roadmap for who you're talking to, what you're saying, and how it turns followers into customers.",
    points: ["Audience research", "Positioning & messaging", "Growth playbooks"],
  },
  {
    idx: "04",
    title: "Personal Branding",
    desc: "For founders and creators who want to be known — we shape a presence that reflects who you really are.",
    points: ["Profile optimisation", "Thought-leadership content", "LinkedIn & Instagram growth"],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">Social Media Management · Nigeria → Worldwide</span>
            <h1 className="display">
              Grow online with clarity, consistency &amp; content that{" "}
              <span className="accent">connects.</span>
            </h1>
            <p className="lead">
              Chibankz Media helps small businesses and personal brands build a
              social media presence that earns trust and attracts the right
              audience. Five years, one hundred-plus brands, two partners who
              actually care.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Work With Us
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See the Work
              </Link>
            </div>
          </div>

          <aside className="hero-aside reveal">
            <p>
              &ldquo;Here to help you make sense of your business — and turn it
              into a brand people remember.&rdquo;
            </p>
            <div className="sig">— James &amp; the Chibankz team</div>
          </aside>
        </div>
      </section>

      {/* STATS */}
      <section className="stats section" style={{ paddingBlock: "clamp(3rem,6vw,4.5rem)" }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat reveal" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / POSITIONING */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why Chibankz</span>
            <h2>
              Most brands aren&apos;t invisible because they&apos;re bad. They&apos;re
              invisible because they&apos;re <span style={{ fontStyle: "italic", color: "var(--orange)" }}>unclear.</span>
            </h2>
            <p className="lead">
              We fix that. We give your social media a clear voice, a consistent
              rhythm, and content with a reason to exist — so the right people
              find you, trust you, and stay.
            </p>
          </div>
          <div className="divider-label reveal">As featured across industries</div>
          <div className="logos-row reveal">
            <span>Coaches</span>
            <span>E-commerce</span>
            <span>Real Estate</span>
            <span>Wellness</span>
            <span>Creators</span>
            <span>Local Business</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Do</span>
            <h2>Services built to make you visible — and credible.</h2>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <article className="service-card reveal" key={s.idx}>
                <span className="idx">{s.idx}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2.6rem" }} className="reveal">
            <Link href="/services" className="btn btn-dark">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE PANEL */}
      <section className="section panel-dark">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", maxWidth: 980 }}>
            <span className="eyebrow reveal">The Chibankz Promise</span>
            <p className="quote-big reveal">
              We don&apos;t chase vanity metrics. We build the kind of presence
              that makes people <span className="accent">trust you</span> before
              they ever buy.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
