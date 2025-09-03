"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram } from 'lucide-react';
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/new.contatar@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formProps),
      });

      if (!response.ok) {
        throw new Error("Houve um problema ao enviar sua mensagem.");
      }

      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado por entrar em contato. Responderemos em breve.",
      });
      (event.target as HTMLFormElement).reset(); // Limpa o formulário
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro ao Enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Honeypot */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Fallback redirect */}
            <input type="hidden" name="_next" value="https://new-tec.netlify.app/" />

            <Input 
              placeholder="Nome" 
              name="name" 
              className="bg-secondary/40 border-border focus:border-primary focus:ring-primary" 
              required 
              disabled={isSubmitting}
            />
            <Input 
              type="email" 
              placeholder="E-mail" 
              name="email" 
              className="bg-secondary/40 border-border focus:border-primary focus:ring-primary" 
              required 
              disabled={isSubmitting}
            />
            <Textarea 
              placeholder="Mensagem" 
              name="message"
              rows={5} 
              className="bg-secondary/40 border-border focus:border-primary focus:ring-primary" 
              required 
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-transparent border-primary text-primary text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:drop-shadow-[0_0_10px_hsl(var(--primary))]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
          <div className="mt-12 flex justify-center items-center space-x-6">
            <Link href="https://www.instagram.com/new.c0de/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
