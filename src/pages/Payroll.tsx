import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/payroll/HeroSection";
import { IntroSection } from "@/components/payroll/IntroSection";
import { ServicesSection } from "@/components/payroll/ServicesSection";
import { TrustedSection } from "@/components/accounting/TrustedSection";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { motion } from "framer-motion";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const PayrollPage = () => {
  const { country } = useCountry();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://growwthpartners.com/payroll-services-in-singapore/#service",
        name: "Payroll Services in Singapore",
        description:
          "Affordable and easy payroll services designed for small businesses.",
        serviceType: "Payroll Services",
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

  // Redirect non-Singapore users to their respective home pages
  if (country === "uae") {
    return <Navigate to="/uae" replace />;
  }

  if (country === "australia") {
    return <Navigate to="/au" replace />;
  }

  return (
    <Layout>
      <SEOhelper
        title="Payroll Management & Compliance Services | Growwth Partners"
        description="Comprehensive payroll outsourcing in Singapore. Ensure timely salary processing, CPF compliance, and smooth HR operations with expert support."
        keywords="small business payroll, payroll for small business, affordable payroll, small business tax, easy payroll"
        canonicalUrl="https://growwthpartners.com/payroll-services-in-singapore/"
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
        <ServicesSection />
        <TrustedSection />
        <AboutTestimonials />
      </motion.div>
    </Layout>
  );
};

export default PayrollPage;
