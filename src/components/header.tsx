"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
    {children}
  </Link>
);

export default function Header() {
  const { theme, setTheme } = useTheme();
  
  // Evita o piscar da UI garantindo que o componente só renderize no cliente
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glassmorphism">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary mr-4">
              NEW
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <NavLink href="#about">Quem Somos</NavLink>
            <NavLink href="#method">Método</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild variant="outline" className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="#contact">Fale com a NEW</Link>
            </Button>
            {mounted && (
              <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Mudar tema</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
