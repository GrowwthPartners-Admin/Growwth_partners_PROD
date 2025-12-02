import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiRiskCompliance/HeroSection";
import { HowRyzupHelpsSection } from "@/components/aiRiskCompliance/HowRyzupHelpsSection";
import { WhyChooseSection } from "@/components/aiRiskCompliance/WhyChooseSection";
import { FaqSection } from "@/components/accounting/FaqSection";

const AiRiskCompliancePage = () => {
  const faqs = [
    {
      question: "Does Ryzup.ai replace our fraud team or auditors?",
      answer: "No. Ryzup.ai does not replace human judgement. It acts as a layer of AI assistance to highlight errors, anomalies and privacy risks so your finance, risk and audit teams can focus on investigation and decision-making."
    },
    {
      question: "Can Ryzup.ai help with compliance audits in Singapore?",
      answer: "Yes. By maintaining cleaner spreadsheets, automated reconciliations, and anonymised datasets, Ryzup.ai helps you show stronger controls, more accurate numbers, and privacy-aware AI usage during audits and reviews."
    },
    {
      question: "Is Ryzup.ai suitable for SMEs, not just large enterprises?",
      answer: "Absolutely. Ryzup.ai is used by startups and growing companies that need control and audit readiness without building a large in-house risk or data team."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-risk-compliance-singapore/#faq",
        "name": "AI for Risk, Compliance & Fraud Singapore - FAQ | Growwth Partners",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/ai-risk-compliance-singapore/#service",
        "name": "AI for Risk, Compliance & Fraud Detection Singapore",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "AI-powered risk detection, compliance monitoring, and fraud prevention for Singapore businesses. Detect anomalies, protect sensitive data, and strengthen controls with Ryzup.ai.",
        "areaServed": "Singapore"
      },
      {
        "@type": "Organization",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "65 Chulia Street",
          "addressLocality": "Singapore",
          "postalCode": "049513",
          "addressCountry": "SG"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOhelper
        title="AI for Risk, Compliance & Fraud Detection Singapore | Ryzup.ai"
        description="Detect risks before they occur with AI-powered spreadsheet checks, anomaly detection and privacy-safe workflows. Reduce errors, spot suspicious activity faster, and stay compliant with Ryzup.ai."
        keywords="ai fraud detection singapore, ai compliance tools, risk management ai, financial anomaly detection, compliance automation singapore, ryzup.ai"
        canonicalUrl="https://growwthpartners.com/ai-risk-compliance-singapore"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <HowRyzupHelpsSection />
        <WhyChooseSection />
        <FaqSection faqs={faqs} subtitle="Find answers to common questions about AI for Risk, Compliance & Fraud with Ryzup.ai" />
      </motion.div>
    </Layout>
  );
};

export default AiRiskCompliancePage;
