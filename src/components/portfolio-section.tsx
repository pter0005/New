import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { name: "Cyber Corp", type: "Website Institucional", image: "https://placehold.co/600x400.png", hint: "cyber tech", link: "https://www.teamveo3.com/" },
  { name: "Neon Store", type: "Loja Virtual", image: "https://placehold.co/600x400.png", hint: "neon shop", link: "#" },
  { name: "Data Viz", type: "Dashboard Analítico", image: "https://placehold.co/600x400.png", hint: "data dashboard", link: "#" },
  { name: "Orion App", type: "Aplicativo Mobile", image: "https://placehold.co/600x400.png", hint: "space app", link: "#" },
  { name: "Future Foods", type: "Cardápio Digital", image: "https://placehold.co/600x400.png", hint: "future food", link: "#" },
  { name: "Synth Wave", type: "Portal de Eventos", image: "https://placehold.co/600x400.png", hint: "synthwave music", link: "#" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Projetos que já transformamos</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <Card className="group overflow-hidden relative glassmorphism border-border/50 hover:border-primary/80 transition-all duration-500 animate-fadeInUp hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.4)]" style={{ animationDelay: `${index * 150}ms` }}>
                <Image 
                  src={project.image}
                  alt={`Mockup do projeto ${project.name}`}
                  width={600}
                  height={400}
                  data-ai-hint={project.hint}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl md:text-2xl font-bold text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">{project.name}</h3>
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
