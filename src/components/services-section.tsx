"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, ShoppingCart, Settings, LayoutDashboard, Code, BrainCircuit } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const services = [
  {
    icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Sites e Sistemas de Delivery",
    description: "Plataformas completas para restaurantes e lojas com cardápio digital, pedidos e pagamentos online.",
    example: {
      image: "https://placehold.co/1920x1080.png",
      hint: "delivery app",
      details: "Desenvolvemos plataformas de delivery totalmente personalizadas, integradas com gateways de pagamento e sistemas de gestão de pedidos. Ofereça uma experiência de compra fluida e profissional para seus clientes, com um painel administrativo intuitivo para você gerenciar tudo."
    }
  },
  {
    icon: <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "E-commerces Personalizados",
    description: "Soluções de vendas online completas e seguras.",
    example: {
      image: "https://placehold.co/1920x1080.png",
      hint: "ecommerce website",
      details: "Criamos lojas virtuais robustas e escaláveis, com design focado na conversão. Nossas soluções de e-commerce incluem cadastro de produtos, gestão de estoque, cálculo de frete, cupons de desconto e integração com as principais ferramentas de marketing do mercado."
    }
  },
  {
    icon: <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Sistemas Web Sob Medida",
    description: "Desenvolvimento de sistemas para otimizar seus processos.",
    example: {
      image: "https://placehold.co/1920x1080.png",
      hint: "web system",
      details: "Transformamos processos manuais e complexos em sistemas web eficientes e intuitivos. Desenvolvemos desde CRMs e ERPs simplificados até plataformas complexas de gestão, tudo sob medida para as necessidades específicas do seu negócio, automatizando tarefas e centralizando informações."
    }
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Dashboards & Admins",
    description: "Painéis de controle intuitivos para visualização de dados.",
    example: {
      image: "https://placehold.co/1920x1080.png",
      hint: "admin dashboard",
      details: "Criamos painéis administrativos e dashboards que transformam dados brutos em insights valiosos. Monitore KPIs, acompanhe métricas em tempo real e tome decisões mais inteligentes com interfaces gráficas claras, interativas e fáceis de usar."
    }
  },
  {
    icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Integrações com APIs",
    description: "Conectamos seus sistemas a serviços de terceiros.",
    example: {
      image: "https://placehold.co/1920x1080.png",
      hint: "api integration",
      details: "Sua plataforma precisa conversar com outros sistemas? Nós fazemos a ponte. Realizamos integrações via API com gateways de pagamento, sistemas de automação de marketing, redes sociais, ferramentas de análise e qualquer outro serviço externo necessário para o seu fluxo de trabalho."
    }
  },
  {
    icon: <BrainCircuit className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Soluções com IA",
    description: "Integramos inteligência artificial para automatizar tarefas.",
    example: {
      image: "https://placehold.co/1920x1080.png",
      hint: "ai solution",
      details: "Potencialize seu negócio com o poder da Inteligência Artificial. Desenvolvemos chatbots para atendimento, sistemas de recomendação de produtos, ferramentas de análise de dados e outras soluções de IA que automatizam tarefas, personalizam a experiência do usuário e geram eficiência."
    }
  }
];

type Service = typeof services[0];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Nossos Serviços</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
            Soluções completas para transformar suas ideias em realidade digital.
          </p>
        </div>
        <Dialog open={!!selectedService} onOpenChange={(isOpen) => !isOpen && setSelectedService(null)}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                onClick={() => setSelectedService(service)}
                className="group glassmorphism p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)] flex flex-col cursor-pointer"
              >
                <CardContent className="p-0 space-y-4 sm:space-y-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 min-h-[40px] flex-grow">{service.description}</p>
                  <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors mt-auto">
                    Ver Exemplo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedService && (
            <DialogContent className="sm:max-w-3xl glassmorphism p-0 border-primary/30">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-4">
                  {selectedService.icon}
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              <div className="p-6 grid gap-6 max-h-[80vh] overflow-y-auto">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={selectedService.example.image}
                    alt={`Exemplo do serviço ${selectedService.title}`}
                    width={1920}
                    height={1080}
                    data-ai-hint={selectedService.example.hint}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-base text-foreground/80">{selectedService.example.details}</p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
