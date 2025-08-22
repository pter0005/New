"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "A tecnologia certa, é a que se adapta com você.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    setText(''); // Garante que o texto reinicie a animação
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Faz o cursor piscar no final
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 75); // Velocidade da digitação

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          NEW
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-foreground/80 h-8 md:h-16" style={{ animationDelay: '1s' }}>
          {text}
          <span className={`transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </p>
        <div className="mt-8 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105">
            <Link href="#contact">Comece seu projeto hoje</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
