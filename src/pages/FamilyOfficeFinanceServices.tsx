import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/familyOfficeFinanceServices/HeroSection';
import WhatIsSection from '@/components/familyOfficeFinanceServices/WhatIsSection';
import WhoShouldUseSection from '@/components/familyOfficeFinanceServices/WhoShouldUseSection';
import ChallengesSection from '@/components/familyOfficeFinanceServices/ChallengesSection';
import HowWeDeliverSection from '@/components/familyOfficeFinanceServices/HowWeDeliverSection';
import WhyChooseSection from '@/components/familyOfficeFinanceServices/WhyChooseSection';
import UseCaseSection from '@/components/familyOfficeFinanceServices/UseCaseSection';
import FAQSection from '@/components/familyOfficeFinanceServices/FAQSection';
import CTASection from '@/components/familyOfficeFinanceServices/CTASection';

const FamilyOfficeFinanceServices: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Family Office Finance Services Singapore",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "description": "Finance support for family offices including consolidated reporting, investment dashboards, and cash flow planning.",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "serviceType": "Family Office Finance Services"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Family Office Finance Services Singapore | Reporting, Control & Advisory"
        description="Finance support for family offices including consolidated reporting, investment dashboards, and cash flow planning."
        keywords="family office finance, investment reporting, wealth management finance, family office Singapore, consolidated reporting, wealth governance"
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
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FamilyOfficeFinanceServices;
