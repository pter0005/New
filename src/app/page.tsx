"use client";

import React from 'react';
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
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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
