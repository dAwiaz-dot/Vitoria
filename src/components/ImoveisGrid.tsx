"use client";

import { useState } from "react";
import { imoveis } from "@/lib/imoveis";
import ImovelCard from "./ImovelCard";

const filtros = ["Todos", "Venda", "Aluguel"] as const;

export default function ImoveisGrid() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");

  const imoveisFiltrados =
    filtro === "Todos" ? imoveis : imoveis.filter((i) => i.finalidade === filtro);

  return (
    <section id="imoveis" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-gold">Vitrine</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-dark">
            Imóveis disponíveis
          </h2>
          <p className="mt-3 text-brand-dark/70">
            Seleção atualizada de imóveis à venda e locação em Varginha e região.
          </p>
        </div>

        <div className="flex gap-2">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filtro === f
                  ? "bg-brand text-cream"
                  : "bg-brand/5 text-brand-dark hover:bg-brand/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {imoveisFiltrados.map((imovel) => (
          <ImovelCard key={imovel.id} imovel={imovel} />
        ))}
      </div>
    </section>
  );
}
