import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiFinanceWorkflowUAE/HeroSection";
import WhyAiNowSection from "@/components/aiFinanceWorkflowUAE/WhyAiNowSection";
import HowRyzupIntegratesSection from "@/components/aiFinanceWorkflowUAE/HowRyzupIntegratesSection";
import BuiltForUAESection from "@/components/aiFinanceWorkflowUAE/BuiltForUAESection";
import WhoBenefitsSection from "@/components/aiFinanceWorkflowUAE/WhoBenefitsSection";
import CTASection from "@/components/aiFinanceWorkflowUAE/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How does Growwth Partners deliver AI automation in the UAE?",
    answer:
      "Growwth Partners embeds an AI assistant, forecasting tools, error detection and workflow agents inside Google Sheets, integrated with your accounting platform, to automate analysis, reporting, reconciliations and quality checks.",
  },
  {
    question: "Is Ryzup.ai suitable for SMEs and startups in the UAE?",
    answer:
      "Ryzup.ai supports startups, SMEs and growing finance teams with a modular setup so organisations can start small and expand automation as needs evolve.",
  },
  {
    question: "Will finance teams need to learn a new system?",
    answer:
      "Ryzup.ai runs inside Google Sheets and alongside existing accounting platforms, so teams keep familiar workflows that are enhanced by AI.",
  },
  {
    question: "How does Growwth Partners improve data accuracy and compliance?",
    answer:
      "Smart error detection, reconciliation and GL agents, plus anonymisation, help reduce spreadsheet errors, highlight inconsistencies and protect sensitive information while using AI. Outputs support VAT, Corporate Tax and FTA-aligned documentation.",
  },
  {
    question: "How quickly can UAE businesses see value?",
    answer:
      "Most teams connect data and run first automations within days, then expand into continuous monitoring, dashboards and forecasting.",
  },
];

const AiFinanceWorkflowUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com//uae/ai-finance-workflow-uae/#faq",
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
          "https://growwthpartners.com/uae/ai-finance-workflow-uae/#service",
        name: "AI Finance Workflow Integration UAE",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
        },
        description:
          "Automate finance processes and boost efficiency with AI. Ryzup.ai helps UAE finance teams integrate AI for faster reporting, accurate reconciliations and real time insights.",
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
        title="AI Finance Workflow Integration UAE | Ryzup.ai"
        description="Automate finance processes and boost efficiency with AI. Ryzup.ai helps UAE finance teams integrate AI for faster reporting, accurate reconciliations and real time insights."
        keywords="ai finance automation uae, finance workflow ai, ryzup.ai, ai finance uae, automated reporting, finance automation dubai"
        canonicalUrl="https://growwthpartners.com/uae/ai-finance-workflow-uae"
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
        <BuiltForUAESection />
        <WhoBenefitsSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to Common questions about  AI Finance Workflow Integration in UAE"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AiFinanceWorkflowUAE;
