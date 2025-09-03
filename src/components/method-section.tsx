"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, Check, X, Gem, Tags, BadgePercent } from 'lucide-react';

const features = [
  {
    icon: <Gem className="h-6 w-6 text-primary" />,
    title: "Software Sob Medida",
    description: "Você recebe um sistema desenhado exclusivamente para as suas necessidades, sem recursos inúteis ou complexidade desnecessária."
  },
  {
    icon: <Tags className="h-6 w-6 text-primary" />,
    title: "Sua Propriedade, Suas Regras",
    description: "O software é seu. Você tem total liberdade e controle, sem ficar preso a contratos de aluguel ou plataformas de terceiros."
  },
  {
    icon: <BadgePercent className="h-6 w-6 text-primary" />,
    title: "Sem Mensalidades Surpresa",
    description: "Pague uma vez pelo desenvolvimento e livre-se de taxas mensais pelo uso do software. A economia a longo prazo é enorme."
  }
];

export default function MethodSection() {
  return (
    <section id="method" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Conteúdo Explicativo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nosso Modelo: <br /> 
                <span className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)]">Software with a Service</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-foreground/80">
                Cansado de pagar mensalidades por softwares que não atendem 100% à sua necessidade? Nós também. Por isso, trabalhamos com um modelo diferente: o SWAS. Você não aluga uma ferramenta, você adquire uma solução definitiva e personalizada para o seu negócio.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                 <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
                    Entenda o Modelo SWAS
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl glassmorphism p-6 border-primary/30">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">O que é o Modelo SWAS?</DialogTitle>
                  <DialogDescription>Software with a Service: a evolução da personalização.</DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4 text-foreground/80 text-sm max-h-[60vh] overflow-y-auto pr-4">
                  <p>
                    O modelo **SWAS (Software with a Service)** é uma abordagem que criamos para unir o melhor de dois mundos: a personalização completa de um software sob medida com a praticidade de um serviço contínuo de suporte e evolução. Diferente do SaaS (Software as a Service), onde você paga uma assinatura para usar uma ferramenta genérica, no SWAS você **compra o software**. Ele é seu, para sempre.
                  </p>
                  <p>
                    <strong>Como funciona na prática?</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Propriedade Total:</strong> Desde o início, o código-fonte e todos os ativos digitais são seus. Não há "aluguel". Você tem liberdade para hospedar onde quiser e modificar como precisar.</li>
                    <li><strong>Pagamento Único pelo Desenvolvimento:</strong> Você paga um valor fixo pelo projeto de desenvolvimento. Sem mensalidades obrigatórias para usar o que já é seu.</li>
                    <li><strong>Serviço Opcional:</strong> Precisa de manutenção, novas funcionalidades ou suporte técnico? Oferecemos pacotes de serviços flexíveis, sob demanda. Você só paga quando precisar e pelo que usar.</li>
                    <li><strong>Escalabilidade sem Limites:</strong> Como o software é seu, não há limites de usuários, recursos ou integrações impostos por um plano de assinatura. O sistema cresce junto com o seu negócio.</li>
                  </ul>
                  <p className="font-semibold text-primary/90 mt-6">
                    Em resumo, com o SWAS, você investe em um ativo digital próprio e personalizado, garantindo flexibilidade, controle e uma economia significativa a longo prazo, ao mesmo tempo que tem a segurança de um parceiro tecnológico para quando precisar evoluir.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Coluna da Direita: Tabela Comparativa */}
          <div>
            <Card className="glassmorphism p-6 md:p-8 border-border/50">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-center text-foreground mb-6">SWAS vs SAAS</h3>
                
                <div className="space-y-6">
                  {/* Propriedade */}
                  <div>
                    <p className="text-sm font-semibold text-center text-foreground/70 mb-2">Propriedade</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-primary/20 text-primary-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-green-400" /> Software Seu
                      </div>
                      <div className="bg-destructive/20 text-destructive-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-red-500" /> Aluguel
                      </div>
                    </div>
                  </div>

                  {/* Custo */}
                  <div>
                    <p className="text-sm font-semibold text-center text-foreground/70 mb-2">Custo</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-primary/20 text-primary-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-green-400" /> Pagamento Único
                      </div>
                      <div className="bg-destructive/20 text-destructive-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-red-500" /> Mensalidade
                      </div>
                    </div>
                  </div>

                  {/* Flexibilidade */}
                  <div>
                    <p className="text-sm font-semibold text-center text-foreground/70 mb-2">Flexibilidade</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-primary/20 text-primary-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-green-400" /> Totalmente Customizável
                      </div>
                      <div className="bg-destructive/20 text-destructive-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                        <X className="h-4 w-4 text-red-500" /> Genérico
                      </div>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
