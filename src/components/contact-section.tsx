"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Loader2 } from 'lucide-react';
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { sendContactMessage } from "@/ai/flows/contact-flow";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await sendContactMessage(values);
      toast({
        title: "Mensagem Enviada!",
        description: response.message,
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao Enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nome" {...field} className="bg-secondary/40 border-border focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="E-mail" {...field} className="bg-secondary/40 border-border focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Mensagem" rows={5} {...field} className="bg-secondary/40 border-border focus:border-primary focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-transparent border-primary text-primary text-base md:text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:drop-shadow-[0_0_10px_hsl(var(--primary))] disabled:opacity-50 disabled:hover:scale-100">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </Button>
            </form>
          </Form>
          <div className="mt-12 flex justify-center items-center space-x-6">
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
