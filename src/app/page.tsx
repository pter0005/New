"use client";

import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MethodSection from '@/components/method-section';
import PortfolioSection from '@/components/portfolio-section';
import ServicesSection from '@/components/services-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppFAB from '@/components/whatsapp-fab';
import ParticleBackground from '@/components/particle-background';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Splash screen duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MethodSection />
          <PortfolioSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </div>
  );
}
