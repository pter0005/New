
"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useRef, useEffect } from 'react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="py-20 sm:py-32" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="lg:sticky lg:top-20">
            <div className="relative text-left overflow-hidden rounded-lg">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground interactive-glow py-4">SOBRE A NEW</h2>
              <p className="mt-4 max-w-xl text-base md:text-lg text-foreground/80">
                Nascemos para transformar ideias em ativos digitais de verdade.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="glassmorphism p-6 md:p-8 text-left transition-all duration-300 border-border/50 hover:border-primary/50 interactive-glow">
              <CardContent className="p-0 space-y-4">
                <p className="text-lg text-foreground/80">
                  Somos uma agência digital especializada em criar sites profissionais, identidade visual e soluções online personalizadas, sempre com foco em inovação, performance e um design que olha para o futuro.
                </p>
                <p className="text-lg text-foreground/80">
                  Mais do que entregar tecnologia, oferecemos parceria e suporte direto, sem burocracias. Nosso compromisso é garantir que cada detalhe do seu projeto reflita exatamente a sua visão e supere suas expectativas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism p-6 md:p-8 text-left transition-all duration-300 border-primary/30 hover:border-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)] interactive-glow">
              <CardContent className="p-0">
                <p className="text-base md:text-lg text-foreground/80">
                  Nosso diferencial é simples: <strong className="text-foreground">na NEW, o cliente está no centro de tudo.</strong> Não trabalhamos com modelos engessados ou mensalidades que prendem você. Cada projeto é único, construído sob medida, com total liberdade para evoluir.
                </p>
              </CardContent>
            </Card>

            <blockquote className="text-lg md:text-xl font-semibold text-primary/90 italic drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)] pt-4">
              <p>"Na NEW, você não aluga uma ideia. Você é dono do seu futuro digital."</p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
