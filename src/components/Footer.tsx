import { CONTATO } from "@/lib/constantes";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-cream py-8 text-center text-sm text-brand-dark/60">
      <div className="mb-4 flex items-center justify-center gap-4">
        <a
          href={CONTATO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/5 text-brand transition-colors hover:bg-brand hover:text-cream"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
        <a
          href={CONTATO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/5 text-brand transition-colors hover:bg-brand hover:text-cream"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
      </div>

      <p>
        {CONTATO.nome} · {CONTATO.creci} · {CONTATO.cidade}/{CONTATO.estado}
      </p>
      <p className="mt-1">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
}
