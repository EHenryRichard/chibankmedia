"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blueprint", label: "The Blueprint™" },
  { href: "/partnership", label: "The Partnership™" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
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
