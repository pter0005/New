import Link from 'next/link';
import Image from 'next/image';

export default function WhatsAppFAB() {
  return (
    <Link href="https://wa.me/5511943157277?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 bg-transparent text-white rounded-full p-0 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 overflow-hidden">
      <Image 
        src="https://i.imgur.com/z4FbTqu.png"
        alt="Ícone do WhatsApp"
        width={64}
        height={64}
        className="h-16 w-16"
      />
      <span className="sr-only">Fale conosco pelo WhatsApp</span>
    </Link>
  );
}
