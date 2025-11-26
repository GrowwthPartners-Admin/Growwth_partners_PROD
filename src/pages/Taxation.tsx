import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/taxation/HeroSection";
import { ComplianceSection } from "@/components/taxation/ComplianceSection";
import { ServiceStagesSection } from "@/components/taxation/ServiceStagesSection";
import { ProcessSection } from "@/components/taxation/ProcessSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { CtaSection } from "@/components/accounting/CtaSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { FaqSection } from "@/components/taxation/FaqSection";
import { ExpertBlogSection } from "@/components/taxation/ExpertBlogSection";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const TaxationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/tax-compliance-services/#faq",
        name: "Tax Compliance Services - FAQ | Growwth Partners",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is tax compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tax compliance involves ensuring that a company adheres to all relevant tax laws and regulations, including accurate reporting and timely payment of taxes.",
            },
          },
          {
            "@type": "Question",
            name: "Why is thorough financial review important for tax compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A thorough financial review ensures your financial statements are accurate, and helps identify discrepancies or errors that could impact tax calculations and compliance.",
            },
          },
          {
            "@type": "Question",
            name: "How does Growwth Partners ensure transparency in tax calculations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We link financials with detailed tax workings, providing a clear audit trail from income and expenses to tax payable so you fully understand how each figure is derived.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/tax-compliance-services/#service",
        name: "Tax & Compliance Services",
        serviceType: ["Tax Compliance Services", "Corporate Tax Advisory"],
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
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
        title="Corporate Taxation & Compliance Services | Growwth Partners"
        description="Expert tax and compliance services in Singapore for businesses of all sizes. Manage GST, corporate tax, and IRAS regulations efficiently."
        keywords="singapore taxation, tax compliance, corporate tax, gst filing"
        canonicalUrl="https://growwthpartners.com/taxation"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <ComplianceSection />
        <ServiceStagesSection />
        <ProcessSection />
        <TrustedSection />
        <CtaSection />
        <ContactTestimonials />
        <FaqSection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default TaxationPage;
