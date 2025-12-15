import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/bookkeeping/HeroSection";
import { TrustedSection } from "@/components/bookkeeping/TrustedSection";
import { ServicesSection } from "@/components/bookkeeping/ServicesSection";
import { BestServicesSection } from "@/components/bookkeeping/BestServicesSection";
import { HowWeWorkSection } from "@/components/bookkeeping/HowWeWorkSection";
import { CaseStudySection } from "@/components/bookkeeping/CaseStudySection";
import { ExpertBlogSection } from "@/components/bookkeeping/ExpertBlogSection";
import { CtaSection } from "@/components/bookkeeping/CtaSection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const BookkeepingPage = () => {
  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://growwthpartners.com/bookkeeping-services-in-singapore/#service",
      "name": "Professional Bookkeeping Services in Singapore",
      "serviceType": "Bookkeeping Services",
      "description": "Professional bookkeeping and financial reporting services for growing businesses in Singapore.",
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
      "description": "Expert financial, accounting, and bookkeeping services. CFO, finance and accounting solutions to manage and grow your business efficiently.",
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
        title="Bookkeeping Services in Singapore | Top Virtual Bookkeeping for Startups"
        description="Professional bookkeeping services in Singapore for startups. From virtual bookkeeping services to dedicated bookkeeper services Singapore businesses trust, we offer the best bookkeeping services with accuracy and compliance"
        keywords="bookkeeping services, financial records, transaction management, small business accounting, financial reporting, accounts payable, accounts receivable, bank reconciliation"
        canonicalUrl="https://growwthpartners.com/bookkeeping-services-in-singapore"
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
        <BestServicesSection />
        <HowWeWorkSection />
        <CaseStudySection />
        <ExpertBlogSection />
        <CtaSection />
      </motion.div>
    </Layout>
  );
};

export default BookkeepingPage;
