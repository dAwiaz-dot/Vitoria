import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const titulo = "Vitória Ribeiro Imóveis | Corretora em Varginha-MG";
const descricao =
  "Corretora de imóveis em Varginha-MG, CRECI 61470. Compra, venda e locação com atendimento próximo.";

export const metadata: Metadata = {
  // Trocar pelo domínio real assim que o site for publicado.
  metadataBase: new URL("https://www.vitoriaribeiroimoveis.com.br"),
  title: titulo,
  description: descricao,
  openGraph: {
    title: titulo,
    description: descricao,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
