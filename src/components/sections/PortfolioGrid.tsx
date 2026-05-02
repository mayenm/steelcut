"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO = [
  {
    id: "p1",
    title: "Geometric Wall Panel",
    category: "Wall Art",
    image: "https://picsum.photos/seed/geometric-metal-panel/700/900",
  },
  {
    id: "p2",
    title: "Corporate Logo Sign",
    category: "Signage",
    image: "https://picsum.photos/seed/metal-corporate-sign/700/600",
  },
  {
    id: "p3",
    title: "Floating Steel Table",
    category: "Furniture",
    image: "https://picsum.photos/seed/steel-table-modern/700/800",
  },
  {
    id: "p4",
    title: "Flame-Cut Mural",
    category: "Wall Art",
    image: "https://picsum.photos/seed/flame-cut-steel-mural/700/700",
  },
  {
    id: "p5",
    title: "Personalised Name Plaque",
    category: "Gifts",
    image: "https://picsum.photos/seed/personalised-metal-plaque/700/600",
  },
  {
    id: "p6",
    title: "Industrial Shelf System",
    category: "Furniture",
    image: "https://picsum.photos/seed/industrial-steel-shelf/700/900",
  },
];

export function PortfolioGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title scroll-in
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Each image: scale from 0.88 → 1 on scroll-in, fade and shrink on scroll-out
      imgRefs.current.forEach((img, i) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 0.88, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            delay: (i % 3) * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addImgRef = (el: HTMLDivElement | null, i: number) => {
    if (el) imgRefs.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      style={{
        background: "#0D0D0D",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={titleRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "clamp(2.5rem, 5vw, 4.5rem)",
            gap: "2rem",
            flexWrap: "wrap",
            opacity: 0,
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
              The
              <br />
              <span style={{ color: "var(--gold)" }}>Work</span>
            </h2>
          </div>
          <a
            href="/portfolio"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--foreground)",
              textDecoration: "none",
              borderBottom: "1px solid var(--gold)",
              paddingBottom: "4px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            View All Work
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Masonry-style asymmetric grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
          }}
        >
          {PORTFOLIO.map((item, i) => {
            // Alternate tall/short to create visual rhythm
            const isTall = i % 3 === 0;
            return (
              <div
                key={item.id}
                ref={(el) => addImgRef(el, i)}
                style={{
                  position: "relative",
                  height: isTall ? "520px" : "380px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  opacity: 0,
                  // Offset middle column down for rhythm
                  marginTop: i % 3 === 1 ? "60px" : "0",
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  const overlay = e.currentTarget.querySelector(".p-overlay") as HTMLElement;
                  const label = e.currentTarget.querySelector(".p-label") as HTMLElement;
                  if (img) gsap.to(img, { scale: 1.07, duration: 0.7, ease: "power2.out" });
                  if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.4 });
                  if (label) gsap.to(label, { y: 0, opacity: 1, duration: 0.4 });
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  const overlay = e.currentTarget.querySelector(".p-overlay") as HTMLElement;
                  const label = e.currentTarget.querySelector(".p-label") as HTMLElement;
                  if (img) gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out" });
                  if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.4 });
                  if (label) gsap.to(label, { y: 12, opacity: 0, duration: 0.3 });
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(30%) contrast(1.05)",
                    display: "block",
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="p-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(8,8,8,0.75)",
                    opacity: 0,
                  }}
                />

                {/* Category chip always visible */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    left: "1.25rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    background: "rgba(8,8,8,0.7)",
                    backdropFilter: "blur(8px)",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: "1px solid rgba(192,146,42,0.25)",
                  }}
                >
                  {item.category}
                </div>

                {/* Title on hover */}
                <div
                  className="p-label"
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                    opacity: 0,
                    transform: "translateY(12px)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.35rem",
                      textTransform: "uppercase",
                      color: "var(--foreground)",
                      lineHeight: 1.1,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive collapse */}
        <style>{`
          @media (max-width: 768px) {
            #portfolio-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
