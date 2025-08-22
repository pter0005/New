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
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Fale com a NEW</h2>
        </div>
        <div className="mt-16 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Nome"
                className="bg-slate-800/20 backdrop-blur-sm border border-primary/30 focus:border-primary focus:ring-primary focus:neon-pulse"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                className="bg-slate-800/20 backdrop-blur-sm border border-primary/30 focus:border-primary focus:ring-primary focus:neon-pulse"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Mensagem"
                rows={5}
                className="bg-slate-800/20 backdrop-blur-sm border border-primary/30 focus:border-primary focus:ring-primary focus:neon-pulse"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground rounded-full text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:neon-pulse">
              Enviar
            </Button>
          </form>
          <div className="mt-12 flex justify-center items-center space-x-6">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
              <Instagram className="h-8 w-8 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
              <Linkedin className="h-8 w-8 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
