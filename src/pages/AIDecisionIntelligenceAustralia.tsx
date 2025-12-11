import { Layout } from '@/components/Layout';
import SEOhelper from '@/components/SEOhelper';
import HeroSection from '@/components/aiDecisionIntelligenceAustralia/HeroSection';
import WhyChooseSection from '@/components/aiDecisionIntelligenceAustralia/WhyChooseSection';
import WhatYouGetSection from '@/components/aiDecisionIntelligenceAustralia/WhatYouGetSection';
import UseCasesSection from '@/components/aiDecisionIntelligenceAustralia/UseCasesSection';
import WhoItsForSection from '@/components/aiDecisionIntelligenceAustralia/WhoItsForSection';
import FAQSection from '@/components/aiDecisionIntelligenceAustralia/FAQSection';
import CTASection from '@/components/aiDecisionIntelligenceAustralia/CTASection';

const AIDecisionIntelligenceAustralia = () => {
  return (
    <Layout>
      <SEOhelper
        title="AI Decision Intelligence for CFOs in Australia | Ryzup.ai"
        description="Get AI-powered financial dashboards, automated analysis, and predictive insights for CFOs in Australia. Ask questions in plain English and make faster decisions."
        keywords="AI decision intelligence, CFO dashboards Australia, AI financial analysis, predictive insights, finance automation Australia"
        canonicalUrl="https://growwthpartners.com/au/ai-decision-intelligence-australia"
      />
      <HeroSection />
      <WhyChooseSection />
      <WhatYouGetSection />
      <UseCasesSection />
      <WhoItsForSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default AIDecisionIntelligenceAustralia;
