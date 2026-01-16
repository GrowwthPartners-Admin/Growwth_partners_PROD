import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/peFinance/HeroSection";
import WhatIsSection from "@/components/peFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/peFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/peFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/peFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/peFinance/WhyChooseSection";
import UseCaseSection from "@/components/peFinance/UseCaseSection";
import FAQSection from "@/components/peFinance/FAQSection";
import CTASection from "@/components/peFinance/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Private Equity Finance Services",
  "provider": {
    "@type": "Organization",
    "name": "Growwth Partners"
  },
  "description": "Finance support for PE-backed companies including reporting, dashboards, and control implementation.",
  "areaServed": "Singapore",
  "serviceType": "Private Equity Finance"
};

const PEFinance = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="Private Equity Finance Services | Portfolio Reporting & Controls"
        description="Finance support for PE-backed companies including reporting, dashboards, and control implementation."
        keywords="private equity finance, portfolio CFO, PE reporting, PE finance Singapore, portfolio reporting, value creation"
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

export default PEFinance;
