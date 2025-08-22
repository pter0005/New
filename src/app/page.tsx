"use client";

import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MethodSection from '@/components/method-section';
import PortfolioSection from '@/components/portfolio-section';
import ServicesSection from '@/components/services-section';
import FaqSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Splash screen duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MethodSection />
          <PortfolioSection />
          <ServicesSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </div>
  );
}

// Helper component for grid pattern background
function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-primary/10 stroke-primary/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          x="100%"
          y="100%"
          patternTransform="translate(-50% -50%)"
        >
          <path d="M0 80V.5H80" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </svg>
  );
}
