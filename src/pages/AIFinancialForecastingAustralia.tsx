import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";
import { HeroSection } from "@/components/aiFinancialForecastingAustralia/HeroSection";
import { WhyChooseSection } from "@/components/aiFinancialForecastingAustralia/WhyChooseSection";
import { WhatYouGetSection } from "@/components/aiFinancialForecastingAustralia/WhatYouGetSection";
import { UseCasesSection } from "@/components/aiFinancialForecastingAustralia/UseCasesSection";
import { BuiltForSection } from "@/components/aiFinancialForecastingAustralia/BuiltForSection";
import { FAQSection } from "@/components/aiFinancialForecastingAustralia/FAQSection";
import { CTASection } from "@/components/aiFinancialForecastingAustralia/CTASection";

const AIFinancialForecastingAustralia = () => {
  return (
    <Layout>
      <SEOhelper
        title="AI-Powered Financial Forecasting in Australia | Ryzup.ai"
        description="Ryzup.ai brings AI financial forecasting in Australia straight into your finance stack. Generate predictive models in minutes, run scenario simulations, and make data-driven decisions."
        keywords="AI financial forecasting Australia, predictive finance models, scenario simulations, Ryzup.ai, finance automation, CFO tools, cash flow forecasting, runway planning"
        canonicalUrl="/au/ai-financial-forecasting-australia"
      />
      <HeroSection />
      <WhyChooseSection />
      <WhatYouGetSection />
      <UseCasesSection />
      <BuiltForSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default AIFinancialForecastingAustralia;
