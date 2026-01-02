import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/fractionalCFOUAE/HeroSection";
import { ServicesSection } from "@/components/fractionalCFOUAE/ServicesSection";
import { LeadershipSection } from "@/components/fractionalCFOUAE/LeadershipSection";
import { BigPictureSection } from "@/components/fractionalCFOUAE/BigPictureSection";
import { WhoWeHelpSection } from "@/components/fractionalCFOUAE/WhoWeHelpSection";
import { TestimonialsSection } from "@/components/fractionalCFOUAE/TestimonialsSection";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const FractionalCFOUAEPage = () => {
 const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://growwthpartners.com/fractional-cfo-uae/#faq",
      "name": "Fractional & Outsourced CFO Services in UAE - FAQ",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a Fractional CFO service do for my business in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Fractional CFO or outsourced CFO Dubai service gives you high-level financial leadership without hiring a full-time CFO. Growwth Partners manages cash flow, budgeting, forecasting, reporting, profitability analysis, and strategic decision support so you can scale with clarity and control."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I choose Growwth Partners instead of hiring a full-time CFO in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiring a full-time CFO in the UAE is expensive. A senior finance leader can easily cost six figures annually. Growwth Partners provides Fractional CFO and outsourced CFO Dubai support so you get the same strategic guidance at a fraction of the cost, with flexible scope that matches your stage of growth."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://growwthpartners.com/fractional-cfo-uae/#service",
      "name": "Fractional & Outsourced CFO Services in UAE",
      "serviceType": [
        "Fractional CFO Services",
        "Outsourced CFO Services"
      ],
      "description": "Strategic Fractional and outsourced CFO services for UAE-based businesses, including budgeting, forecasting, cash flow visibility, performance reporting, and investor-ready insights.",
      "areaServed": [
        "United Arab Emirates"
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
        }
      ]
    }
  ]
};

  return (
    <Layout>
      <SEOhelper
        title="Virtual CFO Services UAE | Fractional & Outsourced CFO"
        description="Strategic virtual CFO services UAE for startups and SMEs. Access fractional CFO UAE and outsourced CFO expertise without full-time costs."
        keywords="fractional cfo uae, outsourced cfo dubai, fractional cfo services uae, part time cfo uae"
        canonicalUrl="https://growwthpartners.com/uae/virtual-cfo-services-uae"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <ServicesSection />
        <LeadershipSection />
        <BigPictureSection />
        <WhoWeHelpSection />
        <TestimonialsSection />
      </motion.div>
    </Layout>
  );
};

export default FractionalCFOUAEPage;
