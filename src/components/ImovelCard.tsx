import Image from "next/image";
import { BedDouble, Bath, Car, Ruler } from "lucide-react";
import type { Imovel } from "@/lib/imoveis";
import { CONTATO } from "@/lib/constantes";

function formatarPreco(valor: number, finalidade: Imovel["finalidade"]) {
  const preco = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  return finalidade === "Aluguel" ? `${preco}/mês` : preco;
}

export default function ImovelCard({ imovel }: { imovel: Imovel }) {
  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse no imóvel "${imovel.titulo}" (${imovel.bairro}, ${imovel.cidade}) que vi no site.`
  );
  const linkWhatsapp = `${CONTATO.whatsappUrl}&text=${mensagem}`;

  return (
    <div className="group overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand/10">
        <Image
          src={imovel.imagem}
          alt={imovel.titulo}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-medium text-cream">
          {imovel.finalidade}
        </div>
        {imovel.destaque && (
          <div className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-brand-dark">
            Destaque
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-gold">
          {imovel.tipo} · {imovel.bairro}, {imovel.cidade}
        </p>
        <h3 className="mt-1 font-serif text-lg font-semibold text-brand-dark">
          {imovel.titulo}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-brand-dark/60">
          {imovel.descricao}
        </p>
        <p className="mt-3 text-xl font-semibold text-brand">
          {formatarPreco(imovel.preco, imovel.finalidade)}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-brand-dark/70">
          {imovel.quartos && (
            <span className="flex items-center gap-1">
              <BedDouble className="h-4 w-4" /> {imovel.quartos}
            </span>
          )}
          {imovel.banheiros && (
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4" /> {imovel.banheiros}
            </span>
          )}
          {imovel.vagas && (
            <span className="flex items-center gap-1">
              <Car className="h-4 w-4" /> {imovel.vagas}
            </span>
          )}
          {imovel.areaM2 && (
            <span className="flex items-center gap-1">
              <Ruler className="h-4 w-4" /> {imovel.areaM2}m²
            </span>
          )}
        </div>

        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block w-full rounded-full bg-brand py-2.5 text-center text-sm font-medium text-cream transition-colors hover:bg-brand-light"
        >
          Tenho interesse
        </a>
      </div>
    </div>
  );
}
