import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from 'lucide-react';

const newMethod = [
  "Sem mensalidade ou anuidade",
  "Flexibilidade total",
  "Customização premium",
  "Suporte ágil",
  "Design futurista"
];

const traditionalMarket = [
  "Mensalidades e anuidade",
  "Limitações de customização",
  "Dependência da plataforma",
  "Suporte demorado",
  "Design genérico"
];

export default function MethodSection() {
  return (
    <section id="method" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">O Método NEW</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">Simples, sem burocracia, feito para você.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="glassmorphism border-2 border-primary/50 transition-all duration-300 hover:border-primary hover:neon-pulse">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <div className="text-4xl font-black">NEW</div>
                <span>O Método NEW</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {newMethod.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="glassmorphism border border-muted-foreground/30 transition-all duration-300 hover:border-muted-foreground/50 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-muted-foreground">Mercado Tradicional</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {traditionalMarket.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <span className="opacity-70">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-12 text-center text-xl font-semibold text-primary/90 text-glow">
          Na NEW, você não aluga ideias. Você é dono do seu ativo digital.
        </p>
      </div>
    </section>
  );
}
