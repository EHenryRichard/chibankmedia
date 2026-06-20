# Chibankz Media

Marketing website for **Chibankz Media** — a couple's brand helping small
businesses and personal brands grow online with clarity, consistency, and
content that connects.

Built with **Next.js 14 (App Router)** and **TypeScript**.

## Design

- **Charcoal** `#2c2929` — primary dark
- **Burnt orange** `#e06a30` — accent
- **Warm cream / white** — backgrounds
- Editorial, strategy-led layout inspired by premium brand-agency sites
- Display serif (Fraunces) + clean sans (Inter)

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, stats, positioning, services, promise |
| `/about` | The couple's story + James's bio |
| `/services` | Full service list + how-we-work process |
| `/work` | Selected results / portfolio |
| `/contact` | Enquiry form + details |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Notes

- The contact form currently opens the visitor's email client with details
  pre-filled (`components/ContactForm.tsx`). Swap in a form service
  (Formspree, Resend, a route handler, etc.) when ready.
- Social links and the email address are placeholders — update them in
  `components/Footer.tsx`, `components/ContactForm.tsx`, and
  `app/contact/page.tsx`.
- Logo is text-based for now; drop in a real logo when available.
