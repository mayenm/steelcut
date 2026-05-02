"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "cnc",
    label: "CNC Laser & Plasma",
    description:
      "High-precision laser and plasma cutting for intricate shapes, signage, and structural components with tight tolerances.",
    image: "https://picsum.photos/seed/cnc-cutting-metal/800/600",
    size: "large", // col-span-2 row-span-2
    accent: "#C0922A",
  },
  {
    id: "wall-art",
    label: "Custom Metal Art",
    description:
      "Bespoke decorative panels, wall art, and sculptural pieces — from abstract designs to cultural motifs.",
    image: "https://picsum.photos/seed/metal-wall-art/600/600",
    size: "small",
    accent: "#C0922A",
  },
  {
    id: "signage",
    label: "Signage & Branding",
    description:
      "Bold metal logos, dimensional letters, and business signs that command attention.",
    image: "https://picsum.photos/seed/metal-signage-logo/600/600",
    size: "small",
    accent: "#C0922A",
  },
  {
    id: "furniture",
    label: "Furniture & Structural",
    description:
      "Tables, frames, gates, and bespoke furniture — engineered for beauty and built to last.",
    image: "https://picsum.photos/seed/metal-furniture-industrial/800/500",
    size: "medium",
    accent: "#C0922A",
  },
  {
    id: "gifts",
    label: "Gifts & Custom Pieces",
    description:
      "Personalised gifts, trophies, and commemorative metal art for corporate and personal orders.",
    image: "https://picsum.photos/seed/custom-metal-gift/600/400",
    size: "medium",
    accent: "#C0922A",
  },
];

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, i: number) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
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
            What We
            <br />
            <span style={{ color: "var(--gold)" }}>Build</span>
          </h2>
        </div>
        <p
          style={{
            maxWidth: "340px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "rgba(240,240,240,0.55)",
            lineHeight: 1.7,
          }}
        >
          Every piece is designed, cut, and finished in our Nairobi workshop.
          No outsourcing, no compromises.
        </p>
      </div>

      {/* Gapless Bento Grid — grid-flow-dense, mathematically verified: 4 cols, rows fill perfectly */}
      {/* Large card: col 1-2, row 1-2. Small card: col 3, row 1. Small card: col 4, row 1. Medium: col 3-4, row 2. Row 3: Medium + Medium */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "280px",
          gap: "12px",
          gridAutoFlow: "dense",
        }}
      >
        {/* Large card (col 1-2, row 1-2) */}
        <div
          ref={(el) => addToRefs(el, 0)}
          style={{
            gridColumn: "1 / 3",
            gridRow: "1 / 3",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            opacity: 0,
          }}
        >
          <ServiceCard service={SERVICES[0]} tall />
        </div>

        {/* Small card top-right */}
        <div
          ref={(el) => addToRefs(el, 1)}
          style={{ gridColumn: "3 / 4", gridRow: "1", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer", opacity: 0 }}
        >
          <ServiceCard service={SERVICES[1]} />
        </div>
        <div
          ref={(el) => addToRefs(el, 2)}
          style={{ gridColumn: "4 / 5", gridRow: "1", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer", opacity: 0 }}
        >
          <ServiceCard service={SERVICES[2]} />
        </div>

        {/* Medium card col 3-4, row 2 */}
        <div
          ref={(el) => addToRefs(el, 3)}
          style={{ gridColumn: "3 / 5", gridRow: "2", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer", opacity: 0 }}
        >
          <ServiceCard service={SERVICES[3]} />
        </div>

        {/* Last card full-width row */}
        <div
          ref={(el) => addToRefs(el, 4)}
          style={{ gridColumn: "1 / 5", gridRow: "3", borderRadius: "16px", overflow: "hidden", position: "relative", cursor: "pointer", height: "200px", opacity: 0 }}
        >
          <ServiceCard service={SERVICES[4]} wide />
        </div>
      </div>

      {/* Responsive: collapse to 1 col on small screens via a style tag */}
      <style>{`
        @media (max-width: 768px) {
          #services-grid { grid-template-columns: 1fr !important; grid-auto-rows: 240px !important; }
          #services-grid > div { grid-column: auto !important; grid-row: auto !important; height: 240px !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  service,
  tall = false,
  wide = false,
}: {
  service: (typeof SERVICES)[0];
  tall?: boolean;
  wide?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    const image = cardRef.current?.querySelector("img");
    const description = contentRef.current?.querySelector("p");

    if (image) {
      gsap.to(image, { scale: 1.06, duration: 0.7, ease: "power2.out" });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0.88, duration: 0.4 });
    }

    if (description) {
      gsap.to(description, { opacity: 1, y: 0, duration: 0.4 });
    }
  };

  const handleLeave = () => {
    const image = cardRef.current?.querySelector("img");
    const description = contentRef.current?.querySelector("p");

    if (image) {
      gsap.to(image, { scale: 1, duration: 0.7, ease: "power2.out" });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0.55, duration: 0.4 });
    }

    if (description) {
      gsap.to(description, { opacity: 0, y: 8, duration: 0.3 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ height: "100%", position: "relative" }}
    >
      {/* Background image */}
      <img
        src={service.image}
        alt={service.label}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(40%) contrast(1.1)",
          transform: "scale(1)",
        }}
      />

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.2) 60%)",
          opacity: 0.55,
        }}
      />

      {/* Card content */}
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          inset: 0,
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "0.5rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: tall ? "clamp(1.6rem, 3vw, 2.4rem)" : "1.25rem",
            textTransform: "uppercase",
            color: "var(--foreground)",
            lineHeight: 1,
          }}
        >
          {service.label}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "rgba(240,240,240,0.8)",
            lineHeight: 1.6,
            opacity: 0,
            transform: "translateY(8px)",
            maxWidth: wide ? "600px" : "100%",
          }}
        >
          {service.description}
        </p>
        <a
          href={getWhatsAppLink(`Hi Steelcut KE! I'm interested in ${service.label}.`)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textDecoration: "none",
            marginTop: "0.25rem",
          }}
        >
          Enquire
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}
