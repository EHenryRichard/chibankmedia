"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const brand = (data.get("brand") as string) || "";
    const message = (data.get("message") as string) || "";

    // Until a backend / form service is wired up, hand off to the user's
    // email client with everything pre-filled.
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBrand / Business: ${brand}\n\n${message}`
    );
    window.location.href = `mailto:hello@chibankzmedia.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        style={{
          border: "1px solid var(--line)",
          borderRadius: 18,
          padding: "2.4rem",
          background: "var(--white)",
        }}
      >
        <span className="eyebrow">Thank You</span>
        <h3 style={{ fontSize: "1.8rem", marginBlock: "1rem 0.8rem" }}>
          Your message is on its way.
        </h3>
        <p style={{ color: "var(--ink-soft)" }}>
          We&apos;ve opened your email app with the details ready to send. If it
          didn&apos;t open, reach us directly at{" "}
          <a href="mailto:hello@chibankzmedia.com" style={{ color: "var(--orange)" }}>
            hello@chibankzmedia.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" required placeholder="Jane Doe" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@brand.com" />
      </div>
      <div className="field">
        <label htmlFor="brand">Brand / Business</label>
        <input id="brand" name="brand" type="text" placeholder="What should we know it as?" />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your goals, your platforms, and where you're stuck."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
      <p className="form-note">
        Prefer to chat? Email us directly at hello@chibankzmedia.com.
      </p>
    </form>
  );
}
