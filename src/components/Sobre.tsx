import { CONTATO } from "@/lib/constantes";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-brand-dark text-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-gold-light">Sobre</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold">
          Vitória Ribeiro
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">
          {/* Texto fictício — substituir pelo texto real da corretora */}
          Corretora de imóveis em Varginha-MG, {CONTATO.creci}, com mais
          de 8 anos acompanhando famílias e investidores na compra, venda
          e locação de imóveis na cidade. Atendimento próximo, em cada
          etapa, do primeiro contato à assinatura do contrato.
        </p>

        <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4">
          <div>
            <p className="font-serif text-3xl font-semibold text-gold-light">120+</p>
            <p className="mt-1 text-sm text-cream/70">Imóveis negociados</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-semibold text-gold-light">8</p>
            <p className="mt-1 text-sm text-cream/70">Anos de experiência</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-semibold text-gold-light">4.9</p>
            <p className="mt-1 text-sm text-cream/70">Avaliação média</p>
          </div>
        </div>
      </div>
    </section>
  );
}
