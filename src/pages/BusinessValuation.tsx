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
  return (
    <Layout>
      <SEOhelper
        title="Business Valuation Services in Singapore | Growwth Partners"
        description="Expert business valuation services in Singapore. Get accurate startup valuation, DCF analysis, M&A valuation, and ESOP valuation from experienced CFOs."
        keywords="business valuation singapore, startup valuation singapore, company valuation services, private company valuation, DCF valuation singapore, M&A valuation, ESOP valuation, fundraising valuation"
        canonicalUrl="/valuation-services-singapore"
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
