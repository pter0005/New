import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-black text-primary/90 text-glow animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          NEW
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-foreground/80 animate-fadeIn" style={{ animationDelay: '1s' }}>
          Tecnologia que evolui junto com você.
        </p>
        <div className="mt-8 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
          <Button asChild size="lg" className="bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:scale-105 hover:neon-pulse">
            <Link href="#contact">Comece seu projeto hoje</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
