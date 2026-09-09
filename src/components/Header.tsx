import Link from "next/link";
import { Home } from "lucide-react";
import { CONTATO } from "@/lib/constantes";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const links = [
  { href: "#imoveis", label: "Imóveis" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-brand/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-brand">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-cream">
            <Home className="h-4 w-4" />
          </span>
          Vitória Ribeiro <span className="text-gold">Imóveis</span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium text-brand-dark md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTATO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-cream hover:bg-brand-light transition-colors"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}
