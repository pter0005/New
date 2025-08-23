
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
        <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold text-foreground interactive-glow py-4">
              <span>SOBRE A</span>
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

            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
              Nascemos para transformar ideias em ativos digitais de verdade.
            </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glassmorphism p-6 md:p-8 text-left transition-all duration-300 border-border/50 hover:border-primary/50 interactive-glow h-full">
              <CardContent className="p-0 space-y-4">
                <p className="text-lg text-foreground/80">
                  Somos uma agência digital especializada em criar sites profissionais, identidade visual e soluções online personalizadas, sempre com foco em inovação, performance e um design que olha para o futuro.
                </p>
                <p className="text-lg text-foreground/80">
                  Mais do que entregar tecnologia, oferecemos parceria e suporte direto, sem burocracias. Nosso compromisso é garantir que cada detalhe do seu projeto reflita exatamente a sua visão e supere suas expectativas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism p-6 md:p-8 text-left transition-all duration-300 border-primary/30 hover:border-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)] interactive-glow h-full flex flex-col justify-center">
              <CardContent className="p-0">
                <p className="text-base md:text-lg text-foreground/80">
                  Nosso diferencial é simples: <strong className="text-foreground">na NEW, o cliente está no centro de tudo.</strong> Não trabalhamos com modelos engessados ou mensalidades que prendem você. Cada projeto é único, construído sob medida, com total liberdade para evoluir.
                </p>
                 <blockquote className="text-lg md:text-xl font-semibold text-primary/90 italic drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)] pt-6">
                  <p>"Na NEW, você não aluga uma ideia. Você é dono do seu futuro digital."</p>
                </blockquote>
              </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
