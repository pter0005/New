"use client";

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out">
      <div className="relative animate-fadeIn">
        <h1 className="text-7xl md:text-9xl font-extrabold text-foreground">
          NEW
        </h1>
      </div>
      {showText && (
        <p className="mt-4 text-center text-lg md:text-xl text-primary font-light tracking-widest border-r-2 border-primary typing-effect">
          O sistema certo é o que se adapta a você.
        </p>
      )}
    </div>
  );
}
