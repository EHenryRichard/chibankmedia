import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Chibankz Media — a couple and a creative partnership helping brands grow online. Led by James, a Meta Certified social media manager and marketer.",
};

const values = [
  {
    k: "Clarity",
    p: "We cut the noise. Before a single post goes out, we get clear on who you serve and what you stand for.",
  },
  {
    k: "Consistency",
    p: "Brands grow on rhythm, not bursts. We show up for your audience the same way, every single week.",
  },
  {
    k: "Connection",
    p: "Followers are easy. Trust is the goal. Every piece of content is made to deepen a real relationship.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow reveal">About Chibankz Media</span>
          <h1 className="reveal">
            A couple. A creative partnership. One mission — to help you{" "}
            <span className="accent">make sense</span> of your business.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-hero">
          <div className="portrait reveal">
            <span className="mono">JC</span>
            <span className="badge">Meta Certified</span>
          </div>
          <div className="reveal">
            <span className="eyebrow">Meet James</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.6vw,2.6rem)", marginBlock: "1rem 1.3rem" }}>
              Hi, I&apos;m James.
            </h2>
            <p className="lead" style={{ marginBottom: "1.2rem" }}>
              I&apos;m a Meta Certified and experienced social media manager and
              marketer. I engage and commit to delivering nothing but the best
              result possible.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "1.2rem" }}>
              Chibankz Media started as something simple: two people who believed
              good brands deserve to be seen. Together we&apos;ve spent the last
              five years helping more than a hundred businesses and personal
              brands worldwide find their voice and grow an audience that
              actually converts.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              We&apos;re happy to offer our services to you here. Chat us up —
              let&apos;s build something worth following.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What We Stand For</span>
            <h2>The three Cs behind every brand we grow.</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <article className="value-card reveal" key={v.k}>
                <div className="vk">{v.k}</div>
                <p>{v.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section panel-dark">
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="eyebrow reveal">Our Approach</span>
            <p className="quote-big reveal" style={{ maxWidth: "30ch" }}>
              We treat your brand like it&apos;s our own — because{" "}
              <span className="accent">partnership</span> is how we work best.
            </p>
            <p className="lead reveal" style={{ marginTop: "1.8rem" }}>
              Being a couple taught us how to communicate, to listen, and to
              build something together that lasts. That&apos;s the same energy we
              bring to every brand we touch.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
