import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/aifinance/HeroSection";
import { WhyAiMattersSection } from "@/components/aifinance/WhyAiMattersSection";
import { WhatRyzupDoesSection } from "@/components/aifinance/WhatRyzupDoesSection";
import { FinanceAutomationSection } from "@/components/aifinance/FinanceAutomationSection";
import { FinanceStackSection } from "@/components/aifinance/FinanceStackSection";
import { StopDoingSection } from "@/components/aifinance/StopDoingSection";
import { WhoBenefitsSection } from "@/components/aifinance/WhoBenefitsSection";
import { SecuritySection } from "@/components/aifinance/SecuritySection";
import { FaqSection } from "@/components/aifinance/FaqSection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const AiInFinancePage = () => {
  const aiFinanceSchema = {
    "@context": "https://schema.org",
    name: "Transform Your Finance with AI Precision",
    description:
      "Discover how AI in finance is changing financial operations. RyzUp provides finance automation tools for forecasting, cash flow visibility, and real time decision support so teams can move faster with confidence",
    provider: {
      "@type": "Organization",
      name: "RyzUp",
      url: "https://growwthpartners.com",
    },
    serviceType: "AI Finance Automation",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI in finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI in finance refers to using machine intelligence to analyse financial data, predict trends, detect anomalies, and automate decision support. RyzUp applies this to forecasting, spend analysis, reporting, and cash flow management so your team can move faster with more confidence.",
        },
      },
      {
        "@type": "Question",
        name: "How does RyzUp save my team time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RyzUp automates the work you normally do in spreadsheets and slide decks. The platform pulls in data, cleans it, runs analysis, and gives you ready-to-use reporting. This reduces time spent preparing numbers and frees up time to act on them.",
        },
      },
      {
        "@type": "Question",
        name: "Can RyzUp replace my current finance team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. RyzUp is not here to replace your finance team. RyzUp is here to multiply them. You keep control. We remove the manual lift and surface the signal.",
        },
      },
      {
        "@type": "Question",
        name: "Is this only for large companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Early stage startups, profitable SMEs, and growth stage companies are already using RyzUp. If you are making financial decisions, you benefit.",
        },
      },
      {
        "@type": "Question",
        name: "How are you different from other finance automation tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most finance automation tools just aggregate numbers. RyzUp explains what those numbers mean, how they are trending, and what you should do next. You get narrative, recommendations, and forward view in one place.",
        },
      },
      {
        "@type": "Question",
        name: "Will investors and the board accept AI generated reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. RyzUp produces structured forecasts, cash visibility, and performance summaries in a format investors actually expect to see. It is not fluff. It is built for serious conversations.",
        },
      },
    ],
    areaServed: "Singapore, UAE, Australia",
    contactPoint: {
      "@type": "ContactPoint",
      email: "jd@growwthpartners.com",
      telephone: "+65 9861 5600",
      contactType: "Business Service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 Chulia Street",
      addressLocality: "Singapore",
      addressRegion: "#46-00 OCBC Centre, Singapore 049513",
      postalCode: "049513",
      addressCountry: "SG",
    },
  };

  // FAQ schema block
  const faqSchema = {
    "@context": "https://schema.org",
  };

  return (
    <Layout>
      <SEOhelper
        title="AI in Finance for Modern Teams | Finance Automation Tools by RyzUp"
        description="Discover how AI in finance is changing financial operations. RyzUp provides finance automation tools for forecasting, cash flow visibility, and real time decision support so teams can move faster with confidence."
        keywords="AI in finance, finance automation tools,  financial forecasting automation, automated cash flow visibility, real time financial insights, AI powered financial reporting, AI driven finance operations"
        canonicalUrl="https://growwthpartners.com/use-of-ai-in-finance"
        structuredData={aiFinanceSchema}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WhyAiMattersSection />
        <WhatRyzupDoesSection />
        <FinanceAutomationSection />
        <FinanceStackSection />
        <StopDoingSection />
        <WhoBenefitsSection />
        <SecuritySection />
        <FaqSection />
      </motion.div>
    </Layout>
  );
};

export default AiInFinancePage;
