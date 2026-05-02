"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CTABanner } from "@/components/sections/CTABanner";
import { getWhatsAppLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", "Wall Art", "Signage", "Furniture", "Gifts", "Industrial"];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Geometric Gate", category: "Industrial", image: "https://picsum.photos/seed/geometric-gate-metal/700/700" },
  { id: 2, title: "Lion Head Silhouette", category: "Wall Art", image: "https://picsum.photos/seed/lion-metal-wall-art/700/700" },
  { id: 3, title: "Coffee Shop Sign", category: "Signage", image: "https://picsum.photos/seed/coffee-metal-sign/700/700" },
  { id: 4, title: "Steel Frame Desk", category: "Furniture", image: "https://picsum.photos/seed/steel-frame-desk-modern/700/700" },
  { id: 5, title: "Map of Africa", category: "Wall Art", image: "https://picsum.photos/seed/africa-map-metal/700/700" },
  { id: 6, title: "Engraved Keychain", category: "Gifts", image: "https://picsum.photos/seed/engraved-metal-keychain/700/700" },
  { id: 7, title: "Privacy Screen", category: "Industrial", image: "https://picsum.photos/seed/metal-privacy-screen/700/700" },
  { id: 8, title: "Neon Backlit Logo", category: "Signage", image: "https://picsum.photos/seed/neon-backlit-metal-logo/700/700" },
  { id: 9, title: "Custom Fire Pit", category: "Furniture", image: "https://picsum.photos/seed/custom-metal-fire-pit/700/700" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const gridRef = React.useRef<HTMLDivElement>(null);

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "All") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  React.useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".port-card");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.07, ease: "power3.out" }
    );
  }, [filteredItems]);

  return (
    <>
      {/* Page hero */}
      <section
        style={{
          paddingTop: "clamp(7rem, 14vw, 11rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          paddingLeft: "clamp(1.5rem, 5vw, 3rem)",
          paddingRight: "clamp(1.5rem, 5vw, 3rem)",
          background: "#080808",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.2rem" }} />
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(4rem, 10vw, 9rem)",
            textTransform: "uppercase",
            lineHeight: 0.88,
            color: "var(--foreground)",
            marginBottom: "1.5rem",
          }}
        >
          The <span style={{ color: "var(--gold)" }}>Work</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "rgba(240,240,240,0.55)",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          Browse our gallery of Kenyan-made precision metalwork — built in Nairobi for clients across Kenya.
        </p>
      </section>

      {/* Filter chips */}
      <div
        style={{
          background: "#080808",
          paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
          paddingLeft: "clamp(1.5rem, 5vw, 3rem)",
          paddingRight: "clamp(1.5rem, 5vw, 3rem)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.55rem 1.4rem",
                borderRadius: "999px",
                border: "1px solid",
                borderColor: activeCategory === cat ? "var(--gold)" : "rgba(255,255,255,0.1)",
                background: activeCategory === cat ? "var(--gold)" : "transparent",
                color: activeCategory === cat ? "#080808" : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section
        style={{
          background: "#0D0D0D",
          padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 9rem)",
        }}
      >
        <div
          ref={gridRef}
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
            gap: "12px",
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="port-card"
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
                const label = e.currentTarget.querySelector(".label") as HTMLElement;
                if (img) gsap.to(img, { scale: 1.07, duration: 0.7, ease: "power2.out" });
                if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.3 });
                if (label) gsap.to(label, { y: 0, opacity: 1, duration: 0.35 });
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
                const label = e.currentTarget.querySelector(".label") as HTMLElement;
                if (img) gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out" });
                if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
                if (label) gsap.to(label, { y: 12, opacity: 0, duration: 0.25 });
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(25%)" }}
              />
              <div
                className="overlay"
                style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.75)", opacity: 0 }}
              />
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
              <div
                className="label"
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
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    color: "var(--foreground)",
                    lineHeight: 1.1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <a
                  href={getWhatsAppLink(`Hi Steelcut KE! I'm interested in a piece similar to "${item.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    textDecoration: "none",
                  }}
                >
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
