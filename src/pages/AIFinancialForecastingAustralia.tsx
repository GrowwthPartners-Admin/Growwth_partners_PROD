import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiFinancialForecastingAustralia/HeroSection";
import { WhyChooseSection } from "@/components/aiFinancialForecastingAustralia/WhyChooseSection";
import { WhatYouGetSection } from "@/components/aiFinancialForecastingAustralia/WhatYouGetSection";
import { UseCasesSection } from "@/components/aiFinancialForecastingAustralia/UseCasesSection";
import { BuiltForSection } from "@/components/aiFinancialForecastingAustralia/BuiltForSection";
import { FAQSection } from "@/components/aiFinancialForecastingAustralia/FAQSection";
import { CTASection } from "@/components/aiFinancialForecastingAustralia/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question:
      "How does Ryzup.ai deliver AI financial forecasting in Australia?",
    answer:
      "Ryzup.ai applies machine learning to historical and live finance data to generate forward views for revenue, costs, and cash, then keeps those forecasts updated as new actuals arrive.",
  },
  {
    question: "Can Ryzup.ai handle multi-entity or multi-currency forecasting?",
    answer:
      "Yes. Ryzup.ai supports multi-entity consolidation and multi-currency assumptions common to Australian companies operating across regions.",
  },
  {
    question: "How accurate are the forecasts produced by Ryzup.ai?",
    answer:
      "Accuracy depends on data quality and business volatility, but AI-driven models typically reduce manual errors and improve trend detection. Assumptions remain transparent and editable.",
  },
  {
    question: "Does Ryzup.ai replace existing spreadsheets?",
    answer:
      "No. Teams keep using familiar Sheets where helpful. Ryzup.ai handles the heavy lifting and automates refresh, scenarios, and presentation.",
  },
  {
    question: "How quickly can an Australian business get started?",
    answer:
      "Most teams connect data and see a first forecast within days, then refine scenarios for board and planning cycles.",
  },
];

const AIFinancialForecastingAustralia = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-financial-forecasting-Australia/#faq",
        "name": "AI Financial Forecasting Australia - FAQ | Growwth Partners",
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
        "@id": "https://growwthpartners.com/ai-financial-forecasting-Australia/#service",
        "name": "AI-Powered Financial Forecasting Australia",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "AI-powered financial forecasting for Australia businesses. Build predictive finance models, scenario planning, and real-time cash flow projections with Ryzup.ai.",
        "areaServed": "Australia"
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
        title="AI-Powered Financial Forecasting in Australia | Ryzup.ai"
        description="Ryzup.ai brings AI financial forecasting in Australia straight into your finance stack. Generate predictive models in minutes, run scenario simulations, and make data-driven decisions."
        keywords="AI financial forecasting Australia, predictive finance models, scenario simulations, Ryzup.ai, finance automation, CFO tools, cash flow forecasting, runway planning"
        canonicalUrl="https://growwthpartners.com/au/ai-financial-forecasting-australia"
        structuredData={structuredData}
      />
      <HeroSection />
      <WhyChooseSection />
      <WhatYouGetSection />
      <UseCasesSection />
      <BuiltForSection />
      <FaqSection
        faqs={faqs}
        subtitle="Find answers to common questions about AI Financial Forecasting in Australia"
      />
      <CTASection />
    </Layout>
  );
};

export default AIFinancialForecastingAustralia;
