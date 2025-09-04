import Link from 'next/link';
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppFAB() {
  return (
    <Link 
      href="https://wa.me/5511943157277?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-0 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="flex items-center justify-center bg-[#25D366] rounded-full shadow-lg hover:shadow-green-500/50 w-14 h-14 sm:w-16 sm:h-16">
        <WhatsAppIcon className="h-8 w-8 text-white" />
      </div>
      <span className="sr-only">Fale conosco pelo WhatsApp</span>
    </Link>
  );
}
