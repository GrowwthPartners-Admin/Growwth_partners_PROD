import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiCfoServices/HeroSection";
import WhatIsSection from "@/components/aiCfoServices/WhatIsSection";
import WhoShouldUseSection from "@/components/aiCfoServices/WhoShouldUseSection";
import LimitationsSection from "@/components/aiCfoServices/LimitationsSection";
import WhatYouGetSection from "@/components/aiCfoServices/WhatYouGetSection";
import HowWeDeliverSection from "@/components/aiCfoServices/HowWeDeliverSection";
import WhyChooseSection from "@/components/aiCfoServices/WhyChooseSection";
import UseCaseSection from "@/components/aiCfoServices/UseCaseSection";
import CTASection from "@/components/aiCfoServices/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";

const faqs = [
  {
    question: "How are AI CFO services different from traditional CFO services?",
    answer: "AI CFO services combine CFO expertise with predictive analytics and automation, enabling faster and more accurate decision-making. Unlike traditional CFO services that rely heavily on historical data and manual processes, AI CFO services provide real-time insights, automated reporting, and forward-looking intelligence that helps you make proactive rather than reactive decisions."
  },
  {
    question: "Is AI CFO suitable for SMEs?",
    answer: "Yes. AI CFO services are especially valuable for SMEs seeking enterprise-level financial insight without enterprise-level cost. The automation and efficiency gains from AI-powered finance tools allow smaller businesses to access sophisticated financial analysis and reporting capabilities that were previously only available to larger corporations with dedicated finance teams."
  },
  {
    question: "Do AI CFO services replace human CFOs?",
    answer: "No. AI enhances the CFO's ability to analyse data and make better decisions—it does not replace strategic judgement. Our AI CFO services combine the analytical power of artificial intelligence with the experience, intuition, and strategic thinking of seasoned CFO professionals. The AI handles data processing and pattern recognition, while human experts interpret insights and guide strategic decisions."
  }
];

const AiCfoServices = () => {

   const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ai-cfo-services/#faq",
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
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "AdministrativeArea",
            name: "Singapore",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
            areaServed: "SG",
          },
        ],
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
    <>
      <SEOhelper
        title="AI CFO Services in Singapore | Smart Dashboards & Predictive Forecasts"
        description="AI-enabled reporting, forecasting, cash flow management, and KPI dashboards for fast-scaling companies."
        keywords="AI CFO Singapore, automated reporting, financial dashboards AI, predictive forecasting"
        canonicalUrl="https://growwthpartners.com/ai-cfo-services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoShouldUseSection />
        <LimitationsSection />
        <WhatYouGetSection />
        <HowWeDeliverSection />
        <WhyChooseSection />
        <UseCaseSection />
        <FaqSection
          faqs={faqs}
          subtitle="Find answers to common questions about our AI-powered CFO solutions"
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AiCfoServices;
