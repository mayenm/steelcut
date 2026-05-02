"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: "t1",
    quote: "The precision on our wall installation was extraordinary. Every cut was perfect — exactly what we envisioned.",
    name: "Amara N.",
    role: "Interior Designer, Nairobi",
    initials: "AN",
  },
  {
    id: "t2",
    quote: "Our office sign turned heads from day one. Steelcut delivered faster than expected and the finish was immaculate.",
    name: "Brian K.",
    role: "Director, BK Holdings",
    initials: "BK",
  },
  {
    id: "t3",
    quote: "The metal art piece they made for my living room is the first thing every guest asks about. Truly Kenyan craft at its finest.",
    name: "Safi O.",
    role: "Homeowner, Karen",
    initials: "SO",
  },
];

const MARQUEE_WORDS = [
  "Precision", "Nairobi", "Craftsmanship", "CNC", "Kenyan Made",
  "Metal Art", "Bespoke", "Custom", "Industrial", "Precision",
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee
      if (marqueeRef.current) {
        const track = marqueeRef.current;
        const width = track.scrollWidth / 2;
        gsap.to(track, {
          x: -width,
          duration: 22,
          ease: "none",
          repeat: -1,
        });
      }

      // Cards stagger in
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        padding: "clamp(5rem, 10vw, 9rem) 0",
        background: "var(--background)",
        overflow: "hidden",
      }}
    >
      {/* Section label */}
      <div
        style={{
          padding: "0 clamp(1.5rem, 5vw, 3rem)",
          maxWidth: "1400px",
          margin: "0 auto",
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "2px",
            background: "var(--gold)",
            marginBottom: "1.2rem",
          }}
        />
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
            textTransform: "uppercase",
            lineHeight: 0.88,
            color: "var(--foreground)",
          }}
        >
          What They
          <br />
          <span style={{ color: "var(--gold)" }}>Say</span>
        </h2>
      </div>

      {/* Infinite marquee — full bleed */}
      <div
        style={{
          overflow: "hidden",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          borderTop: "1px solid rgba(192,146,42,0.15)",
          borderBottom: "1px solid rgba(192,146,42,0.15)",
          padding: "1.1rem 0",
        }}
      >
        <div
          ref={marqueeRef}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            gap: "0",
          }}
        >
          {/* Duplicated twice for seamless loop */}
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: i % 4 === 0 ? "var(--gold)" : "rgba(240,240,240,0.12)",
                padding: "0 2.5rem",
                flexShrink: 0,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonial cards */}
      <div
        style={{
          padding: "0 clamp(1.5rem, 5vw, 3rem)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "16px",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.id}
            ref={(el) => { if (el) cardsRef.current[i] = el; }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "2.5rem",
              position: "relative",
              opacity: 0,
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,146,42,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            {/* Large quote mark */}
            <span
              aria-hidden
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                lineHeight: 1,
                color: "var(--gold)",
                opacity: 0.15,
                position: "absolute",
                top: "1rem",
                right: "1.5rem",
                userSelect: "none",
              }}
            >
              &ldquo;
            </span>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                fontWeight: 300,
                color: "rgba(240,240,240,0.8)",
                lineHeight: 1.75,
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {/* Avatar initials */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(192,146,42,0.15)",
                  border: "1px solid rgba(192,146,42,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--gold)",
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "var(--foreground)",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
