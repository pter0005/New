import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">SOBRE A NEW</h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-foreground/80">
            Nascemos para transformar ideias em ativos digitais de verdade.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-lg text-foreground/80">
              Somos uma agência digital especializada em criar sites profissionais, identidade visual e soluções online personalizadas, sempre com foco em inovação, performance e um design que olha para o futuro.
            </p>
            <p className="text-lg text-foreground/80">
             Mais do que entregar tecnologia, oferecemos parceria e suporte direto, sem burocracias. Nosso compromisso é garantir que cada detalhe do seu projeto reflita exatamente a sua visão e supere suas expectativas.
            </p>
          </div>
          <Card className="glassmorphism p-6 md:p-8 text-center transition-all duration-300 border-primary/30 hover:border-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]">
            <CardContent className="p-0">
              <p className="text-base md:text-lg text-foreground/80">
                Nosso diferencial é simples: <strong className="text-foreground">na NEW, o cliente está no centro de tudo.</strong> Não trabalhamos com modelos engessados ou mensalidades que prendem você. Cada projeto é único, construído sob medida, com total liberdade para evoluir.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 text-center">
          <blockquote className="text-lg md:text-xl font-semibold text-primary/90 italic drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)] px-4">
            <p>"Na NEW, você não aluga uma ideia. Você é dono do seu futuro digital."</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
