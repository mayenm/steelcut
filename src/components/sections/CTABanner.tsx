"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the gold line width
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Headline text scrub opacity — each word fades in sequentially on scroll
      if (headRef.current) {
        const words = headRef.current.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { opacity: 0.08, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // CTA button pop
      gsap.fromTo(
        btnRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split headline into word spans manually for the word-by-word animation
  const headline = ["Ready to", "Build", "Something", "Bold?"];

  return (
    <section
      ref={sectionRef}
      id="cta-banner"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0D0D0D",
        padding: "clamp(6rem, 12vw, 11rem) clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      {/* Large decorative background text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(8rem, 25vw, 22rem)",
            textTransform: "uppercase",
            color: "rgba(192,146,42,0.04)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          STEELCUT
        </span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "clamp(2rem, 4vw, 3.5rem)",
        }}
      >
        {/* Gold rule */}
        <div
          ref={lineRef}
          style={{
            width: "80px",
            height: "2px",
            background: "var(--gold)",
          }}
        />

        {/* Word-by-word animated headline */}
        <h2
          ref={headRef}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(4rem, 10vw, 10rem)",
            textTransform: "uppercase",
            lineHeight: 0.88,
            color: "var(--foreground)",
            maxWidth: "min(1000px, 100%)",
          }}
        >
          {headline.map((word, i) => (
            <span
              key={i}
              className="word"
              style={{
                display: "inline-block",
                marginRight: "0.25em",
                opacity: 0.08,
                color: i === 1 ? "var(--gold)" : "var(--foreground)",
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            fontWeight: 300,
            color: "rgba(240,240,240,0.55)",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          Every great piece starts with a conversation. Message us on WhatsApp
          and get a custom quote within 24 hours.
        </p>

        {/* CTA */}
        <a
          ref={btnRef}
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-whatsapp-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#080808",
            background: "var(--foreground)",
            padding: "1.2rem 3rem",
            borderRadius: "999px",
            textDecoration: "none",
            opacity: 0,
            transition: "background 0.25s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--foreground)";
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          {/* WhatsApp icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Message Us on WhatsApp
        </a>

        {/* Supporting details */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Response Time", value: "< 24 hours" },
            { label: "Location", value: "Bandari Rd, Nairobi" },
            { label: "Orders", value: "Bulk & Custom" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  textTransform: "uppercase",
                  color: "var(--foreground)",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
