"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 particles z-0" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        <div className="text-center md:text-left animate-fadeIn">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            A <span className="text-primary">tecnologia certa</span>, é a que se adapta com você.
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Criamos experiências digitais únicas que impulsionam o seu negócio. Design, performance e inovação em cada detalhe.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
            <Link href="#contact">Fale com a NEW</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center text-7xl sm:text-8xl md:text-9xl font-bold text-primary tracking-widest drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.3)]">
            <div>N</div>
            <div className="flex flex-col items-center justify-center mx-2 md:mx-4 space-y-4 md:space-y-6 h-[1em]">
              <div className="w-[0.5em] h-2 md:h-3 bg-primary rounded-full"></div>
              <div className="w-[0.5em] h-2 md:h-3 bg-primary rounded-full"></div>
              <div className="w-[0.5em] h-2 md:h-3 bg-primary rounded-full"></div>
            </div>
            <div>W</div>
          </div>
        </div>
      </div>
    </section>
  );
}
