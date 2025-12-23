import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiCfoServices/HeroSection";
import WhatIsSection from "@/components/aiCfoServices/WhatIsSection";
import WhoShouldUseSection from "@/components/aiCfoServices/WhoShouldUseSection";
import LimitationsSection from "@/components/aiCfoServices/LimitationsSection";
import WhatYouGetSection from "@/components/aiCfoServices/WhatYouGetSection";
import HowWeDeliverSection from "@/components/aiCfoServices/HowWeDeliverSection";
import WhyChooseSection from "@/components/aiCfoServices/WhyChooseSection";
import UseCaseSection from "@/components/aiCfoServices/UseCaseSection";
import FaqSection from "@/components/aiCfoServices/FaqSection";
import CTASection from "@/components/aiCfoServices/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI CFO Services in Singapore",
  "description": "AI-enabled reporting, forecasting, cash flow management, and KPI dashboards for fast-scaling companies.",
  "provider": {
    "@type": "Organization",
    "name": "Growwth Partners",
    "url": "https://growwthpartners.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Singapore"
  },
  "serviceType": "AI CFO Services"
};

const AiCfoServices = () => {
  return (
    <>
      <SEOhelper
        title="AI CFO Services in Singapore | Smart Dashboards & Predictive Forecasts"
        description="AI-enabled reporting, forecasting, cash flow management, and KPI dashboards for fast-scaling companies."
        keywords="AI CFO Singapore, automated reporting, financial dashboards AI, predictive forecasting"
        ogType="website"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <LimitationsSection />
        <WhatYouGetSection />
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

export default AiCfoServices;
