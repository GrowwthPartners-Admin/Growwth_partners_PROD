import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/corporatesecretary/HeroSection";
import { EffortlessSection } from "@/components/corporatesecretary/EffortlessSection";
import { HowWeWorkSection } from "@/components/corporatesecretary/HowWeWorkSection";
import { ServicesSection } from "@/components/corporatesecretary/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/corporatesecretary/FaqSection";
import { CaseStudySection } from "@/components/corporatesecretary/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const CorporateSecretaryPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === "uae") {
    return <Navigate to="/uae" replace />;
  }

  if (country === "australia") {
    return <Navigate to="/au" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id":
          "https://growwthpartners.com/corporate-secretarial-services-singapore/#faq",
        name: "Corporate Secretarial Services in Singapore - FAQ",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the scope of services of the company secretary?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A company secretary typically manages board and shareholder meetings, maintains statutory records, ensures regulatory and filing compliance, supports governance and risk management, and advises on corporate procedures.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a Company Secretary cost in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An in-house company secretary can cost between SGD 60,000 to SGD 100,000 annually. Outsourced company secretarial service packages generally range from around SGD 300 to SGD 1,500, depending on scope and complexity.",
            },
          },
          {
            "@type": "Question",
            name: "How do I change my company secretary in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To change your company secretary in Singapore, the new secretary must consent to act (typically via the prescribed form), and the appointment and cessation must be properly lodged with ACRA within the required timelines.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id":
          "https://growwthpartners.com/corporate-secretarial-services-singapore/#service",
        name: "Corporate Secretarial Services in Singapore",
        serviceType: "Corporate Secretary Services",
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
    <Layout>
      <SEOhelper
        title="Corporate Secretary Services in Singapore | Growwth Partners"
        description="Outsource your company secretarial functions to Singapore's trusted experts. Growwth Partners offers full compliance, filing, and advisory services."
        keywords="singapore corporate secretary, company compliance, statutory filing, acra filing"
        canonicalUrl="https://growwthpartners.com/corporate-secretary-services-in-singapore/"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <EffortlessSection />
        <HowWeWorkSection />
        <ServicesSection />
        <TrustedSection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CorporateSecretaryPage;
