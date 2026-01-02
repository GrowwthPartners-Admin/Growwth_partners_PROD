import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/partTimeFinanceTeam/HeroSection";
import WhatIsSection from "@/components/partTimeFinanceTeam/WhatIsSection";
import WhoShouldUseSection from "@/components/partTimeFinanceTeam/WhoShouldUseSection";
import ChallengesSection from "@/components/partTimeFinanceTeam/ChallengesSection";
import HowWeDeliverSection from "@/components/partTimeFinanceTeam/HowWeDeliverSection";
import WhyChooseSection from "@/components/partTimeFinanceTeam/WhyChooseSection";
import UseCaseSection from "@/components/partTimeFinanceTeam/UseCaseSection";
import FaqSection from "@/components/partTimeFinanceTeam/FaqSection";
import CTASection from "@/components/partTimeFinanceTeam/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Part-Time Finance Team Services",
  "provider": {
    "@type": "Organization",
    "name": "Growwth Partners",
    "url": "https://growwthpartners.com"
  },
  "description": "Access part-time finance professionals for reporting, accounting, forecasting, and financial operations.",
  "areaServed": [
    { "@type": "Country", "name": "Singapore" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Australia" }
  ],
  "serviceType": "Part-Time Finance Team"
};

const PartTimeFinanceTeam = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Part-Time Finance Team Singapore | Affordable Finance Support"
        description="Access part-time finance professionals for reporting, accounting, forecasting, and financial operations."
        keywords="part-time finance team, outsourced finance support, SME finance team"
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

export default PartTimeFinanceTeam;
