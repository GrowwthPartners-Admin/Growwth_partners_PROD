import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/ecommerceFinance/HeroSection";
import WhatIsSection from "@/components/ecommerceFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/ecommerceFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/ecommerceFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/ecommerceFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/ecommerceFinance/WhyChooseSection";
import UseCaseSection from "@/components/ecommerceFinance/UseCaseSection";
import CTASection from "@/components/ecommerceFinance/CTASection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { Layout } from "@/components/Layout";

const faqs = [
  {
    question: "How is ecommerce finance different from regular accounting?",
    answer:
      "Ecommerce finance focuses on SKU-level margins, cash flow timing, platform reconciliations, and marketing ROI—beyond basic accounting. It's specifically designed for the high transaction volumes and complex revenue flows typical of ecommerce businesses.",
  },
  {
    question: "Can ecommerce finance services help with inventory planning?",
    answer:
      "Yes. Inventory planning and cash flow forecasting are core components of ecommerce finance services. We help you optimise working capital, predict restocking needs, and avoid both overstocking and stockouts.",
  },
  {
    question: "Are these services suitable for small ecommerce brands?",
    answer:
      "Yes. Ecommerce finance services scale with order volume and complexity, making them suitable for both growing brands and established businesses. We tailor our approach based on your current stage and growth trajectory.",
  },
];

const EcommerceFinanceServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/ecommerce-finance-services/#faq",
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
          "https://growwthpartners.com/ecommerce-finance-services/#service",
        name: "ecommerce-finance-services",
        serviceType: ["ecommerce-finance-services"],
        description:
          "Ensure compliance with UAE's new corporate tax laws with expert assistance. Growwth Partners provides corporate tax filing in the UAE with SME focused optimisation and FTA aligned reporting.",
        areaServed: ["United Arab Emirates"],
        provider: {
          "@id": "https://growwthpartners.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "jd@growwthpartners.com",
            telephone: "+65 9861 5600",
            contactType: "business",
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
    <Layout>
      <SEOhelper
        title="Ecommerce Finance Services Singapore | Profitability & Cash Flow Experts"
        description="Finance support for ecommerce brands including SKU profitability, cash flow planning, and forecasting."
        keywords="ecommerce finance Singapore, ecommerce CFO, SKU profitability, ecommerce cash flow"
        canonicalUrl="https://growwthpartners.com/ecommerce-finance-services"
        structuredData={structuredData}
      />
      <HeroSection />
      <WhatIsSection />
      <WhoShouldUseSection />
      <ChallengesSection />
      <HowWeDeliverSection />
      <WhyChooseSection />
      <UseCaseSection />
      <FaqSection
        faqs={faqs}
        subtitle="Everything you need to know about Ecommerce Finance Services"
      />
      <CTASection />
    </Layout>
  );
};

export default EcommerceFinanceServices;
