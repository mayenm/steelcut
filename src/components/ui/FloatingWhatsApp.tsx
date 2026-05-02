"use client"

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { getWhatsAppLink } from "@/lib/whatsapp"

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-black/90 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none hidden md:block border border-white/10">
        Get a Custom Quote
      </span>
    </a>
  )
}
