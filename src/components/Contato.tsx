import { MessageCircle, MapPin } from "lucide-react";
import { CONTATO } from "@/lib/constantes";

export default function Contato() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl bg-brand px-8 py-14 text-center text-cream md:px-16">
        <p className="text-sm uppercase tracking-widest text-gold-light">Contato</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
          Vamos encontrar o seu imóvel?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-cream/80">
          Fale agora pelo WhatsApp e conte o que você procura.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CONTATO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
          </a>
          <a
            href={CONTATO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold hover:bg-cream/10 transition-colors"
          >
            Instagram
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-cream/70">
          <MapPin className="h-4 w-4" />
          {CONTATO.cidade}/{CONTATO.estado} · {CONTATO.creci}
        </div>
      </div>
    </section>
  );
}
