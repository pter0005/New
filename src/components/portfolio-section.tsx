
"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Projetos que já transformamos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-foreground/80">
            Confira alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} legacyBehavior>
              <a className="group block">
                <Card className="overflow-hidden relative glassmorphism border-border/50 hover:border-primary/80 transition-all duration-500 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.4)] hover:-translate-y-2 cursor-pointer h-full">
                  <Image
                    src={project.image}
                    alt={`Mockup do projeto ${project.name}`}
                    width={1920}
                    height={1200}
                    data-ai-hint={project.hint}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_0_8px_hsl(var(--primary))]">{project.name}</h3>
                    <p className="text-sm sm:text-base text-primary-foreground/80">{project.type}</p>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
