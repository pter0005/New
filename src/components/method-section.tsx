import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from 'lucide-react';

const newMethod = [
  "Pagamento único, sem mensalidades",
  "Flexibilidade para evoluir",
  "Design 100% customizado",
  "Suporte direto e ágil",
  "Foco em performance e SEO"
];

const traditionalMarket = [
  "Mensalidades e taxas",
  "Limitações de customização",
  "Dependência da plataforma",
  "Suporte demorado e genérico",
  "Uso de templates prontos"
];

export default function MethodSection() {
  return (
    <section id="method" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold text-foreground py-4">
                <span>O Método</span>
                <div className="flex items-center text-primary drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)]">
                  <span>N</span>
                  <div className="flex flex-col items-center justify-center mx-1 md:mx-2 space-y-2 h-[1em]">
                    <div className="w-[0.5em] h-1 md:h-1.5 bg-primary rounded-full"></div>
                    <div className="w-[0.5em] h-1 md:h-1.5 bg-primary rounded-full"></div>
                    <div className="w-[0.5em] h-1 md:h-1.5 bg-primary rounded-full"></div>
                  </div>
                  <span>W</span>
                </div>
            </div>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-foreground/80">Simples, sem burocracia, feito para você.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="glassmorphism border-2 border-primary/50 transition-all duration-300 p-2 sm:p-0">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-3">
                <div className="text-2xl md:text-3xl font-black">NEW</div>
                <span>Nosso Método</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {newMethod.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                    <Check className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="glassmorphism border border-muted-foreground/30 transition-all duration-300 p-2 sm:p-0">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-muted-foreground">Mercado Tradicional</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {traditionalMarket.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                    <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <span className="opacity-70">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-12 text-center text-lg md:text-xl font-semibold text-primary/90 px-4">
          Na NEW, você não aluga ideias. Você é dono do seu ativo digital.
        </p>
      </div>
    </section>
  );
}
