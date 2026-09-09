import { ShieldCheck, MapPinned, Handshake, Clock } from "lucide-react";

const itens = [
  {
    icon: ShieldCheck,
    titulo: "Negociação segura",
    descricao: "Documentação e contratos conferidos em cada etapa, sem surpresas.",
  },
  {
    icon: MapPinned,
    titulo: "Conhecimento local",
    descricao: "Anos de atuação em Varginha, com visão real de cada bairro.",
  },
  {
    icon: Handshake,
    titulo: "Atendimento próximo",
    descricao: "Acompanhamento direto, do primeiro contato até a chave na mão.",
  },
  {
    icon: Clock,
    titulo: "Resposta rápida",
    descricao: "Retorno ágil pelo WhatsApp em todas as etapas do processo.",
  },
];

export default function Diferenciais() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {itens.map(({ icon: Icon, titulo, descricao }) => (
          <div key={titulo} className="rounded-2xl border border-brand/10 p-6">
            <Icon className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-serif text-lg font-semibold text-brand-dark">
              {titulo}
            </h3>
            <p className="mt-2 text-sm text-brand-dark/70">{descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
