"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Team VEO3",
    type: "Website Institucional",
    image: "https://i.imgur.com/Tu4WgVV.png",
    hint: "ia videos",
    link: "https://www.teamveo3.com/",
    description: "Um site institucional moderno e dinâmico para uma equipe de produção de vídeo especializada em conteúdo gerado por IA. O foco era criar uma estética futurista e destacar seu trabalho inovador com animações e um design arrojado.",
    technologies: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Framer Motion"]
  },
  {
    name: "Pizza Nova",
    type: "Cardápio Digital",
    image: "https://placehold.co/1920x1200.png",
    hint: "pizza website",
    link: "https://tangerine-lebkuchen-c4599f.netlify.app/",
    description: "Uma landing page e cardápio digital para uma pizzaria, com foco em um design moderno e apetitoso para atrair clientes e facilitar a visualização dos produtos.",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Neon Store",
    type: "Loja Virtual",
    image: "https://placehold.co/1920x1200.png",
    hint: "neon shop",
    link: "#",
    description: "Uma plataforma de e-commerce para uma marca de moda com tema neon e cyberpunk. O objetivo era criar uma experiência de compra imersiva e visualmente cativante, integrando perfeitamente o catálogo de produtos com a identidade da marca.",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe"]
  },
  {
    name: "Data Viz",
    type: "Dashboard Analítico",
    image: "https://placehold.co/1920x1200.png",
    hint: "data dashboard",
    link: "#",
    description: "Um dashboard analítico personalizado para visualização de dados complexos em tempo real. A interface foi projetada para ser intuitiva, permitindo que os usuários filtrem e entendam as métricas de negócios de forma eficiente.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"]
  },
];

type Project = typeof projects[0];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Projetos que já transformamos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
            Confira alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>
        <Dialog>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <DialogTrigger key={index} asChild onClick={() => setSelectedProject(project)}>
                <Card className="group overflow-hidden relative glassmorphism border-border/50 hover:border-primary/80 transition-all duration-500 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.4)] hover:-translate-y-2 cursor-pointer">
                  <Image
                    src={project.image}
                    alt={`Mockup do projeto ${project.name}`}
                    width={1920}
                    height={1200}
                    data-ai-hint={project.hint}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_0_8px_hsl(var(--primary))]">{project.name}</h3>
                    <p className="text-sm md:text-base text-primary-foreground/80">{project.type}</p>
                  </div>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedProject && (
            <DialogContent className="sm:max-w-3xl glassmorphism p-0 border-primary/30">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-bold text-primary">{selectedProject.name}</DialogTitle>
                <DialogDescription>{selectedProject.type}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-h-[80vh] overflow-y-auto">
                <div className="space-y-4">
                   <Image
                      src={selectedProject.image}
                      alt={`Mockup do projeto ${selectedProject.name}`}
                      width={1920}
                      height={1200}
                      className="rounded-lg object-cover"
                    />
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Sobre o Projeto</h4>
                  <p className="text-sm text-foreground/80">{selectedProject.description}</p>
                  <h4 className="font-semibold text-foreground">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="border-primary/50">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter className="p-6 bg-black/30 rounded-b-lg">
                <Button asChild variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    Visitar o Site <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
