import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/strategicCFO/HeroSection";
import { WhyChooseSection } from "@/components/strategicCFO/WhyChooseSection";
import { ServicesSection } from "@/components/strategicCFO/ServicesSection";
import { WhoWeSupport } from "@/components/strategicCFO/WhoWeSupport";
import { ProcessSection } from "@/components/strategicCFO/ProcessSection";
import { WhyGrowwthSection } from "@/components/strategicCFO/WhyGrowwthSection";
import { LeadershipSection } from "@/components/strategicCFO/LeadershipSection";
import { FAQSection } from "@/components/strategicCFO/FAQSection";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const StrategicCFOPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === "uae") {
    return <Navigate to="/uae" replace />;
  }

  if (country === "australia") {
    return <Navigate to="/australia" replace />;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What do you mean by part-time CFO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A part-time CFO is a senior finance leader who joins your business in a flexible capacity. You get cash flow control, investor-ready reporting, and planning support without hiring a permanent executive.",
        },
      },
      {
        "@type": "Question",
        name: "How is Part-time CFO different from accounting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accounting tells you what happened. A CFO tells you what it means and what to do next. We sit with leadership, shape strategy, and influence hiring, pricing, spend, and expansion.",
        },
      },
      {
        "@type": "Question",
        name: "Can Growwth Partners help with fundraising?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We prepare investor-facing finance packs, improve your story, and support you through due diligence.",
        },
      },
    ],
    areaServed: "Singapore",
    serviceType: "Part Time CFO Services",
    contactPoint: {
      "@type": "ContactPoint",
      email: "jd@growwthpartners.com",
      telephone: "+65 9861 5600",
      contactType: "Business Service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 Chulia Street",
      addressLocality: "Singapore",
      addressRegion: "#46-00 OCBC Centre, Singapore 049513",
      postalCode: "049513",
      addressCountry: "SG",
    },
  };

  return (
    <Layout>
      <SEOhelper
        title="Part-Time CFO & Strategic Finance Support For Singapore Businesses | Growwth Partners"
        description="Get board-level financial clarity without hiring a full-time CFO. Expert CFO services in Singapore for startups, SMEs, and growing businesses. Control cash flow and scale with confidence."
        keywords="part-time cfo singapore, strategic finance singapore, cfo services singapore, fractional cfo, outsourced cfo singapore"
        canonicalUrl="https://growwthpartners.com/strategic-finance-singapore/"
        structuredData={organizationSchema}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <WhoWeSupport />
        <ProcessSection />
        <WhyGrowwthSection />
        <LeadershipSection />
        <FAQSection />
      </motion.div>
    </Layout>
  );
};

export default StrategicCFOPage;
