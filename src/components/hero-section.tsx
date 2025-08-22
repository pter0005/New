"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-8xl md:text-9xl font-bold text-primary tracking-widest drop-shadow-[0_0_15px_hsl(var(--primary))]">
              NEW
            </h1>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-lg">
              Transformamos ideias em ativos digitais.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-foreground/80">
              A tecnologia certa é a que se adapta com você.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:drop-shadow-[0_0_8px_hsl(var(--primary))]">
              <Link href="#portfolio">Explore nossos projetos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
