import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EligibleCoursesSection } from './components/EligibleCoursesSection';
import { InternationalCertificateSection } from './components/InternationalCertificateSection';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { InstructorSection } from './components/InstructorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyCta } from './components/StickyCta';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-['Montserrat',sans-serif] selection:bg-[#c5a059] selection:text-[#001438] relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* 🎓 Cursos com Certificação Internacional */}
        <EligibleCoursesSection />

        {/* International Certificate Showcase (Centerpiece) */}
        <InternationalCertificateSection />

        {/* Who Is This For */}
        <WhoIsThisFor />

        {/* Instructor Bio - Luciana Domingos */}
        <InstructorSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing / Hotmart Direct Course Checkout Section */}
        <PricingSection />

        {/* 7-Day Guarantee */}
        <GuaranteeSection />

        {/* FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* Floating Sticky Conversion Bar */}
      <StickyCta />
    </div>
  );
}
