"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from 'lucide-react';
import Link from "next/link";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex justify-center">
          <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold text-foreground py-4">
            <span>Fale com a</span>
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
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Nome"
                className="bg-secondary/40 border-border focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-secondary/40 border-border focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Mensagem"
                rows={5}
                className="bg-secondary/40 border-border focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <Button type="submit" size="lg" variant="outline" className="w-full bg-transparent border-primary text-primary text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
              Enviar
            </Button>
          </form>
          <div className="mt-12 flex justify-center items-center space-x-6">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
