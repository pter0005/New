import Link from 'next/link';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-sm font-medium text-primary/80 hover:text-primary transition-colors hover:text-glow">
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glassmorphism">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-primary text-glow">
              NEW
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <NavLink href="#about">Quem Somos</NavLink>
            <NavLink href="#method">Método</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
