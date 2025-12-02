import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiWorkflow/HeroSection";
import { WhyAiNowSection } from "@/components/aiWorkflow/WhyAiNowSection";
import { HowRyzupIntegratesSection } from "@/components/aiWorkflow/HowRyzupIntegratesSection";
import { WhoBenefitsSection } from "@/components/aiWorkflow/WhoBenefitsSection";
import { HowItFitsSection } from "@/components/aiWorkflow/HowItFitsSection";
import { FaqSection } from "@/components/accounting/FaqSection";

const AiFinanceWorkflowPage = () => {
  const faqs = [
    {
      question: "How does Ryzup.ai automate finance workflows?",
      answer: "Ryzup.ai adds an AI assistant, forecasting tools, error detection and specialised agents directly inside Google Sheets, integrated with your accounting platform. It automates tasks like data refresh, reconciliations, financial analysis and reporting, reducing manual work for finance teams."
    },
    {
      question: "Is Ryzup.ai only for large enterprises?",
      answer: "No. Ryzup.ai is used by fast-growing startups, SMEs and finance teams across industries. Pricing and setup allow Singapore businesses to start small and expand AI finance automation as they grow."
    },
    {
      question: "Will my team need to learn a completely new system?",
      answer: "No. Ryzup.ai works inside Google Sheets and alongside your existing accounting tools. Your team continues using familiar spreadsheets, now supercharged with finance workflow AI."
    },
    {
      question: "How does Ryzup.ai help with data accuracy and risk?",
      answer: "Smart error detection, GL and reconciliation agents, plus anonymisation features, help you reduce spreadsheet mistakes, spot inconsistencies and protect sensitive data while using AI."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-finance-workflow-singapore/#faq",
        "name": "AI Finance Workflow Singapore - FAQ | Growwth Partners",
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
        "@id": "https://growwthpartners.com/ai-finance-workflow-singapore/#service",
        "name": "AI Finance Workflow Integration Singapore",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "Integrate AI into your finance workflow with Ryzup.ai. Automate reporting, error checks, reconciliations and forecasting in Google Sheets and Xero.",
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
        title="Integrate AI into Finance Workflow Singapore | Ryzup.ai Automation"
        description="Transform your finance operations with AI. Ryzup.ai automates reporting, error checks, reconciliations and forecasting in Google Sheets and Xero for Singapore businesses."
        keywords="ai finance automation singapore, finance workflow ai, ryzup.ai, ai finance singapore, automated reporting, finance automation"
        canonicalUrl="https://growwthpartners.com/ai-finance-workflow-singapore"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <WhyAiNowSection />
        <HowRyzupIntegratesSection />
        <WhoBenefitsSection />
        <HowItFitsSection />
        <FaqSection faqs={faqs} subtitle="Find answers to common questions about Finance Workflow With Ryzup.ai" />
      </motion.div>
    </Layout>
  );
};

export default AiFinanceWorkflowPage;
