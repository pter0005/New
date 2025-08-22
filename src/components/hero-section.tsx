"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export default function HeroSection() {
  const { theme, setTheme } = useTheme();
  
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://placehold.co/1920x1080.png"
          data-ai-hint="aurora borealis landscape"
        >
          <source src="/videos/space-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <header className="absolute top-0 left-0 right-0 p-4">
          <div className="container mx-auto flex justify-between items-center">
             <Link href="/" className="text-2xl font-bold text-primary transition-all hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
               NEW
             </Link>
             {mounted && (
              <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Mudar tema</span>
              </Button>
            )}
          </div>
        </header>

        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg">
            Transformamos ideias em ativos digitais.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            A tecnologia certa, é a que se adapta com você.
          </p>
        </div>
        
        <footer className="absolute bottom-0 left-0 right-0 p-4">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <nav className="flex space-x-6">
                    <Link href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Quem Somos</Link>
                    <Link href="#portfolio" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Portfólio</Link>
                    <Link href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Serviços</Link>
                    <Link href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contato</Link>
                </nav>
                 <a href="#about" className="mt-4 text-foreground/60 animate-bounce">
                    <ChevronDown className="h-6 w-6" />
                    <span className="sr-only">Rolar para baixo</span>
                </a>
            </div>
        </footer>

      </div>
    </section>
  );
}
