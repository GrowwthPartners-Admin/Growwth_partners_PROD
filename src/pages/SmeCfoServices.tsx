import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/smeCfo/HeroSection';
import WhatIsSection from '@/components/smeCfo/WhatIsSection';
import WhoShouldUseSection from '@/components/smeCfo/WhoShouldUseSection';
import ChallengesSection from '@/components/smeCfo/ChallengesSection';
import HowWeDeliverSection from '@/components/smeCfo/HowWeDeliverSection';
import WhyChooseSection from '@/components/smeCfo/WhyChooseSection';
import UseCaseSection from '@/components/smeCfo/UseCaseSection';
import FaqSection from '@/components/smeCfo/FaqSection';
import CTASection from '@/components/smeCfo/CTASection';

const SmeCfoServices: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SME CFO Services in Singapore",
    "description": "SME CFO services including financial planning, cash flow management, profitability analysis, and strategic decision support for small and medium enterprises.",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "serviceType": "SME CFO Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="SME CFO Services in Singapore | Financial Operations & Strategy"
        description="SME CFO services including financial planning, cash flow management, profitability analysis, and strategic decision support for growing SMEs."
        keywords="SME CFO Singapore, SME finance services, outsourced CFO for SMEs, cash flow for SMEs"
        canonicalUrl="https://growwthpartners.com/sme-cfo-services"
        ogType="website"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <ChallengesSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default SmeCfoServices;
