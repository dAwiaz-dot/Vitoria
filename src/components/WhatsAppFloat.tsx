"use client";

import { CONTATO } from "@/lib/constantes";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTATO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
