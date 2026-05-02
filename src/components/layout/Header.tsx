"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: scrolled ? "16px" : "0",
          left: "50%",
          transform: `translateX(-50%) translateY(${hidden ? "-120%" : "0"})`,
          width: scrolled ? "min(900px, calc(100% - 32px))" : "100%",
          zIndex: 100,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled
            ? "rgba(8,8,8,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderRadius: scrolled ? "999px" : "0",
          border: scrolled ? "1px solid rgba(192,146,42,0.15)" : "none",
          padding: scrolled ? "0.75rem 2rem" : "1.5rem 2rem",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: scrolled ? "100%" : "1400px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--foreground)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            STEEL
            <span style={{ color: "var(--gold)" }}>CUT</span>
            <span
              style={{
                fontSize: "0.55em",
                color: "var(--muted)",
                letterSpacing: "0.2em",
                marginLeft: "2px",
              }}
            >
              KE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--background)",
                background: "var(--gold)",
                textDecoration: "none",
                padding: "0.6rem 1.4rem",
                borderRadius: "999px",
                transition: "opacity 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--foreground)",
                  borderRadius: "2px",
                  transition: "all 0.3s",
                  width: i === 1 ? (menuOpen ? "24px" : "16px") : "24px",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "translateY(7px) rotate(45deg)"
                        : i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transition: "opacity 0.3s, visibility 0.3s",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--foreground)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "1rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--background)",
            background: "var(--gold)",
            padding: "1rem 2.5rem",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          Get a Quote on WhatsApp
        </a>
      </div>
    </>
  );
}
