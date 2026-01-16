import SEOhelper from "@/components/SEOhelper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/vcFinance/HeroSection";
import WhatIsSection from "@/components/vcFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/vcFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/vcFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/vcFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/vcFinance/WhyChooseSection";
import UseCaseSection from "@/components/vcFinance/UseCaseSection";
import FAQSection from "@/components/vcFinance/FAQSection";
import CTASection from "@/components/vcFinance/CTASection";

const VCFinance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Venture Capital & Fund Finance Services Singapore",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners"
    },
    "description": "CFO-led fund finance management, LP-ready reporting, and scalable finance systems for venture capital funds and investment vehicles in Singapore.",
    "areaServed": "Singapore",
    "serviceType": "Fund Finance Services"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOhelper
        title="VC & Fund Finance Services Singapore | LP Reporting & NAV"
        description="Finance support for VC funds including LP reporting, NAV calculation, capital calls, and fund governance in Singapore."
        keywords="vc finance Singapore, fund finance, LP reporting, NAV calculation, venture capital CFO, fund governance"
        canonicalUrl="https://growwthpartners.com/vc-fund-finance"
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

export default VCFinance;
