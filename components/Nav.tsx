"use client";

import { site } from "@/lib/data";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", n: "01" },
  { href: "#skills", label: "Skills", n: "02" },
  { href: "#work", label: "Work", n: "03" },
  { href: "#experience", label: "Experience", n: "04" },
  { href: "#cv", label: "CV", n: "05" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="shell nav-inner">
          <a href="#top" className="brand" aria-label="Ramin Ahmed — home">
            <span>
              Ramin Ahmed
              <small>Full-Stack Developer</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">
            Let&apos;s talk
          </a>

          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label} <span>{l.n}</span>
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact <span>06</span>
        </a>
        <a
          href={site.cv}
          download
          onClick={() => setOpen(false)}
          style={{ color: "var(--acid)" }}
        >
          Download CV <span>PDF</span>
        </a>
      </div>
    </>
  );
}
