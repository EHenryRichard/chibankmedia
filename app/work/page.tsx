import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected results from Chibankz Media — social media growth for small businesses and personal brands across industries.",
};

const projects = [
  {
    tag: "Personal Brand",
    title: "Coach & Consultant",
    desc: "Rebuilt a scattered presence into a clear, credible personal brand that books discovery calls on autopilot.",
    metrics: [
      { v: "4.2x", k: "Engagement" },
      { v: "+12k", k: "Followers" },
    ],
  },
  {
    tag: "E-commerce",
    title: "DTC Product Brand",
    desc: "A consistent content system and paid support turned an inconsistent feed into a steady source of sales.",
    metrics: [
      { v: "3.1x", k: "Reach" },
      { v: "+68%", k: "Store visits" },
    ],
  },
  {
    tag: "Wellness",
    title: "Studio & Service Brand",
    desc: "Local-first content and community management filled classes and built a loyal, returning audience.",
    metrics: [
      { v: "2.7x", k: "Saves" },
      { v: "+90%", k: "DM enquiries" },
    ],
  },
  {
    tag: "Real Estate",
    title: "Agent Personal Brand",
    desc: "Positioned an agent as the go-to local expert with thought-leadership content and a sharper profile.",
    metrics: [
      { v: "5x", k: "Profile views" },
      { v: "+8k", k: "Followers" },
    ],
  },
];

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow reveal">Selected Work</span>
          <h1 className="reveal">
            Real brands. Real consistency. <span className="accent">Real growth.</span>
          </h1>
          <p className="lead reveal" style={{ marginTop: "1.4rem" }}>
            A snapshot of what happens when clarity and consistency meet content
            that connects. Across five years and 100+ brands, the pattern holds.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="work-grid">
            {projects.map((p) => (
              <article className="work-card reveal" key={p.title}>
                <div className="work-thumb">
                  <span className="tag">{p.tag}</span>
                </div>
                <div className="work-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="work-metrics">
                    {p.metrics.map((m) => (
                      <div className="m" key={m.k}>
                        <div className="v">{m.v}</div>
                        <div className="k">{m.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section panel-dark">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal">
              <div className="num">100+</div>
              <div className="label">Brands grown worldwide</div>
            </div>
            <div className="stat reveal">
              <div className="num">5+</div>
              <div className="label">Years in the game</div>
            </div>
            <div className="stat reveal">
              <div className="num">12+</div>
              <div className="label">Industries served</div>
            </div>
            <div className="stat reveal">
              <div className="num">Meta</div>
              <div className="label">Certified marketer</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
