import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiDecisionIntelligence/HeroSection";
import { TurnDataIntoDecisionsSection } from "@/components/aiDecisionIntelligence/TurnDataIntoDecisionsSection";
import { WhatRyzupGivesSection } from "@/components/aiDecisionIntelligence/WhatRyzupGivesSection";
import { BuiltForCFOsSection } from "@/components/aiDecisionIntelligence/BuiltForCFOsSection";
import { HowItWorksSection } from "@/components/aiDecisionIntelligence/HowItWorksSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CtaSection } from "@/components/aiDecisionIntelligence/CtaSection";

const AiDecisionIntelligence = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-decision-intelligence-singapore/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Ryzup.ai AI CFO for Singapore CFOs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ryzup.ai AI CFO is an AI powered financial assistant that gives CFOs and finance leaders in Singapore instant answers to questions about cash flow, hiring, budgets and outlook. It uses your real financial data to generate insights, recommendations and clear explanations in seconds.",
            },
          },
          {
            "@type": "Question",
            name: "How does Ryzup.ai support smarter decisions for CFOs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ryzup.ai combines AI dashboards, automated analysis and forecasting. Instead of manually building models, you ask questions such as 'What is our outlook for the next quarter' and the AI CFO breaks down projected growth, expenses and cash, then suggests next steps.",
            },
          },
          {
            "@type": "Question",
            name: "Is Ryzup.ai safe for sensitive financial data?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Ryzup.ai is built for finance teams with secure integration to modern accounting platforms and controls around access and collaboration. Your data stays within a structured, enterprise grade environment while you use AI for analysis.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to be a data expert to use Ryzup.ai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Ryzup.ai is designed for CFOs, founders and finance teams who want insights, not dashboards to design. You ask questions and review the answers, models and suggestions in a clean, guided interface.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/ai-decision-intelligence-singapore/#service",
        "name": "ai-decision-intelligence-singapore",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "Ryzup.ai gives CFOs in Singapore a live financial cockpit. Get real-time dashboards, automated analysis, and AI-powered forecasting for smarter decisions.",
        "areaServed": "Singapore"
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
      },
    ],
  };

  const faqs = [
    {
      value: "faq-1",
      question: "What is Ryzup.ai AI CFO for Singapore CFOs?",
      answer: "Ryzup.ai AI CFO is an AI powered financial assistant that gives CFOs and finance leaders in Singapore instant answers to questions about cash flow, hiring, budgets and outlook. It uses your real financial data to generate insights, recommendations and clear explanations in seconds.",
    },
    {
      value: "faq-2",
      question: "How does Ryzup.ai support smarter decisions for CFOs?",
      answer: "Ryzup.ai combines AI dashboards, automated analysis and forecasting. Instead of manually building models, you ask questions such as 'What is our outlook for the next quarter' and the AI CFO breaks down projected growth, expenses and cash, then suggests next steps.",
    },
    {
      value: "faq-3",
      question: "Is Ryzup.ai safe for sensitive financial data?",
      answer: "Yes. Ryzup.ai is built for finance teams with secure integration to modern accounting platforms and controls around access and collaboration. Your data stays within a structured, enterprise grade environment while you use AI for analysis.",
    },
    {
      value: "faq-4",
      question: "Do I need to be a data expert to use Ryzup.ai?",
      answer: "No. Ryzup.ai is designed for CFOs, founders and finance teams who want insights, not dashboards to design. You ask questions and review the answers, models and suggestions in a clean, guided interface.",
    },
  ];

  return (
    <Layout>
      <SEOhelper
        title="AI Decision Intelligence for CFOs in Singapore | Ryzup.ai"
        description="Ryzup.ai gives CFOs in Singapore a live financial cockpit. Get real-time dashboards, automated analysis, and AI-powered forecasting for smarter decisions."
        keywords="AI CFO Singapore, AI decision intelligence, CFO dashboards, financial forecasting AI, Ryzup.ai, finance automation Singapore"
        canonicalUrl="https://growwthpartners.com/ai-decision-intelligence-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <TurnDataIntoDecisionsSection />
        <WhatRyzupGivesSection />
        <BuiltForCFOsSection />
        <HowItWorksSection />
        <FaqSection faqs={faqs} subtitle="Find answers to common questions about AI Decision Intelligence for CFOs" />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default AiDecisionIntelligence;
