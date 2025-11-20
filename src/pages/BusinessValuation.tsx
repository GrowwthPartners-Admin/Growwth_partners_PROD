import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/valuation/HeroSection";
import { ServicesSection } from "@/components/valuation/ServicesSection";
import { WhyChooseSection } from "@/components/valuation/WhyChooseSection";
import { WhyMattersSection } from "@/components/valuation/WhyMattersSection";
import { PricingSection } from "@/components/valuation/PricingSection";
import { TestimonialSection } from "@/components/valuation/TestimonialSection";
import { FaqSection } from "@/components/valuation/FaqSection";
import SEOhelper from "@/components/SEOhelper";

const BusinessValuationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://growwthpartners.com/valuation-services-singapore/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is business valuation and why do Singapore companies need it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Business valuation helps determine the true worth of a company. Singapore businesses need accurate business valuation Singapore results for fundraising, shareholder planning, ESOPs, and strategic decisions. A valuation report also gives founders and investors clarity and confidence during negotiations.",
            },
          },
          {
            "@type": "Question",
            name: "How is startup valuation done in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Startup valuation Singapore is usually based on revenue forecasts, growth potential, market size, founder experience, and comparable transactions. For early-stage companies, methods like scorecard valuation, VC method, or simple DCF modelling are often used.",
            },
          },
          {
            "@type": "Question",
            name: "What documents are required for a company valuation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most company valuation services require financial statements, cap table details, shareholding structure, business forecasts, past fundraising documents, and an overview of assets and liabilities. Additional information may be needed for complex models.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between business valuation and equity valuation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Business valuation calculates the value of the entire company. Equity valuation focuses only on shareholder equity or specific share classes. Both are essential during funding rounds, ESOP planning, and M&A discussions.",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://growwthpartners.com/#organization",
        name: "Growwth Partners",
        url: "https://growwthpartners.com",
        areaServed: ["Singapore", "United Arab Emirates", "Australia"],
        serviceArea: [
          {
            "@type": "AdministrativeArea",
            name: "Singapore",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
        ],
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
        title="Business Valuation Services Singapore | Startup & SME Valuation"
        description="Professional business valuation services in Singapore for startups and SMEs. Get investor-ready reports, financial modelling, and valuation support for fundraising, ESOPs, and M&A"
        keywords="business valuation singapore, startup valuation singapore, company valuation services, private company valuation, DCF valuation singapore, M&A valuation, ESOP valuation, fundraising valuation"
        canonicalUrl="https://growwthpartners.com/valuation-services-singapore"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <WhyMattersSection />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
      </motion.div>
    </Layout>
  );
};

export default BusinessValuationPage;
