import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiForecasting/HeroSection";
import { StopGuessingSection } from "@/components/aiForecasting/StopGuessingSection";
import { WhatRyzupDoesSection } from "@/components/aiForecasting/WhatRyzupDoesSection";
import { InteractiveDesignSection } from "@/components/aiForecasting/InteractiveDesignSection";
import { BuiltForSection } from "@/components/aiForecasting/BuiltForSection";
import { WhyRyzupSection } from "@/components/aiForecasting/WhyRyzupSection";
import { UseCasesSection } from "@/components/aiForecasting/UseCasesSection";
import { SecuritySection } from "@/components/aiForecasting/SecuritySection";
import { FaqSection } from "@/components/accounting/FaqSection";

const AiFinancialForecastingPage = () => {
  const faqs = [
    {
      question: "What does Ryzup.ai do for financial forecasting?",
      answer: "Ryzup.ai uses AI to analyse your historical and live financial data, then builds predictive finance models for revenue, costs, and cash flow. Instead of updating spreadsheets manually, you get continuously updated forecasts and scenarios tailored for Singapore businesses."
    },
    {
      question: "How is Ryzup.ai different from my current spreadsheet model?",
      answer: "Spreadsheets rely on manual updates and complex formulas. Ryzup.ai automates the data flow, applies machine learning, and creates predictive finance models that update as new data comes in. You get a living forecast, not static files that are out of date the moment they are shared."
    },
    {
      question: "Do I need a data science team to use Ryzup.ai?",
      answer: "No. Ryzup.ai is built for finance teams, founders, and CFOs, not data scientists. The AI runs in the background. You work with clear visuals, simple controls, and plain-language explanations so you can focus on decisions, not models."
    },
    {
      question: "Can Ryzup.ai handle multi-entity or multi-currency forecasting?",
      answer: "Yes. You can set up multiple entities and currencies inside Ryzup.ai and then build consolidated predictive finance models. This is especially useful for Singapore companies operating across different regions and markets."
    },
    {
      question: "How accurate are Ryzup.ai forecasts?",
      answer: "Ryzup.ai forecasts are designed to reduce manual modelling errors and improve trend detection by learning from your data over time. Accuracy will still depend on the quality of your inputs and how volatile your business is, but AI forecasting for Singapore businesses typically delivers more consistent, explainable forecasts than manual spreadsheets."
    },
    {
      question: "Is my financial data secure in Ryzup.ai?",
      answer: "Yes. Ryzup.ai uses strong encryption, role based access, and best practice security controls to protect your financial data. The platform is designed for finance workloads, with audit friendly logs and permission structures that keep sensitive information safe."
    },
    {
      question: "How long does it take to get started with Ryzup.ai?",
      answer: "Most teams can connect their core systems and see a first version of their AI forecasting in Ryzup.ai within days, not months. Once your data is connected, you refine assumptions, build scenarios, and start using the forecasts in leadership and board conversations."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-financial-forecasting-singapore/#faq",
        "name": "AI Financial Forecasting Singapore - FAQ | Growwth Partners",
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
        "@id": "https://growwthpartners.com/ai-financial-forecasting-singapore/#service",
        "name": "AI-Powered Financial Forecasting Singapore",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "AI-powered financial forecasting for Singapore businesses. Build predictive finance models, scenario planning, and real-time cash flow projections with Ryzup.ai.",
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
        title="AI-Powered Financial Forecasting Singapore | Predictive Finance Models | Ryzup.ai"
        description="Transform your financial planning with AI forecasting for Singapore businesses. Build predictive finance models, run scenarios, and see real-time cash runway with Ryzup.ai."
        keywords="ai financial forecasting singapore, predictive finance models, ai forecasting singapore, financial planning ai, cash flow forecasting, ryzup.ai"
        canonicalUrl="https://growwthpartners.com/ai-financial-forecasting-singapore"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <StopGuessingSection />
        <WhatRyzupDoesSection />
        <InteractiveDesignSection />
        <BuiltForSection />
        <WhyRyzupSection />
        <UseCasesSection />
        <SecuritySection />
        <FaqSection faqs={faqs} subtitle="Find answers to common questions about AI Financial Forecasting with Ryzup.ai" />
      </motion.div>
    </Layout>
  );
};

export default AiFinancialForecastingPage;
