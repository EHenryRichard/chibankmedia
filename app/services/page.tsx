import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, content creation, strategy, growth, Meta ads, and brand audits for small businesses and personal brands.",
};

const services = [
  {
    n: "01",
    title: "Social Media Management",
    desc: "Hand us the accounts. We plan, create, schedule, post, and engage — so your presence stays consistent without eating your week.",
    tags: ["Monthly content calendar", "Daily posting", "Community & DM management", "Monthly reporting"],
  },
  {
    n: "02",
    title: "Content Creation",
    desc: "Content built around your voice and your audience — designed to stop the scroll and start a real relationship.",
    tags: ["Branded graphics & carousels", "Short-form reels", "Captions & copywriting", "Feed visual identity"],
  },
  {
    n: "03",
    title: "Strategy & Consulting",
    desc: "A clear roadmap for who you’re talking to, what you’re saying, and how it turns attention into customers.",
    tags: ["Audience & competitor research", "Positioning & messaging", "Platform strategy", "90-min intensive"],
  },
  {
    n: "04",
    title: "Personal Branding",
    desc: "For founders and creators who want to be known. We shape a presence that reflects who you really are.",
    tags: ["Profile & bio optimisation", "Thought-leadership content", "LinkedIn & Instagram growth", "Personal content system"],
  },
  {
    n: "05",
    title: "Meta Ads & Promotion",
    desc: "Put fuel behind the content that works. We plan and run paid campaigns that reach the right people — not just more people.",
    tags: ["Campaign setup & targeting", "Creative for paid", "Budget & bid management", "Results tracking"],
  },
  {
    n: "06",
    title: "Brand Audit",
    desc: "Not sure what’s working? We review your presence end to end and hand you a clear, honest plan to fix it.",
    tags: ["Full profile & feed review", "Messaging consistency check", "Competitor benchmarking", "Prioritised action list"],
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
    desc: "We publish, engage, and watch the numbers. Every month you get clear reporting and a plan for what comes next.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label r">What We Do</span>
          <h1 className="r">
            Everything you need to grow online —{" "}
            <em>handled.</em>
          </h1>
          <p className="body-lg r delay-1" style={{ marginTop: "1rem" }}>
            Pick one service or let us run the whole thing. Either way you get
            clarity, consistency, and content that connects.
          </p>
        </div>
      </section>

      {/* ── SERVICE LIST ── */}
      <section className="section">
        <div className="wrap">
          <div className="services-list">
            {services.map((s) => (
              <div className="svc-row r" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.desc}</p>
                  <div className="svc-tags">
                    {s.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">How We Work</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                A simple process built on <em>partnership.</em>
              </h2>
            </div>
            <p className="body-lg r delay-1">
              No guesswork. No black box. Just a clear, collaborative process
              that keeps you in the loop at every stage.
            </p>
          </div>

          <div className="process-list">
            {process.map((p, i) => (
              <div className={`proc-row r delay-${i}`} key={p.step}>
                <div className="step-n">{p.step}</div>
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
