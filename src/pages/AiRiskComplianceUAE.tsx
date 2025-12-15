import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiRiskComplianceUAE/HeroSection";
import WhyChooseSection from "@/components/aiRiskComplianceUAE/WhyChooseSection";
import WhatYouGetSection from "@/components/aiRiskComplianceUAE/WhatYouGetSection";
import BuiltForUAESection from "@/components/aiRiskComplianceUAE/BuiltForUAESection";
import CTASection from "@/components/aiRiskComplianceUAE/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How does Ryzup.ai support AI compliance in the UAE?",
    answer:
      "Ryzup.ai provides privacy-safe analysis through anonymisation, automated spreadsheet checks, and audit-friendly outputs aligned to VAT, Corporate Tax, and FTA expectations.",
  },
  {
    question: "What kind of AI risk monitoring does Ryzup.ai provide?",
    answer:
      "Ryzup.ai detects anomalies in spreadsheets and accounting data, flags irregular GL movements, highlights reconciliation breaks, and surfaces outliers for review.",
  },
  {
    question: "Can Ryzup.ai help prepare for audits in the UAE?",
    answer:
      "Ryzup.ai streamlines audit readiness with reconciliations, documented checks, cleaner schedules, and consistent workpapers that reduce back-and-forth during reviews.",
  },
  {
    question: "Does Ryzup.ai protect sensitive financial and personal data?",
    answer:
      "Ryzup.ai includes an Anonymiser that masks sensitive fields while preserving relationships, supporting privacy-first analysis and responsible AI usage.",
  },
  {
    question: "Is Ryzup.ai suitable for SMEs as well as larger enterprises?",
    answer:
      "Ryzup.ai is designed for startups, SMEs, and larger teams in the UAE that want practical AI monitoring without replacing existing tools or workflows.",
  },
  {
    question: "How quickly can UAE businesses implement Ryzup.ai?",
    answer:
      "Most teams enable the Sheets extension, connect data, and run first checks within days, then expand into continuous monitoring and tailored alert rules.",
  },
];

const AiRiskComplianceUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/uae/ai-risk-compliance-fraud-uae/#faq",
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
          "https://growwthpartners.com/uae/ai-risk-compliance-fraud-uae/#service",
        name: "AI for Risk, Compliance & Fraud Detection UAE",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
        },
        description:
          "Detect fraud, monitor risks, and stay compliant using AI tools. Ryzup.ai helps UAE finance teams automate checks, protect sensitive data, and prepare audit-ready reports.",
        areaServed: "UAE",
      },
      {
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="AI for Risk, Compliance & Fraud UAE | Ryzup.ai"
        description="Detect fraud, monitor risks, and stay compliant using AI tools. Ryzup.ai helps UAE finance teams automate checks, protect sensitive data, and prepare audit-ready reports."
        keywords="ai risk compliance uae, ai fraud detection dubai, ryzup.ai, compliance automation uae, risk monitoring, audit preparation"
        canonicalUrl="https://growwthpartners.com/uae/ai-risk-compliance-fraud-uae"
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
        <BuiltForUAESection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about AI Risk, Compliance & Fraud Detection in the UAE"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AiRiskComplianceUAE;
