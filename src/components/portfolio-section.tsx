import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { name: "Team VEO3", type: "Website Institucional", image: "https://placehold.co/800x600.png", hint: "ia videos", link: "https://www.teamveo3.com/" },
  { name: "Neon Store", type: "Loja Virtual", image: "https://placehold.co/800x600.png", hint: "neon shop", link: "#" },
  { name: "Data Viz", type: "Dashboard Analítico", image: "https://placehold.co/800x600.png", hint: "data dashboard", link: "#" },
  { name: "Gourmet Burger", type: "Site de Restaurante", image: "https://placehold.co/800x600.png", hint: "restaurant website", link: "#" },
  { name: "Barber Shop", type: "Sistema para Barbearias", image: "https://placehold.co/800x600.png", hint: "barber shop", link: "#" },
  { name: "Fit Tracker", type: "Sistema de Personal Trainer", image: "https://placehold.co/800x600.png", hint: "fitness app", link: "#" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Projetos que já transformamos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
            Confira alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>
        <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <Card className="group overflow-hidden relative glassmorphism border-border/50 hover:border-primary/80 transition-all duration-500 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.4)] hover:-translate-y-2">
                <Image 
                  src={project.image}
                  alt={`Mockup do projeto ${project.name}`}
                  width={800}
                  height={600}
                  data-ai-hint={project.hint}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-[0_0_8px_hsl(var(--primary))]">{project.name}</h3>
                  <p className="text-sm md:text-base text-primary-foreground/80">{project.type}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
