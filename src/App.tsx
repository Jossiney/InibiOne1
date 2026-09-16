import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterMindset } from './components/BeforeAfterMindset';
import { BenefitsBento } from './components/BenefitsBento';
import { DailyRoutine } from './components/DailyRoutine';
import { Ingredients } from './components/Ingredients';
import { SocialProof } from './components/SocialProof';
import { PricingKits } from './components/PricingKits';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyCtaBar } from './components/StickyCtaBar';
import { KITS_DATA } from './data/content';
import { KitOption } from './types';

export default function App() {
  const [selectedKit, setSelectedKit] = useState<KitOption>(KITS_DATA[1]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const scrollToKits = () => {
    const kitsSection = document.getElementById('kits');
    if (kitsSection) {
      kitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectKit = (kit: KitOption) => {
    setSelectedKit(kit);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2E21] font-sans antialiased selection:bg-[#22C55E]/20 selection:text-[#142B1A]">
      {/* Top Navbar */}
      <Navbar onCtaClick={scrollToKits} />

      {/* Hero Section: Aspirational Lifestyle + Integrated Product */}
      <Hero onCtaClick={scrollToKits} />

      {/* Emotional Reconnection: The Cycle Left Behind vs. The New Horizon */}
      <BeforeAfterMindset onCtaClick={scrollToKits} />

      {/* Narrative Bento Benefits */}
      <BenefitsBento />

      {/* Daily Routine: Hour-by-Hour Timeline */}
      <DailyRoutine />

      {/* Clean Botanical Science & Ingredients */}
      <Ingredients />

      {/* Social Proof: Authentic Human Stories & Quantified Metrics */}
      <SocialProof onCtaClick={scrollToKits} />

      {/* Pricing Kits / Transformation Protocols */}
      <PricingKits onSelectKit={handleSelectKit} />

      {/* 30 Days Risk-Free Guarantee */}
      <Guarantee onCtaClick={scrollToKits} />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Responsible Regulatory & Brand Footer */}
      <Footer />

      {/* Floating Sticky Conversion Bar on Scroll */}
      <StickyCtaBar onCtaClick={scrollToKits} />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedKit={selectedKit}
      />
    </div>
  );
}
