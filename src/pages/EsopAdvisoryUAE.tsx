import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/esopAdvisoryUAE/HeroSection";
import WhatSetsUsApartSection from "@/components/esopAdvisoryUAE/WhatSetsUsApartSection";
import TailoredServicesSection from "@/components/esopAdvisoryUAE/TailoredServicesSection";
import PricingTableSection from "@/components/esopAdvisoryUAE/PricingTableSection";
import ClientsSection from "@/components/esopAdvisoryUAE/ClientsSection";
import FAQSection from "@/components/esopAdvisoryUAE/FAQSection";
import BroaderSupportSection from "@/components/esopAdvisoryUAE/BroaderSupportSection";
import CTASection from "@/components/esopAdvisoryUAE/CTASection";

const EsopAdvisoryUAE = () => {
  return (
    <Layout>
      <SEOhelper
        title="ESOP Advisory Services UAE | Expert Startup ESOP Support"
        description="Get expert ESOP advisory services in UAE. Growwth Partners helps startups and companies design, structure, and implement employee stock option plans that attract and retain top talent."
        keywords="ESOP advisory UAE, employee stock option plan UAE, ESOP consulting Dubai, ESOP implementation UAE, startup ESOP advisory"
        canonicalUrl="/uae/esop-advisory-uae"
      />
      <HeroSection />
      <WhatSetsUsApartSection />
      <TailoredServicesSection />
      <PricingTableSection />
      <ClientsSection />
      <FAQSection />
      <BroaderSupportSection />
      <CTASection />
    </Layout>
  );
};

export default EsopAdvisoryUAE;
