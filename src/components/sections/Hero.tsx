"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          headlineRef.current,
          { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.1 },
          "-=0.3"
        )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#080808",
      }}
    >
      {/* Full-bleed background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://picsum.photos/seed/metal-fabrication-sparks/1920/1080')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          filter: "grayscale(60%) contrast(1.1)",
        }}
      />
      {/* Dark gradient wash — ensures text legibility */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.7) 45%, rgba(8,8,8,0.15) 100%)",
        }}
      />
      {/* Radial vignette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 0%, rgba(8,8,8,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 6rem) clamp(1.5rem, 5vw, 3rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        {/* Gold rule */}
        <div
          ref={lineRef}
          style={{
            width: "80px",
            height: "2px",
            background: "var(--gold)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Eyebrow badge */}
        <div
          ref={badgeRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "1.25rem",
            opacity: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Kenyan-Made · Nairobi
          </span>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--gold)",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Main headline — NEVER more than 3 lines, ultra-wide container */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(4.5rem, 11vw, 11rem)",
            lineHeight: 0.88,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            maxWidth: "min(1100px, 100%)",
            marginBottom: "2.5rem",
            opacity: 0,
          }}
        >
          Precision Cut.
          <br />
          <span style={{ color: "var(--gold)" }}>Kenyan</span> Made.
        </h1>

        {/* Sub-copy */}
        <p
          ref={subRef}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            fontWeight: 300,
            color: "rgba(240,240,240,0.65)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
            opacity: 0,
          }}
        >
          CNC cutting, custom metal art &amp; bespoke fabrications — built with
          precision in Nairobi, delivered across Kenya.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#080808",
              background: "var(--foreground)",
              textDecoration: "none",
              padding: "1.1rem 2.5rem",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.25s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--foreground)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Get a Custom Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          <a
            href="/portfolio"
            id="hero-portfolio-cta"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              background: "transparent",
              textDecoration: "none",
              padding: "1.1rem 2.5rem",
              borderRadius: "999px",
              border: "1px solid rgba(240,240,240,0.2)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.25s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,240,240,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "clamp(1.5rem, 5vw, 3rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, transparent, var(--gold))",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes scrollPulse {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
          `}</style>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
