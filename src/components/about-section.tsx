import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Zap, Gem, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "Pagamento único",
    description: "Pague uma vez e o ativo digital é seu para sempre. Simples e transparente."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Flexibilidade total",
    description: "Seu projeto evolui com seu negócio. Adicione funcionalidades quando precisar."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Design premium",
    description: "Criamos experiências únicas e modernas, sem usar templates prontos."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Suporte direto",
    description: "Fale diretamente com quem desenvolve seu projeto. Sem burocracia, sem tickets."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Quem somos</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80">
            A NEW nasceu para quebrar o padrão do mercado. Acreditamos que a tecnologia deve ser uma aliada, não uma despesa recorrente. Construímos ativos digitais que pertencem a você, com design de ponta e a flexibilidade que seu negócio precisa para crescer sem limites.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glassmorphism p-6 text-center transition-all duration-300 hover:border-primary/80 hover:-translate-y-2">
              <CardContent className="flex flex-col items-center justify-start gap-4 h-full">
                <div className="p-3 bg-background rounded-full border border-primary/50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
