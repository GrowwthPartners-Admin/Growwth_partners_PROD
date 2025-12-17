import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/incorporationForeigner/HeroSection";
import { WhyChooseSection } from "@/components/incorporationForeigner/WhyChooseSection";
import { RequirementsSection } from "@/components/incorporationForeigner/RequirementsSection";
import { VisaSection } from "@/components/incorporationForeigner/VisaSection";
import { WhatWeDeliverSection } from "@/components/incorporationForeigner/WhatWeDeliverSection";
import { ProcessSection } from "@/components/incorporationForeigner/ProcessSection";
import { ChecklistSection } from "@/components/incorporationForeigner/ChecklistSection";
import { WhoWeHelpSection } from "@/components/incorporationForeigner/WhoWeHelpSection";
import { FaqSection } from "@/components/incorporationForeigner/FaqSection";
import { CTASection } from "@/components/incorporationForeigner/CTASection";

const IncorporationForeigner = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Incorporation Services for Foreigners in Singapore"
        description="Set up a company in Singapore as a foreigner with full compliance and remote support. Fast, tailored incorporation guidance for relocation and growth."
        keywords="foreigner incorporation singapore, foreign company registration, singapore business setup foreigners, remote incorporation singapore, pte ltd foreigners"
        canonicalUrl="https://growwthpartners.com/incorporation/foreigner"
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <RequirementsSection />
        <VisaSection />
        <WhatWeDeliverSection />
        <ProcessSection />
        <ChecklistSection />
        <WhoWeHelpSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default IncorporationForeigner;
