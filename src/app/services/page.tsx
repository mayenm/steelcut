import { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Scissors, Palette, Type, Hammer, Settings, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Precision CNC cutting, custom metal art, signage, furniture and more — built in Nairobi, Kenya.",
};

const ALL_SERVICES = [
  {
    title: "CNC Laser & Plasma Cutting",
    description:
      "High-precision cutting of various metals for industrial, architectural, and decorative purposes. We handle complex geometric patterns and large-scale cuts with tolerances under 1mm.",
    icon: Scissors,
    image: "https://picsum.photos/seed/cnc-plasma-cutting-factory/900/500",
    wa: "CNC Laser & Plasma Cutting",
  },
  {
    title: "Custom Metal Art",
    description:
      "Statement pieces, decorative wall panels, and bespoke sculptures designed to elevate any residential or commercial space. Every piece is one of a kind.",
    icon: Palette,
    image: "https://picsum.photos/seed/custom-metal-wall-art-studio/900/500",
    wa: "Custom Metal Art",
  },
  {
    title: "Signage & Branding",
    description:
      "Durable, high-impact business signs, backlit logos, and custom metal lettering that make your brand impossible to ignore.",
    icon: Type,
    image: "https://picsum.photos/seed/metal-business-signage/900/500",
    wa: "Signage & Branding",
  },
  {
    title: "Furniture & Structural",
    description:
      "Industrial-style tables, gates, handrails, and bespoke metal furniture pieces engineered for beauty and built to last generations.",
    icon: Hammer,
    image: "https://picsum.photos/seed/industrial-metal-furniture/900/500",
    wa: "Furniture & Structural",
  },
  {
    title: "Corporate & Bulk Orders",
    description:
      "Consistent, high-quality production runs for corporate awards, branded merchandise, or architectural components at scale.",
    icon: Settings,
    image: "https://picsum.photos/seed/corporate-metal-awards/900/500",
    wa: "Corporate & Bulk Orders",
  },
  {
    title: "Gifting & Custom Pieces",
    description:
      "Personalised, smaller-scale metal pieces perfect for weddings, anniversaries, or special corporate gifts — engraved and finished to order.",
    icon: Gift,
    image: "https://picsum.photos/seed/personalised-gift-metal/900/500",
    wa: "Gifting & Custom Pieces",
  },
];

export default function ServicesPage() {
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
          What We <span style={{ color: "var(--gold)" }}>Do</span>
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
          Precision capabilities for any scale. If it can be cut, welded, or formed from steel — we build it.
        </p>
      </section>

      {/* Services list */}
      <section
        style={{
          background: "#0D0D0D",
          padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 9rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {ALL_SERVICES.map((service, idx) => (
            <div
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                overflow: "hidden",
                borderRadius: idx === 0 ? "16px 16px 0 0" : idx === ALL_SERVICES.length - 1 ? "0 0 16px 16px" : "0",
                background: idx % 2 === 0 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "320px",
                  overflow: "hidden",
                  order: idx % 2 === 0 ? 0 : 1,
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(35%) contrast(1.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(8,8,8,0.4) 0%, transparent 100%)",
                  }}
                />
                {/* Icon badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(192,146,42,0.15)",
                    border: "1px solid rgba(192,146,42,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <service.icon size={22} color="var(--gold)" />
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1.25rem",
                  order: idx % 2 === 0 ? 1 : 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                    textTransform: "uppercase",
                    lineHeight: 0.92,
                    color: "var(--foreground)",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    color: "rgba(240,240,240,0.6)",
                    lineHeight: 1.75,
                    maxWidth: "420px",
                  }}
                >
                  {service.description}
                </p>
                <a
                  href={getWhatsAppLink(`Hi Steelcut KE! I'm interested in your ${service.wa} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#080808",
                    background: "var(--gold)",
                    padding: "0.75rem 1.75rem",
                    borderRadius: "999px",
                    textDecoration: "none",
                    width: "fit-content",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                >
                  Enquire on WhatsApp
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stack to single column */}
        <style>{`
          @media (max-width: 768px) {
            .services-row { grid-template-columns: 1fr !important; }
            .services-row .service-img { height: 220px !important; order: 0 !important; }
            .services-row .service-content { order: 1 !important; }
          }
        `}</style>
      </section>

      <CTABanner />
    </>
  );
}
