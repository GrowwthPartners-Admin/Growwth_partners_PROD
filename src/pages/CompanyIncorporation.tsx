import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/companyincorporation/HeroSection";
import { ExpandBusinessSection } from "@/components/companyincorporation/ExpandBusinessSection";
import { EasyStepsSection } from "@/components/companyincorporation/EasyStepsSection";
import { ServicesSection } from "@/components/companyincorporation/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { FaqSection } from "@/components/companyincorporation/FaqSection";
import { CaseStudySection } from "@/components/companyincorporation/CaseStudySection";
import { ExpertBlogSection } from "@/components/corporatesecretary/ExpertBlogSection";
import LaunchJourneySection from "@/components/companyincorporation/LaunchJourneySection";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const CompanyIncorporationPage = () => {
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
          "https://growwthpartners.com/company-incorporation-singapore/#faq",
        name: "Company Incorporation in Singapore - FAQ",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the price of registering a corporation in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The standard fee for registering a corporation in Singapore is nearly $315.",
            },
          },
          {
            "@type": "Question",
            name: "Why should your company incorporate in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Several individuals choose to incorporate their companies in Singapore because of its attractive tax system, including no tax on capital gains, making it a preferred choice for entrepreneurs and business owners.",
            },
          },
          {
            "@type": "Question",
            name: "Does a Singaporean business need a director who resides there?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, at least one director who resides in Singapore must be appointed in a Singaporean company, as required under Singapore's Companies Act.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id":
          "https://growwthpartners.com/company-incorporation-singapore/#service",
        name: "Company Incorporation Services in Singapore",
        serviceType: "Company Incorporation Services",
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
        title="Company Incorporation in Singapore | Growwth Partners"
        description="Launch your Singapore company with hassle-free incorporation services from industry leaders. Full compliance, smooth process, effective results."
        keywords="singapore company incorporation, business registration, company setup, acra registration"
        canonicalUrl="https://growwthpartners.com/company-incorporation-services-in-singapore/"
        structuredData={structuredData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <ExpandBusinessSection />
        <EasyStepsSection />
        <ServicesSection />
        <TrustedSection />
        <LaunchJourneySection />
        <AboutTestimonials />
        <FaqSection />
        <CaseStudySection />
        <ExpertBlogSection />
      </motion.div>
    </Layout>
  );
};

export default CompanyIncorporationPage;
