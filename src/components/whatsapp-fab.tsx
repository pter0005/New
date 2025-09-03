import Link from 'next/link';
import { WhatsAppIcon } from './icons';

export default function WhatsAppFAB() {
  return (
    <Link href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 bg-green-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
      <WhatsAppIcon className="h-8 w-8" />
      <span className="sr-only">Fale conosco pelo WhatsApp</span>
    </Link>
  );
}
