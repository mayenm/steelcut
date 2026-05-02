import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Steelcut KE",
    default: "Steelcut KE — Custom Metal Fabrication in Nairobi, Kenya",
  },
  description:
    "Precision CNC cutting, custom metal art, and fabrications. Kenyan-made for homes, offices, and gifts. Based in Nairobi.",
  openGraph: {
    title: "Steelcut KE — Custom Metal Fabrication in Nairobi, Kenya",
    description: "Precision CNC cutting, custom metal art, and fabrications. Kenyan-made for homes, offices, and gifts.",
    url: "https://steelcut.ke",
    siteName: "Steelcut KE",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steelcut KE",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${barlowCondensed.variable} h-full`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
