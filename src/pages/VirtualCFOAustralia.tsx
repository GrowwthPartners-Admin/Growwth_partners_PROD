import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/virtualCFOAustralia/HeroSection";
import { IntroSection } from "@/components/virtualCFOAustralia/IntroSection";
import { ServicesHelpSection } from "@/components/virtualCFOAustralia/ServicesHelpSection";
import { OurServicesSection } from "@/components/virtualCFOAustralia/OurServicesSection";
import { BenefitsSection } from "@/components/virtualCFOAustralia/BenefitsSection";
import { OffersSection } from "@/components/virtualCFOAustralia/OffersSection";
import { TestimonialsSection } from "@/components/virtualCFOAustralia/TestimonialsSection";
import { FAQSection } from "@/components/virtualCFOAustralia/FAQSection";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const VirtualCFOAustraliaPage = () => {
  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/virtual-cfo-australia/#faq",
      "name": "Virtual & Fractional CFO Services in Australia - FAQ | Growwth Partners",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Virtual CFO / fractional CFO Australia service actually do for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Virtual CFO or fractional CFO Australia service gives you high-level financial leadership without hiring a full-time CFO. Growwth Partners manages cash flow, budgeting, forecasting, reporting, profitability analysis, and strategic decision support so you can scale with clarity and control."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I choose Growwth Partners instead of hiring a full-time CFO in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiring a full-time CFO in Australia is expensive. A senior finance leader can easily cost six figures annually. Growwth Partners provides Virtual CFO and fractional CFO support so you get the same strategic guidance at a fraction of the cost, with flexible scope that matches your stage of growth."
          }
        },
        {
          "@type": "Question",
          "name": "Can Growwth Partners help with cash flow and profitability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Growwth Partners builds cash flow projections, tracks burn rate, models scenario outcomes, and identifies profit leaks across operations, hiring, and marketing spend—helping you shift from reactive survival to confident, proactive planning."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://growwthpartners.com/virtual-cfo-australia/#service",
      "name": "Virtual & Fractional CFO Services in Australia",
      "serviceType": [
        "Virtual CFO Services",
        "Part Time CFO Services"
      ],
      "areaServed": [
        "Australia"
      ],
      "provider": {
        "@id": "https://growwthpartners.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://growwthpartners.com/#organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "jd@growwthpartners.com",
          "telephone": "+65 9861 5600",
          "contactType": "business"
        },
        
      ],
      address: {
          "@type": "PostalAddress",
          streetAddress: "50 Clarence St",
          addressLocality: "Sydney",
          postalCode: "2000",
          addressCountry: "AU",
        },
    }
  ]
};

  return (
    <Layout>
      <SEOhelper
        title="Virtual CFO Services Australia | Fractional & Outsourced CFO"
        description="Scale smarter with virtual CFO services Australia. Get fractional CFO Australia and outsourced CFO expertise without hiring full-time."
        keywords="virtual cfo australia, fractional cfo australia, virtual cfo services australia, outsourced cfo australia"
        canonicalUrl="https://growwthpartners.com/au/virtual-cfo-services-australia"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <IntroSection />
        <ServicesHelpSection />
        <OurServicesSection />
        <BenefitsSection />
        <OffersSection />
        <TestimonialsSection />
        <FAQSection />
      </motion.div>
    </Layout>
  );
};

export default VirtualCFOAustraliaPage;
