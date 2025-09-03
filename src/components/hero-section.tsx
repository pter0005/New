"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = containerRef.current;
        const xPos = (clientX / offsetWidth) * 100;
        const yPos = (clientY / offsetHeight) * 100;
        containerRef.current.style.setProperty('--mouse-x', `${xPos}%`);
        containerRef.current.style.setProperty('--mouse-y', `${yPos}%`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 z-0 galaxy-background" />
      <div
        ref={containerRef}
        className="absolute inset-0 z-10 interactive-glow"
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-20">
        <div className="text-center md:text-left animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            A <span className="text-primary">tecnologia certa</span>, é a que se adapta com você.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/80">
            Criamos experiências digitais únicas que impulsionam o seu negócio. Design, performance e inovação em cada detalhe.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
            <Link href="#contact">Fale com a NEW</Link>
          </Button>
        </div>
        <div className="relative flex items-center justify-center animate-zoomInFadeIn">
          <div
            className="relative flex items-center text-6xl sm:text-8xl md:text-9xl font-bold text-primary tracking-widest drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.5)]"
          >
            <div>N</div>
            <div className="flex flex-col items-center justify-center mx-2 md:mx-4 space-y-3 sm:space-y-4 md:space-y-6 h-[1em]">
              <div className="w-[0.5em] h-1.5 sm:h-2 md:h-3 bg-primary rounded-full"></div>
              <div className="w-[0.5em] h-1.5 sm:h-2 md:h-3 bg-primary rounded-full"></div>
              <div className="w-[0.5em] h-1.5 sm:h-2 md:h-3 bg-primary rounded-full"></div>
            </div>
            <div>W</div>
          </div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
