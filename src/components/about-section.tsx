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
        <div className="mt-12 max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-center text-foreground/80">
            Somos uma empresa especializada em sites profissionais, identidade visual e soluções online personalizadas, sempre com foco em inovação, performance e design futurista.
          </p>
          <Card className="glassmorphism p-6 md:p-8 text-center transition-all duration-300 border-primary/30 hover:border-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]">
            <CardContent className="p-0">
              <p className="text-base md:text-lg text-foreground/80">
                Nosso diferencial é simples: <strong className="text-foreground">na NEW, o cliente está no centro de tudo.</strong> Não trabalhamos com modelos engessados, planos obrigatórios ou mensalidades que prendem você. Cada projeto é único, construído sob medida, com total liberdade para evoluir conforme as suas necessidades.
              </p>
              <p className="mt-6 text-base md:text-lg text-foreground/80">
                Mais do que entregar tecnologia, oferecemos parceria e suporte direto, sem burocracias e sem enrolação. Nosso compromisso é garantir que cada detalhe do seu projeto reflita exatamente a sua visão.
              </p>
            </CardContent>
          </Card>
          <blockquote className="text-center text-lg md:text-xl font-semibold text-primary/90 italic drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)] px-4">
            <p>"Na NEW, você não aluga uma ideia. Você é dono do seu futuro digital."</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
