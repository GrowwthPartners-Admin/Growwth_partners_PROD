import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/outsourcedCfo/HeroSection";
import WhatIsSection from "@/components/outsourcedCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/outsourcedCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/outsourcedCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/outsourcedCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/outsourcedCfo/WhyChooseSection";
import UseCaseSection from "@/components/outsourcedCfo/UseCaseSection";
import FaqSection from "@/components/outsourcedCfo/FaqSection";
import CTASection from "@/components/outsourcedCfo/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Outsourced CFO Services Singapore",
  "description": "End-to-end outsourced CFO support including strategy, forecasting, reporting, and finance team supervision.",
  "provider": {
    "@type": "Organization",
    "name": "Growwth Partners",
    "url": "https://growwthpartners.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Singapore"
  },
  "serviceType": "Outsourced CFO Services"
};

const OutsourcedCfoServices = () => {
  return (
    <div className="min-h-screen">
      <SEOhelper
        title="Outsourced CFO Services Singapore | Full Finance Leadership"
        description="End-to-end outsourced CFO support including strategy, forecasting, reporting, and finance team supervision."
        keywords="outsourced CFO Singapore, CFO as a service, virtual CFO, end-to-end finance outsourcing"
        canonicalUrl="https://growwthpartners.com/outsourced-cfo-services"
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

export default OutsourcedCfoServices;
