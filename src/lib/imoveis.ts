export type Imovel = {
  id: string;
  titulo: string;
  bairro: string;
  cidade: string;
  tipo: "Casa" | "Apartamento" | "Terreno" | "Comercial";
  finalidade: "Venda" | "Aluguel";
  preco: number;
  quartos?: number;
  banheiros?: number;
  vagas?: number;
  areaM2?: number;
  descricao: string;
  imagem: string;
  destaque?: boolean;
};

// Dados fictícios pra demonstração — substituir pelos imóveis reais da Vitória.
export const imoveis: Imovel[] = [
  {
    id: "1",
    titulo: "Casa em condomínio fechado",
    bairro: "Vila Pinto",
    cidade: "Varginha",
    tipo: "Casa",
    finalidade: "Venda",
    preco: 620000,
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    areaM2: 180,
    descricao: "Casa térrea com área gourmet, quintal amplo e segurança 24h.",
    imagem:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    destaque: true,
  },
  {
    id: "2",
    titulo: "Apartamento reformado no centro",
    bairro: "Centro",
    cidade: "Varginha",
    tipo: "Apartamento",
    finalidade: "Venda",
    preco: 380000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    areaM2: 75,
    descricao: "A poucos passos do comércio, prédio com elevador e portaria.",
    imagem:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    titulo: "Terreno em bairro residencial",
    bairro: "Jardim Andere",
    cidade: "Varginha",
    tipo: "Terreno",
    finalidade: "Venda",
    preco: 210000,
    areaM2: 300,
    descricao: "Rua plana, pronto pra construir, próximo a escolas.",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    titulo: "Cobertura duplex com vista",
    bairro: "Vila Marli",
    cidade: "Varginha",
    tipo: "Apartamento",
    finalidade: "Venda",
    preco: 890000,
    quartos: 3,
    banheiros: 3,
    vagas: 2,
    areaM2: 210,
    descricao: "Cobertura com terraço, churrasqueira e vista panorâmica da cidade.",
    imagem:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
    destaque: true,
  },
  {
    id: "5",
    titulo: "Casa para locação, pronta pra morar",
    bairro: "São Geraldo",
    cidade: "Varginha",
    tipo: "Casa",
    finalidade: "Aluguel",
    preco: 2400,
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    areaM2: 110,
    descricao: "Casa arejada, próxima ao comércio local e transporte público.",
    imagem:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "6",
    titulo: "Sala comercial em ponto movimentado",
    bairro: "Centro",
    cidade: "Varginha",
    tipo: "Comercial",
    finalidade: "Aluguel",
    preco: 1800,
    areaM2: 45,
    descricao: "Sala pronta pra uso, próxima a bancos e movimento comercial.",
    imagem:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
  },
];
