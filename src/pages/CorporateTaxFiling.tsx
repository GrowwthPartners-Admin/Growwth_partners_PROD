import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/corporatetax/HeroSection";
import { SimplifiedSection } from "@/components/corporatetax/SimplifiedSection";
import { ServicesSection } from "@/components/corporatetax/ServicesSection";
import { WhoItsForSection } from "@/components/corporatetax/WhoItsForSection";
import { ProcessSection } from "@/components/corporatetax/ProcessSection";
import { WhyChooseSection } from "@/components/corporatetax/WhyChooseSection";
import { FaqSection } from "@/components/corporatetax/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";

const CorporateTaxFiling = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Corporate Tax Filing Singapore - Growwth Partners",
    "description": "Expert corporate tax filing services in Singapore. IRAS-compliant tax computation, e-filing, and tax planning to keep your business compliant and maximize savings.",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "areaServed": "Singapore",
    "serviceType": "Corporate Tax Filing"
  };

  return (
    <Layout>
      <SEOhelper
        title="Corporate Tax Filing Singapore | Expert IRAS Tax Services"
        description="Simplify corporate tax filing in Singapore with Growwth Partners. Expert tax computation, IRAS e-filing, and tax planning services. Stay compliant and maximize savings."
        keywords="corporate tax filing singapore, corporate tax services singapore, IRAS tax filing, tax computation singapore, corporate tax compliance"
        canonicalUrl="https://growwthpartners.com/corporate-tax-filing-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <SimplifiedSection />
        <ServicesSection />
        <WhoItsForSection />
        <ProcessSection />
        <WhyChooseSection />
        <FaqSection />
        <CtaSection
          title="Make Corporate Tax Filing One Less Thing To Worry About"
          description="Stay compliant, reduce risk, and unlock potential savings with expert corporate tax filing in Singapore support from Growwth Partners."
          primaryButtonText="Book a Free Tax Consultation"
          secondaryButtonText="Talk to a Corporate Tax Expert"
        />
      </motion.div>
    </Layout>
  );
};

export default CorporateTaxFiling;
