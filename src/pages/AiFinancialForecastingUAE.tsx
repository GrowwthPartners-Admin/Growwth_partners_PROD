import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiFinancialForecastingUAE/HeroSection";
import WhyChooseSection from "@/components/aiFinancialForecastingUAE/WhyChooseSection";
import WhatYouGetSection from "@/components/aiFinancialForecastingUAE/WhatYouGetSection";
import BuiltForUAESection from "@/components/aiFinancialForecastingUAE/BuiltForUAESection";
import CTASection from "@/components/aiFinancialForecastingUAE/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How does Ryzup.ai deliver AI financial forecasting in the UAE?",
    answer:
      "Ryzup.ai applies machine learning to historical and live finance data to produce forward views for revenue, costs and cash, then keeps forecasts updated as actuals change.",
  },
  {
    question: "Can Ryzup.ai handle multi-entity or multi-currency forecasting?",
    answer:
      "Yes. Ryzup.ai supports consolidated forecasting and multi-currency assumptions common to UAE groups operating across regions.",
  },
  {
    question: "How accurate are forecasts from Ryzup.ai?",
    answer:
      "Accuracy depends on data quality and business volatility. AI models typically reduce manual errors and improve trend detection, with transparent assumptions that finance teams can review and edit.",
  },
  {
    question: "Does Ryzup.ai replace spreadsheets?",
    answer:
      "No. Teams keep familiar Sheets where it helps. Ryzup.ai handles heavy lifting such as refresh, scenarios and presentation so spreadsheets are lighter and more reliable.",
  },
  {
    question: "How quickly can a UAE business get started?",
    answer:
      "Most teams connect data and see a first forecast within days, then refine scenarios for board and planning cycles.",
  },
];

const AiFinancialForecastingUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/uae/ai-financial-forecasting-uae/#faq",
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
          "https://growwthpartners.com/uae/ai-financial-forecasting-uae/#service",
        name: "AI-Powered Financial Forecasting UAE",
        provider: {
          "@type": "Organization",
          name: "Growwth Partners",
        },
        description:
          "Predict cash flow and financial outcomes with AI models. Ryzup.ai delivers scenario planning and risk mitigation for UAE finance teams with live, decision-ready forecasts.",
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
        title="AI Financial Forecasting UAE | Predictive Finance Models"
        description="AI financial forecasting in UAE for accurate cash flow and revenue predictions. Make smarter decisions using predictive finance models."
        keywords="ai financial forecasting uae, ai forecasting dubai, ryzup.ai, predictive models uae, scenario planning, cash flow forecasting"
        canonicalUrl="https://growwthpartners.com/uae/ai-financial-forecasting-uae"
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
          subtitle="Find answers to common questions about AI Financial Forecasting in the UAE"
        />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AiFinancialForecastingUAE;
