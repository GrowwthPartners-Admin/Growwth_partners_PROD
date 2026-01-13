import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/professionalServicesFinance/HeroSection";
import WhatIsSection from "@/components/professionalServicesFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/professionalServicesFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/professionalServicesFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/professionalServicesFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/professionalServicesFinance/WhyChooseSection";
import UseCaseSection from "@/components/professionalServicesFinance/UseCaseSection";
import FaqSection from "@/components/professionalServicesFinance/FaqSection";
import CTASection from "@/components/professionalServicesFinance/CTASection";

const ProfessionalServicesFinance: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Services Finance",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "description": "Finance solutions for agencies, law firms, consulting firms, and service providers.",
    "areaServed": "Singapore",
    "serviceType": "Professional Services Finance"
  };

  return (
    <>
      <SEOhelper
        title="Professional Services Finance | Time, Billing & Profitability"
        description="Finance solutions for agencies, law firms, consulting firms, and service providers."
        keywords="professional services finance, agency CFO, revenue leakage control, billing finance"
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
    </>
  );
};

export default ProfessionalServicesFinance;
