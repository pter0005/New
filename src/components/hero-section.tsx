"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "A tecnologia certa, é a que se adapta com você.";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1; // Since we have only one text
      const currentText = fullText;

      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(75);
      } else {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentText) {
        // Pause at the end
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);


  return (
    <section id="home" className="h-screen w-full flex items-center justify-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground drop-shadow-[0_0_15px_hsl(var(--primary)_/_0.5)]">
          NEW
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-foreground/80 h-8 md:h-16">
          {text}
          <span className={`transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:drop-shadow-[0_0_10px_hsl(var(--primary))]">
            <Link href="#contact">Comece seu projeto hoje</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
