import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Palette, Settings } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" />,
    title: "Criação de Sites Profissionais",
    description: "Desenvolvemos landing pages, lojas virtuais e cardápios digitais com design moderno e performance de ponta."
  },
  {
    icon: <Palette className="h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" />,
    title: "Identidade Visual",
    description: "Criamos logos e branding digital que capturam a essência da sua marca e a posicionam de forma única no mercado."
  },
  {
    icon: <Settings className="h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" />,
    title: "Soluções Personalizadas",
    description: "Construímos sistemas sob medida, integrações complexas e automações para otimizar seus processos e impulsionar seu negócio."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">O que oferecemos</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glassmorphism p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]">
              <CardHeader>
                {service.icon}
              </CardHeader>
              <CardContent>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
