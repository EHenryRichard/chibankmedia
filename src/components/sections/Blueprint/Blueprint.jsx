import { images } from '../../../data/content'
import './Blueprint.css'

function Blueprint() {
  return (
    <section id="blueprint" className="blueprint-section">
      <div className="blueprint-head">
        <h2>
          The Iconic
          <br />
          Brand Blueprint
        </h2>
        <p className="blueprint-byline">
          By <em>The Brand Strategist</em>, Cynthia Maselli
        </p>
      </div>

      <p className="blueprint-lead">
        The Iconic Brand Blueprint® is our <strong>NEW</strong> signature workbook, created by our
        Founder to bring the depth of agency strategy together in one beautifully designed
        strategic masterpiece. This 200-page hardcover edition captures the framework we use with
        our clients: a proven, step-by-step system that blends brand development, business strategy,
        and marketing clarity into one cohesive blueprint. Crafted with the precision of an
        experienced strategist and the eye of a designer, it&apos;s more than a workbook — it&apos;s a
        signature resource for entrepreneurs ready to think, build, and lead like a true brand
        visionary.
      </p>

      <p className="blueprint-intro">
        Introducing the first of its kind workbook designed to help you build a brand and business
        with <strong>clarity, intention, and lasting impact</strong>
      </p>

      <div className="blueprint-image">
        <img src={images.blueprint} alt="The Iconic Brand Blueprint workbook" />
      </div>

      <p className="blueprint-body">
        Now, you can have a strategist&apos;s go-to guide in your own hands, one that brings
        clarity, structure, and strategy to every part of your brand. It&apos;s a complete system for
        building a brand and product/service based business that communicates your vision with
        precision, captivates your audience, and positions you in the marketplace for elevated
        visibility, profitability, and enduring success. Now you can make decisions with confidence,
        create consistency across every touchpoint, and professionally elevate the way your brand
        shows up in the world. Get started and build your iconic brand today!
      </p>

      <div className="blueprint-actions">
        <a
          className="button button-dark"
          href="https://www.thebrandstrategist.co/products/p/theiconicbrandblueprint"
          target="_blank"
          rel="noreferrer"
        >
          Order Now
        </a>
        <a className="text-link" href="https://www.thebrandstrategist.co/blueprint">
          Explore What&apos;s Inside
        </a>
      </div>
    </section>
  )
}

export default Blueprint
