import Image from "next/image";
import { CONTATO } from "@/lib/constantes";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-cream">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
        alt="Casa à venda em Varginha"
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 text-sm uppercase tracking-widest text-gold-light">
          {CONTATO.creci} · {CONTATO.cidade}/{CONTATO.estado}
        </p>
        <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          O imóvel certo, com quem conhece Varginha de verdade.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/80">
          Compra, venda e locação com atendimento próximo, do primeiro contato
          até a chave na mão.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#imoveis"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-gold-light transition-colors"
          >
            Ver imóveis disponíveis
          </a>
          <a
            href={CONTATO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold hover:bg-cream/10 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
