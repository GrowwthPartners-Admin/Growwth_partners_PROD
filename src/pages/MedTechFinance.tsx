import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/medtechFinance/HeroSection";
import WhatIsSection from "@/components/medtechFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/medtechFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/medtechFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/medtechFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/medtechFinance/WhyChooseSection";
import UseCaseSection from "@/components/medtechFinance/UseCaseSection";
import FaqSection from "@/components/medtechFinance/FaqSection";
import CTASection from "@/components/medtechFinance/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "MedTech & Healthcare Finance Services",
  "provider": {
    "@type": "Organization",
    "name": "Growwth Partners",
    "url": "https://growwthpartners.com"
  },
  "description": "Finance services for MedTech including modelling, compliance reporting, and cost tracking",
  "areaServed": {
    "@type": "Country",
    "name": "Singapore"
  },
  "serviceType": "MedTech Finance Services"
};

const MedTechFinance = () => {
  return (
    <>
      <SEOhelper
        title="MedTech Finance Services Singapore | Forecasting & Compliance"
        description="Finance services for MedTech including modelling, compliance reporting, and cost tracking"
        keywords="medtech finance Singapore, medtech CFO, R&D costing, medical technology finance"
        ogType="website"
        structuredData={structuredData}
      />
      <main className="overflow-hidden">
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
    </>
  );
};

export default MedTechFinance;
