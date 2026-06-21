import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the couple behind Chibankz Media. James is a Meta Certified social media manager with 5+ years helping 100+ brands grow online.",
};

const values = [
  {
    vt: "Clarity",
    p: "Before a single post goes out, we get clear on who you serve and what you stand for. No noise, no confusion.",
  },
  {
    vt: "Consistency",
    p: "Brands grow on rhythm, not bursts. We show up for your audience the same way, every single week.",
  },
  {
    vt: "Connection",
    p: "Followers are easy. Trust is the goal. Every piece of content is made to deepen a real relationship.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label r">About Chibankz Media</span>
          <h1 className="r">
            A couple. A creative partnership. One mission — to help you{" "}
            <em>make sense</em> of your business.
          </h1>
          <p className="body-lg r delay-1">
            Five years, one hundred-plus brands, and one belief: good brands
            deserve to be seen.
          </p>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="section">
        <div className="wrap about-split">
          <div className="portrait-frame r">
            <Image
              src="/placeholder-portrait.svg"
              alt="James &amp; Chidinma — Chibankz Media"
              width={600}
              height={820}
              className="about-portrait-img"
            />
            <div className="cert-badge">Meta Certified</div>
          </div>

          <div className="r delay-1">
            <span className="label">Meet James</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.8vw,2.8rem)", marginBlock: "1.2rem 1.4rem" }}>
              Hi, I&apos;m James — and I&apos;m <em>glad you&apos;re here.</em>
            </h2>
            <p className="body-lg" style={{ marginBottom: "1.3rem" }}>
              I&apos;m a Meta Certified and experienced social media manager and
              marketer. I engage and commit to delivering nothing but the best
              result possible.
            </p>
            <p style={{ color: "var(--cream-dim)", lineHeight: 1.75, marginBottom: "1.3rem" }}>
              Chibankz Media started as something simple: two people who
              believed good brands deserve to be seen. Together we&apos;ve spent
              the last five years helping more than a hundred businesses and
              personal brands worldwide find their voice and grow an audience
              that actually converts.
            </p>
            <p style={{ color: "var(--cream-dim)", lineHeight: 1.75 }}>
              We&apos;re happy to offer our services to you. Chat us up —
              let&apos;s build something worth following.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="label r">What We Stand For</span>
              <h2 className="r" style={{ marginTop: "1.2rem" }}>
                The three C’s behind every brand we grow.
              </h2>
            </div>
            <p className="body-lg r delay-1">
              These aren&apos;t buzzwords. They&apos;re the lens through which
              we look at every account, every post, every strategy we build.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className={`value-item r delay-${i + 1}`} key={v.vt}>
                <div className="vt">{v.vt}</div>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="manifesto">
        <div className="wrap">
          <span className="label r">Partnership First</span>
          <p className="manifesto-q r delay-1" style={{ marginTop: "2rem" }}>
            Being a couple taught us how to communicate, to listen, and to build
            something together that <em>lasts.</em>
          </p>
          <p
            className="body-lg r delay-2"
            style={{ marginTop: "1.8rem", maxWidth: "48ch" }}
          >
            That&apos;s the same energy we bring to every brand we touch. We
            treat your business like it&apos;s our own — because partnership is
            how we work best.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
