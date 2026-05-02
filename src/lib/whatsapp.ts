const WHATSAPP_NUMBER = "254714929913";

export function getWhatsAppLink(message?: string) {
  const defaultMsg = "Hi Steelcut KE! I'd like to request a custom quote.";
  const encoded = encodeURIComponent(message ?? defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
