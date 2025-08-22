"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = (factor: number) => {
    if (!isClient) {
      return {};
    }
    const x = (mousePosition.x - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (mousePosition.y - window.innerHeight / 2) / (window.innerHeight / 2);
    
    return {
      transform: `translateX(${x * factor}px) translateY(${y * factor}px)`,
      transition: 'transform 0.1s ease-out',
    };
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center px-4 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={parallaxStyle(15)}
      >
        <Image
          src="/new-logo.png"
          alt="NEW Logo background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
          data-ai-hint="logo neon"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center h-full text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg">
            Transformamos ideias em ativos digitais.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80">
            A tecnologia certa é a que se adapta com você.
          </p>
          <Button asChild size="lg" variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:drop-shadow-[0_0_8px_hsl(var(--primary))]">
              <Link href="#portfolio">Explore nossos projetos</Link>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-foreground/60 animate-bounce">
            <a href="#about" aria-label="Rolar para baixo">
                <ChevronDown className="h-6 w-6" />
                <span className="sr-only">Rolar para baixo</span>
            </a>
        </div>
      </div>
    </section>
  );
}
