
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Pizza Nova",
    type: "Cardápio Digital & Sistema de Pedidos",
    image: "https://i.imgur.com/Ed9Oo8w.png",
    hint: "pizza website",
    link: "https://tangerine-lebkuchen-c4599f.netlify.app/",
    description: "Uma landing page e cardápio digital para uma pizzaria, com foco em um design moderno e apetitoso para atrair clientes e facilitar a visualização dos produtos.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    details: [
        {
            title: "Fluxo do Cliente",
            points: [
                "O cliente escaneia um QR Code único da mesa.",
                "O site abre com o cardápio digital correspondente àquela mesa.",
                "Ele escolhe os produtos (ex: prato principal, bebida, sobremesa).",
                "Clica em “Finalizar Pedido”.",
                "O pedido vai automaticamente para a cozinha e para o painel dos garçons."
            ]
        },
        {
            title: "Funcionalidades do Cliente",
            points: [
                "Visualização de cardápio com filtros por categoria.",
                "Imagens dos pratos e descrição com preço.",
                "Botão “+” para adicionar ao carrinho.",
                "Tela de resumo do pedido, com valor total e tempo estimado.",
                "Após pedido feito, o cliente vê um status em tempo real: “Em preparo” → “A caminho”."
            ]
        },
        {
            title: "Funcionalidades do Painel do Restaurante",
            points: [
                "Painel do administrador (ex: /admin): Cadastrar, editar e excluir produtos.",
                "Ver todos os pedidos por mesa em tempo real.",
                "Marcar pedidos como “Entregue”."
            ]
        },
        {
            title: "Estrutura e Tecnologia",
            points: [
                "Interface com cores do restaurante e design minimalista.",
                "Responsivo: funciona perfeitamente em celulares.",
                "Firestore: Banco de dados para cardápio e pedidos em tempo real.",
                "Authentication: Login seguro para funcionários com e-mail/senha."
            ]
        }
    ]
  },
  {
    name: "Team VEO3",
    type: "Site Institucional com IA",
    image: "https://i.imgur.com/Tu4WgVV.png",
    hint: "ia videos",
    link: "https://www.teamveo3.com/",
    description: "Um site institucional moderno e dinâmico para uma equipe de produção de vídeo especializada em conteúdo gerado por IA.",
    technologies: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
    details: [
        {
            title: "Objetivo do Projeto",
            points: [
                "Criar uma vitrine digital impactante que refletisse a inovação da empresa.",
                "Destacar o portfólio de vídeos gerados por IA de forma imersiva.",
                "Transmitir uma imagem de vanguarda e alta tecnologia para atrair clientes B2B."
            ]
        },
        {
            title: "Funcionalidades Implementadas",
            points: [
                "Animações fluidas e microinterações com Framer Motion para uma experiência de usuário memorável.",
                "Galeria de vídeos otimizada para carregamento rápido e performance.",
                "Design system coeso utilizando ShadCN UI para consistência visual.",
                "Formulário de contato integrado para captação de leads qualificados."
            ]
        },
        {
            title: "Diferenciais Técnicos",
            points: [
                "Arquitetura Next.js para renderização no servidor (SSR), garantindo SEO e performance.",
                "Estética futurista e paleta de cores alinhada com o tema de inteligência artificial.",
                "Layout totalmente responsivo, adaptado para desktops, tablets e smartphones."
            ]
        }
    ]
  },
  {
    name: "Sufgang",
    type: "E-commerce de Moda Conceitual",
    image: "https://i.imgur.com/78iIp9n.png",
    hint: "fashion store",
    link: "https://www.sufgang.com.br/",
    description: "Uma plataforma de e-commerce para uma marca de moda com uma estética dark e conceitual, focada em uma experiência de compra imersiva.",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe"],
    details: [
        {
            title: "Experiência do Usuário (UX)",
            points: [
                "Navegação intuitiva focada na descoberta de produtos e coleções.",
                "Checkout simplificado em poucas etapas para minimizar o abandono de carrinho.",
                "Páginas de produto com galerias de imagens de alta resolução e zoom."
            ]
        },
        {
            title: "Funcionalidades de E-commerce",
            points: [
                "Integração com a API do Shopify para gerenciamento de produtos, estoque e pedidos.",
                "Gateway de pagamento seguro com Stripe para transações com cartão de crédito.",
                "Busca de produtos com filtros por categoria, tamanho e preço.",
                "Área do cliente para acompanhamento de pedidos e histórico de compras."
            ]
        },
        {
            title: "Identidade Visual",
            points: [
                "Design dark e minimalista para alinhar com a estética conceitual da marca.",
                "Uso de tipografia e fotografia para criar uma atmosfera imersiva e exclusiva.",
                "Animações sutis que guiam o usuário sem distrair da experiência de compra."
            ]
        }
    ]
  },
  {
    name: "Personal Trainer",
    type: "Dashboard Analítico de Performance",
    image: "https://i.imgur.com/eiVreq3.png",
    hint: "data dashboard",
    link: "https://personal-example.netlify.app/",
    description: "Um dashboard analítico personalizado para visualização de dados complexos em tempo real, permitindo insights rápidos e eficientes.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    details: [
        {
            title: "Visualização de Dados",
            points: [
                "Gráficos interativos (barras, linhas, pizza) para análise de métricas de vendas, usuários e engajamento.",
                "Filtros dinâmicos por período, região e outras variáveis de negócio.",
                "Exportação de relatórios em formato CSV e PDF."
            ]
        },
        {
            title: "Funcionalidades do Painel",
            points: [
                "KPIs (Key Performance Indicators) principais destacados em cards para visualização rápida.",
                "Tabelas de dados com paginação, ordenação e busca em tempo real.",
                "Sistema de alertas para métricas que atingem um determinado limiar."
            ]
        },
        {
            title: "Arquitetura e Performance",
            points: [
                "Backend robusto em Node.js para processamento e agregação de grandes volumes de dados.",
                "Banco de dados PostgreSQL otimizado para consultas analíticas complexas.",
                "Frontend reativo em React com D3.js para renderização eficiente de gráficos customizados.",
                "Autenticação segura para garantir que apenas usuários autorizados acessem os dados."
            ]
        }
    ]
  },
];

type Project = typeof projects[0];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Projetos que já transformamos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-foreground/80">
            Confira alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>
        <Dialog>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <DialogTrigger key={index} asChild onClick={() => setSelectedProject(project)}>
                <Card className="group overflow-hidden relative glassmorphism border-border/50 hover:border-primary/80 transition-all duration-500 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.4)] hover:-translate-y-2 cursor-pointer">
                  <Image
                    src={project.image}
                    alt={`Mockup do projeto ${project.name}`}
                    width={1920}
                    height={1200}
                    data-ai-hint={project.hint}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_0_8px_hsl(var(--primary))]">{project.name}</h3>
                    <p className="text-sm sm:text-base text-primary-foreground/80">{project.type}</p>
                  </div>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedProject && (
            <DialogContent className="sm:max-w-3xl glassmorphism p-0 border-primary/30">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-bold text-primary">{selectedProject.name}</DialogTitle>
                <DialogDescription>{selectedProject.type}</DialogDescription>
              </DialogHeader>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <Image
                        src={selectedProject.image}
                        alt={`Mockup do projeto ${selectedProject.name}`}
                        width={1920}
                        height={1200}
                        className="rounded-lg object-cover"
                      />
                      <h4 className="font-semibold text-foreground pt-4">Tecnologias Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <Badge key={tech} variant="secondary" className="border-primary/50">{tech}</Badge>
                        ))}
                      </div>
                  </div>
                  <div className="space-y-6">
                    {selectedProject.details.map((detail, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground mb-2">{detail.title}</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                            {detail.points.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter className="p-6 bg-black/30 rounded-b-lg flex flex-col sm:flex-row sm:justify-between sm:items-center">
                 <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 order-1 sm:order-2">
                  <Link href="#contact">
                    Quero um site assim <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 order-2 sm:order-1 mt-2 sm:mt-0">
                  <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    Visitar o Site <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}

    