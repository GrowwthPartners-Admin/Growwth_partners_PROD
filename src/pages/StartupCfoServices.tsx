import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/startupCfo/HeroSection";
import WhatIsSection from "@/components/startupCfo/WhatIsSection";
import WhoShouldUseSection from "@/components/startupCfo/WhoShouldUseSection";
import ChallengesSection from "@/components/startupCfo/ChallengesSection";
import HowWeDeliverSection from "@/components/startupCfo/HowWeDeliverSection";
import WhyChooseSection from "@/components/startupCfo/WhyChooseSection";
import UseCaseSection from "@/components/startupCfo/UseCaseSection";
import FaqSection from "@/components/startupCfo/FaqSection";
import CTASection from "@/components/startupCfo/CTASection";

const StartupCfoServices = () => {
  const { pathname } = useLocation();

  // Determine location based on URL path
  const getLocationInfo = () => {
    if (pathname.includes("/uae")) {
      return { location: "UAE", country: "UAE" };
    } else if (pathname.includes("/au")) {
      return { location: "Australia", country: "Australia" };
    }
    return { location: "Singapore", country: "Singapore" };
  };

  const { location } = getLocationInfo();

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Startup CFO Services in ${location}`,
    "description": `CFO services for startups including modelling, investor reporting, cash burn control, and financial systems setup in ${location}.`,
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": location,
    "serviceType": "Startup CFO Services"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOhelper
        title={`Startup CFO Services in ${location} | Fundraising & Growth Strategy`}
        description="CFO services for startups including modelling, investor reporting, cash burn control, and financial systems setup."
        keywords="startup CFO Singapore, financial modelling for startups, startup reporting, investor support"
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

export default StartupCfoServices;
