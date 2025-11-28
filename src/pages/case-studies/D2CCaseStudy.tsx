
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { D2CHero } from "@/components/case-studies/D2CHero";
import { D2COverview } from "@/components/case-studies/D2COverview";
import { D2CKeyAchievements } from "@/components/case-studies/D2CKeyAchievements";
import { D2CGoals } from "@/components/case-studies/D2CGoals";
import { D2CChallenges } from "@/components/case-studies/D2CChallenges";
import { D2CGrowwthRole } from "@/components/case-studies/D2CGrowwthRole";
import { D2CKeyTakeaways } from "@/components/case-studies/D2CKeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const D2CCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const d2cSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rapid Expansion into Thailand and Indonesia - D2C Business Case Study",
    description: "How Growwth Partners helped a D2C business navigate complex regulatory landscapes to achieve rapid expansion and sustainable growth in Indonesia and Thailand.",
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
        title="D2C Market Expansion Case Study | Growwth Partners"
        description="Discover how Growwth Partners enabled a D2C business to achieve 25% valuation growth and successful market expansion into Indonesia and Thailand through strategic compliance navigation."
        keywords="D2C case study, market expansion, Indonesia business, Thailand expansion, regulatory compliance, international business growth"
        canonicalUrl="https://growwthpartners.com/case-studies/d2c-expansion"
        structuredData={d2cSchema}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <D2CHero />
        <D2COverview />
        <D2CKeyAchievements />
        <D2CGoals />
        <D2CChallenges />
        <D2CGrowwthRole />
        <D2CKeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default D2CCaseStudy;
