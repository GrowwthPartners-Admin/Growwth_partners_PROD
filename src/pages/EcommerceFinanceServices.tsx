import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/ecommerceFinance/HeroSection";
import WhatIsSection from "@/components/ecommerceFinance/WhatIsSection";
import WhoShouldUseSection from "@/components/ecommerceFinance/WhoShouldUseSection";
import ChallengesSection from "@/components/ecommerceFinance/ChallengesSection";
import HowWeDeliverSection from "@/components/ecommerceFinance/HowWeDeliverSection";
import WhyChooseSection from "@/components/ecommerceFinance/WhyChooseSection";
import UseCaseSection from "@/components/ecommerceFinance/UseCaseSection";
import FaqSection from "@/components/ecommerceFinance/FaqSection";
import CTASection from "@/components/ecommerceFinance/CTASection";

const EcommerceFinanceServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ecommerce Finance Services",
    "provider": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "description": "Finance support for ecommerce brands including SKU profitability, cash flow planning, and forecasting.",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "serviceType": "Ecommerce Finance",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is ecommerce finance different from regular accounting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ecommerce finance focuses on SKU-level margins, cash flow timing, platform reconciliations, and marketing ROI—beyond basic accounting."
        }
      },
      {
        "@type": "Question",
        "name": "Can ecommerce finance services help with inventory planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Inventory planning and cash flow forecasting are core components of ecommerce finance services."
        }
      },
      {
        "@type": "Question",
        "name": "Are these services suitable for small ecommerce brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Ecommerce finance services scale with order volume and complexity, making them suitable for both growing brands and established businesses."
        }
      }
    ]
  };

  return (
    <>
      <SEOhelper
        title="Ecommerce Finance Services Singapore | Profitability & Cash Flow Experts"
        description="Finance support for ecommerce brands including SKU profitability, cash flow planning, and forecasting."
        keywords="ecommerce finance Singapore, ecommerce CFO, SKU profitability, ecommerce cash flow"
        ogType="website"
        structuredData={[structuredData, faqStructuredData]}
      />
      <HeroSection />
      <WhatIsSection />
      <WhoShouldUseSection />
      <ChallengesSection />
      <HowWeDeliverSection />
      <WhyChooseSection />
      <UseCaseSection />
      <FaqSection />
      <CTASection />
    </>
  );
};

export default EcommerceFinanceServices;
