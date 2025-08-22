"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Letter = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const repulsionRadius = 150; // Raio de interação

        if (distance < repulsionRadius) {
          const force = 1 - distance / repulsionRadius;
          const moveX = -(deltaX / distance) * force * 40; // Força do movimento
          const moveY = -(deltaY / distance) * force * 40;
          setPosition({ x: moveX, y: moveY });
        } else {
          setPosition({ x: 0, y: 0 });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      {children}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 particles z-0" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        <div className="text-left animate-fadeIn">
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
          <div className="flex text-8xl md:text-9xl font-bold text-primary tracking-widest drop-shadow-[0_0_8px_hsl(var(--primary)_/_0.3)]">
            <Letter>N</Letter>
            <Letter>E</Letter>
            <Letter>W</Letter>
          </div>
        </div>
      </div>
    </section>
  );
}
