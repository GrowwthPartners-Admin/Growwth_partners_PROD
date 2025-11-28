
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { FinanceHero } from "@/components/case-studies/FinanceHero";
import { FinanceOverview } from "@/components/case-studies/FinanceOverview";
import { FinanceKeyAchievements } from "@/components/case-studies/FinanceKeyAchievements";
import { FinanceChallenges } from "@/components/case-studies/FinanceChallenges";
import { FinanceGrowwthRole } from "@/components/case-studies/FinanceGrowwthRole";
import { FinanceKeyTakeaways } from "@/components/case-studies/FinanceKeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const FinanceCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const financeSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Transforming Financial Forecasting in Retail Fuel Industry - Case Study",
    description: "How Growwth Partners helped a retail fuel industry client develop comprehensive financial forecasts, automated dashboards, and strategic business valuations for sustainable growth.",
    author: {
      "@type": "Organization",
      name: "Growwth Partners"
    },
    publisher: {
      "@type": "Organization",
      name: "Growwth Partners",
      url: "https://growwthpartners.com"
    }
  };

  return (
    <Layout>
      <SEOhelper
        title="Financial Forecasting Case Study | Retail Fuel Industry | Growwth Partners"
        description="Discover how Growwth Partners transformed financial forecasting and business valuation for a retail fuel industry client through data-driven dashboards and automated financial modeling."
        keywords="financial forecasting, business valuation, retail fuel industry, financial modeling, automated dashboards, strategic planning"
        canonicalUrl="https://growwthpartners.com/case-studies/finance-forecasting"
        structuredData={financeSchema}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <FinanceHero />
        <FinanceOverview />
        <FinanceKeyAchievements />
        <FinanceChallenges />
        <FinanceGrowwthRole />
        <FinanceKeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default FinanceCaseStudy;
