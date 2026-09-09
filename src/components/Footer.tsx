import { CONTATO } from "@/lib/constantes";

export default function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-cream py-8 text-center text-sm text-brand-dark/60">
      <p>
        {CONTATO.nome} · {CONTATO.creci} · {CONTATO.cidade}/{CONTATO.estado}
      </p>
      <p className="mt-1">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
}
