"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (factor: number) => {
    if (typeof window === 'undefined') {
      return 'none';
    }
    const { innerWidth: width, innerHeight: height } = window;
    const x = (mousePosition.x - width / 2) / width;
    const y = (mousePosition.y - height / 2) / height;

    return `perspective(1000px) rotateY(${x * factor}deg) rotateX(${-y * factor}deg)`;
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Coluna da Esquerda: Texto e Botão */}
        <div className="text-left animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Transformamos ideias em <span className="text-primary">ativos digitais</span>.
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Criamos experiências digitais únicas que impulsionam o seu negócio. Design, performance e inovação em cada detalhe.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
            <Link href="#contact">Fale com a NEW</Link>
          </Button>
        </div>

        {/* Coluna da Direita: Logo 3D */}
        <div className="flex items-center justify-center">
          <div
            style={{
              transform: calculateTransform(10),
              transition: 'transform 0.1s ease-out',
            }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-primary tracking-widest drop-shadow-[0_0_15px_hsl(var(--primary))]">
              NEW
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
