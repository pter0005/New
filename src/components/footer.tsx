import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <p className="text-sm">© 2025 NEW – Construindo o futuro digital.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="#home" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link href="#portfolio" className="text-sm hover:text-primary transition-colors">Portfólio</Link>
          <Link href="#contact" className="text-sm hover:text-primary transition-colors">Contato</Link>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
              <Instagram className="h-6 w-6 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6 hover:drop-shadow-[0_0_5px_hsl(var(--primary))]" />
            </Link>
          </div>
      </div>
    </footer>
  );
}
