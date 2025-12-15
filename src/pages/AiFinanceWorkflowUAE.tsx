import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";
import HeroSection from "@/components/aiFinanceWorkflowUAE/HeroSection";
import WhyAiNowSection from "@/components/aiFinanceWorkflowUAE/WhyAiNowSection";
import HowRyzupIntegratesSection from "@/components/aiFinanceWorkflowUAE/HowRyzupIntegratesSection";
import BuiltForUAESection from "@/components/aiFinanceWorkflowUAE/BuiltForUAESection";
import WhoBenefitsSection from "@/components/aiFinanceWorkflowUAE/WhoBenefitsSection";
import FAQSection from "@/components/aiFinanceWorkflowUAE/FAQSection";
import CTASection from "@/components/aiFinanceWorkflowUAE/CTASection";

const AiFinanceWorkflowUAE = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://growwthpartners.com/uae/ai-finance-workflow-uae/#service",
        "name": "AI Finance Workflow Integration UAE",
        "provider": {
          "@type": "Organization",
          "name": "Growwth Partners"
        },
        "description": "Automate finance processes and boost efficiency with AI. Ryzup.ai helps UAE finance teams integrate AI for faster reporting, accurate reconciliations and real time insights.",
        "areaServed": "UAE"
      },
      {
        "@type": "Organization",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOhelper
        title="AI Finance Workflow Integration UAE | Ryzup.ai"
        description="Automate finance processes and boost efficiency with AI. Ryzup.ai helps UAE finance teams integrate AI for faster reporting, accurate reconciliations and real time insights."
        keywords="ai finance automation uae, finance workflow ai, ryzup.ai, ai finance uae, automated reporting, finance automation dubai"
        canonicalUrl="https://growwthpartners.com/uae/ai-finance-workflow-uae"
        structuredData={structuredData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <HeroSection />
        <WhyAiNowSection />
        <HowRyzupIntegratesSection />
        <BuiltForUAESection />
        <WhoBenefitsSection />
        <FAQSection />
        <CTASection />
      </motion.div>
    </Layout>
  );
};

export default AiFinanceWorkflowUAE;
