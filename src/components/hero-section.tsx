"use client";

import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-primary tracking-widest drop-shadow-[0_0_15px_hsl(var(--primary))]">
          NEW
        </h1>
      </div>
    </section>
  );
}
