import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiFinanceWorkflowAustralia/HeroSection";
import WhyAINowSection from "@/components/aiFinanceWorkflowAustralia/WhyAINowSection";
import IntegrationSection from "@/components/aiFinanceWorkflowAustralia/IntegrationSection";
import WhoBenefitsSection from "@/components/aiFinanceWorkflowAustralia/WhoBenefitsSection";
import { FaqSection } from "@/components/accounting/FaqSection";

import CTASection from "@/components/aiFinanceWorkflowAustralia/CTASection";

const faqs = [
  {
    question:
      "How does Ryzup.ai deliver AI automation for finance in Australia?",
    answer:
      "Ryzup.ai embeds an AI assistant, forecasting tools, error detection and workflow agents directly inside Google Sheets, integrated with Xero, to automate analysis, reporting, reconciliations and quality checks.",
  },
  {
    question: "Does Ryzup.ai suit SMEs and startups in Australia?",
    answer:
      "Ryzup.ai supports startups, SMEs and growing finance teams with a modular setup so organisations can start small and expand automation as needs evolve.",
  },
  {
    question: "Will teams need to learn a new system?",
    answer:
      "Ryzup.ai runs inside Google Sheets and alongside existing accounting platforms, so teams keep familiar workflows that are enhanced by AI.",
  },
  {
    question: "How does Ryzup.ai improve data accuracy and compliance?",
    answer:
      "Smart error detection, reconciliation and GL agents, plus anonymisation, help reduce spreadsheet errors, highlight inconsistencies and protect sensitive information while using AI.",
  },
];

const AIFinanceWorkflowAustralia = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-finance-workflow-Australia/#faq",
        name: "AI Finance Workflow Australia - FAQ | Growwth Partners",
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
          "https://growwthpartners.com/ai-finance-workflow-Australia/#service",
        name: "AI Finance Workflow Integration Australia",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
        },
        description:
          "Integrate AI into your finance workflow with Ryzup.ai. Automate reporting, error checks, reconciliations and forecasting in Google Sheets and Xero.",
        areaServed: "Australia",
      },
      {
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          streetAddress: "65 Chulia Street",
          addressLocality: "Singapore",
          postalCode: "049513",
          addressCountry: "SG",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="AI Finance Workflow Integration Australia | Ryzup.ai | Growwth Partners"
        description="Automate finance workflows in Australia with Ryzup.ai. AI-powered reporting, error detection, reconciliations and forecasting inside Google Sheets and Xero."
        keywords="AI finance automation Australia, Ryzup.ai, finance workflow automation, Google Sheets AI, Xero integration, automated reporting Australia, finance AI tools"
        canonicalUrl="https://growwthpartners.com/au/ai-finance-workflow-australia"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyAINowSection />
        <IntegrationSection />
        <WhoBenefitsSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about AI Finance Workflow Integration in Australia"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AIFinanceWorkflowAustralia;
