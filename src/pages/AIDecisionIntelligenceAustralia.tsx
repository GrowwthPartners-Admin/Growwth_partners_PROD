import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiDecisionIntelligenceAustralia/HeroSection";
import WhyChooseSection from "@/components/aiDecisionIntelligenceAustralia/WhyChooseSection";
import WhatYouGetSection from "@/components/aiDecisionIntelligenceAustralia/WhatYouGetSection";
import UseCasesSection from "@/components/aiDecisionIntelligenceAustralia/UseCasesSection";
import WhoItsForSection from "@/components/aiDecisionIntelligenceAustralia/WhoItsForSection";
import CTASection from "@/components/aiDecisionIntelligenceAustralia/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question:
      "What does Ryzup.ai provide for AI dashboards for CFOs in Australia?",
    answer:
      "Ryzup.ai delivers real-time executive dashboards, automated analysis, and predictive insights so CFOs can see performance, understand drivers, and act quickly.",
  },
  {
    question: "How do Ryzup.ai dashboards help with decision-making?",
    answer:
      "Ryzup.ai combines live metrics, narrative explanations, and scenario modelling to show what changed, why it changed, and the likely impact on cash and profit.",
  },
  {
    question: "Can Ryzup.ai support multi-entity Australian groups?",
    answer:
      "Yes. Ryzup.ai supports consolidated views, consistent KPIs, and multi-currency reporting so groups can review a single source of truth.",
  },
  {
    question: "Does Ryzup.ai replace spreadsheets?",
    answer:
      "No. Teams keep familiar Sheets where useful. Ryzup.ai automates data refresh, analysis, and forecasting so spreadsheets are lighter and more reliable.",
  },
  {
    question: "How quickly can an Australian CFO get value?",
    answer:
      "Most teams connect data and see first dashboards and forecasts within days, then refine KPIs and scenarios for leadership reviews.",
  },
];

const AIDecisionIntelligenceAustralia = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/au/ai-decision-intelligence-australia/#faq",
        name: "AI Decision Intelligence for CFOs in Australia | Ryzup.ai",
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
          "https://growwthpartners.com/au/ai-decision-intelligence-australia/#service",
        name: "AI Decision Intelligence for CFOs in Australia | Ryzup.ai",
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
          streetAddress: "50 Clarence St",
          addressLocality: "Sydney",
          postalCode: "2000",
          addressCountry: "AU",
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOhelper
        title="AI Decision Intelligence for CFOs in Australia | Ryzup.ai"
        description="Get AI-powered financial dashboards, automated analysis, and predictive insights for CFOs in Australia. Ask questions in plain English and make faster decisions."
        keywords="AI decision intelligence, CFO dashboards Australia, AI financial analysis, predictive insights, finance automation Australia"
        canonicalUrl="https://growwthpartners.com/au/ai-decision-intelligence-australia"
        structuredData={structuredData}
      />
      <HeroSection />
      <WhyChooseSection />
      <WhatYouGetSection />
      <UseCasesSection />
      <WhoItsForSection />
      <FaqSection
        faqs={faqs}
        subtitle="Everything you need to know about AI Decision Intelligence"
      />
      <CTASection />
    </Layout>
  );
};

export default AIDecisionIntelligenceAustralia;
