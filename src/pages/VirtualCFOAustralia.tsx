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
  const { country } = useCountry();

  // Redirect non-Australia users to their respective home pages
  if (country === "singapore") {
    return <Navigate to="/" replace />;
  }

  if (country === "uae") {
    return <Navigate to="/uae" replace />;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a Virtual CFO / fractional CFO Australia service actually do for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Virtual CFO or fractional CFO Australia service gives you high-level financial leadership without hiring a full-time CFO. Growwth Partner manages cash flow, budgeting, forecasting, reporting, profitability analysis, and strategic decision support so you can scale with clarity and control.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I choose Growwth Partner instead of hiring a full-time CFO in Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hiring a full-time CFO in Australia is expensive. A senior finance leader can easily cost six figures annually. Growwth Partner provides Virtual CFO and fractional CFO Australia support so you get the same strategic guidance at a fraction of the cost, with flexible scope that matches your stage of growth.",
        },
      },
      {
        "@type": "Question",
        name: "Can Growwth Partner help with cash flow and profitability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Growwth Partner builds cash flow projections, tracks burn rate, models 'what happens if' scenarios, and identifies profit leaks across operations, hiring, and marketing spend. The goal of Virtual CFO and fractional CFO Australia support is to move you from reactive survival to confident, proactive planning.",
        },
      },
    ],
    areaServed: "Australia",
    serviceType: "Virtual CFO Services Australia",
    contactPoint: {
      "@type": "ContactPoint",
      email: "jd@growwthpartners.com",
      telephone: "+61 2 8011 4780",
      contactType: "Business Service",
    },
  };

  return (
    <Layout>
      <SEOhelper
        title="Virtual CFO Services Australia | Fractional CFO Support for Australian Businesses | Growwth Partners"
        description="Growwth Partners provides Virtual CFO services Australia businesses trust for cash flow optimization, strategic finance support, and expert CFO guidance without the full-time cost. Book a free consultation today."
        keywords="virtual cfo australia, fractional cfo australia, virtual cfo services australia, outsourced cfo australia"
        canonicalUrl="https://growwthpartners.com/au/virtual-cfo/"
        structuredData={organizationSchema}
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
