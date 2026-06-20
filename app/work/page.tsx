import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected results from Chibankz Media — real growth for small businesses and personal brands across industries.",
};

const projects = [
  {
    ind: "Personal Brand",
    title: "Coach & Consultant",
    desc: "Rebuilt a scattered presence into a clear, credible personal brand that books discovery calls on autopilot.",
    metrics: [{ mv: "4.2×", mk: "Engagement rate" }, { mv: "+12k", mk: "New followers" }],
  },
  {
    ind: "E-commerce",
    title: "DTC Product Brand",
    desc: "A consistent content system and paid support turned an inconsistent feed into a steady source of sales.",
    metrics: [{ mv: "3.1×", mk: "Reach growth" }, { mv: "+68%", mk: "Store visits" }],
  },
  {
    ind: "Wellness",
    title: "Studio & Service Brand",
    desc: "Local-first content and community management filled classes and built a loyal, returning audience.",
    metrics: [{ mv: "2.7×", mk: "Saves & shares" }, { mv: "+90%", mk: "DM enquiries" }],
  },
  {
    ind: "Real Estate",
    title: "Agent Personal Brand",
    desc: "Positioned an agent as the go-to local expert with thought-leadership content and a sharper profile.",
    metrics: [{ mv: "5×", mk: "Profile views" }, { mv: "+8k", mk: "Followers gained" }],
  },
];

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label r">Selected Work</span>
          <h1 className="r">
            Real brands. Real consistency. <em>Real growth.</em>
          </h1>
          <p className="body-lg r delay-1" style={{ marginTop: "1rem" }}>
            A snapshot of what happens when clarity and consistency meet content
            that connects. Across five years and 100+ brands, the pattern holds.
          </p>
        </div>
      </section>

      {/* ── WORK GRID ── */}
      <section className="section">
        <div className="wrap">
          <div className="work-grid">
            {projects.map((p) => (
              <article className="work-item r" key={p.title}>
                <div className="ind">{p.ind}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="work-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.mk}>
                      <div className="mv">{m.mv}</div>
                      <div className="mk">{m.mk}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">By The Numbers</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                Five years of showing up <em>consistently.</em>
              </h2>
            </div>
            <p className="body-lg r delay-1">
              We&apos;ve worked across industries, time zones, and platforms —
              and one thing never changes: the brands that win are the ones that
              stay consistent.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--line)" }}>
            {[
              { num: "100+", desc: "Brands grown" },
              { num: "5+", desc: "Years experience" },
              { num: "12+", desc: "Industries served" },
              { num: "Meta", desc: "Certified" },
            ].map((s) => (
              <div className="stat-item r" key={s.desc} style={{ borderRight: "1px solid var(--line)", borderBottom: "none" }}>
                <div className="num">{s.num}</div>
                <div className="desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
