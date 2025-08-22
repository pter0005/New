"use client";

import React from 'react';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MethodSection from '@/components/method-section';
import PortfolioSection from '@/components/portfolio-section';
import ServicesSection from '@/components/services-section';
import FaqSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import WhatsAppFAB from '@/components/whatsapp-fab';
import Footer from '@/components/footer';
import DockNav from '@/components/dock-nav';
import ScrollAnimator from '@/components/scroll-animator';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <main>
        <HeroSection />
        <ScrollAnimator animationType="fadeInUp">
          <AboutSection />
        </ScrollAnimator>
        <ScrollAnimator animationType="zoomInFadeIn">
          <MethodSection />
        </ScrollAnimator>
        <ScrollAnimator animationType="fadeInUp">
          <PortfolioSection />
        </ScrollAnimator>
        <ScrollAnimator animationType="zoomInFadeIn">
          <ServicesSection />
        </ScrollAnimator>
        <ScrollAnimator animationType="fadeInUp">
          <FaqSection />
        </ScrollAnimator>
        <ScrollAnimator animationType="zoomInFadeIn">
          <ContactSection />
        </ScrollAnimator>
      </main>
      <Footer />
      <WhatsAppFAB />
      <DockNav />
    </div>
  );
}
