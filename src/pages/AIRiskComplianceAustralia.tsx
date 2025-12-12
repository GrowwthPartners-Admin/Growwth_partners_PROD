import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiRiskComplianceAustralia/HeroSection";
import { WhyChooseSection } from "@/components/aiRiskComplianceAustralia/WhyChooseSection";
import { WhatYouGetSection } from "@/components/aiRiskComplianceAustralia/WhatYouGetSection";
import { UseCasesSection } from "@/components/aiRiskComplianceAustralia/UseCasesSection";
import { WhoItsForSection } from "@/components/aiRiskComplianceAustralia/WhoItsForSection";
import { CTASection } from "@/components/aiRiskComplianceAustralia/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How does Ryzup.ai support AI compliance in Australia?",
    answer:
      "Ryzup.ai provides privacy-safe analysis through anonymisation, automated spreadsheet checks, and audit-friendly outputs that help Australian businesses meet internal and external compliance expectations.",
  },
  {
    question: "What kind of AI risk detection does Ryzup.ai provide?",
    answer:
      "Ryzup.ai detects anomalies in spreadsheets and accounting data, flags irregular GL movements, highlights reconciliation breaks, and surfaces outliers that warrant review.",
  },
  {
    question: "Can Ryzup.ai help prepare for audits in Australia?",
    answer:
      "Ryzup.ai streamlines audit readiness with reconciliations, documented checks, cleaner schedules, and consistent workpapers that reduce back-and-forth during reviews.",
  },
  {
    question: "Does Ryzup.ai protect sensitive financial and personal data?",
    answer:
      "Ryzup.ai includes an Anonymiser that masks sensitive fields while preserving relational structure, supporting privacy-first analysis and responsible AI usage.",
  },
  {
    question: "Is Ryzup.ai suitable for SMEs as well as larger enterprises?",
    answer:
      "Ryzup.ai is designed for startups, SMEs, and larger teams in Australia that want practical AI monitoring without replacing existing tools or workflows.",
  },
  {
    question: "How quickly can Australian businesses implement Ryzup.ai?",
    answer:
      "Most teams enable the Sheets extension, connect data, and run first checks within days, then expand into continuous monitoring and tailored alert rules.",
  },
];

const AIRiskComplianceAustralia = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/AI for Risk, Compliance & Fraud Detection Australia/#faq",
        name: "AI for Risk, Compliance & Fraud Detection Australia",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Service",
        "@id":
          "https://growwthpartners.com/au/ai-risk-compliance-australia/#service",
        name: "AI for Risk, Compliance & Fraud Detection Australia",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
        },
        description:
          "Detect risks before they occur with AI-powered spreadsheet checks, anomaly detection and privacy-safe workflows. Reduce errors, spot suspicious activity faster, and stay compliant with Ryzup.ai in Australia.",
        areaServed: "Australia",
      },
      {
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          streetAddress: "50 Clarence St",
          addressLocality: "Sydney",
          postalCode: "2000",
          addressCountry: "AU",
        },
      },
    ],
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
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to Common questions about AI Risk, Compliance and Fraud in Australia"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AIRiskComplianceAustralia;
