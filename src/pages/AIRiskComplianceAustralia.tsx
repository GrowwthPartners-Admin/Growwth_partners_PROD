import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiRiskComplianceAustralia/HeroSection";
import { WhyChooseSection } from "@/components/aiRiskComplianceAustralia/WhyChooseSection";
import { WhatYouGetSection } from "@/components/aiRiskComplianceAustralia/WhatYouGetSection";
import { UseCasesSection } from "@/components/aiRiskComplianceAustralia/UseCasesSection";
import { WhoItsForSection } from "@/components/aiRiskComplianceAustralia/WhoItsForSection";
import { FAQSection } from "@/components/aiRiskComplianceAustralia/FAQSection";
import { CTASection } from "@/components/aiRiskComplianceAustralia/CTASection";

const AIRiskComplianceAustralia = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/au/ai-risk-compliance-australia/#service",
        "name": "AI for Risk, Compliance & Fraud Detection Australia",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "AI-powered risk detection, compliance monitoring, and fraud prevention for Australian businesses. Detect anomalies, protect sensitive data, and strengthen controls with Ryzup.ai.",
        "areaServed": "Australia"
      },
      {
        "@type": "Organization",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOhelper
        title="AI for Risk, Compliance & Fraud Detection Australia | Ryzup.ai"
        description="Detect risks before they occur with AI-powered spreadsheet checks, anomaly detection and privacy-safe workflows. Reduce errors, spot suspicious activity faster, and stay compliant with Ryzup.ai in Australia."
        keywords="ai fraud detection australia, ai compliance tools, risk management ai, financial anomaly detection, compliance automation australia, ryzup.ai"
        canonicalUrl="https://growwthpartners.com/au/ai-risk-compliance-australia"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <WhyChooseSection />
        <WhatYouGetSection />
        <UseCasesSection />
        <WhoItsForSection />
        <FAQSection />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AIRiskComplianceAustralia;
