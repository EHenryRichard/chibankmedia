"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="nav-inner">
        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <Link href="/" className="logo-mark" onClick={() => setOpen(false)}>
          <span className="logo-the">the</span>
          <span className="logo-name">CHIBANKZ</span>
          <span className="logo-sub">MEDIA</span>
        </Link>

        <div className="nav-spacer" aria-hidden="true" />
      </div>

      <div className={`mobile-nav${open ? " open" : ""}`} aria-hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="nav-cta-item">
            <Link
              href="/contact"
              className="btn btn-sand"
              onClick={() => setOpen(false)}
            >
              Work With Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
