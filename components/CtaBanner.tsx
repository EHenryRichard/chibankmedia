import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2 className="r">
          Ready to build a brand people <em>actually</em> follow?
        </h2>
        <div className="cta-actions r delay-1">
          <Link href="/contact" className="btn btn-cream">
            Start a Project
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
