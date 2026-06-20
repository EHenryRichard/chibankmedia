import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, content creation, strategy, growth, and personal branding for small businesses and personal brands.",
};

const services = [
  {
    idx: "01",
    title: "Social Media Management",
    desc: "Hand us the accounts. We plan, create, schedule, post, and engage — so your social presence stays consistent without eating your week.",
    points: [
      "Monthly content calendar",
      "Daily posting & scheduling",
      "Community & DM management",
      "Monthly performance reporting",
    ],
  },
  {
    idx: "02",
    title: "Content Creation",
    desc: "Content built around your voice and your audience — designed to stop the scroll and start a relationship.",
    points: [
      "Branded graphics & carousels",
      "Short-form reels & video direction",
      "Captions & copywriting",
      "Visual identity for your feed",
    ],
  },
  {
    idx: "03",
    title: "Strategy & Consulting",
    desc: "A clear roadmap for who you're talking to, what you're saying, and how it turns attention into customers.",
    points: [
      "Audience & competitor research",
      "Positioning & messaging",
      "Platform & growth strategy",
      "90-minute strategy intensive",
    ],
  },
  {
    idx: "04",
    title: "Personal Branding",
    desc: "For founders and creators who want to be known. We shape a presence that reflects who you really are.",
    points: [
      "Profile & bio optimisation",
      "Thought-leadership content",
      "LinkedIn & Instagram growth",
      "Personal content systems",
    ],
  },
  {
    idx: "05",
    title: "Meta Ads & Promotion",
    desc: "Put fuel behind the content that works. We plan and run paid campaigns that reach the right people, not just more people.",
    points: [
      "Campaign setup & targeting",
      "Creative for paid",
      "Budget & bid management",
      "Results tracking",
    ],
  },
  {
    idx: "06",
    title: "Brand Audit",
    desc: "Not sure what's working? We review your presence end to end and hand you a clear, honest plan to fix it.",
    points: [
      "Full profile & feed review",
      "Messaging & consistency check",
      "Competitor benchmarking",
      "Prioritised action list",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We start by understanding your business, your audience, and your goals. No templates — your strategy is built from your reality.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We define your positioning, your content pillars, and a clear plan for the platforms that matter most to you.",
  },
  {
    step: "03",
    title: "Creation",
    desc: "We produce content that looks like you and sounds like you — consistent, on-brand, and made to connect.",
  },
  {
    step: "04",
    title: "Growth & Reporting",
    desc: "We publish, engage, and watch the numbers. Every month you get clear reporting and a plan for what's next.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow reveal">What We Do</span>
          <h1 className="reveal">
            Everything you need to grow online — <span className="accent">handled.</span>
          </h1>
          <p className="lead reveal" style={{ marginTop: "1.4rem" }}>
            Pick a single service or let us run the whole thing. Either way, you
            get clarity, consistency, and content that connects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How We Work</span>
            <h2>A simple process, built on partnership.</h2>
          </div>
          <div className="process-list">
            {process.map((p) => (
              <div className="process-row reveal" key={p.step}>
                <div className="step">{p.step}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
