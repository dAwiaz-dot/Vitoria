import { Star } from "lucide-react";

// Depoimentos fictícios pra demonstração — substituir por avaliações reais.
const depoimentos = [
  {
    nome: "Marcos Aurélio",
    texto:
      "Processo todo muito transparente. A Vitória acompanhou cada etapa e resolveu tudo rápido.",
  },
  {
    nome: "Fernanda Costa",
    texto:
      "Encontrei o apartamento ideal em menos de duas semanas. Atendimento nota 10.",
  },
  {
    nome: "Ricardo Almeida",
    texto:
      "Vendi meu imóvel com segurança e sem dor de cabeça. Recomendo demais.",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-xl">
          <p className="text-sm uppercase tracking-widest text-gold">Depoimentos</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-dark">
            Quem já negociou, recomenda
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <div key={d.nome} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-dark/80">&ldquo;{d.texto}&rdquo;</p>
              <p className="mt-4 font-medium text-brand-dark">{d.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
