import { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Steelcut KE — Nairobi's precision CNC cutting and custom metal fabrication studio.",
};

const STATS = [
  { value: "100%", label: "Kenyan Made" },
  { value: "3.3k+", label: "Community" },
  { value: "< 24h", label: "Quote Time" },
  { value: "2019", label: "Est." },
];

const VALUES = [
  {
    title: "Precision",
    body: "Every cut is made to spec. We work to tolerances under 1mm — because details are what separate craft from commodity.",
  },
  {
    title: "Local First",
    body: "100% Kenyan-owned, staffed, and operated. Every shilling you spend stays in Nairobi.",
  },
  {
    title: "Transparency",
    body: "No hidden costs. You get a clear quote, a realistic timeline, and regular updates via WhatsApp.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "#080808",
        }}
      >
        {/* Background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://picsum.photos/seed/metal-workshop-nairobi/1920/1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(55%) contrast(1.1)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.1) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "clamp(7rem, 14vw, 11rem) clamp(1.5rem, 5vw, 3rem) clamp(4rem, 8vw, 7rem)",
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
              maxWidth: "900px",
            }}
          >
            Forged in{" "}
            <span style={{ color: "var(--gold)" }}>Nairobi.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section
        style={{
          background: "#0D0D0D",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 6vw, 7rem)",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                textTransform: "uppercase",
                lineHeight: 0.92,
                color: "var(--foreground)",
                marginBottom: "2rem",
              }}
            >
              Our <span style={{ color: "var(--gold)" }}>Story</span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(240,240,240,0.65)",
                lineHeight: 1.8,
              }}
            >
              <p>
                Located on Bandari Road in Nairobi, Steelcut KE was born from a passion for industrial arts and a drive to elevate local manufacturing. We saw a gap — highly precise, custom metal fabrications that didn&apos;t compromise on design or structural integrity.
              </p>
              <p>
                Today we are a fully Kenyan-owned and operated studio. From initial CAD design to final plasma cut and finishing, every step happens under one roof. No outsourcing. No shortcuts.
              </p>
              <p>
                We believe steel is more than a building material — it&apos;s a canvas. Whether we&apos;re crafting a massive corporate sign or a delicate wall art piece, our commitment to precision stays the same.
              </p>
            </div>
          </div>

          {/* Workshop image */}
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "4 / 5",
            }}
          >
            <img
              src="https://picsum.photos/seed/steel-workshop-cutting-cnc/700/900"
              alt="Steelcut KE Workshop"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>

        {/* Responsive */}
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>

      {/* Stats */}
      <section
        style={{
          background: "#080808",
          borderTop: "1px solid rgba(192,146,42,0.15)",
          borderBottom: "1px solid rgba(192,146,42,0.15)",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: "#0D0D0D",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.2rem" }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              textTransform: "uppercase",
              lineHeight: 0.88,
              color: "var(--foreground)",
              marginBottom: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            How We <span style={{ color: "var(--gold)" }}>Work</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
          >
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                style={{
                  padding: "clamp(2rem, 4vw, 3rem)",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: i === 0 ? "16px 0 0 16px" : i === VALUES.length - 1 ? "0 16px 16px 0" : "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
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
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    textTransform: "uppercase",
                    lineHeight: 0.92,
                    color: "var(--foreground)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    color: "rgba(240,240,240,0.6)",
                    lineHeight: 1.75,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          <style>{`@media(max-width:768px){.values-grid{grid-template-columns:1fr !important;}}`}</style>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
