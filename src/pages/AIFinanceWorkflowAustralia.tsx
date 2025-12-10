import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiFinanceWorkflowAustralia/HeroSection";
import WhyAINowSection from "@/components/aiFinanceWorkflowAustralia/WhyAINowSection";
import IntegrationSection from "@/components/aiFinanceWorkflowAustralia/IntegrationSection";
import WhoBenefitsSection from "@/components/aiFinanceWorkflowAustralia/WhoBenefitsSection";
import FAQSection from "@/components/aiFinanceWorkflowAustralia/FAQSection";
import CTASection from "@/components/aiFinanceWorkflowAustralia/CTASection";

const AIFinanceWorkflowAustralia = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Finance Workflow Integration Australia",
        "description": "Ryzup.ai turns Google Sheets and Xero into an AI-powered finance hub. Automate reporting, error checks, reconciliations and forecasting for Australian businesses.",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners",
          "url": "https://growwthpartners.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "serviceType": "AI Finance Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Ryzup.ai deliver AI automation for finance in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ryzup.ai embeds an AI assistant, forecasting tools, error detection and workflow agents directly inside Google Sheets, integrated with Xero, to automate analysis, reporting, reconciliations and quality checks."
            }
          },
          {
            "@type": "Question",
            "name": "Does Ryzup.ai suit SMEs and startups in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ryzup.ai supports startups, SMEs and growing finance teams with a modular setup so organisations can start small and expand automation as needs evolve."
            }
          },
          {
            "@type": "Question",
            "name": "Will teams need to learn a new system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ryzup.ai runs inside Google Sheets and alongside existing accounting platforms, so teams keep familiar workflows that are enhanced by AI."
            }
          },
          {
            "@type": "Question",
            "name": "How does Ryzup.ai improve data accuracy and compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Smart error detection, reconciliation and GL agents, plus anonymisation, help reduce spreadsheet errors, highlight inconsistencies and protect sensitive information while using AI."
            }
          }
        ]
      }
    ]
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
        <FAQSection />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AIFinanceWorkflowAustralia;
