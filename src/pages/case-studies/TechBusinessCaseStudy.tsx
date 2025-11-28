
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { TechBusinessHero } from "@/components/case-studies/TechBusinessHero";
import { TechBusinessOverview } from "@/components/case-studies/TechBusinessOverview";
import { TechBusinessKeyAchievements } from "@/components/case-studies/TechBusinessKeyAchievements";
import { TechBusinessGoals } from "@/components/case-studies/TechBusinessGoals";
import { TechBusinessChallenges } from "@/components/case-studies/TechBusinessChallenges";
import { TechBusinessGrowwthRole } from "@/components/case-studies/TechBusinessGrowwthRole";
import { TechBusinessKeyTakeaways } from "@/components/case-studies/TechBusinessKeyTakeaways";
import { CaseStudyCta } from "@/components/case-studies/CaseStudyCta";
import { motion } from "framer-motion";
import SEOhelper from "@/components/SEOhelper";

const TechBusinessCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Transforming Financial Reporting for Multi-Country Tech Business Group",
    description: "How Growwth Partners helped a tech business group transform from legacy Excel-based reporting to efficient, data-driven decision-making across 15 businesses in 12+ countries.",
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
        title="Tech Business Transformation Case Study | Growwth Partners"
        description="Discover how Growwth Partners helped a multi-country tech business group achieve 200% faster reporting and 150% increase in investor trust through digital transformation."
        keywords="tech business case study, financial reporting transformation, multi-country reporting, investor relations, KPI tracking"
        canonicalUrl="https://growwthpartners.com/case-studies/tech-business"
        structuredData={techBusinessSchema}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <TechBusinessHero />
        <TechBusinessOverview />
        <TechBusinessKeyAchievements />
        <TechBusinessGoals />
        <TechBusinessChallenges />
        <TechBusinessGrowwthRole />
        <TechBusinessKeyTakeaways />
        <CaseStudyCta />
      </motion.div>
    </Layout>
  );
};

export default TechBusinessCaseStudy;
