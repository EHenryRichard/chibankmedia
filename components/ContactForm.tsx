"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const brand = data.get("brand") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBrand / Business: ${brand}\n\n${message}`
    );
    window.location.href = `mailto:hello@chibankzmedia.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ paddingBlock: "2rem" }}>
        <span className="label no-line">Message Sent</span>
        <h3 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBlock: "1.2rem 0.8rem" }}>
          Your message is on its way.
        </h3>
        <p style={{ color: "var(--cream-dim)" }}>
          We&apos;ve opened your email client with everything pre-filled. If it
          didn&apos;t open, reach us at{" "}
          <a href="mailto:hello@chibankzmedia.com" style={{ color: "var(--orange)", textDecoration: "underline" }}>
            hello@chibankzmedia.com
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" required placeholder="Jane Doe" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" required placeholder="you@brand.com" />
      </div>
      <div className="form-field">
        <label htmlFor="brand">Brand / Business Name</label>
        <input id="brand" name="brand" type="text" placeholder="What should we know it as?" />
      </div>
      <div className="form-field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your goals, your platforms, and where you're stuck."
        />
      </div>
      <div style={{ marginTop: "0.8rem" }}>
        <button type="submit" className="btn btn-orange">
          Send Message
        </button>
      </div>
      <p style={{ marginTop: "1.2rem", fontSize: "0.8rem", color: "var(--cream-sub)" }}>
        Prefer direct contact? Email hello@chibankzmedia.com
      </p>
    </form>
  );
}
