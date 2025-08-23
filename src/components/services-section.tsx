import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, ShoppingCart, Settings, LayoutDashboard, Code, BrainCircuit } from 'lucide-react';
import Link from "next/link";

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Sites e Sistemas de Delivery",
    description: "Plataformas completas para restaurantes e lojas com cardápio digital, pedidos e pagamentos online."
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "E-commerces Personalizados",
    description: "Soluções de vendas online completas e seguras."
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Sistemas Web Sob Medida",
    description: "Desenvolvimento de sistemas para otimizar seus processos."
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: "Dashboards & Admins",
    description: "Painéis de controle intuitivos para visualização de dados."
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Integrações com APIs",
    description: "Conectamos seus sistemas a serviços de terceiros."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Soluções com IA",
    description: "Integramos inteligência artificial para automatizar tarefas."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Nossos Serviços</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
            Soluções completas para transformar suas ideias em realidade digital.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group glassmorphism p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-foreground/70 min-h-[40px]">{service.description}</p>
                <Link href="#" className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                  Ver Exemplo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
