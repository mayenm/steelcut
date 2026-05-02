import { Metadata } from "next";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steelcut KE. Find our Nairobi workshop or request a custom metal fabrication quote.",
};

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Workshop",
    value: "Bandari Road, Nairobi, Kenya",
    link: "https://maps.google.com/?q=Bandari+Road,+Nairobi,+Kenya",
    linkLabel: "Open in Maps →",
  },
  {
    icon: Phone,
    label: "WhatsApp & Calls",
    value: "+254 714 929 913",
    link: getWhatsAppLink(),
    linkLabel: "Message us →",
  },
  {
    icon: ({ size, color }: { size: number; color: string }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: "Instagram",
    value: "@steelcut.ke",
    link: "https://instagram.com/steelcut.ke",
    linkLabel: "Follow us →",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 8am – 5pm\nSat: 9am – 1pm",
    link: null,
    linkLabel: null,
  },
];

export default function ContactPage() {
  return (
    <section
      style={{
        background: "#080808",
        minHeight: "100vh",
        padding: "clamp(7rem, 14vw, 11rem) clamp(1.5rem, 5vw, 3rem) clamp(5rem, 10vw, 9rem)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5.5rem)" }}>
          <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.2rem" }} />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(4rem, 10vw, 9rem)",
              textTransform: "uppercase",
              lineHeight: 0.88,
              color: "var(--foreground)",
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s <span style={{ color: "var(--gold)" }}>Talk</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(240,240,240,0.55)",
              maxWidth: "440px",
              lineHeight: 1.7,
            }}
          >
            Ready to start your next metal project? The fastest way to reach us is on WhatsApp — we typically respond within a few hours.
          </p>
        </div>

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2.5rem, 5vw, 5rem)",
            alignItems: "start",
          }}
        >
          {/* Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {CONTACT_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.75rem 2rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(192,146,42,0.12)",
                    border: "1px solid rgba(192,146,42,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={18} color="var(--gold)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "var(--foreground)",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.value}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "6px",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "var(--gold)",
                        textDecoration: "none",
                      }}
                    >
                      {item.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA block */}
          <div>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                marginBottom: "12px",
              }}
            >
              <img
                src="https://picsum.photos/seed/nairobi-workshop-metal/800/500"
                alt="Steelcut KE workshop"
                style={{ width: "100%", height: "300px", objectFit: "cover", filter: "grayscale(40%)", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    textTransform: "uppercase",
                    color: "var(--foreground)",
                  }}
                >
                  Bandari Rd, Nairobi
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div
              style={{
                padding: "2.5rem",
                background: "rgba(192,146,42,0.08)",
                border: "1px solid rgba(192,146,42,0.2)",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  textTransform: "uppercase",
                  color: "var(--foreground)",
                  marginBottom: "0.75rem",
                  lineHeight: 1,
                }}
              >
                Fastest Response
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "rgba(240,240,240,0.6)",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                Send a sketch or description of your project on WhatsApp for a fast, no-obligation quote.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#080808",
                  background: "#25D366",
                  padding: "1.1rem 2rem",
                  borderRadius: "999px",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Mobile stack */}
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  );
}
