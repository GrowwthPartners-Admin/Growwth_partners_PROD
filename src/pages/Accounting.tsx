import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/accounting/HeroSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { ServicesSection } from "@/components/accounting/ServicesSection";
import { HowWeWorkSection } from "@/components/accounting/HowWeWorkSection";
import { EndToEndSection } from "@/components/accounting/EndToEndSection";
import { CaseStudySection } from "@/components/accounting/CaseStudySection";
import { ExpertBlogSection } from "@/components/accounting/ExpertBlogSection";
import { FaqSection } from "@/components/accounting/FaqSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const AccountingPage = () => {
  const { country } = useCountry();

  const getLocationName = () => {
    switch (country) {
      case "uae":
        return "UAE";
      case "australia":
        return "Australia";
      default:
        return "Singapore";
    }
  };

  const location = getLocationName();

  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://growwthpartners.com/accounting-services-in-singapore/#service",
      "name": "Accounting Services in Singapore",
      "description": "Professional accounting and financial reporting services for businesses in Singapore.",
      "serviceType": "Accounting Services",
      "provider": {
        "@id": "https://growwthpartners.com/#organization"
      },
      "areaServed": [
        "Singapore",
        "United Arab Emirates",
        "Australia"
      ]
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
          "contactType": "business",
          "areaServed": "SG"
        }
      ],
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
        title="Accounting & Financial Reporting Services | Growwth Partners"
        description="Professional accounting services in Singapore for SMEs and startups.Ensure compliance, accuracy, and clear financial insights with Growwth Partners"
        keywords="accounting services, financial reporting, tax compliance, bookkeeping, growwth partners"
        canonicalUrl="https://growwthpartners.com/accounting-services-in-singapore"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <HowWeWorkSection />
        <EndToEndSection />
        <CaseStudySection />
        <ExpertBlogSection />
        <FaqSection />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default AccountingPage;
